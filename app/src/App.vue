<template>
  <div id="app">
    <ImageWall v-bind:list="items"/>
  </div>
</template>

<script>
import ImageWall from './components/ImageWall.vue'

export default {
  name: 'app',
  components: {
    ImageWall
  },
  asyncComputed: {
    items: {
      get() {
        return this.$http
          .get('data.json')
          .then(response => response.body);
      },
      default: false
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
