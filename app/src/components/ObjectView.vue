<template>
  <div class="object">
    <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" v-on:click="toggle()" />

    <modal v-bind:name="object.europeana_record" v-bind:classes="['v--modal details']" height="auto" v-hammer:swipe.up="toggle" transition="slide-north">
      <CloseBtn v-on:click.native="toggle" />
      <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" />
      <div class="image-colors">
        <div v-for="color in object.application.css_colors" v-bind:key="color" v-bind:style="{ background: color }" @click="filterByColor(color)"></div>
      </div>
      <p>{{ object.application.description }}</p>
      <LicenseBtn v-bind:uri="object.edm_rights" /><br />
      <a v-bind:href="object.edm_is_shown_at" target="_blank">{{ $t('moreDetails') }} {{ object.edm_data_provider }}</a>
    </modal>
  </div>
</template>

<script>
import LicenseBtn from './LicenseBtn';
import CloseBtn from './CloseBtn';
import { store } from '../store';

export default {
  name: 'ObjectView',
  components: {
    LicenseBtn,
    CloseBtn,
  },
  props: {
    object: false,
  },
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    toggle() {
      if (!this.isShown) this.$modal.show(this.object.europeana_record);
      if (this.isShown) this.$modal.hide(this.object.europeana_record);
      this.isShown = !this.isShown;
    },

    filterByColor(color) {
      store.commit('setSelectedSnappedColorId', color);
      this.$root.$emit('triggerFiltering');
      this.toggle();
    },
  },
};
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
    transition: 0.0s ease-in-out;
    box-sizing: border-box;
    border: 2px solid white;
}

.object > img:hover {
    /*transform: scale(1.1);*/
    border: 2px solid gray;
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
    display: table;
    table-layout: fixed;
    width: 98%;
    height: 50px;
    cursor: pointer;
    margin: 0 auto;
}

.image-colors div {
    height: 50px;
    display: table-cell;
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
