<template>
    <div class="app">
      <keep-alive include="Home">
          <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>

export default {
  // beforeRouteLeave (to, from, next) {
  //   // // console.log('leave')
  //   // const app = document.getElementById('app')
  //   // this.top = app.scrollTop || 0
  //   this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  //   next()
  // }
}
</script>

<style>

</style>
