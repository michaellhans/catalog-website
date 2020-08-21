<template>
  <div class="table-over">
    <b-table :items="items" :fields="header" striped hover thead-class="thead-dark" class="mt-3">
      <!-- if the column name is "no" then data.index + 1 (numbering) -->
      <template v-slot:cell(no)="data">
        <b>{{ data.index + 1 }}</b>
      </template>
      <!-- default column -->
      <template v-slot:cell()="data">
        <!--  -->
        <i v-if="data.value === true" class="fa fa-check" aria-hidden="true"></i>
        <i v-else-if="data.value === false" class="fa fa-times" aria-hidden="true"></i>
        <label v-else v-html="data.value"></label>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    header: Array,
    items: Array,
  },
  computed: {
    ...mapGetters(["getAuthStatus"]),
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

.table-over {
  overflow-x: auto;
  margin-bottom: 50px;
}

.fa-trash {
  color: red;
}
</style>
