<template>
  <div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-header">
          <img class="item-img" :src="item.imgUrl"/>
          <button class="item-superscript">{{item.superscript}}</button>
          <span class="item-desc">{{ item.desc }}</span>
          <div class="part1">
            <span class="iconfont star">&#xe647;&#xe647;&#xe647;&#xe647;&#xe647;</span>
            <span class="item-comment">{{ item.comment }}</span>
            <span class="discuss">评论</span>
          </div>
          <div class="part2">
            <span class="symbol">￥</span>
            <span class="item-sell">{{ item.sell }}</span>
            <span class="qi">起</span>
          </div>
          <span class="item-label">{{ item.label }}</span>
          <span class="item-region">{{ item.region }}</span>
        </div>
        <hr>
        <div class="item-bottom">
          <div class="item-price">
            <span class="item-ticket">{{ item.ticket }}</span>
            <span class="item-money"><span class="symbol1">￥</span>{{ item.money }}</span>
          </div>
          <hr>
          <div class="item-pay">
            <span class="item-passage">{{ item.passage }}</span>
            <span class="item-cash"><span class="symbol1">￥</span>{{ item.cash }}</span>
          </div>
          <div class="hr"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TicketHeader',
  props: {
    list: Array
  }
}
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  position: absolute;
  line-height: 28px;
  width: 100%;
}

.item {
  padding: 0.2rem;
}
.item-superscript {
  font-size: 0.05rem;
  width: 1.3rem;
  position: absolute;
  top: 0.28rem;
  left: 0.3rem;
  border-bottom-right-radius: 0.2rem;
  color: white;
  background: #0fdcf7;
}
.item-desc{
  padding-left: 0.2rem;
  font-size: 0.45rem;
}

.star{
  color: #ffb436;
  margin-right: 0.2rem;
  padding-left: 0.2rem;
}
.symbol{
  padding-left: 0.2rem;
  color: #ffb436;
  font-size: 0.3rem;
}
.qi{
  font-size: 0.32rem;
}
.item-sell{
  color: #ff8300;
  font-size: 0.45rem;
  margin-left: -0.1rem;
}
.item-label{
  color: #25a4bb;
  position: relative;
  top: -.1rem;
  padding-left: 0.2rem;
}
.item-region{
  float: right;
  margin-top: -0.55rem;
  font-size: 0.32rem;
}
.hr{
  height: 0.2rem;
  background: #f5f5f5;
  display: block;
  position: absolute;
  width: 8.3rem;
  margin-left: -0.2rem;
}

.item-money,.item-cash{
  float: right;
  font-size: 0.35rem;
  color:#ffb436 ;
  line-height: 0.8rem;
  margin-top: -0.03rem;
  margin-right: 0.2rem;
}
.symbol1{
  color: #ffb436;
  font-size: 0.3rem;
  margin-top: -1rem;
}
.item-img {
  float: left;
  transform: scale(0.92);
}
.item-bottom,.item-pay{
  color: #766f6f;
  font-size: 0.3rem;
}
.item-bottom {
  line-height: 0.8rem;
}
</style>
