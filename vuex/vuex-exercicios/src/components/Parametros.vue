<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    // data() {
    //     return {
    //         quantidade: 0,
    //         preco: 0
    //     }
    // }
    computed: {
        //em quantidade e preco, computed é utilizado para receber e alterar o valor de um dado, semelhante ao v-model
        quantidade: {
            get () {
                //este retorno deve adequar-se a modularização do store 
                //return this.$store.state.quantidade
                //de modo a chamar o store em que o dado está armazenado
                return this.$store.state.parametros.quantidade
            },
            set (valor) {
                this.$store.commit('setQuantidade', valor)
            }
        },
        preco: {
            get () {
                //este retorno deve adequar-se a modularização do store 
                //return this.$store.state.preco
                //de modo a chamar o store em que o dado está armazenado
                return this.$store.state.parametros.preco
            },
            set (valor) {
                this.$store.commit('setPreco', valor)
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
