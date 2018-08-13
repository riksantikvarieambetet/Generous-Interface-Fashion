<template>
  <div class="root">
    <h2>{{ $t('explorePalette') }}</h2>
    <div class="palette" v-on:click="filterWithPalette">
        <div v-if="palette" v-for="color in palette" v-bind:key="color" v-bind:style="{ background: color }"></div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';

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
      store.commit('replaceColorFilter', []);
      store.commit('replaceSnappedColorIds', this.palette);
      this.$root.$emit('triggerFiltering');
      this.randomPalette();
    },

    randomPalette: function() {
      const palettes = [
        ['sienna', 'sandybrown', 'darkolivegreen'],
        ['darkolivegreen', 'rosybrown', 'lavender'],
        ['darkslategrey', 'tan', 'rosybrown'],
        ['tan', 'rosybrown', 'burlywood'],
        ['darkslateblue', 'darkslategrey'],
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
