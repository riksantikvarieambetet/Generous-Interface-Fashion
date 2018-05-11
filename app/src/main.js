import Vue from 'vue';
import App from './App.vue';

import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';

Vue.use(AsyncComputed);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
