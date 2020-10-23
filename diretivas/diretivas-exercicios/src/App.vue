<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<!-- Deve-se ter cuidado para não sofrer ataques por cross-sites scripting (XSS) -->
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<!-- v-destaque é a declaração da diretiva destaque crianda em main.js
		com ="'blue'" associado a diretiva é possível enviar informações a diretiva, como
		objetos, strings, numbers...  -->
		<!-- <p v-destaque="'blue'">Usando diretiva personalizada</p> -->
		<!-- envia o objeto cor -->
		<!-- <p v-destaque="cor">Usando diretiva personalizada</p> -->
		
		<!-- "v-teste" é a diretiva, ":argumento" é o argumento passado pela diretiva (apenas 1), 
		"mod1", "mod2" e "mod3" são os modificadores (pode haver mais de um) e o que vem depois do = é a 
		informação passada pelo componente filho (apenas 1, mas pode ser um objeto) 
		<p v-nome:argumento.mod1.mod2.mod3="'se for string deve ser passada entre aspas simples'"></p> 
		Os métodos gatilhos, ou hooks, definem o ciclo de vida de uma diretiva:
			- bind(el, bindingm vnode) -> a diretiva é interligada ao elemento
			- inserted(el, bindingm vnode) -> o elemento é inserido no nó pai
			- update(el, bindingm vnode) -> quando o componente é atualizado antes dos filhos
			- componentUpdated(el, bindingm vnode) -> o componente é atulizado depois dos filhos
			- unbind(el, bindingm vnode) -> a diretiva é desvinculada do elemento 
		
		-->

		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretiva personalizada</p>
		<p v-destaque.atrasar="cor">Usando diretiva personalizada</p>

		<!-- aqui são passadas apenas string como informações
		<p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Usando diretiva personalizada</p>
		<p v-destaque-local.atrasar.alternar="cor">Usando diretiva personalizada</p> -->

		<!-- passa objeto como informação -->
		<p v-destaque-local:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalor: 200}">Usando diretiva personalizada</p>
		<!-- não é obrigatório passar todos os parâmetros, a não ser que algum parâmtro seja required(?) -->
		<p v-destaque-local.atrasar.alternar="{cor1: 'red', atraso: 5000}">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	//cria diretiva local
	components: { },
	directives: {
		//o objeto abaixo pode ser declarado em um arquivo js e usando em diversos componentes vue 
		//como diretiva através do import
		'destaque-local': {
			bind(el, binding, vnode) {		
				//recebendo binding de modificador:
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') { 
						el.style.backgroundColor = cor 
					} else {
						el.style.color = cor
					}
				}
				
				let atraso = 0
	/*  recebendo binding de modificador:				
		a informação passada pela diretiva é uma string
				if(binding.modifiers['atrasar']) atraso = 3000
				
				const cor1 = binding.value
				const cor2 = 'purple'
				let corAtual = cor1
				setTimeout(() => {
					//recebendo binding de modificador:
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, 1000)
					} else {
						aplicarCor(corAtual)
					}
				}, atraso) 
	*/
				
			/* passando objeto pela diretiva	
			recebendo binding de modificador: */

				if(binding.modifiers['atrasar']) atraso = binding.value.atraso
				
				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1
				setTimeout(() => {
					//recebendo binding de modificador:
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, binding.value.intervalo)
					} else {
						aplicarCor(binding.value.cor1)
					}
				}, atraso)	
			}
		}
	},
	data() {
		return {
			cor: 'red'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
