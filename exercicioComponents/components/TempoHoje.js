export default {
  name: 'TempoHoje',
  data(){
    return{
      temperaturaMaxima:0,//a variavel que ira receber a requisição da api
    }
  },
  template:`<p>Rio de Janeiro, Máxima de: {{temperaturaMaxima}}</p>`,
  methods:{
    //metodo para buscar dados na api
    puxarTempo(){
      fetch('https://www.metaweather.com/api/location/455825/')//fazemos a requisição
      .then( resposta => resposta.json())
      .then( resposta => {
        this.temperaturaMaxima = resposta.consolidated_weather[0].max_temp.toFixed(2)
      })
    }
  },
  created(){
    this.puxarTempo()//quando o app é criado, ele chama a função
  }
}