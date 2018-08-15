<template>
  <div>
    <div class="menu">
      <div class="menu-btn logo" v-on:click="resetFilters">
        <i class="fas fa-sync"></i>
      </div>
      <span class="left">{{ $t('nItemsPrefix') }} <AnimatedNumber v-bind:number="numberOfActiveItems"></AnimatedNumber>{{ $t('nItemsMidfix') }} {{ numberOfItems }} {{ $t('nItemsSuffix') }}</span>

      <div v-on:click="toggleLabelFilter" :class="{ active: labelFilterIsActive }" class="menu-btn">
        <i class="fas fa-tag"></i>
      </div>
      <div v-on:click="$root.$emit('toggleSidebar')" class="menu-btn">
        <i class="fas fa-save"></i>
      </div>
      <div v-on:click="toggleColorFilter" :class="{ active: anyColorFilterIsActive }" class="menu-btn">
        <i class="fas fa-palette"></i>
      </div>

    </div>
    <transition name="slide-north">
      <FilterContainer v-if="colorFilterOpen" v-hammer:swipe.up="toggleColorFilter">

        <close-btn v-on:click.native="toggleColorFilter" />

        <ColorMountain v-bind:colors="colorStats" />

      </FilterContainer>
    </transition>

    <transition name="slide-north">
      <FilterContainer v-if="labelFilterOpen">
        <CloseBtn v-on:click.native="toggleLabelFilter" />
        <LabelStack v-bind:labels="labelStats" />
      </FilterContainer>
    </transition>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import faTag from '@fortawesome/fontawesome-free-solid/faTag';
import faPalette from '@fortawesome/fontawesome-free-solid/faPalette';
import faSave from '@fortawesome/fontawesome-free-solid/faSave';
import faSync from '@fortawesome/fontawesome-free-solid/faSync';
import { mapGetters } from 'vuex';

import FilterContainer from './FilterContainer';
import CloseBtn from './CloseBtn';
import AnimatedNumber from './AnimatedNumber';
import ColorMountain from './ColorMountain';
import LabelStack from './LabelStack';
import { savedSate, store } from '../store';

fontawesome.library.add(faPalette);
fontawesome.library.add(faTag);
fontawesome.library.add(faSave);
fontawesome.library.add(faSync);

export default {
  name: 'FilterMenu',
  data() {
    return {
      colorFilterOpen: false,
      labelFilterOpen: false,
      colorStats: [],
      labelStats: [],
    };
  },
  components: {
    FilterContainer,
    AnimatedNumber,
    ColorMountain,
    LabelStack,
    CloseBtn,
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

    resetFilters() {
      store.commit('replaceSnappedColorIds', []);
      store.commit('replaceLabelIds', []);
      store.commit('resetVisibleLimit');
      this.executeFiltering();
    },

    toggleColorFilter() {
      if (this.labelFilterOpen) this.labelFilterOpen = false;

      this.colorFilterOpen = !this.colorFilterOpen;
    },

    toggleLabelFilter() {
      if (this.colorFilterOpen) this.colorFilterOpen = false;

      this.labelFilterOpen = !this.labelFilterOpen;
    },

    savePalette() {
      savedSate.commit('savePalette', this.staticColors.slice(0));
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
    margin-right: 0;
}

.menu-btn:hover {
    background: #f5f5f5;
}

.menu-btn.active {
    border-bottom: solid 6px #008cff;
}

@media only screen and (max-width: 410px) {
    .menu-btn {
        width: 30px;
    }
}
</style>
