<script setup>
  import { storeToRefs } from 'pinia';
  import {useUserStore} from '../store/index.js'

  const useUser = useUserStore();
  const {user,uuid,isActiveUser} = storeToRefs(useUser);
  
  const  {loginUser}= useUser;


</script>

<template>
  <div class="h-full pl-5 flex flex-col justify-start gap-16 items-start text-[#fff] pt-5">
    <h1 class="text-4xl font-semibold">Bienvenido a la pagina de inicio</h1>
    <p class="text-xl">Esta es la pagina de inicio de la aplicacion</p>
  </div>
</template>

<style>
  
</style>