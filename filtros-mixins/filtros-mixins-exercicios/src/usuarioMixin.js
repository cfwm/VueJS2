export default {
    computed: {
        usuarioLogado() {
            return 'Maria Silva'
        }
    },
    //primeiro chama o componente de ciclo de vida do mixin, uma vez para cada componente em que o mixin é chamado
    created() {
        console.log('Created - Usuario Mixin!')
    }
}