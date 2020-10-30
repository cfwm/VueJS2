<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
//Ao invés de enviar diretamente os dados para mapMutatios...
//import { mapMutations } from 'vuex'
//envia os dados para mapActions
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            sequencia: 1,
            //quatidade e preco serão recebidos em computed
            // quantidade: 1,
            // preco: 9.99,
        }
    },
    computed: {
        //quantidade e preco recebem os valores definidos no componente Parametros, o que tbm pode ser feito com getters
        quantidade() {
            //este retorno deve adequar-se a modularização do store 
            //return this.$store.state.quantidade
            //de modo a chamar o store em que o dado está armazenado
            return this.$store.state.parametros.quantidade
        },
        preco() {
            //este retorno deve adequar-se a modularização do store 
            //return this.$store.state.preco
            //de modo a chamar o store em que o dado está armazenado
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        //baixo é implementado o import de mapMutations, com ele não é mais necessário chamar this.$store.commit('adicionarProduto', produto) 
        //...mapMutations(['adicionarProduto']), os dados serão enviados para mapActions
        //...mapActions(['adicionarProduto']), -> deve-se passar o nome do namespaced, neste caso carrinho
        //...mapActions('carrinho', ['adicionarProduto']), -> agora adicionarProduto está no root e não no escopo de carrinho
        ...mapActions(['adicionarProduto']), 
        //pode-se usar o dispatch ao invés do ...mapActions
        // adicionarProduto(produto) {
        //     this.$store.dispatch('adicionarProduto', produto)
        // },
        
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line
            //console.log(produto)

            //salva dados no vuex ++ agora será salvo com mutations
            //this.$store.state.produtos.push(produto)

            //mutation que chama a função adicionarProduto e envia como parâmetro o produto que será adicionado
            //this.$store.commit('adicionarProduto', produto)
            
            //a função acima pode ser feita com mapMutations ou mapActions:
            this.adicionarProduto(produto)
            //tbm pode-se fazer com mapActions da seguinte forma:
            //this.$store.dispatch('adicionarProduto', produto) 

            //testando o getters.js
            console.log(this.$store.getters.getNome)
            console.log(this.$store.getters.getNomeCompleto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
