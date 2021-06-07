import DolarHoje from './DolarHoje.js';

export default{
  name: "AcaoHoje",
  data(){
    return{
      valorMercado:0,//preco inicial da ação que será alterado apos o fetch
    }
  },
  template:`<div>
  <p>valor da Apple: {{valorMercado}}</p>
  <dolar-hoje></dolar-hoje>
  </div>`,
  methods:{
    puxarAcao(){
      fetch('https://api.origamid.dev/stock/aapl/quote')
      .then(resposta => resposta.json())
      .then( resposta => {
        this.valorMercado = resposta.marketCap
      })
    }
  },
  components:{
    DolarHoje,
  },
  created(){
    this.puxarAcao()//apos criado o componente ele já chama o fetch
  }
}