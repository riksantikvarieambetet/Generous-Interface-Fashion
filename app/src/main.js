import Vue from 'vue';
import App from './App.vue';

import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

Vue.use(AsyncComputed);
Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false;

export const store = new Vuex.Store({
  state: {
    allItems: null
  },
  mutations: {
    addAllItems(state, items) {
      state.allItems = items;
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');
