<template>
  <div class="root">
      <div v-on:click="toggle()" v-bind:class="{ open: isShown }" class="minified">
          <span>{{ nActiveitems }}</span>
          <i class="fas fa-times"></i>
          <i class="fas fa-sliders-h"></i>
      </div>
      <div v-show="isShown" class="expanded">
          <div class="toogle-garmet-btns">
            <div v-on:click="toggleGarment($event, 'strumpor')" v-bind:style="{ width: strumporBtnWidth + '%' }" role="button" aria-pressed="false">Strumpor</div>
            <div v-on:click="toggleGarment($event, 'byxor')" v-bind:style="{ width: byxorBtnWidth + '%' }" role="button" aria-pressed="false">Byxor</div>
            <div v-on:click="toggleGarment($event, 'tröjor')" v-bind:style="{ width: trojorBtnWidth + '%' }" role="button" aria-pressed="false">Tröjor</div>
          </div>

          <div id="color-wrapper" v-bind:style="{background: '#' + activeColor }">
            <i class="fas fa-eye-dropper"></i>
            <input v-on:change="updateColorFilter($event)" type="color"/>
          </div>
          <button id="color-reset" v-if="colorFilterStatus" v-on:click="resetColorFilter()">Reset color</button>
      </div>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import faSlidersH from '@fortawesome/fontawesome-free-solid/faSlidersH';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import faEyeDropper from '@fortawesome/fontawesome-free-solid/faEyeDropper';

import { store } from '../main.js';

fontawesome.library.add(faSlidersH);
fontawesome.library.add(faTimes);
fontawesome.library.add(faEyeDropper);

export default {
  name: 'FilterMenu',
  data() {
    return {
      isShown: false,
      strumporBtnWidth: 40,
      byxorBtnWidth: 40,
      trojorBtnWidth: 40,
    }
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
    toggle() {
      // calculate btn widths
      const whole = store.state.allItems.length;
      const strumporCount = store.state.allItems.filter(item => item.application.garment.includes('strumpor')).length;
      const byxorCount = store.state.allItems.filter(item => item.application.garment.includes('byxor')).length;
      const trojorCount = store.state.allItems.filter(item => item.application.garment.includes('tröjor')).length;
      const strumporWidth = strumporCount / whole * 100;
      const byxorWidth = byxorCount / whole * 100;
      const trojorWidth = trojorCount / whole * 100;

      this.strumporBtnWidth = strumporWidth;
      this.byxorBtnWidth = byxorWidth;
      this.trojorBtnWidth = trojorWidth;

      this.isShown = !this.isShown;
    },

    toggleGarment(e, garment) {
      console.log(garment)
      if (e.target.getAttribute('aria-pressed') === 'false') {
        console.log(true)
        e.target.setAttribute('aria-pressed', 'true');
      } else {
        console.log(false)
        e.target.setAttribute('aria-pressed', 'false');
      }
      store.commit('toggleGarment', garment);
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
.minified {
    width: 100vw;
    background: #fff;
    height: 50px;
    z-index: 2;
    text-align: right;
    padding-right: 35px;
    box-sizing: border-box;
    line-height: 50px;
    cursor: pointer;
    position: fixed;
    top: 0;
}

.minified.open {
    bottom: 200px;
}

.minified .fa-times,
.minified.open .fa-sliders-h {
  display: none;
}

.minified .fa-sliders-h,
.minified.open .fa-times {
  display: inline-block;
}

.minified span {
  float: left;
  padding-left: 10px;
}

.expanded {
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: #fff;
    height: 200px;
    z-index: 2;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
}

.toogle-garmet-btns {
  margin-bottom: 7px;
}

.toogle-garmet-btns div {
  display: inline-block;
  background-color: #daefff;
  border: 2px solid #a8a8a8;
  box-sizing: border-box;
  cursor: pointer;
}

.toogle-garmet-btns div[aria-pressed=true] {
  display: inline-block;
  background-color: #62bbff;
}

#color-wrapper {
  position: relative;
  width: 50%;
  border: 2px solid #a8a8a8;
  box-sizing: border-box;
  float: left;
}

#color-wrapper svg {
  position: absolute;
  left: calc(50% - 8px);
  top: 5px;
}

input[type=color] {
  opacity: 0;
  cursor: pointer;
  width: 100%
}

#color-reset {
    position: relative;
    border: 2px solid #a8a8a8;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 50%;
    cursor: pointer;
    float: left;
    height: 29px;
}
</style>
