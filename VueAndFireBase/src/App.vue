<script setup>
  import { RouterView } from 'vue-router';
  import Nav from './components/Nav.vue'
</script>

<template>
  <div >
    <Nav></Nav>
    <div class="flex cont-pages w-full h-[90vh] gap-5 items-center justify-center p-4 text-[#000] font-semibold">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
  .cont-pages{
    overflow-y: auto;
  }
</style>
