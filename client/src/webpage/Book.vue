<template>
  <div id="BooksPage">
    <h1><p style="text-align=left">ISO Book Finder</p></h1>
    <b-container>
      <div class="row" id="row-1">
        <div class="column" id="cols-1-search">
          <input class="form-control mr-sm-2 inline" v-model="query" type="search" placeholder="Search" aria-label="Search" size="120">
        </div>
        <div class="column" id="cols-2-search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="search">Search</button>
        </div>
      </div>
      <br>
      <div class="row" id="row-2">
        <div class="column" id="cols-1">
          <select class="form-control-inline" id=kind v-model="searchBy">
            <option value="nama">Nama Buku</option>
            <option value="kode">Kode Buku</option>
          </select>
        </div>
        <div class="column" id="cols-2">
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="copyCondition" name="SoftcopyCheck" id="SoftcopyCheck" value="softcopy" checked>
            <label class="form-check-label" for="SoftcopyCheck">Softcopy</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="copyCondition" name="HardcopyCheck" id="HardcopyCheck" value="hardcopy">
            <label class="form-check-label" for="HardcopyCheck">Hardcopy</label>
          </div>
        </div>
        <InstrumenCheckBox @checked="updateInstrumentList"/>
      </div>
      <table class="table table-striped mt-3">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Kode</th>
            <th scope="col">Instrumen</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(book, index) in books"
            :key="book._id"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ book.nama }}</td>
            <td>{{ book.kode }}</td>
            <td>{{ book.instrumen }}</td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import InstrumenCheckBox from '@/components/InstrumenCheckBox'

import BookService from '@/services/BookService'

export default {
  components : {
    SearchBar,
    InstrumenCheckBox
  },
  data() {
    return {
      query: '',
      instruments: '',
      copyCondition: [],
      searchBy: 'nama',
      hasSearched: false,
      books: null
    }
  },
  methods: {
    getBooks() {
      return BookService.get()
    },
    updateInstrumentList(val) {
      this.instruments = val
    },
    async search() {
      this.books = (await BookService.search({
        nama: this.query,
        instrumen: this.instruments,
        softcopy: this.copyCondition.includes("softcopy"),
        hardcopy: this.copyCondition.includes("hardcopy")
      })).data
      this.hasSearched = true
    },
  },
  async created() {
    this.books = (await this.getBooks()).data;
  },
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

#cols-1-search {
  width: 90%;
}

#cols-2-search {
  width: 10%;
}

#cols-1 {
  width: 13%;
}

#cols-2 {
  width: 19%;
}

#cols-3 {
  width: 68%;
}

#kind {
  width: 130px;
}

#row-2 {
  background-color: rgb(247, 243, 243);
  padding: 10px;
}

</style>
