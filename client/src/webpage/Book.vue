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
        <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="search">Search</button>
      </div>
      <br />
      <div class="row d-flex align-items-center">
        <div class="col-6 col-lg-3 mb-3 mb-lg-0">
          <Selection
            :items="['nama', 'kode']"
            selectionFor="cari dengan"
            @selected="updateSearchBy"
          />
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
        <b-table
          :items="books"
          :fields="['no','nama', 'kode', 'hardcopy', 'softcopy', 'instrumen']"
          striped
          thead-class="thead-dark"
        >
          <template v-slot:cell(no)="data">{{data.index + 1}}</template>
        </b-table>
      </div>
      <div v-if="searching === false">
        <PageNavigation :totalPage="totalPage" @changePage="changePage" :key="searching" />
      </div>
    </b-container>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import InstrumenCheckBox from "@/components/InstrumenCheckBox";
import Loading from "@/components/Loading";
import PageNavigation from "@/components/PageNavigation";
import Selection from "@/components/Selection";

import BookService from "@/services/BookService";

export default {
  components: {
    SearchBar,
    InstrumenCheckBox,
    Loading,
    PageNavigation,
    Selection,
  },
  data() {
    return {
      searchValue: "",
      instruments: "",
      copyCondition: [],
      searchBy: "nama",
      searching: true,
      query: {},
      books: null,
      loading: true,
      totalPage: null,
    };
  },
  methods: {
    async getBooks(pageNumber = 1) {
      this.loading = true;
      const response = (
        await BookService.search({
          query: this.searchValue,
          instrumen: this.instruments,
          searchBy: this.searchBy,
          softcopy: this.copyCondition.includes("softcopy"),
          hardcopy: this.copyCondition.includes("hardcopy"),
          page: pageNumber,
        })
      ).data;
      this.books = response.docs;
      this.totalPage = Math.ceil(response.total / response.limit);
      this.loading = false;
    },
    changePage(pageNumber) {
      this.getBooks(pageNumber);
    },
    async search() {
      this.searching = true;
      await this.getBooks();
      this.searching = false;
    },
    updateSearchBy(searchBy) {
      this.searchBy = searchBy;
    },
    updateInstrumentList(val) {
      this.instruments = val;
    },
  },
  async created() {
    this.search();
  },
};
</script>

<style>
#BooksPage {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
