import { computed, createApp, nextTick, ref, version as vueVersion } from 'vue/dist/vue.esm-bundler.js';
import { VueMultiselectDropdown, useMultiSelectDropdown, useMultiSelectState } from '@stackline/vue-multiselect-dropdown';
import 'flag-icons/css/flag-icons.min.css';
import './styles.css';

const PACKAGE_VERSION = '3.1.0';
const VUE_RUNTIME = vueVersion;
const STACKBLITZ_PROJECT_URL = 'https://stackblitz.com/github/alexandroit/stackline-vue-multiselect-vue-3';
const skins = ['classic', 'material', 'dark', 'custom', 'brand'];
const keyboardFeatures = [
  { key: 'space', label: 'Space' },
  { key: 'tab', label: 'Tab' },
  { key: 'arrows', label: 'Arrows' },
  { key: 'escape', label: 'Escape' },
  { key: 'backspaceRemovesLastWhenSearchEmpty', label: 'Empty search Backspace' },
  { key: 'deleteRemovesFocusedBadge', label: 'Focused badge Delete' }
];
const spaceOptionActions = [
  {
    key: 'toggle',
    label: 'Toggle current',
    description: 'Space toggles the focused option and keeps focus there.'
  },
  {
    key: 'toggle-and-next',
    label: 'Toggle + next',
    description: 'Space toggles the focused option and moves to the next enabled option.'
  }
];

const countrySeeds = [
  ['Brazil', 'BR', 'Brasilia', 'South America', 'Americas'],
  ['Canada', 'CA', 'Ottawa', 'North America', 'Americas'],
  ['Portugal', 'PT', 'Lisbon', 'Southern Europe', 'Europe'],
  ['Argentina', 'AR', 'Buenos Aires', 'South America', 'Americas'],
  ['Germany', 'DE', 'Berlin', 'Western Europe', 'Europe'],
  ['Mexico', 'MX', 'Mexico City', 'North America', 'Americas'],
  ['Colombia', 'CO', 'Bogota', 'South America', 'Americas'],
  ['Uruguay', 'UY', 'Montevideo', 'South America', 'Americas'],
  ['Costa Rica', 'CR', 'San Jose', 'Central America', 'Americas'],
  ['Chile', 'CL', 'Santiago', 'South America', 'Americas'],
  ['Peru', 'PE', 'Lima', 'South America', 'Americas'],
  ['Ecuador', 'EC', 'Quito', 'South America', 'Americas'],
  ['Panama', 'PA', 'Panama City', 'Central America', 'Americas'],
  ['Dominican Republic', 'DO', 'Santo Domingo', 'Caribbean', 'Americas'],
  ['Jamaica', 'JM', 'Kingston', 'Caribbean', 'Americas'],
  ['Bahamas', 'BS', 'Nassau', 'Caribbean', 'Americas'],
  ['Barbados', 'BB', 'Bridgetown', 'Caribbean', 'Americas'],
  ['Belize', 'BZ', 'Belmopan', 'Central America', 'Americas'],
  ['Paraguay', 'PY', 'Asuncion', 'South America', 'Americas'],
  ['Ireland', 'IE', 'Dublin', 'Northern Europe', 'Europe'],
  ['Spain', 'ES', 'Madrid', 'Southern Europe', 'Europe'],
  ['France', 'FR', 'Paris', 'Western Europe', 'Europe'],
  ['Italy', 'IT', 'Rome', 'Southern Europe', 'Europe'],
  ['Netherlands', 'NL', 'Amsterdam', 'Western Europe', 'Europe'],
  ['Belgium', 'BE', 'Brussels', 'Western Europe', 'Europe'],
  ['Switzerland', 'CH', 'Bern', 'Western Europe', 'Europe'],
  ['Austria', 'AT', 'Vienna', 'Western Europe', 'Europe'],
  ['Sweden', 'SE', 'Stockholm', 'Northern Europe', 'Europe'],
  ['Norway', 'NO', 'Oslo', 'Northern Europe', 'Europe'],
  ['Denmark', 'DK', 'Copenhagen', 'Northern Europe', 'Europe'],
  ['Finland', 'FI', 'Helsinki', 'Northern Europe', 'Europe'],
  ['Iceland', 'IS', 'Reykjavik', 'Northern Europe', 'Europe'],
  ['Czech Republic', 'CZ', 'Prague', 'Central Europe', 'Europe'],
  ['Slovakia', 'SK', 'Bratislava', 'Central Europe', 'Europe'],
  ['Slovenia', 'SI', 'Ljubljana', 'Southern Europe', 'Europe'],
  ['Croatia', 'HR', 'Zagreb', 'Southern Europe', 'Europe'],
  ['Greece', 'GR', 'Athens', 'Southern Europe', 'Europe'],
  ['Malta', 'MT', 'Valletta', 'Southern Europe', 'Europe'],
  ['Luxembourg', 'LU', 'Luxembourg', 'Western Europe', 'Europe'],
  ['Estonia', 'EE', 'Tallinn', 'Northern Europe', 'Europe'],
  ['South Africa', 'ZA', 'Pretoria', 'Southern Africa', 'Africa'],
  ['Kenya', 'KE', 'Nairobi', 'East Africa', 'Africa'],
  ['Ghana', 'GH', 'Accra', 'West Africa', 'Africa'],
  ['Botswana', 'BW', 'Gaborone', 'Southern Africa', 'Africa'],
  ['Namibia', 'NA', 'Windhoek', 'Southern Africa', 'Africa'],
  ['Rwanda', 'RW', 'Kigali', 'East Africa', 'Africa'],
  ['Tanzania', 'TZ', 'Dodoma', 'East Africa', 'Africa'],
  ['Senegal', 'SN', 'Dakar', 'West Africa', 'Africa'],
  ['Mauritius', 'MU', 'Port Louis', 'East Africa', 'Africa'],
  ['Seychelles', 'SC', 'Victoria', 'East Africa', 'Africa'],
  ['Cabo Verde', 'CV', 'Praia', 'West Africa', 'Africa'],
  ['Japan', 'JP', 'Tokyo', 'East Asia', 'Asia'],
  ['Singapore', 'SG', 'Singapore', 'Southeast Asia', 'Asia'],
  ['Malaysia', 'MY', 'Kuala Lumpur', 'Southeast Asia', 'Asia'],
  ['Thailand', 'TH', 'Bangkok', 'Southeast Asia', 'Asia'],
  ['Indonesia', 'ID', 'Jakarta', 'Southeast Asia', 'Asia'],
  ['Philippines', 'PH', 'Manila', 'Southeast Asia', 'Asia'],
  ['Nepal', 'NP', 'Kathmandu', 'South Asia', 'Asia'],
  ['Bhutan', 'BT', 'Thimphu', 'South Asia', 'Asia'],
  ['Sri Lanka', 'LK', 'Sri Jayawardenepura Kotte', 'South Asia', 'Asia'],
  ['Australia', 'AU', 'Canberra', 'Oceania', 'Oceania'],
  ['New Zealand', 'NZ', 'Wellington', 'Oceania', 'Oceania'],
  ['Fiji', 'FJ', 'Suva', 'Oceania', 'Oceania'],
  ['Samoa', 'WS', 'Apia', 'Oceania', 'Oceania']
];

const countries = countrySeeds.map(([itemName, name, capital, region, category], index) => ({
  id: index + 1,
  itemName,
  name,
  flag: name,
  capital,
  region,
  category,
  disabled: itemName === 'Costa Rica'
}));

const overlayCountries = [
  { id: 42, itemName: 'Canada', name: 'CA', flag: 'CA', capital: 'Ottawa', region: 'North America' },
  { id: 43, itemName: 'Brazil', name: 'BR', flag: 'BR', capital: 'Brasilia', region: 'South America' },
  { id: 44, itemName: 'Mexico', name: 'MX', flag: 'MX', capital: 'Mexico City', region: 'North America' },
  { id: 45, itemName: 'Argentina', name: 'AR', flag: 'AR', capital: 'Buenos Aires', region: 'South America' }
];

const templateItems = [
  { id: 1, itemName: 'Revenue', detail: 'Finance metric', color: '#2563eb' },
  { id: 2, itemName: 'Retention', detail: 'Customer metric', color: '#0f766e' },
  { id: 3, itemName: 'Risk', detail: 'Operations metric', color: '#b45309' },
  { id: 4, itemName: 'Quality', detail: 'Product metric', color: '#7c3aed' },
  { id: 5, itemName: 'Support', detail: 'Service metric', color: '#dc2626' }
];

const skills = [
  { id: 1, itemName: 'Node.js', category: 'Backend' },
  { id: 2, itemName: 'Vue', category: 'Framework' },
  { id: 3, itemName: 'JavaScript', category: 'Language' },
  { id: 4, itemName: 'TypeScript', category: 'Language' },
  { id: 5, itemName: 'HTML', category: 'Web' },
  { id: 6, itemName: 'CSS', category: 'Web' }
];

const largeList = Array.from({ length: 140 }, (_, index) => ({
  id: index + 1,
  itemName: `Person ${index + 1}`,
  name: `Person ${index + 1}`,
  region: ['Brazilian', 'Canadian', 'Mexican', 'Colombian'][index % 4]
}));

function labelFor(skin) {
  return skin.charAt(0).toUpperCase() + skin.slice(1);
}

function itemLabel(item) {
  if (item && typeof item === 'object' && item.itemName) {
    return String(item.itemName);
  }
  return JSON.stringify(item);
}

function flagClass(code) {
  return code ? `country-flag fi fi-${String(code).toLowerCase()}` : 'country-flag';
}

function stackblitzUrl(slug) {
  const routeSlug = slug || 'basic';
  const file = encodeURIComponent(`src/examples/${routeSlug}/${routeSlug}.component.vue`);
  return `${STACKBLITZ_PROJECT_URL}?file=${file}&startScript=start&initialpath=%2F${routeSlug}`;
}

