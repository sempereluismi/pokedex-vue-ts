import { ActionTree } from "vuex";
import { pokemonState } from "./state";
import { StateInterface } from "../index";
import { searchPokemonApi } from "@/api";
import { PokemonInterface } from "@/interfaces/pokemon";

const actions: ActionTree<pokemonState, StateInterface> = {
  async getPokemonById({ commit }, id: number) {
    const { data } = await searchPokemonApi.get<PokemonInterface>(`/${id}`);
    commit("setIsLoadingTrue");
    commit("setValuesPokemon", data);
  },
};

export default actions;
