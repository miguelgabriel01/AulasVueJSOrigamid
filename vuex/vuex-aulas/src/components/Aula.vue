<template>
  <div class="aula">
    <h2>Aula | {{totalAulas}}, Aulas completas: {{aulasCompletas}}</h2>
    <h3>Aluno: {{user}}</h3>
    <button @click="handleClick">Mudar nome do aluno</button>
    <button @click="handleAulas">Completar as aulas</button>
    <h5>enviar dados para o store.js com vuex</h5>
    <input type="text" v-model="novouser">
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
name:'Aula',
data(){
  return{
    totalAulas:25,
    novouser:'',
  }
},
/* computed:{
  //criamos um atalho para mão precisar escrever todo o codigo sempre que for preciso usar o valor {{$store.state.user}}
   user(){
    return this.$store.state.user
  },
  aulasCompletas(){
    return this.$store.state.aulasCompletas

  } 

  //uso simplificado do state com o mapState
}
 */

computed:{

 ...mapState(["user","aulasCompletas"])
},
methods:{
  ...mapMutations(["CHANGER_USER","COMPLETAR_AULAS"]),
/*   handleClick(){
    this.$store.commit('changerUser')//passamos entre o parentese a função que será chamada e que é emitida lá no store.js 
  }, */
    handleClick(){
    this.CHANGER_USER({
      user:this.novouser,
      totalAulas: this.totalAulas
    })//passamos entre o parentese a função que será chamada e que é emitida lá no store.js 
  },
  handleAulas(){
    this.COMPLETAR_AULAS()
  }
}
}
</script>

<style>

</style>