<template>
  <div>
    <!-- 第一部分 -->
    <div class="header">
      <router-link to="/">
        <div class="iconfont  jiantou">&#xe624;</div>
      </router-link>
      <span class="text">一周最热</span>
    </div>
    <!-- 第二部分 -->
    <div class="luxian">
      <router-link to="/alls">
        <div class="jing">TOP景点</div>
      </router-link>
      <div class="lu">TOP路线</div>
    </div>
    <!-- 第三部分 -->
    <div class="content">
      <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
          <div class="tupian">
            <img class="item-img" :src="item.lineImg"/>
          </div>
          <div>
            <div class="tuo">
               <span class="iconfont lutuo">&#xe688;</span>
               <span class="jingxuan">精选</span>
            </div>
            <p class="item-title">{{item.lineTitle}}</p>
            <p class="item-shou"><i class="shou">已售：</i>{{item.lineShou}}</p>
            <p class="item-money"><i class="qian">￥</i>{{item.lineMoney }}<i class="qi">起</i></p>
          </div>
            <div class="three">
              <div class="icon">
                <div class="iconfont back-icon">&#xe63f;</div>
                <div class="name">{{item.lineName}}</div>
                <div class="iconfont star">&#xe608;&#xe608;&#xe608;&#xe608;&#xe608;</div>
                <div class="data">{{item.lineDate}}</div>
                <div class="ping">{{item.linePing}}</div>
              </div>
            </div>
            <div>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "XianLu",
  props:{
    list:Array
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
/* 第一部分 */

.header
  width 100%
  display flex
  line-height $headerHeight
  background $bgColor
  color #ffffff
.iconfont
  color #ffffff
.text
  margin-left 160px
/* 第二部分 */
.luxian
  position: absolute;
  margin-left .6rem
  margin-top 16px
  font-size .4rem
.jing
  color #000
  margin-left 50px
.lu
  color $bgColor
  margin-left 230px
  margin-top -20px
/* 第三部分 */
.content
  margin-top 1rem
.tuo
  position absolute
  font-size 0.06rem
  top 12px
  left .15rem
.jingxuan
  margin-left 131px
  background #f5d1a6
  width 24px
.lutuo
  text-align center
  position absolute
  top 0.01rem
  left 0.12rem
  color #eec080
  margin-left 2rem
  font-size 0.06rem
  background #4c3e29
  width 25px
  height 13px
.back-icon
  color #c6c2c2
.item-img
  padding 8px
  width 100px
  height 100px
.item-title
  font-size 16px
  margin-left 162px
  position absolute
  margin-top -105px
.item-shou
  color #b4b0b0
  font-size 10px
  position absolute
  left 2.3rem
  bottom 120px
.tiao
  color #878484
  font-size 8px
.item-money
  font-size 20px
  color #ef920e
  font-weight bold
  position relative
  top -30px
  left -14px
.qi
  font-size 8px
  color #878484
  font-weight normal
.qian
  margin-left 130px
  font-size 8px
  font-weight normal
.three
  background #f6f2f2
  margin 8px
.data
  float right
  position absolute
  top 145px
  margin-left 320px
  font-size 14px
  color #bbb8b8
.name
  margin-left 45px
  position absolute
  top 145px
.ping
  font-size 13px
  color #999797
  line-height 18px
.star
  color #eec080
  margin-left 80px
  position absolute
  top 145px
  font-size 8px

.icon
  margin 4px
</style>
