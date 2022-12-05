<template>
  <Navigation />
  <router-view/>
</template>

<script>
import axios from "axios"
import Navigation from "./views/Navigation.vue"

export default {
  name: 'App',
  components: { Navigation },
  beforeCreate() {
    this.$store.commit('initializeTree')

    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
      axios.defaults.headers.common['Authorization'] = ""
    }
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
