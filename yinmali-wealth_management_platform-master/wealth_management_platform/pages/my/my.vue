<template>
	<view>
		<view class="topBox">
			<view class="nav">
				<view class="go-back iconfont" @click="goback">
					&#xe602;
				</view>
				<view class="middle">
					我的
				</view>
				<view class="set-btn">
					设置
				</view>
			</view>
			<view class="lcs-message">
				<view class="touxiang-left">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/touxiang.png"
					 mode=""></image>
				</view>
				<view class="message-right">
					<view class="message-right-top">
						客户 李明
					</view>
					<view class="message-right-bottom">
						14313131313
					</view>
				</view>
			</view>
			<view class="biaoqian">
				<view class="biaoqian-item">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/weirenzhenghege.png"
					 mode=""></image>
					<view class="">
						未认证合格投资者
					</view>
				</view>
				<view class="biaoqian-item">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/shimingrenzheng.png"
					 mode=""></image>
					<view class="">
						实名认证
					</view>
				</view>
				<view class="biaoqian-item">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/licai.png"
					 mode=""></image>
					<view class="">
						理财师
					</view>
				</view>
			</view>
		</view>
		<view class="lists">
			<view class="list-item">
				<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/gerenzhuye.png"
				 mode="aspectFit"></image>
				<view>个人主页</view>
			</view>
			<view class="list-item">
				<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/guanzhudongtai.png"
				 mode="aspectFit"></image>
				<view>关注动态</view>
			</view>
			<view class="list-item">
				<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/wodezichan.png"
				 mode="aspectFit"></image>
				<view>我的资产</view>
			</view>

		</view>
		<view class="block-box">

			<view class="block">
				<view class="block-title-box">
					<view class="block-title">
						<view class="text">
							我的持仓
						</view>
						<view class="uni-icon-more" @tap="toChicang">
							<view class="more">
								更多
							</view>
							<view class="iconfont arrow">&#xe640;</view>
						</view>
					</view>

				</view>
				<view class="chicang">
					<view class="chicang-item">
						<view class="chicang-top">
							200
						</view>
						<view class="chicang-bottom">
							总资产
						</view>
					</view>
					<view class="chicang-item">
						<view class="chicang-top">
							2000
						</view>
						<view class="chicang-bottom">
							总成本
						</view>
					</view>
					<view class="chicang-item">
						<view class="chicang-top">
							1200
						</view>
						<view class="chicang-bottom">
							总收益
						</view>
					</view>
				</view>
				<view class="my-lists">
					<view class="my-list-item">
						<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/wodeshoucang.png" mode="aspectFit"></image>
						<view class="my-list-item-right">
							<view class="">
								我的收藏
							</view>
							<view class="iconfont arrow">&#xe640;</view>
						</view>
					</view>
					<view class="my-list-item">
							<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/wodedingdang.png" mode="aspectFit"></image>
							<view class="my-list-item-right" @click="toWodedingdan">
								<view class="">
									我的订单
								</view>
								<view class="iconfont arrow">&#xe640;</view>
							</view>
						</view>
					<view class="my-list-item">
							<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/zhengzhifuwu.png" mode="aspectFit"></image>
							<view class="my-list-item-right" @click="toZengzhifuwu">
								<view class="">
									增值服务
								</view>
								<view class="iconfont arrow">&#xe640;</view>
							</view>
						</view>
					<view class="my-list-item">
							<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/tuijianyouli.png" mode="aspectFit"></image>
							<view class="my-list-item-right">
								<view class="">
									推荐有礼
								</view>
								<view class="iconfont arrow">&#xe640;</view>
							</view>
						</view>
					
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
			goback() {
				uni.navigateBack({});
			},
			toChicang(){
				uni.navigateTo({
					url: './wodechicang/wodechicang',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toWodedingdan(){
				uni.navigateTo({
					url: './wodedingdan/wodedingdan',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toZengzhifuwu(){
				uni.navigateTo({
					url: './zengzhifuwu/zengzhifuwu',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.topBox {
		width: 100%;
		background: url("http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/beijing.png") no-repeat;
		background-size: 100% 100%;
	}

	.nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 67upx 30upx 30upx 37upx;
		color: rgb(255, 255, 255);
	}

	.middle {
		font-size: 18px;
	}

	.go-back {
		font-size: 17px;
	}

	.lcs-message {
		display: flex;
		flex-direction: row;
		padding-left: 50upx;
	}

	.touxiang-left,
	.touxiang-left image {
		height: 140upx;
		width: 140upx;
	}

	.touxiang-left {
		margin-right: 28upx;
	}

	.message-right {
		color: rgb(255, 255, 255);
	}

	.message-right-top {
		padding: 10upx 0;
		font-size: 22px;

	}

	.message-right-bottom {
		font-size: 15px;
	}

	.biaoqian {
		display: flex;
		flex-direction: row;
		padding: 30upx 0 42upx 50upx;
	}

	.biaoqian image {
		height: 24upx;
		width: 24upx;
		margin-right: 10upx;
	}

	.biaoqian-item {
		display: flex;
		flex-direction: row;
		padding: 0 20upx;
		height: 40upx;
		align-items: center;
		border: 1px solid rgba(255, 255, 255, 0.3);
		font-size: 12px;
		color: rgb(255, 255, 255);
		margin-right: 10upx;
		border-radius: 21px;
	}

	.lists {
		padding: 35upx 0;
		background: #fff;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-bottom: 20upx;
	}

	.list-item {
		flex: 1;
		text-align: center;

	}

	.list-item image {
		height: 80upx;
		width: 80upx;
		border-radius: 50%;
	}

	.list-item text {
		display: block;
		line-height: 46upx;
	}

	.block-box {
		margin-bottom: 20upx;
	}

	.block {
		display: flex;
		flex-direction: column;
		padding: 0 32upx;
		background: #fff;

	}

	.block-title-box {
		padding: 30upx 0 20upx;
	}

	.block-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: white;
		align-items: center;
		border-left: 8upx solid #cb9359;

	}

	.block-title .text {
		margin-left: 18upx;
		font-size: 16px;

	}

	.block-title .more {
		color: #999999
	}

	.uni-icon-more {
		display: flex;
		flex-direction: row;
		align-items: center
	}

	.chicang {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		padding: 30upx 0 40upx;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}

	.chicang-item .chicang-top {
		font-size: 18px;

		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}
	.chicang-item .chicang-bottom{
		color:rgba(187,187,187,1);
		font-size: 12px;
	}
	.my-lists{
		display:flex ;
		flex-direction: column;
	}
	.my-list-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 109upx;
		border-bottom: 1px solid rgba(238,238,238,1);
	}
	.my-list-item image{
		height: 36upx;
		width: 36upx;
		margin-right: 44upx;
	}
	.my-list-item-right{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
</style>
