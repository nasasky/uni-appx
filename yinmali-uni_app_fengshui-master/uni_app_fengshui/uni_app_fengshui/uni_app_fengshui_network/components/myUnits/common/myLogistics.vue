<template>
	<view class='my-logistics'>
		<text class="title color-999">物流追踪</text>
		
		<view class="detail">
			<text class="head color-666">XX快递：123456</text>
			
			<view class="body">
				<view v-for="(item,index) in 5" :key="index" class="list-item color-999">
					<text :class="index==0?'color-blue':''">派送中，广州天河派件员，包子君正在派件</text>
					<text class="time">时间</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
	.my-logistics {
		background-color: #ffffff;
		font-size: 28upx;
		
		>.title{
			display:block;
			height: 80upx;
			line-height: 80upx;
			padding: 0 30upx;
			border-bottom: 1upx solid #f5f5f5;
		}
		.detail{
			padding: 50upx 56upx 20upx;
			
			>.head{
				font-weight: 600;
			}
			
			.body{
				padding-top: 60upx;
				
				.list-item{
					
					text{
						display: block;
						padding-left: 45upx;
						border-left: 1upx solid #dddddd;
						position: relative;
					}
					text:nth-of-type(1):before{
						content:"";
						position: absolute;
						width: 32upx;
						height: 32upx;
						left: 0;
						border-radius: 50%;
						transform: translate(-50%);
						background-color: #dddddd;
					}
					text.color-blue:before{
						background-color:#3682FF;
						width: 24upx;
						height: 24upx
					}
					
					.time{
						line-height: 60upx;
						padding-bottom: 60upx;
					}
					
				}
				.list-item:nth-last-of-type(1){
					text{
						border: none;
					}
				}
			}
		}
	}
</style>
