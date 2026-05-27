import { createApp, version as vueVersion } from 'vue/dist/vue.esm-bundler.js';
import { VueMultiselectDropdown } from '@stackline/vue-multiselect-dropdown';
import './styles.css';

const PACKAGE_VERSION = '3.0.0';
const VUE_RUNTIME = vueVersion;
const SKINS = ['classic', 'material', 'dark', 'custom', 'brand'];

const COUNTRIES = [
  { id: 1, itemName: 'Brazil', name: 'BR', capital: 'Brasilia', category: 'South America', region: 'Americas', flag: 'BR', caption: 'Brasilia - Americas' },
  { id: 2, itemName: 'Canada', name: 'CA', capital: 'Ottawa', category: 'North America', region: 'Americas', flag: 'CA', caption: 'Ottawa - Americas' },
  { id: 3, itemName: 'Portugal', name: 'PT', capital: 'Lisbon', category: 'Europe', region: 'Europe', flag: 'PT', caption: 'Lisbon - Europe' },
  { id: 4, itemName: 'United States', name: 'US', capital: 'Washington, DC', category: 'North America', region: 'Americas', flag: 'US', caption: 'Washington, DC - Americas' },
  { id: 5, itemName: 'Argentina', name: 'AR', capital: 'Buenos Aires', category: 'South America', region: 'Americas', flag: 'AR', caption: 'Buenos Aires - Americas' },
  { id: 6, itemName: 'Germany', name: 'DE', capital: 'Berlin', category: 'Europe', region: 'Europe', flag: 'DE', caption: 'Berlin - Europe' },
  { id: 7, itemName: 'Mexico', name: 'MX', capital: 'Mexico City', category: 'North America', region: 'Americas', flag: 'MX', caption: 'Mexico City - Americas' },
  { id: 8, itemName: 'Colombia', name: 'CO', capital: 'Bogota', category: 'South America', region: 'Americas', flag: 'CO', caption: 'Bogota - Americas' },
  { id: 9, itemName: 'Uruguay', name: 'UY', capital: 'Montevideo', category: 'South America', region: 'Americas', flag: 'UY', caption: 'Montevideo - Americas' },
  { id: 10, itemName: 'Costa Rica', name: 'CR', capital: 'San Jose', category: 'Central America', region: 'Americas', flag: 'CR', caption: 'San Jose - Americas', disabled: true }
];

const SKILLS = [
  { id: 1, itemName: 'Vue', category: 'Frontend' },
  { id: 2, itemName: 'JavaScript', category: 'Frontend' },
  { id: 3, itemName: 'Node.js', category: 'Backend' },
  { id: 4, itemName: 'GraphQL', category: 'Backend' },
  { id: 5, itemName: 'Docker', category: 'DevOps' },
  { id: 6, itemName: 'Kubernetes', category: 'DevOps' },
  { id: 7, itemName: 'Cypress', category: 'Testing' },
  { id: 8, itemName: 'Playwright', category: 'Testing' }
];

const PERSON_CATEGORIES = ['Brazilian', 'Canadian', 'Mexican', 'Colombian'];
const PERSON_LAST_NAMES = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Wilson', 'Taylor',
  'Thomas', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee', 'Harris', 'Clark'
];

const PEOPLE_SOURCE = Array.from({ length: 180 }, (_, index) => ({
  id: index + 1,
  name: `${PERSON_LAST_NAMES[index % PERSON_LAST_NAMES.length]} ${index + 1}`,
  category: PERSON_CATEGORIES[index % PERSON_CATEGORIES.length]
}));

function createCountryItemFromQuery(query, currentLength) {
  return {
    id: currentLength + 100,
    itemName: query,
    name: query.slice(0, 2).toUpperCase(),
    capital: query,
    category: 'Custom',
    region: 'Custom',
    flag: 'NA',
    caption: `${query} - Custom`
  };
}

function withSkin(settings, skin, disabled) {
  return Object.assign({}, settings, {
    disabled: Boolean(settings.disabled || disabled),
    skin
  });
}

