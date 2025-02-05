<script setup>
  import Loader from '../../components/UI/Loader.vue';
  import { ref } from 'vue';
  import { getInfoPhone } from '../../api/apiPhones';
  import { useRoute,RouterLink } from 'vue-router';

  let infoPhone = ref({});
  const route = useRoute();
  let isLoading = ref(true);

  const getData =async ()=>{
    try{
      infoPhone.value = await getInfoPhone(route.params.id);
    }catch(e){
      console.log(e);
    }finally{
      isLoading.value = false;
    }
  }
  getData()
  
</script>

<template>
  <div class="text-white flex max-w-full max-h-[80vh] h-[80vh] translate-y-24 ml-6">
    <img class="w-1/2 max-w-1/2 h-full rounded-lg" :src="infoPhone.image" alt="Foto de una foto"/>
    <div class="w-1/2 max-w-1/2 pr-4 pl-5 flex flex-col gap-4">
      <RouterLink to="/store" class="w-20 pl-2 pr-2 border-2 rounded-md border-red-800 hover:bg-red-800 capitalize">regresar</RouterLink>
      <h2 class="text-3xl">{{ infoPhone.title }}</h2>
      <p class="text-xl">${{ infoPhone.price }} <span class="text-xs text-green-700 font-bold">{{infoPhone.discount}}%OFF</span></p>
      <span class="text-xs font-light">en 24 meses de $500</span>
      <p class="font-light">{{ infoPhone.description }}</p>
      <p class="text-green-700">Envio gratis </p>
      <span class="text-xs text-gray-400">Por ser tu primera compra</span>
    </div>
  </div>
  <Loader v-if="isLoading" ></Loader>
</template>

<style>

</style>