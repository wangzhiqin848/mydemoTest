<template>
<div>
  <pic-pic :imgUrls="imgUrls"></pic-pic>
</div>
</template>

<script>
  import axios from 'axios'
  import PicPic from './components/Pic1'
  export default {
    name: "Pic",
    components:{
      PicPic
    },
    data () {
      return {
        imgUrls:[]
      }
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/pic.json').then(this.getDetailInfoSucc)
      },
      getDetailInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data

          this.imgUrls = data.imgUrls
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
