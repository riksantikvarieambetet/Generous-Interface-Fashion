<template>
  <div class="label">
    <span class="btn" :class="{active: isActive}" @click="setSelectedLabelId()">{{label}}</span>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: 'LabelBtn',
  props: {
    label: null
  },
  computed: {
    isActive(){
      return store.state.selectedLabelIds.includes(this.label)
    }
  },
  methods: {
    setSelectedLabelId() {
      store.commit('setSelectedLabelId', this.label);
      this.$root.$emit('triggerFiltering');
    },
  },
};
</script>

<style scoped>

.label{
  display: inline-flex;
}

.btn{
  font-size: small;

  margin: 1px;
  padding: 2px;
  border-radius: 4px;
  border: 1px solid lightgray;
  cursor: pointer;
  background: rgb(255,255,255);
}

.btn:hover{
  border-color: gray;
  color: black;
}

.btn.active{
  /*background: lightblue;*/
  /*border: 1px solid black;*/
  background: rgb(240,240,240);
  border-color: rgb(150,150,150);

}

</style>
