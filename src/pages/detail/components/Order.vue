<!--最底下-->
<template>
  <div class="bg_two">
  <!--  头部  -->
    <div class="header">
      <div class="header-left">
        <router-link to="/">
          <div class="iconfont back-icon">
            <strong>&#xe624;</strong>
          </div>
        </router-link>
      </div>
      <div class="header-text">
        个人中心
      </div>
      <div>
        <router-link to="/login">
          <span class="iconfont zhuce">登录</span>
        </router-link>
      </div>
    </div>
  <!--  第二部分  -->
    <div>
      <div class="tip">
        <p class="title">您处于未登录状态，请尽快登录！</p>
        <ul class="qn_grey qn_pa10 qn_font14 qn_lh">
          <p>登录可以:</p>
          <li>订单信息同步云端，安全跨平台</li>
          <li>支持常用乘机人/联系人功能,填写订单更快捷</li>
          <li>支持购买团购,出行住店更便宜</li>
        </ul>
      </div>
    </div>
  <!--    第三部分  -->
    <div class="three">
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe651;&nbsp;火车票订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe686;&nbsp;机票订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe674;&nbsp;酒店订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe641;&nbsp;钟点房订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe651;&nbsp;酒店团购订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe603;&nbsp;门票订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe651;&nbsp;汽车票订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe686;&nbsp;接送机订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe651;&nbsp;车车订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe651;&nbsp;公寓订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe630;&nbsp;导游Wi-Fi订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe651;&nbsp;景区直通车订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe651;&nbsp;Q商城订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe651;&nbsp;美食订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe600;&nbsp;电影票订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
      <div class="qn_border qn_listitem qn_nobt qn_arrow_grey r">
        <a class="tt" href="">&#xe609;&nbsp;保险订单
          <span class="r_jt">&#xe637;</span>
        </a>
      </div>
    </div>
  <!--    第四部分  -->
    <div class="four">
      <div class="ad"></div>
      <div class="bg_f">
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
            <router-link to="About"><a href="/">关于我们</a></router-link>
          </li>
        </ul>
        <ul class="chuping clearfix">
          <li class="a_f">
            <a href="/">触屏版</a>
          </li>
          <li>
            <a href="/">电脑版</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailOrder'
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
//头部
.header
  display flex
  line-height .86rem
  background $bgColor
  color #fff
.header-left
  width .64rem
  float left
.back-icon
  text-align center
  font-size .4rem
  color white
.header-text
  margin-left 125px
  font-size .40rem
.zhuce
  color #ffffff
  float right
  padding-left 2.5rem
//  第二部分
.bg_two
  background #f3f3f3
.tip .title
  font-size 18px
  margin 30px 0 5px 0
  text-align center
.tip li
  list-style-type disc
  margin-left 20px
.qn_grey
  color #8c8c8c
.qn_pa10
  padding 10px
.qn_lh
  line-height 1.5
.qn_font14
  font-size 14px
ol, ul, li
  list-style none

//  第三部分
.qn_arrow_grey {
  position: relative;
}
.qn_nobt {
  border-bottom: none;
}
.qn_border {
  border: 1px solid #cacaca;
}
.qn_listitem {
  background: #fff;
}
.qn_listitem a {
  display: block;
  position: relative;
  padding-left: 10px;
}
.qn_listitem a
  display block
  font-size 18px
  line-height 45px
  margin 0 10px
  color #000
.tt
  font-family: "iconfont" !important;
  margin-left 60px
.r_jt
  float right
  color #cacaca

//第四部分
.ad
  text-align: center;
  padding: 15px 0 0 0;
.four
  height 100px
.bg_f
  background #f3f3f3
.footer_nav
  width: 300px;
  height: 39px;
  margin: 0 auto;
.footer_nav li
  float left
  padding-left .5rem
.footer_nav li a
  position: relative;
  color: #25a4bb;
  font-size: 14px;
  line-height: 39px;
.chuping
  padding: 10px 0 0 0;
  text-align: center;
  border-top: 1px solid #cacaca;
.chuping li
  display inline-block
  margin 0 15px
.a_f a
  color: black
.chuping li
  display inline-block
  margin 0 15px
.chuping a
  font-size 14px

</style>
