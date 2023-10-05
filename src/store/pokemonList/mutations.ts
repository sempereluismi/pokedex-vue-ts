import { MutationTree } from "vuex";
import { pokemonListState } from "./state";
import { PokedexInterface } from "@/interfaces/pokedex";

import { getImagePokemon } from "@/composables/getImagePokemon";

const mutation: MutationTree<pokemonListState> = {
  addPokemonInfo(state: pokemonListState, data: PokedexInterface) {
    state.pokemons = [];
    data.pokemon_entries.forEach((pokemon) => {
      state.pokemons?.push({
        id: pokemon.entry_number,
        name: pokemon.pokemon_species.name,
        img: "",
      });
      getImagePokemon(pokemon.entry_number).then((imgUrl) => {
        if (imgUrl !== null && imgUrl !== undefined)
          state.pokemons[pokemon.entry_number - 1].img = imgUrl;
      });
    });
  },
};

export default mutation;
