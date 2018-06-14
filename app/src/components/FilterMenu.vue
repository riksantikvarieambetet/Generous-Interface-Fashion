<template>
  <div>
    <div class="menu">
      <span>{{ nActiveitems }}</span>
      <div v-on:click="toggleColorFilter" v-bind:style="{ background: '#' + activeColor }" class="color-btn"></div>
    </div>
    <FilterContainer v-show="colorFilterOpen" v-hammer:swipe.up="toggleColorFilter">
      <div id="color-wrapper" v-bind:style="{ background: '#' + activeColor }">
        <input v-on:change="updateColorFilter($event)" type="color"/>
      </div>
      <button id="color-reset" v-if="colorFilterStatus" v-on:click="resetColorFilter()">Reset color</button>
    </FilterContainer>
  </div>
</template>

<script>
import FilterContainer from './FilterContainer';

import { store } from '../main.js';

export default {
  name: 'FilterMenu',
  data() {
    return {
      colorFilterOpen: false,
    };
  },
  components: {
    FilterContainer,
  },
  computed: {
   colorFilterStatus() {
      return store.state.colorFilterActive;
    },
    activeColor() {
      return store.state.colorFilter;
    },
    nActiveitems() {
      return store.state.activeItems.length;
    }
  },
  methods: {
    toggleColorFilter() {
      this.colorFilterOpen = !this.colorFilterOpen;
    },

    updateColorFilter(e) {
      store.commit('activateColorFilter');
      store.commit('setColorFilter', e.target.value.substring(1));
    },

    resetColorFilter() {
      store.commit('deactivateColorFilter');
    }
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
</style>
