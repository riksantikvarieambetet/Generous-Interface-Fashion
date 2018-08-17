<template>
  <div>
    <div class="menu">
      <img src="http://via.placeholder.com/90x90?text=logo" alt="logo and information" class="logo" @click="openModal">

      <span class="left">{{ $t('nItemsPrefix') }} <animated-number :number="numberOfActiveItems" />{{ $t('nItemsMidfix') }} {{ numberOfItems }} {{ $t('nItemsSuffix') }}</span>

      <div :class="{ active: labelFilterIsActive }" class="menu-btn" @click="toggleLabelFilter">
        <i class="fas fa-tag" />
      </div>
      <div :class="{ active: anyColorFilterIsActive }" class="menu-btn" @click="toggleColorFilter">
        <i class="fas fa-palette" />
      </div>

    </div>
    <transition name="slide-north">
      <filter-container v-if="colorFilterOpen" v-hammer:swipe.up="toggleColorFilter">

        <close-btn @click.native="toggleColorFilter" />

        <color-mountain :colors="colorStats" />

      </filter-container>
    </transition>

    <transition name="slide-north">
      <filter-container v-if="labelFilterOpen">
        <close-btn @click.native="toggleLabelFilter" />
        <label-stack :labels="labelStats" />
      </filter-container>
    </transition>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import faTag from '@fortawesome/fontawesome-free-solid/faTag';
import faPalette from '@fortawesome/fontawesome-free-solid/faPalette';
import faSave from '@fortawesome/fontawesome-free-solid/faSave';
import { mapGetters } from 'vuex';

import FilterContainer from './FilterContainer';
import CloseBtn from './CloseBtn';
import AnimatedNumber from './AnimatedNumber';
import ColorMountain from './ColorMountain';
import LabelStack from './LabelStack';
import { store } from '../store';

fontawesome.library.add(faPalette);
fontawesome.library.add(faTag);
fontawesome.library.add(faSave);

export default {
  name: 'FilterMenu',
  components: {
    FilterContainer,
    AnimatedNumber,
    ColorMountain,
    LabelStack,
    CloseBtn,
  },
  data() {
    return {
      colorFilterOpen: false,
      labelFilterOpen: false,
      colorStats: [],
      labelStats: [],
    };
  },
  computed: {
    ...mapGetters([
      'anyColorFilterIsActive',
      'labelFilterIsActive',
      'numberOfActiveItems',
      'numberOfItems',
      'selectedSnappedColorIds',
      'selectedLabelIds',
    ]),
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

    executeFiltering() {
      let finalList = store.state.allItems;
      console.log('debug: executing filtering');

      this.selectedLabelIds.forEach(label => {
        finalList = finalList.filter(item => item.application.labels.includes(label));
      });

      this.selectedSnappedColorIds.forEach(color => {
        finalList = finalList.filter(item => item.application.css_colors.includes(color));
      });

      let colorStats = [];
      let remainingColors = [];
      let labelStats = [];
      let remainingLabels = [];
      finalList.forEach(item => {
        remainingColors = remainingColors.concat(item.application.css_colors);
        remainingLabels = remainingLabels.concat(item.application.labels);
      });

      remainingColors.forEach(c => {
        colorStats.push([c, remainingColors.filter(x => x === c).length]);
      });
      this.colorStats = Array.from(new Set(colorStats.map(JSON.stringify)), JSON.parse).filter(y => y[1] > 2);

      remainingLabels.forEach(l => {
        labelStats.push([l, remainingLabels.filter(x => x === l).length]);
      });
      labelStats = Array.from(new Set(labelStats.map(JSON.stringify)), JSON.parse).filter(y => y[1] > 2);

      let max = labelStats.reduce((tot, lab) => Math.max(tot, lab[1]), 0);
      this.labelStats = labelStats.map(l => {
        let norm = ((l[1] - 2) / (max - 2));
        l[1] = norm * 30 + 10;
        l[1] += 'px';
        return l;
      });

      store.commit('addActiveItems', finalList);

      // handle reseting of visibleLimit on filter change
      console.log('debug: reseting visibleLimit');
      store.commit('resetVisibleLimit');
      window.scrollTo(0, 0);
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
  box-sizing: border-box;
  line-height: 50px;
  position: fixed;
  top: 0;
}

.left {
  float: left;
  padding-left: 7px;
}

.menu-btn {
  display: inline-block;
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  margin-right: 5px;
  box-sizing: border-box;
}

.logo {
  display: block;
  float: left;
  max-height: 100%;
  cursor: pointer;
}

.menu-btn:hover {
  background: #f5f5f5;
}

.menu-btn.active {
  border-bottom: solid 6px #008cff;
}
</style>
