<template>
  <div>
    <spinner v-if="loading" class="spinner" size="big" />
    <div v-if="list" v-bind:list="list" id="root_isotope" class="wall" v-images-loaded:on.progress="imageChange">
      <div v-for="item in list" v-bind:key="item.europeana_record" class="image">
        <ObjectView v-bind:object="item"/>
      </div>
    </div>
    <FilterMenu />
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
        // garment filter
        if (store.state.garmentFilter.length > 0) {
          finalList = finalList.filter(item => store.state.garmentFilter.some(garment => item.application.garment.includes(garment)));
        }

        if (store.state.colorFilterActive) {
          finalList = finalList.filter(item => item.application.colors.some(color => (color.score > 0.1 ? this.isSimilarColor(color.hex, store.state.colorFilter) : false)));
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
      option: {
        getSortData: {
          id: 'id'
        },
        sortBy: 'id'
      },
      latestVisibleLimit: 15,
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

    isSimilarColor(hex1, hex2) {
      const r1 = parseInt(hex1.substring(0, 2), 16);
      const g1 = parseInt(hex1.substring(2, 4), 16);
      const b1 = parseInt(hex1.substring(4, 6), 16);

      const r2 = parseInt(hex2.substring(0, 2), 16);
      const g2 = parseInt(hex2.substring(2, 4), 16);
      const b2 = parseInt(hex2.substring(4, 6), 16);

      let r = 255 - Math.abs(r1 - r2);
      let g = 255 - Math.abs(g1 - g2);
      let b = 255 - Math.abs(b1 - b2);

      r /= 255;
      g /= 255;
      b /= 255;

      const score = (r + g + b) / 3;
      return (score >= 0.9 ? true : false);
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
  column-count: 4;
  column-gap: 0;
}
</style>
