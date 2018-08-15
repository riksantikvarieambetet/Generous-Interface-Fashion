<template>
  <div>
    <FilterMenu />

    <Sidebar v-if="sidebarIsOpen" />

    <div v-if="list" v-bind:list="list" class="wall" v-images-loaded:on.progress="imageChange">
      <div v-for="item in list" v-bind:key="item.europeana_record" class="image">
        <ObjectView v-bind:object="item"/>
      </div>
    </div>
    <Palette v-if="isAtEndOfFeed"></Palette>
  </div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded';

import ObjectView from './ObjectView';
import FilterMenu from './FilterMenu';
import Sidebar from './Sidebar';
import Palette from './Palette';
import { store } from '../store';

export default {
  name: 'ImageWall',
  components: {
    ObjectView,
    FilterMenu,
    Palette,
    Sidebar,
  },
  directives: {
    imagesLoaded,
  },
  data() {
    return {
      sidebarIsOpen: false,
    };
  },
  mounted() {
    this.$root.$on('toggleSidebar', () => {
      this.toggleSidebar();
    });
  },
  computed: {
    list() {
      return store.state.activeItems.slice(0, store.state.visibleLimit);
    },
    isAtEndOfFeed() {
      return (store.state.activeItems.length <= store.state.visibleLimit);
    },

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

    toggleSidebar() {
      this.sidebarIsOpen = !this.sidebarIsOpen;
    },
  },
};
</script>

<style scoped>

.wall {
    margin-top: 50px;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
}

.image{

}
</style>
