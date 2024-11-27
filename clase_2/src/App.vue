<script setup>
  import CardPersona from './user/components/CardPersona.vue';
  import Contador from './user/components/Contador.vue';
import ListPerson from './user/components/UserPerson.vue';
  import Nav from './user/components/Nav.vue';
import HomePage from './post/pages/HomePage.vue';

  const personas = [
  {
    id:1,
    nombre: "Luis",
    descripcion: "Hola, estoy estudiando vue.",
    urlImagen: "https://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png",
    edad: 15
  },
  {
    id:2,
    nombre: "Ana",
    descripcion: "Hola, soy Ana y me encanta aprender sobre programación.",
    urlImagen: "https://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png",
    edad: 14
  },
  {
    id:3,
    nombre: "Carlos",
    descripcion: "Soy Carlos, un apasionado de la tecnología y los videojuegos.",
    urlImagen: "https://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png",
    edad: 16
  }
];

</script>

<template>
  <div class='w-[100vw]'>
    <Nav/>
    <HomePage/>
  </div>
</template>

<style scoped>
</style>