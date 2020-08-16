<template>
  <div id="BooksPage">
    <h1>
      <p style="text-align=left">ISO Book Finder</p>
    </h1>
    <b-container>
      <div class="d-flex">
        <input
          class="form-control d-inline mr-sm-2"
          v-model="searchValue"
          type="search"
          :placeholder="`Tulis ${searchBy} buku`"
          aria-label="Search"
          size="120"
        />
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          v-on:click="search"
        >
          Search
        </button>
      </div>
      <br />
      <div class="row d-flex align-items-center">
        <div class="col-6 col-lg-3 mb-3 mb-lg-0">
          <select class="form-control-inline" width="20" v-model="searchBy">
            <option value="nama">Nama Buku</option>
            <option value="kode">Kode Buku</option>
          </select>
        </div>
        <div class="col-6 col-lg-2 d-flex flex-column">
          <!-- <div class="column" id="cols-2"> -->
          <div class="form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="copyCondition"
              name="SoftcopyCheck"
              id="SoftcopyCheck"
              value="softcopy"
              checked
            />
            <label class="form-check-label" for="SoftcopyCheck">Softcopy</label>
          </div>
          <div class="form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="copyCondition"
              name="HardcopyCheck"
              id="HardcopyCheck"
              value="hardcopy"
            />
            <label class="form-check-label" for="HardcopyCheck">Hardcopy</label>
          </div>
        </div>
        <InstrumenCheckBox @checked="updateInstrumentList" />
      </div>
      <label
        style="margin-top: 10px; font-size: 14px"
        v-if="loading === false"
      >Menampilkan {{ books.length }} hasil pencarian buku</label>
      <Loading class="mx-auto mt-3" v-if="loading === true" />
      <div v-else>
        <table class="table table-striped mt-3">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Kode</th>
              <th scope="col">Hardcopy</th>
              <th scope="col">Softcopy</th>
              <th scope="col">Instrumen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in books" :key="book._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ book.nama }}</td>
              <td>{{ book.kode }}</td>
              <td>{{ book.hardcopy }}</td>
              <td>{{ book.softcopy }}</td>
              <td>{{ book.instrumen }}</td>
            </tr>
          </tbody>
        </table>
        <PageNavigation
          :prevPage="prevPage"
          :nextPage="nextPage"
          :page="page"
          :totalPage="totalPage"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar';
import InstrumenCheckBox from '@/components/InstrumenCheckBox';
import Loading from '@/components/Loading';
import PageNavigation from '@/components/PageNavigation';

import BookService from '@/services/BookService';

export default {
  components: {
    SearchBar,
    InstrumenCheckBox,
    Loading,
    PageNavigation,
  },
  data() {
    return {
      searchValue: '',
      instruments: '',
      copyCondition: [],
      searchBy: 'nama',
      hasSearched: false,
      query: {},
      books: null,
      loading: true,
      page: 1,
      totalPage: 1,
    };
  },
  methods: {
    updateInstrumentList(val) {
      this.instruments = val;
    },
    async getBooks() {
      this.loading = true;
      const response = (await BookService.search(this.query)).data;
      this.books = response.docs;
      this.totalPage = Math.ceil(response.total / response.limit);
      this.hasSearched = true;
      this.loading = false;
    },
    nextPage() {
      this.page = this.page === this.totalPage ? 1 : this.page + 1;
      this.getBooks();
    },
    prevPage() {
      this.page = this.page === 1 ? this.totalPage : this.page - 1;
      this.getBooks();
    },
    search() {
      this.page = 1;
      this.query = {
        query: this.searchValue,
        instrumen: this.instruments,
        searchBy: this.searchBy,
        softcopy: this.copyCondition.includes('softcopy'),
        hardcopy: this.copyCondition.includes('hardcopy'),
        page: this.page,
      };
      this.getBooks();
    },
  },
  async created() {
    this.search();
  },
};
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
