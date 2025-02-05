<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/index.js'
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const email = ref('');
const password = ref('');
const name = ref('');


const useUser = useUserStore();
const { user, uuid, isActiveUser } = storeToRefs(useUser);
const { loginUser } = useUser;

const formValid = computed(() => {
  return email.value.length >=4 && password.value.length >= 4 && name.value.length>=4;
})

const handlerLogin = async (e) => {
  e.preventDefault();
  console.log("valores", email.value, password.value);

}



</script>

<template>
  <div class="flex w-full h-full gap-5 items-center justify-center text-[#000] font-semibold">
    <div class="
    sm:min-w-[10rem] sm:max-w-[15rem]
    lg:min-w-[25rem] lg:rounded-lg lg:max-w-[25rem] lg:h-auto lg:pb-10 lg:flex lg:flex-col lg:items-center lg:gap-16 lg:p-2 contForm">
      <h1 class="text-5xl pl-4 w-full text-[#fff] font-bold">Crear cuenta</h1>
      <form class="flex flex-col justify-center w-[90%] text-[#fff] gap-5">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-xl">Nombre</label>
          <input type="email" id="email" name="email" v-model="name">
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="text-xl">Email</label>
          <input type="email" id="email" name="email" v-model="email">
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="text-xl">Password</label>
          <input type="password" id="password" name="password" v-model="password">
        </div>
        <button @:click="handlerLogin"
          class="w-full border-none p-2 rounded-lg text-2xl text-center mt-5 border bg-[#f6922f]" type="submit"
          :disabled="formIsValid">Crear cuenta</button>
        <p class="text-sm font-extralight text-[#fff]">Ya tienes cuenta?
          <RouterLink to="/login"> Inicia sesion</RouterLink>

        </p>
      </form>

    </div>
  </div>
</template>

<style scoped>
input {
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  outline: none;
}

.contForm {
  backdrop-filter: blur(3px);
  box-shadow: 1px 5px 80px 5px #000;
}
</style>