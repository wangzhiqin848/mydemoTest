<template>
  <div>
    <week-two :list="headList"></week-two>
    <week-header :list="recommendList"></week-header>
  </div>
</template>

<script>
import WeekHeader from './components/Header'
import WeekTwo from './components/Two'
import axios from 'axios'

export default {
  name: 'Misty',
  components: {
    WeekHeader,
    WeekTwo
  },
  data (){
    return{
      recommendList:[],
      headList:[]
    }
  },
  methods: {
    getMistyInfo () {
      axios.get('/api/misty.json').then(this.getMistyInfoSucc)
    },
    getMistyInfoSucc (res) {
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.recommendList = data.recommendList
        this.headList = data.headList
      }
    }
  },
  mounted () {
    this.getMistyInfo()
  }
}
</script>

<style scoped>

</style>
