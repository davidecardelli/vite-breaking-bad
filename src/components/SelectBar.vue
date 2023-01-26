<script>
import { store } from '../store/store';
export default {
  name: 'SelectBar',
  data() {
    return { store }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <select>
      <option value="">Apri il menù</option>
      <option :value="pokemonType" v-for="pokemonType in store.pokemonTypes">{{ pokemonType }}</option>
    </select>
  </div>

</template>

<style lang="scss" scoped>

</style>