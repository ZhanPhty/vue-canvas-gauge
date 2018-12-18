<template>
  <div>
    <img
      id="canvasImg"
      :src="
        image ||
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAA6CAYAAAA+9TA3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZEOTgxOUNDRkE5RDExRTg4ODQ3ODdBM0YyNzY5MEYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZEOTgxOUNERkE5RDExRTg4ODQ3ODdBM0YyNzY5MEYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkQ5MzlDNzVGQTlEMTFFODg4NDc4N0EzRjI3NjkwRjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkQ5MzlDNzZGQTlEMTFFODg4NDc4N0EzRjI3NjkwRjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ndT9oAAACdklEQVR42syZ3UsUURiHzyylWKYgZGuW2kUKicFSgUKhl+GFpIL3ImRCEOg/4EWs0LUEehNBBF1ERfciQnnhB5jdpAhWfqL5uXth6h5/L8yBcXV2Z3Zmzjs/eHDWxTkP79k56zmvIaUULpIP2kAzeABugAKwBebAN/ABTLm5qSAJB+SBPrAhneU7aHJ4b0cSteCHdJ8UGAKXvEo8BvvSWyZBNFeJFnAg/ck8uOZW4h5ISn8zYzc15wkUgwUZTN45lRiWwaYjfUwjbZ1oMJ91QwSXdVADdu3WiVGpJy/tKtEIRoWeJEEV2KQXEcsbz4W+XAbP1AtViatgBVzQKPLXrEZKVaJVswDlJnhknY5WwZN2NR0X8XPbnCfdoa//GpKox8W44EsFTUdM8OY+SdQxS8RIopJZ4jZJlDNLVNIH84/5zHJlkSR2cFHMKPEvDBIHYZDYDYPEUhgkfpHEEvNjOk3rxDHzOpGICP7sk8RRGCSSzBLJMExHeCTWmSX2SOIT9yNKi1UUF8tpGyGd6aSB18AIYyV21A7sCeO0XFcStPtaoH+/NQvMgrvqc0Cr5hBDFT5bN8SUEvAbFGqUoO3Gz/RDkldSXybtzqxKQUKTRHemg7O4BoFtUJhJogis6jyzsjtM7QpQIGFOe1aJCJgISCKe7RzTmodgzOczzQ1QTUv1qd9mOeUf9LkKPeeNY2Tp/FwBM+CWD1UYN6ubOvOOg6ZLPfjvsQLUMbjjpfND9HqUeOq1/aR4m6PAaz96YNZm3FeXAl/Mv/NNgigAHx0KvHcikIuEWsj6waHN4NS4ewEMP1uSmVqVb8CiOTD1uAZAmdt7nQgwAPOXiKnnKgFSAAAAAElFTkSuQmCC'
      "
      style="position: absolute; top: -9999px; z-index: -9999999"
    />
    <canvas id="canvasBox" :width="width" :height="height"></canvas>
  </div>
</template>
<script>
/**
 * 绘制图案样式
 * @param index 绘制的数量
 * @param color 颜色
 * @param opacity 透明度
 * @param deg 绘制弧长
 * @param type 类型风格
 *        arc: 圆圈
 *        link: 线条
 *        default: 默认芝麻信用风格
 */
function setColorTick() {
  this.draw = ctx => {
    let img = document.getElementById('canvasImg')

    ctx.save()
    for (let i = 0; i <= this.index; i++) {
      ctx.beginPath()
      ctx.strokeStyle = this.color
      ctx.fillStyle = this.color

      switch (this.type) {
        case 'arc':
          ctx.arc(this.width - 18, 6, 4, 0, Math.PI * 2, true)
          ctx.fill()
          break
        case 'link':
          ctx.lineWidth = 2
          ctx.moveTo(this.width - 8, 0)
          ctx.lineTo(this.width - 18, 0)
          break
        default:
          ctx.globalAlpha = this.opacity
          ctx.drawImage(img, this.width - 18, 0, 10, 6)
          break
      }
      ctx.stroke()
      ctx.rotate(this.deg)
    }
    ctx.restore()
  }
}

