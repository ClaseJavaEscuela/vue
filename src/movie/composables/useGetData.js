import { ref } from "vue"
import { getMovies,getGenres,getInfoMovie } from "../../api/apiMovie.js";
import {getAllSeries, getInfoSerie,getListGenres} from '../../api/apiTv.js';

export const useGetData =(type ="movies")=>{
  let movies =ref([]);
  let genres = ref([]);
  let movieTop = ref({});
  let error = ref(null);
  let indexPage = ref(1);
  let isLoading = ref(true);

  const getAllData = async ()=>{
    try{
      isLoading.value = true;
      movies.value = await getMovies(1);
      genres.value = await getGenres();
      movieTop.value = await getInfoMovie(157336);
    }catch(error){
      console.log(error)
    }finally{
      isLoading.value = false;
    }
  }


  return {
    movies,
    genres,
    movieTop,
    isLoading,
    getAllData,
    indexPage,
    error
  }
}