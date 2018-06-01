<template>
  <div class="object">
    <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" v-on:click="toggle()" />
    <div class="details" v-show="isShown">
        <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" />
        <p>{{ object.application.description }}</p>
        <a v-bind:href="object.edm_rights">License</a>
        <a v-bind:href="object.edm_is_shown_at">Source</a>
        <br>
        <button v-on:click="toggle()"><i class="fas fa-times"></i></button>
    </div>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import { store } from '../main.js';

fontawesome.library.add(faTimes);

export default {
  name: 'ObjectView',
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
    }
  }
}
</script>

<style scoped>
.object {
    display: inline-block;
    width: 100%;
}

.object > img {
    width: 100%;
    vertical-align: bottom;
}

.details {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
    background: #9d5f5f;
}

button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    position: fixed;
    top: 10px;
    left: 10px;
    cursor: pointer;
    font-size: 20px;
}

</style>
