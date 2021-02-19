<template>
  <div>
    <trip-search></trip-search>
    <trip-option></trip-option>
    <trip-header :list="searchList"></trip-header>
    <trip-bottom></trip-bottom>
  </div>
</template>

<script>
import TripSearch from './components/Search'
import TripOption from './components/Option'
import TripHeader from './components/Header'
import TripBottom from './components/Bottom'
import axios from 'axios'
export default {
  name: 'Trip',
  components: {
    TripSearch,
    TripOption,
    TripHeader,
    TripBottom
  },
  data () {
    return {
      searchList: []
    }
  },
  methods: {
    getTripInfo () {
      axios.get('/api/search.json')
        .then(this.getTripInfoSucc)
    },
    getTripInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.searchList = data.searchList
      }
    }
  },
  mounted () {
    this.getTripInfo()
  }
}
</script>

<style scoped>

</style>
