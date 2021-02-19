<template>
  <div>
    <div class="item" v-for="item in scenicList" :key="item.id" >
      <router-link :to="'/pic/' + item.id"  >
        <div class="banner">
          <img class="banner-imgs" :src="item.imgUrl" >
        </div>
      </router-link>

    <div class="banner-info" >
      <div class="tu">{{item.imgUrls.length}}</div>
      <div>{{item.desc}}</div>

      <div class="detail-1">
        <div class="left">
          <div class="left1">
            <router-link tag="span" to="/strategy" class="detail-left-1">
              {{item.grade}} </router-link>分
            <span class="detail-left-2">超赞</span>
          </div>
          <div class="left2">
            <span class="detail-left-3">{{item.comment}}条评论  {{item.strategy}}条攻略</span>
          </div>
          <div class="iconfont back-icon">&#xe633;</div>
        </div>
        <div class="right">
          <div class="right1">{{item.introduction}}</div>
          <div class="right2">{{item.time}}</div>
          <div class="iconfont back-icon1">&#xe633;</div>
        </div>
        <div class="dw">
          <hr>
          <span class="iconfont dw-icon">&#xe611;</span>
          <div class="address">{{item.address}}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailtBanner',
  props: {
    scenicList: Array,
    showList:Array,
  },
}
</script>

<style lang="stylus" scoped>

  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
  .banner-imgs
    width 100%
  .banner-info
    position absolute
    top 3rem
    left .5rem
    color #fff
    font-size .3rem
  .tu
    background #6c6666
    border-radius 10rem
    width 30%
    margin-bottom .2rem
    text-align center
    font-size .2rem
  .detail-1
    border-radius 0.2rem
    width 8.3rem
    background #ffffff
    position absolute
    left -0.5rem
    top 1.2rem
    color #615d5d
    background #ffffff
  .left
    float left
    width 50%

  .left1
    margin-left .2rem
    margin-top .2rem
    color #ce6a15
    font-size .3rem
  .left2
    margin-left .2rem
    margin-top .2rem

  .right
    float right
    width 50%
    font-size 0.3rem

  .detail-left-1
    font-size .5rem

  .back-icon
    position absolute
    left 3.5rem
    top .5rem

  .right1
    margin-left .2rem
    margin-top .3rem
    margin-bottom 0.3rem
    color black

  .right2
    margin-left .2rem
    margin-top .3rem
    font-size .28rem

  .back-icon1
    position absolute
    left 7rem
    top .5rem

  .address
    position absolute
    float none
    left .7rem
    top 1.3rem
    text-align center

  .dw-icon
    position absolute
    float none
    left 0.2rem
    top 1.25rem

</style>
