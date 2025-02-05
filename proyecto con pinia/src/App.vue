<script setup>
  import{RouterView} from 'vue-router';
  import { useCounterStore } from './hooks/counter';
import { storeToRefs } from 'pinia';

  const useCounter =  useCounterStore();
  const {counter,edadUser} = storeToRefs(useCounterStore);
  const {incrementar,decrementar,reset} = useCounter();

</script>

<template>
  <div class="h-[100vh] max-w-full relative">
    
  </div>
    
</template>

<style scoped>

</style>
