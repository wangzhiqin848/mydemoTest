<template>
  <div class="bottom">
    <div class="bottom-up">
      <button type="button" class="up">上一页</button>
      <p class="number">1/48</p>
      <button type="button" class="down">下一页</button>
    </div>
    <div class="bottom-down">
      <p class="where">去哪儿门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketBottom'
}
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}
.bottom{
  padding-top: 0.5rem;
  position: relative;
  top: 44.8rem;
  bottom: 0;
  background: #f5f5f5;
}
.number{
  line-height: 0.5rem;
  padding-left: 0.5rem;
  font-size: 0.3rem;
}
.bottom-up{
  display: flex;
}
.up{
  flex: 1;
  margin-left: 0.5rem;
  border: 1px solid #25a4bb;
  border-radius: 2%;
  height: 0.5rem;
}
.down{
  flex: 1;
  color: #25a4bb;
  border: 1px solid #25a4bb;
  border-radius: 2%;
  background: #fff;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 0.5rem;
}
.where{
  margin-top: 0.4rem;
  padding-bottom: 0.2rem;
  font-size: 0.35rem;
  text-align: center;
  color: #25a4bb;
}
</style>
