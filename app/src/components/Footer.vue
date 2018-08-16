<template>
  <div class="footer">
    <div>
      <div v-for="color in selectedSnappedColorIds" :key="color" class="color" @click="removeColor(color)" v-bind:style="{ background: color }">
        <div class="close-btn">
          <i class="fas fa-times-circle fa-lg"></i>
        </div>
      </div>

      <div v-for="label in selectedLabelIds" :key="label" class="label" @click="removeLabel(label)">
        <div class="close-btn">
          <i class="fas fa-times-circle fa-lg"></i>
        </div>
        <span>{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle';
import { mapGetters } from 'vuex';

import { store } from '../store';

fontawesome.library.add(faTimesCircle);

export default {
  name: 'Footer',
  components: {
  },
  computed: {
    ...mapGetters([
      'anyColorFilterIsActive',
      'labelFilterIsActive',
      'selectedSnappedColorIds',
      'selectedLabelIds',
    ]),
  },
  data() {
    return {
      isShown: true,
    };
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },

    removeColor(color) {
      store.commit('setSelectedSnappedColorId', color); // toggle...
      this.$root.$emit('triggerFiltering');
    },

    removeLabel(label) {
      store.commit('setSelectedLabelId', label); // toggle...
      this.$root.$emit('triggerFiltering');
    },
  },
};
</script>

<style scoped>
.footer {
    width: 100vw;
    position: fixed;
    bottom: 0;
    /* top: 50px; */
    background: #fff;
    padding: 2.5px;
    box-sizing: border-box;
}

.label {
    height: 55px;
    float: left;
    margin-left: 5px;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #dadada;
    line-height: 50px;
    position: relative;
    margin-bottom: 5px;
}

.label span {
    padding: 0 16px;
    font-weight: 500;
    font-size: 120%;
}

.color {
    width: 70px;
    height: 55px;
    float: left;
    margin-left: 5px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px;
    position: relative;
    margin-bottom: 5px;
}

.close-btn {
    display: inline;
    cursor: pointer;
    background: rgba(51, 51, 51, .3);
    border-radius: 100%;
    height: 21px;
    line-height: 21px;
    position: absolute;
    left: 5px;
}

.close-btn svg {
    color: #fff;
}
</style>
