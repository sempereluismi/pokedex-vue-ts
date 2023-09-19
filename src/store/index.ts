import { createStore } from "vuex";

// My custom modules
import pokemonModule from "./pokemon";
import { pokemonState } from "./pokemon/state";

import pokemonListModule from "./pokemonList";
import { pokemonListState } from "./pokemonList/state";

export interface StateInterface {
  pokemon: pokemonState;
  pokemonList: pokemonListState;
}

export default createStore<StateInterface>({
  modules: {
    pokemon: pokemonModule,
    pokemonList: pokemonListModule,
  },
});
