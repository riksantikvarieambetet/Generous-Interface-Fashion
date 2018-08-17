<template>
  <div class="sidebar-container">
    <close-btn @click.native="$root.$emit('toggleSidebar')" />
    <h2>Saved Palettes</h2>
    <p v-if="savedPalettes.length === 0">You have no saved palettes.</p>
    <div v-for="(palette, i) in savedPalettes" v-else :key="i" class="palette" @click="filterWithPalette(palette)">
      <div v-for="color in palette" :key="i + color" :style="{ background: color }" />
    </div>
  </div>
</template>

<script>
import { savedSate, store } from '../store';
import CloseBtn from './CloseBtn';

export default {
  name: 'Sidebar',
  components: {
    CloseBtn,
  },
  computed: {
    savedPalettes() {
      return savedSate.state.savedPalettes;
    },
  },
  methods: {
    filterWithPalette: function(palette) {
      store.commit('replaceColorFilter', palette);
      this.$root.$emit('triggerFiltering');
    },
  },
};
</script>

<style scoped>
.sidebar-container {
  position: fixed;
  width: 30%;
  background: #fff;
  padding: 7px;
  box-sizing: border-box;
  z-index: 1;
  height: calc(100vh - 50px);
  right: 0;
  overflow-y: scroll;
  min-width: 250px;
}

.palette {
  display: table;
  table-layout: fixed;
  width: 98%;
  height: 50px;
  cursor: pointer;
  margin: 5px auto;
}

.palette div {
  display: table-cell;
  height: 50px;
}
</style>
