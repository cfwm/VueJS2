export default {
    //namespaced: true -> serve para evitar conflitos de nomes de métodos e dados globais e locais em um componente.
    //deve-se tbm alterar a forma como os métodos e dados definidos neste arquivo são chamados nos componentes. 
    namespaced: true,
    state: {
        produtos: [],
    },

    //getters serve para mostrar dados
    getters: {
        //função que centraliza o cálculo do valorTotal presente em resumo e carrinho, como está no getters, o valorTotal pode ser acessado por diversos componentes
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }           
    },

    //mutations serve para alterar dados. Deve-se usar mutations apenas para alterar o estado central do dado, trabalhando de forma síncrona.
    mutations: {
        //adicionar produtos no carrinho, como está em mutations, pode ser usada por qualquer componente para alterar dados
        adicionarProduto(state, payload) { //payload é o próprio dado, no caso produto -> pode-se passar apenas um parâmetro adicional
            state.produtos.push(payload)
        },
    },

    /*actions serve para implementar alguma lógica que pode ser acessada por diferentes componente para alterar 
    * algum dado. Com a action, o componente que quer alterar o dado com alguma lógica chama a actions, que altera o dado através desta 
    * lógica e chama, por sua vez, a mutation, que altera o dado.
    * deve-se trabalhar com assincronísmo dentro das actions e não nas mutations, isto é, função de consulta no banco de dados. 
    */
    
    /* após este bloco de comentário, a actions é implementada no escopo raiz
    actions: { //nos métodos declarados em actions pode-se aplicar regras de negócios nos dados antes de enviá-los para a store
        //adicionarProduto passa o dados recebido do componente para mutations.
        //adicionarProduto(context, payload) { ao invés do estado, recebe o context pq seu objetivo não é fazer alteração no estado central do dado. Já o parâmetro payload representa o dado.
        adicionarProduto({ commit }, payload) { //com o operador de desestruturação, o context é exposto e pode-se chamar diretamente o commit
        //setTimeout serve para simular um assincronismo
            setTimeout(() => {
                //context.commit('adicionarProduto', payload)
                commit('adicionarProduto', payload) 
            }, 1000)
        }
    } */
    //adicionarProduto está no root e não no módulo, embora o módulo tenha namespace: true
    actions: {
        adicionarProduto: {
            root: true,
            handler({ commit }, payload) {
                setTimeout(() => {
                    commit('adicionarProduto', payload)
                }, 1000)
            }
        }
    }
    
}