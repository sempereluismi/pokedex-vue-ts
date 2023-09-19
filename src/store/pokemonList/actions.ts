import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { pokemonListState } from "./state";
import { getPokemonsInfo } from "@/api";
import { PokedexInterface } from "@/interfaces/pokedex";

const actions: ActionTree<pokemonListState, StateInterface> = {
  async getAllPokemonInfo({ commit }, pokedexId) {
    this.state.pokemonList.isLoading = true;
    const { data } = await getPokemonsInfo.get<PokedexInterface>(
      `/${pokedexId}`
    );
    commit("addPokemonInfo", data);
    this.state.pokemonList.isLoading = false;
  },
};

export default actions;
