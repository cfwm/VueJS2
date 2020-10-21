<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- Número de repetições: {{ numero }} | Número do índice: {{ indice }}
        <span ></span>
        {{ citacoes[indice].texto }}
        <span></span> -->
        <!-- <Citacao :texto="citacoes[indice].texto"></Citacao> 
        Não será feito por props, mas pelo corpo do componente-->
        <Citacao>
            <!-- Mais de um slot tbm podem ter o nome duplicado  -->
            <h4 slot="autor">Autor: </h4>
            <h4 slot="autor">{{ citacoes[indice].autor }}</h4>
            <!-- Pode-se misturar slot nomeados com não nomeados, 
            desde que cada slot esteja nomeado ou não nomeado nos
            dois componentes -->
            <!-- O mecanismo de nomeação de slots para transferência de elementos entre componentes
            tbm funciona com tags, deste estejam dentro de <Citacao /> -->
            <p>Citação</p>
            <p>{{ citacoes[indice].texto}}</p>
            <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
        </Citacao>
    </div>
</template>

<script>
import Citacao from './Citacao.vue'

export default {
    components: { Citacao },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() { //sempre vai retornar os índices 0, 1 e 2 para percorrer um array/objeto
            return Math.abs(this.numero % 3)
        }
    },
    //Abaixo é possível observar que cada vez que o elemento externo é chamado ele é criado e quando é substituído é destruído
    created() {
        console.log('created')
    },
    destroyed() {
        console.log('destroyed')
    },
    //Se o elemento enviado está envolvido pela tag keep-alive no componente haole
    //ele é atividado e desativado
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
