<template>
  <div>
    <div class="search iconfont">
      <input class="search-input" type="text" placeholder="请输入目的地进行搜索" />
      <span class="icon">&#xe632;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaneSearch'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
  height .72rem
  padding 0 .1rem
  background $bgColor
  position relative
  .icon
    display block
    position absolute
    color #ddd
    left 20%
    top 20%
  .search-input
    position absolute
    box-sizing border-box
    width 97%
    height .62rem
    padding 0 .1rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #b5b6b6
</style>
