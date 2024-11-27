<script setup>
  import CardPersona from './CardPersona.vue';
  import {ref} from 'vue';

  defineProps({
    personas:Array
  });
  
  const personaSeleccionada = ref({
    nombre:"luis",
    imgPefil:"#"
  });

  const cambiarNombre = (nombreSeleccionado,url) =>{
    const persona = {...personaSeleccionada.value}
    persona.nombre = nombreSeleccionado;
    persona.imgPefil = url;
    personaSeleccionada.value = {...persona};
  }

</script>

<template>
  <div class="w-[100vw] h-64 border-2 mb-5">
    <h2>nombre: {{ personaSeleccionada.nombre }}</h2>
    <img :src="personaSeleccionada.imgPefil" alt="imagen de perfil" class="borde-2 h-10 w-10 bg-slate-800" >
  </div>
  <div class='w-[100vw]'>
    <div class="w-full grid place-items-center grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-[80vw]">
      <CardPersona  v-for="persona in personas" :key="persona.id"
      :nombre="persona.nombre"
      :descripcion="persona.descripcion"
      :urlImagen="persona.urlImagen"
      :edad="persona.edad"
      @cambiarNombre = "cambiarNombre"
      >
    </CardPersona>
    </div>
  </div>
</template>

<style scoped>
</style>