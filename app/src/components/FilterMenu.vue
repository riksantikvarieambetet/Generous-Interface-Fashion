<template>
  <div>
    <div class="menu">
      <AnimatedNumber v-bind:number="nActiveitems"></AnimatedNumber>
      <div v-on:click="toggleColorFilter" v-bind:style="{ background: currentColor }" class="color-btn"></div>
    </div>
    <FilterContainer v-show="colorFilterOpen" v-hammer:swipe.up="toggleColorFilter">
      <Chrome v-bind:value="currentColor" v-on:input="updateColorFilterDynamic" v-bind:disableAlpha="true" v-bind:disableFields="true" class="color-picker" />
      <button v-on:click="lockColor">Lock color</button>
      <div v-for="color in staticColors" v-bind:key="color">
        <div v-bind:style="{ background: color }" class="color"><span role="button" v-on:click="removeColor(color)">x</span></div>
      </div>
      <button v-on:click="resetColorFilter" class="red-btn">Clear and disable this filter</button>
    </FilterContainer>
  </div>
</template>

<script>
import FilterContainer from './FilterContainer';
import AnimatedNumber from './AnimatedNumber'
import { Chrome } from 'vue-color';

import { store } from '../main.js';

export default {
  name: 'FilterMenu',
  data() {
    return {
      colorFilterOpen: false,
      currentColor: '#000000',
    };
  },
  components: {
    FilterContainer,
    Chrome,
    AnimatedNumber,
  },
  computed: {
    nActiveitems() {
      return store.state.activeItems.length;
    },

    staticColors() {
      return store.state.colorFilter;
    },
  },
  methods: {
    toggleColorFilter() {
      this.colorFilterOpen = !this.colorFilterOpen;
    },

    updateColorFilterDynamic(value) {
      store.commit('activateColorFilter');
      store.commit('updateDynamicColor', value.hex);
      this.currentColor = value.hex;
    },

    lockColor(value) {
      store.commit('addColorFilter', this.currentColor);
    },

    resetColorFilter() {
      store.commit('deactivateColorFilter');
      this.colorFilterOpen = false;
      this.currentColor = '#000000';
    },

    removeColor(value) {
      store.commit('removeColorFilter', [value]);
    },
  }
}
</script>

<style scoped>
.menu {
    width: 100vw;
    background: #fff;
    height: 50px;
    z-index: 2;
    text-align: right;
    padding-right: 35px;
    box-sizing: border-box;
    line-height: 50px;
    position: fixed;
    top: 0;
}

.menu span {
    float: left;
    padding-left: 7px;
}

.color-btn {
    height: 32px;
    width: 32px;
    float: right;
    margin-top: 9px;
    background: #333;
    cursor: pointer;
    border-radius: 100%;
}

.color-picker {
  width: 100%;
  box-shadow: unset;
}

button {
    border-radius: 4px;
    background-color: #008cff;
    border: none;
    padding: 15px;
    transition: all 0.5s;
    text-align: center;
    cursor: pointer;
    font-size: 17px;
    margin-top: 5px;
    display: block;
    width: 100%;
    color: #fff;
}

.red-btn {
    background-color: #f44336;
}

.color {
    width: calc(33% - 6px);
    height: 70px;
    margin-top: 5px;
    float: left;
    margin-left: 5px;
    margin-bottom: 5px;
    position: relative;
}

.color span {
    height: 20px;
    width: 20px;
    background: #000;
    color: #fff;
    position: absolute;
    left: -6px;
    top: -6px;
    border-radius: 100%;
    line-height: 19px;
    cursor: pointer;
}
</style>
