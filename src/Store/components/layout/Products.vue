<script setup>
  import CardProducto from '../UI/CardProduct.vue'
  import {getPhones} from '../../../api/apiPhones.js';
  import Loader from '../../../components/UI/Loader.vue';
  import { ref } from 'vue';
  let products = ref([]);
  let isLoading = ref(true);

  const getData =async ()=>{
    try{
      products.value = await getPhones();
    }catch(e){
      console.log(e)
    }finally{
      isLoading.value = false;
    }
  }
  getData()
</script>

<template>
  <Loader v-if="isLoading"></Loader>
  <div class="pt-6 max-w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 pl-1 pr-16">
    <CardProducto v-for="product in  products" :key="product.id" :product="product"></CardProducto>
  </div>
</template>

<style>

</style>