const LIVE_EXAMPLES = [
  {
    id: 'basic-counter',
    title: '01. Basic multi select',
    description: 'Search, select all, clear all, and a real overflow counter with only three visible badges.',
    dataName: 'countries',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 4),
    settings: { text: 'Select Countries', enableSearchFilter: true, primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 3, clearAll: true }
  },
  {
    id: 'all-visible-counter',
    title: '02. All selected badges visible',
    description: 'The counter disappears when every selected item is visible in the trigger.',
    dataName: 'countries',
    data: COUNTRIES.slice(0, 6),
    initialSelected: COUNTRIES.slice(0, 4),
    settings: { text: 'All Selected Visible', enableSearchFilter: true, primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 10, clearAll: true }
  },
  {
    id: 'single-selection',
    title: '03. Single selection',
    description: 'One selected value, searchable data, and close-on-selection behavior.',
    dataName: 'countries',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 1),
    settings: { text: 'Select Country', singleSelection: true, enableSearchFilter: true, primaryKey: 'id', labelKey: 'itemName' }
  },
  {
    id: 'search-by',
    title: '04. Search by specific fields',
    description: 'Search only in the configured object keys and keep the display label stable.',
    dataName: 'countries',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(2, 5),
    settings: { text: 'Search by Country or Capital', enableSearchFilter: true, searchBy: ['itemName', 'capital'], searchPlaceholderText: 'Search country or capital', primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 3 }
  },
  {
    id: 'grouped',
    title: '05. Grouped options',
    description: 'Group rows by category and select or unselect a whole group.',
    dataName: 'countries',
    data: COUNTRIES,
    initialSelected: [COUNTRIES[0], COUNTRIES[4]],
    settings: { text: 'Grouped Countries', enableSearchFilter: true, groupBy: 'category', selectGroup: true, primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 3 }
  },
  {
    id: 'limit-selection',
    title: '06. Selection limit',
    description: 'Stop new selections after the configured limit while keeping removal available.',
    dataName: 'countries',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 2),
    settings: { text: 'Pick Two Countries', enableSearchFilter: true, limitSelection: 2, primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 2 }
  },
  {
    id: 'custom-rendering',
    title: '07. Custom item and badge rendering',
    description: 'Use Vue render functions for menu rows and selected chips.',
    dataName: 'countries',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 3),
    customRenderer: true,
    settings: { text: 'Countries With Renderers', enableSearchFilter: true, groupBy: 'region', primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 3 }
  },
  {
    id: 'add-filter-item',
    title: '08. Search and add item',
    description: 'Create a new option from the current filter text and select it immediately.',
    dataName: 'countries',
    data: COUNTRIES.slice(0, 6),
    initialSelected: COUNTRIES.slice(0, 2),
    addFromFilter: true,
    settings: { text: 'Add Country', enableSearchFilter: true, addNewItemOnFilter: true, addNewButtonText: 'Add country', primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 3 }
  },
  {
    id: 'disabled-toggle',
    title: '09. Disabled state',
    description: 'Toggle disabled mode without losing the controlled selection state.',
    dataName: 'countries',
    data: COUNTRIES.slice(0, 6),
    initialSelected: COUNTRIES.slice(0, 3),
    allowDisabledToggle: true,
    settings: { text: 'Toggle Disabled', enableSearchFilter: true, primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 3 }
  },
  {
    id: 'form-validation',
    title: '10. Controlled form validation',
    description: 'Keep selected items in Vue form state and derive validation from the array.',
    dataName: 'skills',
    data: SKILLS,
    initialSelected: SKILLS.slice(0, 1),
    settings: { text: 'Select Skills', enableSearchFilter: true, groupBy: 'category', primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 3 }
  },
  {
    id: 'long-list',
    title: '11. Long list with keyboard scroll',
    description: 'A compact max height keeps the list scrollable with pointer and keyboard navigation.',
    dataName: 'people',
    data: PEOPLE_SOURCE.slice(0, 120),
    initialSelected: PEOPLE_SOURCE.slice(0, 3),
    settings: { text: 'Select People', enableSearchFilter: true, maxHeight: 140, primaryKey: 'id', labelKey: 'name', badgeShowLimit: 3 }
  },
  {
    id: 'lazy-loading',
    title: '12. Local lazy loading',
    description: 'Append more rows when the scrollable menu reaches the end.',
    dataName: 'people',
    data: PEOPLE_SOURCE.slice(0, 30),
    initialSelected: [],
    lazy: true,
    settings: { text: 'Lazy People', enableSearchFilter: true, lazyLoading: true, maxHeight: 140, primaryKey: 'id', labelKey: 'name', badgeShowLimit: 3 }
  },
  {
    id: 'body-overlay',
    title: '13. Dialog and overflow container',
    description: 'Use appendToBody/tagToBody to escape clipping inside overflow, dialogs, drawers, and modal surfaces.',
    dataName: 'countries',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(0, 3),
    overflowDemo: true,
    settings: { text: 'Dialog dropdown', enableSearchFilter: true, primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 2, maxHeight: 180, appendToBody: true, tagToBody: true, autoPosition: true, position: 'bottom' }
  },
  {
    id: 'body-overlay-top',
    title: '14. Body overlay auto direction',
    description: 'Prefer opening above the trigger, but let autoPosition choose below when the viewport has room.',
    dataName: 'countries',
    data: COUNTRIES,
    initialSelected: COUNTRIES.slice(2, 5),
    overflowDemo: true,
    settings: { text: 'Dialog dropdown top', enableSearchFilter: true, primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 2, maxHeight: 180, appendToBody: true, tagToBody: true, autoPosition: true, position: 'top' }
  },
  {
    id: 'methods',
    title: '15. Instance methods',
    description: 'Open, close, focus search, select all, and clear from external controls.',
    dataName: 'countries',
    data: COUNTRIES.slice(0, 8),
    initialSelected: COUNTRIES.slice(0, 2),
    showMethods: true,
    settings: { text: 'Method Controlled', enableSearchFilter: true, primaryKey: 'id', labelKey: 'itemName', badgeShowLimit: 3 }
  }
];

