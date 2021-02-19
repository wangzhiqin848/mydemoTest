<template>
  <div>
    <div class="header">
      <div class="header-left">
        <router-link to="/">
          <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
      </div>
      <div class="header-center">
        <p>{{this.city}}必游榜单</p>
      </div>
      <div class="header-right">
        <router-link to="/">
          <span class="iconfont home-icon">&#xe7b0;</span>
          <span class="header-right-text">首页</span>
        </router-link>
      </div>
    </div>
    <div class="location">
      <div class="location-city">
        <span class="iconfont">&#xe6aa;</span>
        {{this.city}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  line-height .62rem
.header-left
  float left
  padding-left .1rem
  padding-top .1rem
  .back-icon
    color #666
.header-center
  flex 1
  text-align center
  padding-top .1rem
.header-right
  float right
  text-align center
  font-size .24rem
  padding .1rem .15rem .1rem 0
  span
    color #666
    display block
  .home-icon
    font-size .44rem
    line-height .44rem
  .header-right-text
    font-size .22rem
    line-height .24rem
.location
  height .64rem
  background #eee
  line-height .64rem
.location-city
  float right
  padding-right .15rem
</style>
