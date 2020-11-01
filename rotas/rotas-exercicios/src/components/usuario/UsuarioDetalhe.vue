<template>
    <div class="usuario-detalhe">
        <h3>Detalhes do Usuários</h3>
        <p><strong>Código: </strong>{{ id }}</p>
        <!-- caso o id não venha como props, ele pode ser acessado abaixo ou acima com
        ${route.params.id} -->
        <!-- aqui a rota é via path
            <router-link tag="button" primario
            :to="`/usuario/${id}/editar`">
            Editar
        </router-link> 
        abaixo a rota é via name e tbm passa parâmetros para query com o ? na url 
        e o hash para carregar a página em algum componente, neste casa o id-css rodape -->
        <router-link tag="button" primario
            :to="{ name: 'editarUsuario', params: { id },
            query: { completo: true, lingua: 'pt'}, 
            hash: '#rodape' }">
            Editar
        </router-link>        
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter -> Antes da rota -> usuário detalhe')
        //para acessar os dados da página:
        // next(vm => {
        //     console.log(vm.id)
        // })
        //verificação fake de autenticação
        const autenticacao = true
        autenticacao ? next() : next(false)
    },
    // data() {
    //     return {
    //         //pega o parâmetro da rota
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     //função que monitora a mudança de parâmetros carregados no mesmo componente
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>