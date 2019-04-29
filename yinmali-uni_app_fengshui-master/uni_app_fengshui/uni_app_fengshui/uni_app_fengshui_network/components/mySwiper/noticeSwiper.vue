<template>
	<swiper class="swiper" :indicator-dots="indicatorDots" :display-multiple-items="displayNums" :vertical="vertical" :autoplay="autoplay" :interval="interval" :duration="duration">
		<swiper-item class="swiper-item" v-for="(item,index) in formatImgs" :key="index">
			<text class="white-space">{{item.text}}</text>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props:['noticeSwiper'],
		data() {
			return {
				indicatorDots: false,//是否显示指示点
				autoplay: true,
				interval: 2000,
				duration: 500,
				vertical:true,
				displayNums:2,
			}
		},
		computed:{
			formatImgs(){
				return this.noticeSwiper || []
			}
		},
		methods: {

		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.swiper{
		height: 100upx;
		
		&-item{
			height: 50upx;
			line-height: 50upx;
			
			text{
				display: block;
			}
		}
	}
</style>
