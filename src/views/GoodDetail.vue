<template>
    <div class="product-detail">

        <!-- 返回上一级 -->
        <div class="back" @click="goBack">
            <van-icon name="arrow-left"></van-icon>
        </div>
        <!-- 实现跳转到首页和购物车页面 -->
        <div class="link">
            <div class="home" @click="goHome">
                <van-icon name="home-o" color="white" size="23px"/>
            </div>
            <div class="cart" @click="goCart">
                <van-icon name="cart-o" color="white" size="23px"/>
            </div>
        </div>

        <!-- 商品详细信息 -->
        <div class="info">
            <!-- 商品图片展示 -->
        <div class="img">
            <img v-lazy="$store.state.product.info[0].goods_img1" :key="$store.state.product.info[0].goods_img1" alt="">
        </div>

            <div class="info-header">
                <div class="price">￥<i>{{(this.$store.state.product.info[0].goods_price).toFixed(2)}}</i></div>
                <div class="discount">7折</div>
            </div>
            <div class="title">
                <p>{{$store.state.product.info[0].goods_content}}</p>
                <span><van-icon name="smile-o" />帮我选</span>
            </div>
        </div>

        <!-- 选择商品规格 -->
        <div class="select">
            <div class="size">
                <van-cell is-link @click="showPopup1" >选择 已选 : "黑色", 尺码</van-cell>
                <van-popup  v-model:show="show1" position="bottom" :style="{height:'70%'}" closeable>
                        <!-- 定义选择尺码和商品规格 -->
                        <div class="content">
                            <!-- 图片和价格以及库存 -->
                            <div class="header">
                                <!-- 商品图片 -->
                                <img :src="$store.state.product.info[0].goods_img1" alt="">

                                <!-- 价格区域、库存 -->
                                <div class="header-right">
                                    <div class="in">￥67.20~￥157.50</div>
                                    <div class="count">库存 : 13198 件</div>
                                    <p>请选择 尺码 颜色</p>
                                </div>
                            </div>
                            <!-- 颜色选择 -->
                            <div class="color">
                                <span>颜色</span>
                                <div class="s-color">
                                    <span class="pink" v-for="value in 6" :key="value">单件粉色</span>
                                </div>
                            </div>

                            <!-- 尺码 -->
                            <div class="sizes">
                                <span>尺码</span>
                                <div class="bluk">
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                    <span>XL</span>
                                </div>
                            </div>

                            <!-- 购买和加入购物车 -->
                            <div class="handle">
                                <van-button class="addCart" @click="addCart">加入购物车</van-button>
                                <van-button class="buy">立即购买</van-button>
                            </div>
                        </div>
                </van-popup>
            </div>
            <div class="location">
                <span>免邮费</span>
                <span>广东广州</span>
            </div>
            <div class="service">
                <van-cell is-link @click="showPopup2">服务 72小时发货 | 7天无理由退货 | 延误必赔</van-cell>
                <van-popup  v-model:show="show2" position="bottom" :style="{height:'60%'}">
                   <div>456</div>
                </van-popup>
            </div>
        </div>

        <!-- 用户的评价区域 -->
        <div class="evaluate">
            <span>评价(0)</span>
            <span>暂无评分</span>
        </div>

        <!-- 商品的更多信息 -->
        <div class="more">
            <div class="text">——宝贝详情——</div>
            <img v-for="value in 4" :key="value" :src="$store.state.product.info[0].goods_img1" alt="">
        </div>

        <!-- 商品详情底部 -->
        <div class="footer">
            <!-- 左侧客服 -->
            <div class="service">
                <van-icon name="chat-o" />
                <span>客服</span>
            </div>

            <!-- 购物车 -->
            <div class="shop">
                <van-icon name="shop-o" />
                <span>店铺</span>
            </div>

            <!-- 收藏 -->
            <div class="like">
                <van-icon name="star-o" />
                <span>收藏</span>
            </div>

            <!-- 相关操作 -->
            <div class="handle">
                <van-button class="addCart" @click="addCart($store.state.product.info[0])">加入购物车</van-button>

                <van-button class="buyNow">立即购买</van-button>
            </div>

        </div>
    </div>
</template>

<script>

// 导入reuqest
import { cartRequest } from '@/utils/request.js'
import { Dialog } from 'vant'
const request = cartRequest

