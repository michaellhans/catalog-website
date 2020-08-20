<template>
  <div id="app">
    <NavigationBar />
    <div id="content">
      <router-view />
    </div>
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
  background: url('assets/backgroundISO.png') fixed center;
  overflow-x: hidden;
}

#content {
  min-height: 100vh;
  padding-top: calc(var(--navbar-height) + 10px);
  padding-bottom: calc(var(--footer-height) + 10px);
  text-align: center;
  color: #2c3e50;
  width: 80%;
  margin: auto;
}
</style>
