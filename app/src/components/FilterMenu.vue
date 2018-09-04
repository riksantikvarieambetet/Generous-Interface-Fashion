<template>
  <div>
    <div class="menu">
      <img src="http://via.placeholder.com/90x90?text=logo" alt="logo and information" class="logo" role="button" @click="openModal">

      <span class="left"><span class="no-mobile">{{ $t('nItemsPrefix') }} </span><animated-number :number="numberOfActiveItems" /> {{ $t('nItemsMidfix') }} {{ numberOfItems }} {{ $t('nItemsSuffix') }}</span>

      <div :class="{ active: labelFilterIsActive }" class="menu-btn" role="button" aria-label="Toggle label filter" :aria-pressed="labelFilterOpen" @click="toggleLabelFilter">
        <i aria-hidden="true" class="fas fa-tag" />
      </div>
      <div :class="{ active: anyColorFilterIsActive }" class="menu-btn" role="button" aria-label="Toggle color filter" :aria-pressed="colorFilterOpen" @click="toggleColorFilter">
        <i aria-hidden="true" class="fas fa-palette" />
      </div>

    </div>
    <transition name="slide-north">
      <filter-container v-if="colorFilterOpen">
        <color-mountain :colors="colorStats" />
        <close-btn @click.native="toggleColorFilter" />
      </filter-container>
    </transition>

    <transition name="slide-north">
      <filter-container v-if="labelFilterOpen">
        <label-stack :labels="labelStats" />
        <close-btn @click.native="toggleLabelFilter" />
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
      const t0 = performance.now();
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
      const t1 = performance.now();
      console.log('Took ' + (t1 - t0) + ' milliseconds.');

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
  width: 46px;
  height: 46px;
  text-align: center;
  margin: 2px 6px 2px 2px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #dadada;
  border: solid 2px #dadada;
  line-height: 46px;
}

.logo {
  display: block;
  float: left;
  max-height: 100%;
  cursor: pointer;
}

.menu div:last-child {
  margin-right: 10px;
}

.menu-btn:hover {
  background: #fff;
}

.menu-btn.active {
  box-shadow: inset 0 0 0 2px white;
}

@media only screen and (max-width: 410px) {
  .no-mobile {
    display: none;
  }
}
</style>
