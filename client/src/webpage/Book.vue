<template>
  <div class="normal-page">
    <b-container>
      <TitleSpace :titleValue="'ISO Book Finder'"></TitleSpace>
      <div class="d-flex">
        <input
          class="form-control d-inline mr-sm-2"
          v-model="searchValue"
          type="search"
          :placeholder="`Ketik ${searchBy} buku`"
          aria-label="Search"
          size="120"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="search">Search</button>
      </div>
      <br />
      <div id="filterOption" class="row d-flex align-items-center">
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
        <Result
          :header="['No', 'Nama', 'Kode Buku', 'Softcopy', 'Hardcopy', 'Instrumen']"
          :songs="books"
        />
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
import TitleSpace from "@/components/TitleSpace";
import InstrumenCheckBox from "@/components/InstrumenCheckBox";
import Loading from "@/components/Loading";
import PageNavigation from "@/components/PageNavigation";
import Result from "@/components/Result";

import BookService from "@/services/BookService";

export default {
  components: {
    TitleSpace,
    InstrumenCheckBox,
    Loading,
    PageNavigation,
    Result,
  },
  data() {
    return {
      searchValue: "",
      instruments: "",
      copyCondition: [],
      searchBy: "nama",
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
        softcopy: this.copyCondition.includes("softcopy"),
        hardcopy: this.copyCondition.includes("hardcopy"),
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
</style>
