<script>
  import {RouterLink} from 'vue-router';

</script>

<template>
  <div class="w-full box-border h-[80px] text-white flex justify-between pl-7 pr-16 items-center absolute z-20">
    <h1 class="text-4xl font-bold">CINETECH</h1>
    <div class="flex gap-16 text-md">
      <RouterLink to="/" class="link" >Home</RouterLink>
      <RouterLink to="/store" class="link" >Store</RouterLink>
      <RouterLink to="/movies" class="link" >Movie</RouterLink>
      <RouterLink to="/posts" class="link" >Post</RouterLink>
      <RouterLink to="/tv" class="link" >Tv</RouterLink>
    </div>
    <div class="flex gap-10">
      <button class="border-2 hover:bg-red-800 font-semibold border-red-800 capitalize p-1 pl-3 pr-3 h-[35px] w-auto rounded-md">register</button>
      <button class="border-2 hover:bg-sky-800 font-semibold border-sky-800 capitalize p-1 pl-3 pr-3 h-[35px] w-auto rounded-md">login</button>
    </div>
  </div>
  
</template>

<style scoped>
    .link {
    text-decoration: none; 
    transition: all .5s ease;
    width: 55px;
    text-align: center;
  }

  .link:hover {
    text-decoration: underline; 
    font-weight: bold;
    transform: scale(1.2);
    transition: all .5s ease; 
  }
</style>