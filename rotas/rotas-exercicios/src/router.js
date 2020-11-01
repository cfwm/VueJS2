import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
// import Usuario from './components/usuario/Usuario' -> será carregado sob demanda

//import de outros componentes do usuário para as rotas aninhadas
// import UsuarioLista from './components/usuario/UsuarioLista' -> será carregado sob demanda
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe' -> será carregado sob demanda
//import UsuarioEditar from './components/usuario/UsuarioEditar' -> será carregado sob demanda

//import do componente Menu que é usado através de rota nomeada
import Menu from './components/template/Menu'

import MenuAlt from './components/template/MenuAlt'


Vue.use(Router)

//São carregados sob demanda -> bom para aplicações grandes
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario') 
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
// O /* webpackChunkName: "usuario" */ agrupa as rotas que possuem esse comentário no arquivo usuario.js
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const router = new Router({
    //modo hash, url com /#/, e modo history, url com / e com a possibilidade de navegar pelo voltar do navegador
    //o padrão é o modo hash, caso seja implementado modo history, deve-se fazer algumas configurações no servidor, 
    //ver: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    mode: 'history',

    //função que faz a página rolar para um determinado lugar
    scrollBehavior(to, from, savedPosition) {
        //return { x: 0, y: 1000}

        //rola a página para a posição salva
        if(savedPosition) {
            return savedPosition
        }
        
        //rola a página para um seletor específico
        else if(to.hash) {
            return { selector: to.hash }
        }
        
        //se não tiver nem savedPosition nem Hash, a página volta para o início
        else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {   
            name: 'inicio',
            path: '/',
            //component: Inicio -> Menu foi usado com rota nomeada
            components : {
                default: Inicio,
                menu: Menu
            } 
        },
        {
            //o :id passa id como parâmetro via url
            path: '/usuario',
            //component: Usuario, -> terá tbm o componente MenuAlt
            components: { 
                default: Usuario, 
                menu: MenuAlt,
                menuInferior: MenuAlt 
            },
            
            //ativa a passagem de parâmetros via props
            props: true,

            //registro das rotas aninhadas
            children: [
                { path: '', component:UsuarioLista },
                { path: ':id', component: UsuarioDetalhe, props:true,
                    beforeEnter: (to, from, next) => {
                        console.log('BeforeEnter -> Antes da rota -> usuário detalhe')
                        next() }},
                { path: ':id/editar', component: UsuarioEditar, props:true,
                    //usando rotas com name e não path
                    name: 'editarUsuario' },
            ]
        }, { //redireciona rota
            path: '/redirecionar',
            redirect: '/usuario'
        },{ //redireciona qlqr rota não suportada para a página inicial
            path: '*',
            redirect: '/'
        },
    ]
})

//chama alguma função para ser executada antes de entrar em qualquer rotas de forma global 
//pode ser usado para proteger a página de modo a verificar se o usuário possui as credenciais para acesso, como um token.
router.beforeEach((to, from, next) => {
    console.log('beforeEach -> Antes das rotas -> GLOBAL')
    //na função abaixo é feita uma amarração nas rotas
    // if(to.path !== '/usuario') {
    //     next('/usuario')
    // } else {
    //     next()
    // }
    next()
    //o beforeEnter é usado localmente em routes.js -> children -> UsuarioDetalhe
})

export default router