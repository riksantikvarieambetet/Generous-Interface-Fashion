<template>
  <div>
    <div class="menu">
      <img src="http://via.placeholder.com/90x90?text=logo" alt="logo and information" class="logo" v-on:click="openModal" />
      <span class="left">{{ $t('nItemsPrefix') }} <AnimatedNumber v-bind:number="nActiveItems"></AnimatedNumber>{{ $t('nItemsMidfix') }} {{ nAllItems }} {{ $t('nItemsSuffix') }}</span>
      <div v-on:click="toggleLabelFilter" class="label-btn">
        <i class="fas fa-tag"></i>
      </div>
      <div v-on:click="toggleColorFilter" class="color-btn">
        <i class="fas fa-palette"></i>
        <div v-for="colorC in colorCount" v-bind:key="colorC[1]" v-bind:style="{ background: colorC[1], width: colorC[0] + '%' }"></div>
      </div>
    </div>
    <transition name="slide-north">
      <FilterContainer v-if="colorFilterOpen" v-hammer:swipe.up="toggleColorFilter">

        <div class="desktop-break">
          <Chrome v-bind:value="staticColors[selectedColorId]" v-on:input="updateColorFilterStatic" v-bind:disableAlpha="true" v-bind:disableFields="true" class="color-picker" />
        </div>

        <div class="desktop-break">
          <div v-for="(color,index) in staticColors" v-bind:key="color" v-bind:style="{ background: color }" @click="setselectedColorId(index)" :class="{selectedColorId: index == selectedColorId, unsetColor: color == ''}" class="color">
            <span role="button" v-on:click.stop="removeColorById(index)" v-if="index == selectedColorId">x</span>
          </div>

          <div class="colorNew" @click="lockColor" v-if="staticColors[selectedColorId] != ''">
            <h1>+</h1>
          </div>
        </div>
      </FilterContainer>
    </transition>

    <transition name="slide-north">
      <FilterContainer v-if="labelFilterOpen">
        <span v-for="label in labels" v-bind:key="label[0]" v-bind:style="{ fontSize: label[1] / 10 + 'px' }" @click="setSelectedLabelId(label[0])" :class="{ selectedLabel: selectedLabelIds.includes(label[0]) }">{{ label[0] }}, </span>
      </FilterContainer>
    </transition>
  </div>
</template>

<script>
import FilterContainer from './FilterContainer';
import AnimatedNumber from './AnimatedNumber';
import { Chrome } from 'vue-color';
import fontawesome from '@fortawesome/fontawesome';
import faTag from '@fortawesome/fontawesome-free-solid/faTag';
import faPalette from '@fortawesome/fontawesome-free-solid/faPalette';
import { store } from '../main.js';
import ColorConvert from 'color-convert';

fontawesome.library.add(faPalette);
fontawesome.library.add(faTag);

