<template>
  <div class="web-page">
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
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          v-on:click="search"
        >
          Search
        </button>
      </div>
      <br />
      <div class="filter-option row d-flex align-items-center">
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
      <label style="margin-top: 10px; font-size: 14px" v-if="loading === false"
        >Ada {{ totalBook }} hasil pencarian buku</label
      >
      <Loading class="mx-auto mt-3" v-if="loading === true" />
      <div v-else>
        <Result
          :header="['no', 'nama', 'kode', 'softcopy', 'hardcopy', 'instrumen']"
          :items="books"
        />
      </div>
      <div v-if="searching === false && totalPage > 1">
        <PageNavigation
          :totalPage="totalPage"
          @changePage="changePage"
          :key="searching"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import TitleSpace from '@/components/TitleSpace';
import InstrumenCheckBox from '@/components/InstrumenCheckBox';
import Loading from '@/components/Loading';
import PageNavigation from '@/components/PageNavigation';
import Selection from '@/components/Selection';
import Result from '@/components/Result';

import BookService from '@/services/BookService';

export default {
  components: {
    TitleSpace,
    InstrumenCheckBox,
    Loading,
    PageNavigation,
    Selection,
    Result,
  },
  data() {
    return {
      searchValue: '',
      instruments: '',
      copyCondition: [],
      searchBy: 'nama',
      searching: true,
      query: {},
      books: null,
      loading: true,
      totalPage: null,
      totalBook: null,
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
          softcopy: this.copyCondition.includes('softcopy'),
          hardcopy: this.copyCondition.includes('hardcopy'),
          page: pageNumber,
        })
      ).data;
      this.totalBook = response.total;
      this.books = response.docs;
      console.log(this.books);
      this.totalPage = response.pages;
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
