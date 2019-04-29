<template>
	<view>
		<view class="topBox">

			<view class="top">
				<view class="go-back iconfont" @click="goback">
					&#xe602;
				</view>
				<view class="middle">
					风险测评
				</view>
				<view class="share iconfont">

				</view>
			</view>
			<view class="section">
				<view class="content">
					<view class="image-box">
						<image class="user-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.2-%E9%A3%8E%E9%99%A9%E6%B5%8B%E8%AF%84%E7%BB%93%E6%9E%9C/android/drawable-xhdpi/touxiang.png"
						 mode=""></image>
					</view>
					<view class="sum">
						您的总得分
					</view>
					<view class="score-role">
						<view class="socre">
							20
						</view>
						<view class="leixing">
							保守型投资人
						</view>
						<view class="leixing-bottom">
							您的类型为
						</view>
					</view>
					<view class="chanpinleixing">
						合适您的基金产品类型
					</view>
					<view class="fengxianjibie">
						低风险级别产品
					</view>
				</view>
			</view>


		</view>
		<view class="tableBox">
			<view class="table">
				<view class="row title">
					<view class="column1">
						分值范围
					</view>
					<view class="column">
						客户类型
					</view>
					<view class="column">
						适合的产品类型
					</view>
				</view>
				<view class="row">
					<view class="column1">
						20 </view> <view class="column">
							保守型投资人
					</view>
					<view class="column">
						低风险级别产品
					</view>
				</view>
				<view class="row">
					<view class=" column1">
						20~40
					</view>
					<view class="column">
						稳健和保守型投资人
					</view>
					<view class="column">
						低、中低风险级别产品
					</view>
				</view>
				<view class="row">
					<view class=" column1">
						41~60
					</view>
					<view class="column">
						稳健性投资人
					</view>
					<view class="column">
						低、中低风险级别产品
					</view>
				</view>
				<view class="row">
					<view class=" column1">
						41~60
					</view>
					<view class="column">
						稳健性投资人
					</view>
					<view class="column">
						低、中低、中等风险级别产品
					</view>
				</view>
				<view class="row">
					<view class=" column1">
						80~100
					</view>
					<view class="column">
						稳健性投资人
					</view>
					<view class="column">
						低、中低、中等风险级别产品
					</view>
				</view>
			</view>
		</view>
		<view class="questionBox">
			<view class="question">
				开启财富之旅
			</view>
		</view>
		<view class="chongce" @click="toFengxianceping">
			重新测评
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
				uni.navigateBack({

				});
			},
			toFengxianceping() {
				uni.navigateTo({
					url: './fengxianceping',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	page {
		background: rgb(255, 255, 255);
	}

	.topBox {
		width: 100%;
		background: linear-gradient(0deg, rgba(28, 28, 28, 1), rgba(51, 50, 48, 1));
		height: 744upx;
		position: relative;


	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 67upx 30upx 37upx 37upx;
		color: rgb(255, 255, 255);
	}

	.middle {
		font-size: 18px;
	}

	.go-back {
		font-size: 17px;
	}

	.section {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		height: 540upx;
		width: 100%;
	}

	.content {
		border-radius: 5px;
		margin: 0 30upx;
		height: 100%;
		background: rgb(255, 255, 255);
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;


	}

	.score-role {
		background: url("http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.2-%E9%A3%8E%E9%99%A9%E6%B5%8B%E8%AF%84%E7%BB%93%E6%9E%9C/android/drawable-xhdpi/zongdefen.png") no-repeat center;
		background-size: 318upx;
		height: 318upx;

	}

	.image-box {
		height: 90upx;
		margin-top: -45upx;

	}

	.user-image {
		height: 90upx;
		width: 90upx;

	}

	.sum {
		margin: 12upx 0;
		color: #999999;
	}

	.socre {
		color: rgba(191, 150, 82, 1);
		font-size: 50px;
		line-height: 50px;
		margin: 66upx 0 16upx;
		font-weight: bold;
	}


	.leixing {
		font-size: 15px;

		font-weight: bold;
		color: rgba(191, 150, 82, 1);
	}

	.leixing-bottom {
		font-size: 12px;

		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.chanpinleixing {
		margin: 10upx 0;
		font-size: 12px;
		color: rgba(153, 153, 153, 1);

	}

	.fengxianjibie {
		font-size: 15px;
		color: #333333;
		font-weight: bold;
	}

	.tableBox {
		padding: 30upx;

	}

	.table {
		border-top: 1px solid rgba(229, 229, 229, 1);
		border-left: 1px solid rgba(229, 229, 229, 1);
		border-right: 1px solid rgba(229, 229, 229, 1);
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;

		height: 69upx;
		color: #999999;
		font-size: 10px;
		border-bottom: 1px solid rgba(229, 229, 229, 1);
	}

	.row.title {
		height: 69upx;
		font-size: 14px;
		line-height: 69upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);

	}

	.column1 {
		width: 140upx;
		padding-left: 10upx;
	}

	.column {


		padding-left: 10upx;
		flex: 1;



	}

	.questionBox,
	.chongce {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 0 0 30upx 0;
		text-align: center;

	}

	.chongce {

		font-size: 14px;
		font-weight: 500;
		text-decoration: underline;
		color: rgba(191, 150, 82, 1);
	}

	.question {
		width: 240upx;
		height: 70upx;
		background: linear-gradient(-90deg, rgba(196, 156, 90, 1) 0%, rgba(226, 196, 138, 1) 100%);
		border-radius: 35px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: rgb(255, 255, 255);

	}

	label {
		margin-right: 10upx;
	}
</style>