const ROUTES = [
  { path: 'basic', label: 'Basic example', example: LIVE_EXAMPLES[0] },
  { path: 'allvisible', label: 'All visible counter', example: LIVE_EXAMPLES[1] },
  { path: 'singleselection', label: 'Single selection', example: LIVE_EXAMPLES[2] },
  { path: 'searchfilter', label: 'Search filter', example: LIVE_EXAMPLES[3] },
  { path: 'groupby', label: 'Group By', example: LIVE_EXAMPLES[4] },
  { path: 'limitselection', label: 'Selection limit', example: LIVE_EXAMPLES[5] },
  { path: 'templating', label: 'Templating', example: LIVE_EXAMPLES[6] },
  { path: 'searchfilterAddNewItem', label: 'Search and Add New Item', example: LIVE_EXAMPLES[7] },
  { path: 'disabledstate', label: 'Disabled state', example: LIVE_EXAMPLES[8] },
  { path: 'usinginform', label: 'Using in Forms', example: LIVE_EXAMPLES[9] },
  { path: 'virtualscrolling', label: 'Virtual Scrolling', example: LIVE_EXAMPLES[10] },
  { path: 'lazyloading', label: 'Lazy Loading', example: LIVE_EXAMPLES[11] },
  { path: 'usingInDialog', label: 'Using Inside Dialog', example: LIVE_EXAMPLES[12] },
  { path: 'bodyOverlayTop', label: 'Body Overlay Auto', example: LIVE_EXAMPLES[13] },
  { path: 'dropdownMethods', label: 'Methods', example: LIVE_EXAMPLES[14] }
];

function normalizeHashPath() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  return raw || 'basic';
}

