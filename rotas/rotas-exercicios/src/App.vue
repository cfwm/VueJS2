<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- <Menu /> -->
		<!-- router nomeado -->
		<router-view name="menu" />
		
		<!-- Adiciona animação no processo de transição de componentes do vue router -->
		<transition
			mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut">
			<router-view />
		</transition>
		<router-view name="menuInferior" />
	</div>
</template>

<script>
//import Menu from './components/template/Menu' -> Menu  foi usado com rota nomeada
export default {
	
	//components: { Menu } -> Menu  foi usado com rota nomeada
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
