<template>
  <div class="object">
    <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" v-on:click="toggle()" />

    <div class="wall-details" v-if="showWallDetails">
      <span v-for="label in object.application.labels" v-bind:key="label" class="label" :class="{ active: labelActive(label) }" @click="setSelectedLabelId(label)">{{ label }}</span>
    </div>

    <modal v-bind:name="object.europeana_record" v-bind:classes="['v--modal details']" height="auto" v-hammer:swipe.up="toggle" transition="slide-north">
      <CloseBtn v-on:click.native="toggle" />

      <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" />

      <div class="image-colors">
        <ColorBtn v-for="color in object.application.css_colors" v-bind:key="color" :color="color"></ColorBtn>
      </div>

      <div class="image-labels">
        <LabelBtn v-for="label in object.application.labels" v-bind:key="label" :label="label"></LabelBtn>
      </div>

      <p>Bilden tillhandlahållas av <a target="_blank" :href="object.edm_is_shown_at">{{ object.edm_data_provider }}</a> under licensen <a target="_blank" :href="object.edm_rights">{{ resolveLicense(object.edm_rights) }}</a>.</p>

    </modal>
  </div>
</template>

<script>
import LicenseBtn from './LicenseBtn';
import LabelBtn from './LabelBtn';
import ColorBtn from './ColorBtn';
import CloseBtn from './CloseBtn';
import { store } from '../store';

export default {
  name: 'ObjectView',
  components: {
    LicenseBtn,
    LabelBtn,
    ColorBtn,
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

    resolveLicense(lisence) {
      if (lisence === 'http://creativecommons.org/licenses/by-nc-nd/2.5/') return 'Attribution-NonCommercial-NoDerivs 2.5 Generic';
      if (lisence === 'http://creativecommons.org/licenses/by/2.5/') return 'Attribution 2.5 Generic';
    },

    filterByColor(color) {
      store.commit('setSelectedSnappedColorId', color);
      this.$root.$emit('triggerFiltering');
      this.toggle();
    },

    setSelectedLabelId(id) {
      store.commit('setSelectedLabelId', id);
      this.$root.$emit('triggerFiltering');
    },

    labelActive(label) {
      return store.state.selectedLabelIds.includes(label);
    },

  },
  computed: {
    showWallDetails() {
      return store.state.wallDetails;
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
    /*float: left;*/
    overflow: hidden;
    height: auto;
    max-width: 50vw;
    transition: 0 ease-in-out;
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
    border: 2px solid #e9e9e9;
}

.wall-details {
  bottom: 0;
  background: rgba(255,255,255,0.5);
  font-size: smaller;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.details img {
    max-height: calc(100vh - 200px);
    margin: auto;
    display: block;
    max-width: 100vw;
    margin-bottom: 5px;
}
.image-colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 5px;
}

.image-labels {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
}

@media only screen and (min-width: 600px) {
  .object {
      max-width: 25vw;
  }

  .object > img {
      width: 25vw;
      height: 25vw;
  }
}

@media only screen and (min-width: 1200px) {
    .object {
        max-width: 20vw;
    }

    .object > img {
        width: 20vw;
        height: 20vw;
    }
}
</style>
