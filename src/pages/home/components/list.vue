<template>
  <div>
    <div class="list">
      <ul>
        <li class="iconfont border-icon">
          <router-link to="/map">
            <p>
              &#xe60e;
              {{ this.city }}
            </p>
          </router-link>
        </li>
        <li class="iconfont border-icon">
          <router-link to="/list">
            <p>
              &#xe689;
              必游榜单
            </p>
          </router-link>
        </li>
        <li class="iconfont">
          <router-link to="/plane">
            <p>
              &#xe605;
              去哪儿攻略
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeList',
    props: {
      city: String
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    margin-top .3rem
    height .9rem
    margin-bottom -.175rem
  .list ul
    display flex
    text-align center
    border-top 1px solid #eee
    li
      flex 1
      line-height .9rem
      color #212121
      p
        color #212121
        font-size .28rem
    .border-icon
      border-right 1px solid #eee
</style>
