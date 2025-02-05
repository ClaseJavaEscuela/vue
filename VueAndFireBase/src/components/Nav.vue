<script setup>
  import { RouterLink, useRouter } from 'vue-router';
  import { useUserStore } from '../store/index.js';
  import { storeToRefs } from 'pinia';
  import {MdLogoutRound} from 'oh-vue-icons/icons';
  const useUser = useUserStore();
  const router = useRouter();
  const { user,email, uuid, isActiveUser } = storeToRefs(useUser);
  const { logOut } = useUser;

  const handlerLogOut = async (e) => {
    e.preventDefault();
    try {
      const res = await logOut(router);
      if(!res.email){
        router.push('/login');
      }
    } catch (error) {
      console.log(error);
    }
  }

</script>

<template>
  <div class="flex w-full justify-between items-center bg-transparent p-4 text-[#fff] font-semibold">
    <ul class="flex gap-5 text-2xl text-[#fff]">
      <li><RouterLink to="/" >Home</RouterLink></li>
      <li><RouterLink to="/perfil" >Perfil</RouterLink></li>
      
    </ul>

    <ul v-if="user === null" class="flex gap-5 text-[#fff]">
      <li><RouterLink to="/login" class="bg-[#1c3a9c] p-[7px] rounded-lg font-semibold">Iniciar sesion</RouterLink></li>
      <li><RouterLink to="/register" class="bg-[#961515] ve60u2biabgh4lod461p44jls0 p-[7px] rounded-lg font-semibold" >Registrar cuenta</RouterLink></li>
    </ul>
    <ul v-else class="flex align-bottom  gap-5 text-[#fff]">
      <li class="text-xl p-[4px] text-[#fff] flex align-bottom  ">
        <span>{{ user }}</span>
      </li>
      <li><button @:click="handlerLogOut" class="bg-[#961515] p-[7px] rounded-lg font-semibold">salir</button></li>
    </ul>

  </div>
</template>

<style>
  
</style>