<template>
  <div>
    <xian-lu :list="viewsList"></xian-lu>
  </div>
</template>

<script>
import XianLu from './compontents/Lu'
import axios from 'axios'

export default {
  name: 'Xian',
  components: {
    XianLu
  },
  data (){
    return{
      viewsList:[]
    }
  },
  methods: {
    getXianInfo () {
      axios.get('/api/xian.json').then(this.getXianInfoSucc)
    },
    getXianInfoSucc (res) {
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.viewsList = data.viewsList
      }
    }
  },
  mounted () {
    this.getXianInfo()
  }
}
</script>

<style scoped>

</style>
