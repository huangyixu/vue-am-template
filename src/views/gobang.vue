<!-- @format -->

<template>
	<div class="page">
		<nav>
			<h1>五子棋</h1>
			<div class="rule">
				<span class="white" :class="{ active: player === true }">白 5:00</span>
				<span class="black" :class="{ active: player === false }">黑 5:00</span>
			</div>
		</nav>
		<section>
			<div class="grid" v-for="item in 196" :key="item"></div>
			<div class="pointBox">
				<div class="x" v-for="(xItem, xIndex) in point" :key="xIndex">
					<div class="y" v-for="(yItem, yIndex) in xItem" :key="yIndex">
						<div class="main" :class="{ white: yItem === 1, black: yItem === 2 }" @click="yItem === 0 && setPoint(xIndex, yIndex)"></div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { reactive, watch } from 'vue'

let point = reactive([
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
])

let player = reactive(true)

watch(point, (val, oldVal) => {
	// console.log(val, oldVal)
    player = !player
})

const setPoint = (xIndex, yIndex) => {
	point[xIndex][yIndex] = player ? 1 : 2
}
</script>

<style lang="scss" scoped>
.page {
	background-color: #f0b060;
	@include flex(column, center, center);
	> nav {
		width: 800px;
		@include flex(row, center, space-between);
		> .rule {
			@include flex(row, center);
			> span {
				font-weight: bold;
				font-size: 16px;
				line-height: 24px;
				&.white {
					color: white;
					border-color: white;
				}
				&.black {
					margin-left: 20px;
					color: black;
					border-color: black;
				}
				&.active {
					border-bottom: 2px solid;
				}
			}
		}
	}
	> section {
		margin-top: 30px;
		box-sizing: border-box;
		padding: 2px 2px 1px;
		width: 800px;
		height: 800px;
		background-color: #8f5b36;
		display: grid;
		grid-template-columns: repeat(14, 1fr);
		grid-template-rows: repeat(14, 1fr);
		grid-gap: 2px;
		> .grid {
			background-color: #f0b060;
		}
		> .pointBox {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			@include flex(column, unset, space-between);
			> .x {
				height: 2px;
				@include flex(row, unset, space-between);
				> .y {
					width: 2px;
					background-color: black;
					@include flex(row, center, center);
					> .main {
						position: absolute;
						width: 40px;
						height: 40px;
						border-radius: 50%;
						cursor: pointer;
						&.white {
							background-color: white;
						}
						&.black {
							background-color: black;
						}
					}
				}
			}
		}
	}
}
</style>
