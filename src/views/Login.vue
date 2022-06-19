<template>
  <div class="login-container">
    <components :is="componentId"></components>
  </div>
</template>

<script>

import Login from '@/components/Login.vue'

export default {
  data () {
    return {
      componentId: Login
    }
  },
  methods: {
    login () {
      // console.log(1)
    }
  },
  components: {
    Login
  }

}
</script>

<style lang="less" scoped>

.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e93b5e66215ca801216518e78db6.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657856885&t=dd1bcf63a82e4b3a25fc5f5f97e7bb7e');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>
