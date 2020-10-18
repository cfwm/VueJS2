<template>
  <div class="contador">
    <span>{{contador}}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
    <!-- <div>teste</div> -->
  </div>  
</template>

<script>
export default {
  data () {
    return {
      contador: 0,
    }
  },
  methods: {
      adicionar() {
          this.contador++
      },
      subtrair() {
          this.contador--
      }
  }
  
}
</script>
<!-- Ao marcar a tag style com a diretiva scoped, os efeitos de estilos definos nesta tag terão validade apenas para
os elementos dente componente -->
<style scoped>
    /* Não é necessário especificar tando o componente que será aplicado o estilo, como colocar a classe da tag modificada.
        .contador span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    } */
    span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }

    /* Abaixo o seletor é especificado */
    button[data-v-6cbbf471] {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
    
    /* div {
        border: 1px solid blue;
    } */
</style>