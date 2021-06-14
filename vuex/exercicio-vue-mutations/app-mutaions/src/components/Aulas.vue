<template>
  <div class="aulas">
    <h2>Aulas</h2>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>{{aula.nome}} || duração {{aula.duracao}}</p>
        <button @click="completarAulas(aula)">Completar aula</button>
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
  completarAulas(aula){
    this.$store.commit("COMPLETAR_AULA",aula
    )
  }
}
}
</script>

<style>

</style>