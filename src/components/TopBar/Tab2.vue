<template>
        <!-- 头部导航，包括综合、销量、新品 -->
        <div class="tab2" ref="top">
            <div class="list">
              <ul>
                <li v-for="(item,i) in items" :key="i" @click="changeRed(i)" :class="{active:indexCurren=== i}">{{item}}</li>
            </ul>

            </div>
            <slot></slot>
        </div>

</template>

<script>
export default {
  data () {
    return {
      indexCurren: 0,
      items: ['综合', '销量', '新品']
    }
  },
  methods: {
    changeRed (i) {
      this.indexCurren = i

      // console.log(window)

      if (location.hash === '#/homeList/detail') this.$refs.top.scrollTop = 0
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
        // margin-top: 20px;
        li{
            flex: 1;
            text-align: center;
            border-left: 1px solid #ccc;
        }
        .active{
            color: red;
        }
    }

</style>
