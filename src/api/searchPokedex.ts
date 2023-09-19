import axios from "axios";

const getPokemonsInfo = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokedex",
});

export default getPokemonsInfo;
