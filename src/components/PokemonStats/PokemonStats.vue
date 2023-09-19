<template>
    <main class="bg-zinc-400 mx-10 h-full rounded-xl flex flex-col justify-center mt-10">
        <div v-for="stat in stats" :key="stat.name_stat" class="flex gap-2 px-10 py-7 items-center">
            <div class=" w-72 text-secondary text-xl font-extrabold">
                {{ stat.name_stat }}
            </div>
            <div class="w-full rounded-sm">
                <div class="bg-green-700 text-sm font-medium text-secondary text-center p-2 leading-none rounded-sm"
                    :style="{ width: stat.base_stat_percent + '%' }">{{ stat.base_stat }}</div>
            </div>
        </div>
    </main>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import { usePokemonStore } from '@/composables/usePokemonStore';

export default defineComponent({
    name: 'NavBar',
    setup() {

        const { stats } = usePokemonStore()

        return {
            stats,
        }
    }
});

</script>
