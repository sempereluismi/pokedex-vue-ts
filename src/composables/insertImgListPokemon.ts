import { StateInterface } from "@/store";
import { getImagePokemon } from "./getImagePokemon";
import { useStore } from "vuex";
import { computed } from "vue";

export const insertImgPokemonList = (id: number) => {
  const store = useStore<StateInterface>();

  getImagePokemon(id).then((urlImg) => {
  });
};
