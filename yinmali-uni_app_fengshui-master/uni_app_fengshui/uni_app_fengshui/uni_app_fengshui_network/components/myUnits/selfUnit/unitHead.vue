<template>
	<view class='unit-head'>
		<image :src="imgs"></image>
		<text class="shop-name">{{name}}</text>
		<text :class="'fr ' + formatClass">{{formatStatus}}</text>
	</view>
</template>

<script>
	import {selfOrderStatus} from '@/static/js/commonArray.js'
	export default {
		props:['name','status'],
		data() {
			return {
				imgs:require('@/static/imgs/shop.png')
			}
		},
		computed:{
			formatStatus(){
				return selfOrderStatus[this.status]
			},
			formatClass(){
				return this.status=="3"?"color-red":"color-blue"
			}
		}
	}
</script>
<style lang='scss'>
	.unit-head{
		height: 80upx;
		font-size: 28upx;
		line-height: 80upx;
		padding: 0 30upx;
		
		image{
			width: 32upx;
			height: 30upx;
			margin-right: 20upx;
			vertical-align: middle
		}
		text{
			vertical-align: middle
		}
	}
</style>
