import { ensureDropdownStyles } from './styles';
import type { DropdownItem, DropdownRenderContext, DropdownSettings, PrimitiveItem } from './types';

type CreateElement = (...args: any[]) => any;
type GroupedItems<T> = Array<{ name: string; items: T[] }>;
type IconName = 'remove' | 'clear' | 'angle-down' | 'angle-up' | 'search';

const DEFAULT_SETTINGS: Required<DropdownSettings<any>> = {
  singleSelection: false,
  text: 'Select',
  enableCheckAll: true,
  selectAllText: 'Select All',
  unSelectAllText: 'Unselect All',
  filterSelectAllText: 'Select filtered',
  filterUnSelectAllText: 'Unselect filtered',
  enableFilterSelectAll: true,
  enableSearchFilter: false,
  searchBy: [],
  maxHeight: 300,
  badgeShowLimit: Number.MAX_SAFE_INTEGER,
  classes: '',
  limitSelection: 0,
  disabled: false,
  searchPlaceholderText: 'Search',
  groupBy: '',
  showCheckbox: true,
  noDataLabel: 'No Data Available',
  searchAutofocus: true,
  lazyLoading: false,
  labelKey: 'itemName',
  primaryKey: 'id',
  position: 'bottom',
  autoPosition: true,
  loading: false,
  selectGroup: false,
  addNewItemOnFilter: false,
  addNewButtonText: 'Add',
  escapeToClose: true,
  clearAll: true,
  closeDropDownOnSelection: false,
  tagToBody: false,
  appendToBody: false,
  theme: '',
  skin: 'classic',
  ariaLabel: 'Multiselect dropdown',
  listboxAriaLabel: 'Dropdown options',
  searchAriaLabel: 'Search options',
  clearSearchAriaLabel: 'Clear search',
  clearAllAriaLabel: 'Clear selected options',
  removeItemAriaLabel: 'Remove selected option',
  openDropdownAriaLabel: 'Open dropdown',
  closeDropdownAriaLabel: 'Close dropdown',
  loadingText: 'Loading options'
};

function iconPath(name: IconName) {
  if (name === 'remove') {
    return 'M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z';
  }

  if (name === 'clear') {
    return 'M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z';
  }

  if (name === 'search') {
    return 'M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z';
  }

  if (name === 'angle-up') {
    return 'M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z';
  }

  return 'M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z';
}

function renderIcon(h: CreateElement, name: IconName, className = 'vmsd-icon') {
  const viewBox = name === 'remove' ? '0 0 47.971 47.971' : name === 'clear' ? '0 0 51.976 51.976' : name === 'search' ? '0 0 615.52 615.52' : '0 0 612 612';
  return h('svg', { class: className, attrs: { viewBox, focusable: 'false', 'aria-hidden': 'true' } }, [
    h('path', { attrs: { d: iconPath(name) } })
  ]);
}

function isPrimitiveItem(item: DropdownItem): item is PrimitiveItem {
  return typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean';
}

function getLabel<T extends DropdownItem>(item: T, settings: Required<DropdownSettings<T>>) {
  if (isPrimitiveItem(item)) {
    return String(item);
  }

  const keys = [settings.labelKey, 'itemName', 'name', 'label', 'title', 'value'].filter(Boolean);

  for (const key of keys) {
    if (key && item[key] != null) {
      return String(item[key]);
    }
  }

  return JSON.stringify(item);
}

function getPrimaryValue<T extends DropdownItem>(item: T, settings: Required<DropdownSettings<T>>) {
  if (isPrimitiveItem(item)) {
    return String(item);
  }

  const keys = [settings.primaryKey, 'id', 'value', 'key'].filter(Boolean);
  for (const key of keys) {
    if (key && item[key] != null) {
      return String(item[key]);
    }
  }

  return getLabel(item, settings);
}

function isDisabledItem<T extends DropdownItem>(item: T) {
  return !isPrimitiveItem(item) && Boolean(item.disabled);
}

function itemMatchesQuery<T extends DropdownItem>(
  item: T,
  query: string,
  settings: Required<DropdownSettings<T>>
) {
  if (!query.trim()) {
    return true;
  }

  const needle = query.trim().toLowerCase();
  const haystack = new Set<string>();
  haystack.add(getLabel(item, settings).toLowerCase());

  if (!isPrimitiveItem(item)) {
    const searchKeys = settings.searchBy.length ? settings.searchBy : [settings.labelKey];
    for (const key of searchKeys) {
      if (key && item[key] != null) {
        haystack.add(String(item[key]).toLowerCase());
      }
    }
  }

  for (const value of haystack) {
    if (value.indexOf(needle) >= 0) {
      return true;
    }
  }

  return false;
}

