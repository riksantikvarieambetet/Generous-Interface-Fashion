<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld v-bind:list="items"/>
    <p v-if="items">hej</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
