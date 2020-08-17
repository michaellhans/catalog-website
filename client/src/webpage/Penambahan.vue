<template>
  <div class="normal-page">
    <TitleSpace :titleValue="'Penambahan Buku atau Lagu'" />
    <div class="card">
      <div class="card-header">
        <button class="add-navigation" @click="changeForm(false)" type="submit">Add Book</button>
        <button class="add-navigation" @click="changeForm(true)" type="submit">Add Song</button>
      </div>
      <div class="card-body">
        <div v-if="this.formBool == false">
          <RegistrationBooks />
        </div>
        <div v-else>
          <RegistrationSongs />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationSongs from "@/components/RegistrationSongs.vue";
import RegistrationBooks from "@/components/RegistrationBooks.vue";
import TitleSpace from "@/components/TitleSpace.vue";

export default {
  components: {
    TitleSpace,
    RegistrationSongs,
    RegistrationBooks,
  },
  data: function () {
    return {
      formBool: true,
    };
  },
  methods: {
    changeForm(formBool) {
      this.formBool = formBool;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

.normal-page {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 80px;
  background: white;
  width: 80%;
  margin: auto;
  min-height: 700px;
  border-radius: 10px;
}

.card-header {
  background: rgb(248, 238, 145);
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
}

.add-navigation {
  background: rgb(160, 154, 97);
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: 30px;
  margin-left: 30px;
  border: 0px solid;
  border-radius: 100px;
  color: white;
}

.add-navigation:focus {
  background: rgb(201, 191, 99);
  border: 0px;
  outline: 0 !important;
}

.add-navigation:hover {
  background: rgb(201, 191, 99);
  color: gray;
  border: 0px;
  outline: 0 !important;
}
</style>