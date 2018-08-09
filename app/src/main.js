import Vue from 'vue';
import VueResource from 'vue-resource';
import { VueHammer } from 'vue2-hammer';
import vmodal from 'vue-js-modal';
import VueI18n from 'vue-i18n';
import ToggleButton from 'vue-js-toggle-button';

import App from './App';
import messages from './i18n';
import { store } from './store';

Vue.use(ToggleButton);
Vue.use(VueI18n);
Vue.use(vmodal);
Vue.use(VueHammer);
Vue.use(VueResource);

Vue.config.productionTip = false;

let locale;
if (navigator.languages.includes('sv')) {
  locale = 'sv';
} else {
  locale = 'en';
}

const i18n = new VueI18n({
  locale: locale,
  messages,
});

new Vue({
  render: h => h(App),
  i18n,
  store,
}).$mount('#app');
