<template>
	<view :class="formatClass"></view>
</template>

<script>
	export default {
		props:['classList'],
		data() {
			return {

			}
		},
		computed:{
			formatClass(){
				return this.classList
			}
		}
	}
</script>
<style lang='scss'>
	.iconfont{
		display: inline-block;
		font-size: 40upx;
		position: absolute;
		top: 50%;
		transform: translateY(-50%)
	}
</style>
