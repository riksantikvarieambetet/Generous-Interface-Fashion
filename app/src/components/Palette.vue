<template>
  <div class="root">
    <h2>{{ $t('theEnd') }}</h2>
    <p>{{ $t('explorePalette') }}</p>
    <div class="palette" v-on:click="filterWithPalette" v-bind:key="color" v-bind:style="{ background: color }"></div>
    <div class="btn" v-on:click="randomPalette">Shuffle <i class="fas fa-random"></i></div>
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
      this.$root.$emit('triggerFiltering');
      this.randomPalette();
    },

    randomPalette: function() {
      const palettes = ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgrey','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','grey','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgrey','lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];

      this.color = palettes[Math.floor(Math.random() * palettes.length)];
    },
  },
};
</script>

<style scoped>

.root h2 {
    width: 100vw;
    margin: 0;
    display: inline-block;
    margin: 50px 10px 0;
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
