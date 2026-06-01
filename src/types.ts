export type PrimitiveItem = string | number | boolean;
export type DropdownItem = PrimitiveItem | Record<string, any>;

export interface DropdownKeyboardSettings {
  space?: boolean;
  spaceOptionAction?: 'toggle' | 'toggle-and-next';
  tab?: boolean;
  arrows?: boolean;
  escape?: boolean;
  backspaceRemovesLastWhenSearchEmpty?: boolean;
  deleteRemovesFocusedBadge?: boolean;
  /** @deprecated Use `backspaceRemovesLastWhenSearchEmpty`. */
  backspace?: boolean;
}

export interface DropdownSettings<T = DropdownItem> {
  singleSelection?: boolean;
  text?: string;
  enableCheckAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  filterSelectAllText?: string;
  filterUnSelectAllText?: string;
  enableFilterSelectAll?: boolean;
  enableSearchFilter?: boolean;
  searchBy?: string[];
  maxHeight?: number;
  badgeShowLimit?: number;
  classes?: string;
  limitSelection?: number;
  disabled?: boolean;
  searchPlaceholderText?: string;
  groupBy?: string | ((item: T) => string);
  showCheckbox?: boolean;
  noDataLabel?: string;
  searchAutofocus?: boolean;
  lazyLoading?: boolean;
  labelKey?: string;
  primaryKey?: string;
  position?: 'top' | 'bottom';
  autoPosition?: boolean;
  loading?: boolean;
  selectGroup?: boolean;
  addNewItemOnFilter?: boolean;
  addNewButtonText?: string;
  escapeToClose?: boolean;
  clearAll?: boolean;
  closeDropDownOnSelection?: boolean;
  tagToBody?: boolean;
  appendToBody?: boolean;
  /** @deprecated Use `skin` instead. Kept as a compatibility alias. */
  theme?: 'classic' | 'material' | 'dark' | 'custom' | 'brand' | string;
  skin?: 'classic' | 'material' | 'dark' | 'custom' | 'brand' | string;
  ariaLabel?: string;
  listboxAriaLabel?: string;
  searchAriaLabel?: string;
  clearSearchAriaLabel?: string;
  clearAllAriaLabel?: string;
  removeItemAriaLabel?: string | ((item: T) => string);
  openDropdownAriaLabel?: string;
  closeDropdownAriaLabel?: string;
  loadingText?: string;
  keyboard?: DropdownKeyboardSettings;
}

export interface DropdownRenderContext<T = DropdownItem> {
  item: T;
  label: string;
  selected: boolean;
  disabled: boolean;
  index?: number;
  group?: string;
  key?: string;
  optionId?: string;
  ariaSelected?: 'true' | 'false';
  ariaChecked?: 'true' | 'false';
  query: string;
  toggle: () => void;
  remove: () => void;
}

export interface DropdownOptionState<T = DropdownItem> {
  item: T;
  key: string;
  label: string;
  selected: boolean;
  disabled: boolean;
  index: number;
  group?: string;
}

export interface DropdownPropBag {
  [key: string]: any;
}

export interface UseMultiSelectStateOptions<T = DropdownItem> {
  data?: T[] | { value: T[] };
  selectedItems?: T[] | { value: T[] };
  defaultSelectedItems?: T[];
  settings?: DropdownSettings<T> | { value: DropdownSettings<T> };
  onChange?: (items: T[]) => void;
  onSelect?: (item: T) => void;
  onDeSelect?: (item: T) => void;
  onSelectAll?: (items: T[]) => void;
  onDeSelectAll?: (items: T[]) => void;
  onGroupSelect?: (groupName: string, items: T[]) => void;
  onGroupDeSelect?: (groupName: string, items: T[]) => void;
}

export interface UseMultiSelectDropdownReturn<T = DropdownItem> {
  isOpen: any;
  query: any;
  filter: any;
  activeKey: any;
  activeDescendantId: any;
  listboxId: string;
  settings: any;
  filteredItems: any;
  selectableItems: any;
  selectedItems: any;
  visibleBadges: any;
  hiddenBadgeCount: any;
  visibleOptions: any;
  groups: any;
  allFilteredSelected: any;
  label: any;
  open: () => void;
  close: () => void;
  toggleOpen: () => void;
  clearSelection: () => void;
  selectAll: (items?: T[]) => void;
  deSelectAll: (items?: T[]) => void;
  toggleGroup: (groupName: string, items: T[]) => void;
  toggleItem: (item: T) => void;
  selectItem: (item: T) => void;
  removeItem: (item: T) => void;
  removeLastSelectedItem: () => void;
  isSelected: (item: T) => boolean;
  setFilter: (value: string) => void;
  getItemKey: (item: T) => string;
  getItemLabel: (item: T) => string;
  getRootProps: (props?: DropdownPropBag) => DropdownPropBag;
  getTriggerProps: (props?: DropdownPropBag) => DropdownPropBag;
  getSearchInputProps: (props?: DropdownPropBag) => DropdownPropBag;
  getListboxProps: (props?: DropdownPropBag) => DropdownPropBag;
  getOptionProps: (option: DropdownOptionState<T>, props?: DropdownPropBag) => DropdownPropBag;
  getClearAllButtonProps: (props?: DropdownPropBag) => DropdownPropBag;
  getRemoveButtonProps: (item: T, props?: DropdownPropBag) => DropdownPropBag;
}

export interface VueMultiselectDropdownHandle<T = DropdownItem> {
  openDropdown: () => void;
  closeDropdown: () => void;
  clearSelection: () => void;
  focusSearch: () => void;
  selectAll: () => void;
  deSelectAll: () => void;
  getSelectedItems: () => T[];
}

export interface VueMultiselectPlugin {
  install: (Vue: any) => void;
}
