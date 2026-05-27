export type PrimitiveItem = string | number | boolean;
export type DropdownItem = PrimitiveItem | Record<string, any>;

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
}

export interface DropdownRenderContext<T = DropdownItem> {
  item: T;
  label: string;
  selected: boolean;
  disabled: boolean;
  query: string;
  toggle: () => void;
  remove: () => void;
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
