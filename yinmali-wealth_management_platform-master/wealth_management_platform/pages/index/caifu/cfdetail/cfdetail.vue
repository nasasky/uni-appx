<template>
	<view>
		<view class="topBox">
			<view class="top">
				<view class="go-back iconfont" @click="goback">
					&#xe602;
				</view>
				<view class="middle">
					资产配置
				</view>
				<view class="share iconfont">
					&#xe698;
				</view>
			</view>
			<view class="videoBox">
				<video src="" controls class="video" poster="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545037607&di=2f29f11ea32db8271262cd40536174c7&src=http://imgsrc.baidu.com/imgad/pic/item/32fa828ba61ea8d3d8d6c33f9c0a304e251f5810.jpg"></video>
			</view>
		</view>
		<view class="contentBox">
			<view class="contentTop">
				<view class="title">
					如何选择固定收益类的理财产品？
				</view>
				<view class="bot">
					<view class="left">
						<view class="from">
							微课堂
						</view>
						<view class="time">
							2018-28-28
						</view>
					</view>
					<view class="right">
						<view class="iconfont">
							&#xe63e;
						</view>
						<view class="">
							2345
						</view>
					</view>

				</view>
			</view>
			<view class="contentMid">
				<view class="videoDetail uni-font17">视频详情</view>
				<view class="detail threeLines">视频详情 使皮下昂区视频详情 使皮下昂区视频详情 使皮下昂区视频详情 使皮下昂区视频详情 使皮下昂区</view>
			</view>
			<view class="contentBot">
				<view class="videoDetail uni-font17">热门评论</view>
				<view class="mark">
					<view class="avator-left">
						<image src="../../../../static/image/invest/u762.png" />
					</view>
					<view class="mark-right">
						<view class="mark-top">
							<view class="mark-top-left">
								<view class="position">理财师</view>
								<view class="name">李明</view>
							</view>
							<view class="time">9小时前</view>
						</view>
						<view class="mark-bot twoLines">
							秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄
						</view>
					</view>
				</view>
				<view class="mark">
					<view class="avator-left">
						<image src="../../../../static/image/invest/u762.png" />
					</view>
					<view class="mark-right">
						<view class="mark-top">
							<view class="mark-top-left">
								<view class="position">理财师</view>
								<view class="name">李明</view>
							</view>
							<view class="time">9小时前</view>
						</view>
						<view class="mark-bot twoLines">
							秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄
						</view>
					</view>
				</view>
				<view class="mark">
					<view class="avator-left">
						<image src="../../../../static/image/invest/u762.png" />
					</view>
					<view class="mark-right">
						<view class="mark-top">
							<view class="mark-top-left">
								<view class="position">理财师</view>
								<view class="name">李明</view>
							</view>
							<view class="time">9小时前</view>
						</view>
						<view class="mark-bot twoLines">
							秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄
						</view>
					</view>
				</view>
				
			</view>
			<view class="more-mark"><label class="iconfont">&#xe65e;</label>查看更多评论</view>
		</view>
		<view class="bottom">
			<writemarkTemp></writemarkTemp>
		</view>
	</view>
</template>

<script>
	import writemarkTemp from '../../../../components/writemark-temp.vue'
	export default {
		components: {
			writemarkTemp
		},
		data() {
			return {

			};
		},
		methods:{
			goback(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page {
		background: white;
	}

	.topBox {

		width: 100%;
		height: 370upx;
		background: url("http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.3-%E5%AF%86%E7%A0%81%E9%87%8D%E7%BD%AE/android/drawable-xhdpi/beijing.png") center no-repeat;
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

	.share {
		font-size: 20px;
	}

	.videoBox {
		padding: 0 30upx;

	}

	.videoBox .video {

		width: 100%;
		/*height: 350upx;*/
		border-radius: 10upx;
	}

	.contentBox {

		padding: 0 30upx 110upx;
		margin-top: 230upx;
	}

	.contentTop {
		padding: 30upx 0;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}

	.title {

		font-size: 15px;
	}

	.bot {
		display: flex;
		flex-direction: row;
		font-size: 11px;
		line-height: 48upx;
		justify-content: space-between;
		color: rgba(153, 153, 153, 1);
		font-weight: 500;
	}

	.left,
	.right {
		display: flex;
		flex-direction: row;
		align-items: center;

	}

	.left .from {
		margin-right: 10upx;
	}

	.right {
		color: rgba(196, 156, 90, 1);
		font-size: 12px;

	}

	.uni-font17 {
		font-size: 17px;

	}

	.contentMid {

		padding: 0 0 56upx 0;
		border-bottom: 1px solid rgba(238, 238, 238, 1);

	}

	.videoDetail {
		border-left: 4px solid rgba(203, 147, 89, 1);
		padding-left: 20upx;
		margin: 49upx 0 28upx 0;
		color: rgba(51, 51, 51, 1);
		font-weight: bold;
	}

	.detail {
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 34upx;
	}

	.mark,
	.mark-top-left,
	.mark-right .mark-top {
		display: flex;
		flex-direction: row;

	}

	.mark {
		margin-top: 29upx;
		padding-bottom: 37upx;
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
		line-height: 44upx;
		font-size: 16px;
	}

	.avator-left,
	.avator-left image {
		height: 80upx;
		width: 80upx;
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
		line-height: 42upx;
		margin-top: 14upx;
	}

	.mark-right .time {
		font-size: 12px;

		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.more-mark {
		text-align: center;
		font-weight: 500;
		color: rgba(196, 156, 90, 1);
		line-height: 82upx;
	}
	label{
		margin-right:10upx ;
	}
	.bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
