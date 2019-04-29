<template>
	<view>
		<view class="block-box">
			<view class="block">
				<view class="block-title-box">
					<view class="block-title">
						<view class="text">
							我的关注
						</view>
						<view class="uni-icon-more" >
							<view class="more">
								更多
							</view>
							<label class="iconfont arrow">&#xe640;</label>
							</view>
					</view>
		
				</view>
				<view class="fans">
					<view class="fans-item">
						<view class="touxiang-image" ><image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3.4-%E5%85%B3%E6%B3%A8/android/drawable-xhdpi/touxiang.png"></image></view>
						<view class="fans-item-right">
							<view class="nicheng">白上小姐姐</view>
							<view class="guanzhu-btn">取消关注</view>
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
				
			};
		}
	}
</script>

<style>
.block-box {
		margin: 10px 0;
	}

	.block {
		display: flex;
		flex-direction: column;
		padding: 0 32upx;
		background: #fff;

	}

	.block-title-box {
		padding: 43upx 0 20upx;
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

	.block-content {
		width: 100%;

		padding-bottom: 30upx;
	}

	.arrow {
		
		margin-left: 10upx;
	}

	.uni-icon-more {
		display: flex;
		flex-direction: row;
		align-items: center
	}
	.fans-item{
		height: 54px;
		border-bottom: 1px solid rgba(244,245,249,1);
	}
	.fans-item,.fans-item-right{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
	}
	.fans-item-right{
		flex: 1;
		font-size: 16px;
	}
	.guanzhu-btn{
		border:1px solid rgba(221,221,221,1);
		border-radius:22upx;
		font-size: 12px;
		line-height: 20px;
		padding: 0 20upx;
		color:rgba(153,153,153,1);
	}
	.touxiang-image,.touxiang-image image{
		height:38px ;
		width:38px ;
	}
	.touxiang-image{
		margin-right: 30upx;
	}
</style>