<template>
    <div class="home-container">

        <!-- 头部导航 -->
        <div class="nav-bar">
            <h4>商城</h4>
            <van-search
                v-model="value"
                placeholder="口红"
                input-align="left"
            />
            <van-icon name="chat-o"
                size="23px"
            />
        </div>

        <!-- 轮播图 -->
        <Swiper></Swiper>

        <!-- 首页部分分类 -->
        <Grid></Grid>

        <!-- 商品推荐 -->
        <Recommend></Recommend>

        <!-- 底部导航栏 -->
        <NavBar></NavBar>
    </div>
</template>

<script>

import Swiper from '@/components/Swiper.vue'
import Recommend from '@/components/Recommend.vue'
import Grid from '@/components/Grid.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  data () {
    return {

      // 搜索框输入的内容
      value: ''
    }
  },
  components: {
    Swiper,
    Recommend,
    Grid,
    NavBar
  }
}
</script>

<style lang="less" scoped>

  .home-container{
      padding-bottom: 50px;
      // background-color: #EFF1F3;

      // 头部
      .nav-bar{
          background-color: skyblue;
          display: flex;
          align-items: center;
          padding:0 0 0 10px;
          .van-search{
            width: 80%;
            background-color: skyblue;
            font-weight: 700;
          }
      }

  }

  // 图标放大镜的大小
 /deep/ .van-icon{
    width: 20px;
    height: 20px;
  }
</style>
