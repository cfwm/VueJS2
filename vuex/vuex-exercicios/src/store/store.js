import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    //Com mudules, state, getters, mutations e actions são modularizadas, iso ajuda a organizar o código.  ++ O state serve para chamar o estado do módulo específico e o stateRoot para chamar o state global
    //Com isso, os dados estão nos seus respectivos módulos. No módulo, pode-se chamar o state respectivo, 
    //mas nos componentes onde o state é chamado deve-se acrescentar o módulo em que o state está. 
    //quando estes dados são acessados através de getters, isto é feito diretamente no módulo, sem necessidade de declarar o módulo.
    modules: { carrinho, parametros },
    //o state abaixo é utilizado pelo getters.js para agrupar dados e funções mais gerais
    state: {
        nome: 'Maria',
        sobrenome: 'Silva',
    },
    //abaixo são importados os getters de getters.js
    //getters, ou getters: getters
    //abaixo pode-se declarar mais de um getter
    getters: {
        ...getters
    },
/*  
    //state serve para armazenar dados
    state: {
        produtos: [
            // { id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55 },
            // { id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99 },
            // { id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18 },
        ],
        quantidade: 20,
        preco: 5
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
        //setQuantidade e setPreco serão usados para receber e alterar dados nos componentes, semelhante ao v-model
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        } 
    },

    //actions serve para implementar alguma lógica que pode ser acessada por diferentes componente para alterar 
    //algum dado. Com a action, o componente que quer alterar o dado com alguma lógica chama a actions, que altera o dado através desta 
    //lógica e chama, por sua vez, a mutation, que altera o dado.
    //deve-se trabalhar com assincronísmo dentro das actions e não nas mutations, isto é, função de consulta no banco de dados. 
    
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
    }
    */
})