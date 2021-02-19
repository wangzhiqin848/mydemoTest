<template>
  <div>
    <div class="content">
      <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
          <div class="tupian">
            <img class="item-img" :src="item.imgUrl"/>
          </div>
          <div>
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <p class="item-money">
              <i class="qian">￥</i>
              <i class="money">{{item.money}}</i>
              <i class="qi">起</i>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutumnHeader',
  /* 接收 */
  props:{
    list:Array
  }
}
</script>

<style lang="stylus" scoped>
.content
  position absolute
  top 45px
img
  height 200px
.item-title
  font-size 18px
  padding 13px
.item-desc
  color #767373
  font-size 13px
  margin-left 13px
.item-money
  margin-top -60px
  padding 30px
  margin-left 320px
  color #ef9310
  font-size 18px
  font-weight bold
.qian
  color #e7bc78
  font-weight normal
  font-size 6px
.qi
  color #aaa6a6
  font-size 8px
  font-weight normal
</style>