export default {
  data () {
    return {
      show1: false,
      show2: false
    }
  },
  methods: {
    //  点击跳转回首页
    goHome () {
      sessionStorage.removeItem('store')
      this.$router.push('/home')
    },
    // 点击跳转到购物车
    goCart () {
      sessionStorage.removeItem('store')
      this.$router.push('/cart')
    },
    // 选择尺码
    showPopup1 () {
      this.show1 = true
    },
    showPopup2 () {
      this.show2 = true
    },
    goBack () {
      sessionStorage.removeItem('store')
      this.$router.go(-1)
    },
    // 添加到购物车
    async addCart (item) {
    //   console.log(item)
      const { data } = await request.post('/add', { item })

      //   console.log(data)
      //   console.log(this.$store.state.cart.cartInfo)
      if (data.code === 1) {
        request.post('/updateDel', { del: 0, cart_id: data.data[0].cart_id })
        request.post('/update', { cart_num: 1, cart_id: data.data[0].cart_id })
      }

      // 如果该商品已存在，则数量加1
      if (data.code === 2) this.$store.dispatch('andOne', item.product_id)

      Dialog.confirm({
        message: '加入购物车成功'
      })
    }
  },

  //   页面刷新时state数据不变，state重置的话数据丢失，保存在sessionStorage
  created () {
    // console.log(window)
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      if (window.location.hash === '#/product/detail') { sessionStorage.setItem('store', JSON.stringify(this.$store.state)) }
    })
  }
}
</script>

<style lang="less" scoped>

.product-detail{
    background-color: #F6F7F9;
    padding-bottom: 50px;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    // 跳转首页和购物车
    .link{
        z-index: 1;
        position: fixed;
        right: 20px;
        top: 60px;
        .home{
            margin-bottom: 10px;
        }
    }

    // 购物车，首页，返回上一层
    .home,.cart,.back{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #000;
        opacity: .3;
        border-radius: 50%;
    }

    .back{
        z-index: 1;
        color: #fff;
        position: fixed;
        left: 10px;
        top: 20px;
    }

    // 商品基本信息
    .info{
        // margin-top: 10px;
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
        margin-bottom: 10px;
        background-color: #fff;
        .info-header,.title{
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: 10px;
            // justify-content: center;
            .price i{
                font-size: 30px;
                font-weight: 700;
            }
            .discount{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: 3px;
                background-color: pink;
                height: 10px;
                padding: 5px;
            }
            p{
                flex: 4;
                padding-right: 17px;
            }
            span{
                flex: 1.5;
                text-align: center;
                background-color: #ccc;
                opacity: .3;
                border-radius: 10px 0 0 10px;
            }
        }
    }

    .select{
        background-color: #fff;
        margin-bottom: 10px;
        .van-cell{
            font-size: 16px;
            padding: 10px;
        }
        .location{
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
        }

        // 挑选商品规格弹出框
        .size{
            .van-popup{
                overflow-y: visible;
            }
            // 商品规格弹出层
            .content{
                display: flex;
                flex-direction: column;

                // 顶部
                .header{
                    display: flex;
                    justify-content: center;
                    position: relative;
                    padding-bottom: 50px;
                    // 设置图片
                    img{
                        position: absolute;
                        z-index: 10000;
                        top: -45px;
                        left: 20px;
                        width: 100px;
                        height: 150px;
                    }
                    .header-right{
                        padding: 10px 0 0 18px;
                        .in{
                            padding-bottom: 10px;
                        }
                    }
                }

                // 颜色
                .color,.sizes{
                    display: flex;
                    flex-direction: column;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 30px;
                    span{
                        width: 100%;
                        margin-left: 20px;
                    }
                    .s-color{
                        display: flex;
                        // flex: 1;
                        // flex-direction: column;
                        flex-wrap: wrap;
                        .pink{
                            text-align: center;
                            margin-left: 20px;
                            margin-top: 20px;
                            width: 25%;
                            border: 1px solid #ccc;
                        }
                    }
                }
                .sizes{
                    margin: 20px 0;
                    .bluk{
                        margin-top: 10px;
                        span{
                            // width: 30%;
                            padding: 0 10px;
                            border: 1px solid #ccc;
                        }
                    }
                }
                .handle{
                    display: flex;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    .addCart{
                        flex: 1;
                        background-color: pink;
                    }
                    .buy{
                        flex: 1;
                        background-color: red;
                    }
                }
            }
        }
    }

    // 大图
    img{
            width: 100%;
            height: 430px;
        }
    // 评价
    .evaluate{
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        padding: 10px 15px;
        margin-bottom: 10px;
    }

    .more{
        text-align: center;
        .text{
            margin-bottom: 10px;
        }
    }

    //底部动作栏
    .footer{
        background-color: #fff;
        z-index: 1;
        // box-sizing: content-box;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        // padding: 0 10px;
        border-top: 1px solid #ccc ;
        .service,.like,.shop{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 0 10px;
        }
        // .handle{
        //     // padding-left: 5px;
        // }
        .addCart{
            background-color: pink;
        }
        .buyNow{
            width: 102px;
            background-color: red;
        }
    }

}

</style>
