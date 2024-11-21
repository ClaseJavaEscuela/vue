<script setup>
import {ref} from 'vue';

  const valoresAgregados = ref([]);
  const valor = ref(0);
  const handleIncrement = ()=>{
    valor.value += 1;
  }
  const handleReset =()=>{
    valor.value = 0;
  }
  const handleDecrement = ()=>{
    valor.value -=1;
  }

  const agregarValor =()=>{
    const valores = [...valoresAgregados.value];
    valores.push(valor.value);
    valoresAgregados.value = valores;
    
  }

</script>

<template>
  <div class='
    w-[80vw] m-auto flex flex-col items-center h-[80vh]
    gap-5
  '>
    <div class='bg-[#f5f4f4] w-1/2 mt-5 flex flex-col items-center gap-5 pb-5'>
      <div class='
        w-full flex justify-center items-center h-[100px]
        font-bold
        text-6xl
      '>
        {{ valor }}
      </div>
      <div class='w-full flex justify-around text-white font-semibold'>
        <button class='bg-[#2a9bb8] w-1/4 rounded-md' @click='handleIncrement'>+</button>
        <button class='bg-[#ff2929] w-1/4 rounded-md' @click='handleReset'>limpiar</button>
        <button class='bg-[#ec8c1d] w-1/4 rounded-md'@click='handleDecrement'>-</button>
      </div>
      <div>
        <button @click='agregarValor' class="w-72 text-white font-bold p-1 rounded-md bg-black">Agregar</button>
      </div>
    </div>

    <div class='w-1/2'>
      <h2 class="text-center font-bold text-2xl">Lista de valores</h2>
      <template v-for="(valor,index) in valoresAgregados" :key="key">
        <div class='w-full flex justify-between'>
          <span class="font-semibold text-lg">valor</span>
          <span class="text-[#ec8c1d] font-bold">{{ valor }}</span>
        </div>

      </template>
    </div>
  </div>
</template>

<style>
  
</style>