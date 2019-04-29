<template>
	<view class="xinjiankehu-box">
		
		<view class="box">
			<view class="row">
				<view class="left">
					头像
				</view>
				<view class="right">
					<view class="">
						<image class="touxiang-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.2-%E8%AE%BE%E7%BD%AE/android/drawable-xhdpi/touxiang.png" mode=""></image>
					</view>
					<view class="">
						<label class="iconfont"> &#xe640;</label>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="left">
					昵称
				</view>
				<view class="right">
					<view class="">
						
					</view>
					<view class="">
						<label class="iconfont"> &#xe640;</label>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="left">
					简介
				</view>
				<view class="right">
					<view class="">
						
					</view>
					<view class="">
						<label class="iconfont"> &#xe640;</label>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="left">
					联系方式
				</view>
				<view class="right">
					<view class="">
						
					</view>
					<view class="">
						<label class="iconfont"> &#xe640;</label>
					</view>
				</view>
				
			</view>
			<view class="questionBox">
				<view class="question">
					<label class="iconfont label">&#xe653;</label>退出登录
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
			
		}
	}
</script>

<style>
	page {
		background: rgb(255, 255, 255);
	}

	.xinjiankehu-box {
		padding-top: 10px;
		background: #f5f5f5;
	}
	.box{
		padding: 0 30upx;
		background: rgb(255, 255, 255);
	}
	
	.row {
		height: 49px;
		border-bottom: 1px solid rgba(238,238,238,1);;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.left {
		font-size: 15px;
		margin-right: 20upx;
		
	}

	.questionBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 40upx 0;
		text-align: center;
		margin-top: 50%;

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

	.label {
		margin:0 10upx;
	}
	.right{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
		color: #CCCCCC;
	}
	.touxiang-image{
		height: 20px;
		width: 20px;
	}
</style>