function jsValue(value) {
  if (typeof value === 'string') {
    return "'" + value.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  if (Array.isArray(value)) {
    return '[' + value.map(jsValue).join(', ') + ']';
  }
  if (value && typeof value === 'object') {
    return jsObject(value);
  }
  return 'null';
}

function jsObject(item) {
  return '{ ' + Object.keys(item).map((key) => `${key}: ${jsValue(item[key])}`).join(', ') + ' }';
}

function jsArray(items) {
  if (!items.length) {
    return '[]';
  }
  return '[\n' + items.map((item) => '  ' + jsObject(item)).join(',\n') + '\n]';
}

function formatOptions(options) {
  const entries = Object.entries(options).filter(([, value]) => value !== undefined);
  if (!entries.length) {
    return '{}';
  }
  return '{ ' + entries.map(([key, value]) => `${key}: ${jsValue(value)}`).join(', ') + ' }';
}

function makeSettings(skin, text, options = {}) {
  return Object.assign({
    singleSelection: false,
    text,
    selectAllText: 'Select all',
    enableCheckAll: true,
    enableSearchFilter: true,
    searchPlaceholderText: 'Search',
    badgeShowLimit: 2,
    maxHeight: 220,
    showCheckbox: true,
    noDataLabel: 'No data',
    clearAll: true,
    primaryKey: 'id',
    labelKey: 'itemName',
    skin
  }, options);
}

function caseDef(skin, number, id, title, dataName, data, selectedName, settingsName, initialSelected, text, options = {}, extra = {}) {
  return Object.assign({
    id: `${skin}-${id}`,
    number,
    title,
    dataName,
    data,
    selectedName,
    settingsName,
    eventPrefix: `${skin} ${id}`,
    initialSelected,
    settings: makeSettings(skin, text, options),
    optionsText: formatOptions(options)
  }, extra);
}

function buildSkinCases(skin) {
  return [
    caseDef(skin, '01', 'basic', 'Basic multi', 'countries', countries, `${skin}BasicSelected`, `${skin}BasicSettings`, countries.slice(0, 3), 'Basic multi', { badgeShowLimit: 3, enableSearchFilter: false }),
    caseDef(skin, '02', 'search', 'Search + select all', 'countries', countries, `${skin}SearchSelected`, `${skin}SearchSettings`, countries.slice(1, 3), `${labelFor(skin)} searchable`, { badgeShowLimit: 3 }),
    caseDef(skin, '03', 'single', 'Single without checkbox', 'countries', countries, `${skin}SingleSelected`, `${skin}SingleSettings`, countries.slice(0, 1), `${labelFor(skin)} single`, { singleSelection: true, showCheckbox: false, enableCheckAll: false }),
    caseDef(skin, '04', 'no-checkbox', 'Multi without checkbox', 'countries', countries, `${skin}NoCheckboxSelected`, `${skin}NoCheckboxSettings`, countries.slice(2, 4), `${labelFor(skin)} no checkbox`, { showCheckbox: false }),
    caseDef(skin, '05', 'limit', 'Selection limit', 'countries', countries, `${skin}LimitSelected`, `${skin}LimitSettings`, countries.slice(0, 2), `${labelFor(skin)} limit two`, { limitSelection: 2, badgeShowLimit: 2 }),
    caseDef(skin, '06', 'badge', 'Badge overflow', 'countries', countries, `${skin}BadgeSelected`, `${skin}BadgeSettings`, countries.slice(0, 5), `${labelFor(skin)} badge limit`, { badgeShowLimit: 2 }),
    caseDef(skin, '07', 'grouped', 'Grouped by region', 'countries', countries, `${skin}GroupedSelected`, `${skin}GroupedSettings`, [countries[0], countries[4]], `${labelFor(skin)} grouped`, { groupBy: 'region', selectGroup: true }),
    caseDef(skin, '08', 'disabled', 'Disabled with value', 'countries', countries, `${skin}DisabledSelected`, `${skin}DisabledSettings`, countries.slice(0, 1), `${labelFor(skin)} disabled`, { disabled: true }),
    caseDef(skin, '09', 'empty', 'Empty data', 'emptyItems', [], `${skin}EmptySelected`, `${skin}EmptySettings`, [], `${labelFor(skin)} empty`, { noDataLabel: 'No options available' }),
    caseDef(skin, '10', 'scroll', 'Long list with scroll', 'largeList', largeList, `${skin}ScrollSelected`, `${skin}ScrollSettings`, largeList.slice(0, 3), `${labelFor(skin)} scroll`, { maxHeight: 140, badgeShowLimit: 3 }),
    caseDef(skin, '11', 'lazy', 'Local lazy loading', 'lazyPeople', largeList.slice(0, 30), `${skin}LazySelected`, `${skin}LazySettings`, [], `${labelFor(skin)} lazy`, { lazyLoading: true, maxHeight: 140, badgeShowLimit: 3 }, { note: 'Adds 20 rows when the list reaches the end.' }),
    caseDef(skin, '12', 'template', 'Item + chip render functions', 'templateItems', templateItems, `${skin}TemplateSelected`, `${skin}TemplateSettings`, templateItems.slice(0, 2), `${labelFor(skin)} render`, { badgeShowLimit: 3 }, { template: true })
  ];
}

function templateCode(test) {
  const renderProps = test.template ? ['  :render-item="renderOption"', '  :render-badge="renderBadge"'] : [];
  const lazy = test.note ? ['  @scroll-to-end="appendNextChunk"'] : [];
  return [
    '<vue-multiselect-dropdown',
    `  :data="${test.dataName}"`,
    `  v-model="${test.selectedName}"`,
    `  :settings="${test.settingsName}"`,
    `  @select="record('${test.eventPrefix} select', $event)"`,
    `  @de-select="record('${test.eventPrefix} deselect', $event)"`,
    ...lazy,
    ...renderProps,
    '/>'
  ].join('\n');
}

function jsCode(test, selected) {
  return [
    `${test.selectedName}: ${jsArray(selected)},`,
    '',
    `${test.settingsName}: makeSettings('${test.settings.skin}', '${test.settings.text}', ${test.optionsText}),`,
    '',
    'methods: {',
    '  record(type, value) {',
    '    events.unshift(`${type}: ${itemLabel(value)}`);',
    '  }',
    '}'
  ].join('\n');
}

function jsonCode(test, selected, settings) {
  return JSON.stringify({
    data: test.dataName,
    selected,
    settings
  }, null, 2);
}

const DemoCase = {
  components: { VueMultiselectDropdown },
  props: {
    test: { type: Object, required: true }
  },
  data() {
    return {
      selected: this.test.initialSelected.slice(),
      localData: this.test.data.slice(),
      disabled: false
    };
  },
  computed: {
    actualSettings() {
      return Object.assign({}, this.test.settings, this.test.allowDisabledToggle ? { disabled: this.disabled } : {});
    },
    templateSnippet() {
      return templateCode(this.test);
    },
    jsSnippet() {
      return jsCode(this.test, this.selected);
    },
    jsonSnippet() {
      return jsonCode(this.test, this.selected, this.actualSettings);
    },
    displayTitle() {
      return this.test.hideTitle !== true;
    },
    directRouteSlug() {
      const slug = String(this.test.id).replace(/^(classic|material|dark|custom|brand)-/, '');
      const routeMap = {
        basic: 'basic',
        search: 'search-filter',
        single: 'single-selection',
        'no-checkbox': 'styling',
        limit: 'limit-selection',
        badge: 'limit-badges',
        grouped: 'group-by',
        disabled: 'disabled',
        empty: 'styling',
        scroll: 'virtual-scrolling',
        lazy: 'lazy-loading-api',
        template: 'templating',
        dialog: 'dialog',
        'body-overlay-auto': 'body-overlay-auto'
      };
      return routeMap[slug] || slug;
    },
    stackblitzRouteUrl() {
      return stackblitzUrl(this.directRouteSlug);
    },
    validationMessage() {
      if (!this.test.formValidation) {
        return '';
      }
      return this.selected.length ? 'Valid selection.' : 'Select at least one skill.';
    }
  },
  methods: {
    itemLabel,
    flagClass,
    updateSelection(items) {
      this.selected = items;
      this.record(this.test.eventPrefix + ' change', items);
    },
    record(type, value) {
      const label = Array.isArray(value) ? `${value.length} items` : itemLabel(value);
      this.$emit('record', `${type}: ${label}`);
    },
    appendNextChunk(payload) {
      if (!this.test.note) {
        return;
      }
      const next = largeList.slice(this.localData.length, this.localData.length + 20);
      if (next.length) {
        this.localData = this.localData.concat(next);
        this.record(this.test.eventPrefix + ' lazy', `${next.length} rows`);
      } else {
        this.record(this.test.eventPrefix + ' lazy', 'no more rows');
      }
    },
    addFilterItem(query, item) {
      this.localData = this.localData.concat(item);
      this.record(this.test.eventPrefix + ' created', query);
    },
    renderOption(item, context, h) {
      return h('span', { class: 'option-row' }, [
        item.flag ? h('span', { class: flagClass(item.flag), attrs: { 'aria-hidden': 'true' } }) : null,
        h('span', { class: 'swatch', style: { backgroundColor: item.color || '#2563eb' } }),
        h('span', [
          h('strong', [context.label]),
          h('small', [item.detail || item.capital || item.region || ''])
        ])
      ]);
    },
    renderBadge(item, context, h) {
      return h('span', { class: 'swatch-chip' }, [
        item.flag ? h('span', { class: flagClass(item.flag), attrs: { 'aria-hidden': 'true' } }) : null,
        h('span', { class: 'swatch', style: { backgroundColor: item.color || '#2563eb' } }),
        context.label
      ]);
    },
    openDropdown() {
      this.$refs.dropdown.openDropdown();
    },
    closeDropdown() {
      this.$refs.dropdown.closeDropdown();
    },
    focusSearch() {
      this.$refs.dropdown.focusSearch();
    },
    selectAll() {
      this.$refs.dropdown.selectAll();
    },
    clearSelection() {
      this.$refs.dropdown.clearSelection();
    }
  },
  template: `
    <article :class="'example-row' + (test.overflow ? ' overflow-example-row' : '')">
      <div class="demo-cell">
        <div v-if="displayTitle || test.allowDisabledToggle" class="case-title-row">
          <h3 v-if="displayTitle">{{ test.number ? test.number + '. ' : '' }}{{ test.title }}</h3>
          <button v-if="test.allowDisabledToggle" class="small-button" type="button" @click="disabled = !disabled">{{ disabled ? 'Enable' : 'Disable' }}</button>
        </div>
        <a class="stackblitz-row-link" :href="stackblitzRouteUrl" target="_blank" rel="noopener">Open in StackBlitz</a>
        <div v-if="test.methods" class="method-bar">
          <button type="button" @click="openDropdown">Open</button>
          <button type="button" @click="closeDropdown">Close</button>
          <button type="button" @click="focusSearch">Focus search</button>
          <button type="button" @click="selectAll">Select all</button>
          <button type="button" @click="clearSelection">Clear</button>
        </div>
        <div v-if="test.overflow" class="overflow-dialog-frame">
          <div class="demo-dialog-surface">
            <div class="dialog-copy">
              <strong>Simulated dialog surface</strong>
              <span>overflow hidden, stacking context, and a dropdown near the edge.</span>
            </div>
            <vue-multiselect-dropdown
              ref="dropdown"
              :data="localData"
              v-model="selected"
              :settings="actualSettings"
              :render-item="test.template ? renderOption : null"
              :render-badge="test.template ? renderBadge : null"
              @change="updateSelection"
              @select="record(test.eventPrefix + ' select', $event)"
              @de-select="record(test.eventPrefix + ' deselect', $event)"
              @select-all="record(test.eventPrefix + ' selectAll', $event)"
              @de-select-all="record(test.eventPrefix + ' deselectAll', $event)"
              @scroll-to-end="appendNextChunk"
              @add-filter-new-item="addFilterItem"
            />
          </div>
        </div>
        <vue-multiselect-dropdown
          v-else-if="test.scopedSlots"
          ref="dropdown"
          :data="localData"
          v-model="selected"
          :settings="actualSettings"
          @change="updateSelection"
          @select="record(test.eventPrefix + ' select', $event)"
          @de-select="record(test.eventPrefix + ' deselect', $event)"
          @select-all="record(test.eventPrefix + ' selectAll', $event)"
          @de-select-all="record(test.eventPrefix + ' deselectAll', $event)"
        >
          <template #option="{ item, label, selected, ariaSelected, ariaChecked, toggle }">
            <button class="slot-option" type="button" :aria-pressed="selected" @click.stop="toggle">
              <span :class="flagClass(item.flag)" aria-hidden="true"></span>
              <span><strong>{{ label }}</strong><small>{{ item.capital }} · {{ item.region }}</small></span>
              <code>{{ ariaSelected }}/{{ ariaChecked }}</code>
            </button>
          </template>
          <template #badge="{ item, label, remove }">
            <span class="slot-chip">
              <span :class="flagClass(item.flag)" aria-hidden="true"></span>
              {{ label }}
              <button type="button" @click.stop="remove">×</button>
            </span>
          </template>
          <template #menu-footer="{ selected }">
            <div class="slot-footer">{{ selected.length }} selected through scoped slots</div>
          </template>
        </vue-multiselect-dropdown>
        <vue-multiselect-dropdown
          v-else
          ref="dropdown"
          :data="localData"
          v-model="selected"
          :settings="actualSettings"
          :render-item="test.template ? renderOption : null"
          :render-badge="test.template ? renderBadge : null"
          @change="updateSelection"
          @select="record(test.eventPrefix + ' select', $event)"
          @de-select="record(test.eventPrefix + ' deselect', $event)"
          @select-all="record(test.eventPrefix + ' selectAll', $event)"
          @de-select-all="record(test.eventPrefix + ' deselectAll', $event)"
          @scroll-to-end="appendNextChunk"
          @add-filter-new-item="addFilterItem"
        />
        <p v-if="test.formValidation" :class="selected.length ? 'validation ok' : 'validation'">{{ validationMessage }}</p>
        <p v-if="test.note" class="settings-preview">{{ test.note }}</p>
        <p v-if="test.overflow" class="settings-preview">tagToBody: true | appendToBody: true</p>
      </div>
      <div class="code-card"><strong>Template</strong><pre>{{ templateSnippet }}</pre></div>
      <div class="code-card"><strong>JS</strong><pre>{{ jsSnippet }}</pre></div>
      <div class="code-card"><strong>JSON</strong><pre>{{ jsonSnippet }}</pre></div>
    </article>
  `
};

const classicCases = buildSkinCases('classic');
const materialCases = buildSkinCases('material');

function createTest(slug, title, options = {}) {
  const skin = options.skin || 'classic';
  const data = options.data || countries;
  const selected = options.selected || data.slice(0, 2);
  return caseDef(
    skin,
    options.number || '01',
    slug,
    title,
    options.dataName || 'countries',
    data,
    options.selectedName || slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()) + 'Selected',
    options.settingsName || slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()) + 'Settings',
    selected,
    options.text || title,
    options.settings || {},
    options.extra || {}
  );
}

