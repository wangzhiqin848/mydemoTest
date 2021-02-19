<template>
  <div>
    <details-two :list="headList"></details-two>
    <details-header :list="recommendList"></details-header>
  </div>
</template>

<script>
import DetailsTwo from './components/Two'
import DetailsHeader from './components/Header'
import axios from 'axios'

export default {
  name: 'Details',
  components: {
    DetailsHeader,
    DetailsTwo
  },
  data (){
    return{
      recommendList:[],
      headList:[]
    }
  },
  methods: {
    getDetailsInfo () {
      axios.get('/api/details.json').then(this.getDetailsInfoSucc)
    },
    getDetailsInfoSucc (res) {
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
        this.headList = data.headList
      }
    }
  },
  mounted () {
    this.getDetailsInfo()
  }
}
</script>

<style scoped>

</style>
