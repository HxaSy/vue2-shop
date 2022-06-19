<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item.img_id">
            <img v-lazy="item.img_url" :key="item.img_url"/>
        </van-swipe-item>
    </van-swipe>
</template>

<script>

import { request } from '@/utils/request.js'
export default {
  name: 'Swiper',
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getSwiper () {
      const { data: res } = await request.get('/swiper', () => {
      })
      // console.log(res)
      this.list = res.data
    //   console.log(this.list)
    }
  },
  created () {
    this.getSwiper()
  }

}
</script>

<style lang="less" scoped>

.van-swipe-item img{
  height: 180px;
  width: 100%;
}

</style>
