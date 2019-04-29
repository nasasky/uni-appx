<template>
	<view class='product-unit' @click="gotoDetail">
		<image :src="img" mode=""></image>
		<view class="content">
			<text class="title">我是标题</text>
			<view>
				<text>上架时间</text>
				<text class="fr">销量</text>
			</view>
			<view>
				<text class="color-red">￥120</text>
				<text class="fr">上架状态</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:require('@/static/imgs/pic.png'),
			}
		},
		methods: {
			gotoDetail(){
				this.navigatorTo("/pages/product/productDetail?id=1")
			}
		}
	}
</script>
<style lang='scss'>
	.product-unit {
		box-sizing: border-box;
		padding: 30upx;
		background-color: #ffffff;
		margin: 20upx 0;
		display: flex;
		
		image{
			width: 160upx;
			height: 160upx;
			margin-right: 34upx;
		}
		
		.content{
			flex: 1;
			display: inherit;
			flex-direction: column;
			justify-content: space-between;
			font-size: 24upx;
			color: #999999;
			
			.title{
				font-size: 28upx;
				color: #333333;
			}
		}
	}
</style>
