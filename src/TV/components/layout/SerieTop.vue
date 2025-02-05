<script setup>
  import { RouterLink } from 'vue-router';
  import { BASE_URL_IMG } from '../../../api/utils.js';
  import Flecha from '../../components/UI/Flecha.vue';
  
  defineProps({
    serie:{
      typeof: Object,
      default:()=>{}
    }
  })
</script>
//poster_path
<template>
  <div :style="{
  backgroundImage: `url(${BASE_URL_IMG}${serie.backdrop_path})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  minHeight: '100vh',
  maxHeight: '100vh',
  backgroundColor: 'rgba(0, 0, 0, .3)',
  backgroundBlendMode: 'overlay'
}"
 class="max-w-full flex pl-2 items-center gap-4">
    <div class="flex flex-col gap-5 pl-5">
      <h2 class="text-white text-8xl font-bold">{{ serie.name }}</h2>
      <div class="pl-2 flex gap-5">
        <button class="capitalize bg-red-500 text-white font-bold pl-2 pr-2 rounded-md">play now</button>
        <RouterLink :to="{ name:'serie',params:{id:serie.id?serie.id:157336}}" class="bg-white pl-2 pr-2 rounded-md font-bold">mas información</RouterLink>
      </div>
      <div class="max-w-[500px] pl-2">
        <p class="w-full text-white font-normal">{{ serie.overview?serie.overview:"Sin descripcion" }}</p>
      </div>
    </div>

    <Flecha></Flecha>
  </div>
</template>

<style>

</style>