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
  assert.match(source, /\.skin-material/);
  assert.match(source, /\.skin-dark/);
  assert.match(source, /\.vmsd-value \{[\s\S]*min-height: 1\.45em;/);
  assert.match(source, /\.vmsd-overflow \{[\s\S]*flex: 0 0 auto;[\s\S]*white-space: nowrap;/);
  assert.match(source, /\.vmsd-checkbox\[data-checked="true"\]::after \{[\s\S]*translate\(-50%, -58%\) rotate\(-45deg\);/);
});

test("keyboard smoke: option activation is not double handled", () => {
  const source = fs.readFileSync(path.join(repoRoot, "src/VueMultiselectDropdown.ts"), "utf8");
  assert.match(source, /function isActivationKey/);
  assert.ok(source.includes("event.key === 'Spacebar'"));
  assert.ok(source.includes("event.stopPropagation();\n        const activeItem"));
});

test("combobox contract smoke: Vue exposes checked state and configurable keyboard", () => {
  const source = fs.readFileSync(path.join(repoRoot, "src/VueMultiselectDropdown.ts"), "utf8");
  assert.match(source, /aria-checked/);
  assert.match(source, /aria-activedescendant/);
  assert.match(source, /backspaceRemovesLastWhenSearchEmpty/);
  assert.match(source, /deleteRemovesFocusedBadge/);
  assert.match(source, /spaceOptionAction/);
});

test("renderless smoke: composable exports prop bags", () => {
  const source = fs.readFileSync(path.join(repoRoot, "src/composables.ts"), "utf8");
  assert.match(source, /useMultiSelectDropdown/);
  assert.match(source, /getTriggerProps/);
  assert.match(source, /getListboxProps/);
  assert.match(source, /getOptionProps/);
  assert.match(source, /aria-checked/);
});

test("single-selection contract keeps the active item selected", () => {
  const componentSource = fs.readFileSync(path.join(repoRoot, "src/VueMultiselectDropdown.ts"), "utf8");
  const composableSource = fs.readFileSync(path.join(repoRoot, "src/composables.ts"), "utf8");

  assert.match(componentSource, /if \(exists\) \{\s+if \(this\.resolvedSettings\.singleSelection\) \{\s+this\.closeDropdown\(\);\s+return;\s+\}/);
  assert.match(composableSource, /if \(isSelected\(item\)\) \{\s+if \(settings\.value\.singleSelection\) \{\s+return;\s+\}/);
  assert.match(composableSource, /const activateOption = \(option: DropdownOptionState<T>\) => \{[\s\S]*state\.toggleItem\(option\.item\);[\s\S]*if \(state\.settings\.value\.singleSelection\) \{\s+close\(\);/);
});
