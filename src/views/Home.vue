<template>
	<div class="cont">
		<h1>Covid-garou</h1>
		<Bouton @click="() => this.$router.push('/village/1')">Fonder un village</Bouton>
	</div>
</template>

<script>
	import Bouton from "@/components/Bouton.vue";
	import Village from "@/classes/Village.ts";

	const village = new Village();
	console.log("village :>> ", village);

	export default {
		name: "Home",
		props: [],
		components: {Bouton},
		data() {
			return {};
		},
	};
</script>

<style scoped></style>
