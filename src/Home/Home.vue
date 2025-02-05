<script>
  import { RouterLink } from 'vue-router';
</script>

<template>
   <div class="w-[full] min-h-screen bg-gradient-to-b from-[#02050a] to-[#0a1520] flex flex-col justify-center items-center text-gray-100 p-6">
    <main class="text-center">
      <h2 class="text-5xl font-extrabold mb-10">Bienvenido a CINETECH</h2>

      <RouterLink to="movies" class="bg-white text-sky-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
        Comienza Ahora
      </RouterLink>
    </main>

  </div>
</template>

<style>

</style>