export interface pokemonListState {
  pokemons: pokemonInfo[];
  isLoading: boolean;
}

export interface pokemonInfo {
  img?: string;
  id: number;
  name: string;
}

function state(): pokemonListState {
  return {
    pokemons: [
      {
        name: "bulbasour",
        id: 1,
      },
    ],
    isLoading: true,
  };
}

export default state;
