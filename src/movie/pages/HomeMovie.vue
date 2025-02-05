<script setup>
  import { ref } from 'vue';
  import {getGenres, getMovies,getInfoMovie} from '../../api/apiMovie.js';
  import MovieTop from '../components/layout/MovieTop.vue'
  import Movies from '../components/layout/Movies.vue'
  import Genres from '../components/layout/Genres.vue'
  import Loader from '../../components/UI/Loader.vue'
  import { useGetData } from '../composables/useGetData.js';

  const {getAllData,movies,genres,movieTop,isLoading,indexPage } = useGetData();

  getAllData()

  const changePage =async (newPage)=> {
    try{
      isLoading.value = true;
      movies.value =await getMovies(newPage);
      indexPage.value = newPage;
    }catch(error){
      console.log(error);
    }finally{
      isLoading.value = false;
    }
  };
  

</script>
<template>
  <div class="max-w-full">
    <MovieTop :movie="movieTop"></MovieTop>
    <Genres :genres="genres"></Genres>
    <div class="w-11/12 m-auto flex gap-5 pt-5">
      <button :disabled="indexPage <= 1? true:false" @click="changePage(indexPage - 1)" class="text-white border-2 font-bold rounded-md pl-3 pr-3 capitalize hover:bg-sky-700">{{ '<' }}</button>
      <button @click="changePage(indexPage + 1)" class="text-white border-2 font-bold rounded-md pl-3 pr-3 capitalize hover:bg-sky-700">{{ '>' }}</button>
      <p class="ml-3 text-white font-bold">pagina {{ indexPage }}</p>
    </div>
    <Movies :movies="movies" ></Movies>
    <Loader v-if="isLoading" ></Loader>
  </div>
  
</template>


<style>

</style>