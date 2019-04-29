<template>
	<view>
		<view class="login-box" :style="{height:height+'px'}">
			<view class="container">
				<view class="logo">
					<image src="http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/logo.png" mode="widthFix"></image>
				</view>
				<view class="bottom">
					<view class="bottom-top">
						<view class="inp-group">
							<view class="inp-box">
								<image src="http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/shoujihao.png" mode="aspectFit" class="icon"></image>
								<input type="text" value="" placeholder="请输入手机号" class="input" />
							</view>
							<view class="inp-box">
								<image src="http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/yanzhengma.png" mode="aspectFit" class="icon"></image>
								<view class="inp-box-right">
									<input type="text" value="" placeholder="请输入验证码" class="input" />
									<view class="get-number">
										<view>获取验证码</view>
										
									</view>
								</view>
								
							</view>
						
						</view>
						
						<view class="radio-box">
							<label class="radio">
								<image @click="checkedTab" :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png' "/>实名认证
							</label>
							<view class="tishi">
								用户在进行实名认证后可以获得全部权限，若不认证，权限将局部开放
							</view>
						</view>
						<view class="button-box">
							<view class=" btn">注册</view>
						</view>
						
					</view>
					

					<view class="zhuce">投资有风险，决策需谨慎</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: 0,
				checked:false,
				height:''
			}
		},
		onLoad(){
			this.height = uni.getSystemInfoSync().screenHeight;
			console.log(this.height) 
		},
		methods: {
			checkedTab(){
				this.checked=!this.checked
			},
			tab(e) {
				if (e.target.dataset.id == 0) {
					this.flag = 0
				} else {
					this.flag = 1
				}
			},
			toRegister() {
				uni.navigateTo({
					url: '',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}

	}
</script>

<style>
	.login-box {
		width: 100%;
		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/%E8%83%8C%E6%99%AF.png") no-repeat center;
		background-size: 100% 100%;
		text-align: center;

	}

	.container {
		padding: 0 40px ;
		height: 100%;
	}

	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 30%;
		width: 100%;
		
	}
	.bottom{
	
		height: 70%;
	}
	.logo image {
		
		width: 100%;
		height: 32px;
	}

	.login-class {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-size: 14px;
		color: rgba(255, 255, 255, 1);
		font-weight: bold;
		height: 33px;
		margin-bottom: 30px;
	}

	

	.inp-group {
		margin-bottom: 18px;
	}

	.inp-box {
		height: 47px;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/shoujihaobeijing.png") no-repeat center;
		background-size: 100% 100%;
		margin-bottom: 5%;
	}

	.icon {
		width: 15px;
		height: 19px;
		padding: 0 10px;

	}

	.input {
		text-align: left;
		color: rgb(255, 255, 255);
		flex: 3;
		
	}
	.inp-box-right{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.get-number {
		height: 20px;
		flex: 2;
		margin-right: 10px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	.get-number view {
		font-size: 12px;
		line-height: 20px;
		border-radius: 10px;
		border: 1px solid rgba(196, 156, 90, 1);
		color: rgba(196, 156, 90, 1);
		padding: 0 20upx;
		height: 20px;
	}

	.radio-box {
		width: 100%;
		text-align: left;
		color: rgb(255, 255, 255);
	}
	.radio{	
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight:500;
		color:rgba(255,255,255,1);
		line-height: 15px;
	}
	.radio image{
		height: 16px;
		width: 16px;
		margin-right: 5px;
		
	}
	.tishi {
		font-size: 11px;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 15px;
		opacity: 0.3;
		margin-top: 3%;
	}



	.button-box {
		height: 47px;
		width: 100%;
		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/zhucebeijing.png") no-repeat center;
		background-size: 100% 100%;
		margin-bottom: 5%;


	}

	.btn {
		text-align: center;
		line-height: 47px;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		font-size: 17px;
		margin-top: 15px;

	}
	.bottom-top{
		height: 80%;
	}
	.zhuce {
		height: 18%;
		
		line-height: 70px;
		font-size: 12px;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 0.6;
		border-top: 1px solid rgba(255, 255, 255, 0.4);

	}
</style>
