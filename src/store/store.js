import { reactive } from 'vue'

export const store = reactive({
    pokemons: [],
    pokemonTypes: [],
    isLoading: false
});
