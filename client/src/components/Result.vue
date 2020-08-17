<template>
  <div class>
    <b-table :items="items" :fields="header" striped thead-class="thead-dark" class="mt-3">
      <!-- if the column name is "no" then data.index + 1 (numbering) -->
      <template v-slot:cell(no)="data">{{ data.index + 1 }}</template>
      <!-- default column -->
      <template v-slot:cell()="data">
        <!--  -->
        <i v-if="data.value === true" class="fa fa-check" aria-hidden="true"></i>
        <i v-else-if="data.value === false" class="fa fa-times" aria-hidden="true"></i>
        <label v-else>{{ data.value }}</label>
      </template>
    </b-table>
    <!-- <table class="table table-striped mt-3" v-if="items.length > 0">
      <thead class="thead-dark">
        <tr>
          <th scope="col" v-for="(colName) in header" :key="colName._id">{{ colName }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item._id">
          <td v-for="(value, propertyName) in item" :key="value._id">
            <i v-if="value === true" class="fa fa-check" aria-hidden="true"></i>
            <i v-else-if="value === false" class="fa fa-times" aria-hidden="true"></i>
            <label v-else-if="propertyName === '_id'">
              <b>{{index + 1}}</b>
            </label>
            <label v-else>{{ value }}</label>
          </td>
        </tr>
      </tbody>
    </table>-->
  </div>
</template>

<script>
export default {
  props: {
    header: Array,
    items: Array,
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

table {
  margin-bottom: 50px;
}

.table-striped > tbody > tr:hover,
.table-striped > tbody > tr:hover {
  background-color: #ffffe7;
}
</style>
