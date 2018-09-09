<template>
  <div class="splash">
    <div class="container">
      <div class="scroller">
        <div class="inner">
          <span>Loading data...</span>
          <span>Calculatic statistics...</span>
          <span>Rendering application...</span>
          <span>Fetching media...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splash',
};
</script>

<style scoped>
.splash {
  background: #fafafa;
  font-weight: 200;
  font-family: helvetica neue, helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 99999;
}

.container {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 0;
  margin-top: -25px;
  text-align: center;
}

.scroller {
  height: 50px;
  line-height: 50px;
  float: left;
  width: 100%;
  overflow: hidden;
}

.scroller span {
  display: block;
  font-size: 200%;
  color: #000;
  height: 50px;
  overflow: hidden;
}

.scroller .inner {
  animation: scroll 12s 1 ease-out;
  animation-fill-mode: forwards;
}

@media (max-width: 750px) {
  .scroller span {
    font-size: 150%;
  }
}

@media (max-width: 400px) {
  .scroller span {
    font-size: 90%;
    font-weight: 500;
  }
}

@keyframes scroll {
  5% { margin-top: 0; }
  25% { margin-top: 0; }
  30% { margin-top: -50px; }
  50% { margin-top: -50px; }
  55% { margin-top: -100px; }
  75% { margin-top: -100px; }
  80% { margin-top: -150px; }
  100% { margin-top: -150px; }
}
</style>
