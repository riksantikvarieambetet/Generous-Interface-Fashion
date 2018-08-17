<template>
  <div class="root">
    <h2>{{ $t('theEnd') }}</h2>
    <p>{{ $t('explorePalette') }}</p>
    <div :key="color" :style="{ background: color }" class="color" @click="filterWithPalette" />
    <div class="btn" @click="randomPalette">Shuffle <i class="fas fa-random" /></div>
  </div>
</template>

<script>
import { store } from '../store';
import fontawesome from '@fortawesome/fontawesome';
import faRandom from '@fortawesome/fontawesome-free-solid/faRandom';

fontawesome.library.add(faRandom);

export default {
  name: 'Palette',
  data() {
    return {
      color: false,
    };
  },
  created() {
    this.randomPalette();
  },
  methods: {
    filterWithPalette: function() {
      store.commit('replaceColorFilter', ['']);
      store.commit('replaceSnappedColorIds', [this.color]);
      store.commit('replaceLabelIds', []);
      this.$root.$emit('triggerFiltering');
      this.randomPalette();
    },

    randomPalette: function() {
      const palettes = ['crimson', 'brown', 'lightsalmon', 'firebrick', 'tomato', 'darkslategrey', 'black', 'dimgrey', 'darkgrey', 'grey', 'silver', 'whitesmoke', 'lavender', 'indianred', 'sienna', 'darkolivegreen', 'per', 'rosybrown', 'gainsboro', 'saddlebrown', 'antiquewhite', 'midnightblue', 'darkslateblue', 'slategrey', 'tan', 'burlywood', 'darkkhaki', 'wheat', 'lightslategrey', 'navajowhite', 'palegoldenrod', 'darksalmon', 'lightpink', 'yellowgreen', 'khaki', 'blanchedalmond', 'chocolate', 'goldenrod', 'palevioletred', 'bisque', 'lightsteelblue', 'cornflowerblue', 'lightgrey', 'sandybrown', 'maroon', 'linen', 'teal', 'steelblue', 'beige', 'skyblue', 'mediumaquamarine', 'darkseagreen', 'darkorange', 'ghostwhite', 'cadetblue', 'powderblue', 'thistle', 'mediumpurple', 'coral', 'olivedrab', 'lightskyblue', 'royalblue', 'darkgoldenrod', 'oldlace', 'olive', 'lightcoral', 'darkgreen', 'salmon', 'gold', 'dodgerblue', 'seagreen'];

      this.color = palettes[Math.floor(Math.random() * palettes.length)];
    },
  },
};
</script>

<style scoped>

.root {
  margin-bottom: 130px;
}

.root h2 {
  width: 100vw;
  display: inline-block;
  margin: 50px 10px 0;
}

.color {
  display: table;
  table-layout: fixed;
  width: 98%;
  height: 100px;
  cursor: pointer;
  margin: 0 auto;
}

.btn {
  border: 1px solid black;
  margin: 5px;
  padding: 1em 0;
  cursor: pointer;
}

.btn:hover {
  background: #f5f5f5;
}

</style>
