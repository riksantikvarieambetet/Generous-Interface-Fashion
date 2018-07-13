<template>
  <div class="object">
    <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" v-on:click="toggle()" />
    <transition name="slide-north">
      <div class="details" v-show="isShown" v-hammer:swipe.up="toggle">
        <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" />
        <div class="image-colors">
          <div v-for="color in object.application.colors" v-bind:key="color.score" v-bind:style="{ background: `#${color.hex}`, width: color.score * 100 + 'vw' }" v-on:click="filterByColor(color.hex)"></div>
        </div>
        <p>{{ object.application.description }}</p>
        <LicenseBtn v-bind:uri="object.edm_rights" />
        <a v-bind:href="object.edm_is_shown_at">{{ object.edm_data_provider }}</a>
        <button v-on:click="toggle()"><i class="fas fa-times"></i></button>
      </div>
    </transition>
  </div>
</template>

<script>
import LicenseBtn from './LicenseBtn';
import fontawesome from '@fortawesome/fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import { store } from '../main.js';

fontawesome.library.add(faTimes);

export default {
  name: 'ObjectView',
  components: {
    LicenseBtn,
  },
  props: {
    object: false
  },
  data() {
    return {
      isShown: false
    }
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;

      // disable scroll if object is open
      const keys = {37: 1, 38: 1, 39: 1, 40: 1};

      function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;  
      }

      function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
        }
      }

      if (this.isShown) {
        window.onwheel = preventDefault;
        window.ontouchmove  = preventDefault;
        document.onkeydown  = preventDefaultForScrollKeys;
      } else {
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
      }
    },

    filterByColor(color) {
      store.commit('deactivateColorFilter');
      this.$root.$emit('updateColorFilterDynamic', '#' + color);
      this.toggle();
    }
  }
}
</script>

<style scoped>
.object {
    float: left;
    overflow: hidden;
}

.object > img {
    vertical-align: bottom;
    cursor: pointer;
    object-fit: cover;
    width: 50vw;
    height: 50vw;
    transform: scale(1);
    transition: .3s ease-in-out;
}

.object > img:hover {
    transform: scale(1.3);
}

.details {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    background: #c6c2c2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.details img {
    max-height: calc(100vh - 200px);
}

button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    position: fixed;
    top: 60px;
    left: 10px;
    cursor: pointer;
    font-size: 20px;
}

.image-colors div {
    height: 50px;
    float: left;
    cursor: pointer;
}

@media only screen and (min-width: 600px) {
    .object > img {
        width: 25vw;
        height: 25vw;
    }
}

@media only screen and (min-width: 1200px) {
    .object > img {
        width: 20vw;
        height: 20vw;
    }
}
</style>
