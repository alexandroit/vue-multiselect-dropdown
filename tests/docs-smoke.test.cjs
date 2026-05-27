const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");

test("docs smoke: Vue 3 index", () => {
  const html = fs.readFileSync(path.join(repoRoot, "docs-src/vue-3/index.html"), "utf8");
  assert.match(html, /meta name="viewport"/i);
  assert.match(html, /@stackline\/vue-multiselect-dropdown/);
  assert.match(html, /Vue 3 docs/);
});

test("skin smoke: package styles", () => {
  const source = fs.readFileSync(path.join(repoRoot, "src/styles.ts"), "utf8");
  assert.match(source, /stackline-vue3-live-20260527/);
  assert.match(source, /\.skin-material/);
  assert.match(source, /\.skin-dark/);
  assert.match(source, /\.vmsd-checkbox \{[\s\S]*place-items: center;/);
});

test("keyboard smoke: option activation is not double handled", () => {
  const source = fs.readFileSync(path.join(repoRoot, "src/VueMultiselectDropdown.ts"), "utf8");
  assert.match(source, /function isActivationKey/);
  assert.ok(source.includes("event.key === 'Spacebar'"));
  assert.ok(source.includes("event.stopPropagation();\n        const activeItem"));
});
