<template>
	<view>
		<view class="page-body">
			<view class="page-section">
				<view class="top">
					<searchTemp ></searchTemp>
				</view>
				<view class="product-box">
					<view class="product-item">
						<view class="product-title">
							秀实——东雀嘉熠一号收益权转让计划
						</view>
						<view class="product-detail">
							<view class="item">
								<view class="large-size color item-top">
									200000亿
								</view>
								<view class="item-bottom">
									可预约金额
								</view>
							</view>
							<view class="item">
								<view class="size item-top">
									预约人数
								</view>
								<view class="item-bottom">
									12
								</view>
							</view>
							<view class="item">
								<view class="size item-top">
									预约金额 
								</view>
								<view class="item-bottom">
									50万元
								</view>
							
							</view>
						
						</view>
					</view>
					<view class="product-item">
						<view class="product-title">
							秀实——东雀嘉熠一号收益权转让计划
						</view>
						<view class="product-detail">
							<view class="item">
								<view class="large-size color item-top">
									4亿5000万
								</view>
								<view class="item-bottom">
									可预约金额
								</view>
							</view>
							<view class="item">
								<view class="size item-top">
									预约人数
								</view>
								<view class="item-bottom">
									12
								</view>
							</view>
							<view class="item">
								<view class="size item-top">
									预约金额 
								</view>
								<view class="item-bottom">
									50万元
								</view>
							
							</view>
						
						</view>
					</view>
					<view class="product-item">
						<view class="product-title">
							秀实——东雀嘉熠一号收益权转让计划
						</view>
						<view class="product-detail">
							<view class="item">
								<view class="large-size color item-top">
									4亿5000万
								</view>
								<view class="item-bottom">
									可预约金额
								</view>
							</view>
							<view class="item">
								<view class="size item-top">
									预约人数
								</view>
								<view class="item-bottom">
									12
								</view>
							</view>
							<view class="item">
								<view class="size item-top">
									预约金额 
								</view>
								<view class="item-bottom">
									50万元
								</view>
							
							</view>
						
						</view>
					</view>
					<view class="product-item">
						<view class="product-title">
							秀实——东雀嘉熠一号收益权转让计划
						</view>
						<view class="product-detail">
							<view class="item">
								<view class="large-size color item-top">
									4亿5000万
								</view>
								<view class="item-bottom">
									可预约金额
								</view>
							</view>
							<view class="item">
								<view class="size item-top">
									预约人数
								</view>
								<view class="item-bottom">
									12
								</view>
							</view>
							<view class="item">
								<view class="size item-top">
									预约金额 
								</view>
								<view class="item-bottom">
									50万元
								</view>
							
							</view>
						
						</view>
					</view>
						
				</view>
				
			</view>

		</view>

	</view>
</template>
<script>
	import searchTemp from '../../../../components/search-temp.vue'
	export default {
		components: {
			searchTemp
		},
		data() {
			return {
				id: 1,
				

			}
		},
		onReady: function(res) {

		},
		methods: {
			toProduct() {
				uni.navigateTo({
					url: './productYemian/productYemian',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
			
		}
	}
</script>

<style>
	.top {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		text-align: left;
	}

	.page-section {
		text-align: center;
	}


	.icon-message {
		height: 28upx;
		width: 28upx;
		margin: 0 20upx;

	}

	.product-item {
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		margin-bottom: 20upx;
		text-align: left;
	}

	.product-title {
		line-height: 80upx;
		text-align: left;
		font-size: 15px;
		margin-left: 30upx;
	}

	.product-detail {
		padding: 20upx 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		border-top: 1px solid rgba(238,238,238,1);
		border-bottom: 1px solid rgba(238,238,238,1);
	}
	.product-detail .item-top{
		line-height: 66upx;
	}
	.product-detail .item-bottom{
		line-height: 50upx;
		color: rgba(153,153,153,1);
		font-size: 12px;
	}
	.color {
		color: rgba(196,156,90,1);
		
	}

	.size {
		font-size: 15px;
	}
	.large-size{
		font-size: 24px;
		font-weight:500;
	}
</style>
