<template>
  <div>
    <div>
      <div class="list">
        <ul>
          <li class="right-border">
            <router-link to="/city">
              <p>
                去哪儿旅行榜
              </p>
            </router-link>
          </li>
          <li>
            <router-link to="/list">
              <p>
                达人问答
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaneAnswer'
}
</script>

<style lang="stylus" scoped>
.list
  height .9rem
.list ul
  display flex
  text-align center
  border-top 1px solid #eee
  border-bottom 1px solid #eee
  li
    flex 1
    line-height .9rem
    color #212121
    p
      color #1ba9ba
      font-size .30rem
  .right-border
    border-right 1px solid #eee
</style>
