<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img"  :src="item.imgUrl">
        <span class="desc">{{ item.desc }}</span>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'PlaneSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
/* 当前样式只针对当前页面   样式穿透 */
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff !important
.wrapper
  width 100%
  overflow hidden
  height 0
  padding-bottom 50%
  background #eee
  .swiper-img
    width 100%
    position relative
    margin-bottom -1rem
  .desc
    display block
    position absolute
    color #fff
    top 0.1rem
    left 0.2rem
</style>
