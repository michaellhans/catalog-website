<template>
  <div class="home">
    <div id="headline" class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 id="headline-header">ISO BOOK FINDER</h1>
        <p
          id="headline-content"
          class="lead"
        >This application is made for librarian to add/remove song and for members of ITB Student Orchestra to find their favorite song!</p>
        <div
          class="alert alert-success"
          v-if="getAuthStatus === true"
        >Welcome admin {{ getAuthUsername }}!</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: mapGetters(["getAuthStatus", "getAuthUsername"]),
};
</script>

<style>
.home {
  margin-top: 75px;
  font-family: var(--main-font);
}

#headline {
  background: white;
  min-height: 200px;
  border-radius: 20px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 20px -1px rgb(0, 0, 0, 10);
  transition: box-shadow 500ms;
}

#headline:hover {
  box-shadow: 5px 5px 20px 10px rgb(0, 0, 0, 10);
}

#headline-header {
  font-size: 75px;
  font-weight: bold;
  text-align: center;
}

#headline-content {
  font-size: 20px;
  text-align: center;
  font-family: var(--text-font);
}
</style>
