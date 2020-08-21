<template>
  <div>
    <b-container class="mt-3 w-75">
      <div class="card">
        <div class="card-header">Add Admin</div>
        <div class="card-body">
          <form class="form mx-5" @submit.stop.prevent>
            <label for="email">Email</label>
            <div class="w-100">
              <b-input type="email" id="email" aria-describedby="email-block" v-model="email"></b-input>
              <b-form-text id="email-block">
                Your email address, there will be no authentication
                whatsoever
              </b-form-text>
            </div>

            <label for="username" style="margin-top: 20px">Username</label>
            <div class="w-100">
              <b-input
                type="text"
                id="username"
                aria-describedby="username-block"
                v-model="username"
              ></b-input>
              <b-form-text id="username-block">Your username will be required for login</b-form-text>
            </div>

            <label for="password" style="margin-top: 20px">Password</label>
            <div class="w-100">
              <b-input
                type="password"
                id="password"
                aria-describedby="password-block"
                autocomplete="false"
                v-model="password"
              ></b-input>
              <b-form-text id="password-block">Please dont type 123456 for your password</b-form-text>
            </div>
            <button class="btn btn-primary mt-3" @click="register">Register</button>
          </form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      AuthService.register({
        username: this.username,
        password: this.password,
        email: this.email,
      });
    },
  },
};
</script>

<style>
.form > div {
  margin-top: 10px;
}
</style>
