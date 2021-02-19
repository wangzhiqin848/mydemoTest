<!--注册-->
<template>
  <div class="color_all">
    <!--  登录  -->
    <div class="header">
      <div class="header-left">
        <router-link to="/login">
          <div class="iconfont back-icon login-back">&#xe624;</div>
        </router-link>
      </div>
      <div class="header-input1">
        <span class="iconfont denglu">注册</span>
      </div>
    </div>

    <!--    选项卡里面的内容  -->
    <div class="content">
        <div class="center-one">
            <div class="phone-bottom">
              <div class="phone">
                <label class="phone-t">手机号</label>
                <input class="ppp" placeholder="请输入手机号">
              </div>
            </div>
        </div>
<!-- 图形码 -->
        <div class="phone-bottom">
          <div class="phone">
            <label class="phone-t">图形码</label>
            <input class="ppp" placeholder="请输入图形码">
            <!--  引用Code组件  -->
            <DetailCode class="detailCode">
              <a class="yanzhengma">获取验证码</a>
            </DetailCode>
          </div>
        </div>
<!-- 验证码 -->
        <div class="phone-bottom">
          <div class="phone">
            <label class="phone-t">验证码</label>
            <input class="ppp" placeholder="请输入验证码">
            <DetailTimedown class="time_yan"></DetailTimedown>
          </div>
        </div>
        <div class="footer_d">
          <a class="footer_denglu">注册</a>
        </div>
        <div class="protocal">
          登录即同意去哪儿
          <router-link to="User">
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
    </div>
  </div>
</template>

<script>
import DetailCode from './Code.vue'
import DetailTimedown from './Timedown'
export default {
  name: 'DetailLogin',
  components: {
    DetailTimedown,
    DetailCode
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
  font-size .4rem
  margin-left -16px

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
  flex-direction row
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
  margin-right 0.5rem
.ppp
  width 3.0rem
  height .5rem
  line-height 1.5
  padding-left .6rem
  padding-bottom .1rem
  color #000
  font-size .3rem
.content
  padding-top .12rem

//获取验证码
.time_yan
  float right
//  更新验证码
.detailCode
  float right
  padding-bottom .5rem

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
  padding .31rem .1rem .2rem

//找回密码
.find_mima
  float right
  padding-top .2rem
  padding-right .1rem


</style>
