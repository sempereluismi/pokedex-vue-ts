import axios from "axios";

const searchPokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export default searchPokemonApi;
