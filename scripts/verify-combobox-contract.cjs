#!/usr/bin/env node

const { spawn } = require('node:child_process');
const fs = require('node:fs');
const net = require('node:net');
const path = require('node:path');
const puppeteer = require('puppeteer-core');

const repoRoot = path.resolve(__dirname, '..');
const appDir = path.join(repoRoot, 'docs-src', 'vue-3');
const explicitUrl = process.env.STACKLINE_COMBOBOX_URL;
const chromeCandidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function findChrome() {
  const executable = chromeCandidates.find((candidate) => fs.existsSync(candidate));
  assert(executable, 'Chrome/Chromium executable was not found.');
  return executable;
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitForHttp(url, server) {
  const startedAt = Date.now();
  let lastError;

  while (Date.now() - startedAt < 30_000) {
    if (server?.exitCode != null) {
      throw new Error(`Vite exited before serving ${url}.`);
    }

    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for ${url}: ${lastError?.message || 'no response'}`);
}

async function startVite() {
  if (explicitUrl) {
    return { url: explicitUrl, stop: async () => undefined };
  }

  const port = await getFreePort();
  const url = `http://127.0.0.1:${port}/`;
  const viteBin = path.join(appDir, 'node_modules', 'vite', 'bin', 'vite.js');
  assert(fs.existsSync(viteBin), `Vite was not found at ${viteBin}. Run npm install in ${appDir}.`);

  const server = spawn(process.execPath, [viteBin, '--host', '127.0.0.1', '--port', String(port)], {
    cwd: appDir,
    stdio: ['ignore', 'pipe', 'pipe']
  });

  await waitForHttp(url, server);

  return {
    url,
    stop: async () => {
      if (server.exitCode != null) {
        return;
      }

      server.kill('SIGTERM');
      await new Promise((resolve) => {
        const timeout = setTimeout(resolve, 2_000);
        server.once('exit', () => {
          clearTimeout(timeout);
          resolve();
        });
      });

      if (server.exitCode == null) {
        server.kill('SIGKILL');
      }
    }
  };
}

async function optionState(page, text) {
  return page.evaluate((expectedText) => {
    const option = Array.from(document.querySelectorAll('.vmsd-option'))
      .find((element) => element.textContent?.includes(expectedText));

    return option ? {
      ariaSelected: option.getAttribute('aria-selected'),
      ariaChecked: option.getAttribute('aria-checked'),
      role: option.getAttribute('role'),
      active: option === document.activeElement
    } : null;
  }, text);
}

async function run() {
  const vite = await startVite();
  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });

    const pageErrors = [];
    const failedResponses = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedResponses.push(`${response.status()} ${response.url()}`);
      }
    });

    const response = await page.goto(`${vite.url}#/basic`, { waitUntil: 'networkidle0' });
    assert(response?.ok(), `Docs returned HTTP ${response?.status()}.`);
    await page.waitForSelector('.preview-card .vmsd-trigger', { visible: true });

    const packageText = await page.evaluate(() => document.body.textContent || '');
    assert(packageText.includes('3.1.5'), 'Docs did not load the 3.1.5 package line.');

    await page.click('.preview-card .vmsd-trigger');
    await page.waitForSelector('.vmsd-menu .vmsd-option', { visible: true });

    const triggerContract = await page.evaluate(() => {
      const trigger = document.querySelector('.preview-card .vmsd-trigger');
      return {
        expanded: trigger?.getAttribute('aria-expanded'),
        hasPopup: trigger?.getAttribute('aria-haspopup')
      };
    });
    assert(triggerContract.expanded === 'true', 'Trigger did not expose aria-expanded=true.');
    assert(triggerContract.hasPopup === 'listbox', 'Trigger did not expose aria-haspopup=listbox.');

    const targetText = 'Argentina';
    let state = await optionState(page, targetText);
    assert(state, `Could not find ${targetText}.`);
    assert(state.role === 'option', `${targetText} did not expose role=option.`);
    assert(state.ariaSelected === state.ariaChecked, `${targetText} has mismatched selected/checked ARIA state.`);

    const spaceTargetText = 'Brazil';
    state = await optionState(page, spaceTargetText);
    assert(state?.ariaSelected === 'true', `${spaceTargetText} was not initially selected.`);
    await page.evaluate((expectedText) => {
      const option = Array.from(document.querySelectorAll('.vmsd-option'))
        .find((element) => element.textContent?.includes(expectedText));
      option?.focus();
    }, spaceTargetText);

    const spaceHandled = await page.evaluate(() => {
      const event = new KeyboardEvent('keydown', {
        key: ' ',
        code: 'Space',
        bubbles: true,
        cancelable: true
      });
      document.activeElement?.dispatchEvent(event);
      return event.defaultPrevented;
    });
    assert(spaceHandled, 'Space keyboard event was not handled by the active option.');
    await page.waitForFunction((expectedText) => {
      const option = Array.from(document.querySelectorAll('.vmsd-option'))
        .find((element) => element.textContent?.includes(expectedText));
      return option?.getAttribute('aria-selected') === 'false';
    }, {}, spaceTargetText);

    state = await optionState(page, spaceTargetText);
    assert(state.active, 'Space selection moved focus away from the active option.');
    assert(state.ariaChecked === 'false', 'Deselected option did not expose aria-checked=false.');
    await new Promise((resolve) => setTimeout(resolve, 250));

    const optionHandles = await page.$$('.vmsd-option');
    let targetHandle;
    for (const handle of optionHandles) {
      const text = await handle.evaluate((element) => element.textContent || '');
      if (text.includes(targetText)) {
        targetHandle = handle;
        break;
      }
    }
    assert(targetHandle, `Could not click ${targetText}.`);
    await targetHandle.evaluate((element) => element.scrollIntoView({ block: 'center' }));
    await targetHandle.click();

    await page.waitForFunction((expectedText) => {
      const option = Array.from(document.querySelectorAll('.vmsd-option'))
        .find((element) => element.textContent?.includes(expectedText));
      return option?.getAttribute('aria-selected') === 'true';
    }, {}, targetText);

    state = await optionState(page, targetText);
    assert(state.active, 'Mouse selection did not keep focus on the selected option.');
    assert(state.ariaChecked === 'true', 'Selected option did not expose aria-checked=true.');

    await page.evaluate(() => new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    }));
    state = await optionState(page, targetText);
    assert(state.active, 'Reactive model update did not preserve option focus.');

    const escapeHandled = await page.evaluate(() => {
      const event = new KeyboardEvent('keydown', {
        key: 'Escape',
        code: 'Escape',
        bubbles: true,
        cancelable: true
      });
      document.activeElement?.dispatchEvent(event);
      return event.defaultPrevented;
    });
    assert(escapeHandled, 'Escape keyboard event was not handled by the active option.');
    await page.waitForFunction(() => {
      const trigger = document.querySelector('.preview-card .vmsd-trigger');
      const menu = document.querySelector('.vmsd-menu');
      const menuHidden = !menu || menu.hidden || getComputedStyle(menu).display === 'none';
      return trigger?.getAttribute('aria-expanded') === 'false' && menuHidden;
    });
    assert(pageErrors.length === 0, `Page errors: ${pageErrors.join('; ')}`);
    assert(failedResponses.length === 0, `Failed responses: ${failedResponses.join('; ')}`);

    console.log('Vue combobox contract verified: trigger ARIA, option state, focus, Space, and Escape.');
  } finally {
    await browser.close();
    await vite.stop();
  }
}

run().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});
