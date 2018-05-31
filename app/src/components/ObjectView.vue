<template>
  <div class="object">
    <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" v-on:click="toggle()" />
    <div class="details" v-show="isShown">
        <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" />
        <p>{{ object.application.description }}</p>
        <a v-bind:href="object.edm_rights">License</a>
        <a v-bind:href="object.edm_is_shown_at">Source</a>
        <br>
        <button v-on:click="toggle()">toggle object</button>
    </div>
  </div>
</template>

<script>
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
    max-width: 100%;
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
</style>
