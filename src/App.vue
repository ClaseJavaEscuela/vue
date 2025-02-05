<script setup>
  import{RouterView} from 'vue-router';
  import HeaderPage from "./components/layout/HeaderPage.vue"

</script>

<template>
  <div class="h-[100vh] max-w-full relative">
    <HeaderPage></HeaderPage>
    <RouterView class="pb-20" >
    </RouterView>
  </div>
    
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
