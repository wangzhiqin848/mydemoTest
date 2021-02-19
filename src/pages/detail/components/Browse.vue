<template>
  <div>
    <!--  登录  -->
    <div class="header">
      <div class="header-left">
        <router-link to="/">
          <div class="iconfont back-icon login-back">&#xe624;</div>
        </router-link>
      </div>
      <div class="header-input1">
        <span class="iconfont denglu">最近浏览</span>
      </div>
    </div>

    <!--    选项卡    -->
    <div class="ff">
      <div class="box">
        <div class="f_header">
          <div class="total"
               :class="{active:item.id === sel}"
               v-for="item in tabs"
               :key="item.id"
               @click="select(item)"
          >
            {{ item.label }}
            <span></span>
          </div>
        </div>
        <div class="text-all">
          <div class="all" v-show="sel === 1">
            <div class="text_one">
              您最近还没有浏览记录!
            </div>
            <div class="onefooter">
              <div class="bottom">
                <div class="more">点击查看更多</div>
                <div class="goTop"><span>回到顶部</span></div>
              </div>
            </div>
          </div>
          <div class="all" v-show="sel === 2">
            <div class="text_one">
              您最近还没有浏览记录!
            </div>
          </div>
          <div class="all" v-show="sel === 3">
            <div class="text_one">
              您最近还没有浏览记录!
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <ul class="footerall">
          <li class="textf1">触屏版</li>
          <li class="textf2">电脑版</li>
          <div class="zuihou">
            <span>Qunar 京ICP备05021087</span>
            <a class="qn_ml25" href="">意见反馈</a>
          </div>
        </ul>
        <div class="shengyu"></div>
      </div>

    </div>
  </div>
</template>

<script>
import DetailTimedown from './Timedown'
export default {
  name: 'DetailBrowse',
  components: {
    DetailTimedown,
  },
  data () {
    return {
      yxf:4,
      wxz:5,
      ywg:1,
      sel:1,
      tabs: [
        {label: '火车票',num:0, id: 1},
        {label: '机票',num: 0, id: 2},
        {label: '酒店',num: 0, id: 3},
      ]
    }
  },
  methods: {
    select(item){
      this.sel = item.id;
    },
  },
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
  margin-left -35px
.header-input
  flex 1
  height .64rem
  line-height .64rem
  margin-left .2rem
  padding-left .2rem
  background #ffffff
  border-radius .1rem
  color #ccc
  margin-bottom .2rem

//选项卡
.f_header
  height 0.9rem
  display flex
.total
  //均分div
  flex 1
  padding-top .3rem
  padding-left 0.2rem
  background #f5f3f3
  border-right 0.03rem solid #cacaca
  color black
  text-align center
  float left
.total.active
  background #fff
  font-size .4rem
  color black
.text
  //flex: 1 1 auto;
  //三个不同内容的 div 平分空间
  flex 1
  //如果内容被修剪，则浏览器会显示滚动条，以便查看其余内容。
  overflow auto

//  选项卡里面的内容
.text-all
  width 100%
  background #ffffff
.text_one
  font-size .3rem
  color #8c8c8c
  margin 80px 0
  text-align center
.onefooter
  height 42px
  background #fff
  text-align center
  line-height 42px
  font-size 16px
  border-bottom 1px solid #cacaca
.more
  width 70%
  float left
  border-right 1px solid #cacaca
  margin-left -1px
  background -webkit-gradient(linear,0% 30%,0% 100%,from(#fefefe),to(#e0e0e0))
.goTop
  width 30%
  float left
  background -webkit-gradient(linear,0% 30%,0% 100%,from(#fefefe),to(#e0e0e0))

//底部
.footer
  height 9.8rem
  background #f6f5f5
.footerall
  height 100%
  //background #eeeeee
  padding 10px 0 0 0
  text-align center
  border-top 1px solid #cacaca
.textf1
  display inline-block
  margin 0 15px
.textf2
  //列变行
  display inline-block
  margin 0 15px
  color #18a9b9
.zuihou
  color #9e9e9e
  text-align center
  font-size 14px
  padding 10px


</style>
