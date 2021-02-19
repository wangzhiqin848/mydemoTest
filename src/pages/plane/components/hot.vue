<template>
<div class="list">
  <div class="area">
    <div class="title">热门城市</div>
    <div class="button-list">
      <div
        class="button-wrapper"
        v-for="item of hot"
        :key="item.id"
      >
        <div class="button">{{item.name}}</div>
      </div>
    </div>
    <router-link to="/city">
      <div class="more">查看更多</div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'PlaneHot',
  props: {
    hot: Array
  }
}
</script>

<style lang="stylus" scoped>
.list
  overflow hidden
  .area
    padding-top .1rem
    .title
      padding-left .2rem
      line-height .54rem
      .button-list
        display flex
    .button-wrapper
      width 33.33%
      float left
      .button
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
  .more
    width 100%
    text-align center
    padding-top 1.6rem
    padding-bottom .3rem
    color #25a4bb
    font-size .30rem
</style>
