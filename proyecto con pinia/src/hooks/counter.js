import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter',{
  state:()=>({counter:0}),
  getters:{
    edadUSer: (state)=>(state.counter)
  },
  actions:{
    incrementar(value){
      this.counter ++;
    },
    decrementar(){
      this.counter --;
    },

    reset(){
      this.counter = 1;
    }

  }
})



