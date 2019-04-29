<template>
	<view>
		<view class="topBox">
			
				<view class="top">
					<view class="go-back iconfont" @click="goback">
						&#xe602;
					</view>
					<view class="middle">
						发布问题
					</view>
					<view class="share iconfont">
					
					</view>
				</view>
				<view class="section">
					<textarea class="textare" value="" placeholder="123" maxlength="200"/>
				</view>
			
			
		</view>
		
		<view class="questionBox">
			<view class="question">
				<label class="iconfont">&#xe66a;</label>提交
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
			goback(){
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

	.section{
		padding: 0 30upx;
	}
	.textare{
		background: rgb(255,255,255);
		width: 630upx;
		padding: 30upx;
		border-radius:10px;
		font-weight:500;
		box-shadow:0px 10upx 10upx 0px rgba(0, 0, 0, 0.05);
	}
	.questionBox{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width:100%;
		padding: 40upx 0;
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
		color: rgb(255,255,255);
		
	}
	label{
		margin-right:10upx ;
	}
	
</style>
