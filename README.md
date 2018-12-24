![截图](https://github.com/ZhanPhty/vue-canvas-gauge/blob/master/screenshot.png)

# vue-canvas-gauge

> vue信用分仪表盘, 仿支付宝芝麻信用分效果

## git

github: [https://github.com/ZhanPhty/vue-canvas-gauge](https://github.com/ZhanPhty/vue-canvas-gauge)

## 安装与基本用法

```
$ npm install vue-canvas-gauge --save
或
$ yarn add vue-canvas-gauge
```

引用方式
```
import vueCanvasGauge from 'vue-canvas-gauge'
```

使用示例
```
<template>
  <div id="app">
    <div style="background: #20bcf5;">
      <vue-canvas-gauge :current="current" :width="200" :height="200" />
    </div>
  </div>
</template>

<script>
import vueCanvasGauge from 'vue-canvas-gauge'

export default {
  components: {
    vueCanvasGauge
  },
  data () {
    return {
      current: 664
    }
  }
}
</script>
```
## Props
**width**

类型:`Number`

默认值: `300`

仪表盘的宽度
```
<vue-canvas-gauge :width="300" >
```
**height**

类型:`Number`

默认值: `300`

仪表盘的高度
```
<vue-canvas-gauge :height="300" >
```
**total**

类型:`Number`

默认值: `900`

信用分总分数，最大值
```
<vue-canvas-gauge :total="900" >
```
**current**

类型:`Number`

默认值: `200`

信用分当前分数，当前显示的分值，不能大于总分数
```
<vue-canvas-gauge :current="200" >
```
**score**

类型:`Number`

默认值: `24`

仪表盘的刻度，越大刻度越密
```
<vue-canvas-gauge :score="24" >
```
**speed**

类型:`Number`

默认值: `8`

仪表盘的动画速度，值越大越快
```
<vue-canvas-gauge :speed="8" >
```
**type**

类型:`String`

默认值: `img`

可能值: `['arc', 'link'] `

仪表盘的样式风格，arc -> 圆圈， link -> 线条
```
<vue-canvas-gauge :type="'img'" >
```
**color**

类型:`String`

默认值: `#fff`

可能值: `['#f40', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, .4)'] `

仪表盘当前刻度颜色，type为`arc`或者`link`生效
```
<vue-canvas-gauge :color="'#fff'" >
```
**bg**

类型:`String`

默认值: `rgba(255, 255, 255, .3)`

仪表盘总刻度背景颜色，type为`arc`或者`link`生效
```
<vue-canvas-gauge :bg="'rgba(255, 255, 255, .3)'" >
```
**image**

类型:`String`

仪表盘刻度样式，type为`img`生效
```
<vue-canvas-gauge :image="'./img.png'" >
```

## 联系

QQ：461632311

网址：[http//www.uizph.com](http//www.uizph.com)