import Vue from 'vue'//importamos o vue
import Vuex from 'vuex'//importamos o vue js 

Vue.use(Vuex);//informamos que vamos usar o vuex
//precisamos importar tmb no arquivo main.js

//agora vamos exportar como novo arquivo
export default new Vuex.Store({
  state:{
    user:'Miguel Gabriel B. Dos Santos',
    aulasCompletas:10,
  }
})