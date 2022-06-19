<template>
    <div class="grid-container">
        <ul>
            <li @click="detail">
                <img v-lazy="imgObj.img1" />
                <span>女装</span>
            </li>
            <li>
                <img v-lazy="imgObj.img2"/>
                <span>套装</span>
            </li>
            <li>
                <img v-lazy="imgObj.img3"/>
                <span>裙子</span>
            </li>
            <li>
                <img v-lazy="imgObj.img4"/>
                <span>女鞋</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgObj: {
        img1: 'https://s10.mogucdn.com/mlcdn/c45406/210218_1ldikaae13k9be2kc2860h3l2kc5i_150x150.png_640x640.v1cAC.40.webp',
        img2: 'https://s10.mogucdn.com/mlcdn/c45406/210218_571djje4gf3dj24cj6c24k6gl0kcl_150x150.png_640x640.v1cAC.40.webp',
        img3: 'https://s10.mogucdn.com/mlcdn/c45406/200327_2lliak11gh3a6714a9k5ifi0e6b4l_135x135.jpg_640x640.v1cAC.40.webp',
        img4: 'https://s10.mogucdn.com/mlcdn/c45406/210218_33aak1kgeegijhi3g4dl4l1d069h7_150x150.png_640x640.v1cAC.40.webp'
      }
    }
  },
  methods: {
    detail () {
      this.$router.push('/homeList/detail')
    }
  }
}
</script>

<style lang="less" scoped>
    .grid-container{
        margin-top: 20px;
        // background-color: #fff;
        ul {
            display: flex;
            justify-content: space-around;
            li {
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
