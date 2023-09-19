import { MutationTree } from "vuex";
import { pokemonState } from "./state";
import { PokemonInterface } from "@/interfaces/pokemon";

const mutation: MutationTree<pokemonState> = {
  setValuesPokemon(state: pokemonState, values: PokemonInterface) {
    state.id = values.id;
    state.name = values.name;
    state.height = values.height / 10;
    state.weight = values.weight / 10;
    state.img = values.sprites.other?.home.front_default;

    state.stats = [];

    values.stats.forEach((e) => {
      state.stats.push({
        base_stat: e.base_stat,
        name_stat: e.stat.name.toUpperCase(),
        base_stat_percent:
          (100 * e.base_stat) / 120 > 100 ? 100 : (100 * e.base_stat) / 120,
      });
    });

    setTimeout(() => {
      state.isLoading = false;
    }, 300);
  },

  setIsLoadingTrue(state) {
    state.isLoading = true;
  },
};

export default mutation;
