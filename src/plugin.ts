import { VueMultiselectDropdown } from './VueMultiselectDropdown';
import type { VueMultiselectPlugin } from './types';

export const VueMultiselect: VueMultiselectPlugin = {
  install(Vue: any) {
    Vue.component('StacklineVueMultiselect', VueMultiselectDropdown);
    Vue.component('VueMultiselectDropdown', VueMultiselectDropdown);
    Vue.component('vue-multiselect-dropdown', VueMultiselectDropdown);
    Vue.component('stackline-vue-multiselect', VueMultiselectDropdown);
  }
};

export default VueMultiselect;
