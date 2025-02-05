import { defineStore } from "pinia";
import { getAuth,signInWithEmailAndPassword, signOut,onAuthStateChanged } from 'firebase/auth';
import {auth, } from '../firebase/index.js';
import { getCurrentInstance } from "vue";
//import ErrorLogin from '../utils/Errores.js';
const ErrorLogin = {
  "auth/invalid-credential":"Email o password incorrectos",
  "auth/too-many-requests":"Demasiados intentos, intenta más tarde",
}
export const useUserStore = defineStore('userState', {
  state: () => ({user:null, uuid:null,email:null,error:null}),
  getters: {
    isActiveUser:(state)=>{
      return state.user && state.uuid;
    },
  },
  actions: {
    async loginUser(email, password){
      try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const userData = userCredential.user;
        this.email = userData.email;
        this.user = userData.email
        this.uuid = userData.uid;
        return {
          email:userData.email,
          uuid:userData.uid
        }
      }catch(e){
        this.error = ErrorLogin[e.code];
      }
    },
    async logOut(){
      try{
        await signOut(auth);
        this.user = null;
        this.email = null;
        this.error = null;
        this.uuid = null;
        return {
          email:this.email,
          user:this.user,
          uuid:this.uuid,
          error:this.error
        }
      }catch(e){
        console.error(e)
      }
    },
    async getCurrentInstance(){
      const user = await onAuthStateChanged(auth);
      if(user){
        this.user = user.email;
        this.uuid = user.uid;
      }else{
        this.user = null;
        this.uuid = null;
      }
    }
  }
})


