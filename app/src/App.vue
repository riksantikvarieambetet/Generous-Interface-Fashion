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
        .then(data => {
          store.commit('addAllItems', shuffle(data))
          store.commit('addActiveItems', store.state.allItems);
        });
    },

    handleScroll: function() {
      if ((window.innerHeight + window.scrollY) >= (document.querySelector('html').offsetHeight) - 50) {
        if (!store.state.isLoadingImages && store.state.visibleLimit <= store.state.activeItems.length) {
          store.commit('increaseVisibleLimit', 10);
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
html {
  position: relative;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

/* GLOBAL CSS ANIMATIONS */

.slide-north-leave-active,
.slide-north-enter-active {
  transition: .5s;
}
.slide-north-enter {
  transform: translate(0, -100%);
}
.slide-north-leave-to {
  transform: translate(0, -100%);
}
</style>
