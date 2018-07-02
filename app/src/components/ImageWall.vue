<template>
  <div>
    <spinner v-if="loading" class="spinner" size="big" />
    <FilterMenu />
    <div v-if="list" v-bind:list="list" class="wall" v-images-loaded:on.progress="imageChange">
      <div v-for="item in list" v-bind:key="item.europeana_record" class="image">
        <ObjectView v-bind:object="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded';
import Spinner from 'vue-simple-spinner';

import ObjectView from './ObjectView.vue';
import FilterMenu from './FilterMenu.vue';
import { store } from "../main.js";

export default {
  name: 'ImageWall',
  components: {
    ObjectView,
    FilterMenu,
    Spinner,
  },
  directives: {
    imagesLoaded,
  },
  computed: {
    list() {
      let finalList = store.state.allItems;
      console.log('debug: executing filtering');
      if (finalList) {
        store.commit('colorCountClear');

        if (store.state.colorFilterActive) {
          finalList = finalList.filter(item => item.application.colors.some(color => (color.score > 0.1 ? this.isSimilarColor(color.hsl, store.state.colorFilterDynamic) : false)));

          store.commit('colorCountAdd', [finalList.length, store.state.colorFilterDynamic]);

          store.state.colorFilter.forEach(stateColor => {
            if (stateColor !== store.state.colorFilterDynamic) {
              finalList = finalList.filter(item => item.application.colors.some(color => (color.score > 0.1 ?  this.isSimilarColor(color.hsl, stateColor) : false)));
              store.commit('colorCountAdd', [store.state.allItems.filter(item => item.application.colors.some(color => (color.score > 0.1 ?  this.isSimilarColor(color.hsl, stateColor) : false))).length, stateColor]);
            }
          });
        }

        // handle reseting of visibleLimit on filter change
        if (store.state.visibleLimit === this.visibleLimit) {
          console.log('debug: reseting visibleLimit');
          store.commit('resetVisibleLimit');
          window.scrollTo(0, 0);
        } else {
          this.visibleLimit = store.state.visibleLimit;
        }

        store.commit('addActiveItems', finalList);
        console.log(store.getters.getColorDegrees)
        return finalList.slice(0, store.state.visibleLimit);
      } else {
        return null;
      }
    },
    loading() {
      return store.state.isLoadingImages;
    }
  },
  data() {
    return {
      latestVisibleLimit: 30,
    }
  },
  methods: {
    imageChange(instance) {
      // handle image loading state
      if (instance.isComplete) {
        store.commit('notLoadingImages');
      } else {
        store.commit('loadingImages');
      }
    },

    hexToHsl(color) {
      let r = parseInt(color.substr(1,2), 16);
      let g = parseInt(color.substr(3,2), 16);
      let b = parseInt(color.substr(5,2), 16);

      r /= 255, g /= 255, b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;

      if (max == min) {
          h = s = 0; // achromatic
      } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
        return [h, s, l];
    },

    isSimilarColor(itemHSL, filterHEX) {
      const filterHSL = this.hexToHsl(filterHEX);

      const itemHue = itemHSL[0];
      const filterHue = filterHSL[0];

      const itemLight = itemHSL[1];
      const filterLight = filterHSL[1];

      const itemSaturation = itemHSL[2];
      const filterSaturation = filterHSL[2];

      if (Math.abs(itemHue - filterHue) > 0.1) {
        return false;
      }

      if (Math.abs(itemLight - filterLight) > 0.1) {
        return false;
      }

      if (Math.abs(itemSaturation - filterSaturation) > 0.8) {
        return false;
      }

      return true;
    }
  }
}
</script>

<style scoped>
.spinner {
    position: fixed;
    right: 7px;
    top: 7px;
    z-index: 100;
}

.wall {
    margin-top: 50px;
    width: 100wv;
}
</style>
