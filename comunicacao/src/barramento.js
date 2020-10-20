import Vue from 'vue'
export default new Vue({
/* comunicação entre componentes que não são pai/filho via barramento, ou event bus. 
Uma nova instância Vue é criada para fazer a comunicação entre componentes do sistema.
*/
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback) {
            this.$on('idadeMudou', callback)
        }
    }

})