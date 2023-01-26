<script>
import { store } from '../store/store';
import SelectedBar from './SelectedBar.vue';


export default {
  name: 'AppFooter',
  data() {
    return { store }
  },
  components: { SelectedBar },

}
</script>

<template>
  <div class="container">
    <footer class="d-flex justify-content-around pt-3 pb-3">
      <selected-bar></selected-bar>
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