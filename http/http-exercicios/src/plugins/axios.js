import Vue from 'vue'
import axios from 'axios'

//define a URL base que será usada para acessar o backend de forma GLOBAL. Sem a baseURL definida de forma global,
//esta URL deve ser passada em toda requisição
// GLOBAL 
//axios.defaults.baseURL = 'https://curso-vue-6ccfe.firebaseio.com/'

//cria headers globais - qnd o axios é acessado de forma GLOBAL
//axios.defaults.headers.common['Authorization'] = 'abc123'

//cria headers específico no método get - qnd o axios é acessado de forma GLOBAL
//axios.defaults.headers.get['Accepts'] = 'application/json'

//a url base será acessada pelo vue com $http
Vue.use({
    install(Vue) {
        // GLOBAL 
        //Vue.prototype.$http = axios

        //cria uma instãncia do axios
        Vue.prototype.$http = axios.create({ 
            //declarando baseURL na instância axios
            baseURL: 'https://curso-vue-6ccfe.firebaseio.com/',
            
            //declarando headers na instância axios
            // headers: {
            //     "Authorization": "abc123"
            // },
            
            //declarando headers no método get da instância axios
            // get: {
            //     headers: {
            //         "Authorization": "abc123"
            //     }
            // }
        })

        //interceptando requisições com função que manda para o console o método usado em toda requisição
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            //muda o tipo da requisição
            // if(config.method == 'post'){
            //     config.method = 'put'
            // }
            // console.log(config.method)
            return config
        }, error => Promise.reject(error))

        //interceptor de resposta
        Vue.prototype.$http.interceptors.response.use( res => {
            //coloca a res no array e envia como reposta da requisição o array e não res
            // const array = []
            // for(let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave]})
            // }
            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})

