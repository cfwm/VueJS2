<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens"
			:key="mensagem.texto"
			:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="text" size="lg"
					v-model="usuario.email"
					placeholder="Informe o E-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar"
				size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios"
				size="lg" variant="success"
				class="ml-2">Obter Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }}<br>
				<strong>E-mail: </strong> {{ usuario.email }}<br>
				<strong>ID: </strong> {{ id }}<br>
				<b-button variant="warning" size="lg"
					@click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2"
					@click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
//import para usar o axios localmente
import axios from 'axios'
export default {
	data() {
		return {
			mensagens: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			},

			usuarios: [],
		}
	},

	methods: {
		limpar() {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},

		salvar() {
			//requisição post com os dados de usuario
			// this.$http.post('usuarios.json', this.usuario)
			// 	.then(() => this.limpar())

			//requisição post e put
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(_ => 
					this.limpar(),
					this.mensagens.push({ //mensagem de sucesso
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					}))
		},

		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},

		//requisição delete
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar())
				.catch( err => { //mensagem de erro
					this.mensagens.push({
						texto: 'Não foi possível realizar a operação =(',
						tipo: 'danger'
					})
				})
		},

		//requisição get 
		obterUsuarios() {
			//as requsições get podem ter ou nao o .get: this.$http.get('usuarios.json'); ou this.$http('usuarios.json')
			this.$http('usuarios.json').then(resp => {
					this.usuarios = resp.data
					//console.log(this.usuarios)
				})
			//usando o axios local
			// axios('usuarios.json').then(resp => {
			// 		this.usuarios = resp.data
			// 	})
			
			//define o headers da requisição no espoco da própria requisição - só passa o headers a partir da segunda requisição
			//this.$http.defaults.headers.common['Authorization'] = 'xyz987'
		}
	},

	created() {
		//faz uma requisão post usando axios
		// this.$http.post('usuarios.json', {
		// 	nome: 'Maria',
		// 	email: 'maria_maria@gmail.com'
		// }).then(res => console.log(res))
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
