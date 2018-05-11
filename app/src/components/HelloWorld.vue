<template>
  <div class="hello">
    <h2 v-if="list">Featured Map</h2>
    <isotope v-if="list" v-bind:list="list" id="root_isotope" v-bind:options="option">
      <div v-for="item in list" v-bind:key="item.europeana_record">
        {{item.dc_title}}
        <br> {{item.europeana_record}}
      </div>
    </isotope>
  </div>
</template>

<script>
import isotope from 'vueisotope';

export default {
  name: 'HelloWorld',
  components: {
    isotope
  },
  props: {
    list: false
  },
  data() {
    return {
      option: {
        getSortData: {
          id: 'id'
        },
        sortBy: 'id'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
