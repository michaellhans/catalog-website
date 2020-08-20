<template>
  <div class="my-3">
    <h1 id="h1-title">
      <b>
        {{ titleValue }}
      </b>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    titleValue: String,
  },
};
</script>

<style scoped>
#h1-title {
  font-family: var(--main-font), serif;
}
</style>
