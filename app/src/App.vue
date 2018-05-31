<template>
  <div id="app">
    <ImageWall />
  </div>
</template>

<script>
import ImageWall from './components/ImageWall.vue';
import { store } from './main.js';

export default {
  name: 'app',
  components: {
    ImageWall,
  },
  methods: {
    fetchIntoState: function() {
      this.$http
        .get('data.json')
        .then(response => response.body)
        .then(data =>  store.commit('addAllItems', data));
    },

    handleScroll: function() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight) - 50) {
        if (!store.state.isLoadingImages) {
          store.commit('increaseVisibleLimit', 5);
        }
      }
    }
  },
  beforeMount() {
    this.fetchIntoState();
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
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
