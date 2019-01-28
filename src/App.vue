<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
@import "./styles/app.scss";
</style>
