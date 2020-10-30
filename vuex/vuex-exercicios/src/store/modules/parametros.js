export default {
    state: {
        quantidade: 20,
        preco: 5
    },

    //mutations serve para alterar dados. Deve-se usar mutations apenas para alterar o estado central do dado, trabalhando de forma síncrona.
    mutations: {
        //setQuantidade e setPreco serão usados para receber e alterar dados nos componentes, semelhante ao v-model
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        } 
    },
}