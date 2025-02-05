//import {Login,Register,Perfil} from '../Pages/index.js'
import Login from '../Pages/Login.vue';
import Register from '../Pages/Register.vue';
import Perfil from '../Pages/Perfil.vue';
import {createRouter,createMemoryHistory, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),    
  routes:[
    {
      'path': '/',
      'name': 'Home',
      'component': () => import('../Pages/Home.vue')
      
    },
    {
      'path': '/login',
      'name': 'login',
      'component': Login
    },
    {
      'path': '/register',
      'name': 'register',
      'component': Register,
      beforeEnter: (to, from, next) => {
        if(localStorage.getItem('user')){
          next({name:'perfil'})
        }else{
          next()
        }
      }
    },
    {
      'path': '/perfil',
      'name': 'perfil',
      'component': Perfil
    }
  ]
});

export default router;
