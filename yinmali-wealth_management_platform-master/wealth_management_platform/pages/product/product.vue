<template>
	<view>
		<view class="page-body">
			<view class="page-section">
				<view class="top">
					<searchTemp class="search"></searchTemp>
				</view>
				<view class="tiaojian">
					<view :class="id==item.id?'active':''" v-for="item in xuanze" :key="item.id" @click="fresh(item.id)">
						{{item.item}}
					</view>

				</view>
				<view class="product-box">
					<view class="product-item" @click="toProduct">
						<view class="product-title">
							秀实——东雀嘉熠一号收益权转让计划
							<view class="btn zaishouzhong">在售中</view>
						</view>
						<view class="product-detail">
							<view class="item-left">
								<view class="item">
									<view class="large-size color item-top">
										8%-9.5%
									</view>
									<view class="item-bottom">
										业绩比较基准
									</view>
								</view>
								
							</view>
							
							<view class="item-right">
								<view class="item">
										<view class="size item-top">
											产品期限
										</view>
										<view class="item-bottom">
											12个月
										</view>
									</view>
									<view class="item">
										<view class="size item-top">
											认购起点 
										</view>
										<view class="item-bottom">
											50万元
										</view>
									</view>
									<view class="item">
										<view class="size item-top">
											剩余金额 
										</view>
										<view class="item-bottom">
											50万元
										</view>
									
									</view>
								
							</view>
						</view>
					</view>
					<view class="product-item" @click="toProduct">
						<view class="product-title">
							秀实——东雀嘉熠一号收益权转让计划
							<view class="btn yixiaxian">已下线</view>
						</view>
						<view class="product-detail">
							<view class="item-left">
								<view class="item">
									<view class="large-size color item-top">
										8%-9.5%
									</view>
									<view class="item-bottom">
										业绩比较基准
									</view>
								</view>
								
							</view>
							
							<view class="item-right">
								<view class="item">
										<view class="size item-top">
											产品期限
										</view>
										<view class="item-bottom">
											12个月
										</view>
									</view>
									<view class="item">
										<view class="size item-top">
											认购起点 
										</view>
										<view class="item-bottom">
											50万元
										</view>
									</view>
									<view class="item">
										<view class="size item-top">
											剩余金额 
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

	</view>
</template>
<script>
	import searchTemp from '../../components/search-temp.vue'
	export default {
		components: {
			searchTemp
		},
		data() {
			return {
				id: 1,
				xuanze: [{
					item: "全部",
					id: 1
				}, {
					item: "业绩基准",
					id: 2
				}, {
					item: "投资期限",
					id: 3
				}, {
					item: "起投金额",
					id: 4
				}]

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
			},
			fresh(id) {
				this.id = id
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
	}

	.page-section {
		text-align: center;
	}


	.icon-message {
		height: 28upx;
		width: 28upx;
		margin: 0 20upx;

	}
	.tiaojian {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		height: 70upx;
		align-items: center;
		text-align: center;
		justify-content: space-around;
	}

	.tiaojian view {
		line-height: 70upx;
		color: rgba(153, 153, 153, 1);

	}

	.tiaojian .active {
		border-bottom: 3px solid #c49c5a;
		color: rgba(196, 156, 90, 1);
	}

	.product-item {
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		margin-top: 20upx;
		text-align: left;
	}

	.product-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
		height: 40px;
		text-align: left;
		font-size: 15px;
		margin:0 30upx;
	}
	.btn{
		background: #C49C5A;
		color:rgb(255,255,255);
		padding: 10upx 15upx;
		border-radius:20px ;
		font-size: 12px;
	}
	.yixiaxian{
		background:#CCCCCC;
	}
	.product-detail {
		padding: 20upx 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		
		border-top: 1px solid rgba(238,238,238,1);
		border-bottom: 1px solid rgba(238,238,238,1);
	}
	.item-left,.item-right{
		flex: 1;
		text-align: center;
	}
	.item-left .item{
		border-right: 1px solid #EEEEEE;
	}
	.item-right .item{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.item-right .item .item-bottom{
		margin-left: 10upx;
	}
	.product-detail .item-bottom{
		
		color: rgba(153,153,153,1);
		font-size: 12px;
		
	}
	.color {
		color: rgba(196,156,90,1);
		
	}

	.size {
		font-size: 16px;
	}
	.large-size{
		font-size: 24px;
	}
</style>
