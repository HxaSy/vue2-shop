<template>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="cbFull" :checked="this.$store.state.cart.statusAll" @change="changeAllState($event)"/>
        <label class="custom-control-label" for="cbFull">全选</label>
    </div>
</template>

<script>
export default {
  methods: {
    changeAllState () {
      if (this.$store.state.cart.statusAll === true) {
      // console.log(this)
        this.isfull = false
      }
      if (this.$store.state.cart.statusAll === false) {
      // console.log(e)
        this.isfull = true
      }
      // console.log(this.$store.state.cart.statusAll)
      this.$store.dispatch({
        type: 'changeAllState',
        checked: this.isfull
      })
    }
  }
}
</script>

<style lang="less" scoped>

.custom-checkbox{
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    #cbFull{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 6px;
    }
}

</style>
