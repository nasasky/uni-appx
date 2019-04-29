<template>
	<view class='shop-info' @click="gotoDetail">
		<image :src="shopInfo.logo || defaultImg" mode=""></image>
		
		<view class="content">
			<text>{{shopInfo.name}}</text>
			<view class="box">
				<view v-for="(item,index) in icons" v-if="shopInfo[item.prop]>0" :key="index">
					<image :src="item.img || checkedImg" mode=""></image>
					<text>{{item.label}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['shopInfo'],
		data() {
			var icons=[
				{prop:"companyCert",img:require('@/static/imgs/icon_1.png'),label:"企业认证"},
				{prop:"cash",img:require('@/static/imgs/icon_2.png'),label:"保证金"},
				{prop:"process",img:require('@/static/imgs/icon_3.png'),label:"厂家"}
			]
			return {
				defaultImg:require('@/static/imgs/pic.png'),//商家图片
				
				checkedImg:require('@/static/imgs/checked_active.png'),
				
				icons,
			}
		},
		methods: {
			gotoDetail(){
				this.navigatorTo("/pages/shops/shops?shopId="+this.shopInfo.id)
			}
		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.shop-info {
		margin: 20upx 0;
		padding: 30upx 24upx;
		background-color: #fff;
		display: flex;
		
		>image{
			width: 100upx;
			height: 100upx;
			margin-right: 30upx;
		}
		.content{
			flex: 1;
			display: inherit;
			flex-direction: column;
			justify-content: center;
			font-size: 28upx;
			
			.box{
				display: inherit;
				font-size: 24upx;
				color: #999;
				margin: 10upx 0;
				
				image{
					width: 24upx;
					height: 24upx;
					vertical-align: middle;
					margin-right: 5upx
				}
				text{
					vertical-align: middle
				}
				
				>view{
					margin-right: 40upx
				}
			}
		}
	}
</style>
