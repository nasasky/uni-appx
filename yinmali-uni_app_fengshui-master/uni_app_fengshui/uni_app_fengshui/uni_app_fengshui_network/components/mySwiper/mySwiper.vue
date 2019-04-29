<template>
	<swiper :class="formaltClass" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		<swiper-item class="swiper-item" v-for="(item,index) in formatImgs" :key="index">
			<image :src="item" mode=""></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props:['imgs','isHome'],
		data() {
			return {
				indicatorDots: false,//是否显示指示点
				autoplay: true,
				interval: 4000,
				duration: 500
			}
		},
		computed:{
			formatImgs(){
				return this.imgs
			},
			formaltClass(){
				return this.isHome?'isHome':'isDetail'
			}
		},
		methods: {

		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.isHome{
		height: 280upx;
		background-color: #fff;
		
		image{
			width: 100%;
			height: 280upx;
			border-radius: 20upx;
		}
	}
	.isDetail{
		height: 600upx;
		background-color: #fff;
	}
	.swiper-item{
		position: relative;
		
		image{
			position: absolute;
			width: 100%;
			height: 100%;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
		}
	}
		
</style>
