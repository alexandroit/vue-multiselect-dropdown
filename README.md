# @stackline/vue-multiselect-dropdown

> A maintained Vue 2 multiselect dropdown with controlled state, searchable/grouped options, lazy loading hooks, render functions, skins, body-overlay positioning, and ADA-friendly keyboard/ARIA behavior.

[![npm version](https://img.shields.io/npm/v/@stackline/vue-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/vue-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@stackline/vue-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/vue-multiselect-dropdown/blob/main/LICENSE)
[![Vue 2](https://img.shields.io/badge/Vue-2.x-42b883?style=flat-square&logo=vue.js)](https://alexandro.net/docs/vue/multiselect/vue-2/)

**[Documentation & Live Demos](https://alexandro.net/docs/vue/multiselect/)** | **[Vue 2 Demo](https://alexandro.net/docs/vue/multiselect/vue-2/)** | **[npm](https://www.npmjs.com/package/@stackline/vue-multiselect-dropdown)** | **[Repository](https://github.com/alexandroit/vue-multiselect-dropdown)**

**Current validation package release:** `2.0.0` for Vue `2.x`

---

## Why this library?

`@stackline/vue-multiselect-dropdown` provides a maintained Vue 2 multiselect component for applications that need predictable selection state, search, grouping, skins, keyboard support, and live tested examples.

The package follows a familiar Stackline settings contract while staying idiomatic for Vue 2: bind with `v-model`, pass `:data`, customize behavior through `:settings`, and listen for `@select`, `@de-select`, `@select-all`, `@de-select-all`, `@open`, and `@close`.

## Vue Version Compatibility

| Package family | Vue family | Peer range | First tested runtime | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **2.x** | **Vue 2 only** | **`>=2.0.0 <3.0.0`** | **2.0.0** | [Vue 2 family docs](https://alexandro.net/docs/vue/multiselect/vue-2/) |

## Installation

```bash
npm install @stackline/vue-multiselect-dropdown@2.0.0 --save-exact
```

## Setup

```js
import Vue from 'vue';
import {
  VueMultiselect,
  VueMultiselectDropdown
} from '@stackline/vue-multiselect-dropdown';

Vue.use(VueMultiselect);

new Vue({
  el: '#app',
  components: { VueMultiselectDropdown },
  data() {
    return {
      countries: [
        { id: 1, itemName: 'Brazil' },
        { id: 2, itemName: 'Canada' },
        { id: 3, itemName: 'Portugal' }
      ],
      selectedCountries: [],
      settings: {
        text: 'Select countries',
        enableSearchFilter: true,
        primaryKey: 'id',
        labelKey: 'itemName',
        badgeShowLimit: 3,
        skin: 'classic'
      }
    };
  }
});
```

```html
<vue-multiselect-dropdown
  :data="countries"
  v-model="selectedCountries"
  :settings="settings"
/>
```

## Skins

Use `settings.skin` for `classic`, `material`, `dark`, `custom`, and `brand`.

`settings.theme` is accepted only as a compatibility alias. Prefer `settings.skin` in new code.

## Dialogs and Overflow Containers

Use `appendToBody: true` or `tagToBody: true` when the dropdown is inside dialogs, modals, drawers, or containers that set `overflow: hidden` or `overflow: auto`.

```js
settings: {
  text: 'Dialog dropdown',
  enableSearchFilter: true,
  skin: 'material',
  appendToBody: true,
  tagToBody: true,
  autoPosition: true
}
```

With body overlay enabled, the open panel is moved to `document.body`, aligned to the original trigger, sized to the trigger, recalculated on open, scroll, resize, and selection changes, then restored and cleaned up when the dropdown closes or unmounts.

## Events

- `input`
- `change`
- `select`
- `de-select`
- `select-all`
- `de-select-all`
- `group-select`
- `group-de-select`
- `scroll-to-end`
- `add-filter-new-item`
- `open`
- `close`

## Instance Methods

```js
this.$refs.dropdown.openDropdown();
this.$refs.dropdown.closeDropdown();
this.$refs.dropdown.focusSearch();
this.$refs.dropdown.selectAll();
this.$refs.dropdown.clearSelection();
```

## Run Locally

```bash
npm install
npm run build
npm test
```

Vue 2 docs:

```bash
cd docs-src/vue-2
npm install
npm run build
```

## License

MIT
