<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        //...mapGetters({ -> deve-se passar o nome do namespaced, neste caso carrinho
        ...mapGetters('carrinho', {
            total: 'valorTotal'
        }),

        //por último, esta função será feita com o ...mapGetters
        //total() { esta função será centralizada com o getter do store
            //return this.produtos.map(p => p.quantidade * p.preco)
            //    .reduce((total, atual) => total + atual, 0)

            //recebe o resultado do valor total do store
            //return this.$store.getters.valorTotal
        //}, 
        //a função produtos ainda é necessária este componente lista os produtos e esta função envia do state todos os produtos cadastrados 
        produtos() {
            //recebe os dados do vuex quando são modificados
            //return this.$store.state.produtos //este retorno deve adequar-se a modularização do store 
            //de modo a chamar o store em que o dado está armazenado
            return this.$store.state.carrinho.produtos
        }
    },
}
//este retorno deve adequar-se a modularização do store 
            //de modo a chamar o store em que o dado está armazenado
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
