<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <router-view />
        <!-- navegação imperativa, com JS -->
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    /* outra forma de lidar com o problema da troca de parâmetros usados pelo mesmo componente está acima.
    data() {
        return {
            //pega o parâmetro da rota
            id: this.$route.params.id
        }
    },
    watch: {
        //função que monitora a mudança de parâmetros carregados no mesmo componente
        $route(to, from) {
            this.id = to.params.id
        }
    }, */
    methods: {
        //função para implementar a navegação imperativa/programática - pilha de navegação
        irParaInicio() {
            //this.$router.push('/')
            //ou
            //this.$router.push({ path: '/' })
            //ou navegação programática com name e não path
            this.$router.push({ name: 'inicio' })
        }
    },
}
</script>

<style>

</style>