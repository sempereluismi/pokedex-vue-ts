import { createStore } from "vuex";

// My custom modules
import pokemonModule from "./pokemon";
import  { pokemonState }  from "./pokemon/state";

export interface StateInterface {
  pokemon: pokemonState;
}

export default createStore<StateInterface>({
  modules: {
    pokemon: pokemonModule,
  },
});
