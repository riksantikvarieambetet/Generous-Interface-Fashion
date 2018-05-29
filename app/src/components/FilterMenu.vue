<template>
  <div class="root">
      <div v-on:click="toggle()" v-bind:class="{open: isShown}" class="minified">
          <span v-if="isShown">close filter</span>
          <span v-if="!isShown">open filter</span>
      </div>
      <div v-show="isShown" class="expanded">
          <div class="toogle-garmet-btns">
            <div v-on:click="toggleGarment($event, 'strumpor')" v-bind:style="{ width: strumporBtnWidth + '%' }" role="button" aria-pressed="false">Strumpor</div>
            <div v-on:click="toggleGarment($event, 'byxor')" v-bind:style="{ width: byxorBtnWidth + '%' }" role="button" aria-pressed="false">Byxor</div>
          </div>
          
          <input v-on:change="updateColorFilter($event)" type="color" />
          <button v-if="colorFilterStatus" v-on:click="resetColorFilter()">Reset color</button>
      </div>
  </div>
</template>

<script>
import { store } from "../main.js";

export default {
  name: 'FilterMenu',
  data() {
    return {
      isShown: false,
      strumporBtnWidth: 40,
      byxorBtnWidth: 40,
    }
  },
  computed: {
   colorFilterStatus() {
      return store.state.colorFilterActive;
    }
  },
  methods: {
    toggle() {
      // calculate btn widths
      const whole = store.state.allItems.length;
      const strumporCount = store.state.allItems.filter(item => item.application.garment.includes('strumpor')).length;
      const byxorCount = store.state.allItems.filter(item => item.application.garment.includes('byxor')).length;
      const strumporWidth = strumporCount / whole * 100;
      const byxorWidth = byxorCount / whole * 100;

      this.strumporBtnWidth = strumporWidth;
      this.byxorBtnWidth = byxorWidth;

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
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: #fff;
    height: 50px;
    z-index: 2;
}

.minified.open {
    bottom: 200px;
}

.expanded {
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: #fff;
    height: 200px;
    z-index: 2;
}

.toogle-garmet-btns div {
  display: inline-block;
  background-color: red;
  border: 2px solid blue;
  box-sizing: border-box;
}

.toogle-garmet-btns div[aria-pressed=true] {
  display: inline-block;
  background-color: green;
}
</style>
