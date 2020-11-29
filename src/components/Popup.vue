<template>
	<div class="cont">
		<div class="dim"></div>
		<div class="box">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: [],
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.cont {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dim {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.11);
	}
	.box {
		background-color: white;
		padding: 20px;
		z-index: 2;
		position: relative;
		width: 300px;
	}
</style>
