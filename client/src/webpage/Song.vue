<template>
  <div class="normal-page">
    <TitleSpace :titleValue="'ISO Song Finder'" />
    <b-container>
      <div class="d-flex">
        <input
          class="form-control d-inline mr-sm-2"
          v-model="searchValue"
          type="search"
          placeholder="Ketik nama lagu"
          aria-label="Search"
          size="120"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="search">Search</button>
      </div>
      <br />
      <div class="filter-option row d-flex align-items-center">
        <div class="col-6 col-lg-3 mb-3 mb-lg-0">
          <Selection
            selectionFor="jenis aransemen"
            :items="['Aransemen Non-ISO', 'Komposisi ISO', 'Komposisi Non-ISO', 'Job']"
            @selected="updateJenisAransemen"
          />
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
      <label
        style="margin-top: 10px; font-size: 14px"
        v-if="loading === false"
      >Ada {{ totalSong }} hasil pencarian buku</label>
      <Loading class="mx-auto mt-3" v-if="loading === true" />
      <div v-else>
        <Result :header="['no', 'nama', 'jenisAransemen', 'klasik', 'instrumen']" :items="songs" />
      </div>
      <div v-if="(searching === false) && (totalPage > 1)">
        <PageNavigation :totalPage="totalPage" @changePage="changePage" :key="searching" />
      </div>
    </b-container>
  </div>
</template>

<script>
import TitleSpace from "@/components/TitleSpace";
import InstrumenCheckBox from "@/components/InstrumenCheckBox";
import Loading from "@/components/Loading";
import PageNavigation from "@/components/PageNavigation";
import Selection from "@/components/Selection";
import Result from "@/components/Result";

import SongService from "@/services/SongService";

export default {
  components: {
    TitleSpace,
    InstrumenCheckBox,
    Loading,
    PageNavigation,
    Selection,
    Result,
  },
  // Container for arrayInput from input box, process boolean, and charArray
  data() {
    return {
      searchValue: "",
      songs: null,
      instruments: "",
      isKlasik: true,
      jenisAransemen: null,
      loading: true,
      totalPage: 1,
      totalSong: null,
      searching: true,
    };
  },
  methods: {
    async getSongs(pageNumber = 1) {
      this.loading = true;
      const response = (
        await SongService.search({
          nama: this.searchValue,
          instrumen: this.instruments,
          klasik: this.isKlasik,
          jenisAransemen: this.jenisAransemen,
          page: pageNumber,
        })
      ).data;
      console.log(response);
      this.songs = response.docs;
      this.totalPage = response.pages;
      this.totalSong = response.total;
      this.loading = false;
    },
    updateInstrumentList(val) {
      this.instruments = val;
    },
    updateJenisAransemen(jenisAransemen) {
      this.jenisAransemen = jenisAransemen;
    },
    async search() {
      this.searching = true;
      await this.getSongs();
      this.searching = false;
    },
    async changePage(pageNumber) {
      this.getSongs(pageNumber);
    },
  },
  async created() {
    this.search();
  },
};
</script>

<style>
#SongsPage {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

#filterOption {
  background-color: rgb(247, 243, 243);
  border: 0px solid;
  border-radius: 10px;
  padding: 10px;
}
</style>
