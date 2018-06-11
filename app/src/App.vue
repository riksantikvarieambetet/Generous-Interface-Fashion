<template>
  <div id="app">
    <ImageWall />
  </div>
</template>

<script>
import ImageWall from './components/ImageWall';
import { store } from './main.js';

export default {
  name: 'app',
  components: {
    ImageWall,
  },
  methods: {
    fetchIntoState: function() {
      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

      this.$http
        .get('data.json')
        .then(response => response.body)
        .then(data => store.commit('addAllItems', shuffle(data)));
    },

    handleScroll: function() {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight) - 2000) { // #TODO figure out why this value needs to be so high
        if (!store.state.isLoadingImages) {
          store.commit('increaseVisibleLimit', 15);
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
