<template>
	<view class='shop-summary'>
		<view class="shop-summary-head">
			<text class="icon bc-blue">自营</text>
			<text>{{info.name}}</text>
		</view>
		<view class="shop-summary-body">
			<text class="color-red">￥{{info.price || 0}}</text>
		</view>
		<view class="shop-summary-foot color-999">
			<text>运费：{{info.freight || 0}}元</text>
			<text>销量：{{info.totalSale || 0}}</text>
			<text>税费：{{formatMoney}}元</text>
		</view>
	</view>	
</template>
<script>
	export default {
		props:{
			info:{
				type:Object,
				default:function(){
					return {
						
					}
				}
			}
		},
		computed:{
			formatMoney(){
				return Math.round(this.info.taxPoint * this.info.price / 100)
			}
		},
		data() {
			return {

			}
		},
		methods: {

		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.shop-summary {
		background-color: #fff;
		padding: 30upx 20upx;
		box-sizing: border-box;
		font-size: 28upx;
		border-top: 1upx solid #f5f5f5;
		
		.icon{
			color: #fff;
			display: inline-block;
			margin-right: 10upx;
			border-radius: 30upx;
			width: 60upx;
			font-size: 24upx;
			text-align: center;
		}
		
		&-body{
			line-height: 80upx;
			font-size: 34upx;
			font-weight: 700;
		}
		
		&-foot{
			font-size: 24upx;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
