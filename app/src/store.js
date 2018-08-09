import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    allItems: [],
    activeItems: [],

    visibleLimit: 30,

    colorFilter: [''],

    isLoadingImages: false,

    selectedSnappedColorIds: [],
    selectedLabelIds: [],
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

    loadingImages: state => (state.isLoadingImages = true),
    notLoadingImages: state => (state.isLoadingImages = false),

    updateStaticColor: (state, params) => {
      Vue.set(state.colorFilter, params.id, params.color);
    },

    clearColorFilter: state => (state.colorFilter = ['']),

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

    setSelectedSnappedColorId: (state, id) => {
      if (state.selectedSnappedColorIds.includes(id)) {
        let index = state.selectedSnappedColorIds.indexOf(id);
        if (index !== -1) state.selectedSnappedColorIds.splice(index, 1);
      } else {
        state.selectedSnappedColorIds.push(id);
      }
    },

    setSelectedLabelId: (state, id) => {
      if (state.selectedLabelIds.includes(id)) {
        let index = state.selectedLabelIds.indexOf(id);
        if (index !== -1) state.selectedLabelIds.splice(index, 1);
      } else {
        state.selectedLabelIds.push(id);
      }
    },
  },
  getters: {
    anyColorFilterIsActive: state => {
      if (state.colorFilter[0] === '' && state.selectedSnappedColorIds.length < 1) return false;
      return true;
    },

    labelFilterIsActive: state => {
      if (state.selectedLabelIds < 1) return false;
      return true;
    },

    numberOfActiveItems: state => state.activeItems.length,
    numberOfItems: state => state.allItems.length,

    staticColors: state => state.colorFilter,
    selectedSnappedColorIds: state => state.selectedSnappedColorIds,
    selectedLabelIds: state => state.selectedLabelIds,
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
