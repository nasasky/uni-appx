<template>
	<view class='shop-unit' @click="gotoDetail">
		<image :src="info.mainImage ||defaltImg" mode=""></image>
		<view class="shop-unit-content">
			<text class="title title1 imitate_ellipsis">{{info.name}}</text>
			<view class="">
				<text class="color-red">￥{{info.price || 0}}</text>
				<text class="fr color-999">销量：{{info.salesCount || 0}}</text>
			</view>
			<text class="title color-999">{{info.storeName || "暂无"}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['info'],
		data() {
			return {
				defaltImg:require('@/static/imgs/pic.png')
			}
		},
		methods: {
			gotoDetail(){
				this.navigatorTo("/pages/shops/detail?id="+this.info.id)
			}
		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.shop-unit {
		height: 200upx;
		box-sizing: border-box;
		padding: 20upx;
		background-color: #fff;
		margin: 20upx 0;
		display: flex;
		
		image{
			height: 160upx;
			width: 160upx;
			margin-right: 30upx;
		}
		
		&-content{
			display: inherit;
			flex: 1;
			flex-direction: column;
			justify-content: space-between;
			
			.title{
				font-size: 26upx;
				border: none;
				padding-left: 0;
			}
			.title1{
				line-height: 45upx;
			}
			.color-red{
				font-size: 30upx;
			}
			.color-999{
				font-size: 24upx;
			}
		}
	}
</style>
