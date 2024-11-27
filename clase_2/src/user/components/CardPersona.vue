<script setup>
//con esta funcion definimos los componentes
  defineProps({
    nombre:{
      typeof:String,
      default:"Username 85"
    },
    edad:{
      typeof: String
    },
    descripcion:{
      typeof:String,
      default:"Sin descripcion"
    },
    urlImagen:{
      typeof:String,
      Required: true
    }
  })


</script>

<template>
  <div class="flex flex-col pt-5 justify-between border-2 min-w-64 max-w-64 items-center min-h-full max-h-full pb-5 gap-4 rounded-lg">
      <div class="flex max-w-72 w-72 flex-col items-center h-15 gap-2">
        <img class="h-32 w-32 rounded-full border-2 object-cover" :src="urlImagen" alt="i">
        <span class="text-2xl font-bold capitalize">{{nombre}}</span>
      </div>
      <div class="flex flex-col mt-4 p-3">
        <p class="text-wrap max-h-24 min-h-24">{{ descripcion?? "No tiene descripcion" }}</p>
        <span class="mt-2">Edad: <span class="text-[#000] font-extrabold">{{ edad??"Edad desconocida" }}</span></span>
      </div>
      <button @:click="$emit('cambiarNombre',nombre,urlImagen)" class="text-[#fff] rounded-md w-[80%] font-bold bg-[#2746d1] outline-none">saber mas</button>
  </div>
</template>

<style>

</style>