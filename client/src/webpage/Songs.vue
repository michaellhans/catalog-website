<template>
  <div id="SongsPage">
    <h1><p style="text-align=left">ISO Song Finder</p></h1>
    <b-container>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2 inline" type="search" placeholder="Search" aria-label="Search" size="120">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <br>
    <div class="row">
      <div class="column" id="cols-1">
        <select class="form-control-inline" id=kind width="20">
          <option value="">No Filter</option>
          <option value="Aransemen ISO">Aransemen ISO</option>
          <option value="Aransemen Non-ISO">Aransemen Non-ISO</option>
          <option value="Komposisi ISO">Komposisi ISO</option>
          <option value="Komposisi Non-ISO">Komposisi Non-ISO</option>
          <option value="Job">Job</option>
        </select>
      </div>
      <div class="column" id="cols-2">
        <div class="form-check-inline">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Klasik" checked>
          <label class="form-check-label" for="exampleRadios1">Klasik</label>
        </div>
        <div class="form-check-inline">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Non-Klasik">
          <label class="form-check-label" for="exampleRadios2">Non-Klasik</label>
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
    <b-table striped hover :items="currentStep" style="white-space:pre-wrap; word-wrap:break-word"></b-table>
    <!-- If the button pressed, show the sorting result -->
    <div v-if="this.clicked === true">
      <Result :query="query" :choice="true" />
    </div>
    </b-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import Result from '@/components/BookResult'

export default {
  components : {
    SearchBar,
    Result
  },
  // Container for arrayInput from input box, process boolean, and charArray
  data: function () {
    return {
      query: '',
      clicked: false
    }
  },
  methods: {
    execute () {
      this.clicked = true
    }
  }
}
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