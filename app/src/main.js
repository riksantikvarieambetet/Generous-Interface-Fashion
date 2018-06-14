import Vue from 'vue';
import App from './App.vue';

import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import { VueHammer } from 'vue2-hammer';

Vue.use(VueHammer);
Vue.use(AsyncComputed);
Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false;

export const store = new Vuex.Store({
  state: {
    allItems: [],
    activeItems: [],

    visibleLimit: 30, // #TODO low change this in the future
    garmentFilter: [],

    colorFilterActive: false,
    colorFilter: false,

    isLoadingImages: false,
  },
  mutations: {
    addAllItems(state, items) {
      state.allItems = items;
    },

    addActiveItems(state, items) {
      state.activeItems = items;
    },

    increaseVisibleLimit(state, increase) {
      state.visibleLimit += increase;
    },

    resetVisibleLimit(state) {
      state.visibleLimit = 30; // #TODO low change this in the future
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

    activateColorFilter: state => state.colorFilterActive = true,
    deactivateColorFilter: state => state.colorFilterActive = false,

    setColorFilter: (state, color) => state.colorFilter = color,
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');
