<template>
  <div class="header">
    <div>
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      <span v-for="item of list" :key="item.id">
      <i class="text">
        {{item.name}}
      </i>
  </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeekTwo',
  props:{
    list:Array
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.header
  width 100%
  position absolute
  line-height 45px
  background $bgColor
  color #ffffff
.iconfont
  color #ffffff
  position absolute
  top -1px
span
  margin-left 160px
.text
  position absolute
  top -1px

</style>