function getGroupName<T extends DropdownItem>(item: T, settings: Required<DropdownSettings<T>>) {
  if (!settings.groupBy) {
    return '';
  }

  if (typeof settings.groupBy === 'function') {
    return settings.groupBy(item);
  }

  if (!isPrimitiveItem(item)) {
    const groupKey = settings.groupBy as string;
    const objectItem = item as Record<string, any>;
    if (groupKey in objectItem) {
      return String(objectItem[groupKey] || '');
    }
  }

  return '';
}

function buildGroups<T extends DropdownItem>(items: T[], settings: Required<DropdownSettings<T>>) {
  if (!settings.groupBy) {
    return [] as GroupedItems<T>;
  }

  const map = new Map<string, T[]>();
  for (const item of items) {
    const groupName = getGroupName(item, settings) || 'Ungrouped';
    const current = map.get(groupName) || [];
    current.push(item);
    map.set(groupName, current);
  }

  return Array.from(map.entries()).map(([name, groupedItems]) => ({ name, items: groupedItems }));
}

function mergeUniqueItems<T extends DropdownItem>(
  base: T[],
  extra: T[],
  settings: Required<DropdownSettings<T>>
) {
  const bucket = new Map<string, T>();
  for (const item of base.concat(extra)) {
    bucket.set(getPrimaryValue(item, settings), item);
  }
  return Array.from(bucket.values());
}

function callRenderFunction(
  renderFunction: Function | undefined,
  h: CreateElement,
  item: DropdownItem,
  context: DropdownRenderContext
) {
  if (!renderFunction) {
    return null;
  }

  return renderFunction(item, context, h);
}

