<template>
  <div id="app" class="page-container">
    <Header></Header>
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear>
        <router-view class="animated"></router-view>
      </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
    .page-container {
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
</style>
