<template>
  <div>
  <!--  头部  -->
    <div class="head">
      <router-link to="/">
        <span class="h-icon">&#xe624;</span>
      </router-link>
      <div class="h-title">机票</div>
      <img class="h-img" src="http://imgs.qunarzz.com/ftejia/1806/14/9d003a85e4695f.png" alt="">
    </div>
  <!--  选项卡  -->
    <div>选项卡</div>
  </div>
</template>

<script>
export default {
  name: 'DetailAirplane'

}
</script>

<style lang="stylus" scoped>
.head
  width 100%
  height 0.9rem
  background #1ba9ba
.h-icon
  font-family iconfont !important
  color white
  font-size .5rem
.h-title
  color white
  text-align center
.h-img
  width 100%
  height 228px
  background-size 100% 100%
  position absolute
  z-index 1

//选项卡


</style>
