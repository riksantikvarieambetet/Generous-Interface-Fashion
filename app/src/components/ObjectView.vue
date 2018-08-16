<template>
  <div class="object">
    <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" v-on:click="toggle()" />

    <div class="wallDetails" v-if="showWallDetails">
      <span v-for="label in object.application.labels" v-bind:key="label" class="label" :class="{active: labelActive(label)}" @click="setSelectedLabelId(label)">{{label}}</span>
    </div>

    <modal v-bind:name="object.europeana_record" v-bind:classes="['v--modal details']" height="auto" v-hammer:swipe.up="toggle" transition="slide-north">
      <CloseBtn v-on:click.native="toggle" />
      <img v-bind:src="object.edm_preview" v-bind:alt="object.application.description" />

      <div class="image-description">
        <p>
          {{ object.application.description }}
        </p>
      </div>

      <div class="image-colors">
        <ColorBtn v-for="color in object.application.css_colors" v-bind:key="color-btn" :color="color"></ColorBtn>
      </div>

      <div class="image-labels">
        <LabelBtn v-for="label in object.application.labels" v-bind:key="label-btn" :label="label"></LabelBtn>
      </div>


      <LicenseBtn v-bind:uri="object.edm_rights" /><br />
      <a v-bind:href="object.edm_is_shown_at" target="_blank">{{ $t('moreDetails') }} {{ object.edm_data_provider }}</a>
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

    filterByColor(color) {
      store.commit('setSelectedSnappedColorId', color);
      this.$root.$emit('triggerFiltering');
      this.toggle();
    },

    setSelectedLabelId(id) {
      //console.log(id);
      store.commit('setSelectedLabelId', id);
      this.$root.$emit('triggerFiltering');
    }

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
    border: 2px solid white;
}

.object:hover {
    /*transform: scale(1.1);*/
    /*border: 2px solid gray;*/
    /*background: black;
    color: white;*/
}

.wallDetails{
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

.image-description{
  margin-bottom: 10px;
}

.image-colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 98%;
    height: 50px;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 10px;
}

.image-colors div {
    height: 50px;
    display: table-cell;
    cursor: pointer;
}

.image-labels{
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
