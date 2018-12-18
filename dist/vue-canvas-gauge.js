!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-canvas-gauge",[],t):"object"==typeof exports?exports["vue-canvas-gauge"]=t():e["vue-canvas-gauge"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";function i(){var e=this;this.draw=function(t){var n=document.getElementById("canvasImg");t.save();for(var i=0;i<=e.index;i++){switch(t.beginPath(),t.strokeStyle=e.color,t.fillStyle=e.color,e.type){case"arc":t.arc(e.width-18,6,4,0,2*Math.PI,!0),t.fill();break;case"link":t.lineWidth=2,t.moveTo(e.width-8,0),t.lineTo(e.width-18,0);break;default:t.globalAlpha=e.opacity,t.drawImage(n,e.width-18,0,10,6)}t.stroke(),t.rotate(e.deg)}t.restore()}}t.a={name:"canvasCredit",props:{width:{type:Number,default:300},height:{type:Number,default:300},total:{type:Number,default:900},current:{type:Number,default:200},score:{type:Number,default:24},speed:{type:Number,default:8},color:{type:String,default:"#fff"},bg:{type:String,default:"rgba(255, 255, 255, .3)"},image:{type:String},type:{type:String,default:""}},data:function(){return{}},computed:{degScore:function(){return 13*Math.PI/(9*this.score)}},methods:{drawText:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"良好";e.save(),e.rotate(220*Math.PI/180),e.fillStyle="#fff",e.font="12px Microsoft yahei",e.textAlign="center",e.textBaseLine="top",e.fillText("信用分",0,-30),e.fillStyle="#fff",e.font="46px Microsoft yahei",e.textAlign="center",e.textBaseLine="top",e.fillText(t,0,20),e.fillStyle="#fff",e.font="17px Microsoft yahei",e.textAlign="center",e.textBaseLine="top",e.fillText("信用"+n,0,46),e.restore()},drawRate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;return e<300?"极差":e<500?"中等":e<650?"良好":e<800?"优秀":"极好"},initGauge:function(){var e=document.getElementById("canvasBox"),t=e.getContext("2d"),n=this,o=[this.width,this.height,this.score,this.degScore],r=o[0],a=o[1],c=o[2],d=o[3],s=this.speed/100,l=Math.round(2*s/d),u=0,f=new i,p=0,h=s/d,g=Math.round(this.current/this.total*this.score);!function e(){t.save(),t.clearRect(0,0,r,a),t.translate(r/2,a/2),t.rotate(140*Math.PI/180),u<c-l?u+=l:u>=c-l&&u<c&&(u=n.current),n.drawText(t,u,n.drawRate(n.current)),t.save(),f.color=n.bg,f.deg=d,f.index=c,f.opacity=.4,f.width=n.width/2,f.type=n.type,f.draw(t),t.restore(),p<g&&p<=c&&(p+=h),f.color=n.color,f.deg=d,f.index=p,f.opacity=1,f.width=n.width/2,f.type=n.type,f.draw(t),window.requestAnimationFrame(e),t.restore()}()}},mounted:function(){var e=this;this.$nextTick(function(){e.initGauge()})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o={install:function(e){e.component(i.a.name,i.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),t.default=o},function(e,t,n){"use strict";var i=n(0),o=n(4),r=n(3),a=r(i.a,o.a,!1,null,null,null);t.a=a.exports},function(e,t){e.exports=function(e,t,n,i,o,r){var a,c=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(a=e,c=e.default);var s="function"==typeof c?c.options:c;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),o&&(s._scopeId=o);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},s._ssrRegister=l):i&&(l=i),l){var u=s.functional,f=u?s.render:s.beforeCreate;u?(s._injectStyles=l,s.render=function(e,t){return l.call(t),f(e,t)}):s.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:c,options:s}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticStyle:{position:"absolute",top:"-9999px","z-index":"-9999999"},attrs:{id:"canvasImg",src:e.image||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAA6CAYAAAA+9TA3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZEOTgxOUNDRkE5RDExRTg4ODQ3ODdBM0YyNzY5MEYwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZEOTgxOUNERkE5RDExRTg4ODQ3ODdBM0YyNzY5MEYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkQ5MzlDNzVGQTlEMTFFODg4NDc4N0EzRjI3NjkwRjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkQ5MzlDNzZGQTlEMTFFODg4NDc4N0EzRjI3NjkwRjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ndT9oAAACdklEQVR42syZ3UsUURiHzyylWKYgZGuW2kUKicFSgUKhl+GFpIL3ImRCEOg/4EWs0LUEehNBBF1ERfciQnnhB5jdpAhWfqL5uXth6h5/L8yBcXV2Z3Zmzjs/eHDWxTkP79k56zmvIaUULpIP2kAzeABugAKwBebAN/ABTLm5qSAJB+SBPrAhneU7aHJ4b0cSteCHdJ8UGAKXvEo8BvvSWyZBNFeJFnAg/ck8uOZW4h5ISn8zYzc15wkUgwUZTN45lRiWwaYjfUwjbZ1oMJ91QwSXdVADdu3WiVGpJy/tKtEIRoWeJEEV2KQXEcsbz4W+XAbP1AtViatgBVzQKPLXrEZKVaJVswDlJnhknY5WwZN2NR0X8XPbnCfdoa//GpKox8W44EsFTUdM8OY+SdQxS8RIopJZ4jZJlDNLVNIH84/5zHJlkSR2cFHMKPEvDBIHYZDYDYPEUhgkfpHEEvNjOk3rxDHzOpGICP7sk8RRGCSSzBLJMExHeCTWmSX2SOIT9yNKi1UUF8tpGyGd6aSB18AIYyV21A7sCeO0XFcStPtaoH+/NQvMgrvqc0Cr5hBDFT5bN8SUEvAbFGqUoO3Gz/RDkldSXybtzqxKQUKTRHemg7O4BoFtUJhJogis6jyzsjtM7QpQIGFOe1aJCJgISCKe7RzTmodgzOczzQ1QTUv1qd9mOeUf9LkKPeeNY2Tp/FwBM+CWD1UYN6ubOvOOg6ZLPfjvsQLUMbjjpfND9HqUeOq1/aR4m6PAaz96YNZm3FeXAl/Mv/NNgigAHx0KvHcikIuEWsj6waHN4NS4ewEMP1uSmVqVb8CiOTD1uAZAmdt7nQgwAPOXiKnnKgFSAAAAAElFTkSuQmCC"}}),e._v(" "),n("canvas",{attrs:{id:"canvasBox",width:e.width,height:e.height}})])},o=[],r={render:i,staticRenderFns:o};t.a=r}])});
//# sourceMappingURL=vue-canvas-gauge.js.map