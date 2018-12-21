<template>
  <div id="app">
    <div class="clock-board">
      <vue-canvas-gauge :current="current" :width="width"></vue-canvas-gauge>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCanvasGauge from './lib/index.js'

Vue.use(VueCanvasGauge)

export default {
  name: 'app',
  components: {
    VueCanvasGauge
  },
  data() {
    return {
      current: 664,
      width: 200
    }
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333;
}

.clock-board {
  width: 100%;
  height: 500px;
  text-align: center;
  margin: 0px auto;
  padding-top: 20px;
  background: linear-gradient(#0e83f5, #20bcf5);
}
</style>
