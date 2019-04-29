<template>
	<view class="unit-body">
		<image :src="(formatInfo&&formatInfo.logo)||formatInfo.mainImage||imgs"></image>
		<view class="content">
			<view class="">
				<view class="">
					<text class="title">{{formatInfo.name || "暂无"}}</text>
				</view>
				<text class="title2 color-999">{{color}}</text>
			</view>
			<view class="">
				<text class="title2 color-red">￥{{money||0}}</text>
				<text class="fr">x{{count}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['info','color','count','money' ],
		data() {
			return {
				imgs:require('@/static/imgs/shop.png')
			}
		},
		computed:{
			formatInfo(){
				return this.info || uni.getStorageSync(Window.myGoodInfo)
			}
		},
		methods: {
			
		},
	}
</script>
<style lang='scss'>
	.unit-body{
		padding: 20upx 30upx;
		font-size: 28upx;
		display: flex;
		border-bottom: 1upx solid #f5f5f5;
		border-top: 1upx solid #f5f5f5;
		background-color: #ffffff;
		box-sizing: border-box;
		min-height: 225upx;
	
		image{
			width: 180upx;
			height: 180upx;
			margin-right: 20upx;
			padding: 20upx;
			border: 1upx solid #D0D0D0;
			box-sizing: border-box;
		}
		.content{
			display: inherit;
			flex: 1;
			flex-direction: column;
			/* justify-content: space-between; */
			
			.title{
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}
			.title2{
				font-size: 24upx;
			}
		}
	}
	
</style>
