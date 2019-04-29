<template>
	<view>
		<view class="login-box" :style="{height:height+'px'}">
			<view class="container">
				<view class="logo">
					<image src="http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/logo.png" mode="widthFix"></image>
				</view>
				<view class="bottom">
					
					<view class="bottom-top"><view class="login-class">
						<view :class="{active:flag==0}" @click="tab" data-id="0">
							短信验证登陆
						</view>
						<view :class="{active:flag==1}" @click="tab" data-id="1">
							账号密码登录
						</view>
					</view>
					<view class="inp-group" v-show="flag==0">
						<view class="inp-box">
							<image src="../../static/image/my/shoujihao.png" mode="aspectFit" class="icon"></image>
							<input type="text" value="" placeholder="请输入手机号" class="input" />
						</view>
						<view class="inp-box">
							<image src="../../static/image/my/yanzhengma.png" mode="aspectFit" class="icon"></image>
							<view class="inp-box-right">
								<input type="text" value="" placeholder="请输入手机号" class="input" />
								<view class="get-number">
									<view>获取验证码</view>
									
								</view>
							</view>
							
						</view>

					</view>
					<view class="inp-group" v-if="flag==1">
						<view class="inp-box">
							<image src="../../static/image/my/shoujihao.png" mode="aspectFit" class="icon"></image>
							<input type="text" value="" placeholder="请输入账号" class="input" />
						</view>
						<view class="inp-box">
							<image src="../../static/image/my/yanzhengma.png" mode="aspectFit" class="icon"></image>
							<input type="text" value="" placeholder="请输入密码" class="input" />
							
						</view>

					</view>
					<view class="button-box">
						<view class=" btn" @click="toIndex">登录</view>
					</view>

					<view class="forget" @click="toReset">忘记密码？</view></view>
					<view class="zhuce" @click="toRegister">没有账号，立即注册</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				flag:0,
				height:''
			}
		},
		onLoad(){
			this.height = uni.getSystemInfoSync().screenHeight;
			console.log(this.height ) 
		},
		methods:{
			tab(e){
				if(e.target.dataset.id==0){
					this.flag=0
				}else{
					this.flag=1
				}
			},
			toRegister(){
				uni.navigateTo({
					url: './register',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toIndex(){
				uni.switchTab({
					url:'../index/index'
				})
			},
			toReset(){
				uni.navigateTo({
					url: './reset',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
			
			
		}
		
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.1-%E7%99%BB%E5%BD%95/android/drawable-xhdpi/beijing.png") no-repeat center;
		background-size: 100% 100% ;
		text-align: center;
	}
	.login-box {
		width: 100%;
		height: 100%;
		

	}

	.container {
		padding:0 40px;
		height: 100%;
	}

	.logo {
		width:100%;
		height: 30%;
		display: flex;
		flex-direction: row;
		align-items: center;
		
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

	.active {
		font-size: 15px;
		font-weight: bold;
		color: rgba(196, 156, 90, 1);
		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.1-%E7%99%BB%E5%BD%95/android/drawable-xhdpi/xuangzhong.png") bottom no-repeat;
		background-size: 100% 3px;
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
		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.1-%E7%99%BB%E5%BD%95/android/drawable-xhdpi/shoujihaobeijing.png") no-repeat center;
		background-size: 100% 100%;
		margin-bottom: 5%;
	}

	.icon {
		width: 15px;
		height: 19px;
		padding: 0 10px;

	}
	.inp-box-right{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.input{
		text-align: left;
		color: rgb(255, 255, 255);
		flex:3;
		
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
	.button-box {
		height: 47px;
		width: 100%;
		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.1-%E7%99%BB%E5%BD%95/android/drawable-xhdpi/denglubeijing.png") no-repeat center;
		background-size: 100% 100%;
		margin-bottom: 18px;


	}

	.btn {
		text-align: center;
		line-height: 47px;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		font-size: 17px;

	}

	.forget {
		
		
		font-size: 14px;
		
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		
		opacity: 0.6;
	}
	.bottom-top{
		height: 80%;
	}
	.zhuce{
		height: 18%;
		
		line-height: 70px;
		
		font-size: 12px;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		opacity: 0.6;
		border-top:1px solid rgba(255,255,255,0.4);
		
	}
</style>
