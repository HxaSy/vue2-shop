<template>
   <div class="card-list">

        <!-- 购物车列表 -->
        <!-- :thumb="item.img_url" -->
        <div class="card" v-for="item in list" :key="item.cart_id">
            <van-checkbox v-model:checked="item.cart_choose"></van-checkbox>
            <van-card
            :title="item.cart_title"
            :thumb="item.img_url"
            >
            <template #price>

                <!-- 购物车商品的价格 -->
                <div class="price">￥{{(item.cart_price).toFixed(2)}}</div>

                <!-- 购物车商品的数量 -->
                <div class="num">
                    <van-stepper v-model:value="item.cart_num" @change="changeNum(item)"/>
                </div>
            </template>
            <template #tags>
                <van-cell is-link @click="showPopup">{{item.cart_select}}</van-cell>
                <van-popup v-model="show" position="bottom" style="height:90%">内容</van-popup>
            </template>
            </van-card>

        </div>

    </div>

</template>

<script>

import { cartRequest } from '@/utils/request.js'
const request = cartRequest

export default {
  data () {
    return {
      checked: true,
      show: false,
      value: 1,
      list: []
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    async getCartInfo () {
      const { data: res } = await request.get('/cartInfo')
      this.list = res.data
    },
    // 更新购物车商品数量
    async changeNum (item) {
      await request.post('/update', { cart_num: item.cart_num, cart_id: item.cart_id })

      // console.log(data)
    },
    // 把购物车信息存到store
    setToStore () {
    }
  },
  created () {
    this.getCartInfo()
    // console.log(this.list)
    // if (this.list === undefined) return
    // this.$store.dispatch({
    //   type: 'getCartInfo',
    //   info: this.list
    // })
  },
  updated () {
    // console.log(this.list)
    if (this.list === undefined) return
    this.$store.dispatch({
      type: 'getCartInfo',
      info: this.list
    })
  }
}
</script>

<style lang="less" scoped>
.card-list{
    box-sizing: border-box;
    margin-top: 46px;
    // margin-bottom: 100px;
    padding:10px 10px 100px 10px;
    background-color: #DDE0E4;
    min-height: 100%;
    .card{
        box-sizing: border-box;
        display: flex;
        padding: 8px 16px;
        margin-bottom: 10px;
        background-color: #fff;
        flex: 1;
    }
    .van-checkbox{
        flex: 1;
    }
    .van-card{
        padding: 0;
        flex: 10;
        margin-top: 0;
        .van-card__title{
            font-weight: 700;
        }
        .van-cell{
            padding: 5px 16px 10px 0;
        }
        .van-cell__value--alone{
            color: #DEE1E6;
        }
        .van-card__price{
            display: flex;
            padding: 0 5px;
            justify-content: space-between;
            .price{
                font-size: 18px;
                color: red;
            }
        }
    }
    .van-card__thumb{
        width: 80px;
        height: 100px;
    }
}
</style>
