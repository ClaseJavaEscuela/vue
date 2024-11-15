<script setup>
  const styleHome = 'bg-secondary';

  const handleClick = (mensaje)=>{
    alert(mensaje);
  }



</script>

<template>
  <div v-bind:class="styleHome" class="row mt-3">
    <div class="col-2 d-flex flex-column gap-2">
      <button v-on:click="handleClick('Hola como estas')" class="btn btn-primary">
        enviar
      </button>
      <button @:click="handleClick('Hola como estas II')" class="btn btn-primary">
        enviar
      </button>
    </div>
    <div class="col"></div>
  </div>

</template>

/**
 * v:bind nos sirve para modificar los atributos de los elementos html
 */