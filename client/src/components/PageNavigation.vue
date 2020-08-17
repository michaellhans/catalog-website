<template>
  <div class="d-flex justify-content-center align-items-center my-3">
    <button class="btn btn-primary" v-on:click="prevPage" :disabled="totalPage === 1">Prev</button>
    <p class="px-5 my-auto">Page {{ page }}/{{ totalPage }}</p>
    <button class="btn btn-primary" v-on:click="nextPage" :disabled="totalPage === 1">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: Number,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    nextPage() {
      this.page = this.page === this.totalPage ? 1 : this.page + 1;
      this.emitPage();
    },
    prevPage() {
      this.page = this.page === 1 ? this.totalPage : this.page - 1;
      this.emitPage();
    },
    emitPage() {
      this.$emit("changePage", this.page);
    },
  },
};
</script>
