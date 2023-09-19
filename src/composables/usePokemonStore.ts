import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";

export const usePokemonStore = () => {
  const store = useStore<StateInterface>();

  return {
    id: computed(() => store.state.pokemon.id),
    img: computed(() => store.state.pokemon.img),
    name: computed(() => store.state.pokemon.name),
    stats: computed(() => store.state.pokemon.stats),
    weight: computed(() => store.state.pokemon.weight),
    height: computed(() => store.state.pokemon.height),
    isLoading: computed(() => store.state.pokemon.isLoading),

    // actions

    getPokemonById: (id: number) =>
      store.dispatch("pokemon/getPokemonById", id),

    // mutations

    // getters
  };
};

