import Vue from 'vue';
import App from './App';
import messages from './i18n';

import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import { VueHammer } from 'vue2-hammer';
import vmodal from 'vue-js-modal';
import VueI18n from 'vue-i18n';
import createPersistedState from 'vuex-persistedstate';

Vue.use(VueI18n);
Vue.use(vmodal);
Vue.use(VueHammer);
Vue.use(AsyncComputed);
Vue.use(VueResource);
Vue.use(Vuex);

Vue.config.productionTip = false;

export const store = new Vuex.Store({
  state: {
    allItems: [],
    activeItems: [],

    labels: [],

    visibleLimit: 30,
    garmentFilter: [],

    colorFilter: [''],
    colorCount: [],

    isLoadingImages: false,
  },
  mutations: {
    addAllItems(state, items) {
      state.allItems = items;
    },

    addLabels(state, labels) {
      state.labels = labels;
    },

    addActiveItems(state, items) {
      state.activeItems = items;
    },

    increaseVisibleLimit(state, increase) {
      state.visibleLimit += increase;
    },

    resetVisibleLimit(state) {
      state.visibleLimit = 30;
    },

    toggleGarment(state, garment) {
      let index = state.garmentFilter.indexOf(garment);
      if (index === -1) {
        state.garmentFilter.push(garment);
      } else {
        state.garmentFilter.splice(index, 1);
      }
    },

    loadingImages: state => (state.isLoadingImages = true),
    notLoadingImages: state => (state.isLoadingImages = false),

    updateStaticColor: (state, params) => {
      Vue.set(state.colorFilter, params.id, params.color);
    },

    addColorFilter: (state, color) => {
      if (!state.colorFilter.includes(color)) {
        state.colorFilter.push(color);
      }
    },

    removeColorFilterById: (state, id) => {
      state.colorFilter.splice(id, 1);
    },

    replaceColorFilter: (state, colors) => {
      state.colorFilter = colors;
    },

    colorCountClear: (state) => (state.colorCount = []),
    colorCountAdd: (state, values) => (state.colorCount.push(values)),
  },
  getters: {
    getColorPercentages: state => {
      let whole = 0;
      state.colorCount.forEach(color => (whole += color[0]));

      return state.colorCount.map(color => {
        color[0] = color[0] / whole * 100;
        return color;
      });
    },
  },
});

export const savedSate = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    savedPalettes: [],
  },
  mutations: {
    savePalette: (state, palette) => (state.savedPalettes.push(palette)),
  },
});

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
}).$mount('#app');
