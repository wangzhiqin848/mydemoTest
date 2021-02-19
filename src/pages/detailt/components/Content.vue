<template>
  <div>
    <div >
      <div class="xian"></div>
      <div class="detail-2">
        <div class="tuijian">去哪儿推荐</div>
        <div class="bg">
        <div class="detail-2-gg" v-for="item in recommendList" :key="item.id">
          <div class="gg">{{ item.desc }}</div>
          <div class="date"><span class="iconfont">&#xe60b;</span>{{ item.book }}</div>
          <div class="bor">
            <span class="kk">自营</span>
            <span class="kk">条件退</span>
            <span class="kk">无需换票</span>
          </div>
          <div class="book">
            <div class="price">￥<span class="size">{{ item.money }}</span></div>
            <div class="once">立即预定</div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-3-review">
      <div class="xian2"></div>
      <div class="tuijian2">用户评论</div>
      <hr>
      <div class="author" v-for="items in discussList" :key="items.id">
        <div class="pinglun">
          <span class="iconfont wujiaoxin">&#xe647;&#xe647;&#xe647;&#xe647;&#xe647;</span>
          <span class="name">{{ items.user }} {{ items.date }}</span>
        </div>
        <div class="content">
          {{ items.desc }}
        </div>
        <div v-for="(it, i) in items.imgsUrl" :key="i">
          <img class="tp" :src="it"/>
        </div>
      </div>
      <div class="xx"></div>
      <router-link  to="/strategy">
          <div class="xb">查看全部点评  <span class="iconfont">&#xe6cc;</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailtContent',
  props: {
    recommendList: Array,
    discussList: Array,
    scenicList:Array
  }

}
</script>

<style lang="stylus" scoped>
 .xb
   position absolute
   top 13rem
   padding-bottom 0.5rem
   right 3rem
   margin-bottom 0.5rem
   color #a09c9c
   font-size 0.32rem
 .xx
   border-top 1px dashed #cacaca
   position relative
   top 2.5rem

  .xian
    width 100%
    position absolute
    top 6rem
    height .15rem
    background #e0dcdc
  .xian2
    width 100%
    margin-top 0.3rem
    height .15rem
    background #e0dcdc
  .detail-2
    background #fff
    position absolute
    top 6.2rem
    color #615d5d
  .tuijian
    margin 0.2rem
    font-size 0.4rem
    color black
  .tuijian2
    margin-left 0.2rem
    margin-top 0.3rem
    font-size 0.4rem
    color black
    margin-bottom 0.3rem
  .detail-2-mp
    margin 0 auto
    width 92%
    height 100%
    border-radius 0.1rem
  .detail-2-gg
    padding-top 0.2rem
    padding-left 0.2rem
    width 70%
    padding-bottom 0.2rem
    margin-bottom 0.2rem

  .detail-3-review
    position relative
    top 8.5rem
    padding-bottom 1rem
  .gg
    color black
    font-size 0.3rem
    margin-bottom 0.1rem
  .date
    color #25a4bb
    margin-bottom 0.1rem
  .bor
    font-size 0.05rem
    color #25a4bb
  .kk
    border 0.3rem #25a4bb
  .book
    position relative
    top -1rem
    right -2rem
    float right
    color #eea82c
  .price
    margin-left 0.3rem
  .size
    font-size 0.4rem
  .once
    color white
    background #eea82c
    width 1.3rem
    text-align center
    border-radius 5rem
    padding 0.1rem
    font-size 0.2rem
  .wujiaoxin
    color #eea82c
    font-size .1rem
  .pinglun
    position relative
    top 0.25rem
  .author
    height 100%
    width 95%
    margin 0 auto
    display block
  .name
    float right
  .content
    text-indent 2em
    line-height 0.3rem
    margin-top 0.5rem
  .tp
    margin-top 0.3rem
    width 30%
    padding-right 0.2rem
    float left
  .bg
    width 95%
    background #f8f8f8
    border-radius 5px
    margin-left 0.25rem
</style>
