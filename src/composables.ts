import { computed, ref, unref } from 'vue';
import type {
  DropdownItem,
  DropdownOptionState,
  DropdownSettings,
  PrimitiveItem,
  UseMultiSelectDropdownReturn,
  UseMultiSelectStateOptions
} from './types';

type MaybeRef<T> = T | { value: T };
type PropBag = Record<string, any>;

const DEFAULT_KEYS = {
  labelKey: 'itemName',
  primaryKey: 'id'
};

function read<T>(value: MaybeRef<T> | undefined, fallback: T): T {
  return value == null ? fallback : unref(value as any);
}

function isPrimitiveItem(item: DropdownItem): item is PrimitiveItem {
  return typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean';
}

function resolveSettings<T extends DropdownItem>(settings?: MaybeRef<DropdownSettings<T>>): Required<Pick<DropdownSettings<T>, 'labelKey' | 'primaryKey' | 'text' | 'singleSelection' | 'searchBy' | 'groupBy'>> & DropdownSettings<T> {
  const value = read(settings, {} as DropdownSettings<T>);
  return {
    ...value,
    text: value.text || 'Select',
    singleSelection: Boolean(value.singleSelection),
    labelKey: value.labelKey || DEFAULT_KEYS.labelKey,
    primaryKey: value.primaryKey || DEFAULT_KEYS.primaryKey,
    searchBy: Array.isArray(value.searchBy) ? value.searchBy : [],
    groupBy: value.groupBy || ''
  };
}

function getLabel<T extends DropdownItem>(item: T, settings: DropdownSettings<T>) {
  if (isPrimitiveItem(item)) {
    return String(item);
  }

  const labelKey = settings.labelKey || DEFAULT_KEYS.labelKey;
  const keys = [labelKey, 'itemName', 'name', 'label', 'title', 'value'];
  for (const key of keys) {
    if (item[key] != null) {
      return String(item[key]);
    }
  }

  return JSON.stringify(item);
}

function getKey<T extends DropdownItem>(item: T, settings: DropdownSettings<T>) {
  if (isPrimitiveItem(item)) {
    return String(item);
  }

  const primaryKey = settings.primaryKey || DEFAULT_KEYS.primaryKey;
  const keys = [primaryKey, 'id', 'value', 'key'];
  for (const key of keys) {
    if (item[key] != null) {
      return String(item[key]);
    }
  }

  return getLabel(item, settings);
}

function getGroup<T extends DropdownItem>(item: T, settings: DropdownSettings<T>) {
  if (!settings.groupBy) {
    return undefined;
  }

  if (typeof settings.groupBy === 'function') {
    return settings.groupBy(item);
  }

  return !isPrimitiveItem(item) && item[settings.groupBy] != null ? String(item[settings.groupBy]) : undefined;
}

function isDisabled<T extends DropdownItem>(item: T) {
  return !isPrimitiveItem(item) && Boolean(item.disabled);
}

function matchesQuery<T extends DropdownItem>(item: T, query: string, settings: DropdownSettings<T>) {
  const needle = query.trim().toLowerCase();
  if (!needle) {
    return true;
  }

  const values = new Set<string>([getLabel(item, settings).toLowerCase()]);
  if (!isPrimitiveItem(item)) {
    const keys = settings.searchBy && settings.searchBy.length ? settings.searchBy : [settings.labelKey || DEFAULT_KEYS.labelKey];
    for (const key of keys) {
      if (key && item[key] != null) {
        values.add(String(item[key]).toLowerCase());
      }
    }
  }

  return Array.from(values).some((value) => value.includes(needle));
}

function mergeSelected<T extends DropdownItem>(selected: T[], incoming: T[], settings: DropdownSettings<T>) {
  const byKey = new Map<string, T>();
  for (const item of selected) {
    byKey.set(getKey(item, settings), item);
  }
  for (const item of incoming) {
    const key = getKey(item, settings);
    if (!byKey.has(key)) {
      byKey.set(key, item);
    }
  }
  return Array.from(byKey.values());
}

function readBadgeLimit<T extends DropdownItem>(selected: T[], settings: DropdownSettings<T>) {
  if (settings.singleSelection) {
    return selected.length;
  }

  const value = Number(settings.badgeShowLimit);
  if (!Number.isFinite(value) || value <= 0) {
    return selected.length;
  }
  return Math.floor(value);
}

