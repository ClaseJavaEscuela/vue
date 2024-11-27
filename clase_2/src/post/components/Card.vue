<script setup>
  defineProps({
    titulo:{
      typeof:String,
      default:"Username 85"
    },
    texto:{
      typeof:String,
      default:"Username 85"
    }
  })
</script>

<template>
  <div class="w-52 h-36 border-2 flex flex-col gap-5 items-center">
    <p>{{ titulo }}</p>
    <p>{{ texto }}</p>  
  </div>
</template>
