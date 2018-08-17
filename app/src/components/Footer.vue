<template>
  <div>
    <div v-show="labelFilterIsActive || anyColorFilterIsActive" ref="flerp" class="flerp" @click="toggle">
      <span>{{ $t('selectedFilters') }}</span>
      <div v-show="isShown"><i class="fas fa-angle-down" /></div>
      <div v-show="!isShown"><i class="fas fa-angle-up" /></div>
    </div>
    <div v-show="isShown" ref="footer" class="footer">
      <div v-for="color in selectedSnappedColorIds" :key="color" :style="{ background: color, 'border-color': color }" class="color">
        <div class="close-btn" @click="removeColor(color)">
          <i class="fas fa-trash-alt" />
        </div>
      </div>

      <div v-for="label in selectedLabelIds" :key="label" class="label">
        <div class="close-btn" @click="removeLabel(label)">
          <i class="fas fa-trash-alt" />
        </div>
        <span>{{ label }}</span>
      </div>

      <div v-show="labelFilterIsActive || anyColorFilterIsActive" class="right-btn" @click="resetFilters">
        <i class="fas fa-bomb" />
      </div>
    </div>
  </div>
</template>

<script>
import fontawesome from '@fortawesome/fontawesome';
import faBomb from '@fortawesome/fontawesome-free-solid/faBomb';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import { mapGetters } from 'vuex';
import Vue from 'vue';

import { store } from '../store';

fontawesome.library.add(faTrashAlt);
fontawesome.library.add(faBomb);
fontawesome.library.add(faAngleDown);
fontawesome.library.add(faAngleUp);

export default {
  name: 'Footer',
  data() {
    return {
      isShown: true,
    };
  },
  computed: {
    ...mapGetters([
      'anyColorFilterIsActive',
      'labelFilterIsActive',
      'selectedSnappedColorIds',
      'selectedLabelIds',
    ]),
  },
  mounted() {
    this.$root.$on('triggerFiltering', () => {
      this.moveFlerp();
    });
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
      this.moveFlerp();
    },

    moveFlerp() {
      Vue.nextTick(() => {
        if (this.$refs.footer && this.isShown) {
          this.$refs.flerp.style.bottom = this.$refs.footer.clientHeight + 'px';
        } else {
          this.$refs.flerp.style.bottom = '0px';
        }
      });
    },

    resetFilters() {
      store.commit('replaceSnappedColorIds', []);
      store.commit('replaceLabelIds', []);
      store.commit('resetVisibleLimit');
      this.$root.$emit('triggerFiltering');
    },

    removeColor(color) {
      store.commit('setSelectedSnappedColorId', color); // toggle...
      this.$root.$emit('triggerFiltering');
    },

    removeLabel(label) {
      store.commit('setSelectedLabelId', label); // toggle...
      this.$root.$emit('triggerFiltering');
    },
  },
};
</script>

<style scoped>
.flerp {
  position: fixed;
  height: 30px;
  width: auto;
  padding: 0 24px;
  bottom: 0;
  right: 40px;
  background: #fff;
  cursor: pointer;
  line-height: 30px;
  border-radius: 5px 5px 0 0;
}

.flerp div {
  width: 20px;
  float: right;
}

.flerp svg {
  margin-top: 7px;
}

.footer {
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: #fff;
  box-sizing: border-box;
}

.label, .color {
  height: 40px;
  margin-left: 5px;
  margin-top: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
  position: relative;
  padding: 7px;
}

.label {
  float: left;
  border-radius: 5px;
  border: 1px solid;
  line-height: 25px;
  cursor: default;
  background: rgb(240, 240, 240);
  border-color: rgb(150, 150, 150);
}

.color {
  width: 40px;
  float: left;
  border-radius: 40px;
  border: solid 2px #dadada;
  box-shadow: inset 0 0 0 2px white;
}

.label span {
  padding: 0 20px 0 5px;
  font-weight: normal;
}

.close-btn {
  display: inline;
  cursor: pointer;
  height: 21px;
  line-height: 23px;
  position: absolute;
  right: 7px;
}

.color .close-btn {
  right: 11px;
}

.color .close-btn svg {
  color: #fff;
}

.right-btn {
  background: #dadada;
  line-height: 35px;
  font-size: 1.3em;
  border-radius: 10px;
  height: 36px;
  width: 36px;
  float: right;
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
  border: solid 2px #dadada;
}

.close-btn:hover svg {
  transform: scale(1.1);
}

.right-btn:hover {
  box-shadow: inset 0 0 0 2px white;
}

.right-btn svg:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  animation-iteration-count: infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>
