<script setup>
  import {ref} from 'vue';
  import {getPost} from '../api.js';
  import Card from "../components/Card.vue";
  const allPost = ref([]);

  getPost().then(res => allPost.value = res);
  /*FORMA DEL PROFE
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => allPost.value = data)
    */
  
</script>

<template>
  <div>
    <h1>HOME PAGES</h1>
    <Card v-for="post of allPost" :key="post.id" 
    :titulo="post.title" 
    :texto="post.body"/>
  </div>
</template>

<style>
  
</style>