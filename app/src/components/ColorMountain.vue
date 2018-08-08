<template>
  <div class="color-mountain">
    <div v-for="c in colors" v-bind:key="c[0]" v-bind:style="{ background: c[0], height: c[1] + 'px', width: 100 / colors.length + '%' }" @click="setSelectedSnappedColorId(c[0])" :class="{ selected: selectedSnappedColorIds.includes(c[0]) }"></div>
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
    height: 283px;
    overflow: hidden;
}

.color-mountain > div {
    float: left;
    min-height: 10px;
    max-height: 250px;
    cursor: pointer;
    position: relative;
}

.color-mountain > div.selected::before {
    content: '';
    background: #333;
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    position: absolute;
    top: 250px;
    left: calc(50% - 2.5px);
}
</style>
