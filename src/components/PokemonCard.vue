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
  <div class="row justify-content-center m-5">
    <div v-for="pokemon in store.pokemons" :key="pokemon.number" class="col-2 pokemon-card text-center">
      <img class="img-fluid" :src="pokemon.imageUrl" :alt="pokemon.name">
      <p class="number">#{{ pokemon.number }}</p>
      <p class="name">{{ pokemon.name }}</p>
      <p class="type">{{ pokemon.type1 }}</p>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use'../scss/partials/variables.scss' as *;

.row {
  gap: 20px;
  color: white;

  .pokemon-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    padding: 20px;
    background-color: black;

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
    }

  }
}
</style>