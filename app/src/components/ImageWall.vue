<template>
  <div>
    <isotope ref="cpt" v-if="list" v-bind:list="list" id="root_isotope" v-bind:options="option" v-images-loaded:on.progress="layout">
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

import ObjectView from './ObjectView.vue';
import FilterMenu from './FilterMenu.vue';
import { store } from "../main.js";

export default {
  name: 'ImageWall',
  components: {
    isotope,
    ObjectView,
    FilterMenu,
  },
  directives: {
    imagesLoaded,
  },
  computed: {
    list () {
      let finalList = store.state.allItems;
      if (finalList) {
        // garment filter
        if (store.state.garmentFilter.length > 0) {
          finalList = finalList.filter(item => store.state.garmentFilter.some(garment => item.application.garment.includes(garment)));
        }

        return finalList.slice(0, store.state.visibleLimit);
      } else {
        return null;
      }
      
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
    layout() {
      this.$refs.cpt.layout('masonry');
    }
  }
}
</script>

<style scoped>
</style>
