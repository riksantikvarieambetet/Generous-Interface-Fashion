<template>
  <span class="number" :class="{isAnimating: number != displayNumber}">{{ displayNumber }}</span>
</template>

<script>
export default {
  name: 'AnimatedNumber',
  props: {
    number: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      displayNumber: 0,
      interval: false,
    };
  },
  ready: function() {
    this.displayNumber = this.number ? this.number : 0;
  },
  watch: {
    number: function() {
      clearInterval(this.interval);
      if (this.number === this.displayNumber) {
        return;
      }

      this.interval = window.setInterval(() => {
        if (this.displayNumber !== this.number) {
          let change = (this.number - this.displayNumber) / 50;
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.displayNumber = this.displayNumber + change;
        }
      }, 20);
    },
  },
};
</script>

<style scoped>

.number{
  border-radius: 5px;
  padding: 3px;
  transition: background 2s;
  background: white;
  color: black;
}

.isAnimating{
  background: rgb(24,143,252);
  transition: background 0.5s;
  color: white;
}

</style>
