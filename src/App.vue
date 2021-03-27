<!-- @format -->

<template>
	<router-view />
</template>

<script setup></script>

<style lang="scss">
	html {
		overflow: -moz-hidden-unscrollable;
		height: 100%;
	}

	body::-webkit-scrollbar {
		display: none;
	}

	body {
		-ms-overflow-style: none;
	}

	* {
		margin: 0;
		padding: 0;
	}

	#app {
		min-width: 1366px;
		min-height: 700px;
		width: 100vw;
		height: 100vh;
	}
</style>
