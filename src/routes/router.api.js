import { createRouter,createWebHistory } from "vue-router";
import HomePage from '../Home/Home.vue';

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'Home',
      component: HomePage
    },
    {
      path:'/movies',
      name:'movies',
      component:()=> import('../movie/pages/HomeMovie.vue')
    },
    {
      path:'/tv',
      name:'tv',
      component:()=> import('../TV/pages/HomeTv.vue')
    },
    {
      path:'/posts',
      name:'posts',
      component:()=> import('../posts/HomePost.vue')
    },
    {
      path:'/store',
      name:'store',
      component:()=> import('../Store/pages/HomeStore.vue')
    },
    {
      path:'/product/:id',
      name:'product',
      component:()=> import('../Store/pages/Product.vue')
    },
    {
      path:'/movie/:id?',
      name:'movie',
      component:()=> import('../movie/pages/MovieSelect.vue')
    },
    {
      path:'/tv/serie/:id?',
      name:'serie',
      component:()=> import('../TV/pages/SerieSelect.vue')
    }
  ]
})

export default routes;