const routeDefinitions = [
  {
    slug: 'basic',
    title: 'Basic usage',
    eyebrow: 'Basic',
    description: 'Classic multi-select with chips, clear all, and selected counters.',
    tests: [classicCases[0]]
  },
  {
    slug: 'keyboard-contract',
    title: 'Keyboard contract',
    eyebrow: 'Accessibility',
    description: 'Keyboard behavior is explicit: Space, Tab, arrows, Escape, and Backspace/Delete stay predictable.',
    tests: [createTest('keyboard-contract', 'Keyboard behavior switches', {
      selected: countries.slice(0, 3),
      settings: {
        enableSearchFilter: true,
        badgeShowLimit: 3,
        keyboard: {
          space: true,
          spaceOptionAction: 'toggle',
          tab: true,
          arrows: true,
          escape: true,
          backspaceRemovesLastWhenSearchEmpty: false,
          deleteRemovesFocusedBadge: true
        }
      }
    })]
  },
  {
    slug: 'aria-state',
    title: 'ARIA state audit',
    eyebrow: 'Accessibility',
    description: 'Option rows expose matching aria-selected and aria-checked states for multiselect announcement.',
    tests: [createTest('aria-state', 'ARIA selected + checked state', {
      selected: countries.slice(0, 2),
      settings: { enableSearchFilter: true, badgeShowLimit: 3 }
    })]
  },
  {
    slug: 'headless-aria',
    title: 'Headless + ARIA',
    eyebrow: 'Headless',
    description: 'Use the renderless composable for fully custom Vue HTML while preserving Stackline ARIA prop bags.',
    kind: 'headless'
  },
  {
    slug: 'state-hook',
    title: 'State hook',
    eyebrow: 'Composable',
    description: 'Vue uses a composable state layer for controlled selection, filtering, grouping, and event callbacks.',
    tests: [createTest('state-hook', 'useMultiSelectState equivalent', {
      selected: countries.slice(1, 4),
      settings: { enableSearchFilter: true, groupBy: 'region', badgeShowLimit: 3 }
    })]
  },
  {
    slug: 'slots-api',
    title: 'Slots API',
    eyebrow: 'Customization',
    description: 'Scoped slots customize options, badges, and menu footer while the package keeps behavior and ARIA.',
    tests: [createTest('slots-api', 'Scoped slots', {
      selected: countries.slice(0, 3),
      settings: { enableSearchFilter: true, badgeShowLimit: 3 },
      extra: { scopedSlots: true }
    })]
  },
  {
    slug: 'type-safe-factory',
    title: 'Type-safe factory',
    eyebrow: 'Advanced API',
    description: 'The package exports helper APIs for typed settings and renderless usage in Vue projects.',
    tests: [createTest('type-safe-factory', 'defineSettings helper shape', {
      selected: countries.slice(2, 4),
      settings: { enableSearchFilter: true, searchBy: ['itemName', 'capital'], badgeShowLimit: 3 },
      extra: { note: 'Use defineSettings / createVueMultiselectDropdown in typed Vue applications.' }
    })]
  },
  {
    slug: 'async-object-preservation',
    title: 'Async object preservation',
    eyebrow: 'Async data',
    description: 'Selected object values remain stable when later data pages or async requests refresh options.',
    tests: [createTest('async-object-preservation', 'Async object preservation', {
      selected: countries.slice(0, 3),
      settings: { enableSearchFilter: true, lazyLoading: true, badgeShowLimit: 3 },
      extra: { note: 'Selected objects are preserved by primaryKey while data changes.' }
    })]
  },
  { slug: 'single-selection', title: 'Single selection', eyebrow: 'Selection', description: 'Single selection mode without checkboxes.', tests: [classicCases[2]] },
  { slug: 'search-filter', title: 'Search filter', eyebrow: 'Search', description: 'Client-side search over object labels.', tests: [classicCases[1]] },
  { slug: 'custom-search-api', title: 'Custom search from API', eyebrow: 'Search', description: 'Search flow prepared for remote APIs and late results.', tests: [createTest('custom-search-api', 'Custom search from API', { selected: countries.slice(0, 1), settings: { enableSearchFilter: true, badgeShowLimit: 3 }, extra: { note: 'Use search events and async data replacement for remote API search.' } })] },
  { slug: 'search-filter-by-property', title: 'Search filter by property', eyebrow: 'Search', description: 'Search by multiple object properties instead of a single label.', tests: [createTest('search-filter-by-property', 'Search by itemName and capital', { selected: countries.slice(4, 6), settings: { enableSearchFilter: true, searchBy: ['itemName', 'capital', 'region'], badgeShowLimit: 3 } })] },
  { slug: 'search-add-new-item', title: 'Search and Add New Item', eyebrow: 'Creation', description: 'Let users create an option from filter text.', tests: [createTest('search-add-new-item', 'Search and add item', { data: countries.slice(0, 4), selected: countries.slice(0, 2), settings: { addNewItemOnFilter: true, addNewButtonText: 'Add country', badgeShowLimit: 3 } })] },
  { slug: 'group-by', title: 'Group By', eyebrow: 'Grouping', description: 'Group object data by any configured field.', tests: [classicCases[6]] },
  { slug: 'templating', title: 'Templating', eyebrow: 'Rendering', description: 'Custom option and chip render functions for Vue render-function users.', tests: [classicCases[11]] },
  { slug: 'template-driven-forms', title: 'Template-style forms', eyebrow: 'Forms', description: 'Use v-model in a template-style form and derive validation from selected objects.', tests: [createTest('template-driven-forms', 'Template-style form validation', { dataName: 'skills', data: skills, selected: [], settings: { groupBy: 'category', badgeShowLimit: 3 }, extra: { formValidation: true } })] },
  { slug: 'reactive-forms', title: 'Reactive forms', eyebrow: 'Forms', description: 'Keep selected items in reactive Vue state and submit object values.', tests: [createTest('reactive-forms', 'Reactive-style form state', { dataName: 'skills', data: skills, selected: skills.slice(0, 2), settings: { groupBy: 'category', badgeShowLimit: 3 }, extra: { formValidation: true } })] },
  { slug: 'virtual-scrolling', title: 'Virtual Scrolling', eyebrow: 'Large data', description: 'Long option lists keep the panel scrollable and keyboard accessible.', tests: [classicCases[9]] },
  { slug: 'lazy-loading-api', title: 'Lazy Loading from API', eyebrow: 'Large data', description: 'Append more object rows when the list reaches the end.', tests: [classicCases[10]] },
  { slug: 'remote-data', title: 'Data from remote API', eyebrow: 'Remote data', description: 'Replace option data from remote sources while selected object values stay stable.', tests: [createTest('remote-data', 'Remote API data refresh', { selected: countries.slice(0, 2), settings: { enableSearchFilter: true, badgeShowLimit: 3 }, extra: { note: 'Refresh data by replacing the data array; selected values are preserved by primaryKey.' } })] },
  { slug: 'list-loop', title: 'Using in list for loop', eyebrow: 'Composition', description: 'Multiple dropdowns can be rendered from object arrays without shared state collisions.', tests: [createTest('list-loop-a', 'Loop row 1', { selected: countries.slice(0, 1), settings: { badgeShowLimit: 2 } }), createTest('list-loop-b', 'Loop row 2', { selected: countries.slice(2, 4), settings: { badgeShowLimit: 2 } })] },
  { slug: 'dialog', title: 'Using inside dialog', eyebrow: 'Overlay', description: 'appendToBody escapes overflow containers and dialog clipping.', tests: [caseDef('material', '', 'dialog', 'Clipping-safe dropdown with appendToBody', 'overlayCountries', overlayCountries, 'dialogSelected', 'dialogSettings', overlayCountries.slice(0, 1), 'Dialog dropdown', { appendToBody: true, tagToBody: true, autoPosition: true, position: 'bottom', maxHeight: 180, badgeShowLimit: 2 }, { overflow: true })] },
  { slug: 'multiple-dropdowns', title: 'Multiple dropdowns', eyebrow: 'Composition', description: 'Multiple independent dropdown instances keep separate state and events.', tests: [createTest('multiple-dropdowns-a', 'Countries dropdown', { selected: countries.slice(0, 2), settings: { badgeShowLimit: 2 } }), createTest('multiple-dropdowns-b', 'Skills dropdown', { dataName: 'skills', data: skills, selected: skills.slice(1, 3), settings: { groupBy: 'category', badgeShowLimit: 2 } })] },
  { slug: 'dynamic-data', title: 'Load dynamic data', eyebrow: 'Dynamic data', description: 'Data can be swapped or extended without losing selected object identity.', tests: [createTest('dynamic-data', 'Dynamic data list', { selected: countries.slice(0, 2), settings: { enableSearchFilter: true, badgeShowLimit: 3 }, extra: { note: 'The data prop is reactive and can be replaced by a loaded array.' } })] },
  { slug: 'methods', title: 'Methods', eyebrow: 'Methods', description: 'Instance methods expose open, close, focusSearch, selectAll, and clearSelection.', tests: [createTest('methods', 'Instance methods', { selected: countries.slice(0, 2), settings: { badgeShowLimit: 3 }, extra: { methods: true } })] },
  { slug: 'events', title: 'Events', eyebrow: 'Events', description: 'Selection, deselection, select-all, deselect-all, open, close, lazy, and create events are visible in the event log.', tests: [createTest('events', 'Event callbacks', { selected: countries.slice(0, 2), settings: { enableSearchFilter: true, badgeShowLimit: 3 } })] },
  { slug: 'disabled', title: 'Disabled state', eyebrow: 'State', description: 'Disable the dropdown while preserving the selected values.', tests: [classicCases[7]] },
  { slug: 'limit-selection', title: 'Limit selection', eyebrow: 'Limits', description: 'Prevent selecting more than the configured number of items.', tests: [classicCases[4]] },
  { slug: 'limit-badges', title: 'Limit badges', eyebrow: 'Limits', description: 'Overflow counter appears only when selected items are hidden.', tests: [classicCases[5]] },
  { slug: 'custom-placeholder', title: 'Custom placeholder', eyebrow: 'Display', description: 'Placeholder text stays left aligned and vertically centered in the trigger.', tests: [createTest('custom-placeholder', 'Custom placeholder', { selected: [], settings: { text: 'Choose countries', enableSearchFilter: true, badgeShowLimit: 3 } })] },
  { slug: 'styling', title: 'Styling', eyebrow: 'Skins', description: 'Classic, material, dark, custom, and brand skins are settings-only.', tests: [createTest('styling-classic', 'Classic skin', { selected: countries.slice(0, 2), settings: { badgeShowLimit: 2 } }), createTest('styling-material', 'Material skin', { skin: 'material', selected: countries.slice(2, 4), settings: { badgeShowLimit: 2 } }), createTest('styling-dark', 'Dark skin', { skin: 'dark', selected: countries.slice(4, 6), settings: { badgeShowLimit: 2 } }), createTest('styling-brand', 'Brand skin', { skin: 'brand', selected: countries.slice(1, 4), settings: { badgeShowLimit: 3 } })] },
  { slug: 'body-overlay-auto', title: 'Body Overlay Auto', eyebrow: 'Overlay', description: 'The dropdown can open inside a clipped surface while the panel is appended to body.', tests: [caseDef('material', '01', 'body-overlay-auto', 'Body overlay auto positioning', 'overlayCountries', overlayCountries, 'bodyOverlaySelected', 'bodyOverlaySettings', overlayCountries.slice(0, 1), 'Body overlay', { appendToBody: true, tagToBody: true, autoPosition: true, position: 'bottom', maxHeight: 180, badgeShowLimit: 2 }, { overflow: true })] }
];

