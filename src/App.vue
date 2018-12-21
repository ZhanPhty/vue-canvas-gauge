<template>
  <div id="app">
    <div class="clock-board">
      <vue-canvas-gauge :current="current"></vue-canvas-gauge>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      current: 664
    }
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
