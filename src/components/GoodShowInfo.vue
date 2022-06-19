<template>
    <div class="product-show">
        <!-- 商品的基本信息,v-for渲染 -->
        <div class="goods" v-for="item in list" :key="item.goods_id" @click="detail(item.goods_id)">
            <!-- 商品图片 -->
            <img v-lazy="item.goods_img2" :key="item.goods_img2" alt="" />
            <!-- 商品描述,价格,收藏-->
            <div class="about">
                <h3>{{item.goods_content}}</h3>
                <span class="price">￥{{(item.goods_price).toFixed(2)}}</span>
                <div class="star">
                <van-icon name="star-o" />
                <span>{{item.goods_star}}</span>
                </div>
            </div>
            <!-- 购买按钮 -->
            <van-button type="primary" size="large" color="pink">立即购买</van-button>
           </div>
    </div>
</template>

<script>

import { request } from '@/utils/request.js'

export default {
  data () {
    return {
      // 存放所有商品的信息
      list: [],

      // 存放单个商品的信息
      info: []
    }
  },
  methods: {

    // 获取商品信息,并赋值
    async getGoodInfo () {
      const { data: res } = await request.post('/getGoodInfo', { type: this.$store.state.product.i + 1 })
      this.list = res.data
    },

    // 点击商品跳转到商品详情
    async detail (id) {
      const { data: res } = await request.post('/product/detail', { id: id })
      this.info = res.data

      // console.log(this.info)
      this.$store.dispatch({
        type: 'getInfo',
        item: this.info
      })
      this.$router.push('/product/detail')
    }
  },
  created () {
    this.getGoodInfo()
  }
}
</script>

<style lang="less" scoped>
    .product-show{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background-color: #EFF1F3;
    }
    .goods{
        background-color: #fff;
        width: 48%;
        margin-left: 5px;
        margin-top: 10px;
        h3{
            width: 100%;
            font-weight: 400;
            padding-bottom: 5px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
        }
        .price{
            color: #FF455B;
        }
        img{
          width: 100%;
          height: 230px;
        }
        .about{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 5px;
        }
        .van-button{
          height: 30px;
        }
    }
</style>
