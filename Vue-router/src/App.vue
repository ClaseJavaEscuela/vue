<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <ul class="flex gap-5">
    <RouterLink to="/phones">phone</RouterLink>
    <RouterLink to="/">HOME</RouterLink>
    <RouterLink to="/tv">TV</RouterLink>
    <RouterLink to="/post">POST</RouterLink>
    <RouterLink to="/movie">Movie</RouterLink>

  </ul>
  <div>
    <RouterView></RouterView>
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
