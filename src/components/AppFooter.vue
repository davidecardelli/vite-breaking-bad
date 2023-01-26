<script>
import { store } from '../store/store';
export default {
  name: 'AppFooter',
  data() {
    return { store }
  }
}
</script>

<template>
  <footer class="d-flex justify-content-center flex-align-center mt-2">
    <img class="img-fluid" src="../assets/pokemon-logo.png" alt="Logo Pokemon">
  </footer>
</template>

<style lang="scss" scoped>
@use'../scss/partials/variables.scss' as *;

footer {
  height: 120px;
}
</style>