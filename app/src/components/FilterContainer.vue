<template>
  <div class="filter-container">
    <slot></slot>
  </div>
</template>

<script>
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
    z-index: 1;
}
</style>
