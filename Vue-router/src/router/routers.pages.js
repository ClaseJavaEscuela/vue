import {createRouter, createWebHistory} from "vue-router";

import HomePages from '../HomePage.vue';



const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      name:"Home",
      component: HomePages
    },
    {
      path:"/movie",
      name:"movie",
      component:()=> import('../movies/moviesPages.vue')
    },
    {
      path:"/phones",
      name:"phones",
      component: ()=> import('../phone/PhonePages.vue')
    },
    {
      path:"/post",
      name:"post",
      component:()=> import('../posts/PostPage.vue')
    },
    {
      path:"/tv",
      name:"tv",
      component:()=> import('../tv/TvPage.vue')
    }

  ]

});



export default router;
