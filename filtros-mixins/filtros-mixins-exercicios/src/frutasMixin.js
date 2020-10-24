export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maça', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }  
}
/*
O mixin cria uma instância específica de data, methods, filters, computed... em cada componente onde é chamado, 
ou seja, não há comunicação entre eles mesmo que chamem o mesmo mixin.
Caso haja dados repetidos no componente e no mixin, o componente tem prioridade.
Caso haja componente de ciclo de vida no mixin e no componente em que o mixin é usado,
o mixin primeiro chama seus componentes de ciclo de vida e depois os do componente.
*/