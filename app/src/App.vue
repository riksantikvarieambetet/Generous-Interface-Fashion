<template>
  <div id="app">
    <ImageWall />
    <modal name="welcome" v-bind:classes="['v--modal', 'welcome']" v-hammer:swipe.up="closeWelcome" transition="slide-north">
      <h1>A Title</h1>
      <p>Some introduction explaining the meaning of life.</p>
      <div class="btn-container"><button v-on:click="closeWelcome">Let's Go!</button></div>
    </modal>
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
  mounted() {
    this.$root.$on('openInfo', () => {
      this.$modal.show('welcome');
    });
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
    },

    closeWelcome: function() {
      this.$modal.hide('welcome');
    }
  },
  beforeMount() {
    this.fetchIntoState();
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
    
    // some rendering hack...
    setTimeout(() => {
      this.$modal.show('welcome');
    }, 100);
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

/* MODAL */

.welcome {
    padding: 8px;
    max-width: 100%;
}

.welcome h1 {
    margin: 0;
}

.welcome p {
    margin-top: 8px;
    margin-bottom: 8px;
}

.welcome .btn-container {
  position: absolute;
  left: 50%;
  bottom: 16px;
  width: 80%;
}

.welcome button {
    border-radius: 4px;
    background-color: #008cff;
    border: none;
    padding: 15px;
    transition: all 0.5s;
    text-align: center;
    cursor: pointer;
    font-size: 17px;
    display: block;
    color: #fff;
    position: relative;
    left: -50%;
    margin: auto;
}
</style>
