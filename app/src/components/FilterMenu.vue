<template>
  <div>
      <div v-on:click="toggle()" v-bind:class="{open: isShown}" class="minified">
          <span v-if="isShown">close filter</span>
          <span v-if="!isShown">open filter</span>
      </div>
      <div v-show="isShown" class="expanded">
          tons of stuff
      </div>
  </div>
</template>

<script>
export default {
  name: 'FilterMenu',
  data() {
    return {
      isShown: false
    }
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    }
  }
}
</script>

<style scoped>
.minified {
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: #fff;
    height: 50px;
}

.minified.open {
    bottom: 200px;
}

.expanded {
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: #fff;
    height: 200px;
}
</style>
