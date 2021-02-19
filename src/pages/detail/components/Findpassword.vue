<template>
  <div>
    <div class="back">&#xe624;</div>
    <h2 class="one">请输入账户名</h2>
    <div class="two">请输入要找回密码的账户名</div>
    <div class="three">
      <div class="text">
        <span class="t1">账户名</span>
        <span class="t2">请输入手机号/邮箱/用户名</span>
      </div>
    </div>
    <div class="footer">
      <div>
        <button class="textfooter">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFindpassword"
}
</script>

<style lang="stylus" scoped>
.back
  font-family iconfont !important
  color #25a4bb
  font-size 0.5rem
  padding-left 0.3rem
  padding-top 0.2rem
.one
  text-align center
  padding-top .5rem
  font-size .7rem
  color #212121
.two
  padding-top .5rem
  font-size .35rem
  text-align center
.three
  width 100%
  height 0.9rem
  margin-top 0.9rem
  border-top 0.03rem solid #cacaca
  border-bottom 0.03rem solid #cacaca
.text
  margin-left .3rem
  margin-top .3rem
  font-size 0.36rem
.t1
  //  加粗
  font-weight bold
.t2
  margin-left .3rem
  color #ccc
.footer
  padding-top .7rem
.textfooter
  text-align center
  width 92%
  height 1rem
  background-color #ff9a14
  font-size .5rem
  color #fff
  border-radius .02rem
  margin-left 0.33rem
</style>
