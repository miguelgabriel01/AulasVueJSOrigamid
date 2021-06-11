import Vue from 'vue'
import App from './App.vue'
import store from './store.js'//importamos o  arquivo com o vuex

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
