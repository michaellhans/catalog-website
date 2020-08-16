<template>
  <div class="d-flex justify-content-center align-items-center">
    <button
      class="btn btn-primary"
      v-on:click="prevPage"
      :disabled="totalPage === 1"
    >
      Prev
    </button>
    <p class="px-5 my-auto">Page {{ page }}/{{ totalPage }}</p>
    <button
      class="btn btn-primary"
      v-on:click="nextPage"
      :disabled="totalPage === 1"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
    totalPage: Number,
    nextPage: Function,
    prevPage: Function,
  },
};
</script>
