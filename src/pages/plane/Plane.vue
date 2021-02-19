<template>
  <div>
    <plane-header></plane-header>
    <plane-search></plane-search>
    <plane-swiper :list="swiperList"></plane-swiper>
    <plane-answer></plane-answer>
    <plane-hot :hot="hotCities"></plane-hot>
    <plane-content :list="contentList"></plane-content>
  </div>
</template>

<script>
import axios from 'axios'
import PlaneHeader from './components/Header'
import PlaneSearch from './components/Search'
import PlaneSwiper from './components/Swiper'
import PlaneAnswer from './components/answer'
import PlaneContent from './components/content'
import PlaneHot from './components/hot'
export default {
  name: 'Plane',
  components: {
    PlaneHot,
    PlaneContent,
    PlaneAnswer,
    PlaneSwiper,
    PlaneSearch,
    PlaneHeader
  },
  data () {
    return {
      swiperList: [],
      contentList: [],
      hotCities: []
    }
  },
  methods: {
    getPlaneInfo () {
      axios.get('/api/plane.json').then(this.getPlaneInfoSucc)
    },
    getPlaneInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.contentList = data.contentList
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getPlaneInfo()
  }
}
</script>

<style scoped>

</style>
