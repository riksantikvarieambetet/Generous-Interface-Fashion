<template>
  <div>
    <div class="menu">
      <img src="http://via.placeholder.com/250x90?text=logo" alt="logo and infomrtaion" class="logo" v-on:click="openModal" />
      <span class="left">Antal: <AnimatedNumber v-bind:number="nActiveitems"></AnimatedNumber></span>
      <div v-on:click="toggleColorFilter" v-bind:style="{ background: currentColor }" class="color-btn">
        <div v-if="colorCount.length > 1" v-for="colorC in colorCount" v-bind:key="colorC[1]" v-bind:style="{ background: colorC[1], width: colorC[0] + '%' }"></div>
      </div>
    </div>
    <transition name="slide-north">
      <FilterContainer v-if="colorFilterOpen" v-hammer:swipe.up="toggleColorFilter">
        <div class="desktop-break">
          <Chrome v-bind:value="currentColor" v-on:input="updateColorFilterDynamic" v-bind:disableAlpha="true" v-bind:disableFields="true" class="color-picker" />
        </div>
        <div class="desktop-break">
          <div v-if="currentColor != `url('transparent.png')` && (!staticColors.includes(currentDynamicColorState) || currentColor == currentDynamicColorState)" v-bind:style="{ background: currentColor }" class="color"></div>
          <div v-for="color in staticColors" v-bind:key="color" v-bind:style="{ background: color }" class="color"><span role="button" v-on:click="removeColor(color)">x</span></div>
          <button v-if="currentColor != `url('transparent.png')`" v-on:click="lockColor">Add color</button>
          <button v-on:click="resetColorFilter" class="red-btn">Clear and disable this filter</button>
        </div>
      </FilterContainer>
    </transition>
  </div>
</template>

<script>
import FilterContainer from './FilterContainer';
import AnimatedNumber from './AnimatedNumber';
import { Chrome } from 'vue-color';

import { store } from '../main.js';

export default {
  name: 'FilterMenu',
  data() {
    return {
      colorFilterOpen: false,
      currentColor: `url('transparent.png')`,
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

    colorCount() {
      return store.getters.getColorPercentages;
    },

    currentDynamicColorState() {
      return store.state.colorFilterDynamic;
    },
  },
  mounted() {
    this.$root.$on('triggerFiltering', () => {
      this.executeFiltering();
    });

    this.$root.$on('updateColorFilterDynamic', color => {
      const value = { hex: color };
      this.updateColorFilterDynamic(value);
    })
  },
  methods: {
    openModal() {
      this.$root.$emit('openInfo');
    },

    toggleColorFilter() {
      this.colorFilterOpen = !this.colorFilterOpen;
    },

    updateColorFilterDynamic(value) {
      store.commit('activateColorFilter');
      store.commit('updateDynamicColor', value.hex);
      this.currentColor = value.hex;
      this.executeFiltering();
    },

    lockColor() {
      store.commit('addColorFilter', this.currentColor);
    },

    resetColorFilter() {
      store.commit('deactivateColorFilter');
      this.colorFilterOpen = false;
      this.currentColor = `url('transparent.png')`;
      this.executeFiltering();
    },

    removeColor(value) {
      store.commit('removeColorFilter', [value]);
      this.executeFiltering();
    },

    executeFiltering() {
      let finalList = store.state.allItems;
      console.log('debug: executing filtering');
      store.commit('colorCountClear');

      if (store.state.colorFilterActive) {
        finalList = finalList.filter(item => item.application.colors.some(color => this.isSimilarColor(color.hex, store.state.colorFilterDynamic)));

        store.commit('colorCountAdd', [finalList.length, store.state.colorFilterDynamic]);

        store.state.colorFilter.forEach(stateColor => {
          if (stateColor !== store.state.colorFilterDynamic) {
            finalList = finalList.filter(item => item.application.colors.some(color => this.isSimilarColor(color.hex, stateColor)));
            store.commit('colorCountAdd', [store.state.allItems.filter(item => item.application.colors.some(color => this.isSimilarColor(color.hex, stateColor))).length, stateColor]);
          }
        });
      }

      store.commit('addActiveItems', finalList);

      // handle reseting of visibleLimit on filter change
      console.log('debug: reseting visibleLimit');
      store.commit('resetVisibleLimit');
      window.scrollTo(0, 0);
    },

    isSimilarColor(hex1, hex2) {
      if (hex1.startsWith('#')) hex1 = hex1.substring(1);
      if (hex2.startsWith('#')) hex2 = hex2.substring(1);

      const r1 = parseInt(hex1.substring(0, 2), 16);
      const g1 = parseInt(hex1.substring(2, 4), 16);
      const b1 = parseInt(hex1.substring(4, 6), 16);

      const r2 = parseInt(hex2.substring(0, 2), 16);
      const g2 = parseInt(hex2.substring(2, 4), 16);
      const b2 = parseInt(hex2.substring(4, 6), 16);

      let r = 255 - Math.abs(r1 - r2);
      let g = 255 - Math.abs(g1 - g2);
      let b = 255 - Math.abs(b1 - b2);

      r /= 255;
      g /= 255;
      b /= 255;

      const score = (r + g + b) / 3;

      return (score >= 0.9 ? true : false);
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

.left {
    float: left;
    padding-left: 7px;
}

.logo {
    display: block;
    float: left;
    max-height: 100%;
    cursor: pointer;
}

.color-btn {
    height: 32px;
    width: 48px;
    float: right;
    margin-top: 9px;
    cursor: pointer;
    border-radius: 4px;
}

.color-btn div {
    height: 32px;
    float: left;
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
    border-radius: 4px;
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

@media only screen and (min-width: 1000px) {
    .desktop-break {
      float: left;
      padding: 5px;
      width: calc(50% - 10px);
    }
}
</style>