const ExamplePreview = {
  components: { VueMultiselectDropdown },
  props: {
    example: { type: Object, required: true },
    skin: { type: String, required: true }
  },
  data() {
    return {
      dataItems: this.example.data.slice(),
      selectedItems: this.example.initialSelected.slice(),
      disabled: false,
      formName: '',
      formEmail: 'ascasc@aa.com'
    };
  },
  computed: {
    settings() {
      return withSkin(this.example.settings, this.skin, this.example.allowDisabledToggle ? this.disabled : false);
    },
    formIsValid() {
      return this.formEmail.trim().length > 0 && this.selectedItems.length > 0;
    },
    formValue() {
      return {
        name: this.formName,
        email: this.formEmail,
        skills: this.selectedItems
      };
    }
  },
  watch: {
    example: {
      handler() {
        this.dataItems = this.example.data.slice();
        this.selectedItems = this.example.initialSelected.slice();
        this.disabled = false;
        this.formName = '';
        this.formEmail = 'ascasc@aa.com';
      },
      deep: false
    }
  },
  methods: {
    pushLog(message) {
      void message;
    },
    onChange(items) {
      this.selectedItems = items;
      this.pushLog(`${this.example.title}: ${items.length} selected`);
    },
    appendNextChunk() {
      if (!this.example.lazy) {
        return;
      }
      const nextChunk = PEOPLE_SOURCE.slice(this.dataItems.length, this.dataItems.length + 20);
      if (!nextChunk.length) {
        this.pushLog(`${this.example.title}: no more lazy rows`);
        return;
      }
      this.dataItems = this.dataItems.concat(nextChunk);
      this.pushLog(`${this.example.title}: appended ${nextChunk.length} rows`);
    },
    handleCreateCountry(query, item) {
      const next = item || createCountryItemFromQuery(query, this.dataItems.length);
      this.dataItems = this.dataItems.concat(next);
      this.pushLog(`${this.example.title}: created ${query}`);
    },
    renderOption(item, context, h) {
      return h('div', { class: 'country-row' }, [
        h('span', { class: 'country-flag' }, [item.flag || 'NA']),
        h('span', [
          h('strong', [context.label]),
          h('small', [item.capital || item.category || ''])
        ])
      ]);
    },
    renderBadge(item, context, h) {
      return h('span', { class: 'country-badge' }, [`${item.flag || 'NA'} ${item.name || context.label}`]);
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
    <div class="preview-example">
      <div class="example-live" v-if="example.id === 'form-validation'">
        <form class="docs-form" @submit.prevent="pushLog(example.title + ': submitted')">
          <label class="form-field">
            <span>Name</span>
            <input v-model="formName" />
          </label>

          <label class="form-field">
            <span>Email Address <em>* required</em></span>
            <input v-model="formEmail" />
          </label>

          <div class="form-field">
            <span>Skills <em>* required</em></span>
            <vue-multiselect-dropdown
              ref="dropdown"
              :data="dataItems"
              v-model="selectedItems"
              :settings="settings"
              @change="onChange"
            />
          </div>

          <button class="submit-button" type="submit" :disabled="!formIsValid">Submit</button>
        </form>

        <table class="form-output">
          <tbody>
            <tr><td><label>Name</label></td><td>{{ formName }}</td></tr>
            <tr><td><label>Email</label></td><td>{{ formEmail }}</td></tr>
            <tr><td><label>Skills</label></td><td>{{ selectedItems.map((item) => item.itemName).join(', ') }}</td></tr>
          </tbody>
        </table>

        <p class="form-json">{{ JSON.stringify(formValue) }}</p>
        <p class="form-json">Form status: "{{ formIsValid ? 'VALID' : 'INVALID' }}"</p>
      </div>

      <div class="example-live" v-else>
        <div v-if="example.allowDisabledToggle" class="method-bar">
          <button class="small-button" type="button" @click="disabled = !disabled">
            {{ disabled ? 'Enable' : 'Disable' }}
          </button>
        </div>

        <div v-if="example.showMethods" class="method-bar">
          <button type="button" @click="openDropdown">Open</button>
          <button type="button" @click="closeDropdown">Close</button>
          <button type="button" @click="focusSearch">Focus search</button>
          <button type="button" @click="selectAll">Select all</button>
          <button type="button" @click="clearSelection">Clear</button>
        </div>

        <div :class="example.overflowDemo ? 'overflow-lab' : null">
          <div v-if="example.overflowDemo" class="overflow-label">
            Simulated dialog surface with <code>overflow: hidden</code>
          </div>
          <vue-multiselect-dropdown
            ref="dropdown"
            :data="dataItems"
            v-model="selectedItems"
            :settings="settings"
            :render-item="example.customRenderer ? renderOption : undefined"
            :render-badge="example.customRenderer ? renderBadge : undefined"
            @change="onChange"
            @add-filter-new-item="handleCreateCountry"
            @scroll-to-end="appendNextChunk"
            @open="pushLog(example.title + ': opened')"
            @close="pushLog(example.title + ': closed')"
          />
        </div>
      </div>
    </div>
  `
};

const app = createApp({
  components: { VueMultiselectDropdown },
  data() {
    return {
      routes: ROUTES,
      currentPath: normalizeHashPath(),
      skin: 'classic',
      hashHandler: null
    };
  },
  computed: {
    currentRoute() {
      return this.routes.find((route) => route.path === this.currentPath) || this.routes[0];
    },
    installCode() {
      return `npm install @stackline/vue-multiselect-dropdown@${PACKAGE_VERSION} --save-exact`;
    },
    setupCode() {
      return [
        "import { createApp } from 'vue';",
        "import { VueMultiselect } from '@stackline/vue-multiselect-dropdown';",
        '',
        'createApp(App)',
        '  .use(VueMultiselect)',
        "  .mount('#app');"
      ].join('\n');
    },
    settingsCode() {
      return [
        'settings: {',
        "  text: 'Select countries',",
        "  primaryKey: 'id',",
        "  labelKey: 'itemName',",
        '  enableSearchFilter: true,',
        '  badgeShowLimit: 3,',
        '  clearAll: true,',
        "  skin: 'classic'",
        '}'
      ].join('\n');
    },
    renderCode() {
      return [
        '<vue-multiselect-dropdown',
        '  :data="countries"',
        '  v-model="selectedCountries"',
        '  :settings="settings"',
        '/>'
      ].join('\n');
    },
    featurePills() {
      return [
        'Vue v-model',
        'Search',
        'Grouping',
        'Render functions',
        'Lazy loading',
        'Instance methods',
        'ADA-compliant keyboard/ARIA',
        'appendToBody',
        'Classic and modern skins'
      ];
    },
    apiCards() {
      return [
        { kicker: 'Component', title: '<vue-multiselect-dropdown />', copy: 'Use a controlled Vue array through v-model while keeping the settings object familiar.' },
        { kicker: 'Settings', title: 'settings.skin', copy: 'Use settings.skin for classic, material, dark, custom, and brand visual modes. The legacy theme alias stays compatibility-only.' },
        { kicker: 'Events', title: '@select and @de-select', copy: 'Vue events expose selection changes, select-all, clear-all, lazy scrolling, and custom item creation.' },
        { kicker: 'Rendering', title: 'renderItem and renderBadge', copy: 'Pass Vue render functions for option rows and selected chips.' },
        { kicker: 'Accessibility', title: 'ADA-compliant keyboard and ARIA support', copy: 'The trigger, clear-all action, option rows, lazy lists, selected chips, and listbox states expose keyboard flow and ARIA metadata.' },
        { kicker: 'Dialogs', title: 'appendToBody / tagToBody', copy: 'Set appendToBody inside modals, drawers, and overflow containers so the list is moved to document.body and avoids clipping.' }
      ];
    }
  },
  created() {
    const syncHash = () => {
      this.currentPath = normalizeHashPath();
    };
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/basic');
      this.currentPath = 'basic';
    }
    window.addEventListener('hashchange', syncHash);
    this.hashHandler = syncHash;
  },
  beforeUnmount() {
    if (this.hashHandler) {
      window.removeEventListener('hashchange', this.hashHandler);
    }
  },
  template: `
    <div class="docs-shell">
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
            <a class="rail-link" href="live/" target="_blank" rel="noopener">Live project</a>
            <a class="rail-link" href="#api">API</a>
          </section>

          <section class="rail-card">
            <div class="rail-label">Examples</div>
            <nav class="example-nav" aria-label="Vue multiselect examples">
              <a
                v-for="route in routes"
                :key="route.path"
                :class="route.path === currentRoute.path ? 'example-link active' : 'example-link'"
                :href="'#/' + route.path">
                {{ route.label }}
              </a>
            </nav>
          </section>

          <section class="rail-card">
            <div class="rail-label">Release line</div>
            <div class="release-item"><strong>Package</strong><span>${PACKAGE_VERSION}</span></div>
            <div class="release-item"><strong>Vue</strong><span>${VUE_RUNTIME}</span></div>
            <div class="release-item"><strong>Docs path</strong><span>/vue-3/</span></div>
            <div class="release-item"><strong>Promise</strong><span>ADA-compliant keyboard/ARIA support</span></div>
          </section>
        </aside>

        <main class="docs-main">
          <section class="preview-card" id="preview">
            <div class="preview-head">
              <div>
                <div class="setup-label">Live preview</div>
                <h3>{{ currentRoute.label }}</h3>
                <p>Running against package line <code>${PACKAGE_VERSION}</code> and Vue <code>${VUE_RUNTIME}</code>.</p>
              </div>
              <span class="status-pill">Classic selector preserved</span>
            </div>

            <div class="preview-canvas">
              <example-preview :key="currentRoute.path" :example="currentRoute.example" :skin="skin" />
            </div>
          </section>

          <section class="hero-card">
            <span class="hero-badge">Vue 3 family · Multiselect dropdown</span>
            <h2>Material-inspired multiselect, shaped for maintained Vue 3 applications.</h2>
            <p class="hero-copy">
              This Vue 3 line keeps the familiar Stackline settings contract while using idiomatic Vue v-model,
              render functions, instance methods, and component events. Version <code>${PACKAGE_VERSION}</code> includes
              ADA-compliant keyboard and ARIA behavior, accurate badge counters, clear-all controls, dialog-safe body
              overlays, and matching classic/material/dark/custom/brand skins.
            </p>

            <div class="pill-row">
              <span class="feature-pill" v-for="pill in featurePills" :key="pill">{{ pill }}</span>
            </div>

            <div class="compat-grid">
              <div class="compat-card"><strong>Vue v-model first</strong>Keep selection in component state through <code>v-model</code> and <code>@change</code>.</div>
              <div class="compat-card"><strong>Consistent behavior where it matters</strong>Skins, counters, keyboard behavior, and body overlays follow the validated Stackline behavior.</div>
              <div class="compat-card"><strong>Render functions instead of templates</strong>Customize option rows and selected chips with Vue render functions.</div>
            </div>
          </section>

          <section class="setup-grid" id="install">
            <article class="setup-card"><div class="setup-label">Step 1</div><h3>Install the package</h3><pre>{{ installCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 2</div><h3>Register the plugin</h3><pre>{{ setupCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 3</div><h3>Create settings</h3><pre>{{ settingsCode }}</pre></article>
            <article class="setup-card"><div class="setup-label">Step 4</div><h3>Render with v-model</h3><pre>{{ renderCode }}</pre></article>
          </section>

          <section class="api-grid" id="api">
            <article class="api-card" v-for="card in apiCards" :key="card.title">
              <div class="setup-label">{{ card.kicker }}</div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.copy }}</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  `
});

app.component('example-preview', ExamplePreview);
app.mount('#app');
