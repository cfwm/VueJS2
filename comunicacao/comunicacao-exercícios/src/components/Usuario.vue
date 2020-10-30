<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!-- abaixo, o v-bind:nome, ou :nome, é usado para compartilhar informação do componente Usuario.vue (que é o componente pai) 
            com o componente UsuarioInfo.vue, que é o componente filho. -->
            <!-- ATENÇÃO! A comunicação entre componentes é case sensitive!! 
            Geralmente, é usado o padrão camel case na comunicação entre componentes do Vue. -->
            <app-usuario-info 
                :nome="nome"
                :idade="idade"
                @nomeMudou="nome = $event"
                :reiniciarFn="reiniciarNome" 
            />
            <!-- @nomeMudou="nome = $event" -> E no componente pai deve-se colocar no componente filho que envia um evento um @ seguido do nome do evento, que, neste caso,
            vai receber na propriedade nome a propriedade passada com @event, que pode se referir a qualquer tipo de propriedade.
            Caso a propriedade passada for um objeto, deve-se acessá-la com notação ponto. 
            :reiniciarFn="reiniciarNome" -> serve para passar um método do componente pai para o componente filho. -->
            <app-usuario-editar 
                :idade="idade"
                
            />
            <!-- a linha a seguir sai para dar lugar a comunicação via barramento/event bus. 
            @idadeMudou="idade = $event + 1" A comunicação entre componentes irmão se dá por intermédio do componente pai: o componente filho deve emitir um evento para o
            componente pai, que deve enviar via props a alteração para o componente irmão. Como a idade apenas é definida no componente pai, a idade passada 
            pelo componente filho e somada com 1 no componente pai que é definida -->
        </div>
    </div>
</template>
<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data () {
        return {
            nome: 'Pedro',
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
