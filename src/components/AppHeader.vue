<script>
import { store } from '../store/store';
import SelectBar from './SelectBar.vue';


export default {
  name: 'AppFooter',
  data() {
    return { store }
  },
  components: { SelectBar },

}
</script>

<template>
  <div class="container">
    <footer class="d-flex justify-content-around pt-3 pb-3">
      <select-bar></select-bar>
      <img class="img-fluid" src="../assets/pokemon-logo.png" alt="Logo Pokemon">
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use'../scss/partials/variables.scss' as *;

footer {
  height: 120px;
}
</style>