<script>
import axios from 'axios';
import { store } from './store/store.js';
import AppFooter from './components/AppFooter.vue'
import PokemonCard from './components/PokemonCard.vue';

export default {
  name: 'Breaking Bad',

  data() {
    return { store }
  },

  components: { AppFooter, PokemonCard },

  methods: {
    fetchPokemons() {
      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10`)
        .then((res) => {
          store.pokemons = res.data.docs
        })
    },

    fetchTypes() {
      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1`)
        .then((res) => {
          store.types = res.data
        })
    }
  },

  created() { this.fetchPokemons(), this.fetchTypes() }
}
</script>

<template>
  <app-footer></app-footer>
  <pokemon-card></pokemon-card>
</template>

<style lang="scss">
@use'./scss/style.scss'
</style>