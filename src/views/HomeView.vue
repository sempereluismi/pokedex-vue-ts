<template>
  <main class="w-[100%] h-[100%] fixed top-0 bg-pokemon-bg grid grid-cols-2">
    <div>
      <img src="" alt="">
    </div>
    <div>
      <PokemonList />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePokemonListStore } from '@/composables/usePokemonListStore'
import PokemonList from '@/components/PokemonList/PokemonList.vue'


export default defineComponent({
  name: 'HomeView',
  components: {
    PokemonList
  },
  setup() {

    const { getPokemonList } = usePokemonListStore()

    getPokemonList('1')

    return {
    }
  }
});
</script>
