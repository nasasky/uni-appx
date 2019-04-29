<template>
	<view>
		<home-swiper></home-swiper>
		 <view>
		    <text>{{title}}</text>
		</view>
	</view>
	 
</template>

<script>
	import HomeSwiper from '../../components/home/swiper.vue';
	export default {
		components:{
			HomeSwiper
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
