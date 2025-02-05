<script setup>
  import {ref} from 'vue';
  import {getPost} from '../api.js';
  import Card from "../components/Card.vue";

  const valor = 10;
  const allPost = ref([]);
  const inicio = ref(0);
  const fin = ref(10); 

  
  getPost().then(res => allPost.value = res);
  
  const nextPost =()=>{
    inicio.value = inicio.value +valor;
    fin.value = fin.value + valor;
  }

  const backPost =()=>{
    inicio.value = inicio.value-valor;
    fin.value = fin.value -valor;
  }

</script>

<template>
  <h1 class="pl-5 text-3xl max-w-96">HOME PAGE</h1>
  <div class="pl-5 mt-5 flex justify-start gap-10">
    <button 
    class="text-1xl w-24 h-8 text-[#2571ff] font-light outline-none border-2 rounded-sm border-[#2571ff] capitalize" @click="backPost"
    :disabled="inicio<10?true:false"
    >
      atras
    </button>
    <button 
      class="text-1xl w-24 h-8 text-[#e08e23] font-light outline-none border-2 rounded-sm border-[#e08e23] capitalize" @click="nextPost"
      :disabled="fin<100?false:true">
      siguiente
    </button>
  </div>
  <div class="mt-5 flex flex-col w-full gap-10 pl-5">
    <Card v-for="post in allPost.slice(inicio,fin)" :key="post.id" 
    :id="post.id"
    :titulo="post.title" 
    :texto="post.body"/>
  </div>

</template>

<style>
  
</style>