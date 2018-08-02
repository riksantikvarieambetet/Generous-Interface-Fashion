<template>
  <div class="root">
    <h2>{{ $t('explorePalette') }}</h2>
    <div class="palette" v-on:click="filterWithPalette">
        <div v-if="palette" v-for="color in palette" v-bind:key="color" v-bind:style="{ background: color }"></div>
    </div>
  </div>
</template>

<script>
import { store } from '../main.js';

export default {
  name: 'Palette',
  data() {
    return {
      palette: false,
    };
  },
  created() {
    this.randomPalette();
  },
  methods: {
    filterWithPalette: function() {
      // store.commit('deactivateColorFilter');
      // this.palette.forEach(color => store.commit('addColorFilter', color));
      // store.commit('updateDynamicColor', this.palette[this.palette.length - 1]);
      // store.commit('activateColorFilter');
      // this.$root.$emit('triggerFiltering');
      // this.randomPalette();

      store.commit('replaceColorFilter', this.palette);
      this.$root.$emit('resetSelectedColor');
      this.$root.$emit('triggerFiltering');
    },

    randomPalette: function() {
      const palettes = [
        ['#3541b5', '#2a95b9', '#04131a'],
        ['#6b4f4a', '88813b', '#734443'],
        ['#239e51', '#23929e', '#000000'],
        ['#2b8fad', '#d5392f', '#d5d103'],
        ['#451313', '#a77da9', '#834240'],
        ['#13451e', '#799a20'],
      ];

      this.palette = palettes[Math.floor(Math.random() * palettes.length)];
    },
  },
};
</script>

<style scoped>

.root h2 {
    width: 100vw;
    margin: 0;
    display: inline-block;
    margin: 10px;
}

.palette {
    display: table;
    table-layout: fixed;
    width: 98%;
    height: 100px;
    cursor: pointer;
    margin: 0 auto;
}

.palette div {
    display: table-cell;
    height:100px;
}
</style>