function normalizeExtraProps(props: PropBag = {}) {
  const normalized = { ...props };
  if (normalized.className && !normalized.class) {
    normalized.class = normalized.className;
  }
  delete normalized.className;
  return normalized;
}

function mergePropBags(base: PropBag, extra: PropBag = {}) {
  const incoming = normalizeExtraProps(extra);
  const merged: PropBag = { ...incoming, ...base };

  if (base.class || incoming.class) {
    merged.class = [incoming.class, base.class].filter(Boolean).join(' ');
  }

  if (base.style || incoming.style) {
    merged.style = {
      ...(typeof incoming.style === 'object' ? incoming.style : {}),
      ...(typeof base.style === 'object' ? base.style : {})
    };
  }

  for (const key of Object.keys(base)) {
    if (/^on[A-Z]/.test(key) && typeof base[key] === 'function' && typeof incoming[key] === 'function') {
      merged[key] = (...args: any[]) => {
        incoming[key](...args);
        base[key](...args);
      };
    }
  }

  return merged;
}

export function defineSettings<T extends DropdownItem>(settings: DropdownSettings<T>) {
  return settings;
}

export function defineSlots<TSlots extends Record<string, any>>(slots: TSlots) {
  return slots;
}

export function useMultiSelectState<T extends DropdownItem = DropdownItem>(options: UseMultiSelectStateOptions<T> = {}) {
  const internalSelected = ref<T[]>(options.defaultSelectedItems ? options.defaultSelectedItems.slice() : []) as any;
  const filter = ref('');

  const settings = computed(() => resolveSettings(options.settings));
  const data = computed(() => read(options.data, [] as T[]));
  const selectedItems = computed<T[]>(() => read(options.selectedItems, internalSelected.value as T[]));
  const filteredItems = computed(() => data.value.filter((item) => matchesQuery(item, filter.value, settings.value)));

  const isSelected = (item: T) => {
    const key = getKey(item, settings.value);
    return selectedItems.value.some((selected) => getKey(selected, settings.value) === key);
  };

  const commit = (next: T[]) => {
    if (!options.selectedItems) {
      internalSelected.value = next as any;
    }
    options.onChange?.(next);
  };

  const getItemKey = (item: T) => getKey(item, settings.value);
  const getItemLabel = (item: T) => getLabel(item, settings.value);

  const selectableItems = computed(() => filteredItems.value.filter((item) => !isDisabled(item)));
  const visibleBadges = computed(() => {
    const limit = readBadgeLimit(selectedItems.value, settings.value);
    return selectedItems.value.slice(0, limit);
  });
  const hiddenBadgeCount = computed(() => Math.max(selectedItems.value.length - visibleBadges.value.length, 0));
  const allFilteredSelected = computed(() => (
    selectableItems.value.length > 0 && selectableItems.value.every((item) => isSelected(item))
  ));

  const removeItem = (item: T) => {
    const key = getItemKey(item);
    const next = selectedItems.value.filter((selected) => getItemKey(selected) !== key);
    commit(next);
    options.onDeSelect?.(item);
  };

  const addItem = (item: T) => {
    if (isDisabled(item)) {
      return;
    }

    if (settings.value.singleSelection) {
      commit([item]);
      options.onSelect?.(item);
      return;
    }

    if (!isSelected(item)) {
      commit(selectedItems.value.concat(item));
      options.onSelect?.(item);
    }
  };

  const toggleItem = (item: T) => {
    if (isDisabled(item)) {
      return;
    }

    if (isSelected(item)) {
      if (settings.value.singleSelection) {
        return;
      }

      removeItem(item);
      return;
    }

    addItem(item);
  };

  const clearSelection = () => {
    const previous = selectedItems.value.slice();
    commit([]);
    options.onDeSelectAll?.(previous);
  };

  const deSelectAll = (items?: T[]) => {
    if (!items || !items.length) {
      clearSelection();
      return;
    }

    const keys = new Set(items.map(getItemKey));
    commit(selectedItems.value.filter((item) => !keys.has(getItemKey(item))));
    options.onDeSelectAll?.(items);
  };

  const selectAll = (items?: T[]) => {
    const enabled = (items || selectableItems.value).filter((item) => !isDisabled(item));
    const before = selectedItems.value.length;
    commit(settings.value.singleSelection ? enabled.slice(0, 1) : mergeSelected(selectedItems.value, enabled, settings.value));
    options.onSelectAll?.(enabled);
    if (!enabled.length && before !== selectedItems.value.length) {
      options.onChange?.(selectedItems.value);
    }
  };

  const toggleGroup = (groupName: string, items: T[]) => {
    const enabled = items.filter((item) => !isDisabled(item));
    if (!enabled.length) {
      return;
    }

    const everySelected = enabled.every((item) => isSelected(item));
    if (everySelected) {
      deSelectAll(enabled);
      options.onGroupDeSelect?.(groupName, enabled);
      return;
    }

    selectAll(enabled);
    options.onGroupSelect?.(groupName, enabled);
  };

  const removeLastSelectedItem = () => {
    const last = selectedItems.value[selectedItems.value.length - 1];
    if (last) {
      removeItem(last);
    }
  };

  return {
    data,
    settings,
    filter,
    filteredItems,
    selectableItems,
    selectedItems,
    visibleBadges,
    hiddenBadgeCount,
    allFilteredSelected,
    isSelected,
    getItemKey,
    getItemLabel,
    setFilter: (value: string) => {
      filter.value = value;
    },
    selectItem: addItem,
    removeItem,
    removeLastSelectedItem,
    toggleItem,
    clearSelection,
    selectAll,
    deSelectAll,
    toggleGroup
  };
}

