<template>
	<view class="box">
		<view class="view-box">
			<view class="content-box">
				<view class="title">
					投资，选合格的！
				</view>
				<view class="content">
					为了更好地维护你的权益，我们将进行特定对象投资者身份认证！
				</view>
				<view class="content">
					根据2018年4月27日发布的《关于规范金融机构资产管理业务的指导意见》，您需要进行风险测评，才能浏览相关私募信息（如您之前已完成测评，根据新规需要重新测评）。
				</view>
			</view>
			<view class="buzhou">
				<view class="buzhou-item">
					<view class="image-box">
						<image src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2-%E6%8A%95%E8%B5%84%E8%AE%A4%E8%AF%81%E8%AF%B4%E6%98%8E/android/drawable-xhdpi/shimingrenzheng.png" mode="widthFix"></image>
					</view>
					<view class="text">
						实名认证
					</view>
					<view class="back">
						1
					</view>
				</view>
				<view class="buzhou-item">
					<image src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2-%E6%8A%95%E8%B5%84%E8%AE%A4%E8%AF%81%E8%AF%B4%E6%98%8E/android/drawable-xhdpi/jiantou.png" mode="widthFix"></image>
				</view>
				<view class="buzhou-item">
					<view class="image-box">
						<image src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2-%E6%8A%95%E8%B5%84%E8%AE%A4%E8%AF%81%E8%AF%B4%E6%98%8E/android/drawable-xhdpi/fengxiangceping.png" mode="widthFix"></image>
						
					</view>
					<view class="text">
						实名认证
					</view>
					<view class="back">
						2
					</view>
				</view>
			</view>
			<view class="questionBox" @click="toShimingrenzheng">
				<view class="question">
					好的，去认证
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},methods:{
			toShimingrenzheng(){
				uni.navigateTo({
					url: './shimingrenzheng',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style>
	.box {
		padding: 30upx;

	}

	.content-box {
		padding: 0 50upx;
		display: flex;
		flex-direction: column;

	}

	.title {
		text-align: center;
		line-height: 140upx;
		font-size: 17px;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}

	.content {
		font-size: 14px;

		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 40upx;
		margin-bottom: 40upx;
	}

	.view-box {
		height: 1000upx;
		background: rgb(255, 255, 255);
		box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);
		border-radius: 5px;
	}

	.content {

		width: 100%;
	}
	.buzhou{
		margin-top: 95upx;
		height: 170upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 80upx;
	}
	.buzhou-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-size: 11px;
		
	}
	.buzhou image{
		height: 64upx;
		width: 64upx;
	}
	.back{
		background: url("http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2-%E6%8A%95%E8%B5%84%E8%AE%A4%E8%AF%81%E8%AF%B4%E6%98%8E/android/drawable-xhdpi/tuoyuan.png") no-repeat center;
		background-size: 50upx;
		height: 50upx;
		color: rgb(255,255,255);
		line-height: 50upx;
	}
	.text{
		margin: 12upx 0;
	}
	.questionBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 65upx 0 40upx;
		text-align: center;
		
	
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
</style>
