<script setup>
  defineProps({
    id:{
      typeof:String,
      default:"null"
    },
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
  <div class=" h-56 p-3 rounded-lg overflow-auto border-2 flex flex-col gap-5">
    <p class="text-2xl font-semibold">{{id}}: {{ titulo }}</p>
    <p class="font-light">{{ texto }}</p>  
  </div>
</template>
