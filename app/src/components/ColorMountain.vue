<template>
  <div class="color-mountain">
    <div v-for="c in sortedColors" v-bind:key="c[0]" v-bind:style="{ background: c[0], height: c[1] + 'px', width: 100 / colors.length + '%' }" @click="setSelectedSnappedColorId(c[0])" :class="{ selected: selectedSnappedColorIds.includes(c[0]) }"></div>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: 'ColorMountain',
  props: {
    'colors': {
      default: [],
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
    width: 100%;
    transform: scaleY(-1);
    display: inline-block;
    height: 250px;
    overflow: hidden;
}

.color-mountain > div {
    float: left;
    min-height: 10px;
    max-height: 250px;
    cursor: pointer;
    position: relative;
}
</style>
