<template>
  <div id="add-account">
    <b-container class="d-flex justify-content-center mt-3">
      <div class="card w-75">
        <div class="card-header">Register</div>
        <div class="card-body">
          <form class="form mx-5" @submit.stop.prevent>
            <div class="d-flex align-items-center">
              <label for="email" class="col-2 text-left m-0 p-0">Email</label>
              <div class="w-100">
                <b-input type="email" id="email" aria-describedby="email-block" v-model="email"></b-input>
                <b-form-text
                  id="email-block"
                  class="text-left"
                >Your email address, there will be no authentication whatsoever</b-form-text>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <label for="username" class="col-2 text-left m-0 p-0">Username</label>
              <div class="w-100">
                <b-input
                  type="text"
                  id="username"
                  aria-describedby="username-block"
                  v-model="username"
                ></b-input>
                <b-form-text
                  id="username-block"
                  class="text-left"
                >Your username will be required for login</b-form-text>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <label for="password" class="col-2 text-left m-0 p-0">Password</label>
              <div class="w-100">
                <b-input
                  type="password"
                  id="password"
                  aria-describedby="password-block"
                  autocomplete="false"
                  v-model="password"
                ></b-input>
                <b-form-text
                  id="password-block"
                  class="text-left"
                >Please dont type 123456 for your password</b-form-text>
              </div>
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

#add-account {
  min-height: 700px;
}
</style>