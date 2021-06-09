import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' 
import Curso from './views/Curso.vue' 

Vue.use(Router)

export default new Router({
  mode:"history",
  //  base:"app",
  base:process.env.BASE_URL,
   routes:[
     {
       path: "/",
       component:Home
     },
     {
       path:"/cursos",
       component:Curso
     }
   ]
})