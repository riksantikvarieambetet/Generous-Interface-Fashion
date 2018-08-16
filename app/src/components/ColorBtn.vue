<template>
  <div class="color">

    <div class="btn" :class="{active: isActive}" :style="{ background: color, 'border-color': color }" @click="filterByColor(color)"></div>

  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: 'ColorBtn',
  props: {
    color: null
  },
  computed: {
    isActive(){
      return store.state.selectedSnappedColorIds.includes(this.color)
    }
  },
  methods: {
    filterByColor() {
      store.commit('setSelectedSnappedColorId', this.color);
      this.$root.$emit('triggerFiltering');
      console.log(store.state.selectedSnappedColorIds)
    },
  },
};
</script>

<style scoped>

.color{
  display: inline;
  width: 50px;
  height: 50px;
  margin: 1px;
}

.btn{
  font-size: small;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  border: 3px solid black;
  margin: 1px;
  cursor: pointer;
}

.btn:hover{
  color: black;
}

.btn.active{
  /*background: lightblue;*/
  /*border: 1px solid black;*/
  background: rgb(240,240,240);
  color: rgb(100,100,100);

  -webkit-box-shadow:inset 0px 0px 0px 3px white;
  -moz-box-shadow:inset 0px 0px 0px 3px white;
  box-shadow:inset 0px 0px 0px 3px white;
}

</style>
