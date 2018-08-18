<template>
  <div>
    <span v-for="label in labels" :key="label[0]" :style="{ fontSize: label[1] }">
      <span :class="{ selectedLabel: selectedLabelIds.includes(label[0]) }" class="label" @click="setSelectedLabelId(label[0])">{{ label[0] }}</span>
      <span>, </span>
    </span>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: 'LabelStack',
  props: {
    labels: {
      type: Array,
      default: () => [],
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
.label {
  cursor: pointer;
  transition: background-color .5s ease;
}

.selectedLabel {
  background-color: #008cff;
  padding: 0 2px;
  border-radius: 4px;
}
</style>
