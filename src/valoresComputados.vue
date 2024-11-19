<template>
  <div class="container-fluid d-flex cont">

    <h1> Contador</h1 >
    <div class="info">
      <!-- 
        podemos pasar condiciones en dentro de los v-bind como se nuestra
        en el ejemplo
      --->
      <div v-bind:class="getStyle" class="valor">{{ contador }}</div>
      <div class="cont-botones d-flex gap-5">
        <button class="btn btn-primary" @click="handleIncrementar">+1</button>
        <button class="btn btn-danger" @click="handleResetear">resetear</button>
        <button class="btn btn-primary" @click="handleDecremetar"> -1</button>
      </div>

    </div>
  </div>

</template>


<script setup>
  /**
   *En este archivo veras como funcionan y como se usan los valores computadors
   para poder calcular los valores durante la ejecucion 
   */
  import { computed, ref } from 'vue';

  const contador = ref(0);

  const getStyle = computed(()=>{
    return contador >0 ? "positivo":contador<0?"negativo":"neutro";
  })

  const handleIncrementar = ()=>{
    contador.value ++;
  }

  const handleDecremetar =()=>{
    contador.value --;
  }

  const handleResetear = ()=>{
    contador.value = 0;
  }


</script>
