<template>
    <li class="flex items-center min-w-full">
        <a href="#"
            class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <img class="w-6" src="@/assets/pokeball.svg" alt="">
            <span class="flex-1 ml-3 whitespace-nowrap">{{ name }}</span>
            <img :src="{ img }" alt="">
        </a>
    </li>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'PokemonListInfo',
    props: {
        id: {
            required: true
        },
        name: {
            required: true
        },
        img: {}
    },
    setup(props) {
        return {
        }
    }
});
</script>

<style></style>