import { VueMultiselectDropdown } from './VueMultiselectDropdown';
import type { VueMultiselectPlugin } from './types';

export const VueMultiselect: VueMultiselectPlugin = {
  install(app: any) {
    app.component('StacklineVueMultiselect', VueMultiselectDropdown);
    app.component('VueMultiselectDropdown', VueMultiselectDropdown);
    app.component('vue-multiselect-dropdown', VueMultiselectDropdown);
    app.component('stackline-vue-multiselect', VueMultiselectDropdown);
  }
};

export default VueMultiselect;
