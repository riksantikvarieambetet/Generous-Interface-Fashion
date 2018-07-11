<template>
  <div>
    <div class="menu">
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
          <div v-if="currentColor != `url('transparent.png')`" v-bind:style="{ background: currentColor }" class="color"></div>
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
import AnimatedNumber from './AnimatedNumber'
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
    }
  },
  mounted() {
    this.$root.$on('triggerFiltering', () => {
      this.executeFiltering();
    });
  },
  methods: {
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
        finalList = finalList.filter(item => item.application.colors.some(color => this.isSimilarColor(color.hsl, store.state.colorFilterDynamic)));

          store.commit('colorCountAdd', [finalList.length, store.state.colorFilterDynamic]);

        store.state.colorFilter.forEach(stateColor => {
          if (stateColor !== store.state.colorFilterDynamic) {
            finalList = finalList.filter(item => item.application.colors.some(color => this.isSimilarColor(color.hsl, stateColor)));
            store.commit('colorCountAdd', [store.state.allItems.filter(item => item.application.colors.some(color => this.isSimilarColor(color.hsl, stateColor))).length, stateColor]);
          }
        });
      }

      store.commit('addActiveItems', finalList);

      // handle reseting of visibleLimit on filter change
      console.log('debug: reseting visibleLimit');
      store.commit('resetVisibleLimit');
      window.scrollTo(0, 0);
    },

    hexToHsl(color) {
      let r = parseInt(color.substr(1,2), 16);
      let g = parseInt(color.substr(3,2), 16);
      let b = parseInt(color.substr(5,2), 16);

      r /= 255, g /= 255, b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;

      if (max == min) {
          h = s = 0; // achromatic
      } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
        return [h, s, l];
    },

    isSimilarColor(itemHSL, filterHEX) {
      const filterHSL = this.hexToHsl(filterHEX);

      const itemHue = itemHSL[0];
      const filterHue = filterHSL[0];

      const itemLight = itemHSL[1];
      const filterLight = filterHSL[1];

      const itemSaturation = itemHSL[2];
      const filterSaturation = filterHSL[2];

    if (filterLight > 0.01 && filterLight < 0.99) {
      if (Math.abs(itemHue - filterHue) > 0.1) {
        return false;
      }

      if (Math.abs(itemSaturation - filterSaturation) > 0.8) {
        return false;
      }
    }

      if (Math.abs(itemLight - filterLight) > 0.1) {
        return false;
      }

      return true;
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
