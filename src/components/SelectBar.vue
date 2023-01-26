<script>
import { store } from '../store/store';
export default {
  name: 'SelectBar',
  data() {
    return { store, selectedOption: '' }
  },
  emits: ['option-change'],
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <select v-model="selectedOption" @change="$emit('option-change', selectedOption)">
      <option value="">Apri il menù</option>
      <option :value="pokemonType" :key="pokemonType" v-for="pokemonType in store.pokemonTypes">{{ pokemonType }}
      </option>
    </select>
  </div>

</template>

<style lang="scss" scoped>

</style>