<script setup>
  import { RouterLink } from 'vue-router';
  import { BASE_URL_IMG } from '../../../api/utils.js';
  import Flecha from '../UI/Flecha.vue';
  
  defineProps({
    movie:{
      typeof: Object,
      default:()=>{}
    }
  })
</script>
//poster_path
<template>
  <div :style="{
  backgroundImage: `url(${BASE_URL_IMG}${movie.backdrop_path})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  minHeight: '100vh',
  maxHeight: '100vh',
  backgroundColor: 'rgba(0, 0, 0, .2)',
  backgroundBlendMode: 'overlay'
}"
 class="max-w-full flex pl-2 items-center gap-4 relative">
    <div class="flex flex-col gap-5 pl-5">
      <h2 class="text-white text-8xl font-bold">{{ movie.title }}</h2>
      <div class="pl-2 flex gap-5">
        <button class="capitalize bg-red-500 text-white font-bold pl-2 pr-2 rounded-md">play now</button>
        <RouterLink class="bg-white pl-2 pr-2 rounded-md font-bold" :to="{ name:'movie',params:{id:movie.id?movie.id:157336}}">
        mas información
        </RouterLink>
      </div>
      <div class="pl-2">
        <span class="font-bold text-white text-xl">{{movie.release_date ? movie.release_date.slice(0,4):"" }}</span>
      </div>
      <div class="max-w-[500px] pl-2">
        <p class="w-full text-white font-light">{{ movie.overview?movie.overview:"Sin descripcion" }}</p>
      </div>
    </div>

    <Flecha></Flecha>
  </div>
</template>

<style>

</style>