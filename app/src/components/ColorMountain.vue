<template>
  <div class="color-mountain">

    <p>{{ $t('filterWithColor') }}</p>

    <div class="colors">
      <div v-for="c in sortedColors" :key="c[0]" :style="{ background: c[0], height: 10 + c[1]/sortedColors[0][1] * 100 + 'px', width: 100 / colors.length + '%' }" class="color" :class="{ selected: selectedSnappedColorIds.includes(c[0]) }" @click="setSelectedSnappedColorId(c[0])">

      </div>
    </div>

    <div class="color-line"></div>

  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: 'ColorMountain',
  props: {
    colors: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    selectedSnappedColorIds() {
      return store.state.selectedSnappedColorIds;
    },

    sortedColors() {
      return this.colors.slice(0).sort((a, b) => b[1] - a[1]);
    },
  },
  methods: {
    setSelectedSnappedColorId(id) {
      store.commit('setSelectedSnappedColorId', id);
      this.$root.$emit('triggerFiltering');
    },
  },
};
</script>

<style scoped>
.color-mountain {
  position: relative;

  /*transform: scaleY(-1);*/
  /*display: inline-block;*/

}

.colors{
  display: flex;
  align-items: flex-end;
  width: 100%;
}

p {
  position: absolute;
  font-size: 1vw;
  right: 10px;
  top: 10px;
}

.color {
  position: relative;
  cursor: pointer;
  -webkit-transition: height 1.5s; /* Safari */
  transition: height 1.5s ease-in-out;
  box-sizing: border-box;
}

.color:not(:hover) {
  border-bottom: 3px solid white;
}

.color:hover, .color.selected {
  border-bottom-width: 0px;
}

.color-line {
  position: absolute;
  bottom: 3px;
  height: 2px;
  width: 100%;
  background: white;
}

@media (max-width: 450px) {
  p {
    font-size: 14px;
    right: 35px;
  }
}
</style>
