<template>
	<view class="h-swiper">
		<swiper :indicator-dots="true" indicator-color="rgba(0,0,0,.2)" :circular="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#f8584f">
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item">
					<image :src="host + item.ad_code" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
        mapState
    } from 'vuex';
	export default {
		data() {
			return {
				list:[]
			};
		},
		computed:{
			 ...mapState(['host'])
		},
		methods:{
			getSwiperInit(){
				const that = this;
				this.$store.dispatch("getSwiper",res=>{
					console.log(res);
					that.list = res.result;
				})
			},
			getInit(){
				this.getSwiperInit();
			}
		},
		created() {
			this.getInit();
		}
		
	}
</script>

<style scoped>
	.h-swiper swiper{
		height: 290upx;
	}
	.h-swiper image{
		width: 100%;
		height: 290upx;
	}
  .h-swiper {
	  width:100%;
	  height: 290upx;
	  padding-bottom:20upx;
	  overflow: hidden;
  }
   
</style>
