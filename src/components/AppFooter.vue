<script>
import { store } from '../store/store';
export default {
  name: 'AppFooter',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <footer class="d-flex justify-content-center flex-align-center">
    <img class="img-fluid" src="../assets/pokemon-logo.png" alt="Logo Pokemon">
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: 150px;
}
</style>