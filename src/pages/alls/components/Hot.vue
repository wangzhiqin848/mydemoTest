<template>
  <div>
    <!-- 第一部分 -->
    <div class="header">
      <!-- 图片上灰色的 -->
      <router-link to="/">
        <div class="iconfont jiantou">&#xe624;</div>
      </router-link>
      <img src="http://img1.qunarzz.com/sight/p0/1606/ca/ca99da755a0abcf090.water.jpg_375x170_45259533.jpg" alt="">
      <div class="text">
        本周热门榜单
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="jingdian">
      <div class="jing">TOP景点</div>
<!--      <router-link to="/Line">-->
<!--        <div class="lu">TOP路线</div>-->
<!--      </router-link>-->
      <router-link to="/xian">
        <div class="lu">TOP路线</div>
      </router-link>

    </div>
    <!--第三部分 -->
    <div class="content">
      <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
          <div class="tupian">
            <img class="item-img" :src="item.imgUrl"/>
          </div>
          <div>
            <p class="item-title">{{item.title}}</p>
            <p class="item-pl">{{item.pl}}<i class="tiao">条评论</i></p>
            <p class="item-money"><i class="qian">￥</i>{{item.money }}<i class="qi">起</i></p>
          </div>
          <div>
            <div class="three">
              <div class="icon">
                <div class="iconfont back-icon">&#xe63f;</div>
                <div class="name">{{item.name}}</div>
                <div class="iconfont star">&#xe608;&#xe608;&#xe608;&#xe608;&#xe608;</div>
                <div class="data">{{item.date}}</div>
                <div class="ping">{{item.ping}}</div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AllsHot',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
img
  width 100%
.img-hs
  position absolute
  left 0
  bottom 410px
  width 100%
  color #ffffff
  background linear-gradient(to bottom,rgba(0,0,0,.2))
  margin-top 50px
.text
  position absolute
  font-weight bold
  font-size 25px
  color #ffffff
  margin-top -80px
  margin-left 130px
.content span
  font-size 25px
.tupian
  width 100px
  height 100px
  margin-left 14px
.jiantou
  position absolute
  margin-top 6px
  margin-left 4px
/* 第二部分 */
.jingdian
  display flex
  padding 20px
  font-size 20px
.jing
  flex 1
  color $bgColor
  margin-left 40px
.lu
  flex 1
  color #000
  margin-right 40px
/* 第三部分 */
.iconfont
  color #c6c2c2
.item-img
  width 100px
  height 100px
.item-title
  font-size 19px
  margin-left 130px
  position absolute
  margin-top -95px
.item-pl
  color $bgColor
  font-size 15px
  position absolute
  left 132px
  bottom 120px
.tiao
  color #878484
  font-size 8px
.item-money
  font-size 20px
  color #ef920e
  font-weight bold
  position relative
  top -22px
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
  top 130px
  margin-left 340px
  font-size 14px
  color #bbb8b8
.name
  margin-left 45px
  position absolute
  top 130px
.ping
  font-size 13px
  color #999797
  line-height 18px
.star
  color #eec080
  margin-left 80px
  position absolute
  top 130px
  font-size 8px

.icon
  margin 4px


</style>

