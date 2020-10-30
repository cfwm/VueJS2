<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <!-- <span>Total: <strong>{{ valorTotal | dinheiro }}</strong></span> -->
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    //computed: mapGetters(['valorTotal']) com a implementação do getters abaixo não é necessário mudar a interpolação do dado
    //...mapGetters({ -> deve-se passar o nome do namespaced, neste caso carrinho
    computed: mapGetters('carrinho', {
        total: 'valorTotal'
    })
    /*
    computed: { 
        
        A função total() pode ser substituída pelo import mapGetters para mostrar o valorTotal, deve-se apenas mudar a interpolação do dado.
        total() {
            este trecho será centralizado no método valorTotal do getter do store
            return this.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)

            desse modo é recebido o dado de valorTotal do getter
            return this.$store.getters.valorTotal
        },
        
        Esta função está sem utilidade pois o método total() agora recebe todos os valores calculados do state
        produtos() {
            recebe os dados do vuex quando são modificados
            return this.$store.state.produtos
        } 
    }, 
    data() {
        return {
            produtos: [
                { nome: 'Produto 1', quantidade: 7, preco: 14.55 },
                { nome: 'Produto 2', quantidade: 10, preco: 22.99 },
                { nome: 'Produto 3', quantidade: 1, preco: 43.18 },
            ]
        }
    } */
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
