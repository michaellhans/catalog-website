<template>
  <div id="app">
    <NavigationBar />
    <router-view class="router-view" />
    <Footer />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  background: url('assets/backgroundISO.png') fixed center;
  overflow-x: hidden;
}

#app > .router-view {
  margin-top: 10vh;
}
</style>
