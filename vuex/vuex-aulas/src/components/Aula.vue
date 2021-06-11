<template>
  <div class="aula">
    <h2>Aula | {{totalAulas}}, Aulas completas: {{aulasCompletas}}</h2>
    <h3>Aluno: {{user}}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
name:'Aula',
data(){
  return{
    totalAulas:25,
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
}
}
</script>

<style>

</style>