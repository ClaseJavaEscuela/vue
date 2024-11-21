<script setup>
//con esta funcion definimos los componentes
  defineProps({
    nombre:{
      typeof:String,
      default:"Username 85"
    },
    descripcion:{
      typeof:String,
      default:"Sin descripcion"
    },
    urlImagen:{
      typeof:String,
      default:"#"
    }
  })


</script>

<template>
  <div class="flex flex-col border-2 max-w-56 pt-5 rounded-lg">
      <div class="flex flex-col items-center h-15 gap-2">
        <img class="h-36 rounded-full w-36 border-2 object-cover" :src="urlImagen" alt="i">
        <span class="text-2xl font-bold">{{nombre}}</span>
      </div>
      <div class="flex flex-col mt-4 p-3">
        <p class="text-wrap">{{ descripcion?? "No tiene descripcion" }}</p>
        <span class="mt-2">edad:15</span>
      </div>
  </div>
</template>

<style>
  
</style>