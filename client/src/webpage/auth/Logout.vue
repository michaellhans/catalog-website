<template>
  <div id="add-account">
    <b-container class="d-flex justify-content-center mt-3">
      <div class="card w-75">
        <div class="card-header">You sure you want to log out?</div>
        <div class="my-3">
          <button class="btn btn-danger" @click="accountLogout">Logout</button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['logout']),
    async accountLogout() {
      try {
        await this.logout();
        this.$router.push('/');
      } catch (error) {
        console.log('there is an error logging out');
      }
    },
  },
};
</script>

<style></style>
