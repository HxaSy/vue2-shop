<template>
    <div class="my-container">

      <!-- 登录注册操作 -->
      <div class="login">
          <!-- 头像 -->
          <div class="avater">
            <img src="https://cn.vuejs.org/images/logo.svg" alt="">
          </div>

          <div :class="this.$store.state.user.isLogin" @click="goLogin" ref="user">{{this.$store.state.user.userinfo}}</div>
      </div>

      <!-- 用户相关 -->
      <div class="user">
        <van-grid>
            <van-grid-item icon="wap-home" text="我的主页" />
            <van-grid-item icon="chat" text="消息" />
            <van-grid-item icon="star" text="收藏" />
            <van-grid-item icon="friends" text="关注" />
        </van-grid>

      </div>

      <!-- 红包相关 -->
      <div class="discount">

          <div class="cart">
            <div class="text">
                <p>购物车</p>
                <p style="color:#ccc;">3件商品></p>
            </div>
              <img src="https://s10.mogucdn.com/mlcdn/c45406/190815_3637hh8ac09e50j7f07i7eealck4i_513x360.png" alt="">
          </div>
          <div class="count">
            <!-- 卡卷红包 -->
            <div class="kajaun">
               <p>卡卷红包</p>
               <p style="font-size:12px;">></p>
            </div>

            <div class="kajaun">
               <p>补贴保障</p>
               <p style="font-size:12px;">退货补运费></p>
            </div>

            <div class="kajaun">
               <p>我的钱包</p>
               <p style="font-size:12px;">管理大师></p>
            </div>
          </div>
      </div>

      <!-- 我的订单 -->
      <div class="order">
          <div class="text">
            <span>我的订单</span>
            <span>全部></span>
          </div>
          <van-grid>
              <van-grid-item icon="https://s10.mogucdn.com/mlcdn/c45406/190815_0ig16599k9l4f80g59cbkc6bcadid_75x75.png" text="待付款" />
              <van-grid-item icon="https://s10.mogucdn.com/mlcdn/c45406/190815_5j02c44liecec503kdldjbh72hca8_75x75.png" text="代发货" />
              <van-grid-item icon="https://s10.mogucdn.com/mlcdn/c45406/190815_56bd5eg3f4h47g2l1042436dc2950_75x75.png" text="待收货" />
              <van-grid-item icon="https://s10.mogucdn.com/mlcdn/c45406/190815_8af1b27cfaed15fllab4j3hffh7h8_75x75.png" text="评价" />
              <van-grid-item icon="https://s10.mogucdn.com/mlcdn/c45406/190815_18db4je44bd6ej8ajg0l1950ia5ih_75x75.png" text="退款售后" />
          </van-grid>
      </div>

      <!-- 我的设置 -->
      <div class="order">
          <div class="text">
            <span>我的设置</span>
            <span>></span>
          </div>
          <van-grid style="background: #fff;">
              <van-grid-item icon="https://s10.mogucdn.com/mlcdn/c45406/190815_6f13a0l26fcfcgkhei88f8248024k_75x75.png" text="签到" />
              <van-grid-item icon="https://s10.mogucdn.com/mlcdn/c45406/190815_5j02c44liecec503kdldjbh72hca8_75x75.png" text="收货地址" />
          </van-grid>
      </div>

      <van-button @click="logout">退出登录</van-button>

      <NavBar></NavBar>
    </div>
</template>

<script>

// import { userinfo } from '@/utils/request.js'
import NavBar from '@/components/NavBar.vue'
import { Toast } from 'vant'
// const request = userinfo

export default {
  name: 'My',
  components: {
    NavBar
  },
  methods: {
    // 登录
    goLogin () {
      this.$router.push('/login')
    },
    // async getUserinfo () {
    //   await request.post('userinfo')
    // },
    logout () {
      if (localStorage.token) {
        this.$store.dispatch('delToken')
        Toast.loading({
          message: '退出登录成功',
          duration: 1100
        })
        // function 的this指向window,使用箭头函数this.$router.go(0)才不会出错
        // setTimeout(() => {
        //   this.$router.go(0)
        //   // location.reload()
        // }, 1000)
      } else {
        Toast.loading({
          message: '用户未登录',
          duration: 500
        })
      }
    }
  }
  // beforeMount () {
  //   // 设置响应拦截，若token过期，则退出登录
  //   // this.getUserinfo()
  //   this.isLogin = localStorage.isLogin
  //   this.text = localStorage.userinfo
  // }
  // mounted () {
  //   if (localStorage.token) {
  //     this.text = localStorage.userinfo
  //     // this.$refs.user.style.pointer-events = 'none'
  //     this.isLogin = 'Y'
  //   }
  // }

}
</script>

<style lang="less" scoped>

    .my-container{
      background-color: #EFF1F3;
      padding: 0 10px 50px;

      // 登录注册
      .login{
        background-color: #FF455B;
        display: flex;
        align-items: center;
        padding: 10px;
        .avater{
          display: flex;
          align-items: center;
          width: 80px;
          height: 80px;
          margin-right: 20px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #FFE14D;
        }
        .N,.Y{
          font-size: 23px;
          color: #fff;
          font-weight: 700;
        }
        .Y{
          pointer-events: none;
        }
      }

      // 用户相关
      .user{
        margin: 10px 0;
        background-color: #fff;

        // 自定义图标颜色---vant提供的不起作用
        .van-grid{
          /deep/ .van-icon-wap-home:before{
            color: #F46B43;
          }
          /deep/ .van-icon-chat:before{
            color: #00A7D8;
          }
          /deep/ .van-icon-star:before{
            color: #F1B531;
          }
          /deep/ .van-icon-friends:before{
            color: #00F44E;
          }
        }
      }

      // 红包
      .discount{
        display: flex;
        .cart{
          margin-right: 10px;
          flex: 1;
          height: 157px;
          position: relative;
          .text{
            z-index: 1;
            position: absolute;
            left: 10px;
            top: 10px;
          }
          img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
        }
        .count{
          display: flex;
          flex-direction: column;
          flex: 1;
          background-color: #fff;
          padding: 10px;
          padding-bottom: 0;

          div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 12px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ccc;
          }
        }
      }

      // 我的订单
      .order{
        margin: 10px 0;

        .text{
          display: flex;
          justify-content: space-between;
          background-color: #fff;
          padding: 10px;
          border-bottom: 1px solid #ccc;
        }
        .van-grid-item{
          flex-basis: 20%!important
        }
      }

      // 退出登录
      .van-button{
        width: 100%;
        background-color: #FF455B;
        color: #fff;
        font-size: 18px;
      }
    }

</style>
