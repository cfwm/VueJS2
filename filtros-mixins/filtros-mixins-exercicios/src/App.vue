<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
		<!-- usando o filto num contexto de interpolação com "| cpf" 
		Pode-se ainda aplicar mais de um filtro com outro |, deste modo, 
		o resultado do primeiro filtro passa para o segundo e assim sucessivamente -->
		<p>{{ cpf | cpfFilter | inverter }}</p>
		<!-- um filtro tbm pode ser usado no contexto do v-bind. Já o v-model não suporta este tipo de estrutura -->
		<input type="text" :value="cpf | cpfFilter | inverter">
		<hr>
		<Frutas />
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{ fruta }}"</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
		</div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
import frutasMixin from './frutasMixin' 
import usuarioMixin from './usuarioMixin'
//O uso de mixin permite importar dados e métodos de outro componente, de modo que não seja necessário a declaração 
//de métodos e dados nos componentes em que são utilizados, desde que haja a importação do mixin.

export default {
	components: { Frutas },
	mixins: [ frutasMixin, usuarioMixin],
	//declarando filtro local
	filters: {
		//aplicando máscara de CPF -> deve-se ainda fazer verificação de tamanho
		cpfFilter(valor) { //`${valor}` garante que o que for passado será string
			const arr =  `${valor}`.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	
	data() {
		return {
			 cpf: '60070080090',
	//Não precisa pq é importado mixin 
	// 		fruta: '',
    //         frutas: ['banana', 'maça', 'laranja']
	 	}
	 },
	//Não precisa pq é importado mixin 
	// methods: {
    //     add() {
    //         this.frutas.push(this.fruta)
    //         this.fruta = ''
    //     }
	// }
	//depois de chamar o método de ciclo de vida do mixin é chamado o método de ciclo de vida do componenete 
	created() {
		console.log('Created - App')
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

input {
	font-size: 2.5rem;
}
</style>
