<template>
  <div class="color-mountain">

    <div class="colors">
      <div v-for="c in sortedColors" :key="c[0]" class="color-container" @click="setSelectedSnappedColorId(c[0])">
        <div :style="{ background: c[0], height: 15 + c[1]/sortedColors[0][1] * 100 + 'px'}" class="color" role="button" :aria-pressed="selectedSnappedColorIds.includes(c[0])" :class="{ selected: selectedSnappedColorIds.includes(c[0]) }" />
      </div>
    </div>

    <div class="color-line" />

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
}

.colors {
  display: flex;
  align-items: stretch;
  width: 100%;
}

.color-container {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
}

.color {
  transition: height 1.5s ease-in-out;
  box-sizing: border-box;
  border-bottom: 5px solid white;
}

.color-container:hover > .color,
.color.selected {
  border-bottom-width: 0;
}

.color-line {
  position: absolute;
  bottom: 3px;
  height: 2px;
  width: 100%;
  background: white;
}
</style>
