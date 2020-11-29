<template>
	<router-view />
	<Popup v-if="player.name"
		>Choisissez un nom
		<Bouton
			@click="
				() => {
					player.name = 'coucou';
				}
			"
		></Bouton>
	</Popup>
</template>

<script>
	import player from "@/player";

	import Popup from "@/components/Popup.vue";
	import Bouton from "@/components/Bouton.vue";

	export default {
		name: "App",
		components: {Popup, Bouton},
		data() {
			return {
				player,
			};
		},
	};
</script>

<style>
	#app {
		font-family: "Poppins", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
