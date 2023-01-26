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
  <main class="container">
    <div class="row justify-content-center p-5">
      <div v-for="pokemon in store.pokemons" :key="pokemon.number" class="col-2 pokemon-card text-center">
        <img class="img-fluid" :src="pokemon.imageUrl" :alt="pokemon.name">
        <p class="number fst-italic pt-2 m-0">#{{ pokemon.number }}</p>
        <p class="name text-uppercase text-nowrap fw-bold py-2 m-0">{{ pokemon.name }}</p>
        <p class="type fst-italic py-0 m-0">{{ pokemon.type1 }}</p>
      </div>
    </div>
  </main>

</template>

<style lang="scss" scoped>
@use'../scss/partials/variables.scss' as *;

.row {
  gap: 20px;
  color: black;

  .pokemon-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    padding: 20px;
    background-color: white;

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
    }

    .number {
      font-size: 12px;
    }

    .name {
      font-size: 18px;
    }

    .type {
      font-size: 14px;
    }
  }
}
</style>