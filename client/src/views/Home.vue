<template>
  <div class="home">
    <div id="headline">
      <label id="headline-header">ISO BOOK FINDER</label>
      <br />
      <label id="headline-content">
        This application is made for librarian to add/remove song and
        <br />for members
        of ITB Student Orchestra to find their favorite song!
      </label>
      <div
        class="alert alert-success"
        v-if="getAuthStatus === true"
      >Welcome admin {{ getAuthUsername }}!</div>
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
@import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");

.home {
  padding-top: 100px;
  padding-bottom: 0px;
  width: 80%;
  min-height: 700px;
  font-family: "Merriweather", serif;
  margin: auto;
}

#headline {
  background: white;
  height: 300px;
  border-radius: 20px;
  opacity: 0.9;
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
}
</style>
