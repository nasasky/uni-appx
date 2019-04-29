<template>
	<view>
		<view class="block-box">
			<view class="block">
				<view class="contentMid">
					<view class="contentBot">
						<view class="mark">
							<view class="avator-left">
								<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/touxiang.png" />
							</view>
							<view class="mark-right">
								<view class="mark-top">
									<view class="mark-top-left">
										<view class="position">理财师</view>
										<view class="name">李明</view>
									</view>
								</view>
								<view class="time">9小时前 from <label class="phone-xinghao">iPhone</label></view>
								<view class="mark-bot twoLines">
									秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄
								</view>
								<view class="mark-images">
									<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
									<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
									<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
									<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
									<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
									<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
									
								</view>
							</view>
						</view>
						<view class="mark">
							<view class="avator-left">
								<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/touxiang.png" />
							</view>
							<view class="mark-right">
								<view class="mark-top">
									<view class="mark-top-left">
										<view class="position">理财师</view>
										<view class="name">李明</view>
									</view>


								</view>
								<view class="time">9小时前</view>
								<view class="mark-bot twoLines">
									秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄
								</view>
							</view>
						</view>

					</view>
					<view class="more-mark"><label class="iconfont">&#xe65e;</label>查看更多评论</view>
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
		margin-top: 10px;
	}

	.contentMid {
		background: rgb(255,255,255);
		padding:0 30upx ;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	
	}
	
	.mark,
	.mark-top-left,
	.mark-right .mark-top {
		display: flex;
		flex-direction: row;
	
	}
	
	.mark {
		
		padding:30upx 0 37upx;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}
	
	.mark-top-left,
	.mark-right .mark-top {
		align-items: center;
		justify-content: space-between;
	}
	
	.mark-top-left {
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 22px;
		font-size: 16px;
	}
	
	.avator-left,
	.avator-left image {
		height: 40px;
		width: 40px;
		border-radius: 50%;
	
	}
	
	.mark-right {
		margin-left: 19upx;
	}
	
	.position {
		margin-right: 10upx;
	}
	
	.mark-bot {
	
		font-size: 14px;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 21px;
		margin-top: 7px;
	}
	
	.mark-right .time {
		font-size: 12px;
	
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}
	.phone-xinghao{
		color: #C49C5A;
	}
	.more-mark {
		text-align: center;
		font-weight: 500;
		color: rgba(196, 156, 90, 1);
		line-height: 41px;
	}
	
	label {
		margin-right: 10upx;
	}
	
	.bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	
	.bottom-tab {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		text-align: center;
		background: rgb(255, 255, 255);
	}
	
	.bottom-item {}
	
	.bottom-icon-image {
		margin-top: 15upx;
		height: 20px;
		width: 20px;
	}
	
	.bottom-text {
		color: rgba(153, 153, 153, 1);
		line-height: 20px;
		font-size: 9px;
	}
	
	.label {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.label .label-item {
		height: 30px;
		background: rgba(245, 245, 245, 1);
		border-radius: 15px;
		line-height: 30px;
		padding: 0 32upx;
		margin: 0 10upx 10upx 0;
		font-size: 12px;
	}
	.mark-images {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top:13px;
	}	
	
	.mark-image {
		height: 80px;
		width: 80px;
		margin:0 10upx 10upx 0;
	}
	
	.mark-liuyan{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 30px;
	}
	
	.liuyan{
		height: 14px;
		width: 19px;
	}
	.mark-liuyan-bot{
		background: rgba(249,249,249,1);
		line-height: 27px;
		font-size: 14px;
	}
</style>
