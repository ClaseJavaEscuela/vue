<script setup>
  import CardPersona from './user/components/CardPersona.vue';
import Contador from './user/components/Contador.vue';
  import Nav from './user/components/Nav.vue';

  const info ={
    nombre:"luis",
    descripcion:"hola me llamo luis y estoy en mi salon tomando una clase sobre vueJS",
    urlImagen: "https://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png"
  }

</script>

<template>
  <div class='w-[100vw]'>
    <Nav/>
    <div class="w-[100vw] flex justify-center">
      <CardPersona 
      >
    </CardPersona>
    </div>
  </div>
</template>

<style scoped>
</style>