export function useMultiSelectDropdown<T extends DropdownItem = DropdownItem>(
  options: UseMultiSelectStateOptions<T> = {}
): UseMultiSelectDropdownReturn<T> {
  const state = useMultiSelectState(options);
  const isOpen = ref(false);
  const query = ref('');
  const activeKey = ref('');
  const instanceId = `stackline-vmsd-headless-${Math.random().toString(36).slice(2)}`;
  const listboxId = `${instanceId}-listbox`;

  const visibleOptions = computed<DropdownOptionState<T>[]>(() => {
    let index = 0;
    return state.filteredItems.value
      .map((item) => {
        const key = getKey(item, state.settings.value);
        return {
          item,
          key,
          label: getLabel(item, state.settings.value),
          selected: state.isSelected(item),
          disabled: isDisabled(item),
          group: getGroup(item, state.settings.value),
          index: index++
        };
      });
  });
  const activeDescendantId = computed(() => activeKey.value ? `${instanceId}-option-${activeKey.value}` : undefined);
  const groups = computed(() => {
    const byName = new Map<string, DropdownOptionState<T>[]>();
    for (const option of visibleOptions.value) {
      const name = option.group || 'Ungrouped';
      const existing = byName.get(name) || [];
      existing.push(option);
      byName.set(name, existing);
    }

    return Array.from(byName.entries()).map(([name, items]) => {
      const enabledItems = items.filter((option) => !option.disabled);
      return {
        name,
        items,
        enabledItems,
        selected: enabledItems.length > 0 && enabledItems.every((option) => option.selected),
        disabled: enabledItems.length === 0
      };
    });
  });

  const label = computed(() => {
    if (!state.selectedItems.value.length) {
      return state.settings.value.text || 'Select';
    }
    return state.selectedItems.value.map((item) => getLabel(item, state.settings.value)).join(', ');
  });

  const open = () => {
    isOpen.value = true;
    if (!activeKey.value && visibleOptions.value[0]) {
      activeKey.value = visibleOptions.value[0].key;
    }
  };
  const close = () => {
    isOpen.value = false;
  };
  const toggleOpen = () => (isOpen.value ? close() : open());

  const focusNext = (direction: 1 | -1) => {
    const optionsList = visibleOptions.value.filter((option) => !option.disabled);
    const currentIndex = Math.max(0, optionsList.findIndex((option) => option.key === activeKey.value));
    const next = optionsList[Math.min(Math.max(currentIndex + direction, 0), optionsList.length - 1)];
    if (next) {
      activeKey.value = next.key;
    }
  };

  const getRootProps = (props: PropBag = {}) => mergePropBags({
    'data-stackline-multiselect': 'true',
    'data-open': isOpen.value ? 'true' : 'false'
  }, props);

  const getTriggerProps = (props: PropBag = {}) => mergePropBags({
    type: 'button',
    role: 'combobox',
    'aria-expanded': isOpen.value ? 'true' : 'false',
    'aria-haspopup': 'listbox',
    'aria-controls': listboxId,
    'aria-activedescendant': activeDescendantId.value,
    onClick: toggleOpen,
    onKeydown: (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        toggleOpen();
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        open();
        focusNext(1);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        open();
        focusNext(-1);
      }
      if (event.key === 'Escape') {
        close();
      }
    }
  }, props);

  const getSearchInputProps = (props: PropBag = {}) => mergePropBags({
    value: query.value,
    'aria-label': 'Search options',
    onInput: (event: Event) => {
      query.value = String((event.target as HTMLInputElement).value || '');
      state.setFilter(query.value);
    },
    onKeydown: (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        focusNext(1);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        focusNext(-1);
      }
      if (event.key === 'Escape') {
        close();
      }
    }
  }, props);

  const getListboxProps = (props: PropBag = {}) => mergePropBags({
    id: listboxId,
    role: 'listbox',
    'aria-multiselectable': state.settings.value.singleSelection ? 'false' : 'true'
  }, props);

  const activateOption = (option: DropdownOptionState<T>) => {
    if (option.disabled) {
      return;
    }

    state.toggleItem(option.item);
    activeKey.value = option.key;

    if (state.settings.value.singleSelection) {
      close();
    }
  };

  const getOptionProps = (option: DropdownOptionState<T>, props: PropBag = {}) => mergePropBags({
    id: `${instanceId}-option-${option.key}`,
    role: 'option',
    tabindex: option.disabled ? -1 : 0,
    'aria-selected': option.selected ? 'true' : 'false',
    'aria-checked': option.selected ? 'true' : 'false',
    'aria-disabled': option.disabled ? 'true' : 'false',
    onMouseenter: () => {
      activeKey.value = option.key;
    },
    onClick: () => {
      activateOption(option);
    },
    onKeydown: (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        focusNext(1);
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        focusNext(-1);
      }
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        activateOption(option);
      }
      if (event.key === 'Escape') {
        close();
      }
    }
  }, props);

  const getClearAllButtonProps = (props: PropBag = {}) => mergePropBags({
    type: 'button',
    'aria-label': 'Clear selected options',
    onClick: state.clearSelection
  }, props);

  const getRemoveButtonProps = (item: T, props: PropBag = {}) => mergePropBags({
    type: 'button',
    'aria-label': `Remove ${getLabel(item, state.settings.value)}`,
    onClick: () => {
      state.removeItem(item);
    },
    onKeydown: (event: KeyboardEvent) => {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        state.removeItem(item);
      }
    }
  }, props);

  return {
    isOpen,
    query,
    filter: state.filter,
    activeKey,
    activeDescendantId,
    listboxId,
    settings: state.settings,
    filteredItems: state.filteredItems,
    selectableItems: state.selectableItems,
    selectedItems: state.selectedItems,
    visibleBadges: state.visibleBadges,
    hiddenBadgeCount: state.hiddenBadgeCount,
    visibleOptions,
    groups,
    allFilteredSelected: state.allFilteredSelected,
    label,
    open,
    close,
    toggleOpen,
    clearSelection: state.clearSelection,
    selectAll: state.selectAll,
    deSelectAll: state.deSelectAll,
    toggleGroup: state.toggleGroup,
    toggleItem: state.toggleItem,
    selectItem: state.selectItem,
    removeItem: state.removeItem,
    removeLastSelectedItem: state.removeLastSelectedItem,
    isSelected: state.isSelected,
    setFilter: (value: string) => {
      query.value = value;
      state.setFilter(value);
    },
    getItemKey: state.getItemKey,
    getItemLabel: state.getItemLabel,
    getRootProps,
    getTriggerProps,
    getSearchInputProps,
    getListboxProps,
    getOptionProps,
    getClearAllButtonProps,
    getRemoveButtonProps
  };
}

export function createVueMultiselectDropdown<T extends DropdownItem>() {
  return {
    defineSettings: (settings: DropdownSettings<T>) => defineSettings<T>(settings),
    defineSlots,
    useMultiSelectState: (options: UseMultiSelectStateOptions<T> = {}) => useMultiSelectState<T>(options),
    useMultiSelectDropdown: (options: UseMultiSelectStateOptions<T> = {}) => useMultiSelectDropdown<T>(options)
  };
}
