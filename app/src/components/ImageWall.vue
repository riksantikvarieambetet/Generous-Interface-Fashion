<template>
  <isotope ref="cpt" v-if="list" v-bind:list="list" id="root_isotope" v-bind:options="option" v-images-loaded:on.progress="layout">
    <div v-for="item in list" v-bind:key="item.europeana_record" class="image">
      <ObjectView v-bind:object="item"/>
    </div>
  </isotope>
</template>

<script>
import isotope from 'vueisotope';
import imagesLoaded from 'vue-images-loaded';

import ObjectView from './ObjectView.vue'

export default {
  name: 'ImageWall',
  components: {
    isotope,
    ObjectView
  },
  directives: {
    imagesLoaded,
  },
  props: {
    list: false
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
