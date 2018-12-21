import vueCanvasGauge from './vue-canvas-gauge.vue'

const canvasGauge = {
  install(Vue, options) {
    Vue.component(vueCanvasGauge.name, vueCanvasGauge)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(canvasGauge)
}
export default canvasGauge
