<template>
  <div>
    <img v-bind:src="object.edm_preview" v-bind:alt="object.dc_title" v-on:click="toggle()" />
    <div class="details" v-show="isShown">
        <img v-bind:src="object.edm_preview" v-bind:alt="object.dc_title" />
        <p>{{ object.dc_title }}</p>
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
    }
  }
}
</script>

<style scoped>
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
