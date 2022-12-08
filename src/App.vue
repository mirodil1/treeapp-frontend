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

<style >
@import "~bulma/css/bulma.css";

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(28, 230, 95);
  border-color: rgb(28, 230, 95) transparent rgb(28, 230, 95) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.is-progress {
  height: 80px;
}
</style>
