import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";

export const usePokemonListStore = () => {
  const store = useStore<StateInterface>();

  return {
    isLoading: computed(() => store.state.pokemonList.isLoading),

    // actions

    getPokemonList: (id: string) =>
      store.dispatch("pokemonList/getAllPokemonInfo", id),

    // mutations
    // getters
  };
};
