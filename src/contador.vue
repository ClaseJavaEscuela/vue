<template>
  <div class="container-fluid d-flex cont">

    <h1> Contador</h1 >
    <div class="info">
      <!-- 
        podemos pasar condiciones en dentro de los v-bind como se nuestra
        en el ejemplo
      --->
      <div v-bind:class="contador >= 0?'positivo':'negativo'" class="valor">{{ contador }}</div>
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
  }

  const handleDecremetar =()=>{
    contador.value --;
  }

  const handleResetear = ()=>{
    contador.value = 0;
  }


</script>
