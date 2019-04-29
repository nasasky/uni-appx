<template>
	<view>
		<view class="topBox">

			<view class="top">
				<view class="go-back iconfont" @click="goback">
					&#xe602;
				</view>
				<view class="middle">
					密码重置
				</view>
				<view class="share iconfont">

				</view>
			</view>
			<view class="section">
				<view class="input-group">
					<view class="inp-box">
						<image src="http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/shoujihao.png" mode="aspectFit" class="icon"></image>
						<input type="text" value="" placeholder="请输入手机号" class="input" />
					</view>
					<view class="inp-box">
						<image src="http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/yanzhengma.png" mode="aspectFit" class="icon"></image>
						<input type="text" value="" placeholder="动态验证码" class="input" />
						<view class="get-number">
							获取验证码
						</view>
					</view>
					<view class="inp-box">
						<image src="http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/mima.png" mode="aspectFit" class="icon"></image>
						<input type="text" value="" placeholder="密码为6-20位数字和字母组合" class="input" />
					</view>
					<view class="inp-box">
						<image src="http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/qirenmima.png" mode="aspectFit" class="icon"></image>
						<input type="text" value="" placeholder="确认密码" class="input" />

					</view>
				</view>
				<view class="button-box">
					<view class=" btn">确认</view>
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
				uni.navigateBack({

				});
			}
		}
	}
</script>

<style>
	.topBox {

		width: 100%;

		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/beijing.png") no-repeat;
		background-size: 100% 370upx;
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
		height: 679upx;

		box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);
		border-radius: 5px;
		margin: 0 30upx;
		background: rgba(255, 255, 255, 1);
	}

	.input-group {
		padding: 36upx 30upx;
	}

	.inp-box {
		height: 94upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid rgba(204, 204, 204, 0.5);
	}

	.icon {
		width: 30upx;
		height: 38upx;
		padding: 0 20upx;

	}

	.input {
		text-align: left;
		
		width: 340upx;
	}

	.get-number {
		height: 40upx;
		border: 1px solid rgba(196, 156, 90, 1);
		font-size: 12px;
		line-height: 40upx;
		border-radius: 10px;
		color: rgba(196, 156, 90, 1);
		padding: 0 20upx;
	}

	.button-box {
		height: 88upx;
		
		background:linear-gradient(-90deg,rgba(196,156,90,1) 0%,rgba(226,196,138,1) 100%);
		border-radius:22px;
		margin:40upx 50upx;
		

	}

	.btn {
		
		text-align: center;
		line-height: 88upx;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		font-size: 17px;
		margin-top: 30upx;

	}
</style>
