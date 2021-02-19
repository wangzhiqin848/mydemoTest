<template>
  <div>
    <!-- 使用 -->
    <alls-hot :list="viewsList"></alls-hot>
<!--    <alls-line :list="viewsList"></alls-line>-->
  </div>
</template>

<script>
/* 引入 */
import AllsHot from './components/Hot'
import AllsLine from './components/Line'
import axios from 'axios'

export default {
  name: 'Alls',
  /* 注册 */
  components:{
    AllsHot,
    AllsLine
  },
  data (){
    return{
      viewsList:[],
    }
  },
  methods: {
    getAllsInfo () {
      axios.get('/api/all.json').then(this.getAllsInfoSucc)
    },
    getAllsInfoSucc (res) {
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.viewsList = data.viewsList
      }
    }
  },
  mounted () {
    this.getAllsInfo()
  }
}
</script>

<style scoped>

</style>
