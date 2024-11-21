<script setup>
import {ref, computed} from 'vue';
import List from './List.vue';

  const valoresAgregados = ref([]);
  const valor = ref(0);
  const valorExistente = computed(()=>{
    const valores = [...valoresAgregados.value];
    return valores.indexOf(valor.value)>-1?true:false;
  });

  const handleIncrement = ()=>{
    valor.value += 1;
  }
  const handleReset =()=>{
    valor.value = 0;
  }
  const handleDecrement = ()=>{
    valor.value -=1;
  }

  const handleAddValue =()=>{
    const valores = [...valoresAgregados.value];
    valores.push(valor.value);
    valoresAgregados.value = valores;
  }

</script>

<template>
  <div class='
    w-4/5 m-auto flex flex-col items-center h-[80vh]
    gap-5
  '>
    <div class='bg-[#fafafa] rounded-md w-1/2 mt-5 flex flex-col items-center gap-5 pb-5'>
      <div class='
        w-full flex justify-center items-center h-[100px]
        font-bold
        text-6xl
      '>
        {{ valor }}
      </div>
      <div class='w-full flex justify-around text-white font-semibold'>
        <button class='bg-[#2a9bb8] w-1/4 rounded-md h-8' @click='handleIncrement'>+</button>
        <button class='bg-[#ff2929] w-1/4 rounded-md h-8' @click='handleReset'>Limpiar</button>
        <button class='bg-[#ec8c1d] w-1/4 rounded-md h-8'@click='handleDecrement'>-</button>
      </div>
        <button :disabled="valorExistente" @click='handleAddValue'
        v-bind:class="valorExistente? 'text-[#858484] bg-[#292828]': 'text-[#fff] bg-[#0c1838] '" 
        class='w-11/12 text-white font-bold p-1 rounded-md'>
            Agregar
        </button>
    </div>

    <div class='w-1/2 h-5/6'>
      <h2 class='text-center font-bold text-2xl mb-2'>Lista de valores</h2>
      <div class="w-full flex flex-col items-center overflow-y-auto h-64">
        <List/>
      </div>
    </div>
  </div>
</template>
//v-for='(valor,index) in valoresAgregados' :key='key
<style>
  
</style>