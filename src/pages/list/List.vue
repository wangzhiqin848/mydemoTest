<template>
  <div>
    <list-header :city="city"></list-header>
    <list-tab :change="changeList"></list-tab>
    <list-content :list="contentList"></list-content>
  </div>
</template>

<script>
import ListHeader from './components/Header'
import ListTab from './components/Tab'
import ListContent from './components/Content'
import axios from 'axios'

export default {
  name: 'List',
  components: {
    ListHeader,
    ListTab,
    ListContent
  },
  data () {
    return {
      city: '',
      changeList: [],
      contentList: []
    }
  },
  methods: {
    getListInfo () {
      axios.get('/api/list.json').then(this.handleGetListInfoSucc)
    },
    handleGetListInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.changeList = data.changeList
        this.contentList = data.contentList
      }
    }
  },
  mounted () {
    this.getListInfo()
  }
}
</script>

<style scoped>

</style>
