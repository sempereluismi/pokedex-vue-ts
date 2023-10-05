import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";

export const usePokemonListStore = () => {
  const store = useStore<StateInterface>();

  return {
    isLoading: computed(() => store.state.pokemonList.isLoading),
    pokemons: computed(() => store.state.pokemonList.pokemons),
    // actions

    getPokemonList: (id: string) =>
      store.dispatch("pokemonList/getAllPokemonInfo", id),

    // mutations
    // getters
  };
};
