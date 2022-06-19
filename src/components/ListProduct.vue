<template>
    <!-- 定义分类列表和分类那里的商品tab -->
    <div class="tab1-container">

        <!-- 头部导航，包括综合、销量、新品 -->
        <!-- <ul>
            <li v-for="(item,i) in items" :key="i" @click="changeRed(i)" :class="{active:indexCurren=== i}">{{item}}</li>
        </ul> -->
        <Tab2></Tab2>

        <div class="show">
            <!-- 对应商品 -->
            <div class="product">
                <!-- 商品图片 -->
                <img src="https://s2.mogucdn.com/mlcdn/c45406/200911_0bc029df95096e7g3af1h173j949g_750x1000.jpg_400x534.v1cAC.40.webp" alt="" />
                <!-- 商品描述,价格,收藏 -->
                <div class="about">
                    <h3 class="title">兔耳朵网红卫衣</h3>
                    <span class="price">￥148</span>
                    <div class="star">
                        <van-icon name="star-o" />
                        <span>123</span>
                    </div>
                </div>
            </div>

            <div class="product">
            <!-- 商品图片 -->
            <img src="https://s2.mogucdn.com/mlcdn/c45406/200911_0bc029df95096e7g3af1h173j949g_750x1000.jpg_400x534.v1cAC.40.webp" alt="" />
            <!-- 商品描述,价格,收藏 -->
            <div class="about">
                <h3 class="title">兔耳朵网红卫衣</h3>
                <span class="price">￥148</span>
                <div class="star">
                <van-icon name="star-o" />
                <span>123</span>
                </div>
            </div>
            </div>

            <div class="product">
            <!-- 商品图片 -->
            <img src="https://s2.mogucdn.com/mlcdn/c45406/200911_0bc029df95096e7g3af1h173j949g_750x1000.jpg_400x534.v1cAC.40.webp" alt="" />
            <!-- 商品描述,价格,收藏 -->
            <div class="about">
                <h3 class="title">兔耳朵网红卫衣小兔子该i更改i</h3>
                <span class="price">￥148</span>
                <div class="star">
                <van-icon name="star-o" />
                <span>123</span>
                </div>
            </div>
            </div>

            <div class="product">
            <!-- 商品图片 -->
            <img src="https://s2.mogucdn.com/mlcdn/c45406/200911_0bc029df95096e7g3af1h173j949g_750x1000.jpg_400x534.v1cAC.40.webp" alt="" />
            <!-- 商品描述,价格,收藏 -->
            <div class="about">
                <h3 class="title">兔耳朵网红卫衣</h3>
                <span class="price">￥148</span>
                <div class="star">
                <van-icon name="star-o" />
                <span>123</span>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

import Tab2 from '@/components/TopBar/Tab2.vue'

export default {
  data () {
    return {
      indexCurren: 0,
      items: ['综合', '销量', '新品']
    }
  },
  components: {
    Tab2
  },
  methods: {
    changeRed (i) {
      this.indexCurren = i
    }
  }

}
</script>

<style lang="less" scoped>

    ul{
        display: flex;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
        margin-top: 20px;
        li{
            flex: 1;
            border-left: 1px solid #ccc;
        }
        .active{
            color: red;
        }
    }

    .show{
        display: flex;
        // flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px;
        .product{
            width: 49%;
            background-color: #fff;
            padding-bottom: 10px;
            img{
                width: 100%;
                height: 200px;
            }
            .about{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin: 5px;
                .title{
                    display: inline-block;
                    width: 100%;
                    font-weight: 400;
                    padding-bottom: 5px;
                    text-align: left;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-break: break-all;
                }
                .price{
                    color: #FF455B;
                }
            }
        }
    }

</style>
