import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//implementação de uma diretiva global:
Vue.directive('destaque', {
	//bind faz a ligação da do componente pai da diretiva com os componentes filhos que recebem a diretiva
	bind(el, binding, vnode) {
		//o el passa o próprio elemento, que pode ser um objeto, o binding passa dados recebidos 
		//e o vnode é um nó virtual criado pelo node. É explicitamente recomendo modificar apenas o el
		// el.style.backgroundColor = 'lightgreen' -> define o background-color do elemento em q a diretiva for utilizada
		//el.style.backgroundColor = binding.value -> aqui o el recebe o valor passado pelo componente filho
		
		//recebendo binding de modificador:
		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 3000
		
		
		setTimeout(() => {
			//recebendo binding de argumento
			if(binding.arg === 'fundo') { //se o argumneto for estritamente igual a fundo
				el.style.backgroundColor = binding.value //a cor de fundo do componente recebe a cor passada pelo el
			} else {
				el.style.color = binding.value // se não a cor da fonte do componenetre recebe a cor passada pelo el
			}
		}, atraso)	
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
