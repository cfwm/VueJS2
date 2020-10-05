new Vue({
    el: '#desafio',
    data: {
        nome: 'Carlos',
        idade: 29,
        imagemLink: 'https://vuejsdevelopers.com/images/posts/versions/generic_vue_header_1200.webp'
    },
    methods: {
        randomico: function() {
            let random = Math.random() * (1 - 0) + 0 
            return random
        }
    }

})