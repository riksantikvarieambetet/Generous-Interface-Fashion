<template>
  <div>
    <span v-for="label in labels" v-bind:key="label[0]" v-bind:style="{ fontSize: label[1] }" @click="setSelectedLabelId(label[0])" :class="{ selectedLabel: selectedLabelIds.includes(label[0]) }">{{ label[0] }}, </span>
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
