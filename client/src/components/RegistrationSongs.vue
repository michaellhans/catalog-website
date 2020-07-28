<template>
  <b-container>
  <div class="form-group">
      <label for="exampleInputEmail1">Nama Lagu</label>
      <input type="text" class="form-control" id="songName" name="songName" v-model="nama" aria-describedby="emailHelp">
  </div>
  <div class="form-group container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <label for="exampleInputPassword1">Jenis Aransemen</label>
        <select class="form-control w-100" v-model="jenisAransemen" id=kind name="aransemen" width="20">
          <option value="Aransemen ISO">Aransemen ISO</option>
          <option value="Aransemen Non-ISO">Aransemen Non-ISO</option>
          <option value="Komposisi ISO">Komposisi ISO</option>
          <option value="Komposisi Non-ISO">Komposisi Non-ISO</option>
          <option value="Job">Job</option>
        </select>
      </div>
      <div class="col-12 col-md-6">
        <label>Jenis Musik</label><br>
        <div class="form-check-inline">
            <input class="form-check-input" v-model="isKlasik" type="radio" name="genre" id="klasikValue" :value="true" checked>
            <label class="form-check-label" for="klasikValue">Klasik</label>
        </div>
        <div class="form-check-inline">
            <input class="form-check-input" v-model="isKlasik" type="radio" name="genre" id="nonKlasikValue" :value="false">
            <label class="form-check-label" for="nonKlasikValue">Non-Klasik</label>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div class="form-group">
      <label for="InstrumenWords">Instrumen Character</label>
      <input type="text" v-model="instruments" class="form-control" id="InstrumenWords">
      <small id="emailHelp" class="form-text text-muted">Hanya boleh diisi dengan P, G, S, B, W, s, dan p.</small>
  </div>
  <button class="btn btn-outline-success my-2 my-sm-0" @click="addSong">Tambahkan!</button>
  </b-container>
</template>

<script>
import SongService from '@/services/SongService'

export default {
  data() {
    return {
      nama: '',
      isKlasik: true,
      instruments: '',
      jenisAransemen: '',
      isAdded: false,
      isError: false
    }
  },
  methods: {
    async addSong() {
      try {
        const response = await SongService.add({
          nama: this.nama,
          klasik: this.isKlasik,
          instrumen: this.instruments,
          jenisAransemen: this.jenisAransemen
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