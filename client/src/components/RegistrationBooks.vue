<template>
  <b-container>
  <div class="form-group">
      <label>Nama Buku</label>
      <input type="email" class="form-control" id="bookName" name="bookName" v-model="nama">
  </div>
  <div class="form-group">
      <label>Kode Buku</label>
      <input type="email" class="form-control" id="bookCode" name="bookCode" v-model="kode">
  </div>
  <div>
      <label>Ketersediaan Buku</label><br>
      <div class="form-check-inline">
        <input class="form-check-input" v-model="copyCondition" type="checkbox" value="softcopy" name="SoftcopyCheck" id="SoftcopyCheck">
        <label class="form-check-label" for="SoftcopyCheck">Softcopy</label>
      </div>
      <div class="form-check-inline">
        <input class="form-check-input" v-model="copyCondition" type="checkbox" value="hardcopy" name="HardcopyCheck" id="HardcopyCheck">
        <label class="form-check-label" for="HardcopyCheck">Hardcopy</label>
      </div>
  </div>
  <br>
  <div class="form-group">
      <label for="InstrumenWords">Instrumen Character</label>
      <input v-model="instrumen" type="text" class="form-control" id="InstrumenWords">
      <small id="emailHelp" class="form-text text-muted">Hanya boleh diisi dengan P, G, S, B, W, s, dan p secara berurutan.</small>
  </div>
  <button class="btn btn-outline-success my-2 my-sm-0" @click="addBook">Tambahkan!</button>
  </b-container>
</template>

<script>
import BookService from '@/services/BookService'

export default {
  data() {
    return {
      nama: '',
      kode: '',
      copyCondition: [],
      instrumen: '',
      isAdded: false,
      isError: false
    }
  },
  methods: {
    async addBook() {
      try {
        const response = await BookService.add({
          nama: this.nama,
          kode: this.kode,
          hardcopy: this.copyCondition.includes("hardcopy"),
          softcopy: this.copyCondition.includes("softcopy"),
          instrumen: this.instrumen
        })
        this.isAdded = true
        this.isError = false
      }
      catch(err) {
        console.log(err)
        this.isError = true
      }
    }
  },
}
</script>