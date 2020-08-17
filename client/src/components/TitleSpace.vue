<template>
  <h1 id="h1-title">
    <p style="text-align=left; ">{{titleValue}}</p>
  </h1>
</template>

<script>
export default {
  props: {
    titleValue: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

#h1-title {
  font-family: "Righteous", cursive;
}
</style>