<template>
    <div class="citacao">
        <!-- {{ texto }} 
        Não será passado por props, mas por slot-->
        <!-- <slot></slot> 
        Pode-se tbm nomear os slots-->
        <slot name="fonte"></slot>
        <!-- Pode-se misturar slot nomeados com não nomeados, 
        desde que cada slot esteja nomeado ou não nomeado nos
        dois componentes -->
        <slot></slot>
        <!-- <slot name="autor"></slot>   
        slot recebido  de um componente haole dentro em um elemento nativo -->
        <div class="autor"><slot name="autor"></slot></div>
    </div>
</template>

<script>
export default {
//     props: ['texto']

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
/* O estile aplicado a qualquer elemento recebido em um slot pode ser do componente nativo ou não, 
no caso de haver duas aplicações de estilo, o estilo do componente nativo se sobrepõe, até mesmo se 
"!important" estiver aplicado nos estilos dos dois componentes. */
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    .autor {
        float: right;
    }
</style>
