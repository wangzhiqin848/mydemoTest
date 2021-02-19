<template>
  <div class="parentWrap">
    <div class="parent">
      <div class="child">
        <div class="in">
          <p @click="showSelects">全部分类
            <span class="iconfont arrow-icon"> &#xe6cc;</span></p>
        </div>
      </div>
      <div class="child">
        <div class="in">
          <select>
            <option name="1" value="1">全部目的地</option>
            <option name="2" value="2">北京</option>
            <option name="3" value="3">张家口</option>
            <option name="4" value="4">天津</option>
            <option name="5" value="5">承德</option>
            <option name="6" value="6">赤峰</option>
          </select>
          <span class="iconfont arrow-icon"> &#xe6cc;</span>
        </div>
      </div>
      <div class="child">
        <div class="in">
          <select>
            <option name="1" value="1">推荐排序</option>
            <option name="2" value="2">推荐排序</option>
            <option name="3" value="3">销量最高</option>
            <option name="4" value="4">价格最高</option>
            <option name="5" value="5">价格最低</option>
            <option name="6" value="6">热门评价</option>
            <option name="7" value="7">本周最热</option>
          </select>
          <span class="iconfont arrow-icon"> &#xe6cc;</span>
        </div>
      </div>
    </div>
    <van-tree-select v-show="showSelect" @click-nav="handleLeftClick" :items="items" :main-active-index.sync="activeIndex"/>
  </div>
</template>

<script>
export default {
  name: 'TripOption',
  data() {
    return {
      showSelect:false,
      items: [
        {
          id: 1,
          text: "一日游",
          children: [
            {
              text: "全部一日游",
              id: "1",
            },
          ],
        },
        {
          id: 2,
          text: "文化古迹",
          children: [
            {
              text: "全部文化古迹",
              id: "1",
            },
            {
              text: "古镇",
              id: "2",
            },
          ],
        },
        {
          id: 3,
          text: "交通",
          children: [
            {
              text: "全部交通",
              id: "1",
            },
          ],
        },
        {
          id: 4,
          text: "游船",
          children: [
            {
              text: "全部游船",
              id: "1",
            },
          ],
        },
        {
          id: 5,
          text: "游乐场",
          children: [
            {
              text: "全部游乐场",
              id: "1",
            },
            {
              text: "主题乐园",
              id: "2",
            },
          ],
        },
      ],
      activeIds: [1, 2, 3, 4],
      activeIndex: 0,
    };
  },
  methods: {
    showSelects () {
      this.showSelect = !this.showSelect
      if (this.showSelect) {
        this.showSelect = true
      } else {
        this.showSelect = false
      }
    },
    handleLeftClick(idx){
      this.activeIndex = idx;
    }
  }
};
</script>

<style lang="stylus" scoped>
*{
  margin: 0;
  padding: 0;
}
//  全部分类的行高
 .van-tree-select__nav >>> .van-sidebar-item{
   line-height: 50px;
   height: 50px;
 }
//  全部分类子级
 .van-sidebar-item >>> .van-sidebar-item__text{
   padding-left: 15px;
 }
 .van-tree-select__content{
   padding-left: 15px;
   background: #f1f1f1;
 }
 select{
  /*清除默认的select样式*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 60%;
}
.parentWrap{
  overflow: hidden;
  position: relative;
  border-bottom: solid 1px #eee;
}
.parent{
  overflow: hidden;
  margin-right: -20px;
}
.child{
  float: left;
  width: 33%;
}
.in{
  margin-right: 2px;
  height: 31px;
  border-right: solid 1px #eee;
  margin-left: 22px;
  margin-top: 11px;
}
.text{
  color: black;
  font-size: 14px;
  float: left;
}
</style>
