<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    //props é usado para receber informações de outros usuários, neste caso um array com um elemento nome.
    //ATENÇÃO! A comunicação entre componentes é case sensitive!!
    //Geralmente, é usado o padrão camel case na comunicação entre componentes do Vue.
    //props: ['nome'],
    //Acima não há validação do tipo de propriedade de nome. Para que seja feita a validação, deve-se declarar props em um objeto e receber 
    //as propriedades da seguinda maneira:
    props: {
        //nome: String
        //pode-se validar para receber propriedade de mais de um tipo:
        nome: [String, Array],
        //Esta validação não evita o erro por conflito de tipos, mas fornece maiores detalhes dele.
        
        //Pode-se fazer outro tipo de validação:
        // nome: {
        //     type: String,
        //     required: true,
        //Dessa forma, pode-se passar outros mais parâmetros, como o required = true, que indica que esta propriedade é necessária para o funcionamento do componente.
        //Ou pode-se usar o default, que coloca um valor padrão para quando não há propriedade passada ou quando há incompatibilidade de tipo.
        //     default: 'Anônimo
        //O tbm default pode ser uma função com algum tipo de lógica, como
        //     default: function() {
        //      return Array(10).fill(0),join(',')
        //     }
        //     que retorna 10 vezes um 0 seguido de uma ,
        // },
        reiniciarFn: Function, 
        //reiniciarFn foi recebida do componente pai
        idade: Number,
    },
    data() {
        return {
            //a declaração de uma propriedade com um nome que já fora recebido de outro componente gera complito.
            //nome: '' --> para não gerar conflito:
            nomeAlternativo: this.nome
        }
    },
    methods: {
        //as propriedades passadas viu comunicação de componentes podem ser afetadas por métodos dos componentes que recebem-na, 
        //abaixo o método inverterNome age sobre a propriedade nome:
        inverterNome() {
            //a propriedade recebida de outro componente é acessada como se fosse do próprio componente.
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            //Este método apenas com a linha de baixo não terá efeito sobre a propriedade nome no componente pai.
            this.nome = 'Pedro' 
            //Para que haja efeito no componente pai, deve-se emitir um evento, seguido do quê foi mudado:
            this.$emit('nomeMudou', this.nome)
            /*
            Pode-se enviar ao componente pai outras informações através de um objeto.
            this.antigo = this.nome
            this.$emit('nomeMudou', {
                nome: this.nome,
                antigo
            })
            */
        }
    },
    created() {
        //comunicação entre componentes que não são pai/filho via barramento, ou event bus
        // barramento.$on('idadeMudou', idade => {
        //     this.idade = idade

        //Qnd a informação é passada por método
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