function escapeSelectorValue(value: string) {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(value);
  }

  return value.replace(/["\\]/g, '\\$&');
}

function isActivationKey(event: KeyboardEvent) {
  return event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar';
}

function isTextInputTarget(target: EventTarget | null) {
  const element = target as HTMLElement | null;
  if (!element) {
    return false;
  }

  return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.isContentEditable;
}

export const VueMultiselectDropdown = {
  name: 'VueMultiselectDropdown',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: undefined
    },
    selectedItems: {
      type: Array,
      default: undefined
    },
    defaultSelectedItems: {
      type: Array,
      default: () => []
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    },
    renderItem: {
      type: Function,
      default: undefined
    },
    renderBadge: {
      type: Function,
      default: undefined
    },
    renderEmptyState: {
      type: Function,
      default: undefined
    }
  },
  data(this: any) {
    return {
      isOpen: false,
      query: '',
      focusedKey: '',
      internalSelected: Array.isArray(this.defaultSelectedItems) ? this.defaultSelectedItems.slice() : [],
      menuStyle: {},
      bodyListMaxHeight: undefined as number | undefined,
      menuPlaceholder: null as Comment | null,
      menuAttachedToBody: false,
      effectivePosition: 'bottom',
      instanceId: `stackline-vmsd-${Math.random().toString(36).slice(2)}`
    };
  },
  computed: {
    resolvedSettings(this: any) {
      const merged = {
        ...DEFAULT_SETTINGS,
        ...(this.settings || {})
      };
      const skin = merged.skin || merged.theme || 'classic';
      return {
        ...merged,
        skin,
        disabled: Boolean(merged.disabled || this.disabled),
        searchBy: Array.isArray(merged.searchBy) ? merged.searchBy : []
      };
    },
    selected(this: any) {
      if (Array.isArray(this.selectedItems)) {
        return this.selectedItems;
      }
      if (Array.isArray(this.value)) {
        return this.value;
      }
      return this.internalSelected;
    },
    filteredItems(this: any) {
      const settings = this.resolvedSettings as Required<DropdownSettings<DropdownItem>>;
      return (this.data || []).filter((item: DropdownItem) => itemMatchesQuery(item, this.query, settings));
    },
    groupedItems(this: any) {
      return buildGroups(this.filteredItems, this.resolvedSettings);
    },
    visibleSelected(this: any) {
      const limit = this.resolvedSettings.badgeShowLimit;
      return this.selected.slice(0, limit);
    },
    hiddenSelectedCount(this: any) {
      return Math.max(0, this.selected.length - this.visibleSelected.length);
    },
    openDirection(this: any) {
      return this.effectivePosition === 'top' ? 'up' : 'down';
    },
    shouldAppendToBody(this: any) {
      return Boolean(this.resolvedSettings.appendToBody || this.resolvedSettings.tagToBody);
    }
  },
  watch: {
    isOpen(this: any, value: boolean) {
      this.$nextTick(() => {
        if (value) {
          this.attachMenuToBody();
          this.updateMenuPosition();
          if (this.resolvedSettings.searchAutofocus && this.resolvedSettings.enableSearchFilter) {
            this.focusSearch();
          }
          this.$emit('open');
        } else {
          this.restoreMenuToComponent();
          this.menuStyle = {};
          this.bodyListMaxHeight = undefined;
          this.$emit('close');
        }
      });
    },
    selected(this: any) {
      this.$nextTick(this.updateMenuPosition);
    },
    filteredItems(this: any) {
      this.$nextTick(this.updateMenuPosition);
    },
    settings: {
      deep: true,
      handler(this: any) {
        this.$nextTick(this.updateMenuPosition);
      }
    }
  },
  mounted(this: any) {
    ensureDropdownStyles();
    document.addEventListener('click', this.onDocumentClick, true);
    document.addEventListener('keydown', this.onDocumentKeydown, true);
    window.addEventListener('resize', this.updateMenuPosition);
    window.addEventListener('scroll', this.updateMenuPosition, true);
  },
  beforeDestroy(this: any) {
    document.removeEventListener('click', this.onDocumentClick, true);
    document.removeEventListener('keydown', this.onDocumentKeydown, true);
    window.removeEventListener('resize', this.updateMenuPosition);
    window.removeEventListener('scroll', this.updateMenuPosition, true);
    this.restoreMenuToComponent();
  },
  methods: {
    getLabel(this: any, item: DropdownItem) {
      return getLabel(item, this.resolvedSettings);
    },
    getKey(this: any, item: DropdownItem) {
      return getPrimaryValue(item, this.resolvedSettings);
    },
    isSelected(this: any, item: DropdownItem) {
      const key = this.getKey(item);
      return this.selected.some((selectedItem: DropdownItem) => this.getKey(selectedItem) === key);
    },
    visibleSelectableItems(this: any) {
      return this.filteredItems.filter((item: DropdownItem) => !isDisabledItem(item));
    },
    emitSelection(this: any, items: DropdownItem[]) {
      if (!Array.isArray(this.selectedItems) && !Array.isArray(this.value)) {
        this.internalSelected = items;
      }
      this.$emit('input', items);
      this.$emit('update:selectedItems', items);
      this.$emit('change', items);
    },
    openDropdown(this: any) {
      if (this.resolvedSettings.disabled) {
        return;
      }
      this.isOpen = true;
    },
    closeDropdown(this: any) {
      this.isOpen = false;
      this.query = '';
      this.focusedKey = '';
    },
    toggleDropdown(this: any) {
      if (this.isOpen) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    },
    focusSearch(this: any) {
      if (!this.isOpen) {
        this.openDropdown();
      }
      const search = this.$refs.searchInput as HTMLInputElement | undefined;
      if (search && typeof search.focus === 'function') {
        search.focus();
      }
    },
    clearSelection(this: any, event?: Event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const previous = this.selected.slice();
      this.emitSelection([]);
      this.$emit('de-select-all', previous);
    },
    selectAll(this: any, event?: Event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const settings = this.resolvedSettings;
      const selectable = this.visibleSelectableItems();
      const allSelected = selectable.length > 0 && selectable.every((item: DropdownItem) => this.isSelected(item));
      if (allSelected) {
        const keys = new Set(selectable.map((item: DropdownItem) => this.getKey(item)));
        const next = this.selected.filter((item: DropdownItem) => !keys.has(this.getKey(item)));
        this.emitSelection(next);
        this.$emit('de-select-all', selectable);
        return;
      }
      const remainingCapacity = settings.limitSelection
        ? Math.max(settings.limitSelection - this.selected.length, 0)
        : Number.MAX_SAFE_INTEGER;
      const currentKeys = new Set(this.selected.map((item: DropdownItem) => this.getKey(item)));
      const nextItemsToAdd = selectable
        .filter((item: DropdownItem) => !currentKeys.has(this.getKey(item)))
        .slice(0, remainingCapacity);
      const next = settings.singleSelection ? selectable.slice(0, 1) : mergeUniqueItems(this.selected, nextItemsToAdd, settings);
      this.emitSelection(next);
      this.$emit('select-all', next);
    },
    deSelectAll(this: any, event?: Event) {
      this.clearSelection(event);
    },
    selectGroup(this: any, groupName: string, items: DropdownItem[], event: Event) {
      event.preventDefault();
      event.stopPropagation();
      const settings = this.resolvedSettings;
      const selectable = items.filter((item) => !isDisabledItem(item));
      const everySelected = selectable.every((item) => this.isSelected(item));
      if (everySelected) {
        const keys = new Set(selectable.map((item) => this.getKey(item)));
        const next = this.selected.filter((item: DropdownItem) => !keys.has(this.getKey(item)));
        this.emitSelection(next);
        this.$emit('group-de-select', groupName, selectable);
        return;
      }
      const next = settings.singleSelection ? selectable.slice(0, 1) : mergeUniqueItems(this.selected, selectable, settings);
      this.emitSelection(next);
      this.$emit('group-select', groupName, selectable);
    },
    toggleItem(this: any, item: DropdownItem, event?: Event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const isAlreadySelected = this.isSelected(item);
      const limitReached = Boolean(this.resolvedSettings.limitSelection) && this.selected.length >= this.resolvedSettings.limitSelection;
      if (this.resolvedSettings.disabled || isDisabledItem(item) || (limitReached && !isAlreadySelected)) {
        return;
      }

      const key = this.getKey(item);
      const exists = this.selected.some((selectedItem: DropdownItem) => this.getKey(selectedItem) === key);

      if (exists) {
        const next = this.selected.filter((selectedItem: DropdownItem) => this.getKey(selectedItem) !== key);
        this.emitSelection(next);
        this.$emit('de-select', item);
        return;
      }

      let next = this.resolvedSettings.singleSelection ? [item] : this.selected.concat(item);
      if (this.resolvedSettings.limitSelection > 0) {
        next = next.slice(0, this.resolvedSettings.limitSelection);
      }
      this.emitSelection(next);
      this.$emit('select', item);

      if (this.resolvedSettings.singleSelection || this.resolvedSettings.closeDropDownOnSelection) {
        this.closeDropdown();
      }
    },
    removeItem(this: any, item: DropdownItem, event?: Event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const key = this.getKey(item);
      const next = this.selected.filter((selectedItem: DropdownItem) => this.getKey(selectedItem) !== key);
      this.emitSelection(next);
      this.$emit('de-select', item);
    },
    addFilterItem(this: any, event: Event) {
      event.preventDefault();
      event.stopPropagation();
      const label = this.query.trim();
      if (!label) {
        return;
      }
      const item = {
        [this.resolvedSettings.primaryKey]: label.toLowerCase().replace(/\s+/g, '-'),
        [this.resolvedSettings.labelKey]: label
      };
      this.$emit('add-filter-new-item', label, item);
      this.toggleItem(item);
      this.query = '';
    },
    onTriggerKeydown(this: any, event: KeyboardEvent) {
      if (isActivationKey(event)) {
        event.preventDefault();
        this.toggleDropdown();
        return;
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.openDropdown();
        this.focusFirstOption();
        return;
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.openDropdown();
        this.focusLastOption();
        return;
      }
      if (event.key === 'Escape') {
        this.closeDropdown();
      }
    },
    onListKeydown(this: any, event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        this.closeDropdown();
        return;
      }

      if (isTextInputTarget(event.target) && event.key !== 'ArrowDown') {
        return;
      }

      const selectable = this.visibleSelectableItems();
      if (!selectable.length) {
        return;
      }

      const currentIndex = Math.max(0, selectable.findIndex((item: DropdownItem) => this.getKey(item) === this.focusedKey));
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        event.stopPropagation();
        const nextItem = selectable[Math.min(currentIndex + 1, selectable.length - 1)];
        this.focusOption(nextItem);
        return;
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        event.stopPropagation();
        const nextItem = selectable[Math.max(currentIndex - 1, 0)];
        this.focusOption(nextItem);
        return;
      }
      if (event.key === 'Home') {
        event.preventDefault();
        event.stopPropagation();
        this.focusFirstOption();
        return;
      }
      if (event.key === 'End') {
        event.preventDefault();
        event.stopPropagation();
        this.focusLastOption();
        return;
      }
      if (isActivationKey(event)) {
        event.preventDefault();
        event.stopPropagation();
        const activeItem = selectable.find((item: DropdownItem) => this.getKey(item) === this.focusedKey) || selectable[0];
        this.toggleItem(activeItem);
        return;
      }
    },
    focusFirstOption(this: any) {
      this.$nextTick(() => {
        const first = this.visibleSelectableItems()[0];
        if (first) {
          this.focusOption(first);
        }
      });
    },
    focusLastOption(this: any) {
      this.$nextTick(() => {
        const items = this.visibleSelectableItems();
        const last = items[items.length - 1];
        if (last) {
          this.focusOption(last);
        }
      });
    },
    focusOption(this: any, item: DropdownItem) {
      const key = this.getKey(item);
      this.focusedKey = key;
      this.$nextTick(() => {
        const menu = this.$refs.menu as HTMLElement | undefined;
        const option = menu?.querySelector<HTMLElement>(`[data-vmsd-key="${escapeSelectorValue(key)}"]`);
        if (option) {
          option.focus();
          option.scrollIntoView({ block: 'nearest' });
        }
      });
    },
    onInlineKeydown(this: any, event: KeyboardEvent) {
      if (isActivationKey(event)) {
        event.stopPropagation();
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        event.stopPropagation();
        this.openDropdown();
        this.focusFirstOption();
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        event.stopPropagation();
        this.openDropdown();
        this.focusLastOption();
      }
    },
    onTriggerClick(this: any, event: Event) {
      const target = event.target as HTMLElement | null;
      if (target && target.closest('button')) {
        return;
      }
      this.toggleDropdown();
    },
    onDocumentClick(this: any, event: MouseEvent) {
      if (!this.isOpen) {
        return;
      }
      const root = this.$el as HTMLElement;
      const menu = this.$refs.menu as HTMLElement | undefined;
      const target = event.target as Node;
      if ((root && root.contains(target)) || (menu && menu.contains(target))) {
        return;
      }
      this.closeDropdown();
    },
    onDocumentKeydown(this: any, event: KeyboardEvent) {
      if (this.isOpen && this.resolvedSettings.escapeToClose && event.key === 'Escape') {
        this.closeDropdown();
      }
    },
    onListScroll(this: any, event: Event) {
      const target = event.target as HTMLElement;
      if (!target) {
        return;
      }
      const payload = {
        scrollTop: target.scrollTop,
        scrollHeight: target.scrollHeight,
        clientHeight: target.clientHeight
      };
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 4) {
        this.$emit('scroll-to-end', payload);
      }
    },
    attachMenuToBody(this: any) {
      if (!this.shouldAppendToBody || !this.isOpen || typeof document === 'undefined') {
        return;
      }
      const menu = this.$refs.menu as HTMLElement | undefined;
      if (!menu || menu.parentNode === document.body) {
        return;
      }
      if (!this.menuPlaceholder && menu.parentNode) {
        this.menuPlaceholder = document.createComment('stackline-vue-multiselect-menu');
        menu.parentNode.insertBefore(this.menuPlaceholder, menu);
      }
      document.body.appendChild(menu);
      this.menuAttachedToBody = true;
    },
    restoreMenuToComponent(this: any) {
      const menu = this.$refs.menu as HTMLElement | undefined;
      if (!menu || !this.menuPlaceholder || !this.menuPlaceholder.parentNode) {
        return;
      }
      this.menuPlaceholder.parentNode.insertBefore(menu, this.menuPlaceholder.nextSibling);
      this.menuPlaceholder.parentNode.removeChild(this.menuPlaceholder);
      this.menuPlaceholder = null;
      this.menuAttachedToBody = false;
      this.menuStyle = {};
    },
    updateMenuPosition(this: any) {
      if (!this.isOpen || typeof window === 'undefined') {
        return;
      }
      const trigger = this.$refs.trigger as HTMLElement | undefined;
      const menu = this.$refs.menu as HTMLElement | undefined;
      if (!trigger || !menu) {
        return;
      }
      const rect = trigger.getBoundingClientRect();
      const gap = 8;
      const viewportPadding = 8;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const spaceOnTop = rect.top;
      const spaceOnBottom = viewportHeight - rect.bottom;
      const menuHeight = menu.offsetHeight || Math.min(this.resolvedSettings.maxHeight + 92, 420);
      const preferredPosition = this.resolvedSettings.position === 'top' ? 'top' : 'bottom';
      const topHasMeaningfullyMoreRoom = spaceOnTop > spaceOnBottom + 48;
      const resolvedPosition = this.resolvedSettings.autoPosition
        ? spaceOnBottom < menuHeight && topHasMeaningfullyMoreRoom && menuHeight < spaceOnTop
          ? 'top'
          : 'bottom'
        : preferredPosition;

      this.effectivePosition = resolvedPosition;

      if (!this.shouldAppendToBody) {
        this.bodyListMaxHeight = undefined;
        return;
      }

      const list = this.$refs.list as HTMLElement | undefined;
      const listHeight = list?.offsetHeight || Math.min(this.resolvedSettings.maxHeight, menuHeight);
      const nonListHeight = Math.max(0, menuHeight - listHeight);
      const availableHeight = resolvedPosition === 'top'
        ? Math.max(0, rect.top - gap - viewportPadding)
        : Math.max(0, viewportHeight - rect.bottom - gap - viewportPadding);
      const nextListMaxHeight = menuHeight > 0
        ? Math.max(0, Math.min(this.resolvedSettings.maxHeight, availableHeight - nonListHeight))
        : this.resolvedSettings.maxHeight;
      const positionedMenuHeight = nonListHeight + nextListMaxHeight;
      const preferredTop = resolvedPosition === 'top'
        ? rect.top - positionedMenuHeight - gap
        : rect.bottom + gap;
      const top = resolvedPosition === 'top' ? Math.max(viewportPadding, preferredTop) : preferredTop;
      const maxWidth = Math.max(0, window.innerWidth - viewportPadding * 2);
      const width = Math.min(rect.width, maxWidth);
      const left = Math.min(Math.max(viewportPadding, rect.left), window.innerWidth - width - viewportPadding);
      const style: Record<string, string> = {
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        maxWidth: `${maxWidth}px`,
        zIndex: '100000',
        display: this.isOpen ? 'block' : 'none'
      };
      this.bodyListMaxHeight = nextListMaxHeight;
      this.menuStyle = style;
    }
  },
  render(this: any, h: CreateElement) {
    const settings = this.resolvedSettings as Required<DropdownSettings<DropdownItem>>;
    const skin = String(settings.skin || settings.theme || 'classic');
    const skinFallbackClass = ['classic', 'material', 'dark', 'custom'].includes(skin) ? '' : 'theme-custom';
    const hasSelection = this.selected.length > 0;
    const visibleBadges = this.visibleSelected;
    const hiddenCount = this.hiddenSelectedCount;
    const hasClear = settings.clearAll && hasSelection && !settings.disabled;
    const selectableItems = this.visibleSelectableItems();
    const allFilteredSelected = selectableItems.length > 0 && selectableItems.every((item: DropdownItem) => this.isSelected(item));
    const hasBulkActions = (settings.enableCheckAll && !settings.singleSelection) || Boolean(settings.addNewItemOnFilter && this.query.trim());
    const menuClasses = [
      'vmsd-menu',
      `vmsd-${this.effectivePosition}`,
      `skin-${skin}`,
      `theme-${skin}`,
      skinFallbackClass,
      this.shouldAppendToBody ? 'vmsd-body-overlay' : ''
    ].filter(Boolean);

    const badges = settings.singleSelection && hasSelection
      ? [h('span', { class: 'vmsd-single-value' }, [this.getLabel(this.selected[0])])]
      : visibleBadges.map((item: DropdownItem) => {
          const label = this.getLabel(item);
          const context: DropdownRenderContext = {
            item,
            label,
            selected: true,
            disabled: false,
            query: this.query,
            toggle: () => this.toggleItem(item),
            remove: () => this.removeItem(item)
          };
          const rendered = callRenderFunction(this.renderBadge, h, item, context);
          const removeLabel = typeof settings.removeItemAriaLabel === 'function'
            ? settings.removeItemAriaLabel(item)
            : `${settings.removeItemAriaLabel}: ${label}`;
          return h('span', { class: 'vmsd-badge', key: this.getKey(item) }, [
            h('span', { class: 'vmsd-badge-label' }, [rendered || label]),
            settings.disabled
              ? null
              : h(
                  'button',
                  {
                    class: 'vmsd-badge-remove',
                    attrs: { type: 'button', 'aria-label': removeLabel },
                    on: {
                      click: (event: Event) => this.removeItem(item, event),
                      keydown: this.onInlineKeydown
                    }
                  },
                  [renderIcon(h, 'remove')]
                )
          ]);
        });

    const valueContent = hasSelection
      ? [h('span', { class: 'vmsd-badge-list' }, badges)]
      : [h('span', { class: 'vmsd-placeholder' }, [settings.text])];

    if (hiddenCount > 0) {
      valueContent.push(h('span', { class: 'vmsd-overflow', attrs: { 'aria-label': `${hiddenCount} more selected options` } }, [`+${hiddenCount}`]));
    }

    const trigger = h(
      'div',
      {
        ref: 'trigger',
        class: ['vmsd-trigger', settings.disabled ? 'vmsd-disabled' : ''],
        attrs: {
          role: 'combobox',
          tabindex: settings.disabled ? '-1' : '0',
          'aria-label': hasSelection ? `${settings.ariaLabel}: ${this.selected.map((item: DropdownItem) => this.getLabel(item)).join(', ')}` : settings.ariaLabel,
          'aria-expanded': this.isOpen ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-disabled': settings.disabled ? 'true' : 'false',
          'aria-controls': `${this.instanceId}-listbox`
        },
        on: {
          click: this.onTriggerClick,
          keydown: this.onTriggerKeydown
        }
      },
      [
        h('div', { class: 'vmsd-value' }, valueContent),
        h('div', { class: 'vmsd-actions' }, [
          hasClear
            ? h(
                'button',
                {
                  class: 'vmsd-clear',
                  attrs: { type: 'button', 'aria-label': settings.clearAllAriaLabel },
                  on: {
                    click: (event: Event) => this.clearSelection(event),
                    keydown: this.onInlineKeydown
                  }
                },
                [renderIcon(h, 'remove')]
              )
            : null,
          h(
            'button',
            {
              class: 'vmsd-arrow-button',
              attrs: {
                type: 'button',
                disabled: settings.disabled,
                'aria-label': this.isOpen ? settings.closeDropdownAriaLabel : settings.openDropdownAriaLabel,
                'aria-expanded': this.isOpen ? 'true' : 'false',
                'aria-controls': `${this.instanceId}-listbox`
              },
              on: {
                click: (event: Event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  this.toggleDropdown();
                },
                keydown: this.onInlineKeydown
              }
            },
            [h('span', { class: 'vmsd-arrow', attrs: { 'aria-hidden': 'true' } }, [renderIcon(h, this.isOpen ? 'angle-up' : 'angle-down')])]
          )
        ])
      ]
    );

    const search = settings.enableSearchFilter
      ? h('div', { class: 'vmsd-search-shell' }, [
          renderIcon(h, 'search', 'vmsd-search-icon'),
          h('input', {
            ref: 'searchInput',
            class: 'vmsd-search-input',
            domProps: { value: this.query },
            attrs: { type: 'text', placeholder: settings.searchPlaceholderText, 'aria-label': settings.searchAriaLabel },
            on: {
              input: (event: Event) => {
                this.query = String((event.target as HTMLInputElement).value || '');
              },
              keydown: this.onListKeydown
            }
          }),
          this.query
            ? h(
                'button',
                {
                  class: 'vmsd-search-clear',
                  attrs: { type: 'button', 'aria-label': settings.clearSearchAriaLabel },
                  on: {
                    click: () => (this.query = ''),
                    keydown: this.onInlineKeydown
                  }
                },
                [renderIcon(h, 'clear')]
              )
            : null
        ])
      : null;

    const bulkActions = hasBulkActions
      ? h('div', { class: 'vmsd-bulk-actions' }, [
          settings.enableCheckAll && !settings.singleSelection
            ? h(
                'button',
                {
                  class: 'vmsd-inline-button vmsd-select-all-button',
                  attrs: { type: 'button', disabled: settings.disabled || selectableItems.length === 0 },
                  on: { click: (event: Event) => this.selectAll(event), keydown: this.onInlineKeydown }
                },
                [
                  settings.showCheckbox ? h('span', { class: 'vmsd-checkbox', attrs: { 'data-checked': allFilteredSelected ? 'true' : 'false', 'aria-hidden': 'true' } }) : null,
                  h('span', [allFilteredSelected ? settings.unSelectAllText : settings.selectAllText])
                ]
              )
            : null,
          settings.addNewItemOnFilter && this.query.trim()
            ? h(
                'button',
                {
                  class: 'vmsd-inline-button vmsd-add-button',
                  attrs: { type: 'button' },
                  on: { click: this.addFilterItem, keydown: this.onInlineKeydown }
                },
                [`${settings.addNewButtonText} "${this.query.trim()}"`]
              )
            : null
        ])
      : null;

    const renderOption = (item: DropdownItem) => {
      const label = this.getLabel(item);
      const selected = this.isSelected(item);
      const limitReached = Boolean(settings.limitSelection) && this.selected.length >= settings.limitSelection;
      const disabled = settings.disabled || isDisabledItem(item) || (limitReached && !selected);
      const key = this.getKey(item);
      const context: DropdownRenderContext = {
        item,
        label,
        selected,
        disabled,
        query: this.query,
        toggle: () => this.toggleItem(item),
        remove: () => this.removeItem(item)
      };
      const rendered = callRenderFunction(this.renderItem, h, item, context);
      return h(
        'div',
        {
          key,
          class: ['vmsd-option', selected ? 'vmsd-selected' : '', disabled ? 'vmsd-disabled' : ''],
          attrs: {
            role: 'option',
            tabindex: disabled ? '-1' : '0',
            'data-vmsd-option': 'true',
            'data-vmsd-key': key,
            'aria-disabled': disabled ? 'true' : 'false',
            'aria-selected': selected ? 'true' : 'false'
          },
          on: {
            click: (event: Event) => {
              if (!disabled) {
                this.toggleItem(item, event);
              }
            },
            focus: () => (this.focusedKey = key),
            mouseenter: () => (this.focusedKey = key),
            keydown: this.onListKeydown
          }
        },
        [
          settings.showCheckbox ? h('span', { class: 'vmsd-checkbox', attrs: { 'data-checked': selected ? 'true' : 'false', 'aria-hidden': 'true' } }) : null,
          rendered || h('div', { class: 'vmsd-option-body' }, [
            h('div', { class: 'vmsd-option-label' }, [label]),
            !isPrimitiveItem(item) && item.caption ? h('span', { class: 'vmsd-option-hint' }, [String(item.caption)]) : null
          ])
        ]
      );
    };

    const listChildren = settings.loading
      ? [h('div', { class: 'vmsd-state', attrs: { role: 'status' } }, [settings.loadingText])]
      : settings.groupBy
      ? this.groupedItems.map((group: { name: string; items: DropdownItem[] }) =>
          h('div', { class: 'vmsd-group', key: group.name, attrs: { role: 'group', 'aria-label': group.name } }, [
            h('div', { class: 'vmsd-group-header' }, [
              h('span', [`${group.name} · ${group.items.length}`]),
              settings.selectGroup
                ? h(
                    'button',
                    {
                      class: 'vmsd-group-action',
                      attrs: { type: 'button' },
                      on: { click: (event: Event) => this.selectGroup(group.name, group.items, event) }
                    },
                    [group.items.filter((item) => !isDisabledItem(item)).every((item) => this.isSelected(item)) ? 'Unselect' : 'Select']
                  )
                : null
            ]),
            group.items.map(renderOption)
          ])
        )
      : this.filteredItems.map(renderOption);

    if (!this.filteredItems.length && !settings.loading) {
      const emptyContent = this.renderEmptyState ? this.renderEmptyState(this.query, h) : settings.noDataLabel;
      listChildren.push(h('div', { class: 'vmsd-state' }, [emptyContent]));
    }

    const menu = h(
      'div',
      {
        ref: 'menu',
        class: menuClasses,
        style: {
          ...(this.shouldAppendToBody ? this.menuStyle : {}),
          display: this.isOpen ? 'block' : 'none'
        },
        attrs: {
          role: 'presentation',
          'aria-hidden': this.isOpen ? 'false' : 'true'
        },
        on: { keydown: this.onListKeydown }
      },
      [
        h('div', { class: 'vmsd-toolbar' }, [bulkActions, search]),
        h(
          'div',
          {
            ref: 'list',
            class: 'vmsd-list',
            style: { maxHeight: `${this.shouldAppendToBody && this.bodyListMaxHeight != null ? this.bodyListMaxHeight : settings.maxHeight}px` },
            attrs: { id: `${this.instanceId}-listbox`, role: 'listbox', 'aria-label': settings.listboxAriaLabel, 'aria-multiselectable': settings.singleSelection ? 'false' : 'true' },
            on: { scroll: this.onListScroll }
          },
          listChildren
        )
      ]
    );

    return h(
      'div',
      {
        class: [
          'vmsd-root',
          `skin-${skin}`,
          `theme-${skin}`,
          skinFallbackClass,
          this.isOpen ? 'vmsd-open' : '',
          this.effectivePosition === 'top' ? 'vmsd-opens-up' : 'vmsd-opens-down',
          settings.classes,
          hasSelection ? 'vmsd-has-selection' : '',
          hasClear ? 'vmsd-has-clear' : '',
          hiddenCount > 0 ? 'vmsd-has-overflow' : ''
        ],
        attrs: {
          'data-open': this.isOpen ? 'true' : 'false'
        }
      },
      [trigger, menu]
    );
  }
};

export const StacklineVueMultiselect = VueMultiselectDropdown;
