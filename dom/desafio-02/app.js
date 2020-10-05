new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('ALERTA!!!')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})