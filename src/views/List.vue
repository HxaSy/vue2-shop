<template>
    <div class="list-container">

      <!-- 左侧导航栏,通过传下标更换 -->
      <van-sidebar v-model="active" ref="left">
          <!-- 分类名称 -->
          <van-sidebar-item :title="item.text"
          v-for="(item,index) in list"
          :key="item.list_id"
          @click="getListDetail(index)"
          />
      </van-sidebar>

      <!-- 右侧分类内容 -->
      <div class="right-content" ref="right">

          <!-- 分类类别及图标 -->
          <ListDetail>
          <van-grid :column-num="3" icon-size="80px">
              <van-grid-item v-for="(item,index) in items" :key="index" :icon="item.img_url" :text="item.name"/>
          </van-grid>
          </ListDetail>

          <!-- 推荐商品 -->
          <ListProduct></ListProduct>
          <!-- <Recommend></Recommend> -->
      </div>

      <!-- 底部导航 -->
      <NavBar></NavBar>
    </div>
</template>

<script>

import { request } from '@/utils/request.js'
import ListDetail from '@/components/ListDetail.vue'
// import Recommend from '@/components/Recommend.vue'
import ListProduct from '@/components/ListProduct.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  data () {
    return {
      // 存放左侧导航信息
      list: [],

      // 存放右侧分类信息
      items: [],

      // 控制
      active: 0
    }
  },
  components: {
    ListDetail,
    // Recommend,
    ListProduct,
    NavBar
  },
  methods: {
    async getProductList () {
      const { data: res } = await request.get('/products/list')
      this.list = res.data
    },
    async getListDetail (i) {
      const { data: res } = await request.post('/list/detail', { type: i })
      this.items = res.data
      this.$refs.right.scrollTop = 0
    }
  },
  created () {
    this.getProductList()
    this.getListDetail(0)
  }
}
</script>

<style lang="less" scoped>

.list-container{
  display: flex;
  flex: 1;
  text-align: center;
  height: 100%;
  padding-bottom: 50px;
  overflow: hidden;
  box-sizing: border-box;

  // 左侧导航
  .van-sidebar{
    max-height: 5000px;
    flex: 1;
    overflow: hidden;
  }

  // 右侧分类
  .right-content{
    flex: 4;
    max-height: 5000px;
    overflow-y: auto;
    .van-grid-item__text{
    font-size: 18px;
    }
    .van-grid{
      margin-bottom: 20px;
    }
  }

}
</style>
