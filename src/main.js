import Vue from 'vue'
import App from './App.vue'
import vueCanvasGauge from './lib/index.js'

Vue.use(vueCanvasGauge)
new Vue({
  el: '#app',
  render: h => h(App)
})
