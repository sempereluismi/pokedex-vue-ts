<template>
    <div class=" w-[100%] h-[100%] fixed top-0 bg-pokemon-bg">
        <NavBar />
        <PokemonInfo />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePokemonStore } from '@/composables/usePokemonStore'

import NavBar from '@/components/NavBar/NavBar.vue';
import PokemonInfo from '@/components/PokemonInfo/PokemonInfo.vue';

export default defineComponent({
    name: 'pokemonView',
    components: {
        NavBar,
        PokemonInfo
    },
    setup() {

        const route = useRoute()
        const id = route.params.id

        const { getPokemonById } = usePokemonStore()

        onMounted(() => {
            getPokemonById(Number(id))
        })

    }
});
</script>
