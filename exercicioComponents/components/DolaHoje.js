export default{
  name:'DolarHoje',
  data(){
    return{
      valorDolar:0,
    }
  },
  template:`<p>valor do Dolar Hoje: {{valorDolar}}</p>`,
  methods:{
    puxarDolar(){
      fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then(resposta => resposta.json())
      .then(resposta => {
        this.valorDolar = resposta.rates.BRL.toFixed(2)
      } )
    }
  },
  created(){
    this.puxarDolar();
  }
}