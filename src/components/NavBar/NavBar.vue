<template>
    <nav class="flex justify-between items-center p-10">
        <div>
            <router-link :to="{ name: 'home' }"
                class="text-white h-14 bg-slate-400 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                <span class="material-symbols-outlined">
                    arrow_back
                </span>
            </router-link>
        </div>
        <div class="flex items-center">
            <button type="button"
                class="text-white h-14 bg-slate-400 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 cursor-default">
                <img class="w-8 mr-4" src="@/assets/pokeball.png" alt="pokeball">
                {{ id }}
            </button>
            <button type="button"
                class="text-white h-14 bg-slate-400 font-extrabold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 cursor-default">
                {{ name }}
            </button>
        </div>
    </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { usePokemonStore } from '@/composables/usePokemonStore';
export default defineComponent({
    name: 'NavBar',
    setup() {

        const { id, name } = usePokemonStore()

        return {
            id,
            name
        }
    }
});
</script>
<style></style>