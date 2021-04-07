<!-- @format -->

<template>
	<div class="page">
		<nav>
			<h1>五子棋</h1>
			<div class="rule">
				<span class="white" :class="{ active: player === 1 }">白 5:00</span>
				<span class="black" :class="{ active: player === 2 }">黑 5:00</span>
			</div>
		</nav>
		<section>
			<div class="grid" v-for="item in 196" :key="item"></div>
			<div class="pointBox">
				<div class="x" v-for="(xItem, xIndex) in point" :key="xIndex">
					<div class="y" v-for="(yItem, yIndex) in xItem" :key="yIndex">
						<div class="main" :class="{ white: yItem === 1, black: yItem === 2 }" @click="!winner && yItem === 0 && setPoint(xIndex, yIndex)"></div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			point: [
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
			],
			// 0为无，1为白棋，2为黑棋
			player: 1,
			step: [],
			// true为白棋，false为黑棋
			winner: 0,
		}
	},
	methods: {
		// 落子
		setPoint(xIndex, yIndex) {
			this.step.push([this.player, xIndex, yIndex])
			this.point[xIndex][yIndex] = this.player
		},
		// 检查是否有任意一方胜利
		check(xIndex, yIndex) {
			// 拿到落子点 X轴前后各4颗棋子
			let x = []
			for (let index = yIndex - 4; index < yIndex + 5; index++) {
				if (index >= 0 && index <= 14) {
					x.push(this.point[xIndex][index])
				}
			}

			// 拿到落子点 Y轴上下各4颗棋子
			let y = []
			for (let index = xIndex - 4; index < xIndex + 5; index++) {
				if (index >= 0 && index <= 14) {
					y.push(this.point[index][yIndex])
				}
			}

			// 拿到落子点 左上到右下各4颗棋子
			let xy = []
			for (let index = yIndex - 4; index < yIndex + 5; index++) {
				if (index >= 0 && index <= 14) {
					if (index - yIndex + xIndex >= 0 && index - yIndex + xIndex <= 14) {
						xy.push(this.point[index - yIndex + xIndex][index])
					}
				}
			}

			// 拿到落子点 右上到左下各4颗棋子
			let yx = []
			for (let index = xIndex - 4; index < xIndex + 5; index++) {
				if (index >= 0 && index <= 14) {
					if (xIndex + (yIndex - index) >= 0 && xIndex + (yIndex - index) <= 14) {
						yx.push(this.point[index][xIndex + (yIndex - index)])
					}
				}
			}

			return this.checkFive(x) || this.checkFive(y) || this.checkFive(xy) || this.checkFive(yx)
		},
		checkFive(array) {
			let check = 1
			for (let index = 0; index < array.length; index++) {
				const element = array[index]
				if (index && element === array[index - 1] && element !== 0) {
					check++
					if (check === 5) {
						break
					}
				} else {
					check = 1
				}
			}
			return check === 5
		},
	},
	watch: {
		point: {
			deep: true,
			handler() {
				let stepLength = this.step.length
				if (this.check(this.step[stepLength - 1][1], this.step[stepLength - 1][2])) {
					this.winner = this.step[stepLength - 1][0]
					this.$alert(`${this.winner == 1 ? '白棋' : '黑棋'}胜利`, '胜负已定', {
						confirmButtonText: '确定',
						callback: action => {
							console.log(action, this.$route);
							this.$router.go(0)
						},
					})
				} else {
					this.player = this.player == 1 ? 2 : 1
				}
			},
		},
	},
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
		padding: 2px 2px 2px;
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
