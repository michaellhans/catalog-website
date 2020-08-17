<template>
  <div id="navbar-finder">
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
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse justify-content-between" id="navbarSupportedContent">
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
          </ul>
        </div>
      </div>
    </nav>
  </div>
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
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");

.navbar {
  padding-left: 10%;
  padding-right: 10%;
}

.navbar-custom {
  background-color: rgb(62, 66, 62);
  color: white;
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

#navbar-finder {
  font-family: "Libre Baskerville", serif;
  font-style: initial;
  background-color: black;
  border-bottom: 2pt solid rgb(255, 248, 225);
  margin-bottom: 20px;
}
</style>