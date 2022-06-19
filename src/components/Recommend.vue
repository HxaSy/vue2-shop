<template>
    <div class="recommend">

        <!-- 导入组件--标签 -->
            <Tab>
            <!-- 往插槽为 猜你喜欢 填充内容 -->
            <!-- <keep-alive> -->
                <template #like>
                    <GoodShowInfo></GoodShowInfo>
                </template>

                <!-- 往插槽 今日推荐 添加内容 -->
                <template #today>
                    <GoodShowInfo></GoodShowInfo>
                </template>

                <template #hot>
                    <GoodShowInfo></GoodShowInfo>
                </template>
            <!-- </keep-alive> -->

        </Tab>

    </div>
</template>

<script>

import GoodShowInfo from '@/components/GoodShowInfo.vue'
import Tab from '@/components/TopBar/Tab.vue'

export default {

  components: {
    Tab,
    GoodShowInfo
  }

}
</script>

<style lang="less" scoped>
    .recommend{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        .title{
          font-size: 23px;
          text-align: center;
          line-height: 50px;
          width: 100%;
          height: 50px;
        }
    }
</style>
