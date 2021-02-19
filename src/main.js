// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'vant/lib/index.css'
import vant from 'vant'
// import fastClick from 'fastclick'

Vue.config.productionTip = false
// fastClick.attached(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(vant)

  // 高德地图
  //全局引入vue-amap
  import VueAMap from 'vue-amap'
  Vue.use(VueAMap)
  VueAMap.initAMapApiLoader({
    key: 'acfad8a0c4869a94b99fd6d2a101c2c5',
    //插件
    plugin: ['AMap.Scale', 'AMap.OverView',
      'AMap.ToolBar', 'AMap.MapType',
      'AMap.PlaceSearch', 'AMap.Geolocation',
      'AMap.Geocoder'],
    //默认高德sdk版本为1.4.4
    v: '1.4.4',
    uiVersion: '1.0'
  })


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
