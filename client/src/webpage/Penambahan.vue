<template>
  <div class="web-page">
    <TitleSpace :titleValue="'Penambahan Buku atau Lagu'" />
    <div class="card">
      <div class="card-header">
        <button class="add-navigation" @click="changeForm(false)" type="submit">
          Add Book
        </button>
        <button class="add-navigation" @click="changeForm(true)" type="submit">
          Add Song
        </button>
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
import RegistrationSongs from '@/components/RegistrationSongs.vue';
import RegistrationBooks from '@/components/RegistrationBooks.vue';
import TitleSpace from '@/components/TitleSpace.vue';

export default {
  components: {
    TitleSpace,
    RegistrationSongs,
    RegistrationBooks,
  },
  data: function() {
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

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
  background: rgb(211, 201, 109);
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
