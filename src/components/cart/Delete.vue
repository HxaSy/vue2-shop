<template>
    <van-submit-bar button-text="删除" @submit="deleteCart">
        <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
        <All></All>
    </van-submit-bar>
</template>

<script>

import All from '@/components/cart/All.vue'
import { Dialog, Toast } from 'vant'
import { cartRequest } from '@/utils/request.js'
const request = cartRequest

export default {
  data () {
    return {
      checked: false
    }
  },
  components: {
    All
  },
  methods: {
    async deleteCart () {
      // console.log(this.$store.state.cart.cartInfo)
      const list = this.$store.state.cart.cartInfo
      if (list.every(item => item.cart_choose === 0 || item.cart_choose === false)) {
        console.log(list)
        return Toast('请选择商品')
      }
      Dialog.confirm({
        message: '确认要删除该商品吗'
      }).then(() => {
        list.filter(item => item.cart_choose).forEach(item => request.post('/updateDel', { del: 1, cart_id: item.cart_id }))
        this.$router.go(0)
      })
    }
  }
}
</script>

<style lang="less" scoped>

.van-submit-bar{
    position: fixed;
    bottom: 50px;
}

/deep/ .van-submit-bar__bar{
    justify-content: space-between;
}
</style>
