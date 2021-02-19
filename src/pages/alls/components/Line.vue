<template>
  <div>
    <!-- 第一部分 -->
    <div class="header">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      <span class="text">一周最热</span>
    </div>
    <!-- 第二部分 -->
    <div class="luxiang">
      <router-link to="/alls">
        <div class="jing">TOP景点</div>
      </router-link>
      <div class="lu">TOP路线</div>
    </div>
<!-- 第三部分 -->

  </div>
</template>

<script>
export default {
  name: "AllsLine",
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
.luxiang
  position absolute
  padding 20px
  font-size 20px
.jing
  color #000
  margin-left 50px
.lu
  color $bgColor
  margin-left 230px
  margin-top -20px
/* 第三部分 */

</style>
