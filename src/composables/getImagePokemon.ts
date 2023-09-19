import { searchPokemonApi } from "@/api";
import { PokemonInterface } from "@/interfaces/pokemon";

export const getImagePokemon = async (id: number) => {
  const { data } = await searchPokemonApi.get<PokemonInterface>(`/${id}`);

  return data.sprites.other?.home.front_default;
};
