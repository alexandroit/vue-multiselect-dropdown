const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const repoRoot = path.resolve(__dirname, '..');

function assertPublicApi(library) {
  assert.ok(library.VueMultiselectDropdown, 'VueMultiselectDropdown is missing.');
  assert.ok(library.StacklineVueMultiselect, 'StacklineVueMultiselect is missing.');
  assert.ok(library.VueMultiselect, 'VueMultiselect plugin is missing.');

  for (const exportName of [
    'createVueMultiselectDropdown',
    'defineSettings',
    'defineSlots',
    'useMultiSelectDropdown',
    'useMultiSelectState'
  ]) {
    assert.equal(typeof library[exportName], 'function', `${exportName} is not callable.`);
  }
}

test('CommonJS distribution exposes the public API', () => {
  assertPublicApi(require(path.join(repoRoot, 'dist', 'index.cjs')));
});

test('ES module distribution exposes the public API', async () => {
  assertPublicApi(await import(path.join(repoRoot, 'dist', 'index.js')));
});

test('package metadata preserves Vue 3 compatibility', () => {
  const packageJson = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));

  assert.equal(packageJson.exports['.'].import.default, './dist/index.js');
  assert.equal(packageJson.exports['.'].import.types, './dist/index.d.ts');
  assert.equal(packageJson.exports['.'].require.default, './dist/index.cjs');
  assert.equal(packageJson.exports['.'].require.types, './dist/index.d.cts');
  assert.equal(packageJson.peerDependencies.vue, '>=3.0.0 <4.0.0');
  assert.equal(packageJson.sideEffects, false);
  assert.equal(packageJson.dependencies, undefined);
});
