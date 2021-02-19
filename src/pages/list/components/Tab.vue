<template>
  <div class="tab-title">
    <ul class="ct-tab">
      <li class="name" v-for="(item,index) of change"
          :key="item.id"
          :class="{'active':isActive==index}"
          @click="cx(index)"
      >
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListTab',
  props: {
    change: Array
  },
  data () {
    return {
      isActive: 0
    }
  },
  methods: {
    cx (index) {
      this.isActive = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab-title
  background url("https://s.qunarzz.com/piao_topic/image/touch/custom/2018/2916bangdan/tab_bgd.jpg") no-repeat
  background-size 100%
  background-size cover
  top 0
  position sticky
  .ct-tab
    width 100%
    display flex
    text-align center
    .name
      flex 1
      top 0
      left 0
      bottom 0
      right 0
      margin auto
      line-height .82rem
      margin-top -0.03rem
    .active
      background #e86947
      color #fff
      font-weight bold
//.tab-title ul li:hover{
//  background #e86947
//  color #fff
//  font-weight bold
//}
</style>
