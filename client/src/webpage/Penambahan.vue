<template>
  <b-container>
  <div id="AddPage">
    <h1><p style="text-align=left">ISO Add Book or Song</p></h1>
    <div class="card">
      <div class="card-header">
        <button class="btn btn-primary my-2 my-sm-0 btn-radius" id="booksLayout" @click="changeForm(false)" type="submit">Add Book</button>
        <button class="btn btn-primary my-2 my-sm-0 btn-radius" id="songsLayout" @click="changeForm(true)" type="submit">Add Song</button>
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
  </b-container>
</template>

<script>
import RegistrationSongs from "@/components/RegistrationSongs.vue"
import RegistrationBooks from "@/components/RegistrationBooks.vue"

export default {
  components : {
      RegistrationSongs,
      RegistrationBooks
  },
  data: function () {
    return {
      uniqueKey: '',
      isClicked: true,
      validity: true,
      formBool: true
    }
  },
  methods: {
    login () {
      this.isClicked = true
      if (this.uniqueKey === "mario ganteng") {
        this.validity = true
      }
      else {
        this.validity = false
      }
    },
    changeForm (formBool) {
      this.formBool = formBool
    }
  }
}
</script>

<style>
#AddPage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#booksLayout {
  margin-right: 30px;
}
</style>