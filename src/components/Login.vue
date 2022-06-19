<template>
  <div class="login">
        <form action="" id="form1">
            <h3>欢迎来到登录页面</h3>
            <div class="name">
                <input type="text" id="username" placeholder="账号" v-model="username" @input="checkUsername" @blur="checkUsername"/>
                <span class="errName" ref="name">请输入用户名</span>
            </div>
            <div class="password">
                <input type="password" id="psw" placeholder="密码" v-model="password" @input="checkPassword" @blur="checkPassword" />
                <span class="errPSW" ref="psw">请输入密码</span>
            </div>
            <button id="btn" @click="login()">登录</button>
        </form>
        <p>没有账号?
            <router-link to='/register'>去注册</router-link>
        </p>
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
      password: '',
      state: 'none'
    }
  },
  methods: {
    checkUsername () {
      const pattern = /\S+/

      if (!pattern.test(this.username)) {
        // this.username = '请输入账号'
        // alert('账号不能为空')
        this.$refs.name.style.display = 'block'
      } else {
        this.$refs.name.style.display = 'none'
      }
    },
    checkPassword () {
      const pattern = /\S+/

      if (!pattern.test(this.password)) {
        // this.username = '请输入账号'
        // alert('账号不能为空')
        this.$refs.psw.style.display = 'block'
      } else {
        this.$refs.psw.style.display = 'none'
      }
    },
    async login () {
      if (this.password === '' || this.username === '') {
        this.checkUsername()
        this.checkPassword()
        return
      }

      const { data } = await request.post('/login', { username: this.username, password: this.password })

      if (data.code === 1) {
        return Toast.fail(data.msg)
      } else if (data.code === 2) {
        return Toast.fail(data.msg)
      } else {
        // console.log(data)
        this.$store.dispatch('saveTooken', data.token)
        this.$store.dispatch('saveUserinfo', data.message)

        Toast.loading({
          message: '登录成功',
          duration: 1100
        })
        setTimeout(() => {
          this.username = ''
          this.password = ''
          this.$router.replace('/my')
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>

// 登录模块
    .login{
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
        text-align: center;
        font-size: 23px;
        padding: 30px 0;
    }
    #username,#psw{
        margin-top: 20px;
        margin-bottom: 10px;
        width: 100%;
        border: 0px;
        background: rgba(255, 255, 255, 0);
        font-size: 19px;
        color:peru;
        border-bottom: 2px solid #fff;
    }
    #username::after{
        content: '123';
        width: 100px;
        height: 100px;
    }
    input::placeholder{
        color: #fff;
    }
    #btn{
        background-color:skyblue;
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 10px;
        border: 0;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    p{
        text-align: center;
    }
    a{
        color: blue;
    }
    .errName,.errPSW{
        color: red;
        display: none;
    }

</style>
