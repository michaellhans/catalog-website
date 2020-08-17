<template>
  <table class="table table-striped mt-3" v-if="songs.length > 0">
    <thead class="thead-dark">
      <tr>
        <th scope="col" v-for="(colName) in header" :key="colName._id">{{ colName }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(song, index) in songs" :key="song._id">
        <td v-for="(value, propertyName) in song" :key="value._id">
          <i v-if="value === true" class="fa fa-check" aria-hidden="true"></i>
          <i v-else-if="value === false" class="fa fa-times" aria-hidden="true"></i>
          <label v-else-if="propertyName === '_id'">
            <b>{{index + 1}}</b>
          </label>
          <label v-else>{{ value }}</label>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    header: Array,
    songs: Array,
  },
};
</script>

<style scoped>
.fa-check {
  color: green;
}

.fa-times {
  color: red;
}
</style>
