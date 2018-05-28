<template>
  <div>
    <spinner v-if="loading" class="spinner" size="big" />
    <isotope ref="cpt" v-if="list" v-bind:list="list" id="root_isotope" v-bind:options="option" v-images-loaded:on.progress="imageChange">
      <div v-for="item in list" v-bind:key="item.europeana_record" class="image">
        <ObjectView v-bind:object="item"/>
      </div>
    </isotope>
    <FilterMenu />
  </div>
</template>

<script>
import isotope from 'vueisotope';
import imagesLoaded from 'vue-images-loaded';
import Spinner from 'vue-simple-spinner';

import ObjectView from './ObjectView.vue';
import FilterMenu from './FilterMenu.vue';
import { store } from "../main.js";

export default {
  name: 'ImageWall',
  components: {
    isotope,
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
      }
    }
  },
  methods: {
    imageChange(instance) {
      // redraw the layout
      this.$refs.cpt.layout('masonry');

      // handle image loading state
      if (instance.isComplete) {
        store.commit('notLoadingImages');
      } else {
        store.commit('loadingImages');
      }
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
</style>
