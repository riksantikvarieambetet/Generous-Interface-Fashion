<template>
  <div class="sidebar-container">
    <h2>Saved Palettes</h2>
    <div v-for="(palette, i) in savedPalettes" v-bind:key="i" class="palette" v-on:click="filterWithPalette(palette)">
      <div v-for="color in palette" v-bind:key="i + color" v-bind:style="{ background: color }"></div>
    </div>
  </div>
</template>

<script>
import { store, savedSate } from '../main.js';

export default {
  name: 'Sidebar',
  data() {
    return {};
  },
  computed: {
    savedPalettes() {
      return savedSate.state.savedPalettes;
    },
  },
  methods: {
    filterWithPalette: function(palette) {
      store.commit('clearColorFilter');
      palette.forEach(color => store.commit('addColorFilter', color));
      store.commit('updateDynamicColor', palette[palette.length - 1]);
      store.commit('activateColorFilter');
      this.$root.$emit('triggerFiltering');
    },
  },
};
</script>

<style scoped>
.sidebar-container {
    position: fixed;
    width: 30%;
    background: #FFF;
    padding: 7px;
    box-sizing: border-box;
    z-index: 1;
    height: calc(100vh - 50px);
    right: 0;
    overflow-y: scroll;
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
