<template>
  <b-container class="d-flex justify-content-center mt-3">
    <div class="card w-75">
      <div class="card-header">
        Login
      </div>
      <div class="card-body">
        <div class="form mx-5">
          <div class="d-flex align-items-center">
            <label for="username" class="col-2 text-left m-0 p-0">Username</label>
            <b-input 
              type="text" 
              id="username"
              aria-describedby="email-block"
              class="col-10"
              v-model="username"
              ></b-input>
          </div>

          <div class="d-flex align-items-center mt-3">
            <label for="password" class="col-2 text-left m-0 p-0">Password</label>
            <b-input 
              type="password" 
              id="password"
              aria-describedby="email-block"
              class="col-10"
              v-model="password"
              ></b-input>
          </div>
          <div class="mt-3">
            <button class="btn btn-primary" @click="login">
              Login
            </button>
            <router-link to="/forget">
              <button class="btn btn-danger ml-3" @click="register">
                Forget Password?
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {

    }
  },
}
</script>

<style>

</style>