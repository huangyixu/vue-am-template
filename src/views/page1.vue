<template>
	<div class="page">
		<span @click="$router.go(-1)">返回</span>
		<span @click="$router.push({
			path: '/page2'
		})">page1</span>
	</div>
</template>

<script setup>
	import { onMounted, onUpdated, reactive, computed } from 'vue'

	onMounted(() => {
		loginForm.username = 'Ammmm'
	})

	onUpdated(() => {
		console.log('updated');
	})

	const loginForm = reactive({
		username: null
	})

	const C_username = computed(() => {
		return `内容为：${loginForm.username}`
	})

</script>

<style lang="scss" scoped>
	.page {
		@include flex();
	}
</style>