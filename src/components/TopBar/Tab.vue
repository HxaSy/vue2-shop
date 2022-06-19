<template>
  <van-tabs v-model="active" @click="change">
    <van-tab title="猜你喜欢">
        <slot name="like">后备隐藏能源</slot>
    </van-tab>
    <van-tab title="今日推荐">
        <slot name="today">后备隐藏能源</slot>
    </van-tab>
    <van-tab title="最近热卖">
        <slot name="hot">后备隐藏能源</slot>
    </van-tab>

</van-tabs>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    change () {
      // this.$store.commit({
      //   type: 'change',
      //   num: this.active
      // })
      this.$store.dispatch({
        type: 'change',
        num: this.active
      })
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabs{
    width: 100%;
}
/deep/ .van-tabs__wrap{
    width: 100%;
}
.van-tab__pane{
    display: flex;
    flex-wrap: wrap;
}
</style>
