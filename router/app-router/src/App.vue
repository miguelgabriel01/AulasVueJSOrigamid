<template>
  <div id="app">
   <h1 @click="mostrarRouter">Vue router</h1>
   <nav>
     <router-link to="/">Home</router-link><br><br>
     <router-link to="/cursos">Cursos</router-link>
   </nav>
   <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
    mostrarRouter(){
     console.log(this.$route)
     alert(this.$route)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
