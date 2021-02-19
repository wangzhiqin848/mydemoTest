<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
            <div class="icon-img" @click="goPage(item.id)">
              <img class="icon-img-content" :src="item.imgUrl" />
            </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  methods: {
    goPage: function (id) {
      if (id === '0001') {
        window.location.href = './#/ticket'
      } else if (id === '0002') {
        window.location.href = './#/trip'
      }else if (id==='0003'){
        window.location.href = './#/detailt/0001'
      }else if (id==='0004'){
        window.location.href = './#/detailt/0002'
      }else if(id==='0005'){
        window.location.href = './#/detailt/0003'
      }else if(id==='0007'){
        window.location.href = './#/detailt/0004'
      }else{
        window.location.href='./#/detailt/0005'
      }
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
