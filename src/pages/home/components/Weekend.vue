<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper" @click="goPage(item.id)">
          <img class="item-img" :src="item.imgUrl" alt=""/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
    <div class="mp-price-desc">
      <span class="mp-iconfont mp-price-desc-icon">&#xe602;</span>
      <div class="footer_one">
        <span class="price">票面价</span>
        是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
    </div>
    <!--最底下-->
    <div class="footer">
      <div class="more_div">
        <!--<div>
          <div v-for="(item, key) in morelist" v-show="key<num">
            {{item}}
          </div>
          <span class="more_span" @click="showMore">
                |&nbsp;&nbsp;&#xe627;&nbsp;{{txt}}
            </span>
        </div>-->
        <span class="more_span" @click="showMore">
                |&nbsp;&nbsp;&#xe627;&nbsp;{{txt}}
            </span>
        <ul class="footer_all">
          <li class="flight">
            <router-link to="Day">
              <div class="icon">&#xe70e;</div>
              <span class="title">机票</span>
            </router-link>
          </li>
          <li class="hotel">
            <a href="/">
              <div class="icon">&#xe69a;</div>
              <span class="title">酒店</span>
            </a>
          </li>
          <li class="gongyu">
            <a href="/">
              <div class="icon">&#xe8e9;</div>
              <span class="title">公寓</span>
            </a>
          </li>

        </ul>
      </div>
      <ul class="footer_nav clearfix">
        <li>
          <router-link to="/Login">登录</router-link>
        </li>
        <li>
          <router-link to="Order">我的订单</router-link>
        </li>
        <li>
          <router-link to="Browse"><a href="/">最近浏览</a></router-link>
        </li>
        <li>
          <router-link to="About">
            <a href="/">关于我们</a>
          </router-link>
        </li>
      </ul>
      <ul class="chuping clearfix">
        <li class="active">
          <a href="/">触屏版</a>
        </li>
        <router-link to="Code">
          <li>
            <a href="/">电脑版</a>
          </li>
        </router-link>
      </ul>
      <div class="xiamian">
        <span>Qunar 京ICP备05021087</span>
        <a href="/">意见反馈</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      morelist: [
        '团购   ',
        '火车票  景点  接送机 度假',
        '攻略 旅图  车车  当地人'
      ],
      isShow: true,
      txt: '更多'
      // num: 1
    }
  },
  methods:{
    showMore () {
      this.isShow = !this.isShow
      this.num = this.isShow ? 0 : this.morelist.length
      this.txt = this.isShow ? '更多' : '收起'
    },
    goPage:function (id){
      if (id === '0001'){
        window.location.href = './#/details'
      }else if (id === '0002') {
        window.location.href = './#/week'
      }else if (id === '0003') {
        window.location.href = './#/child'
      }else if (id === '0004') {
        window.location.href = './#/misty'
      }else if (id === '0005') {
        window.location.href = './#/autumn'
      }
    }
  },

}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height: .8rem
  text-indent: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 37.09%
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
.mp-price-desc
  margin-top .1rem
  padding .14rem .1rem
  font-size .24rem
  line-height .32rem
  background #fff
  color #616161
//  图标
.mp-price-desc-icon
  font-family: "iconfont" !important;
  width .24rem
  display block
  float left
  line-height .32rem
//  最底下机票、酒店、公寓 图标
.icon
  font-family: "iconfont" !important;
  color #9e9e9e
  float left
.footer .footer_nav li .title
  float left
  margin 3px 0 0 5px
  border-bottom 1px solid #acacac
  font-size 14px
  color #9e9e9e
  margin-top -5px
.footer_one
  margin-left .3rem
//  最底下的样式
.footer
  background: #f3f3f3
.footer_all
  width 230px
  height 25px
  margin 0 auto
  padding 10px 10px 0 10px
  overflow hidden
.footer_all li
  margin: 0
  padding-left: 10px
  height: 31px
  width: 65px
  float: left
  background: none
.footer_all li a
  font-size: 18px
.price
  color #616161
.footer_all li .title
  float left
  color #9e9e9e
  margin -8px 0 0 5px
  border-bottom 1px solid #acacac
  font-size 14px
.footer_all li
  margin 0
  padding-left 10px
  height 36px
  width 65px
  float left
.footer_nav
  width 100%
  height 39px
  border-bottom 1px solid #cacaca
.footer_nav li
  float left
  padding-left 20px
.footer_nav li a
  color #25a4bb
  font-size 14px
  line-height 39px
.chuping
  padding 10px 0 0 0
  text-align center
.chuping li
  //共享一行
  display inline-block
  margin 0 15px
.active a
  color: black
.chuping li
  //display inline-block
  margin 0 15px
.chuping a
  font-size 14px
.xiamian
  color #9e9e9e
  text-align center
  font-size 14px
  padding 10px
.more_span
  font-family: "iconfont" !important;
  float right
  padding-right .7rem
  padding-top .3rem
  color #9e9e9e

</style>
