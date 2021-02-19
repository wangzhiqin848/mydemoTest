<!--验证码倒计时-->
<template>
  <div class="all">
    <div v-if="showtime===null" class="text" @click="send">获取验证码</div>
    <div v-else class="captcha-button">{{showtime}}</div>
  </div>
</template>

<script>
export default {
  name: 'DetailTimedown',
  data () {
    return {
      // 计时器,注意需要进行销毁
      timeCounter: null,
      // null 则显示按钮 秒数则显示读秒
      showtime: null
    }
  },
  methods: {
    // 倒计时显示处理
    countDownText (s) {
      this.showtime = `${s}s后重新获取`
    },
    // eslint-disable-next-line vue/no-parsing-error
    // 倒计时 60秒 不需要很精准
    countDown (times) {
      const self = this
      // 时间间隔 1秒
      const interval = 1000
      let count = 0
      self.timeCounter = setTimeout(countDownStart, interval)
      function countDownStart () {
        if (self.timeCounter == null) {
          return false
        }
        count++
        self.countDownText(times - count + 1)
        if (count > times) {
          clearTimeout(self.timeCounter)
          self.showtime = null
        } else {
          self.timeCounter = setTimeout(countDownStart, interval)
        }
      }
    },
    send () {
      //倒计时时间设置为60秒
      this.countDown(60)
    }
  }
}

</script>

<style lang="stylus" scoped>
.all
  display flex
  .text
    background #fdfbfb
    color #d7dce0
    display flex
    justify-content center
    align-items center
    width 2.2rem
    height .6rem
    border .01rem solid #ccc
    border-radius .04rem
    margin-left -0.6rem
    margin-top -0.03rem


</style>
