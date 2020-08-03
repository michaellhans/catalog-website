<template>
  <div class="container">
    <div class="b-alert">
      You are not authorized to enter this page, please login first
    </div>
    <router-link to="/login">
      <button class="btn btn-primary">
        Login
      </button>
    </router-link>
    <router-link to="/">
      <button class="btn btn-secondary">
        Home
      </button>
    </router-link>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>