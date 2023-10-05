<template>
    <main class="grid place-items-center mt-64">
        <ul>
            <pokemon-list-info v-for="pokemon in pokemons" :key="pokemon.id" :name="pokemon.name" :id="pokemon.id"
                :img="pokemon.img" />
        </ul>
    </main>
</template>

<script lang='ts'>
import { usePokemonListStore } from '@/composables/usePokemonListStore';
import { defineComponent } from 'vue';
import PokemonListInfo from '../PokemonListInfo/PokemonListInfo.vue';
export default defineComponent({
    name: 'PokemonList',
    components: {
        PokemonListInfo

    },
    setup() {

        const { pokemons } = usePokemonListStore()

        return {
            pokemons
        }
    }
});
</script>

