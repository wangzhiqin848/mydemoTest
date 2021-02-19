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
  name: 'Child',
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
    getChildInfo () {
      axios.get('/api/child.json').then(this.getChildInfoSucc)
    },
    getChildInfoSucc (res) {
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.recommendList = data.recommendList
        this.headList = data.headList
      }
    }
  },
  mounted () {
    this.getChildInfo()
  }
}
</script>

<style scoped>

</style>
