<template>
  <div>
    <ticket-search></ticket-search>
    <ticket-option></ticket-option>
    <ticket-header :list="ticketsList"></ticket-header>
    <ticket-bottom></ticket-bottom>
  </div>
</template>

<script>
import TicketSearch from './components/Search'
import TicketOption from './components/Option'
import TicketHeader from './components/Header'
import TicketBottom from './components/Bottom'
import axios from 'axios'
export default {
  name: 'Ticket',
  components: {
    TicketSearch,
    TicketOption,
    TicketHeader,
    TicketBottom
  },
  data () {
    return {
      ticketsList: []
    }
  },
  methods: {
    getTicketInfo () {
      axios.get('api/ticket.json')
        .then(this.getTicketInfoSucc)
    },
    getTicketInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.ticketsList = data.ticketsList
      }
    }
  },
  mounted () {
    this.getTicketInfo()
  }
}
</script>

<style scoped>

</style>
