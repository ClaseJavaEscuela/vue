<template>
  <div class="container-fluid d-flex cont">

    <h1> Contador</h1 >
    <div class="info">
      <div v-bind:class="clase" class="valor">{{ contador }}</div>
      <div class="cont-botones d-flex gap-5">
        <button class="btn btn-primary" @click="handleIncrementar">+1</button>
        <button class="btn btn-danger" @click="handleResetear">resetear</button>
        <button class="btn btn-primary" @click="handleDecremetar"> -1</button>
      </div>

    </div>
  </div>

</template>


<script setup>
  /*PROGRAMACION REACTIVA
    para esto debemos de importar un modulo para lograr esto
      debemos importar ref

    ref() -> recibe cualquier tipo de dato, le debemos de dar un valor inicial
            devuelve un objeto mutable

    COMO FUNCIONA
    para poder acceder al valor:
      debemos de acceder a sus atributo value
       
        //inicializamos
        contador = ref(0)
        //accedemos a sus vallor
        contador.value

  */
  import { ref } from 'vue';

  const contador = ref(0);
  const clase = ref("positivo");

  const validarValor = ()=>{
    return contador.value >= 0?"positivo":"negativo";
  }


  const handleIncrementar = ()=>{
    contador.value ++;
    clase.value = validarValor()
  }

  const handleDecremetar =()=>{
    contador.value --;
    clase.value = validarValor()
  }

  const handleResetear = ()=>{
    contador.value = 0;
    clase.value = validarValor()
  }


</script>
