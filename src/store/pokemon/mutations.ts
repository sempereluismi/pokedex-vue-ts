import { MutationTree } from "vuex";
import { pokemonState } from "./state";
import { PokemonInterface } from "@/interfaces/pokemon";

const mutation: MutationTree<pokemonState> = {
  setValuesPokemon(state: pokemonState, values: PokemonInterface) {
    state.id = values.id;
    state.name = values.name;
    state.height = values.height;
    state.weight = values.weight;
    state.img = values.sprites.front_default;

    state.stats = []

    values.stats.forEach((e) => {
      state.stats.push({
        base_stat: e.base_stat,
        name_stat: e.stat.name,
      });
    });
  },
};

export default mutation;
