import {createRouter, createWebHistory} from "vue-router";

import HomePages from '../HomePage.vue';



export default router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:"/",
      name:"Home",
      component: HomePages
    }
  ]

});




