<template>
  <div id="app">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#container {
  margin: 0px auto;
  overflow: hidden;
}

#clockBoard {
  width: 100%;
  height: 600px;
  text-align: center;
  margin: 0px auto;
  padding-top: 20px;
  background: linear-gradient(#0e83f5, #20bcf5);
}

#pointer {
  position: relative;
}


</style>
