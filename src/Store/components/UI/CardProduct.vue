<script setup	>
  import { RouterLink } from 'vue-router';
  defineProps({
    product:{
      typeof:Object,
      default:()=>{}
    }
  })
</script>

<template>
  <RouterLink :to="{ name: 'product', params: { id: product.id || null }}">
    <div class="text-white bg-[#000002] max-w-full w-full rounded-lg flex flex-col items-center gap-10 border-[1px] p-2 h-[35rem]">
    
    <img class="rounded-lg max-w-[250px] h-60 max-h-60" :src="product.image" alt=""> 
    <div class="flex flex-col gap-2 h-72 pl-2 ">
      <p class="title">{{ product.title }}</p>
      <p class="text-xl">${{ product.price }} <span class="text-xs text-green-700 font-bold">{{product.discount}}%OFF</span></p>
      <span class="text-xs font-light">en 24 meses de $500</span>
    </div>
    <div class="p-2 w-[250px] max-w-[250px]">
      <p class="text-green-700">Envio gratis </p>
      <span class="text-xs text-gray-400">Por ser tu primera compra</span>
    </div>
  </div>
  </RouterLink>
</template>

<style scoped>
  .title {
    min-height: 6rem;
    max-height: 6em;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: normal;
    position: relative;
  }

</style>