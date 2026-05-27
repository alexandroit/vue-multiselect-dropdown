const STYLE_ID = 'stackline-vue-multiselect-dropdown-styles';

const styles = `
.vmsd-root {
  --vmsd-primary: #3f51b5;
  --vmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f7fb;
  --vmsd-surface-muted: #e8eaf6;
  --vmsd-border: #c5cae9;
  --vmsd-border-strong: #7986cb;
  --vmsd-ink: #212121;
  --vmsd-muted: #5f6368;
  --vmsd-chip-bg: #e8eaf6;
  --vmsd-chip-text: #303f9f;
  --vmsd-chip-remove: #303f9f;
  --vmsd-divider: rgba(125, 119, 134, 0.16);
  --vmsd-section-bg: #f5f7fb;
  --vmsd-focus: rgba(63, 81, 181, 0.32);
  --vmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --vmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
  position: relative;
  display: block;
  width: 100%;
  color: var(--vmsd-ink);
  font: inherit;
}

.vmsd-root *,
.vmsd-root *::before,
.vmsd-root *::after,
.vmsd-menu,
.vmsd-menu *,
.vmsd-menu *::before,
.vmsd-menu *::after {
  box-sizing: border-box;
}

.vmsd-trigger {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 56px;
  gap: 8px;
  border: 1px solid var(--vmsd-border);
  border-radius: 18px;
  background-color: var(--vmsd-bg);
  color: var(--vmsd-ink);
  padding: 11px 54px 11px 16px;
  box-shadow: var(--vmsd-shadow-soft);
  text-align: left;
  cursor: pointer;
  line-height: 1.45;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease, transform 160ms ease;
}

.vmsd-trigger:hover {
  border-color: var(--vmsd-border-strong);
}

.vmsd-root[data-open="true"] .vmsd-trigger,
.vmsd-trigger:focus-visible {
  outline: none;
  border-color: var(--vmsd-primary);
  box-shadow: 0 0 0 3px var(--vmsd-focus), var(--vmsd-shadow-soft);
}

.vmsd-trigger.vmsd-disabled {
  cursor: not-allowed;
  opacity: 0.68;
}

.vmsd-value {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.vmsd-placeholder,
.vmsd-single-value {
  min-width: 0;
  color: var(--vmsd-muted);
  font-size: 0.95rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vmsd-single-value {
  color: var(--vmsd-ink);
  font-weight: 500;
}

.vmsd-badge-list {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.vmsd-badge {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-height: 32px;
  max-width: 100%;
  border-radius: 999px;
  background-color: var(--vmsd-chip-bg);
  color: var(--vmsd-chip-text);
  padding: 6px 30px 6px 12px;
  box-shadow: inset 0 0 0 1px rgba(103, 80, 164, 0.08);
  line-height: 1.35;
  white-space: normal;
  overflow-wrap: anywhere;
}

.vmsd-badge-label {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  max-width: 100%;
  line-height: 1.3;
  font-weight: 500;
  white-space: normal;
  overflow-wrap: anywhere;
}

.vmsd-badge-remove,
.vmsd-clear,
.vmsd-search-clear,
.vmsd-arrow-button,
.vmsd-group-action {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0;
}

.vmsd-badge-remove {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-grid;
  width: 16px;
  height: 16px;
  place-items: center;
  transform: translateY(-50%);
  color: var(--vmsd-chip-remove);
  font-size: 12px;
  line-height: 1;
}

.vmsd-overflow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 0;
  color: var(--vmsd-muted);
  font-size: 0.8rem;
  font-weight: 600;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic) .vmsd-trigger {
  padding-right: 104px;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic):not(.vmsd-has-clear) .vmsd-trigger {
  padding-right: 74px;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic) .vmsd-overflow {
  position: absolute;
  top: 50%;
  right: 76px;
  transform: translateY(-50%);
  z-index: 1;
}

.vmsd-root.vmsd-has-overflow:not(.skin-classic):not(.vmsd-has-clear) .vmsd-overflow {
  right: 42px;
}

.vmsd-actions {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transform: translateY(-50%);
}

.vmsd-clear {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--vmsd-muted);
  font-size: 14px;
  line-height: 1;
}

.vmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.vmsd-badge-remove .vmsd-icon {
  width: 10px;
  height: 10px;
}

.vmsd-clear .vmsd-icon {
  width: 12px;
  height: 12px;
}

.vmsd-search-clear .vmsd-icon {
  width: 18px;
  height: 18px;
}

.vmsd-arrow-button {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--vmsd-muted);
}

.vmsd-arrow-button:disabled {
  cursor: not-allowed;
}

.vmsd-badge-remove:focus-visible,
.vmsd-clear:focus-visible,
.vmsd-search-clear:focus-visible,
.vmsd-arrow-button:focus-visible,
.vmsd-group-action:focus-visible,
.vmsd-inline-button:focus-visible {
  outline: 3px solid var(--vmsd-focus);
  outline-offset: 2px;
}

.vmsd-arrow {
  display: inline-flex;
  width: 100%;
  height: 100%;
  line-height: 0;
}

.vmsd-arrow .vmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.vmsd-menu {
  position: absolute;
  left: 0;
  z-index: 99999;
  width: 100%;
  border: 1px solid var(--vmsd-border);
  border-radius: 22px;
  background-color: var(--vmsd-bg);
  box-shadow: var(--vmsd-shadow);
  overflow: hidden;
}

.vmsd-menu.vmsd-body-overlay {
  position: fixed;
  right: auto;
  top: auto;
  bottom: auto;
  max-width: calc(100vw - 16px);
  z-index: 100000;
}

.vmsd-menu.vmsd-bottom {
  top: calc(100% + 8px);
}

.vmsd-menu.vmsd-top {
  bottom: calc(100% + 8px);
}

.vmsd-menu.vmsd-body-overlay.vmsd-bottom,
.vmsd-menu.vmsd-body-overlay.vmsd-top {
  top: auto;
  bottom: auto;
}

.vmsd-toolbar {
  display: grid;
  gap: 0;
  padding: 0;
  background-color: var(--vmsd-bg);
}

.vmsd-search-shell {
  position: relative;
  min-height: 52px;
  border-bottom: 1px solid var(--vmsd-divider);
  background-color: var(--vmsd-bg);
}

.vmsd-search-icon {
  position: absolute;
  top: 50%;
  left: 16px;
  width: 18px;
  height: 18px;
  color: var(--vmsd-muted);
  fill: currentColor;
  pointer-events: none;
  transform: translateY(-50%);
}

.vmsd-search-input {
  width: 100%;
  min-height: 52px;
  border: 0;
  border-radius: 0;
  background-color: var(--vmsd-bg);
  color: var(--vmsd-ink);
  font: inherit;
  padding: 0 44px 0 48px;
}

.vmsd-search-input:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--vmsd-primary);
}

.vmsd-search-clear {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-grid;
  width: 18px;
  height: 18px;
  place-items: center;
  transform: translateY(-50%);
  border-radius: 999px;
  color: var(--vmsd-muted);
}

.vmsd-bulk-actions {
  display: block;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid var(--vmsd-divider);
  background: var(--vmsd-section-bg);
}

.vmsd-inline-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 39px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--vmsd-ink);
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  padding: 10px 14px;
  text-align: left;
}

.vmsd-inline-button:hover {
  background-color: var(--vmsd-surface);
}

.vmsd-inline-button:disabled {
  opacity: 0.58;
  cursor: not-allowed;
}

.vmsd-add-button {
  justify-content: center;
  border-top: 1px solid var(--vmsd-divider);
  color: var(--vmsd-primary);
  font-weight: 700;
}

.vmsd-list {
  max-height: 300px;
  overflow: auto;
  padding: 8px;
  background: var(--vmsd-bg);
  scrollbar-width: thin;
  scrollbar-color: rgba(125, 119, 134, 0.34) transparent;
}

.vmsd-list:focus {
  outline: none;
}

.vmsd-menu ::-webkit-scrollbar {
  width: 10px;
}

.vmsd-menu ::-webkit-scrollbar-thumb {
  background: rgba(125, 119, 134, 0.34);
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: padding-box;
}

.vmsd-menu ::-webkit-scrollbar-track {
  background: transparent;
}

.vmsd-option {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 0;
  margin: 4px;
  padding: 12px 14px;
  border-radius: 14px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  line-height: 1.35;
}

.vmsd-option:hover {
  background-color: var(--vmsd-surface);
}

.vmsd-option:focus-visible {
  outline: 3px solid var(--vmsd-focus);
  outline-offset: 1px;
}

.vmsd-option.vmsd-selected {
  background-color: var(--vmsd-primary-soft);
  color: var(--vmsd-primary);
}

.vmsd-option.vmsd-disabled {
  opacity: 0.54;
  cursor: not-allowed;
}

.vmsd-checkbox {
  position: relative;
  box-sizing: content-box;
  display: inline-grid;
  place-items: center;
  align-self: center;
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 0;
  border: 2px solid var(--vmsd-border-strong);
  border-radius: 6px;
  background-color: var(--vmsd-bg);
  line-height: 0;
  vertical-align: middle;
}

.vmsd-checkbox[data-checked="true"] {
  border-color: var(--vmsd-primary);
  background-color: var(--vmsd-primary);
}

.vmsd-checkbox[data-checked="true"]::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 4px;
  margin-top: 0;
  border-color: #fff;
  border-style: solid;
  border-width: 0 0 2px 2px;
  transform: translate(-50%, -62%) rotate(-45deg);
  transform-origin: 50%;
}

.vmsd-option-body {
  min-width: 0;
  flex: 1;
}

.vmsd-option-label {
  font-weight: 500;
}

.vmsd-option-hint {
  display: block;
  margin-top: 3px;
  color: var(--vmsd-muted);
  font-size: 12px;
}

.vmsd-group {
  margin-bottom: 8px;
}

.vmsd-group:last-child {
  margin-bottom: 0;
}

.vmsd-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 9px 10px;
  color: var(--vmsd-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.vmsd-group-action {
  color: var(--vmsd-primary);
  font-size: 12px;
  font-weight: 800;
}

.vmsd-state {
  padding: 18px 12px;
  text-align: center;
  color: var(--vmsd-muted);
}

.theme-material,
.skin-material {
  --vmsd-primary: #3f51b5;
  --vmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f7fb;
  --vmsd-surface-muted: #e8eaf6;
  --vmsd-border: #c5cae9;
  --vmsd-border-strong: #7986cb;
  --vmsd-ink: #212121;
  --vmsd-muted: #5f6368;
  --vmsd-chip-bg: #e8eaf6;
  --vmsd-chip-text: #303f9f;
  --vmsd-chip-remove: #303f9f;
  --vmsd-divider: rgba(125, 119, 134, 0.16);
  --vmsd-section-bg: #f5f7fb;
  --vmsd-focus: rgba(63, 81, 181, 0.32);
  --vmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --vmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
}

.theme-material .vmsd-trigger,
.skin-material .vmsd-trigger {
  min-height: 56px;
  border-radius: 18px;
  padding: 11px 54px 11px 16px;
}

.theme-material .vmsd-menu,
.skin-material .vmsd-menu,
.vmsd-menu.theme-material,
.vmsd-menu.skin-material {
  border-radius: 22px;
}

.theme-material .vmsd-option,
.skin-material .vmsd-option {
  border-radius: 14px;
  margin: 4px;
  padding: 12px 14px;
}

.theme-dark,
.skin-dark {
  --vmsd-primary: #8ab4f8;
  --vmsd-primary-soft: rgba(138, 180, 248, 0.18);
  --vmsd-bg: #151a23;
  --vmsd-surface: #202736;
  --vmsd-surface-muted: #111722;
  --vmsd-border: #384456;
  --vmsd-border-strong: #8ab4f8;
  --vmsd-ink: #edf2f7;
  --vmsd-muted: #aab6c5;
  --vmsd-chip-bg: #263247;
  --vmsd-chip-text: #d7e6ff;
  --vmsd-chip-remove: #d7e6ff;
  --vmsd-divider: rgba(170, 182, 197, 0.18);
  --vmsd-section-bg: #202736;
  --vmsd-focus: rgba(138, 180, 248, 0.34);
  --vmsd-shadow: 0 20px 50px rgba(0, 0, 0, 0.42);
  --vmsd-shadow-soft: 0 1px 2px rgba(0, 0, 0, 0.45), 0 10px 24px rgba(0, 0, 0, 0.28);
}

.theme-custom,
.skin-custom {
  --vmsd-primary: var(--stackline-ms-primary, #0f766e);
  --vmsd-primary-soft: var(--stackline-ms-primary-soft, rgba(15, 118, 110, 0.14));
  --vmsd-bg: var(--stackline-ms-surface, #ffffff);
  --vmsd-surface: var(--stackline-ms-surface-soft, #ecfdf5);
  --vmsd-surface-muted: var(--stackline-ms-surface-muted, #d1fae5);
  --vmsd-border: var(--stackline-ms-outline, #99f6e4);
  --vmsd-border-strong: var(--stackline-ms-outline-strong, #0f766e);
  --vmsd-ink: var(--stackline-ms-on-surface, #102a2a);
  --vmsd-muted: var(--stackline-ms-on-surface-muted, #47615f);
  --vmsd-chip-bg: var(--stackline-ms-chip-bg, #ccfbf1);
  --vmsd-chip-text: var(--stackline-ms-chip-text, #115e59);
  --vmsd-chip-remove: var(--stackline-ms-chip-remove, #115e59);
  --vmsd-divider: var(--stackline-ms-divider, rgba(15, 118, 110, 0.18));
  --vmsd-section-bg: var(--stackline-ms-section-bg, #ecfdf5);
  --vmsd-focus: var(--stackline-ms-focus, rgba(15, 118, 110, 0.28));
  --vmsd-shadow: var(--stackline-ms-shadow, 0 18px 42px rgba(15, 118, 110, 0.15));
  --vmsd-shadow-soft: var(--stackline-ms-shadow-soft, 0 1px 2px rgba(15, 118, 110, 0.16), 0 8px 18px rgba(15, 118, 110, 0.09));
}

.theme-brand,
.skin-brand {
  --stackline-ms-primary: #7c3aed;
  --stackline-ms-primary-soft: rgba(124, 58, 237, 0.14);
  --stackline-ms-surface: #ffffff;
  --stackline-ms-surface-soft: #f5f3ff;
  --stackline-ms-surface-muted: #ede9fe;
  --stackline-ms-outline: #c4b5fd;
  --stackline-ms-outline-strong: #7c3aed;
  --stackline-ms-on-surface: #22183f;
  --stackline-ms-on-surface-muted: #6b5d80;
  --stackline-ms-chip-bg: #ede9fe;
  --stackline-ms-chip-text: #5b21b6;
  --stackline-ms-chip-remove: #5b21b6;
  --stackline-ms-divider: rgba(124, 58, 237, 0.16);
  --stackline-ms-section-bg: #f5f3ff;
}

.theme-classic,
.skin-classic {
  --vmsd-primary: #0079fe;
  --vmsd-primary-soft: #e9f4ff;
  --vmsd-bg: #ffffff;
  --vmsd-surface: #f5f5f5;
  --vmsd-surface-muted: #e9f4ff;
  --vmsd-border: #cccccc;
  --vmsd-border-strong: #0079fe;
  --vmsd-ink: #333333;
  --vmsd-muted: #333333;
  --vmsd-chip-bg: #0079fe;
  --vmsd-chip-text: #ffffff;
  --vmsd-chip-remove: #ffffff;
  --vmsd-focus: rgba(0, 121, 254, 0.26);
  --vmsd-divider: #cccccc;
  --vmsd-section-bg: #ffffff;
  --vmsd-shadow: 0 1px 5px #959595;
  --vmsd-shadow-soft: 0 1px 5px #959595;
  color: #333333;
}

.theme-classic .vmsd-trigger,
.skin-classic .vmsd-trigger {
  flex-wrap: nowrap;
  gap: 6px;
  min-height: 42px;
  border-radius: 3px;
  padding: 10px 68px 10px 10px;
  border: 1px solid #cccccc;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
  color: #333333;
  font-size: 14px;
  line-height: 1.35;
}

.theme-classic .vmsd-trigger:hover,
.skin-classic .vmsd-trigger:hover,
.theme-classic[data-open="true"] .vmsd-trigger,
.skin-classic[data-open="true"] .vmsd-trigger {
  border-color: #cccccc;
  box-shadow: 0 1px 5px #959595;
}

.theme-classic .vmsd-trigger.vmsd-disabled,
.skin-classic .vmsd-trigger.vmsd-disabled {
  background: #cccccc;
  opacity: 1;
}

.theme-classic .vmsd-placeholder,
.theme-classic .vmsd-single-value,
.skin-classic .vmsd-placeholder,
.skin-classic .vmsd-single-value {
  color: #333333;
  font-size: 14px;
}

.theme-classic .vmsd-value,
.theme-classic .vmsd-badge-list,
.skin-classic .vmsd-value,
.skin-classic .vmsd-badge-list {
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  min-width: 0;
}

.theme-classic .vmsd-badge,
.skin-classic .vmsd-badge {
  display: inline-block;
  min-height: 0;
  margin: 2px 0 0;
  border-radius: 2px;
  padding: 2px 24px 2px 6px;
  box-shadow: none;
  color: #ffffff;
  line-height: 1.4;
}

.theme-classic .vmsd-badge-label,
.skin-classic .vmsd-badge-label {
  display: inline;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

.theme-classic .vmsd-badge-remove,
.skin-classic .vmsd-badge-remove {
  right: 5px;
  width: 14px;
  height: 14px;
  color: #ffffff;
}

.theme-classic .vmsd-badge-remove .vmsd-icon,
.skin-classic .vmsd-badge-remove .vmsd-icon {
  width: 9px;
  height: 9px;
}

.theme-classic .vmsd-overflow,
.skin-classic .vmsd-overflow {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
}

.theme-classic .vmsd-actions,
.skin-classic .vmsd-actions {
  right: 10px;
  gap: 12px;
}

.theme-classic .vmsd-clear,
.skin-classic .vmsd-clear {
  width: 18px;
  height: 18px;
  color: #333333;
}

.theme-classic .vmsd-clear .vmsd-icon,
.skin-classic .vmsd-clear .vmsd-icon {
  width: 11px;
  height: 11px;
}

.theme-classic .vmsd-arrow-button,
.skin-classic .vmsd-arrow-button {
  width: 20px;
  height: 20px;
  color: #333333;
}

.theme-classic .vmsd-menu,
.skin-classic .vmsd-menu,
.vmsd-menu.theme-classic,
.vmsd-menu.skin-classic {
  overflow: visible;
  border: 1px solid #cccccc;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
}

.vmsd-menu.theme-classic.vmsd-bottom,
.vmsd-menu.skin-classic.vmsd-bottom {
  top: calc(100% + 14px);
}

.vmsd-menu.theme-classic.vmsd-top,
.vmsd-menu.skin-classic.vmsd-top {
  bottom: calc(100% + 14px);
}

.vmsd-menu.vmsd-body-overlay.vmsd-bottom,
.vmsd-menu.vmsd-body-overlay.vmsd-top {
  bottom: auto;
}

.vmsd-menu.theme-classic::before,
.vmsd-menu.theme-classic::after,
.vmsd-menu.skin-classic::before,
.vmsd-menu.skin-classic::after {
  content: "";
  position: absolute;
  left: 15px;
  width: 0;
  height: 0;
  border-right: 13px solid transparent;
  border-left: 13px solid transparent;
}

.vmsd-menu.theme-classic.vmsd-bottom::before,
.vmsd-menu.skin-classic.vmsd-bottom::before {
  top: -15px;
  border-bottom: 15px solid #cccccc;
}

.vmsd-menu.theme-classic.vmsd-bottom::after,
.vmsd-menu.skin-classic.vmsd-bottom::after {
  top: -14px;
  border-bottom: 15px solid #ffffff;
}

.vmsd-menu.theme-classic.vmsd-top::before,
.vmsd-menu.skin-classic.vmsd-top::before {
  bottom: -15px;
  border-top: 15px solid #cccccc;
}

.vmsd-menu.theme-classic.vmsd-top::after,
.vmsd-menu.skin-classic.vmsd-top::after {
  bottom: -14px;
  border-top: 15px solid #ffffff;
}

.theme-classic .vmsd-toolbar,
.skin-classic .vmsd-toolbar,
.vmsd-menu.theme-classic .vmsd-toolbar,
.vmsd-menu.skin-classic .vmsd-toolbar {
  gap: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .vmsd-search-shell,
.skin-classic .vmsd-search-shell,
.vmsd-menu.theme-classic .vmsd-search-shell,
.vmsd-menu.skin-classic .vmsd-search-shell {
  min-height: 35px;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .vmsd-search-icon,
.skin-classic .vmsd-search-icon,
.vmsd-menu.theme-classic .vmsd-search-icon,
.vmsd-menu.skin-classic .vmsd-search-icon {
  left: 13px;
  width: 18px;
  height: 18px;
}

.theme-classic .vmsd-search-input,
.skin-classic .vmsd-search-input,
.vmsd-menu.theme-classic .vmsd-search-input,
.vmsd-menu.skin-classic .vmsd-search-input {
  min-height: 35px;
  height: 35px;
  padding: 0 35px;
  border: 0;
  color: #333333;
}

.theme-classic .vmsd-search-input:focus,
.skin-classic .vmsd-search-input:focus,
.vmsd-menu.theme-classic .vmsd-search-input:focus,
.vmsd-menu.skin-classic .vmsd-search-input:focus {
  box-shadow: none;
}

.theme-classic .vmsd-search-clear,
.skin-classic .vmsd-search-clear,
.vmsd-menu.theme-classic .vmsd-search-clear,
.vmsd-menu.skin-classic .vmsd-search-clear {
  right: 13px;
}

.theme-classic .vmsd-bulk-actions,
.skin-classic .vmsd-bulk-actions,
.vmsd-menu.theme-classic .vmsd-bulk-actions,
.vmsd-menu.skin-classic .vmsd-bulk-actions {
  border-top: 0;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .vmsd-inline-button,
.skin-classic .vmsd-inline-button,
.vmsd-menu.theme-classic .vmsd-inline-button,
.vmsd-menu.skin-classic .vmsd-inline-button {
  min-height: 35px;
  border-radius: 0;
  color: #333333;
  font-weight: 400;
  padding: 10px;
}

.theme-classic .vmsd-inline-button:hover,
.skin-classic .vmsd-inline-button:hover,
.vmsd-menu.theme-classic .vmsd-inline-button:hover,
.vmsd-menu.skin-classic .vmsd-inline-button:hover {
  background: #f5f5f5;
}

.theme-classic .vmsd-list,
.skin-classic .vmsd-list,
.vmsd-menu.theme-classic .vmsd-list,
.vmsd-menu.skin-classic .vmsd-list {
  margin: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .vmsd-option,
.skin-classic .vmsd-option,
.vmsd-menu.theme-classic .vmsd-option,
.vmsd-menu.skin-classic .vmsd-option {
  border-radius: 0;
  margin: 0;
  padding: 10px;
  color: #333333;
  line-height: 1.35;
}

.theme-classic .vmsd-option:hover,
.skin-classic .vmsd-option:hover,
.vmsd-menu.theme-classic .vmsd-option:hover,
.vmsd-menu.skin-classic .vmsd-option:hover {
  background: #f5f5f5;
}

.theme-classic .vmsd-option.vmsd-selected,
.skin-classic .vmsd-option.vmsd-selected,
.vmsd-menu.theme-classic .vmsd-option.vmsd-selected,
.vmsd-menu.skin-classic .vmsd-option.vmsd-selected {
  background: #e9f4ff;
  color: #333333;
}

.theme-classic .vmsd-checkbox,
.skin-classic .vmsd-checkbox,
.vmsd-menu.theme-classic .vmsd-checkbox,
.vmsd-menu.skin-classic .vmsd-checkbox {
  width: 14px;
  height: 14px;
  border: 2px solid #0079fe;
  border-radius: 0;
  background: #ffffff;
}

.theme-classic .vmsd-checkbox[data-checked="true"],
.skin-classic .vmsd-checkbox[data-checked="true"],
.vmsd-menu.theme-classic .vmsd-checkbox[data-checked="true"],
.vmsd-menu.skin-classic .vmsd-checkbox[data-checked="true"] {
  border-color: #0079fe;
  background: #0079fe;
}

.theme-classic .vmsd-checkbox[data-checked="true"]::after,
.skin-classic .vmsd-checkbox[data-checked="true"]::after,
.vmsd-menu.theme-classic .vmsd-checkbox[data-checked="true"]::after,
.vmsd-menu.skin-classic .vmsd-checkbox[data-checked="true"]::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 3px;
  margin-top: 0;
  border-width: 0 0 3px 3px;
  transform: translate(-50%, -62%) rotate(-45deg);
}

.theme-classic .vmsd-option-label,
.skin-classic .vmsd-option-label,
.vmsd-menu.theme-classic .vmsd-option-label,
.vmsd-menu.skin-classic .vmsd-option-label {
  color: #000000;
  font-weight: 300;
}

.theme-classic .vmsd-group-header,
.skin-classic .vmsd-group-header,
.vmsd-menu.theme-classic .vmsd-group-header,
.vmsd-menu.skin-classic .vmsd-group-header {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: capitalize;
}

.custom-class-example {
  --vmsd-primary: #0f766e;
  --vmsd-primary-soft: #ccfbf1;
  --vmsd-bg: #f8fffd;
  --vmsd-surface: #ecfdf5;
  --vmsd-border: #99f6e4;
  --vmsd-border-strong: #0f766e;
}

@media (max-width: 720px) {
  .vmsd-trigger {
    align-items: flex-start;
    padding-right: 54px;
  }
}

/* stackline-vue3-live-20260527 */
`;

export function ensureDropdownStyles() {
  if (typeof document === 'undefined') {
    return;
  }

  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const tag = document.createElement('style');
  tag.id = STYLE_ID;
  tag.textContent = styles;
  document.head.appendChild(tag);
}
