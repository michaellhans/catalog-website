<template>
  <div id="BooksPage">
    <h1><p style="text-align=left">ISO Book Finder</p></h1>
    <SearchBar />
    <br>
    <b-container>
    <div class="row">
      <div class="column" id="cols-1">
        <select class="form-control-inline" id=kind>
          <option value="Nama Buku">Nama Buku</option>
          <option value="Kode Buku">Kode Buku</option>
        </select>
      </div>
      <div class="column" id="cols-2">
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" name="SoftcopyCheck" id="SoftcopyCheck" value="Softcopy" checked>
          <label class="form-check-label" for="SoftcopyCheck">Softcopy</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" name="HardcopyCheck" id="HardcopyCheck" value="Hardcopy">
          <label class="form-check-label" for="HardcopyCheck">Hardcopy</label>
        </div>
      </div>
      <div class="column" id="cols-3">
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="P" id="PianoCheck">
          <label class="form-check-label" for="PianoCheck">Piano</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="G" id="GuitarCheck">
          <label class="form-check-label" for="GuitarCheck">Guitar</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="S" id="StringCheck">
          <label class="form-check-label" for="StringCheck">String</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="B" id="BrassCheck">
          <label class="form-check-label" for="BrassCheck">Brass</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="W" id="WindCheck">
          <label class="form-check-label" for="WindCheck">Wood Wind</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="s" id="SaxoCheck">
          <label class="form-check-label" for="SaxoCheck">Saxophone</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="checkbox" value="p" id="PercussionCheck">
          <label class="form-check-label" for="PercussionCheck">Percussion</label>
        </div>
      </div>
    </div>
    </b-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'

export default {
  components : {
    SearchBar
  }
}
</script>

<style>
#BooksPage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#cols-1 {
  width: 20%;
}

#cols-2 {
  width: 20%;
}

#cols-3 {
  width: 60%;
}

#kind {
  width: 200px;
}

.row {
  background-color: rgb(247, 243, 243);
  padding: 10px;
}

</style>
