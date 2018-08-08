<template>
  <div>
    <span v-for="label in scaledLabels" v-bind:key="label[0]" v-bind:style="{ fontSize: label[1] }" @click="setSelectedLabelId(label[0])" :class="{ selectedLabel: selectedLabelIds.includes(label[0]) }">{{ label[0] }}, </span>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: 'LabelStack',
  props: {
    'labels': {
      default: [],
    },
  },
  computed: {
    selectedLabelIds() {
      return store.state.selectedLabelIds;
    },

    scaledLabels() {
      let labels = this.labels.map(l => {
        l[1] = l[1] / 10;
        if (l[1] < 10) l[1] = 10;
        if (l[1] > 40) l[1] = 40;
        l[1] += 'px';
        return l;
      });
      return labels;
    },
  },
  methods: {
    setSelectedLabelId(id) {
      store.commit('setSelectedLabelId', id);
      this.$root.$emit('triggerFiltering');
    },
  },
};
</script>

<style scoped>
.selectedLabel {
  background: cyan;
}
</style>
