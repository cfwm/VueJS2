<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<!-- O form pode ser div, o comportamento será igual devido ao Vue, mas podem 
			ocorrer efeitos colaterais no estilo -->
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<!-- O LAZY faz com q o resultado só seja preenchido qnd o usuário deixar
					o input de e-mail e o TRIM remove os espaços em branco antes e 
					após a string armazenada -->
					<input type="text" v-model.lazy.trim="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model.number="usuario.senha">
				</Rotulo>
				<!-- NUMBER transforma o input type number em number e não string
				 ao armazená-lo na variável  -->
				<Rotulo nome="Idade">
					<input type="number" v-model="usuario.idade">
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4">
						<input 
							type="checkbox" 
							v-model="caracteristicas"
							value="reproduzivel"
						>Reproduzível</span>
					<span>
						<input 
							type="checkbox" 
							v-model="caracteristicas"
							value="intermitente" 				
						>Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<!-- O v-model="produto" faz com que o Vue entenda que os três elementos fazem parte
					de um mesmo grupo de radio e q apenas um deles pode ser selecionado -->
					<span class="mr-4"><input type="radio" value="web" v-model="produto"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="produto"> Mobile</span>
					<span><input type="radio" value="outro" v-model="produto"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridade">
						<!-- o v-model="prioridade" impede a ação de :selected="prioridade.codigo === 1", 
						por isso foi criada uma propriedade "prioridade: 1". Além disso, o :selected e o :value
						impedem que seja interpolado o nome da prioridade -->
						<option v-for="prioridade in prioridades" 
						:value="prioridade.codigo"
						:key="prioridade.codigo"
						:selected="prioridade.codigo === 1"
						> 
							{{ prioridade.codigo }} - {{ prioridade.nome }}</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<!-- <input type="text" v-model="temp"
						@input="temp = $event.target.value"> -->
					<Escolha v-model="escolha" />
				</Rotulo>
				<hr>
				<!-- prevent faz com que os dados não sejam realmente enviados,
				apenas há uma simulação de envio -->
				<button @click.prevent="enviar">Enviar</button>
			</form>


			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ usuario.idade }} | {{ tipoIdade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<!-- O white-space: pre salva as quebras de linha -->
					<span style="white-space: pre">{{ mensagem }}</span>
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="c in caracteristicas" :key="c">{{ c }}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{prioridade}}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
				</Rotulo>
				<!-- <Rotulo nome="Primeira Reclamação?">
					<span>{{ temp }}</span>
				</Rotulo> -->
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	computed: {
		tipoIdade() {
			return typeof this.usuario.idade
		}
	},
	methods: {
		enviar() {
			this.enviado = true
		}
	},
	data() {
		return {
			mensagem: '',
			caracteristicas: [],
			produto: 'web',
			prioridade: 1,
			prioridades: [
				{ codigo: 1, nome: 'Baixa'},
				{ codigo: 2, nome: 'Moderada'},
				{ codigo: 3, nome: 'Alta'},
			],
			usuario: {
				email: '',
				senha: '',
				idade: 25.
			},
			// temp: '',
			escolha: true,
			enviado: false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
