<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <router-link class="navbar-brand" to="/">Book Finder</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon">
        <i class="fa fa-navicon" style="color:#fff; font-size:28px;"></i>
      </span>
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
      data-toggle="collapse"
      data-target=".navbar-collapse"
    >
      <div class="navbar-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/book">Books</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/song">Songs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add" v-if="getAuthStatus === true">Add</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-nav ml-auto">
        <ul class="navbar-nav">
          <a class="nav-link" target="_blank" href="https://www.instagram.com/itborchestra/">
            <i class="fa fa-instagram" style="font-size:25px; margin-right:5px;"></i>
          </a>
          <a class="nav-link" target="_blank" href="https://www.youtube.com/user/mediaISO">
            <i class="fa fa-youtube-square" style="font-size:25px; margin-right:5px;"></i>
          </a>

          <li>
            <router-link class="nav-link" to="/login" v-if="getAuthStatus === false">Login</router-link>
          </li>

          <li>
            <router-link class="nav-link" to="/register" v-if="getAuthStatus === true">Add Account</router-link>
          </li>

          <li>
            <router-link class="nav-link" to="/logout" v-if="getAuthStatus === true">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAuthStatus"]),
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  min-height: var(--navbar-height);
  width: 100%;
  font-family: var(--main-font);
  z-index: 99;
  padding: 0 10%;
  border-bottom: 2pt solid white;
}

.navbar-custom {
  background-color: rgb(62, 66, 62);
  color: white;
}

.navbar-toggler:hover {
  background-color: rgb(165, 165, 165) !important;
}

.navbar-brand,
.nav-item,
.nav-link {
  color: white;
}

.navbar-brand:hover,
.nav-item:hover,
.nav-link:hover {
  color: rgb(165, 165, 165);
}
</style>
