<script>
import axios from 'axios';
import { store } from './store/store.js';
import AppFooter from './components/AppFooter.vue'
import PokemonCard from './components/PokemonCard.vue';


export default {
  name: 'Breaking Bad',
  data() {
    return {
      store
    }
  },
  components: { AppFooter, PokemonCard }
}
</script>

<template>
  <app-footer></app-footer>
  <pokemon-card></pokemon-card>
</template>

<style lang="scss">
@use'./scss/style.scss'
</style>