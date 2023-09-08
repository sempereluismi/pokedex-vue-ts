<template>
    <h1>pokemon view</h1>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePokemonStore } from '@/composables/usePokemonStore'

export default defineComponent({
    name: 'pokemonView',
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

<style></style>