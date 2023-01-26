<script>
import axios from 'axios';
import { store } from './store/store.js';
import AppHeader from './components/AppHeader.vue'
import PokemonCard from './components/PokemonCard.vue';

export default {
  name: 'Breaking Bad',

  data() {
    return { store, baseUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10' }
  },

  components: { AppHeader, PokemonCard },

  methods: {
    fetchPokemons(url) {
      axios.get(url)
        .then((res) => {
          store.pokemons = res.data.docs
        })
    },

    fetchTypes() {
      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1`)
        .then((res) => {
          store.pokemonTypes = res.data
        })
    },

    filterPokemon(type) {
      const url = type ? `${this.baseUri}&eq[type1]=${type}` : this.baseUri;
      this.fetchPokemons(url);
    },
  },

  created() { this.fetchPokemons(this.baseUri), this.fetchTypes() }
}
</script>

<template>
  <app-header @option-change="filterPokemon"></app-header>
  <pokemon-card></pokemon-card>
</template>

<style lang="scss">
@use'./scss/style.scss'
</style>