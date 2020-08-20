<template>
  <footer class="d-flex justify-content-center align-items-center flex-column">
    <h6>Email: librarian.iso@gmail.com</h6>
    <h6>Copyright © {{ currentYear }} ITB Student Orchestra. All rights reserved.</h6>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  background-color: black;
  width: 100%;
  height: var(--footer-height);
  line-height: 2;
  margin-top: calc(-1 * var(--footer-height));
  border-top: 2pt solid rgb(255, 248, 225);
}

h6 {
  color: white;
}
</style>
