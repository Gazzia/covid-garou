<template>
	<div class="bouton">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "Bouton",
	};
</script>

<style scoped>
	.bouton {
		padding: 10px 20px;
		background-color: rgb(69, 25, 25);
		color: white;
		width: auto;
		display: flex;
		font-family: "Poppins";
		font-weight: 500;
		letter-spacing: 0.8px;
		justify-content: center;
	}
</style>
