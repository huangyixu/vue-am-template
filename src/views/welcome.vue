<!-- @format -->

<template>
	<div class="page">
		<img
			src="/src/assets/images/logo.png"
			alt=""
			@click="
				$router.push({
					path: '/page1'
				})
			"
		/>
		<h1>{{ data.appName }}</h1>
		<p @click="$router.push({
			path: '/goBang'
		})">五子棋</p>
	</div>
</template>

<script setup>
	import { reactive } from 'vue'

	const data = reactive({
		appName: 'vue-am-template'
	})
</script>

<style lang="scss" scoped>
	.page {
		@include flex(column, center, center);
		img {
			width: 10vw;
		}
	}
</style>
