<template>
  <div>
    <detail-register></detail-register>
    <detail-login></detail-login>
    <detail-about></detail-about>
    <deatail-code></deatail-code>
    <detail-map></detail-map>
    <detail-airplane></detail-airplane>
    <detail-agreement></detail-agreement>
    <detail-findpassword></detail-findpassword>
  </div>
</template>

<script>
import axios from 'axios'
import DetailLogin from './components/Login'
import DetailRegister from './components/Register'
import DetailAbout from './components/About'
import DetailCode from './components/Code'
import DetailMap from './components/Map'
import DetailAirplane from './components/Airplane'
import DetailTimedown from './components/Timedown'
import DetailAgreement from './components/Agreement'
import DetailFindpassword from './components/Findpassword'
export default {
  name: 'Detail',
  components: {
    DetailRegister,
    DetailLogin,
    DetailAbout,
    DetailCode,
    DetailMap,
    DetailAirplane,
    DetailTimedown,
    DetailAgreement,
    DetailFindpassword

  },
}
</script>

<style scoped>

</style>
