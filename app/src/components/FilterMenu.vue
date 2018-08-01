<template>
  <div>
    <div class="menu">
      <img src="http://via.placeholder.com/90x90?text=logo" alt="logo and information" class="logo" v-on:click="openModal" />
      <span class="left">{{ $t('nItemsPrefix') }} <AnimatedNumber v-bind:number="nActiveItems"></AnimatedNumber>{{ $t('nItemsMidfix') }} {{ nAllItems }} {{ $t('nItemsSuffix') }}</span>
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
  </div>
</template>

<script>
import FilterContainer from './FilterContainer';
import AnimatedNumber from './AnimatedNumber';
import { Chrome } from 'vue-color';
import fontawesome from '@fortawesome/fontawesome';
import faPalette from '@fortawesome/fontawesome-free-solid/faPalette';
import { store } from '../main.js';
import ColorConvert from 'color-convert';

fontawesome.library.add(faPalette);

export default {
  name: 'FilterMenu',
  data() {
    return {
      colorFilterOpen: false,
      selectedColorId: 0,
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
  },
  mounted() {
    this.$root.$on('triggerFiltering', () => {
      this.executeFilteringAndSorting();
    });
  },
  methods: {
    openModal() {
      this.$root.$emit('openInfo');
    },

    toggleColorFilter() {
      this.colorFilterOpen = !this.colorFilterOpen;
    },

    updateColorFilterStatic(value) {
      store.commit('updateStaticColor', {id: this.selectedColorId, color: value.hex});
      this.executeFilteringAndSorting();
    },

    lockColor() {
      store.commit('addColorFilter', '');
      this.setselectedColorId(this.staticColors.length - 1);
    },

    removeColorById(id) {
      store.commit('removeColorFilterById', id);
      this.executeFilteringAndSorting();
      this.setselectedColorId(Math.min(this.selectedColorId,this.staticColors.length - 1));
    },

    setselectedColorId(id) {
      this.selectedColorId = id;
    },

    executeFiltering() {
      let finalList = store.state.allItems;
      console.log('debug: executing filtering');
      store.commit('colorCountClear');

      if (this.staticColors.length > 0) {
        this.staticColors.forEach(stateColor => {
          finalList = finalList.filter(item => item.application.colors.some(color => this.isSimilarHSV(color.hex, stateColor)));
          store.commit('colorCountAdd', [store.state.allItems.filter(item => item.application.colors.some(color => this.isSimilarHSV(color.hex, stateColor))).length, stateColor]);
        });
      }

      store.commit('addActiveItems', finalList);

      // handle reseting of visibleLimit on filter change
      console.log('debug: reseting visibleLimit');
      store.commit('resetVisibleLimit');
      window.scrollTo(0, 0);
    },

    executeFilteringAndSorting() {
      let finalList = store.state.allItems;

      store.commit('colorCountClear');

      finalList.forEach(item => {

        let score = 0.0;

        if (this.staticColors.length > 0) {
          this.staticColors.forEach(stateColor => {

            const hsvState = ColorConvert.hex.hsv(stateColor);

            let scoreStateColor = this.calcScoreItemColor(item,hsvState);
            if(scoreStateColor > 0){
              score += scoreStateColor;
            }

          });
        };

        score /= this.staticColors.length;
        item.application.score = score;

      });


      finalList = finalList.filter(item => item.application.score > 0.5);

      finalList = finalList.sort((item1, item2) => {return item2.application.score - item1.application.score });

      store.commit('addActiveItems', finalList);

      // handle reseting of visibleLimit on filter change

      store.commit('resetVisibleLimit');
      window.scrollTo(0, 0);
    },

    calcScoreItemColor(item,hsvState){

      let score = 0;
      let colorScoreAccum = 0;
      let hasSimilar = false;

      //Iterate over all identified item colors
      item.application.colors.forEach(itemColor => {

        //Convert color to HSV
        const hsvItem = ColorConvert.hex.hsv(itemColor.hex);

        //If state color matches any of the image's color, add 1.0 to score
        if(!hasSimilar){
          if(this.isSimilarHSVScore(hsvItem,hsvState)){
            hasSimilar = true;
            score += 1.0;
          }
        }

        //Add score based on hue and distance in saturation and value
        score += this.calcScoreHSV(hsvItem, hsvState) * itemColor.score;

        //Accumlate Google's color score for normalizing
        colorScoreAccum += itemColor.score;

      });

      //Normalize Google's color score
      score /= colorScoreAccum;

      return score;
    },

    calcScoreHSV(hsvItem, hsvState) {

      const hDiff = Math.abs(hsvItem[0] - hsvState[0]); //Does not wrap around 360 degrees, should be fixed!
      const sDiff = Math.abs(hsvItem[1] - hsvState[1]);
      const vDiff = Math.abs(hsvItem[2] - hsvState[2]);

      let score = 0;

      // Colored images
      if(hsvItem[1] !== 0){
        //If close enough in hue, base score on square distance in saturation and value
        score += hDiff < 30 ? 1 - (Math.pow(sDiff/100.0,2) + Math.pow(vDiff/100.0,2)) : 0.0;
      }
      // BW images
      else{
        score += hsvState[1] < 20 && hsvState[2] < 20 ? 1 - (Math.pow(sDiff/100.0,2) + Math.pow(vDiff/100.0,2)) : 0.0;
      }

      return score;
    },

    isSimilarHSVScore(hsvItem, hsvState) {
      const hDiff = Math.abs(hsvItem[0] - hsvState[0]); //Does not wrap around 360 degrees, should be fixed!
      const sDiff = Math.abs(hsvItem[1] - hsvState[1]);
      const vDiff = Math.abs(hsvItem[2] - hsvState[2]);

      let hueTest = false;
      let sTest = false;
      let vTest = false;

      // Colored images
      if(hsvItem[1] !== 0){
        //True if close enough in hue, saturation and value
        hueTest = hDiff < 30 && sDiff < 40 && vDiff < 40;
      }
      // BW images
      else {
        sTest = sDiff < 10 && vDiff < 5;
        vTest = hsvItem[2] < 20 && vDiff < 5;
      }

      return hueTest || sTest || vTest;
    }

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
