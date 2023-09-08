import { GetterTree } from "vuex";
import { pokemonState } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<pokemonState, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
