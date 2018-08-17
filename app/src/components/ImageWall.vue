<template>
  <div>
    <filter-menu />

    <sidebar v-if="sidebarIsOpen" />

    <div v-if="list" v-images-loaded:on.progress="imageChange" :list="list" class="wall">
      <div v-for="item in list" :key="item.europeana_record" class="image">
        <object-view :object="item" />
      </div>
    </div>
    <palette v-if="isAtEndOfFeed" />
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
  computed: {
    list() {
      return store.state.activeItems.slice(0, store.state.visibleLimit);
    },
    isAtEndOfFeed() {
      return (store.state.activeItems.length <= store.state.visibleLimit);
    },

  },
  mounted() {
    this.$root.$on('toggleSidebar', () => {
      this.toggleSidebar();
    });
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
</style>
