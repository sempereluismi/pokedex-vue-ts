<template>
    <main v-show="!isLoading" class="grid grid-cols-[150px_1fr_1fr_150px] w-full">
        <div class="flex items-center justify-center ml-20 mt-52 cursor-pointer" @click="getPokemonById(id - 1)">
            <router-link :to="{ name: 'pokemonId', params: { id: id - 1 } }"
                class="text-white h-14 bg-slate-400 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
            </router-link>
        </div>
        <div class="flex items-center justify-center">
            <div>
                <img :src="img" alt="">
            </div>
        </div>
        <div>
            <div class="flex justify-center gap-4">
                <button type="button"
                    class="text-white h-14 bg-slate-400 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 cursor-default">
                    <span class="material-symbols-outlined">
                        height
                    </span>
                    {{ height }} m
                </button>
                <button type="button"
                    class="text-white h-14 bg-slate-400 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 cursor-default">
                    <span class="material-symbols-outlined">
                        weight
                    </span>
                    {{ weight }} kg
                </button>
            </div>
            <PokemonStats />
        </div>
        <div class="flex items-center justify-center mt-52 mr-20 cursor-pointer" @click="getPokemonById(id + 1)">
            <router-link :to="{ name: 'pokemonId', params: { id: id + 1 } }"
                class="text-white h-14 bg-slate-400 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <span class="material-symbols-outlined">
                    arrow_forward
                </span>
            </router-link>
        </div>
    </main>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { usePokemonStore } from '@/composables/usePokemonStore';
import PokemonStats from '../PokemonStats/PokemonStats.vue';

export default defineComponent({
    components: { PokemonStats },
    name: 'NavBar',
    setup() {

        const { img, height, weight, stats, isLoading, id, getPokemonById } = usePokemonStore()

        return {
            img, height, weight, stats, isLoading, id, getPokemonById
        }
    }
});

</script>