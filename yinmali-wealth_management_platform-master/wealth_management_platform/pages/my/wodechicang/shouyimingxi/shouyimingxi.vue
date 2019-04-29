<template>
	<view>
		<view class="topBox">
			<view class="top">
				<view class="go-back iconfont" @click="goback">
					&#xe602;
				</view>
				<view class="middle">
					我的持仓

				</view>
				<view class="share iconfont">

				</view>
			</view>
			<view class="second-box">
				<view class="second-title">
					历史累计收益
				</view>
				<view class="persent">160620000</view>
				<view class="level">数据更新日期 2018-12-12</view>

			</view>
		</view>
		<view class="shouyi-box">
			<view class="shouyi-item">
				<view class="shouyi-top">
					<view class="product-name">青山盈收33号</view>
					<view class="shouyijine">+78.03</view>
				</view>
				<view class="shouyi-bottom">到期收益</view>
			</view>
			<view class="shouyi-item">
				<view class="shouyi-top">
					<view class="product-name">青山盈收33号</view>
					<view class="shouyijine">+78.03</view>
				</view>
				<view class="shouyi-bottom">到期收益</view>
			</view>
			<view class="shouyi-item">
				<view class="shouyi-top">
					<view class="product-name">青山盈收33号</view>
					<view class="shouyijine">+78.03</view>
				</view>
				<view class="shouyi-bottom">到期收益</view>
			</view>
			<view class="shouyi-item">
				<view class="shouyi-top">
					<view class="product-name">青山盈收33号</view>
					<view class="shouyijine">+78.03</view>
				</view>
				<view class="shouyi-bottom">到期收益</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				

			};
		},
		onLoad() {
			
		},
		methods: {
			goback() {
				uni.navigateBack()
			}
			
		}
	}
</script>

<style>
	page {
		

	}
	.topBox {

		width: 100%;
		height: 200px;
		background: url("http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.1.2-%E6%94%B6%E7%9B%8A%E6%98%8E%E7%BB%86/android/drawable-xhdpi/beijing.png") center no-repeat;
		background-size: 100% 200px;
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 33px 30upx 0 18px;
		color: rgb(255, 255, 255);
	}

	.middle {
		font-size: 18px;
	}

	.go-back {
		font-size: 17px;
	}

	.share {
		font-size: 20px;
	}

	.second-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		color: rgb(255, 255, 255);
		text-align: center;
	}

	.second-title {
		font-size: 12px;
		margin: 30px 0 13px;
	}

	.persent {
		height: 38px;
		line-height: 38px;
		font-size: 32px;
		margin-bottom: 13px;

	}

	.level {
		font-size: 12px;
	}

	.shouyi-box{
		margin-top:10px;
		background:rgb(255,255,255);
		padding: 0 30upx;
	}
	.shouyi-item{
		display:flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: 1px solid rgba(238,238,238,1);
		height: 65px;
	}
	.shouyi-top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.product-name{
		font-size: 16px;
	}
	.shouyijine{
		font-size: 18px;
	}
	.shouyi-bottom{
		line-height: 24px;
		color:rgba(153,153,153,1);
		font-size: 12px;
	}
</style>
