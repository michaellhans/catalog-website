<template>
  <div class="normal-page">
    <TitleSpace :titleValue="'Penambahan Buku atau Lagu'" />
    <div class="card">
      <div class="card-header">
        <button
          class="btn btn-primary my-2 my-sm-0 btn-radius"
          id="booksLayout"
          @click="changeForm(false)"
          type="submit"
        >Add Book</button>
        <button
          class="btn btn-primary my-2 my-sm-0 btn-radius"
          id="songsLayout"
          @click="changeForm(true)"
          type="submit"
        >Add Song</button>
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
.normal-page {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}

#booksLayout {
  margin-right: 30px;
}
</style>