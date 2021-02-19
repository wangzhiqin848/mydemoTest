<template>
  <div class="list">
    <div class="tab-content" v-for="item of list" :key="item.id">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="c-border">
        <p>{{ item.desc }}</p>
      </div>
      <div class="tab-recommend" v-for="index of item.textList" :key="index.id">
        <div class="item">
          <div class="item-top">
            <img :src="index.imgUrl" alt="">
            <div class="item-info">
              <p class="item-title">{{ index.title }}</p>
              <p class="item-desc">{{ index.number }}条评论</p>
              <p class="item-star iconfont">
                &#xe609;&#xe609;&#xe609;&#xe609;&#xe609;
                {{ index.star }}分
              </p>
              <p class="item-price">
                <span class="item-font">
                  <sub>￥</sub>{{ index.price }}
                </span>
                起
              </p>
            </div>
          </div>
          <div class="item-text">
            <span class="item-reason">必去理由</span>
            <p class="item-p">{{ index.reason }}</p>
            <div class="item-time iconfont">
              <i>&#xe686;</i>建议游玩时长：{{ index.duration }}个小时
            </div>
          </div>
          <router-link :to="'/detailt/'+index.id">
            <div class="item-see">
              去看看
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.list
  width 100%
  background #0f0f0f
  padding-bottom .1rem
  .tab-content
    background url("https://s.qunarzz.com/piao_topic/image/touch/custom/2018/2916bangdan/tab_desc.jpg") no-repeat
    background-size 100%
  .title
    color #ffffff
    font-size .28rem
    text-align center
    padding .3rem 0
  .c-border
    color #ffffff
    font-size .28rem
    border .02rem dotted #7b6a3c
    margin 0 .2rem
    p
      margin .2rem .3rem
      padding-left .1rem
  .tab-recommend
    background #ffffff
    margin .35rem .2rem
    padding-bottom .1rem
    .item-top
      display flex
      img
        float left
        width 45%
        height 45%
        padding .2rem
      .item-info
        min-width 0
        flex 1
        padding-top .2rem
        .item-title
          font-size .34rem
          font-weight bold
          padding .15rem 0
          ellipse()
        .item-desc
          color #9e9e9e
          font-size .24rem
          padding .1rem 0
          ellipse()
        .item-star
          font-size .22rem
          color #ff9800
          padding .05rem 0
        .item-price
          color #9e9e9e
          padding-top .2rem
          font-size .24rem
          .item-font
            color #ff9800
            font-size .36rem
          .item-font sub
              font-size .24rem
    .item-text
      padding 0 .1rem 0 .2rem
      .item-reason
        display block
        width .96rem
        color #d9a92b
        font-size .24rem
        border .01rem solid #d9a92b
        padding .06rem
      .item-p
        padding .1rem 0 0 .1rem
        font-size .26rem
        line-height .35rem
      .item-time
        padding-left .1rem
        padding-top .3rem
        font-size .22rem
        color #616161
      .item-time i
        padding-right .1rem
    .item-see
      margin .3rem .3rem .1rem .3rem
      padding .15rem 0
      border .01rem solid #b5b5b5
      text-align center
      border-radius 1.2rem
      color #616161
</style>
