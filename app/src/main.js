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

    visibleLimit: 15, // #TODO low change this in the future
    garmentFilter: [],

    isLoadingImages: false,
  },
  mutations: {
    addAllItems(state, items) {
      state.allItems = items;
    },

    increaseVisibleLimit(state, increase) {
      state.visibleLimit += increase;
    },

    resetVisibleLimit(state) {
      state.visibleLimit = 15; // #TODO low change this in the future
    },

    toggleGarment(state, garment) {
      let index = state.garmentFilter.indexOf(garment);
      if (index === -1) {
        state.garmentFilter.push(garment);
      } else {
        state.garmentFilter.splice(index, 1);
      }
    },

    loadingImages: state => state.isLoadingImages = true,
    notLoadingImages: state => state.isLoadingImages = false,
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');