export default {
  name: 'canvasCredit',
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    // 总分
    total: {
      type: Number,
      default: 900
    },
    // 当前分
    current: {
      type: Number,
      default: 200
    },
    // 刻度数量
    score: {
      type: Number,
      default: 24
    },
    // 越大越快
    speed: {
      type: Number,
      default: 8
    },
    // 颜色，type为圆或者线生效
    color: {
      type: String,
      default: '#fff'
    },
    bg: {
      type: String,
      default: 'rgba(255, 255, 255, .3)'
    },
    // type为图片生效
    image: {
      type: String
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    /**
     * deg1() 计算弧长
     * 弧长计算公式是一个数学公式，为L=n（圆心角度数）× π（1）× r（半径）/180（角度制），L=α（弧度）× r(半径) （弧度制）。其中n是圆心角度数，r是半径，L是圆心角弧长。
     * 整个运动的角度是（360-120）度，转换成弧度就是12π/9，一共分成了50个分数段，那么每一个分数段就是12π/450 = 2π / 75
     * 如需旋转 5 度，可规定下面的公式：5*Math.PI/180。
     */
    degScore() {
      return (Math.PI * 13) / (9 * this.score)
    }
  },
  methods: {
    /**
     * [drawText 绘制文字]
     * @param ctx 画布对象
     * @param process 信用分
     * @return
     */
    drawText(ctx, process, level = '良好') {
      // 旋转，使文字角度正确
      ctx.save()
      ctx.rotate((220 * Math.PI) / 180)

      // 绘制'信用分'
      ctx.fillStyle = '#fff'
      ctx.font = '12px Microsoft yahei'
      ctx.textAlign = 'center'
      ctx.textBaseLine = 'top'
      ctx.fillText('信用分', 0, -30)

      // 绘制数值
      ctx.fillStyle = '#fff'
      ctx.font = '46px Microsoft yahei'
      ctx.textAlign = 'center'
      ctx.textBaseLine = 'top'
      ctx.fillText(process, 0, 20)

      // 绘制数值
      ctx.fillStyle = '#fff'
      ctx.font = '17px Microsoft yahei'
      ctx.textAlign = 'center'
      ctx.textBaseLine = 'top'
      ctx.fillText('信用' + level, 0, 46)

      ctx.restore()
    },

    /**
     * [drawRate 根据分数评级]
     * @param num 数值
     * @return
     */
    drawRate(num = 300) {
      let str = ''

      if (num < 300) {
        str = '极差'
      } else if (num < 500) {
        str = '中等'
      } else if (num < 650) {
        str = '良好'
      } else if (num < 800) {
        str = '优秀'
      } else {
        str = '极好'
      }
      return str
    },

    /**
     * [initGauge 初始化]
     * @return
     */
    initGauge() {
      const canvas = document.getElementById('canvasBox')
      const ctx = canvas.getContext('2d')
      const that = this
      const [cWidth, cHeight, score, deg] = [this.width, this.height, this.score, this.degScore]

      // 数字增加速度
      let dotSpeed = this.speed / 100
      // 内环动点旋转角度
      let textSpeed = Math.round((dotSpeed * 2) / deg)
      // 起始分数,数字递增用
      let credit = 0
      let colorTick = new setColorTick()
      let colorIndex = 0
      // 动点旋转速度 / 弧度
      let colorSpeed = dotSpeed / deg
      // 当前刻度值 = （当前分 / 总分）* 总刻度
      let currSpeed = Math.round((this.current / this.total) * this.score)

      ;(function drawFrame() {
        ctx.save()
        ctx.clearRect(0, 0, cWidth, cHeight)
        ctx.translate(cWidth / 2, cHeight / 2)

        // 因圆本身缺口为110°,为了让缺口朝正下方,所以旋转角度为140°
        ctx.rotate((140 * Math.PI) / 180)

        // 累计动效
        if (credit < score - textSpeed) {
          credit += textSpeed
        } else if (credit >= score - textSpeed && credit < score) {
          // 显示最终结果
          credit = that.current
        }
        that.drawText(ctx, credit, that.drawRate(that.current))

        ctx.save()
        // 绘制全部刻度
        colorTick.color = that.bg
        colorTick.deg = deg
        colorTick.index = score
        colorTick.opacity = 0.4
        colorTick.width = that.width / 2
        colorTick.type = that.type
        colorTick.draw(ctx)
        ctx.restore()

        // 绘制实际刻度
        if (colorIndex < currSpeed && colorIndex <= score) {
          colorIndex += colorSpeed
        }
        colorTick.color = that.color
        colorTick.deg = deg
        colorTick.index = colorIndex
        colorTick.opacity = 1
        colorTick.width = that.width / 2
        colorTick.type = that.type
        colorTick.draw(ctx)

        window.requestAnimationFrame(drawFrame)
        ctx.restore()
      })()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initGauge()
    })
  }
}
</script>
