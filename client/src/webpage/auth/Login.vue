<template>
  <b-container class="d-flex justify-content-center mt-3">
    <div class="card w-75">
      <div class="card-header">
        Login
      </div>
      <div class="card-body">
        <b-alert show dismissible variant="danger" v-if="error!=null">
          Wrong Credential! Username or password is wrong
        </b-alert>
        <form class="form mx-5" @submit.stop.prevent>
          <div class="d-flex align-items-center">
            <label for="username" class="col-2 text-left m-0 p-0">Username</label>
            <b-input 
              type="text" 
              id="username"
              aria-autocomplete="on"
              autocomplete="on"
              class="col-10"
              v-model="username"
              ></b-input>
          </div>

          <div class="d-flex align-items-center mt-3">
            <label for="password" class="col-2 text-left m-0 p-0">Password</label>
            <b-input 
              type="password" 
              id="password"
              aria-autocomplete="on"
              autocomplete="on"
              class="col-10"
              v-model="password"
              ></b-input>
          </div>
          <div class="mt-3">
            <button class="btn btn-primary" @click="authenticate">
              Login
            </button>
            <router-link to="/forget">
              <button class="btn btn-danger ml-3">
                Forget Password?
              </button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      error: null,
      a: null
    }
  },
  methods: {
    ...mapActions(['login']),
    async authenticate() {
      try {
        const isLoggedIn = await this.login({
          username: this.username,
          password: this.password
        })
        console.log("isloggedin : ")
        console.log(isLoggedIn)
        if(isLoggedIn) {
          this.$router.push('/')
        }
      } catch (error) {
        this.error = error
      }
    },
    resetForm() {
      this.username = '',
      this.password = ''
    }
  },
  computed: mapGetters(['getAuthStatus'])
  ,
}
</script>

<style>

</style>