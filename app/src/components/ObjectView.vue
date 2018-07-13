<template>
  <div class="object">
    <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" v-on:click="toggle()" />

    <modal v-bind:name="object.europeana_record" v-bind:classes="['v--modal details']" height="auto" v-hammer:swipe.up="toggle" transition="slide-north">
      <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" />
      <div class="image-colors">
        <div v-for="color in object.application.colors" v-bind:key="color.score" v-bind:style="{ background: `#${color.hex}`, width: color.score * 100 + '%' }" v-on:click="filterByColor(color.hex)"></div>
      </div>
      <p>{{ object.application.description }}</p>
      <LicenseBtn v-bind:uri="object.edm_rights" /><br />
      <a v-bind:href="object.edm_is_shown_at">{{ object.edm_data_provider }}</a>
    </modal>
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
      if (!this.isShown) this.$modal.show(this.object.europeana_record);
      if (this.isShown) this.$modal.hide(this.object.europeana_record);
      this.isShown = !this.isShown;
    },

    filterByColor(color) {
      store.commit('deactivateColorFilter');
      this.$root.$emit('updateColorFilterDynamic', '#' + color);
      this.toggle();
    }
  }
}
</script>

<style>
.details {
    text-align: center !important;
    padding: 7px !important;
    max-width: 100vw;
    max-height: 100vh;
}
</style>

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

.details img {
    max-height: calc(100vh - 200px);
    margin: auto;
    display: block;
    max-width: 100vw;
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

.image-colors {
    width: 100%;
    display: block;
    height: 50px;
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
