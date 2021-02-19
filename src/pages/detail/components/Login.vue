<template>
  <div class="color_all">
<!--  登录  -->
    <div class="header">
      <div class="header-left">
        <router-link to="/">
          <div class="iconfont back-icon login-back">&#xe624;</div>
        </router-link>
      </div>
      <div class="header-input1">
        <span class="iconfont denglu">登录</span>
      </div>
      <router-link to="/register">
        <div class="header-right">
          {{this.city}}
          <router-link to="Register">
            <span class="iconfont zhuce">注册</span>
          </router-link>
        </div>
      </router-link>
    </div>
    <!--    选项卡    -->
    <div class="menu">
      <span class="menu-one" @click="btn(1)" :class="{show:tab === 1}">
        短信验证码登录
      </span>
      <span class="menu-two" @click="btn(2)" :class="{show:tab === 2}">
        账号登录
      </span>
    </div>
    <!--    选项卡里面的内容  -->
    <div class="content">
      <span v-if="tab == 1">
        <div class="center-one">
            <div class="phone-bottom">
              <div class="phone">
                <label class="phone-t">手机号</label>
                <input class="ppp" placeholder="请输入手机号">
              </div>
            </div>
        </div>

        <div class="phone-bottom">
          <div class="phone">
            <label class="phone-t">验证码</label>
            <input class="ppp" placeholder="请输入验证码">
            <DetailTimedown class="time_yan"></DetailTimedown>
          </div>
        </div>
        <div class="footer_d">
          <a class="footer_denglu">登录</a>
        </div>
        <div class="protocal">
          登录即同意去哪儿
          <router-link to="/Agreement" class="link">用户服务协议</router-link> 和
          <router-link to="/Agreement" class="link">隐私政策</router-link>
        </div>
        <div class="ff">
          <ul class="ff_m clearfix">
            <li><a href="" class="ll">电脑版</a></li>
            <router-link to="About">
              <li><a href="" class="rr">关于我们</a></li>
            </router-link>
          </ul>
        </div>
        <div class="copyright">
            <span>Qunar 京ICP备05021087</span>
        </div>

      </span>
    </div>
    <!--    账号登录   -->
    <span v-if="tab == 2">
        <div class="center-one">
            <div class="phone-bottom">
              <div class="phone">
                <label class="phone-t">账号</label>
                <input class="ppp" placeholder="手机号/邮箱/用户名">
              </div>
            </div>
        </div>

        <div class="phone-bottom">
          <div class="phone">
            <label class="phone-t">密码</label>
            <input class="ppp" placeholder="请输入密码">
          </div>
        </div>
        <div class="footer_d">
          <a class="footer_denglu">登录</a>
        </div>
        <router-link to="/Findpassword">
          <div class="find_mima">
          <a href="">找回密码</a>
        </div>
        </router-link>

      <!--protocal：协议-->
        <div class="protocal">
          登录即同意去哪儿
          <router-link to="Register">
            <a href="" class="link">用户服务协议</a> 和
          </router-link>
          <a href="" class="link">隐私政策</a>
        </div>
        <div class="ff">
          <ul class="ff_m clearfix">
            <li><a href="" class="ll">电脑版</a></li>
            <router-link to="About">
              <li><a href="" class="rr">关于我们</a></li>
            </router-link>
          </ul>
        </div>
        <div class="copyright">
            <span>Qunar 京ICP备05021087</span>
        </div>

      </span>
  </div>
</template>

<script>
import DetailTimedown from './Timedown'
export default {
  name: 'DetailLogin',
  //调用组件
  components: {
    DetailTimedown
  },
  //定义相关的数据。
  // 用来给Vue实例绑定一些相关数据, 绑定的数据可以通过{{变量名}}在Vue作用范围内取出
  data () {
    return {
      tab: 1
    }
  },
  //放置页面中的业务逻辑
  methods: {
    btn (key) {
      this.tab = key
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"

//头部---登录
.header
  display flex
  line-height .86rem
  background $bgColor
  color #fff
.header2
  background #18a9b9
  color $bgColor
  height .80rem
  padding .05rem .1rem 0
.login-back
  color #ffffff
.login-tab
  width 200px
.header-left
  width .64rem
  float left
.back-icon
  text-align center
  font-size .4rem
.header-input1
  flex 1
  height .64rem
  line-height .64rem
  margin-top .12rem
  margin-left 3.2rem
  padding-left .2rem
  background $bgColor
  border-radius .1rem
  color #ffffff
.denglu
  font-size .5rem
  margin-left -16px
.header-input
  //平均分
  flex 1
  height .64rem
  line-height .64rem
  margin-left .2rem
  padding-left .2rem
  background #ffffff
  border-radius .1rem
  color #ccc
  margin-bottom .2rem
.header-right
  width 1.24rem
  float right
  text-align center
.zhuce
  margin-left -.04rem
  color white

//选项卡
.menu
  display flex
  align-items center
  background #00bcd4
  height 42px
  padding-top .1rem
.menu span
  color #444950
  font-size 14px
  line-height 30px
  background #f5f6f7
  padding 0 6px
  display block
  cursor pointer
  border-radius 0.03rem
.menu-one
  margin-left 110px
.show
  color #fff !important
  background #1877f2 !important

//选项卡里面的内容：手机号、验证码
.center-one
  border-top .01rem solid #ccc
  border-bottom .01rem solid #ccc
  margin-top .1rem
  background #fff
  font-size .16rem
.phone
  padding-left .5rem
  padding-top .3rem
.phone-bottom
  display flex
  width 100%
  border-bottom .01rem solid #ddd
  line-height .45rem
  height 50px
.phone-t
  line-height .45rem
  color #19a9ba
  font-size 18px
  width: .9rem;
  padding-top 20px
.ppp
  padding-left .5rem
  padding-bottom .1rem
  color #000
  font-size .3rem

//获取验证码
.time_yan
  float right
  margin-top -0.1rem
  margin-left -0.00rem
//底部登录按钮
.footer_d
  padding: 0 .1rem;
  margin-top: 15px;
  border-radius: 0.03rem;
.footer_denglu
  color #fff
  text-align center
  line-height 1.0rem
  display block
  border-radius .03rem
  background #85d1db
  padding 0 .1rem
  font-size .4rem

//协议样式
.protocal
  margin-top .59rem
  text-align center
  font-size .12rem
  color #9e9e9e
.link
  color #9e9e9e
  text-decoration underline

//最下面
.ff
  padding-top 6.7rem
.ff_m
  padding .3rem 0
  border-bottom .01rem solid #ccc
  color #4ebac8
  text-align center
.ll
  float left
  padding-left 2.0rem
.copyright
  color #d4d9de
  text-align center
  font-size .12rem
  padding .4rem .1rem .2rem

//找回密码
.find_mima
  float right
  padding-top .2rem
  padding-right .1rem

</style>
