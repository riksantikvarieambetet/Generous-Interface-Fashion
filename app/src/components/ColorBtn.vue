<template>
  <div class="color">

    <div :class="{ active: isActive }" :style="{ background: color, 'border-color': color }" class="btn" @click="filterByColor(color)" />

  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: 'ColorBtn',
  props: {
    color: {
      type: [String, Boolean],
      default: false,
    },
  },
  computed: {
    isActive() {
      return store.state.selectedSnappedColorIds.includes(this.color);
    },
  },
  methods: {
    filterByColor() {
      store.commit('setSelectedSnappedColorId', this.color);
      this.$root.$emit('triggerFiltering');
    },
  },
};
</script>

<style scoped>

.color {
  flex: 0 0 30px;
  display: inline;
  height: 30px;
  margin: 1px;
}

.btn {
  font-size: small;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 1px;
  cursor: pointer;
}

.btn:hover,
.btn.active {
  box-shadow: inset 0 0 0 2px white;
}

</style>
