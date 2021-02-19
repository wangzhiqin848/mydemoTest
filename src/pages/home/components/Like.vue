<template>
  <div>
    <div class="title">
        <span class="xin">❤</span>
            猜你喜欢
        </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.img" />
          <span class=mai>{{item.mai}}</span>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <!-- 星星 -->
          <div>
            <div class="iconfont star">
                &#xe608;&#xe608;&#xe608;&#xe608;&#xe608;
                <span class="ping">{{item.ping}}</span>
            </div>
          </div>
         <p class=money>
             <i class="qian">￥</i>{{item.money}}<i class="qi">起</i>
             <span class="address">{{item.address}}</span>
        </p>
        <div class="mark">
            <mark class="text">{{item.zhu}}</mark>
        </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeLike',
  props: {
    list: Array
  },
}
</script>

<style lang="stylus" scoped>
.title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
.mai
    position absolute
    left 13px
    top 13px
    background #e69f06
    height 15px
    border-radius 16%
    color #ffffff
.xin
    color #f26060
    margin-left 10px
    font-size 18px
.star
    color #f7b22e
    font-size 6px
    margin-top 8px
.ping
    font-size 8px
    color #82807c
    margin-left 15px
.item-img
    width 100px
    height 100px
    margin 12px
.item-info
    position absolute
    left 130px
    top 25px
.item-title
    font-size 20px
.money
    margin-top 18px
    font-size 22px
    color #f1a80b
.qian
    font-size 6px
.qi
    font-size 6px
    color #82807c
.address
    color #82807c
    font-size 6px
    margin-left 170px
.text
    color red
    background #f6e9eb
    opacity .5
    font-size 6px
    text-align center
.mark
    display block
    margin-top 10px
</style>
