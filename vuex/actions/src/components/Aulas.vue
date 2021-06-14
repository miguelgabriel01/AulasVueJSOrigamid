<template>
<div>
  <h2>Aulas</h2>
  <ul>
    <li v-for="aula in aulas" :key="aula.nome">
      <p>Nome da aula: {{aula.nome}} | Duração: {{aula.duracao}}</p>
      <button @click="handleClick(aula)">Completar aula</button>
    </li>
  </ul>

</div>
</template>

<script>
export default {
name:'Aulas',
data(){
  return{
    aulas:[
        {
    nome: "HTML e CSS",
    duracao: 15
  },
  {
    nome: "JavaScript",
    duracao: 30
  },
  {
    nome: "UX Design",
    duracao: 20
  }
    ]
  }
},
methods:{
/*   completarAula(aula){
   this.$store.commit("COMPLETAR_AULA",aula)
  },
 */  handleClick(aula){
    this.$store.dispatch("completarAula",aula)
  }
}
}
</script>

<style>

</style>