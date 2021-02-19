<template>
  <div class="search">
    <div class="search-left">
      <router-link tag="div" to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
    <div class="search-center">
      <label>
        <input v-model="keyword" class="search-input" type="text" placeholder="景点门票" />
      </label>
    </div>
    <div class="search-right">
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketSearch',
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  display flex
  line-height $headerHeight
  border-bottom solid 1px #eee
.search-left
  width 26px
  float left
  .iconfont
    text-align center
    font-size 14px
    font-weight bold
    margin-left 14px
    margin-top 3px
.search-input
  box-sizing border-box
  width 280px
  height 30px
  background #eee
  border-radius 50px
  line-height 36px
  margin-left 16px
  font-size 16px
  text-align center
::-webkit-input-placeholder
  color:black
.search-right
  width 50px
  font-size 15px
  color black
  text-align center
</style>
