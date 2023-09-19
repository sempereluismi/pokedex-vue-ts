<template>
  <main class="w-[100%] h-[100%] fixed top-0 bg-pokemon-bg">
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { usePokemonListStore } from '@/composables/usePokemonListStore'


export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup() {

    const { getPokemonList } = usePokemonListStore()

    onMounted(() => {
      getPokemonList('1')
    })

    return {
    }
  }
});
</script>
