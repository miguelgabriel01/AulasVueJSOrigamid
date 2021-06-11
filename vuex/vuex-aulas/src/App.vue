<template>
  <div id="app">
    <h1>Vuex | vue.JS</h1>
    <p>nome do user que vem do vuex: {{$store.state.user}}</p>
    <User/>
    <Curso/>
  </div>
</template>

<script>
import User from './components/User.vue'
import Curso from './components/Curso.vue'

export default {
  name: 'App',
  components: {
    User,
    Curso
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
