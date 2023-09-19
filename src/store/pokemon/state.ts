export interface pokemonState {
  id: number;
  img?: string;
  name: string;
  stats: stats[];
  weight: number;
  height: number;
  isLoading: boolean;
}

export interface stats {
  base_stat: number;
  name_stat: string;
  base_stat_percent: number;
}

function state(): pokemonState {
  return {
    id: 1,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    name: "bulbasaur",
    stats: [
      {
        base_stat: 45,
        name_stat: "hp",
        base_stat_percent: 30,
      },
    ],
    weight: 69,
    height: 7,
    isLoading: true,
  };
}

export default state;
