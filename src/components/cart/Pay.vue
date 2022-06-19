<template>
    <van-submit-bar :price="(this.$store.getters.cartTotalPrice) * 100" button-text="提交订单" @submit="onSubmit">
        <!-- <van-checkbox v-model="isfull" @click="changeAllState()">全选</van-checkbox> -->
        <!-- 左侧的全选 -->
    <!-- <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="cbFull" :checked="this.$store.state.cart.statusAll" @change="changeAllState($event)"/>
      <label class="custom-control-label" for="cbFull">全选</label>
    </div> -->
    <All></All>
    </van-submit-bar>
</template>

<script>

import All from '@/components/cart/All.vue'

export default {

  data () {
    return {
      isfull: false
    }
  },
  components: {
    All
  },
  methods: {
    onSubmit () {
      // console.log(this.$store.getters.fullChoose)
    }
    // changeAllState () {
    //   if (this.$store.state.cart.statusAll === true) {
    //   // console.log(this)
    //     this.isfull = false
    //   }
    //   if (this.$store.state.cart.statusAll === false) {
    //   // console.log(e)
    //     this.isfull = true
    //   }
    //   // console.log(this.$store.state.cart.statusAll)
    //   this.$store.dispatch({
    //     type: 'changeAllState',
    //     checked: this.isfull
    //   })
    // }
  }

}
</script>

<style lang="less" scoped>

.van-submit-bar{
    position: fixed;
    bottom: 50px;
}

</style>
