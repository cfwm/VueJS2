<template>
	<div id="app">
<!--    <Citacoes />
		<Sobre />
		Componentes podem ser exibidos de outras formas. -->
		<!-- <component :is="Citacoes" /> com a diretiva :is="" chamando o componentes diretamente 
		ou de forma dinâmica como abaixo-->
		<span>
			<button @click="componente = 'Citacoes'">Citações</button>
			<button @click="componente = 'Sobre'">Sobre</button>
		</span>
		<!-- <component :is="componente" /> Se declarado desta forma, o componente é criado toda vez que é chamado
		e destruído toda vez que é substituído. Envolvendo o componente na tag keep-alive isto não acontece -->
		<keep-alive>
			<component :is="componente" /> <!-- Os  filhos deste componente tbm são herdam o keep-alive -->
		</keep-alive> 

	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			//Iniciando a propriedade para exibição dinâmica de componentes 
			componente: 'Citacoes'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>