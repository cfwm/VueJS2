<template>
    <div class="contadore">
        <app-contador v-for="c in 5" :key="c" />
    </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
    components: {
        //Registro local do componente Contador, o componente foi importador por outro componente e não no arquivo main.js
        'app-contador': Contador
    }
}
</script>

<style>
    /* div {
        border: 1px solid
    } */
</style>