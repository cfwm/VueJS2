<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<!-- quando o nome de algum filtro é caseSensitive, pode-se chamá-lo acrescentando um - antes da letra maiúscula e substituindo-a por minúscula -->
		<p>{{ frase | espaco-por-virgula }}</p>
		<p>{{ frase | espacoPorVirgula }}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ frase | contar-palavras }}</p>
		<p>{{ frase | contarPalavras }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ fraseComVirgulas | contarPalavras }}</p>
		<p>{{ fraseComTamanhos }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import frasesMixin from './fraseMixin'

export default {
	mixins: [ frasesMixin ],
	data() {
		return {
			frase: 'Essa é a frase que será utilizada nos desafios.'
		}
	},
	filters: {
		espacoPorVirgula(valor) {
			// / / ou /\s/ pegam os espaços em vazios
			return valor.replace(/ /g, ',' )
		}
	},
	//vai para o mixin - fraseMixin
	// computed: {
	// 	fraseComVirgulas() {
	// 		return this.frase.replace(/\s/g, ',')
	// 	},
	// 	fraseComTamanhos() {
	// 		return this.frase.split(' ').map(p => `${p} (${p.length})`).join(' ')
	// 	}
	// }
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
