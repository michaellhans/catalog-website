<template>
  <div id="SongsPage">
    <h1>
      <p style="text-align=left">ISO Song Finder</p>
    </h1>
    <b-container>
      <div class="d-flex">
        <input
          class="form-control d-inline mr-sm-2"
          v-model="searchValue"
          type="search"
          placeholder="Tulis Nama Lagu"
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
          <select
            class="form-control-inline"
            width="20"
            v-model="jenisAransemen"
            aria-placeholder="Jenis Aransemen"
          >
            <option :value="null">No Filter</option>
            <option value="Aransemen ISO">Aransemen ISO</option>
            <option value="Aransemen Non-ISO">Aransemen Non-ISO</option>
            <option value="Komposisi ISO">Komposisi ISO</option>
            <option value="Komposisi Non-ISO">Komposisi Non-ISO</option>
            <option value="Job">Job</option>
          </select>
        </div>
        <div class="col-6 col-lg-2 d-flex flex-column">
          <div class="form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="klasik"
              :value="true"
              checked
              v-model="isKlasik"
            />
            <label class="form-check-label" for="klasik">Klasik</label>
          </div>
          <div class="form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="non-klasik"
              :value="false"
              v-model="isKlasik"
            />
            <label class="form-check-label" for="non-klasik">Non-Klasik</label>
          </div>
        </div>
        <InstrumenCheckBox @checked="updateInstrumentList" />
      </div>
      <Loading class="mx-auto mt-3" v-if="loading === true" />
      <div v-else>
        <table class="table table-striped mt-3">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col" class="d-none d-md-table-cell">Aransemen</th>
              <th scope="col">Klasik</th>
              <th scope="col">Instrumen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(song, index) in songs" :key="song._id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ song.nama }}</td>
              <td class="d-none d-md-table-cell">{{ song.jenisAransemen }}</td>
              <td>{{ song.klasik }}</td>
              <td>{{ song.instrumen }}</td>
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

import SongService from '@/services/SongService';

export default {
  components: {
    SearchBar,
    InstrumenCheckBox,
    Loading,
    PageNavigation,
  },
  // Container for arrayInput from input box, process boolean, and charArray
  data() {
    return {
      searchValue: '',
      songs: null,
      hasSearched: false,
      instruments: '',
      isKlasik: true,
      jenisAransemen: null,
      query: {},
      loading: true,
      page: 1,
      totalPage: 1,
    };
  },
  methods: {
    async getSongs() {
      this.loading = true;
      const response = (await SongService.search(this.query)).data;
      this.songs = response.docs;
      this.totalPage = response.page;
      this.totalPage = Math.ceil(response.total / response.limit);
      this.hasSearched = true;
      this.loading = false;
    },
    updateInstrumentList(val) {
      this.instruments = val;
    },
    search() {
      this.page = 1;
      this.query = {
        nama: this.searchValue,
        instrumen: this.instruments,
        klasik: this.isKlasik,
        jenisAransemen: this.jenisAransemen,
      };
      this.getSongs();
    },
    nextPage() {
      this.page = this.page === this.totalPage ? 1 : this.page + 1;
      this.getSongs();
    },
    prevPage() {
      this.page = this.page === 1 ? this.totalPage : this.page - 1;
      this.getSongs();
    },
  },
  async created() {
    this.search();
  },
};
</script>

<style>
#SongsPage {
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
