<template>
    <div class="cart-container">
        <van-nav-bar title="购物车" fixed :right-text="text" @click-right="deleteCart"/>
        <CardList></CardList>
        <component :is="componentId"></component>
        <NavBar></NavBar>
    </div>
</template>

<script>

import CardList from '@/components/cart/CartList.vue'
import Pay from '@/components/cart/Pay.vue'
import NavBar from '@/components/NavBar.vue'
import Delete from '@/components/cart/Delete.vue'
export default {

  data () {
    return {
      componentId: 'Pay',
      text: '编辑'
    }
  },
  components: {
    CardList,
    Pay,
    NavBar,
    Delete
  },

  // 删除购物车的商品
  methods: {
    deleteCart () {
      if (this.text === '编辑') {
        this.componentId = 'Delete'
        this.text = '完成'
      } else {
        this.componentId = 'Pay'
        this.text = '编辑'
      }
    }
  }

}
</script>

<style lang="less" scoped>
.cart-container{
    height: 100%;
}
.van-hairline--bottom::after{
    border-bottom-width: 5px;
}

.van-submit-bar{
    position: fixed;
    bottom: 50px;
}

</style>
