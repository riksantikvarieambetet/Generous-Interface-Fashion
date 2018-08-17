<template>
  <div class="color-mountain">
    <p>{{ $t('filterWithColor') }}</p>
    <div v-for="c in sortedColors" :key="c[0]" :style="{ background: c[0], height: c[1] + 'px', width: 100 / colors.length + '%' }" :class="{ selected: selectedSnappedColorIds.includes(c[0]) }" @click="setSelectedSnappedColorId(c[0])" />
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
  width: 100%;
  transform: scaleY(-1);
  display: inline-block;
  height: 250px;
  overflow: hidden;
}

p {
  position: absolute;
  font-size: 3vw;
  transform: scaleY(-1);
  right: 60px;
  top: 120px;
}

.color-mountain > div {
  float: left;
  min-height: 10px;
  max-height: 250px;
  cursor: pointer;
  position: relative;
}

@media (max-width: 450px) {
  p {
    font-size: 14px;
    right: 35px;
  }
}
</style>
