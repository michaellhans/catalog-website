<template>
  <div id="BooksPage">
    <h1><p style="text-align=left">ISO Book Finder</p></h1>
    <b-container>
      <div class="row" id="row-1">
        <div class="column" id="cols-1-search">
          <input class="form-control mr-sm-2 inline" v-model="query" type="search" placeholder="Search" aria-label="Search" size="120">
        </div>
        <div class="column" id="cols-2-search">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="execute" type="submit">Search</button>
        </div>
      </div>
      <br>
      <div class="row" id="row-2">
        <div class="column" id="cols-1">
          <select class="form-control-inline" id=kind v-model="searchBy">
            <option value="Nama Buku">Nama Buku</option>
            <option value="Kode Buku">Kode Buku</option>
          </select>
        </div>
        <div class="column" id="cols-2">
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="copyCondition" name="SoftcopyCheck" id="SoftcopyCheck" value="Softcopy" checked>
            <label class="form-check-label" for="SoftcopyCheck">Softcopy</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="copyCondition" name="HardcopyCheck" id="HardcopyCheck" value="Hardcopy">
            <label class="form-check-label" for="HardcopyCheck">Hardcopy</label>
          </div>
        </div>
        <div class="column" id="cols-3">
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="instrument" value="P" id="PianoCheck">
            <label class="form-check-label" for="PianoCheck">Piano</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="instrument" value="G" id="GuitarCheck">
            <label class="form-check-label" for="GuitarCheck">Guitar</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="instrument" value="S" id="StringCheck">
            <label class="form-check-label" for="StringCheck">String</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="instrument" value="B" id="BrassCheck">
            <label class="form-check-label" for="BrassCheck">Brass</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="instrument" value="W" id="WindCheck">
            <label class="form-check-label" for="WindCheck">Wood Wind</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="instrument" value="s" id="SaxoCheck">
            <label class="form-check-label" for="SaxoCheck">Saxophone</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="instrument" value="p" id="PercussionCheck">
            <label class="form-check-label" for="PercussionCheck">Percussion</label>
          </div>
          <div class="form-check-inline">
            <input class="form-check-input" type="checkbox" v-model="instrument" value="L" id="LainLainCheck">
            <label class="form-check-label" for="LainLainCheck">Lain-lain</label>
          </div>
        </div>
      </div>
      <div v-if="this.clicked === true">
        <Result :query="this.query" :instrument="this.instrument" :copyCondition="this.copyCondition" :choice="this.searchBy" />
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
import Result from '@/components/BookResult'
import BookService from '@/services/BookService'

export default {
  components : {
    SearchBar,
    Result
  },
  data() {
    return {
      clicked: false,
      query: '',
      instrument: [],
      copyCondition: [],
      searchBy: '',
      books: null
    }
  },
  methods: {
    execute () {
      this.clicked = true
    },
    getBooks() {
      return BookService.get()
    }
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
