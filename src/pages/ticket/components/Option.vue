<template>
  <div class="parentWrap">
    <div class="parent">
      <div class="child"  >
        <div class="in">
          <p @click="showSelects">
            全部分类
            <span class="iconfont arrow-icon"> &#xe6cc;</span></p>
        </div>
      </div>
      <div class="child">
        <div class="in">
          <select>
            <option name="recommend" value="recommend">推荐排序</option>
            <option name="way" value="way">离我最近</option>
            <option name="high" value="high">人气最高</option>
          </select>
          <span class="iconfont arrow-icon"> &#xe6cc;</span>
        </div>
      </div>
    </div>
    <van-tree-select v-show="showSelect" @click-nav="handleLeftClick" :items="items" :main-active-index.sync="activeIndex" />
  </div>
</template>

<script>
  export default {
    name: "TicketOption",

    data() {
      return {
        showSelect:false,
        items: [
          {
            id: 1,
            text: "户外拓展",
            children: [
              {
                text: "全部户外拓展",
                id: "1",
              },
              {
                text: "真人cs",
                id: "2",
              },
              {
                text: "拓展",
                id: "3",
              },
              {
                text: "骑马",
                id: "4",
              },
              {
                text: "攀岩",
                id: "5",
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
                text: "古建筑",
                id: "2",
              },
              {
                text: "遗址",
                id: "3",
              },
              {
                text: "寺庙",
                id: "4",
              },
              {
                text: "陵墓陵园",
                id: "5",
              },
              {
                text: "故园",
                id: "6",
              },
            ],
          },
          {
            id: 3,
            text: "农家度假",
            children: [
              {
                text: "全部农家度假",
                id: "1",
              },
              {
                text: "农家乐",
                id: "2",
              },
              {
                text: "生态园",
                id: "3",
              },
              {
                text: "采摘",
                id: "4",
              },
              {
                text: "度假村",
                id: "5",
              },
              {
                text: "庄园",
                id: "6",
              },
            ],
          },
          {
            id: 4,
            text: "展馆",
            children: [
              {
                text: "全部展馆",
                id: "1",
              },
              {
                text: "博物馆",
                id: "2",
              },
              {
                text: "展览馆",
                id: "3",
              },
              {
                text: "纪念馆",
                id: "4",
              },
              {
                text: "科技馆",
                id: "5",
              },
              {
                text: "人文艺术馆",
                id: "6",
              },
            ],
          },
          {
            id: 5,
            text: "公园",
            children: [
              {
                text: "全部公园",
                id: "1",
              },
              {
                text: "园林",
                id: "2",
              },
              {
                text: "主题公园",
                id: "3",
              },
              {
                text: "博览园",
                id: "4",
              },
              {
                text: "地址公园",
                id: "5",
              },
              {
                text: "森林公园",
                id: "6",
              },
            ],
          },
        ],
        activeIds: [1, 2, 3, 4, 5, 6],
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
  * {
    margin: 0;
    padding: 0;
  }
  .van-tree-select{
    position: absolute;
    font-size: .3rem;
    left: 0;
    top: 43px;
    z-index: 9999;
    width: 100%;
  }
  //  要改的元素的父级>>>要改的元素+样式
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
    width: 50%;
  }
  .in{
    background: #ffffff;
    width: 100%;
  }
  .parentWrap {
    position: relative;
    border-bottom: solid 1px #eee;
  }
  .parent {
    overflow: hidden;
    margin-right: -20px;
  }
  .child {
    float: left;
    width: 50%;
  }
  .in {
    margin-right: 2px;
    height: 31px;
    margin-left: 52px;
    margin-top: 11px;
  }
</style>
