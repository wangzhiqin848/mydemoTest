<!--隐私政策-->
<template>
  <div>
    <div v-for="item of list" :key="item.id">
      <div>
        {{item.tt}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailSecret",
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
