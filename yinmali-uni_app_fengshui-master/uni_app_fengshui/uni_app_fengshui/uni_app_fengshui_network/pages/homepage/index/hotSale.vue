<template>
	<view class='hot-sale-box'>
		<view class="hot-sale">
			<text>{{title}}</text>
		</view>
		<view class="hot-sale-list">
			<view v-for="(item,index) in formatList" :key="index" class="hot-sale-list-item" @click="gotoDetail(item)">
				<image :src="item.mainImage||imgDefault" mode=""></image>
				<view class="hot-sale-list-item-name imitate_ellipsis">
					{{item.name || "暂无"}}
				</view>
				<view class="hot-sale-list-item-foot">
					<text class="color-red">￥{{item.price||0}}</text>
					<text class="fr color-999">销量 {{item.salesCount || 0}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:"热销商品"
			},
			listData:{
				type:Array,
				default:function(){
					return [{},{}]
				}
			}
		},
		computed:{
			formatList(){
				return this.listData
			},
		},
		data() {
			return {
				imgDefault:require('@/static/imgs/icon_16.png')
			}
		},
		methods:{
			gotoDetail(item){
				this.navigatorTo('/pages/shops/detail?id='+item.id)
			}
		}
	}
</script>
<style lang='scss'>
	.hot-sale-box {
		.hot-sale{
			margin-top: 20upx;
			text{
				color: #FF3300;
				font-size: 30upx;
				border-left: 2px solid #FF3300;
				padding-left: 10upx;
				margin-left: 30upx;
				font-weight: 700;
			}
		}
		.hot-sale-list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding: 0 20upx;
			
			&-item{
				width: calc(50% - 10upx);
				margin: 20upx 0;
				background-color: #fff;
				border-radius: 8upx;
				box-shadow:0px 0px 20upx 0px rgba(0, 0, 0, 0.13);
				box-sizing: border-box;
				padding: 20upx;
				
				image{
					width: 305upx;
					height: 305upx
				}
				
				&-name{
					font-size: 24upx;
					line-height: 40upx;
					
				}
				
				&-foot{
					margin-top: 10upx;
					font-size: 24upx;
					line-height: 40upx;
					
					.color-red{
						font-size: 30upx
					}
				}
			}
		}
	}
</style>
