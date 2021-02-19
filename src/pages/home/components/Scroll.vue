<!--横向滚动-->
<template>
  <div class="all">
    <div class="head">
      <img class="head-img" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
      <span class="head-left">本周热门榜单</span>
      <span class="head-right">全部榜单
        <router-link class="go-icon" to="/alls">&#xe634;</router-link>
      </span>
    </div>
    <div>
      <ul class="cc">
        <li class="c-item" v-for="item of list" :key="item.id">
          <router-link :to="'/detailt/'+item.id">
          <img class="s-img2" :src="item.imgurl">

          <div class="c-img">
            <img class="c-img2" :src="item.imgUrl">
          </div>
          </router-link>
          <div class="c-title">{{item.title}}</div>
          <div class="c-price">
            <span class="price">{{item.price}}</span>
            <span>起</span>
          </div>

        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeScroll',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.all
  height 0
  padding-bottom 50%
  margin-top .2rem
  background #fff
  padding-left .24rem
  width 100%
  .head
    height 40px
    display flex
    padding 12px 0
    box-sizing border-box
    .head-img
      width 15px
      height 15px
    .head-left
      font-size 16px
      margin-left 4px
    .head-right
      font-family "iconfont" !important
      position absolute
      padding-top 2px
      font-size 13px
      right 20px
      color gray
    .go-icon
      color black
  .cc
    list-style none
    white-space nowrap
    font-size 12px
    text-align center
    //加上才可滑动
    overflow auto
    .c-title
    .c-item
      position relative
      display inline-block
      padding .06rem 0 .2rem
      width 2rem
      margin 0 .1rem
      .c-img
        overflow: hidden
        width: 2rem
        height: 0
        padding-bottom 100%
        .c-img2
          width: 100%
      .c-dest
        margin .1rem 0
      .c-price
        .price
          color #ff8300

.s-img2
  width 0.8rem
  height 0.4rem
  float left
  padding-right 0.2rem
  //让图片在上面
  position absolute
  z-index 1
  padding-left 0.2rem

</style>
