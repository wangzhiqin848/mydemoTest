<template>
  <div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl"/>
        <button class="item-superscript">{{item.superscript}}</button>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <div>
            <span class="item-desc">{{ item.desc }}</span>
            <span class="item-shop">{{ item.shop }}</span>
          </div>
          <div class="item-price">
            <p class="item-sell">{{ item.sell }}</p>
            <div class="item-icon">
              <p class="symbol">￥</p>
              <p class="item-money">{{ item.money }}</p>
              <p class="rise">起</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TripHeader',
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
  }

  .item {
    padding: 0.2rem;
  }

  .item-superscript {
    background: #00afc7;
    font-size: 0.1rem;
    width: 60px;
    position: absolute;
    top: 0.25rem;
    left: 0.3rem;
  }

  .item-img {
    float: left;
    transform: scale(0.92);
  }

  .item-info {
    padding-top: 0.1rem;
    font-size: 0.3rem;
  }

  .item-title {
    line-height: 0.4rem;
    margin-bottom: 0.2rem;
  }

  .item-desc {
    color: #25a4bb;
    font-size: 0.2rem;
    margin-left: 0.25rem;
  }

  .item-shop {
    color: black;
    font-size: 0.25rem;
  }
  .item-price{
    padding-top: 0.2rem;
    color: #cacaca;
    font-size: 0.25rem;
  }
  .item-sell{
    margin-left: 0.1rem;
    float: left;
    margin-top: 0.2rem;
  }
  .item-icon{
    position: relative;
    top: 0.09rem;
  }
  .symbol{
    position: relative;
    right: 0.8rem;
    float: right;
    color: #e3a72e;
    margin-top: 0.1rem;
  }
  .item-money{
    position: relative;
    right: -3.9rem;
    font-size: .35rem;
    color: #e3a72e;
  }
  .rise{
    position: relative;
    right: -4.55rem;
    top: -0.25rem;
  }

</style>
