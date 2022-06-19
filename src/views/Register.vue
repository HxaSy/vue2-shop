<template>
    <div class="register-container">
        <div class="register">
            <!-- <form action="" id="form1">
                <h3>用户注册</h3>
                <input type="text" id="username" placeholder="账号" v-model="username" />
                <input type="password" id="psw" placeholder="密码" v-model="password"/>
                <button id="btn" @click.prevent="login()">立即注册</button>
            </form>
            <p>已有账号!
                <router-link to="/login">去登陆</router-link>
            </p> -->
            <h3>用户注册</h3>
            <van-form @submit="onSubmit" @failed="onFailed">
                <van-cell-group inset>
                  <van-field
                    v-model="username"
                    name="pattern"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[
                    { required: true, message: '请填写用户名' },
                    { pattern:/^[a-zA-Z0-9_-]{6,18}$/, message:'账号必须为6-18位字母和数字或者符号_-组合',min:6,max:18}
                    ]"
                  />
                  <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[
                    { required: true, message: '请填写密码' },
                    { pattern:/^[\S]{6,12}$/, message:'密码必须为6-12为字符,且不能为空白字符'}
                    ]"
                  />
                </van-cell-group>
                <div style="margin: 16px;">
                  <van-button round block type="primary" native-type="submit">
                    注册账号
                  </van-button>
                </div>
            </van-form>
            <p>已有账号!
                <router-link to="/login">去登陆</router-link>
            </p>
        </div>
    </div>

</template>

<script>

import { userRequest } from '@/utils/request.js'

import { Toast } from 'vant'
const request = userRequest

export default {
  data () {
    return {
      username: '',
      password: ''
    //   pattern1: /^[a-zA-Z0-9_-]{6,18}$/
    }
  },
  methods: {
    async onSubmit () {
      const { data } = await request.post('/register', { username: this.username, password: this.password })

      if (data.code === 1) {
        Toast.fail(data.msg)
      } else {
        Toast.loading({
          message: '注册成功',
          duration: 1100
        })
        setTimeout(() => {
          this.$router.push({ path: '/login' })
        }, 1000)
      }
    },
    onFailed () {
    //   console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>

.register-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e93b5e66215ca801216518e78db6.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657856885&t=dd1bcf63a82e4b3a25fc5f5f97e7bb7e');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .register{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    height: 60%;
    padding: 20px 40px 0;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.3)
    }
    h3{
        color: #fff;
        font-size: 23px;
    }
    .van-cell-group{
        background:rgba(255, 255, 255, 0);
        .van-cell{
            background: rgba(0, 0, 0, 0);
            font-size: 18px;
            /deep/ .van-field__label{
                color: #fff;
                font-weight: 700;
                width: 3.2em;
            }
            /deep/ input::placeholder{
                color:peru;
            }
            /deep/ .van-field__control{
                color: chocolate;
            }
        }
    }
}

// 注册模块
    // .register{
    //     display: flex;
    //     justify-content: center;
    //     flex-wrap: wrap;
    //     width: 90%;
    //     height: 60%;
    //     padding: 20px 40px 0;
    //     box-sizing: border-box;
    //     background: rgba(255, 255, 255, 0.3)
    //     h3{
    //     color: #fff;
    //     text-align: center;
    //     font-size: 23px;
    //     padding: 30px 0;
    //     }
    // #username,#psw{
    //     margin-top: 20px;
    //     margin-bottom: 10px;
    //     width: 100%;
    //     border: 0px;
    //     background: rgba(255, 255, 255, 0);
    //     font-size: 19px;
    //     color:peru;
    //     border-bottom: 2px solid #fff;
    // }
    // input::placeholder{
    //     color: #fff;
    // }
    // #btn{
    //     background-color:skyblue;
    //     width: 100%;
    //     height: 40px;
    //     text-align: center;
    //     line-height: 40px;
    //     color: #fff;
    //     border-radius: 10px;
    //     border: 0;
    //     margin-top: 30px;
    //     margin-bottom: 30px;
    // }
    // p{
    //     text-align: center;
    // }
    // a{
    //     color: blue;
    // }

    // }

</style>