const overlayTopCase = Object.assign(
  {},
  routeDefinitions.find((route) => route.slug === 'body-overlay-auto').tests[0],
  { number: '22' }
);

const extraCases = [
  caseDef('classic', '13', 'all-visible', 'All selected badges visible', 'countries', countries, 'allVisibleSelected', 'allVisibleSettings', countries.slice(0, 4), 'All selected visible', { badgeShowLimit: 10 }, { note: 'The counter disappears when every selected item is visible.' }),
  caseDef('classic', '14', 'search-by-fields', 'Search by specific fields', 'countries', countries, 'searchBySelected', 'searchBySettings', countries.slice(2, 5), 'Search by country or capital', { searchBy: ['itemName', 'capital'], searchPlaceholderText: 'Search country or capital', badgeShowLimit: 3 }),
  caseDef('classic', '15', 'add-filter-item', 'Search and add item', 'createdCountries', countries, 'createdSelected', 'createdSettings', countries.slice(0, 2), 'Add country', { addNewItemOnFilter: true, addNewButtonText: 'Add country', badgeShowLimit: 3 }, { note: 'Create a new option from filter text and keep object values stable.' }),
  caseDef('classic', '16', 'disabled-toggle', 'Disabled state toggle', 'countries', countries, 'disabledSelected', 'disabledSettings', countries.slice(0, 3), 'Toggle disabled', { badgeShowLimit: 3 }, { allowDisabledToggle: true }),
  caseDef('classic', '17', 'combobox-contract', 'Combobox keyboard contract', 'countries', countries, 'contractSelected', 'contractSettings', countries.slice(0, 3), 'Keyboard contract', { badgeShowLimit: 3 }, { note: 'Type a query: Backspace edits text. Clear the query: Backspace does not remove selected values by default. Focus a badge remove button and press Backspace/Delete to remove it. Escape closes without clearing selected values.' }),
  caseDef('classic', '18', 'aria-state', 'ARIA selected + checked state', 'countries', countries, 'ariaStateSelected', 'ariaStateSettings', countries.slice(0, 2), 'ARIA state audit', { badgeShowLimit: 3, maxHeight: 180 }, { note: 'Open and focus an option: every option exposes role="option", aria-selected, and aria-checked with matching values.' }),
  caseDef('classic', '19', 'form-validation', 'Controlled form validation', 'skills', skills, 'skillSelected', 'skillSettings', [], 'Select skills', { groupBy: 'category', badgeShowLimit: 3 }, { formValidation: true }),
  caseDef('classic', '20', 'ref-methods', 'Ref methods', 'countries', countries, 'methodSelected', 'methodSettings', countries.slice(0, 2), 'Ref controlled', { badgeShowLimit: 3 }, { methods: true }),
  caseDef('classic', '21', 'slots-api', 'Slots API custom HTML', 'countries', countries, 'slotsSelected', 'slotsSettings', countries.slice(0, 4), 'Custom slot shell', { enableSearchFilter: true, groupBy: 'category', selectGroup: true, badgeShowLimit: 2, maxHeight: 220 }, { scopedSlots: true, note: 'Custom option, badge, and menu footer slots. The package still owns ARIA, focus, and keyboard props.' }),
  overlayTopCase
];

const legacyRouteDefinitions = [
  { slug: 'all-visible-counter', target: 'limit-badges' },
  { slug: 'selection-limit', target: 'limit-selection' },
  { slug: 'disabled-state', target: 'disabled' },
  { slug: 'using-in-forms', target: 'template-driven-forms' },
  { slug: 'lazy-loading', target: 'lazy-loading-api' },
  { slug: 'using-inside-dialog', target: 'dialog' }
];

const liveNavItems = [
  {
    slug: 'classic',
    title: 'Basic usage',
    description: 'Essential setup with the default classic skin'
  },
  {
    slug: 'coverage',
    title: '3.1.x coverage',
    description: 'Combobox, async, headless, and composable state'
  },
  {
    slug: 'skin-switcher',
    title: 'Skin switcher',
    description: 'Settings-only skin changes'
  },
  {
    slug: 'dialog',
    title: 'Dialog overlay',
    description: 'appendToBody and overflow clipping'
  },
  {
    slug: 'material',
    title: 'Material skin',
    description: 'Modernized visual and behavior tests'
  },
  {
    slug: 'extra',
    title: 'Extra coverage',
    description: 'Limits, forms, methods, and edge cases'
  },
  {
    slug: 'headless-aria',
    title: 'Headless + ARIA',
    description: '100% custom HTML with Stackline ARIA getters'
  }
];

const liveSectionDefinitions = [
  {
    slug: 'classic',
    eyebrow: 'Start here',
    title: 'Basic usage',
    sectionClass: '',
    tests: classicCases
  },
  {
    slug: 'coverage',
    featureLab: true
  },
  {
    slug: 'skin-switcher',
    skinSwitcher: true
  },
  {
    slug: 'dialog',
    eyebrow: 'Dialog support',
    title: 'Dropdown inside overflow containers',
    sectionClass: 'overlay-section',
    tests: routeDefinitions.find((route) => route.slug === 'dialog').tests
  },
  {
    slug: 'material',
    eyebrow: 'Skin',
    title: 'Material',
    sectionClass: 'material-section',
    tests: materialCases
  },
  {
    slug: 'extra',
    eyebrow: 'Vue extra coverage',
    title: 'Additional live tests',
    sectionClass: 'extra-section',
    tests: extraCases
  },
  {
    slug: 'headless-aria',
    eyebrow: 'Full control example',
    title: 'Headless HTML + ARIA',
    description: 'The dropdown below owns its markup and CSS. Stackline supplies state, selection rules, grouping, search, callbacks, keyboard behavior, and ARIA attributes through prop getters.',
    sectionClass: 'headless-route-section',
    tests: [],
    headlessOnly: true
  }
];

const featurePills = [
  'Controlled v-model',
  'Search',
  'Grouping',
  'Scoped slots',
  'Custom renderers',
  'Lazy loading',
  'Instance methods',
  'Headless composable',
  'State composable',
  'Accessibility-focused and keyboard/ARIA tested',
  'appendToBody',
  'Centered placeholder line',
  'Classic and modern skins'
];

const apiCards = [
  {
    kicker: 'Component',
    title: '<VueMultiselectDropdown />',
    copy: 'Use v-model with object arrays while keeping the Stackline settings contract predictable.'
  },
  {
    kicker: 'Settings',
    title: 'settings.skin',
    copy: 'Use settings.skin for classic, material, dark, custom, and brand visual modes. The theme alias stays compatibility-only.'
  },
  {
    kicker: 'Events',
    title: '@select and @de-select',
    copy: 'Vue emits selection changes, select-all, clear-all, lazy scrolling, custom item creation, open, and close events.'
  },
  {
    kicker: 'Rendering',
    title: 'Scoped slots and render functions',
    copy: 'Customize option rows, badges, menu footer, and inner content while preserving package-owned behavior.'
  },
  {
    kicker: 'Headless',
    title: 'useMultiSelectDropdown',
    copy: 'Use prop getters when the app needs to own every tag, class, wrapper, and layout decision.'
  },
  {
    kicker: 'State',
    title: 'useMultiSelectState',
    copy: 'Use the low-level state composable for selection, filtering, grouping, badge limits, and callbacks.'
  },
  {
    kicker: 'Accessibility',
    title: 'Keyboard and ARIA contract',
    copy: 'The trigger, listbox, options, selected chips, and clear action expose keyboard flow, aria-selected, and aria-checked.'
  },
  {
    kicker: 'Dialogs',
    title: 'appendToBody / tagToBody',
    copy: 'Set appendToBody inside modals, drawers, and overflow containers so the list escapes clipping contexts.'
  }
];

const installCode = `npm install @stackline/vue-multiselect-dropdown@${PACKAGE_VERSION} --save-exact`;
const setupCode = [
  "import { ref } from 'vue';",
  "import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';",
  '',
  'const countries = [',
  "  { id: 1, itemName: 'Brazil' },",
  "  { id: 2, itemName: 'Canada' }",
  '];'
].join('\n');
const settingsCode = [
  'const selectedCountries = ref([]);',
  '',
  'const settings = {',
  "  text: 'Select countries',",
  "  primaryKey: 'id',",
  "  labelKey: 'itemName',",
  '  enableSearchFilter: true,',
  '  badgeShowLimit: 3,',
  '  clearAll: true,',
  "  skin: 'classic'",
  '};'
].join('\n');
const renderCode = [
  '<VueMultiselectDropdown',
  '  :data="countries"',
  '  v-model="selectedCountries"',
  '  :settings="settings"',
  '/>'
].join('\n');

function isLivePath() {
  return window.location.pathname.indexOf('/live/') >= 0;
}

function normalizePath() {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  if (hash) {
    return hash;
  }
  const parts = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  const last = parts[parts.length - 1] || '';
  if (isLivePath()) {
    return last && last !== 'live' ? last : 'classic';
  }
  return last && last !== 'vue-3' && last !== 'multiselect' ? last : 'basic';
}

function resolveRoute(slug) {
  const legacy = legacyRouteDefinitions.find((route) => route.slug === slug);
  const normalized = legacy ? legacy.target : slug;
  return routeDefinitions.find((route) => route.slug === normalized) || routeDefinitions[0];
}

