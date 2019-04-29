<template>
	<view class='shops'>
		<!-- 店铺总览 -->
		<view class="shops-info">
			<image :src="shopInfo.logo||defaultImg" mode=""></image>
			<view class="shops-info-content">
				<text class="title">{{shopInfo.name}}</text>
				<text class="limit">经营范围：{{shopInfo.businessScope}}</text>
			</view>
			<view class="shops-info-count">
				<text>
					<text>{{shopInfo.productCount || 0}}</text>
					<text class="ft10">商品</text>
				</text>
				<text>
					<text>{{shopInfo.orderCount || 0}}</text>
					<text class="ft10">销量</text>
				</text>
			</view>
		</view>
		<view class="shops-icons">
			<view class="imgs-box" v-for="(img,imgIndex) in icons " v-if="shopInfo[img.prop]>0" :key="imgIndex">
				<image :src="img.img" mode=""></image>
				<text>{{img.label}}</text>
			</view>
		</view>
		
		<view class="list-model-box">
			<list-model :hidenTabs="true" :screen="true" :isShop="true" useComponent="shop-unit" :isPulldown="isPulldown" :shopId="shopInfo.id"></list-model>
		</view>
	</view>
</template>

<script>
	import listModel from '../purchase/list.vue'
	import pullDown from '@/static/js/pulldown.js'
	export default {
		components:{listModel},
		data() {
			var icons=[
				{prop:"companyCert",show:true,img:require('@/static/imgs/icon_1.png'),label:"企业认证"},
				{prop:"cash",show:true,img:require('@/static/imgs/icon_2.png'),label:"保证金"},
				{prop:"process",show:true,img:require('@/static/imgs/icon_3.png'),label:"厂家"}
			]
			return {
				defaultImg:require('@/static/imgs/pic.png'),
				icons,
				shopInfo:{},
				
			}
		},
		methods: {
			/**
			 * @name 获取商铺数据
			 */
			getShopInfo(){
				this.shopInfo = uni.getStorageSync(Window.myShopInfo)
			}
		},
		created() {
			this.getShopInfo()
		},
		mixins:[pullDown]
	}
</script>
<style lang='scss'>
	.shops {
		border-top: 1upx solid #f5f5f5;
		background-color: #f5f5f5;
		height: 100%;
		box-sizing: border-box;
		overflow: hidden;
		
		&-info{
			border-bottom: 1upx solid #f5f5f5;
			display: flex;
			padding: 20upx;
			background-color: #fff;
			
			>image{
				width: 64upx;
				height: 64upx;
				border-radius: 50%;
				margin-right: 16upx
			}
			
			&-content{
				font-size: 28upx;
				display: inherit;
				flex-direction: column;
				justify-content: space-around;
				
				.limit{
					font-size: 24upx
				}
			}
			&-count{
				margin-left: auto;
				font-size: 24upx;
				display: inherit;
				
				>text{
					text-align: center;
					padding: 0 20upx;
					
					text{
						display: block;
					}
					
					.ft10{
						font-size: 20upx;
						color: #999;
					}
				}
				>text:nth-of-type(1){
					border-right: 1upx solid #ddd;
				}
			}
		}
		&-icons{
			background-color: #fff;
			padding: 0 20upx;
			display: flex;
			font-size: 24upx;
			height: 90upx;
			line-height: 90upx;
			margin-bottom: 20upx;
			.imgs-box{
				margin-right: 40upx;
				
				image{
					width: 30upx;
					height: 30upx;
					margin-right: 10upx;
					transform: translateY(6upx);
				}
			}
		}
		.list-model-box{
			height: calc(100% - 136upx)
		}
	}
</style>
