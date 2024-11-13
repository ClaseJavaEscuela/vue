<template>
  <div class="container-fluid">
    <ul class="list-group">
      <template v-for="producto in productos" :key="producto.id">
        <li>{{ producto.nombre }}</li>
      </template>
    </ul>
  </div>



</template>

<script setup>

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 899.99,
    cantidad: 5
  },
  {
    id: 2,
    nombre: "Teléfono Móvil",
    precio: 499.99,
    cantidad: 10
  },
  {
    id: 3,
    nombre: "Auriculares Inalámbricos",
    precio: 199.99,
    cantidad: 15
  },
  {
    id: 4,
    nombre: "Teclado Mecánico",
    precio: 89.99,
    cantidad: 20
  },
  {
    id: 5,
    nombre: "Monitor LED",
    precio: 299.99,
    cantidad: 8
  }
];

</script>

<style scoped></style>
