<template>
  <h2>Aluno {{aulasCompletas}}</h2>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'Aluno',
data(){
  return{

  }
},
computed:{
  ...mapState(['aulasCompletas'])
}
}
</script>

<style>

</style>