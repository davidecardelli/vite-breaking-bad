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
  <div class="col-2 card text-center">
    <img class="img-fluid" src="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png"
      alt="nomedelpokemon">
    <p class="number">numero</p>
    <p class="name">nomepokemon</p>
    <p class="type">tipopokemon</p>
  </div>
</template>

<style lang="scss" scoped>
@use'../scss/partials/variables.scss' as *;

.row {
  gap: 10px;

  .card {
    img {
      border-radius: 50%;
      background-color: white;
    }
  }
}

.card {
  img {
    border-radius: 50%;
    background-color: white;
  }
}
</style>