const HeadlessCase = {
  emits: ['record'],
  setup(_, { emit }) {
    const selectedItems = ref(countries.slice(0, 3));
    const dropdown = useMultiSelectDropdown({
      data: countries,
      selectedItems,
      onChange(items) {
        selectedItems.value = items;
        emit('record', `headless aria change: ${items.length} selected`);
      },
      settings: makeSettings('classic', 'Build your own picker', {
        enableSearchFilter: true,
        searchPlaceholderText: 'Search country or capital',
        groupBy: 'region',
        selectGroup: true,
        badgeShowLimit: 2,
        clearAll: true,
        ariaLabel: 'Custom country multiselect',
        listboxAriaLabel: 'Custom country options',
        searchAriaLabel: 'Search custom country options',
        clearAllAriaLabel: 'Clear custom country selection'
      }),
      onSelect(item) {
        emit('record', `headless aria select: ${itemLabel(item)}`);
      },
      onDeSelect(item) {
        emit('record', `headless aria deselect: ${itemLabel(item)}`);
      },
      onSelectAll(items) {
        emit('record', `headless aria selectAll: ${items.length} items`);
      },
      onDeSelectAll(items) {
        emit('record', `headless aria clearAll: ${items.length} items`);
      }
    });
    const flagSelectedItems = ref(countries.slice(0, 3));
    const flagDropdown = useMultiSelectDropdown({
      data: countries,
      selectedItems: flagSelectedItems,
      onChange(items) {
        flagSelectedItems.value = items;
        emit('record', `headless flag change: ${items.length} selected`);
      },
      settings: makeSettings('classic', 'Choose countries', {
        enableSearchFilter: true,
        searchPlaceholderText: 'Search country',
        groupBy: 'region',
        selectGroup: true,
        badgeShowLimit: 3,
        clearAll: true,
        ariaLabel: 'Headless flag country picker'
      })
    });
    const selectedSummary = computed(() => selectedItems.value.length ? `${selectedItems.value.length} selected` : 'No selected countries');
    const flagJsonSnippet = computed(() => JSON.stringify({
      selectedItems: flagSelectedItems.value,
      settings: flagDropdown.settings.value
    }, null, 2));
    const headlessAriaHookCode = [
      'const selectedItems = ref(countries.slice(0, 3));',
      '',
      'const dropdown = useMultiSelectDropdown({',
      '  data: countries,',
      '  selectedItems,',
      '  onChange: (items) => { selectedItems.value = items; },',
      '  settings: {',
      "    text: 'Build your own picker',",
      '    enableSearchFilter: true,',
      "    searchPlaceholderText: 'Search country or capital',",
      "    groupBy: 'region',",
      '    selectGroup: true,',
      '    badgeShowLimit: 2,',
      "    primaryKey: 'id',",
      "    labelKey: 'itemName',",
      '    clearAll: true,',
      "    ariaLabel: 'Custom country multiselect',",
      "    listboxAriaLabel: 'Custom country options'",
      '  }',
      '});'
    ].join('\n');
    const headlessAriaTemplateCode = [
      "<section v-bind=\"dropdown.getRootProps({ class: 'country-shell' })\">",
      "  <button v-bind=\"dropdown.getTriggerProps({ class: 'country-trigger' })\">",
      '    <span>{{ label }}</span>',
      '    <strong>{{ isOpen ? "Expanded" : "Collapsed" }}</strong>',
      '  </button>',
      '',
      '  <div class="country-selected" aria-live="polite">',
      '    <span v-for="item in visibleBadges" :key="getItemKey(item)">',
      '      {{ getItemLabel(item) }}',
      '      <button v-bind="dropdown.getRemoveButtonProps(item)">Remove</button>',
      '    </span>',
      '    <b v-if="hiddenBadgeCount">+{{ hiddenBadgeCount }}</b>',
      '  </div>',
      '',
      '  <div v-if="isOpen" class="country-panel">',
      "    <input v-bind=\"dropdown.getSearchInputProps({ class: 'country-search' })\" />",
      "    <div v-bind=\"dropdown.getListboxProps({ class: 'country-listbox' })\">",
      '      <section v-for="group in groups" :key="group.name" role="group">',
      '        <header>{{ group.name }}</header>',
      '        <div v-for="option in group.items" :key="option.key"',
      '             v-bind="dropdown.getOptionProps(option)">',
      '          <strong>{{ option.label }}</strong>',
      '        </div>',
      '      </section>',
      '    </div>',
      '  </div>',
      '</section>'
    ].join('\n');
    const headlessAriaContractCode = [
      'Prop getters provide the accessibility contract:',
      '',
      'getTriggerProps()',
      '- role="combobox"',
      '- aria-expanded',
      '- aria-controls',
      '- aria-activedescendant',
      '',
      'getListboxProps()',
      '- role="listbox"',
      '- aria-multiselectable',
      '- stable id',
      '',
      'getOptionProps(option)',
      '- role="option"',
      '- aria-selected',
      '- aria-checked',
      '- keyboard and focus handlers',
      '',
      'You own the HTML. Stackline owns the state, ARIA, keyboard flow, grouping, search, limits, and callbacks.'
    ].join('\n');
    const flagTemplateCode = [
      '<div class="flag-picker" v-bind="flagDropdown.getRootProps()">',
      '  <div class="flag-picker-header">',
      '    <span>Custom HTML, custom CSS, Stackline state</span>',
      "    <button v-bind=\"flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })\">Clear</button>",
      '  </div>',
      '',
      "  <button v-bind=\"flagDropdown.getTriggerProps({ class: 'flag-trigger' })\">",
      '    <span>{{ flagLabel }}</span>',
      '    <strong>{{ flagIsOpen ? "Close" : "Open" }}</strong>',
      '  </button>',
      '',
      '  <div class="flag-chip-list">',
      '    <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">',
      '      <span :class="flagClass(item.flag)" aria-hidden="true"></span>',
      '      {{ flagDropdown.getItemLabel(item) }}',
      '      <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>',
      '    </span>',
      '  </div>',
      '',
      "  <div v-if=\"flagIsOpen\" v-bind=\"flagDropdown.getListboxProps({ class: 'flag-panel' })\">",
      "    <input v-bind=\"flagDropdown.getSearchInputProps({ class: 'flag-search' })\" />",
      '    <div v-for="option in flagOptions.slice(0, 24)" :key="option.key"',
      "         v-bind=\"flagDropdown.getOptionProps(option, { class: option.selected ? 'flag-option selected' : 'flag-option' })\">",
      '      <span :class="flagClass(option.item.flag)" aria-hidden="true"></span>',
      '      <span><strong>{{ option.label }}</strong><small>{{ option.item.capital }} - {{ option.item.region }}</small></span>',
      '      <input type="checkbox" :checked="option.selected" readonly />',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');
    const flagJsCode = [
      "import { ref } from 'vue';",
      "import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';",
      "import 'flag-icons/css/flag-icons.min.css';",
      '',
      'const selectedItems = ref(countries.slice(0, 3));',
      'const dropdown = useMultiSelectDropdown({',
      '  data: countries,',
      '  selectedItems,',
      '  onChange: (items) => { selectedItems.value = items; },',
      '  settings: {',
      "    text: 'Choose countries',",
      '    enableSearchFilter: true,',
      "    searchPlaceholderText: 'Search country',",
      "    groupBy: 'region',",
      '    selectGroup: true,',
      '    badgeShowLimit: 3,',
      "    primaryKey: 'id',",
      "    labelKey: 'itemName',",
      '    clearAll: true',
      '  }',
      '});'
    ].join('\n');

    return {
      dropdown,
      selectedItems,
      selectedSummary,
      visibleBadges: dropdown.visibleBadges,
      hiddenBadgeCount: dropdown.hiddenBadgeCount,
      visibleOptions: dropdown.visibleOptions,
      groups: dropdown.groups,
      label: dropdown.label,
      isOpen: dropdown.isOpen,
      listboxId: dropdown.listboxId,
      activeDescendantId: dropdown.activeDescendantId,
      allFilteredSelected: dropdown.allFilteredSelected,
      getItemKey: dropdown.getItemKey,
      getItemLabel: dropdown.getItemLabel,
      flagDropdown,
      flagSelectedItems,
      flagLabel: flagDropdown.label,
      flagIsOpen: flagDropdown.isOpen,
      flagOptions: flagDropdown.visibleOptions,
      headlessAriaHookCode,
      headlessAriaTemplateCode,
      headlessAriaContractCode,
      flagTemplateCode,
      flagJsCode,
      flagJsonSnippet,
      flagClass
    };
  },
  template: `
    <article class="example-row headless-aria-row" data-case-id="headless-aria-html">
      <div class="demo-cell">
        <p class="eyebrow">Headless HTML + ARIA</p>
        <h3>100% custom markup</h3>
        <section v-bind="dropdown.getRootProps({ class: 'headless-aria-shell', 'aria-label': 'Custom country multiselect demo' })">
          <header class="headless-aria-header">
            <span>Product-owned HTML</span>
            <button v-bind="dropdown.getClearAllButtonProps({ class: 'headless-aria-clear' })">Clear all</button>
          </header>

          <button v-bind="dropdown.getTriggerProps({ class: 'headless-aria-trigger' })">
            <span>
              <small>Deployment markets</small>
              <strong>{{ label }}</strong>
            </span>
            <b>{{ isOpen ? 'Expanded' : 'Collapsed' }}</b>
          </button>

          <div class="headless-aria-selected" aria-live="polite" :aria-label="selectedSummary">
            <span v-for="item in visibleBadges" :key="getItemKey(item)" class="headless-aria-chip">
              <span :class="'headless-aria-flag ' + flagClass(item.flag)" aria-hidden="true"></span>
              {{ getItemLabel(item) }}
              <button v-bind="dropdown.getRemoveButtonProps(item, { class: 'headless-aria-remove' })">
                <span aria-hidden="true">x</span>
              </button>
            </span>
            <span v-if="!visibleBadges.length" class="headless-aria-empty">No selected countries</span>
            <span v-if="hiddenBadgeCount > 0" class="headless-aria-counter">+{{ hiddenBadgeCount }}</span>
          </div>

          <div v-if="isOpen" class="headless-aria-panel">
            <label class="headless-aria-search-label" for="headless-aria-search-live">Search countries</label>
            <input v-bind="dropdown.getSearchInputProps({ class: 'headless-aria-search', id: 'headless-aria-search-live' })" />

            <div class="headless-aria-actions">
              <button type="button" :disabled="!visibleOptions.length || allFilteredSelected" @click="dropdown.selectAll(visibleOptions.map((option) => option.item))">Select visible</button>
              <button v-bind="dropdown.getClearAllButtonProps({ class: 'headless-aria-action-clear' })">Clear selected</button>
            </div>

            <div v-bind="dropdown.getListboxProps({ class: 'headless-aria-listbox', 'aria-label': 'Grouped custom country options' })">
              <section v-for="group in groups" :key="group.name" class="headless-aria-group" role="group" :aria-label="group.name">
                <header class="headless-aria-group-head">
                  <span>{{ group.name }}</span>
                  <button type="button" :disabled="group.disabled" @click="dropdown.toggleGroup(group.name, group.items.map((option) => option.item))">
                    {{ group.selected ? 'Clear group' : 'Select group' }}
                  </button>
                </header>
                <div
                  v-for="option in group.items"
                  :key="option.key"
                  v-bind="dropdown.getOptionProps(option, { class: option.selected ? 'headless-aria-option selected' : 'headless-aria-option' })"
                >
                  <span class="headless-aria-check" :data-checked="option.selected ? 'true' : 'false'" aria-hidden="true"></span>
                  <span :class="'headless-aria-flag ' + flagClass(option.item.flag)" aria-hidden="true"></span>
                  <span class="headless-aria-option-copy">
                    <strong>{{ option.label }}</strong>
                    <small>{{ option.item.capital }} - {{ option.item.region }}</small>
                  </span>
                  <span class="headless-aria-state">
                    aria-selected={{ option.selected ? 'true' : 'false' }}<br />
                    aria-checked={{ option.selected ? 'true' : 'false' }}
                  </span>
                </div>
              </section>
            </div>
          </div>

          <dl class="headless-aria-audit">
            <div><dt>trigger</dt><dd>role combobox</dd></div>
            <div><dt>listbox id</dt><dd>{{ listboxId }}</dd></div>
            <div><dt>active option</dt><dd>{{ activeDescendantId || 'none' }}</dd></div>
            <div><dt>visible</dt><dd>{{ visibleOptions.length }} options</dd></div>
          </dl>
        </section>
      </div>
      <div class="code-card"><strong>Hook</strong><pre>{{ headlessAriaHookCode }}</pre></div>
      <div class="code-card"><strong>Template</strong><pre>{{ headlessAriaTemplateCode }}</pre></div>
      <div class="code-card"><strong>ARIA contract</strong><pre>{{ headlessAriaContractCode }}</pre></div>
    </article>

    <article class="example-row headless-flag-row">
      <div class="demo-cell">
        <h3>Headless countries with flag icons</h3>
        <div class="flag-picker" v-bind="flagDropdown.getRootProps()">
          <div class="flag-picker-header">
            <span>Custom HTML, custom CSS, Stackline state</span>
            <button v-bind="flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })">Clear</button>
          </div>

          <button v-bind="flagDropdown.getTriggerProps({ class: 'flag-trigger' })">
            <span>{{ flagLabel }}</span>
            <strong>{{ flagIsOpen ? 'Close' : 'Open' }}</strong>
          </button>

          <div class="flag-chip-list">
            <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">
              <span :class="'flag-icon ' + flagClass(item.flag)" aria-hidden="true"></span>
              {{ flagDropdown.getItemLabel(item) }}
              <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>
            </span>
            <span v-if="!flagSelectedItems.length" class="flag-empty">No selected countries</span>
          </div>

          <div v-if="flagIsOpen" v-bind="flagDropdown.getListboxProps({ class: 'flag-panel' })">
            <input v-bind="flagDropdown.getSearchInputProps({ class: 'flag-search' })" />
            <div
              v-for="option in flagOptions.slice(0, 24)"
              :key="option.key"
              v-bind="flagDropdown.getOptionProps(option, { class: option.selected ? 'flag-option selected' : 'flag-option' })"
            >
              <span :class="'flag-icon ' + flagClass(option.item.flag)" aria-hidden="true"></span>
              <span class="flag-option-copy">
                <strong>{{ option.label }}</strong>
                <small>{{ option.item.capital }} - {{ option.item.region }}</small>
              </span>
              <input type="checkbox" :checked="option.selected" readonly />
            </div>
          </div>
        </div>
      </div>
      <div class="code-card"><strong>Template</strong><pre>{{ flagTemplateCode }}</pre></div>
      <div class="code-card"><strong>JS</strong><pre>{{ flagJsCode }}</pre></div>
      <div class="code-card"><strong>JSON</strong><pre>{{ flagJsonSnippet }}</pre></div>
    </article>
  `
};

const HeadlessFlagCase = {
  emits: ['record'],
  setup(_, { emit }) {
    const flagSelectedItems = ref(countries.slice(0, 3));
    const flagDropdown = useMultiSelectDropdown({
      data: countries,
      selectedItems: flagSelectedItems,
      onChange(items) {
        flagSelectedItems.value = items;
        emit('record', `headless flag change: ${items.length} selected`);
      },
      settings: makeSettings('classic', 'Choose countries', {
        enableSearchFilter: true,
        searchPlaceholderText: 'Search country',
        groupBy: 'region',
        selectGroup: true,
        badgeShowLimit: 3,
        clearAll: true,
        ariaLabel: 'Headless flag country picker'
      })
    });
    const flagTemplateCode = [
      '<div class="flag-picker" v-bind="flagDropdown.getRootProps()">',
      '  <div class="flag-picker-header">',
      '    <span>Custom HTML, custom CSS, Stackline state</span>',
      "    <button v-bind=\"flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })\">Clear</button>",
      '  </div>',
      '',
      "  <button v-bind=\"flagDropdown.getTriggerProps({ class: 'flag-trigger' })\">",
      '    <span>{{ flagLabel }}</span>',
      '    <strong>{{ flagIsOpen ? "Close" : "Open" }}</strong>',
      '  </button>',
      '',
      '  <div class="flag-chip-list">',
      '    <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">',
      '      <span :class="flagClass(item.flag)" aria-hidden="true"></span>',
      '      {{ flagDropdown.getItemLabel(item) }}',
      '      <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>',
      '    </span>',
      '  </div>',
      '</div>'
    ].join('\n');
    const flagJsCode = [
      "import { ref } from 'vue';",
      "import { useMultiSelectDropdown } from '@stackline/vue-multiselect-dropdown';",
      "import 'flag-icons/css/flag-icons.min.css';",
      '',
      'const selectedItems = ref(countries.slice(0, 3));',
      'const dropdown = useMultiSelectDropdown({',
      '  data: countries,',
      '  selectedItems,',
      '  onChange: (items) => { selectedItems.value = items; },',
      '  settings: {',
      "    text: 'Choose countries',",
      '    enableSearchFilter: true,',
      "    groupBy: 'region',",
      '    selectGroup: true,',
      '    badgeShowLimit: 3',
      '  }',
      '});'
    ].join('\n');
    const flagJsonSnippet = computed(() => JSON.stringify({
      selectedItems: flagSelectedItems.value,
      settings: flagDropdown.settings.value
    }, null, 2));

    return {
      flagDropdown,
      flagSelectedItems,
      flagLabel: flagDropdown.label,
      flagIsOpen: flagDropdown.isOpen,
      flagOptions: flagDropdown.visibleOptions,
      flagTemplateCode,
      flagJsCode,
      flagJsonSnippet,
      flagClass
    };
  },
  template: `
    <article class="example-row headless-flag-row">
      <div class="demo-cell">
        <h3>Headless countries with flag icons</h3>
        <div class="flag-picker" v-bind="flagDropdown.getRootProps()">
          <div class="flag-picker-header">
            <span>Custom HTML, custom CSS, Stackline state</span>
            <button v-bind="flagDropdown.getClearAllButtonProps({ class: 'flag-clear' })">Clear</button>
          </div>

          <button v-bind="flagDropdown.getTriggerProps({ class: 'flag-trigger' })">
            <span>{{ flagLabel }}</span>
            <strong>{{ flagIsOpen ? 'Close' : 'Open' }}</strong>
          </button>

          <div class="flag-chip-list">
            <span v-for="item in flagSelectedItems" :key="flagDropdown.getItemKey(item)" class="flag-chip">
              <span :class="'flag-icon ' + flagClass(item.flag)" aria-hidden="true"></span>
              {{ flagDropdown.getItemLabel(item) }}
              <button v-bind="flagDropdown.getRemoveButtonProps(item)">x</button>
            </span>
            <span v-if="!flagSelectedItems.length" class="flag-empty">No selected countries</span>
          </div>

          <div v-if="flagIsOpen" v-bind="flagDropdown.getListboxProps({ class: 'flag-panel' })">
            <input v-bind="flagDropdown.getSearchInputProps({ class: 'flag-search' })" />
            <div
              v-for="option in flagOptions.slice(0, 24)"
              :key="option.key"
              v-bind="flagDropdown.getOptionProps(option, { class: option.selected ? 'flag-option selected' : 'flag-option' })"
            >
              <span :class="'flag-icon ' + flagClass(option.item.flag)" aria-hidden="true"></span>
              <span class="flag-option-copy">
                <strong>{{ option.label }}</strong>
                <small>{{ option.item.capital }} - {{ option.item.region }}</small>
              </span>
              <input type="checkbox" :checked="option.selected" readonly />
            </div>
          </div>
        </div>
      </div>
      <div class="code-card"><strong>Template</strong><pre>{{ flagTemplateCode }}</pre></div>
      <div class="code-card"><strong>JS</strong><pre>{{ flagJsCode }}</pre></div>
      <div class="code-card"><strong>JSON</strong><pre>{{ flagJsonSnippet }}</pre></div>
    </article>
  `
};

const SkinSwitcherCase = {
  components: { VueMultiselectDropdown },
  emits: ['record'],
  setup(_, { emit }) {
    const skin = ref('classic');
    const selected = ref(countries.slice(0, 3));
    const settings = computed(() => makeSettings(skin.value, 'Basic multi', {
      badgeShowLimit: 3,
      enableSearchFilter: false
    }));
    const templateSnippet = [
      '<vue-multiselect-dropdown',
      '  :data="countries"',
      '  v-model="skinSwitchSelected"',
      '  :settings="skinSwitchSettings"',
      "  @select=\"record('skin switch select', $event)\"",
      "  @de-select=\"record('skin switch deselect', $event)\"",
      '/>'
    ].join('\n');
    const jsSnippet = computed(() => [
      `const skin = ref('${skin.value}');`,
      'const skinSwitchSelected = ref(countries.slice(0, 3));',
      '',
      'const skinSwitchSettings = computed(() => makeSettings(skin.value, "Basic multi", {',
      '  badgeShowLimit: 3,',
      '  enableSearchFilter: false',
      '}));'
    ].join('\n'));
    const jsonSnippet = computed(() => JSON.stringify({
      selected: selected.value,
      settings: settings.value
    }, null, 2));

    function updateSelection(items) {
      selected.value = items;
      emit('record', `skin switch change: ${items.length} selected`);
    }

    function record(type, value) {
      emit('record', `${type}: ${itemLabel(value)}`);
    }

    return {
      countries,
      skins,
      skin,
      selected,
      settings,
      templateSnippet,
      jsSnippet,
      jsonSnippet,
      labelFor,
      stackblitzUrl,
      updateSelection,
      record
    };
  },
  template: `
    <section class="skin-section skin-switcher-section">
      <div class="section-heading">
        <p class="eyebrow">Settings-only skin switch</p>
        <h2>Skin switcher</h2>
      </div>

      <div class="skin-buttons">
        <button
          v-for="item in skins"
          :key="item"
          type="button"
          :class="{ active: skin === item }"
          @click="skin = item"
        >
          {{ labelFor(item) }}
        </button>
      </div>

      <article class="example-row custom-skin-sample">
        <div class="demo-cell">
          <h3>Updates only settings.skin</h3>
          <a class="stackblitz-row-link" :href="stackblitzUrl('basic')" target="_blank" rel="noopener">Open in StackBlitz</a>
          <vue-multiselect-dropdown
            :data="countries"
            v-model="selected"
            :settings="settings"
            @change="updateSelection"
            @select="record('skin switch select', $event)"
            @de-select="record('skin switch deselect', $event)"
          />
          <p class="settings-preview">skin: {{ skin }}</p>
        </div>
        <div class="code-card"><strong>Template</strong><pre>{{ templateSnippet }}</pre></div>
        <div class="code-card"><strong>JS</strong><pre>{{ jsSnippet }}</pre></div>
        <div class="code-card"><strong>JSON</strong><pre>{{ jsonSnippet }}</pre></div>
      </article>
    </section>
  `
};

const FeatureLab = {
  components: { VueMultiselectDropdown, HeadlessFlagCase },
  emits: ['record'],
  setup(_, { emit }) {
    const contractCard = ref(null);
    const contractData = ref(countries);
    const contractSelected = ref(countries.slice(0, 4));
    const headlessSelected = ref(countries.slice(1, 3));
    const stateSelected = ref(countries.slice(3, 6));
    const staleCounter = ref(0);
    const keyboardScenario = ref('Focus a target, then press Space, Tab, arrows, Escape, Backspace, or Delete.');
    const keyboardSettings = ref({
      space: true,
      tab: true,
      arrows: true,
      escape: true,
      backspaceRemovesLastWhenSearchEmpty: false,
      deleteRemovesFocusedBadge: true
    });
    const spaceOptionAction = ref('toggle');
    const keyboardConfig = computed(() => Object.assign({}, keyboardSettings.value, {
      spaceOptionAction: spaceOptionAction.value
    }));
    const keyboardConfigPreview = computed(() => JSON.stringify(keyboardConfig.value));
    const contractSettings = computed(() => makeSettings('classic', '3.1.0 contract test', {
      badgeShowLimit: 3,
      addNewItemOnFilter: true,
      addNewButtonText: 'Async add',
      groupBy: 'category',
      selectGroup: true,
      maxHeight: 180,
      keyboard: keyboardConfig.value
    }));
    const headless = useMultiSelectDropdown({
      data: countries,
      selectedItems: headlessSelected,
      onChange(items) {
        headlessSelected.value = items;
        emit('record', `headless hook change: ${items.length} selected`);
      },
      settings: makeSettings('classic', 'Headless countries', {
        enableSearchFilter: true,
        searchPlaceholderText: 'Search 64 countries',
        groupBy: 'category',
        selectGroup: true,
        badgeShowLimit: 2,
        clearAll: true,
        ariaLabel: 'Headless countries'
      })
    });
    const state = useMultiSelectState({
      data: countries,
      selectedItems: stateSelected,
      onChange(items) {
        stateSelected.value = items;
        emit('record', `state hook change: ${items.length} selected`);
      },
      settings: makeSettings('classic', 'State hook countries', {
        enableSearchFilter: true,
        badgeShowLimit: 3,
        clearAll: true
      })
    });

    function toggleAsyncRefresh() {
      const nextData = contractData.value[0] && contractData.value[0].id === countries[0].id ? countries.slice(10) : countries;
      contractData.value = nextData;
      emit('record', `3.1.0 data refresh: ${nextData.length} countries`);
    }

    function toggleKeyboardFeature(feature) {
      keyboardSettings.value = Object.assign({}, keyboardSettings.value, {
        [feature]: !keyboardSettings.value[feature]
      });
    }

    async function addCountryFromFilter(query) {
      const requestNumber = staleCounter.value + 1;
      staleCounter.value = requestNumber;
      emit('record', `3.1.0 async add start: ${requestNumber}: ${query}`);
      await new Promise((resolve) => window.setTimeout(resolve, requestNumber % 2 ? 650 : 120));
      const nextItem = {
        id: 1000 + requestNumber,
        itemName: query,
        name: query.slice(0, 2).toUpperCase(),
        capital: query,
        region: 'Custom',
        category: 'Custom'
      };
      emit('record', `3.1.0 async add resolved: ${requestNumber}: ${query}`);
      return nextItem;
    }

    function updateContractSelection(items) {
      contractSelected.value = items;
      emit('record', `3.1.0 contract change: ${items.length} selected`);
    }

    function focusOpenPanelTarget(target, attempts = 0) {
      nextTick(() => {
        if (target === 'search') {
          const search = contractCard.value?.querySelector('.vmsd-search-input');
          if (search) {
            search.focus();
            keyboardScenario.value = 'Space in search is normal typing. Empty-query Backspace does not remove selected values by default.';
            return;
          }
        } else {
          const options = Array.from(contractCard.value?.querySelectorAll('[data-vmsd-option="true"]:not([aria-disabled="true"])') || []);
          const option = options.find((item) => item.textContent && item.textContent.includes('Chile')) || options[0];
          if (option) {
            option.focus();
            keyboardScenario.value = spaceOptionAction.value === 'toggle-and-next'
              ? 'Space on an option toggles it and moves focus to the next enabled option.'
              : 'Space on an option toggles only that option and keeps focus there. Arrows move to another option.';
            return;
          }
        }

        if (attempts < 8) {
          window.setTimeout(() => focusOpenPanelTarget(target, attempts + 1), 40);
        }
      });
    }

    function openContractDropdown() {
      const trigger = contractCard.value?.querySelector('.vmsd-trigger');
      if (trigger && trigger.getAttribute('aria-expanded') !== 'true') {
        trigger.click();
      }
    }

    function focusContractTarget(target) {
      const root = contractCard.value?.querySelector('.vmsd-root');
      if (target === 'trigger') {
        root?.querySelector('.vmsd-trigger')?.focus();
        keyboardScenario.value = 'Space on trigger toggles the dropdown. It does not select an item.';
        return;
      }
      if (target === 'clear') {
        root?.querySelector('.vmsd-clear')?.focus();
        keyboardScenario.value = 'Space on clear-all activates that button and clears selected values.';
        return;
      }
      if (target === 'badge') {
        root?.querySelector('.vmsd-badge-remove')?.focus();
        keyboardScenario.value = 'Backspace or Delete on a focused badge remove button removes that selected badge intentionally.';
        return;
      }
      openContractDropdown();
      focusOpenPanelTarget(target);
    }

    return {
      countries,
      contractCard,
      contractData,
      contractSelected,
      contractSettings,
      keyboardFeatures,
      keyboardSettings,
      keyboardConfig,
      keyboardConfigPreview,
      keyboardScenario,
      spaceOptionActions,
      spaceOptionAction,
      headless,
      headlessLabel: headless.label,
      headlessIsOpen: headless.isOpen,
      headlessVisibleBadges: headless.visibleBadges,
      headlessHiddenBadgeCount: headless.hiddenBadgeCount,
      headlessVisibleOptions: headless.visibleOptions,
      state,
      stateSelectedItems: state.selectedItems,
      stateFilter: state.filter,
      stateFilteredItems: state.filteredItems,
      stateSelectableItems: state.selectableItems,
      stateVisibleBadges: state.visibleBadges,
      stateHiddenBadgeCount: state.hiddenBadgeCount,
      stateAllFilteredSelected: state.allFilteredSelected,
      itemLabel,
      toggleAsyncRefresh,
      toggleKeyboardFeature,
      addCountryFromFilter,
      updateContractSelection,
      focusContractTarget
    };
  },
  template: `
    <section class="skin-section feature-lab-section">
      <div class="section-heading">
        <p class="eyebrow">Vue 3.1.0 coverage</p>
        <h2>New functionality live lab</h2>
      </div>

      <div class="feature-lab-grid">
        <article class="feature-lab-card" ref="contractCard">
          <h3>Combobox contract + async object preservation</h3>
          <div class="method-bar">
            <button type="button" @click="toggleAsyncRefresh">Toggle async data source</button>
          </div>
          <div class="keyboard-contract">
            <strong>Keyboard contract</strong>
            <div class="keyboard-toggles" aria-label="Toggle keyboard behavior">
              <button
                v-for="feature in keyboardFeatures"
                :key="feature.key"
                type="button"
                :class="{ active: keyboardSettings[feature.key] }"
                :aria-pressed="keyboardSettings[feature.key] ? 'true' : 'false'"
                @click="toggleKeyboardFeature(feature.key)"
              >
                {{ feature.label }}
              </button>
            </div>
            <div class="space-mode-toggles" aria-label="Choose Space option behavior">
              <button
                v-for="action in spaceOptionActions"
                :key="action.key"
                type="button"
                :class="{ active: spaceOptionAction === action.key }"
                :aria-pressed="spaceOptionAction === action.key ? 'true' : 'false'"
                :title="action.description"
                @click="spaceOptionAction = action.key; keyboardScenario = action.description"
              >
                {{ action.label }}
              </button>
            </div>
            <div class="keyboard-targets" aria-label="Focus a keyboard test target">
              <button type="button" @click="focusContractTarget('trigger')">Focus trigger</button>
              <button type="button" @click="focusContractTarget('option')">Focus option</button>
              <button type="button" @click="focusContractTarget('search')">Focus search</button>
              <button type="button" @click="focusContractTarget('badge')">Focus badge</button>
              <button type="button" @click="focusContractTarget('clear')">Focus clear</button>
            </div>
            <p>{{ keyboardScenario }}</p>
            <p class="keyboard-settings-preview">settings.keyboard: {{ keyboardConfigPreview }}</p>
            <dl>
              <div><dt>Space</dt><dd>Trigger opens/closes. Search types a space. Buttons activate. Option behavior follows <code>spaceOptionAction</code>.</dd></div>
              <div><dt>Tab</dt><dd>Moves to the next focusable control. It never selects an option.</dd></div>
              <div><dt>Arrows</dt><dd>Move through options when the list is open.</dd></div>
              <div><dt>Escape</dt><dd>Closes the list without clearing selected values.</dd></div>
              <div><dt>Backspace</dt><dd>In search, edits text. Empty-query badge removal is off by default.</dd></div>
              <div><dt>Badge Delete</dt><dd>Backspace or Delete on a focused badge remove button removes that badge.</dd></div>
            </dl>
          </div>
          <vue-multiselect-dropdown
            :data="contractData"
            v-model="contractSelected"
            :settings="contractSettings"
            @change="updateContractSelection"
            @add-filter-new-item="addCountryFromFilter"
          />
          <p class="settings-preview">
            {{ contractData.length }} countries loaded. Test Backspace with and without query, focused badge Delete,
            Escape close, ArrowUp/Down, async add, and refresh while selected countries are missing from the new data page.
          </p>
        </article>

        <article v-bind="headless.getRootProps({ class: 'feature-lab-card' })">
          <h3>Headless hook</h3>
          <button v-bind="headless.getTriggerProps({ class: 'headless-test-trigger' })">
            <span>{{ headlessLabel }}</span>
            <strong>{{ headlessIsOpen ? 'Close' : 'Open' }}</strong>
          </button>
          <div class="headless-test-chips">
            <button
              v-for="item in headlessVisibleBadges"
              :key="headless.getItemKey(item)"
              v-bind="headless.getRemoveButtonProps(item)"
            >
              {{ headless.getItemLabel(item) }}
            </button>
            <span v-if="headlessHiddenBadgeCount > 0">+{{ headlessHiddenBadgeCount }}</span>
          </div>
          <div v-if="headlessIsOpen" v-bind="headless.getListboxProps({ class: 'headless-test-panel' })">
            <input v-bind="headless.getSearchInputProps({ class: 'headless-test-search' })" />
            <div
              v-for="option in headlessVisibleOptions.slice(0, 18)"
              :key="option.key"
              v-bind="headless.getOptionProps(option, { class: option.selected ? 'headless-test-option selected' : 'headless-test-option' })"
            >
              <span>{{ option.selected ? 'Selected' : 'Select' }}</span>
              <strong>{{ option.label }}</strong>
            </div>
          </div>
          <p class="settings-preview">Headless prop getters with ARIA, focus, Backspace, Escape, groups, and chips.</p>
        </article>

        <article class="feature-lab-card">
          <h3>State hook</h3>
          <div class="state-test-actions">
            <button type="button" @click="state.selectAll(stateSelectableItems)" :disabled="!stateSelectableItems.length || stateAllFilteredSelected">Select all visible</button>
            <button type="button" @click="state.clearSelection()" :disabled="!stateSelectedItems.length">Clear all</button>
            <button type="button" @click="state.removeLastSelectedItem()" :disabled="!stateSelectedItems.length">Remove last</button>
          </div>
          <input class="state-test-search" :value="stateFilter" placeholder="Filter state hook countries" @input="state.setFilter($event.target.value)" />
          <div class="state-test-chips">
            <button
              v-for="item in stateVisibleBadges"
              :key="state.getItemKey(item)"
              type="button"
              @click="state.removeItem(item)"
              @keydown.backspace.prevent="state.removeItem(item)"
              @keydown.delete.prevent="state.removeItem(item)"
            >
              {{ state.getItemLabel(item) }}
            </button>
            <span v-if="stateHiddenBadgeCount > 0">+{{ stateHiddenBadgeCount }}</span>
          </div>
          <div class="state-test-options">
            <button
              v-for="item in stateFilteredItems.slice(0, 18)"
              :key="state.getItemKey(item)"
              type="button"
              :class="{ selected: state.isSelected(item) }"
              @click="state.selectItem(item)"
            >
              {{ state.isSelected(item) ? 'Selected' : 'Select' }} {{ state.getItemLabel(item) }}
            </button>
          </div>
          <p class="settings-preview">
            Low-level state only: selection, filtering, select-all, clear-all, visible badge count, and empty-query Backspace.
          </p>
        </article>
      </div>

      <div class="case-list headless-flag-list">
        <headless-flag-case @record="$emit('record', $event)" />
      </div>
    </section>
  `
};

const app = createApp({
  components: { VueMultiselectDropdown, HeadlessCase, HeadlessFlagCase, SkinSwitcherCase, FeatureLab },
  data() {
    return {
      routes: routeDefinitions,
      liveNavItems,
      featurePills,
      apiCards,
      installCode,
      setupCode,
      settingsCode,
      renderCode,
      currentSlug: normalizePath(),
      events: ['ready']
    };
  },
  computed: {
    isLiveMode() {
      return isLivePath();
    },
    currentRoute() {
      return resolveRoute(this.currentSlug);
    },
    currentLiveSection() {
      if (!this.isLiveMode) {
        return null;
      }
      const normalized = this.currentSlug === 'basic' ? 'classic' : this.currentSlug;
      return liveSectionDefinitions.find((section) => section.slug === normalized);
    },
    activeLiveSlug() {
      return this.currentLiveSection ? this.currentLiveSection.slug : this.currentRoute.slug;
    },
    liveProjectUrl() {
      const routePath = this.currentRoute.slug === 'basic' ? 'classic' : this.currentRoute.slug;
      return `live/#/${routePath}`;
    },
    stackblitzRouteUrl() {
      return stackblitzUrl(this.currentRoute.slug);
    }
  },
  mounted() {
    window.addEventListener('hashchange', this.syncPath);
    window.addEventListener('popstate', this.syncPath);
  },
  beforeUnmount() {
    window.removeEventListener('hashchange', this.syncPath);
    window.removeEventListener('popstate', this.syncPath);
  },
  methods: {
    flagClass,
    syncPath() {
      this.currentSlug = normalizePath();
      this.events = ['ready'];
    },
    navigate(slug) {
      window.location.hash = '#/' + slug;
      this.currentSlug = slug;
      this.events = ['ready'];
      window.scrollTo({ top: 0, left: 0 });
    },
    record(message) {
      this.events = [message].concat(this.events).slice(0, 10);
    }
  },
  template: `
    <main v-if="isLiveMode" class="page shell-page">
      <header class="topbar">
        <p class="eyebrow">Vue ${VUE_RUNTIME} runtime</p>
        <h1>@stackline/vue-multiselect-dropdown ${PACKAGE_VERSION}</h1>
      </header>

      <nav class="live-nav-grid" aria-label="Vue 3 live sections">
        <a
          v-for="item in liveNavItems"
          :key="item.slug"
          :href="'#/' + item.slug"
          :class="{ active: item.slug === activeLiveSlug }"
          @click.prevent="navigate(item.slug)"
        >
          <strong>{{ item.title }}</strong>
          <span>{{ item.description }}</span>
        </a>
      </nav>

      <section class="docs-main">
        <feature-lab
          v-if="currentLiveSection && currentLiveSection.featureLab"
          @record="record"
        />

        <skin-switcher-case
          v-else-if="currentLiveSection && currentLiveSection.skinSwitcher"
          @record="record"
        />

        <section
          v-else-if="currentLiveSection"
          :class="'skin-section ' + currentLiveSection.sectionClass"
        >
          <div class="section-heading">
            <p class="eyebrow">{{ currentLiveSection.eyebrow }}</p>
            <h2>{{ currentLiveSection.title }}</h2>
            <p v-if="currentLiveSection.description" class="example-copy">{{ currentLiveSection.description }}</p>
          </div>

          <div class="case-list">
            <demo-case
              v-for="test in currentLiveSection.tests"
              :key="test.id"
              :test="test"
              @record="record"
            />
            <headless-case
              v-if="currentLiveSection.headlessOnly || currentLiveSection.headlessAfter"
              @record="record"
            />
          </div>
        </section>

        <section v-else class="skin-section">
          <div class="section-heading">
            <p class="eyebrow">{{ currentRoute.eyebrow }}</p>
            <h2>{{ currentRoute.title }}</h2>
            <p class="example-copy">{{ currentRoute.description }}</p>
            <a class="stackblitz-row-link" :href="stackblitzRouteUrl" target="_blank" rel="noopener">Open in StackBlitz</a>
          </div>

          <div class="case-list">
            <headless-case v-if="currentRoute.kind === 'headless'" @record="record" />
            <demo-case v-else v-for="test in currentRoute.tests" :key="test.id" :test="test" @record="record" />
          </div>
        </section>
      </section>

      <section class="activity">
        <h2>Event log</h2>
        <p v-if="!events.length">No events yet.</p>
        <p v-for="(event, index) in events" :key="event + index">{{ event }}</p>
      </section>

      <footer v-if="!currentLiveSection" class="example-footer" aria-label="Vue 3 example routes">
        <div class="footer-heading">
          <p class="eyebrow">Example routes</p>
          <h2>Open a focused Vue 3 example</h2>
        </div>

        <nav class="footer-link-grid">
          <a
            v-for="route in routes"
            :key="route.slug"
            :href="'#/' + route.slug"
            :class="{ active: route.slug === currentRoute.slug }"
            @click.prevent="navigate(route.slug)"
          >
            <span class="route-title">{{ route.title }}</span>
            <span class="route-path">/{{ route.slug }}</span>
          </a>
        </nav>
      </footer>
    </main>

    <div v-else class="docs-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark">V</div>
          <div>
            <div class="topbar-eyebrow">Stackline maintained line</div>
            <h1>@stackline/vue-multiselect-dropdown</h1>
          </div>
        </div>

        <div class="topbar-meta">
          <span class="meta-pill">Vue 3.x</span>
          <span class="meta-pill primary">v${PACKAGE_VERSION}</span>
        </div>
      </header>

      <div class="docs-layout">
        <aside class="rail">
          <section class="rail-card">
            <div class="rail-label">Overview</div>
            <a class="rail-link" href="#install">Install</a>
            <a class="rail-link" href="#preview">Preview</a>
            <a class="rail-link" href="#headless-aria">Headless HTML</a>
            <a class="rail-link" href="#api">API</a>
            <a class="rail-link" :href="liveProjectUrl" target="_blank" rel="noopener">Live project</a>
          </section>

          <section class="rail-card">
            <div class="rail-label">Examples</div>
            <nav class="example-nav" aria-label="Vue multiselect examples">
              <a
                v-for="route in routes"
                :key="route.slug"
                :href="'#/' + route.slug"
                :class="{ active: route.slug === currentRoute.slug }"
                class="example-link"
                @click="events = ['ready']"
              >
                {{ route.title }}
              </a>
            </nav>
          </section>

          <section class="rail-card">
            <div class="rail-label">Release line</div>
            <div class="release-item">
              <strong>Package</strong>
              <span>${PACKAGE_VERSION}</span>
            </div>
            <div class="release-item">
              <strong>Vue</strong>
              <span>${VUE_RUNTIME}</span>
            </div>
            <div class="release-item">
              <strong>Docs path</strong>
              <span>/vue-3/</span>
            </div>
            <div class="release-item">
              <strong>Promise</strong>
              <span>Accessibility-focused and keyboard/ARIA tested support</span>
            </div>
          </section>
        </aside>

        <main class="docs-main">
          <section class="preview-card" id="preview">
            <div class="preview-head">
              <div>
                <div class="setup-label">Live preview</div>
                <h3>{{ currentRoute.title }}</h3>
                <p>
                  Running against package line <code>${PACKAGE_VERSION}</code> and Vue
                  <code>${VUE_RUNTIME}</code>.
                </p>
              </div>
              <div class="preview-actions">
                <span class="status-pill">Classic selector preserved</span>
                <a class="stackblitz-button" :href="stackblitzRouteUrl" target="_blank" rel="noopener">Open StackBlitz</a>
                <a class="stackblitz-button" :href="liveProjectUrl" target="_blank" rel="noopener">Open live test</a>
              </div>
            </div>

            <div class="preview-example-link-row">
              <span>Focused Vue example</span>
              <a :href="'#/' + currentRoute.slug">{{ currentRoute.title }}</a>
            </div>

            <div class="preview-canvas">
              <headless-case v-if="currentRoute.kind === 'headless'" @record="record" />
              <demo-case v-else v-for="test in currentRoute.tests" :key="test.id" :test="test" @record="record" />
            </div>
          </section>

          <section class="hero-card">
            <span class="hero-badge">Vue 3 family · Multiselect dropdown</span>
            <h2>Material-inspired multiselect, shaped for controlled Vue applications.</h2>
            <p class="hero-copy">
              This Vue 3 line keeps the familiar Stackline settings contract while using idiomatic v-model,
              scoped slots, composables, and emitted events. Version <code>${PACKAGE_VERSION}</code> includes
              accessibility-focused and keyboard/ARIA tested behavior, accurate badge counters, clear-all controls,
              dialog-safe body overlays, headless composables, vertically centered placeholders, and matching
              classic/material/dark/custom/brand skins.
            </p>

            <div class="pill-row">
              <span v-for="pill in featurePills" :key="pill" class="feature-pill">{{ pill }}</span>
            </div>

            <div class="compat-grid">
              <div class="compat-card">
                <strong>Vue state first</strong>
                Keep selection in reactive state through <code>v-model</code>.
              </div>
              <div class="compat-card">
                <strong>Consistent behavior where it matters</strong>
                Skins, counters, keyboard behavior, and body overlays follow the validated Stackline behavior.
              </div>
              <div class="compat-card">
                <strong>Slots instead of framework leakage</strong>
                Customize option rows and selected chips with scoped slots or render functions.
              </div>
            </div>
          </section>

          <section class="headless-section" id="headless-aria">
            <div class="headless-intro">
              <div>
                <div class="setup-label">Advanced Vue control</div>
                <h2>100% Custom HTML With ARIA</h2>
                <p>
                  Use <code>useMultiSelectDropdown</code> when your Vue app needs to own every tag, class,
                  wrapper, icon, and layout decision while Stackline keeps selection, grouping, keyboard flow,
                  callbacks, and ARIA prop getters.
                </p>
              </div>
            </div>
            <headless-case @record="record" />
          </section>

          <section class="setup-grid" id="install">
            <article class="setup-card">
              <div class="setup-label">Step 1</div>
              <h3>Install the package</h3>
              <pre>{{ installCode }}</pre>
            </article>

            <article class="setup-card">
              <div class="setup-label">Step 2</div>
              <h3>Import the component</h3>
              <pre>{{ setupCode }}</pre>
            </article>

            <article class="setup-card">
              <div class="setup-label">Step 3</div>
              <h3>Create settings</h3>
              <pre>{{ settingsCode }}</pre>
            </article>

            <article class="setup-card">
              <div class="setup-label">Step 4</div>
              <h3>Render with v-model</h3>
              <pre>{{ renderCode }}</pre>
            </article>
          </section>

          <section class="api-grid" id="api">
            <article v-for="card in apiCards" :key="card.title" class="api-card">
              <div class="setup-label">{{ card.kicker }}</div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.copy }}</p>
            </article>
          </section>

          <section class="activity">
            <h2>Event log</h2>
            <p v-if="!events.length">No events yet.</p>
            <p v-for="(event, index) in events" :key="event + index">{{ event }}</p>
          </section>
        </main>
      </div>
    </div>
  `
});

app.component('demo-case', DemoCase);
app.mount('#app');
