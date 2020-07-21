<template>
  <b-container>
  <div id="AddPage">
    <h1><p style="text-align=left">ISO Add Book or Song</p></h1>
    <div class="form-group">
        <label for="uniquekey">Masukkan kode unik Librarian</label>
        <input type="password" style="text-align:center;" class="form-control" id="uniqueKey" v-model="uniqueKey" >
    </div>
    <button class="btn btn-outline-success my-2 my-sm-0" @click="login" type="submit">Submit</button>
    <!-- If the prerequisites attributes meet the requirement -->
    <div v-if="this.validity === true && this.isClicked === true">
        <b-alert show variant="success" style="margin-top : 20px; margin-bottom : 20px;"><b>Kode unik yang dimasukkan valid!</b></b-alert>
        <RegistrationBooks />
    </div>
    <!-- Everything else, the input is not valid -->
    <div v-else-if="this.isClicked === true">
        <b-alert show variant="danger" style="margin-top : 20px; margin-bottom : 20px;"><b>Kode unik yang dimasukkan tidak valid!</b></b-alert>
        <RegistrationSongs />
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
      isClicked: false,
      validity: false,
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

</style>