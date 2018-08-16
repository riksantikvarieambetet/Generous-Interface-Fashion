<template>
  <div class="color">

    <div class="btn" :class="{ active: isActive }" :style="{ background: color, 'border-color': color }" @click="filterByColor(color)"></div>

  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: 'ColorBtn',
  props: {
    color: null,
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

.color{
  flex: 0 0 30px;
  display: inline;
  height: 30px;
  margin: 1px;
}

.btn{
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
.btn.active{
  box-shadow: inset 0px 0px 0px 2px white;
}

</style>
