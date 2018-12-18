import vueCanvasGauge from './vue-canvas-gauge.vue'

const comment = {
  install: function(Vue) {
    Vue.component(vueCanvasGauge.name, vueCanvasGauge)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}
export default comment
