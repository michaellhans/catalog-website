<template>
<div class="container">
  <b-jumbotron bg-variant="success" text-variant="white" border-variant="dark">
    <div class="alert alert-success" v-if="getAuthStatus === true">
      Welcome admin {{ getAuthUsername }}!
    </div>

    <template v-slot:header>Welcome to ISO Song Finder!</template>

    <template v-slot:lead>
      This application is made for librarian to add/remove song and for members
      of ITB Student Orchestra to find their favorite song!
    </template>
  </b-jumbotron>
</div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: mapGetters(['getAuthStatus', 'getAuthUsername'])
}
</script>
