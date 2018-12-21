import VueCanvasGauge from './vue-canvas-gauge.vue'

VueCanvasGauge.install = function(Vue) {
  Vue.component('VueCanvasGauge', VueCanvasGauge)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCanvasGauge)
}

export default VueCanvasGauge
