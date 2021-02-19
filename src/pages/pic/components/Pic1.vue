<template>
  <div>
    <div class="">
      <div class="www" >
        <router-link to="/"  class="header-fixed">
          <div class="iconfont header-fixed-back">&#xe624;</div>
          图片详情
        </router-link>
      </div>
      <div class="img1">
        <div class="item" v-for="items in imgUrls" :key="items.id" >
          <img class="tp" :src="items.img" alt="">
        </div>
      </div>
    </div>
    </div>

</template>

<script>
  export default {
    name: "PicPic",
    props: {
      imgUrls:Array
    },
  }
</script>

<style lang="stylus" scoped>
  .header-fixed
      height 1rem
      line-height 1rem
      text-align center
      color #000000
      font-size .32rem
      background #fff

  .header-fixed-back
      font-size 0.4rem
      float left
      position absolute
      left .3rem
  .www
      text-align center
  .tp
      height 100%
      width 47%
      float left
      margin-top 0.3rem
      margin-left 0.17rem
 .img1
   height 13.8rem
   background #e2dfdf
</style>
