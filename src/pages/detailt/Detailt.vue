<template>
    <div>
      <detailt-banner :scenicList="scenicList"></detailt-banner>
      <detailt-header :scenicList="scenicList"></detailt-header>
      <detailt-content  :recommendList="recommendList" :discussList="discussList">
      </detailt-content>
   </div>
</template>

<script>
import axios from 'axios'
import DetailtHeader from './components/Header'
import DetailtBanner from './components/Banner'
import DetailtContent from './components/Content'

export default {
  name: 'Detailt',
  components: {
    DetailtBanner,
    DetailtHeader,
    DetailtContent,
  },
  data () {
    return {
      scenicList: [],
      recommendList: [],
      discussList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        const scenicListdate = data.scenicList
        const recommendListdate = data.recommendList
        const discussListdate = data.discussList
        var arrscenicList = Object.values(scenicListdate); 
        var arrrecommendList = Object.values(recommendListdate); 
        var arrdiscussList = Object.values(discussListdate); 
        var arrscenic = []
        var recommend = []
        var discuss = []
        arrscenicList.forEach(element => {
        if(this.$route.params.id == element.id ){
           arrscenic.push(element); 
          }
        });
        arrrecommendList.forEach(element => {
        if(this.$route.params.id == element.id ){
           this.recommendList = element.Listxq;
           
          } 
        });
         arrdiscussList.forEach(element => {
        if(this.$route.params.id == element.id ){
           this.discussList = element.Listdi;
          }
        }); this.scenicList = arrscenic;  
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped>

</style>
