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
    allItems: null,
    visibleLimit: 5 //#TODO low change this in the future
  },
  mutations: {
    addAllItems(state, items) {
      state.allItems = items;
    },

    increaseVisibleLimit(state, increase) {
      state.visibleLimit += increase;
    },

    resetVisibleLimit(state) {
      state.visibleLimit = 5; //#TODO low change this in the future
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');
