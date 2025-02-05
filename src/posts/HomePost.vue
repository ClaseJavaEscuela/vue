<script setup>
  import { getPost } from '../api/apiPost';
  import Posts from './components/layout/Posts.vue';
  import { ref } from 'vue';
  import Loader from '../components/UI/Loader.vue';

  let allPost = ref([]);
  let isLoading = ref(true);

  const getData =async ()=>{
    try{
      allPost.value = await getPost();
    }catch(e){
      console.log(e)
    }finally{
      isLoading.value = false;
    }
  }
  getData();

</script>
<template>
  <div class="w-[full] translate-y-8">
    <Posts :posts="allPost"></Posts>
    <Loader v-if="isLoading" ></Loader>
  </div>
  
</template>

<style>

</style>