<template>
  <div>
    <b-container>
      <b-table striped hover :items="queryResult" style="white-space:pre-wrap; word-wrap:break-word"></b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  // Prerequisites: query, book condition, instrument string, and search choice
  props: {
    query: String,
    copyCondition: Array,
    instrument: Array,
    choice: Boolean
  },
  // Store all query results into array
  data: function () {
    return {
      queryResult: []
    }
  },
  // Contain all methods for retrieve data based by query
  methods: {
    // Process the charArray into sorting steps
    retrieval (choice) {
      this.queryResult = [{no:"1", name:"Karuka Hanlao", genre:"Klasik"}]
    },
    sorting (instrument) {
      inst_prio = {P: 1, G: 2, S: 3, B: 4, w: 5, s: 6, p: 7, L: 8}
      prio_inst = {1: P, 2: G, 3: S, 4: B, 5: w, 6: s, 7: p, 8: L}
      var prioArr = []
      var sortedInstrument = []
      for (const obj in instrument) {
        prioArr.push(inst_prio[obj])
      }
      prioArr.sort()
      for (const obj in prioArr) {
        sortedInstrument.push(prio_inst[obj])
      }
      return sortedInstrument
    }
  },
  // Before displaying the result, process the charArray first based on the choice
  mounted () {
    this.retrieval(this.choice)
  },
  // Continous displaying when the user change the query
  watch: {
    query: function () {
      this.retrieval(this.choice)
    }
  }
}
</script>