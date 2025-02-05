<script setup>
  import { storeToRefs } from 'pinia';
  import {useUserStore} from '../store/index.js'
  import { computed, ref } from 'vue';
  import { RouterLink, useRouter} from 'vue-router';

  const email = ref('');
  const password = ref('');
  const router = useRouter();

  const useUser = useUserStore();
  const {user,error} = storeToRefs(useUser);
  const {loginUser}= useUser;

  const formValid = computed(() => {
    return email.value.length>=1 && password.value.length>=1;
  })

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email.value,password.value,router);
      if(res){
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }

  }

</script>

<template>
  <div class="flex w-full h-full gap-5 items-center justify-center text-[#000] font-semibold">
    <div class="
    sm:min-w-[10rem] sm:max-w-[15rem]
    lg:min-w-[25rem] lg:rounded-lg lg:max-w-[25rem] lg:h-auto lg:pb-10 lg:flex lg:flex-col lg:items-center lg:gap-16 lg:p-2 contForm">
      <h1 class="text-5xl pl-4 w-full text-[#fff] font-bold">Iniciar sesion</h1>
      <form @:submit="handlerLogin" class="flex flex-col justify-center w-[90%] text-[#fff] gap-5">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-xl">Email</label>
          <input type="email" id="email" name="email" v-model="email" autocomplete="off">
        </div>
        <div class="flex flex-col gap-2">
          <label for="passwordText" class="text-xl">Password</label>
          <input type="password" id="passwordText" name="passwordText" v-model="password" autocomplete="off">
        </div>
        <button class="w-full border-none p-2 rounded-lg text-2xl text-center mt-5 border bg-[#f6922f]" type="submit" :disabled="!formValid" >Iniciar sesion</button>
        <span v-if="error !== null" class="min-h-2 max-h-2 text-[#ff2d2d] font-light">{{ error }}</span>
        <RouterLink to="/register" class="text-sm font-extralight text-[#fff]">No tienes cuenta? Registrate</RouterLink>
      </form>

    </div>
  </div>
</template>

<style scoped>
  input{
    border:none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    outline: none;
  }

  .contForm{
    backdrop-filter: blur(3px);
    box-shadow: 1px 1px 20px 2px #000000;
  }
  
</style>