<template>
    <div class="homelistdetail" ref="top">
        <van-nav-bar title="标题" left-text="返回" left-arrow fixed @click-left="$router.back()" @click-right="$router.push('/cart')">
            <template #right>
              <van-icon name="cart-o" size="18" color="#ccc"  />
            </template>
        </van-nav-bar>

        <Tab2 style="padding-top:86px;">
            <template>
                <GoodShowInfo></GoodShowInfo>
            </template>
        </Tab2>
    </div>
</template>

<script>

import Tab2 from '@/components/TopBar/Tab2.vue'
import GoodShowInfo from '@/components/GoodShowInfo.vue'
export default {
  components: {
    Tab2,
    GoodShowInfo
  }
}
</script>

<style lang="less" scoped>

    /deep/ .list{
        width: 100%;
        background-color: #fff;
        position: fixed;
        left: 0;
        top: 46px;
        z-index: 1;
    }
</style>