export default {
  name: 'FilterMenu',
  data() {
    return {
      colorFilterOpen: false,
      labelFilterOpen: false,
      selectedColorId: 0,
      selectedLabelIds: [],
    };
  },
  components: {
    FilterContainer,
    Chrome,
    AnimatedNumber,
  },
  computed: {
    nActiveItems() {
      return store.state.activeItems.length;
    },

    nAllItems() {
      return store.state.allItems.length;
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

    labels() {
      return store.state.labels;
    },
  },
  mounted() {
    this.$root.$on('triggerFiltering', () => {
      this.executeFiltering();
    });
  },
  methods: {
    openModal() {
      this.$root.$emit('openInfo');
    },

    toggleColorFilter() {
      if (this.labelFilterOpen) this.labelFilterOpen = false;

      this.colorFilterOpen = !this.colorFilterOpen;
    },

    toggleLabelFilter() {
      if (this.colorFilterOpen) this.colorFilterOpen = false;

      this.labelFilterOpen = !this.labelFilterOpen;
    },

    updateColorFilterStatic(value) {
      store.commit('updateStaticColor', {id: this.selectedColorId, color: value.hex});
      this.executeFiltering();
    },

    lockColor() {
      store.commit('addColorFilter', '');
      this.setselectedColorId(this.staticColors.length - 1);
    },

    removeColorById(id) {
      store.commit('removeColorFilterById', id);
      if (this.staticColors.length === 0) {
        store.commit('addColorFilter', '');
      }

      this.executeFiltering();
      this.setselectedColorId(Math.min(this.selectedColorId, this.staticColors.length - 1));
      /* if(this.selectedColorId == this.staticColors.length - 1 && this.selectedColorId != 0){
        this.selectedColorId--;
      } */
    },

    setselectedColorId(id) {
      this.selectedColorId = id;
    },

    setSelectedLabelId(id) {
      if (this.selectedLabelIds.includes(id)) {
        let index = this.selectedLabelIds.indexOf(id);
        if (index !== -1) this.selectedLabelIds.splice(index, 1);
      } else {
        this.selectedLabelIds.push(id);
      }

      this.executeFiltering();
    },

    executeFiltering() {
      let finalList = store.state.allItems;
      console.log('debug: executing filtering');
      store.commit('colorCountClear');

      this.staticColors.forEach(stateColor => {
        if (stateColor === '') return;

        finalList = finalList.filter(item => item.application.colors.some(color => this.isSimilarHSV(color.hex, stateColor)));
        store.commit('colorCountAdd', [store.state.allItems.filter(item => item.application.colors.some(color => this.isSimilarHSV(color.hex, stateColor))).length, stateColor]);
      });

      this.selectedLabelIds.forEach(label => {
        finalList = finalList.filter(item => item.application.labels.includes(label));
      });

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

      return (score >= 0.9);
    },

    isSimilarHSV(hex1, hex2) {
      const hsl1 = ColorConvert.hex.hsv(hex1);
      const hsl2 = ColorConvert.hex.hsv(hex2);

      const hDiff = Math.abs(hsl1[0] - hsl2[0]);
      const sDiff = Math.abs(hsl1[1] - hsl2[1]);
      const vDiff = Math.abs(hsl1[2] - hsl2[2]);

      // Colored images
      let hueTest = hsl1[1] !== 0 && hDiff < 10 && sDiff < 30 && vDiff < 30;

      // BW images
      let sTest = hsl1[1] === 0 && (sDiff < 10 && vDiff < 5);
      let vTest = hsl1[1] === 0 && hsl1[2] < 20 && vDiff < 5;

      return hueTest || sTest || vTest;
    },

  },
};
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

.label-btn {
    display: inline;
    cursor: pointer;
}

.color-btn {
    height: 32px;
    width: 48px;
    float: right;
    margin-top: 9px;
    cursor: pointer;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    background: #aaaaaa;
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
    /*width: calc(33% - 6px);*/
    width: 70px;
    height: 70px;
    margin-top: 5px;
    float: left;
    margin-left: 5px;
    margin-bottom: 5px;
    position: relative;
    border-radius: 4px;
}

.color.selectedColorId{
  box-sizing: border-box;
  border: 2px solid black;
  box-shadow:inset 0px 0px 0px 2px white;
}

.color.unsetColor{
  background: url('/transparent.png');
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

.colorNew {
    width: calc(70px);
    height: 70px;
    margin-top: 5px;
    float: left;
    margin-left: 5px;
    margin-bottom: 5px;
    position: relative;
    border-radius: 4px;
    border: 2px dashed gray;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    size: larger;
    cursor: pointer;
}

.colorNew span{
  vertical-align: middle;
}

.selectedLabel {
  background: cyan;
}

.svg-inline--fa.fa-palette.fa-w-16 {
    height: unset;
    width: 21px;
    position: absolute;
    left: 15px;
    top: 6px;
    color: white;
}

@media only screen and (min-width: 1000px) {
    .desktop-break {
        float: left;
        padding: 5px;
        width: calc(50% - 10px);
    }
}
</style>

<style>
/* hack for color picker styling */
.vc-chrome-hue-wrap {
    height: 27px !important;
}

.vc-chrome-hue-wrap .vc-hue-picker{
    width: 30px !important;
    height: 30px !important;
    border-radius: 15px !important;
}

.vc-chrome-active-color {
    left: -8px !important;
    top: -1px !important;
    height: 30px !important;
    width: 30px !important;
}
</style>
