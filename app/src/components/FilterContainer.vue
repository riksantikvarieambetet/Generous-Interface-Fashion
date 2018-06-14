<template>
  <div class="filter-container">
      <slot></slot>
  </div>
</template>

<script>
import { store } from '../main.js';

export default {
  name: 'FilterContainer',
  data() {
    return {};
  },
  methods: {}
}
</script>

<style scoped>
.filter-container {
    position: fixed;
    width: 100%;
    background: #FFF;
    padding: 7px;
    box-sizing: border-box;
}

#color-wrapper {
  position: relative;
  width: 50%;
  border: 2px solid #a8a8a8;
  box-sizing: border-box;
  float: left;
}

#color-wrapper svg {
  position: absolute;
  left: calc(50% - 8px);
  top: 5px;
}

input[type=color] {
  opacity: 0;
  cursor: pointer;
  width: 100%
}

#color-reset {
    position: relative;
    border: 2px solid #a8a8a8;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 50%;
    cursor: pointer;
    float: left;
    height: 29px;
}
</style>
