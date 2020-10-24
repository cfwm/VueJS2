import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Declarando um filtro globalmente - no arquivo da instância VUE
Vue.filter('inverter', function(valor) {
	return valor.split('').reverse().join('')
})

//Declarando Mixin global -- é chamado uma vez para cada componente, inclusive para o Vue Instance.
//Qualquer propriedade do mixin global pode ser chamada em qualquer componente
Vue.mixin({
	data() {
		return {
			global: 'Estou no Mixin Global'
		}
	},
	created() {
		console.log('Created - Mixin Global')
	}
})

new Vue({
	render: h => h(App),
	created() {
		console.log('Created - Vue Instance')
	}
}).$mount('#app')
