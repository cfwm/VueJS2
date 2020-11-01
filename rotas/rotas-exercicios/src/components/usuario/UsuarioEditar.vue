<template>
    <div class="usuario-editar">
        <h3>Editar Usuários</h3>
        <p><strong>Código via props: </strong>{{ id }}</p>
        <p><strong>Código via params: </strong>{{ $route.params.id }}</p>
        <p><strong>Informações da query - </strong>completo: {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Informações da query - </strong>língua: {{ $route.query.lingua }}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            confirmou: false,
        }
    },
    //beforeRouteLeave é usado para interceptar a saída da página
    beforeRouteLeave(to, from, next) {
        //diferente do beforeRouteEnter, no beforeRouteLeave os dados da página já estão carregados e podem ser usados 
        if(this.confirmou) {
            next()
        } else {
            if(confirm('Tem certeza?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>