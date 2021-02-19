<!--关于我们-->
<template>
  <div class="all">
    <div class="header">
      <div class="header-left">
        <!--返回到首页-->
        <router-link to="/">
          <div class="iconfont back-icon">
            <strong>&#xe624;</strong>
          </div>
        </router-link>
      </div>
      <div class="header-text">关于我们</div>
    </div>
    <div class="qn_pa10 qn_lh qn_font14">
      <p class="p_text">去哪儿网（Qunar.com）是中国领先的无线和在线旅游平台，网站上线于2005年5月，公司总部位于北京。去哪儿网通过网站及移动客户端的全平台覆盖，随时随地为旅行者提供国内外机票、酒店、度假、旅游团购、及旅行信息的深度搜索，帮助旅行者找到优质产品和信息，聪明地安排旅行。去哪儿网凭借其便捷、先进的智能搜索技术对互联网上的旅行信息进行整合，为用户提供实时、可靠、全面的旅游产品查询和信息比较服务。</p>
      <p class="p_text">根据2011年12月艾瑞监测数据，在旅行类网站月度访问次数统计中，去哪儿网以超过7460万人次高居榜首。截至2012年6月底，去哪儿网实时搜索超过400家机票和酒店代理商网站，搜索范围覆盖全球范围内超过140,000家酒店、57,000条机票航线、180,000条度假线路、超过8,500个旅游景点、超过百万份游记攻略，并且每日提供逾1860种旅游团购产品。去哪儿网移动客户端“去哪儿旅行”是中国旅行类较受欢迎的移动应用，其拥有超过1180万用户的激活量，并在苹果中国App Store公布的“App Store Rewind 2011”中荣膺中国原创旅行类应用之冠。</p>
      <span class="qn_grey qn_font12">如果您需要任何帮助，请拨打咨询电话：</span>
      <div class="qn_btn grey">
        <a href="tel:95117">95117</a>
      </div>
    </div>
    <!--  触屏版、电脑版  -->
    <div class="footer">
      <ul class="mobile_pc qn_btop clearfix">
        <li class="active">
          <a>触屏版</a>
        </li>
        <router-link to="/">
          <li class="pc">电脑版</li>
        </router-link>
      </ul>
      <div class="yijian">
        <span>Qunar 京ICP备05021087</span>
        <a class="qn_ml25">意见反馈</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailAbout',
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.all
  background #f3f3f3
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
.footer
  height 5.1rem
.mobile_pc
  padding 10px 0 0 0
  text-align center
.qn_pa10
  padding 10px
.qn_grey
  font-size 12px
  color #8c8c8c

// 中间文字部分样式
.p_text
  text-indent 2em   /*首行缩进2字符*/
  line-height 23px   /*行距*/
  color #000

// 咨询电话
.qn_lh
  line-height: 1.5

//  95117 电话
.qn_btn.grey a
  border 1px solid #cacaca
  color #000
  background -webkit-gradient(linear,0% 0,0% 100%,from(#fefefe),to(#e0e0e0));

.qn_btn a
  //display是控件的css属性之一，表示的是bai显示模式。none表示不显示在网页du上，但是代码存在;
  // bolck是此元素将显示为块级元素（会独占一行显示），此元素前到后会带有换行符。
  display block
  font-size 18px
  line-height 40px
  text-align center
  color #fff
  //线性渐变
  //第一个参数表示渐变类型（type），可以是linear（线性渐变）或者radial（径向渐变）
  // 第二个参数和第三个参数，都是一对值，分别表示渐变起点和终点。
  background -webkit-gradient(linear,0% 0,0% 100%,from(#ffa442),to(#ff801a));

//  触屏版、电脑版
.mobile_pc li
  display inline-block
  margin 0 15px
  list-style none
.mobile_pc .active a
  color: black;
.mobile_pc a
  font-size 14px
  color #25a4bb
.qn_btop
  border-top: 1px solid #cacaca
.pc
  color #25a4bb
.yijian
  color #9e9e9e
  text-align center
  font-size 14px
  padding 10px
.yijian a
  color #9e9e9e
  height 33px

</style>
