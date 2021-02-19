<template>
  <div>
    <div class="content">
      <ul class="title">
        <li class="title-left iconfont">&#xe609;</li>
        <li class="title-center">精选内容</li>
        <li class="title-right iconfont">&#xe609;</li>
      </ul>
      <div class="contents">
        <div class="con" v-for="item of list" :key="item.id">
          <div class="content-top">
            {{ item.desc }}
          </div>
          <div class="content-center">
            <img class="content-img" :src="item.icon" alt="">
            <p class="content-p">{{ item.name }}</p>
          </div>
          <div class="content-bottom">
            <span v-for="index of item.images" :key="index.id">
              <img :src="index.imgUrl" alt="">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaneContent',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.content
  width 100%
  border-top 0.2rem solid #f3f3f3
  .title
    background #fff
    display flex
    text-align center
    height .6rem
    line-height .9rem
    li
      flex 1
    .title-center
      font-size .42rem
    .title-left,.title-right
      color #ff9300
  .contents
    padding 0 .25rem
    .content-top
      font-size .36rem
    .content-center
      padding .2rem 0
      display flex
      .content-img
        float left
        border-radius 180%
        width .6rem
        height .6rem
      .content-p
        color #999
        padding-left .1rem
        line-height .6rem
    .content-bottom
      text-align center
      display flex
    .content-bottom span
      display block
      flex 1
    .content-bottom img
      width 1.9rem
      height 1.8rem
      border-radius 6%
    .con
      padding-top .6rem
      border-bottom .03rem solid #ccc
      padding-bottom .3rem
</style>
