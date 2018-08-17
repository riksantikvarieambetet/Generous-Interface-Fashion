<template>
  <div class="root">
    <h2>{{ $t('theEnd') }}</h2>
    <p>{{ $t('explorePalette') }}</p>

    <div v-for="color in colors" :key="color" :style="{ background: color, 'border-color': color }" class="color btn" @click="filterWithPalette(color)" />

    <div class="shuffle btn" @click="randomPalette">
      {{ $t('shuffle') }} <i class="fas fa-random" />
    </div>

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
      colors: [],
    };
  },
  created() {
    this.randomPalette();
  },
  methods: {
    filterWithPalette: function(color) {
      store.commit('replaceSnappedColorIds', [color]);
      store.commit('replaceLabelIds', []);
      this.$root.$emit('triggerFiltering');
      this.randomPalette();
    },

    randomPalette: function() {
      const palettes = ['crimson', 'brown', 'lightsalmon', 'firebrick', 'tomato', 'darkslategrey', 'black', 'dimgrey', 'darkgrey', 'grey', 'silver', 'whitesmoke', 'lavender', 'indianred', 'sienna', 'darkolivegreen', 'per', 'rosybrown', 'gainsboro', 'saddlebrown', 'antiquewhite', 'midnightblue', 'darkslateblue', 'slategrey', 'tan', 'burlywood', 'darkkhaki', 'wheat', 'lightslategrey', 'navajowhite', 'palegoldenrod', 'darksalmon', 'lightpink', 'yellowgreen', 'khaki', 'blanchedalmond', 'chocolate', 'goldenrod', 'palevioletred', 'bisque', 'lightsteelblue', 'cornflowerblue', 'lightgrey', 'sandybrown', 'maroon', 'linen', 'teal', 'steelblue', 'beige', 'skyblue', 'mediumaquamarine', 'darkseagreen', 'darkorange', 'ghostwhite', 'cadetblue', 'powderblue', 'thistle', 'mediumpurple', 'coral', 'olivedrab', 'lightskyblue', 'royalblue', 'darkgoldenrod', 'oldlace', 'olive', 'lightcoral', 'darkgreen', 'salmon', 'gold', 'dodgerblue', 'seagreen'];

      let colors = [];

      colors[0] = palettes[Math.floor(Math.random() * palettes.length)];
      colors[1] = palettes[Math.floor(Math.random() * palettes.length)];
      colors[2] = palettes[Math.floor(Math.random() * palettes.length)];

      this.colors = colors;
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
  display: inline-block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid black;
}

.btn {
  box-sizing: border-box;
  margin: 0 5px;
  padding: 1em 0;
  cursor: pointer;
}

.shuffle {
  border-radius: 10px;
}

.btn:hover,
.btn.active {
  box-shadow: inset 0 0 0 2px white;
}

.btn.shuffle {
  background: white;
  border: 1px solid black;
  width: 200px;
  height: 50px;
  display: block;
  margin: auto;
  margin-top: 5px;
}

</style>
