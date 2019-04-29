<template>
	<view>
		<view class="topBox">
			<view class="top">
				<view class="go-back iconfont" @click="goback">
					&#xe602;
				</view>
				<view class="middle">
					秀实—东雀嘉熠一号收益好转

				</view>
				<view class="share iconfont">
					&#xe634;
				</view>
			</view>
			<view class="second-title">
				契约型私募基金
			</view>
			<view class="videoBox">
				<video src="" controls class="video" poster="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/banner.png"></video>
			</view>
		</view>
		<view class="contentBox">
			<view class="product-item">
				<view class="product-title">
					<view class="title uni-font17">
						秀实——东雀嘉熠一号收益权转让计划
					</view>

				</view>
				<view class="product-detail">
					<view class="item">
						<view class="large-size color item-top">
							8%-9.5%
						</view>
						<view class="item-bottom">
							业绩比较基准
						</view>
					</view>
					<view class="item">
						<view class="size item-top">
							产品期限
						</view>
						<view class="item-bottom">
							12个月
						</view>
					</view>
					<view class="item">
						<view class="size item-top">
							认购起点
						</view>
						<view class="item-bottom">
							50万元
						</view>

					</view>

				</view>
				<view class="button-group">
					<view class="">
						产品备案查询
					</view>
					<view class="" @click="toProductDetail">
						产品详情
					</view>
				</view>
			</view>


			<view class="contentMid">
				<view class="videoDetail uni-font17">
					<view class="">
						相关评论
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
				<view class="label">
					<view class="label-item">国企大机构背景</view>
					<view class="label-item">股东实力雄厚</view>
					<view class="label-item">国企大机构背景</view>
					<view class="label-item">股东实力雄厚</view>
				</view>
			</view>
			<view class="contentBot">
				<view class="mark">
					<view class="avator-left">
						<image src="../../../static/image/invest/u762.png" />
					</view>
					<view class="mark-right">
						<view class="mark-top">
							<view class="mark-top-left">
								<view class="position">理财师</view>
								<view class="name">李明</view>
							</view>
							<view class="star">
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>

							</view>
						</view>
						<view class="time">9小时前</view>
						<view class="mark-bot twoLines">
							秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄
						</view>
						<view class="mark-images">
							<image class="mark-image" src="../../../static/image/indexImg/shangcheng/fenlei/dianshi.png" />
							<image class="mark-image" src="../../../static/image/indexImg/shangcheng/fenlei/dianshi.png" />
							<image class="mark-image" src="../../../static/image/indexImg/shangcheng/fenlei/dianshi.png" />
							<image class="mark-image" src="../../../static/image/indexImg/shangcheng/fenlei/dianshi.png" />


						</view>
					</view>
				</view>
				<view class="mark">
					<view class="avator-left">
						<image src="../../../static/image/invest/u762.png" />
					</view>
					<view class="mark-right">
						<view class="mark-top">
							<view class="mark-top-left">
								<view class="position">理财师</view>
								<view class="name">李明</view>
							</view>
							<view class="star">
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>
								<view class="star-item">
									<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
								</view>

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
		<view class="bottom">
			<view class="bottom-tab">
				<view class="bottom-item" @click="toWodelicaishi">
					<view class="bottom-icon">
						<image class="bottom-icon-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/wodeyuyunweixuanzhon.png" />
					</view>
					<view class="bottom-text">我的预约</view>
				</view>
				<view class="bottom-item">
					<view class="bottom-icon">
						<image class="bottom-icon-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/shoucangweixuanzhong.png" />

					</view>
					<view class="bottom-text">收藏</view>
				</view>
				<view class="bottom-item" @click="toPinglun">
					<view class="bottom-icon">
						<image class="bottom-icon-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xiepinglunweixuanzhong.png" />

					</view>
					<view class="bottom-text">写评论</view>
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
		},
		methods: {
			goback() {
				uni.navigateBack()
			},
			toProductDetail() {
				uni.navigateTo({
					url: './productDetail/productDetail',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toWodelicaishi() {
				uni.navigateTo({
					url: './yuyue/xuanzekehu',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toPinglun() {
				uni.navigateTo({
					url: './pinglun/pinglun',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
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
		background: url("http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/biejing.png") center no-repeat;
		background-size: 100% 370upx;
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 67upx 30upx 0 37upx;
		color: rgb(255, 255, 255);
	}

	.middle {
		font-size: 18px;
	}

	.second-title {
		font-size: 12px;
		text-align: center;
		color: rgb(255, 255, 255);
		margin-bottom: 14upx;
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
		height: 350upx;
		/*height: 350upx;*/
		border-radius: 5px;
	}

	.product-item {
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		margin-top: 20upx;
		text-align: left;
	}

	.product-title {

		text-align: left;


		padding: 30upx 0;

	}

	.product-title .title {
		border-left: 4px solid rgba(203, 147, 89, 1);
		padding-left: 17upx;

	}

	.product-detail {
		padding: 20upx 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		border-top: 1px solid rgba(238, 238, 238, 1);
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}

	.product-detail .item-top {
		line-height: 66upx;
	}

	.product-detail .item-bottom {
		line-height: 50upx;
		color: rgba(153, 153, 153, 1);
		font-size: 12px;
	}

	.color {
		color: rgba(196, 156, 90, 1);

	}

	.size {
		font-size: 16px;
	}

	.large-size {
		font-size: 24px;
	}

	.button-group {

		height: 90upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.button-group view {
		margin-left: 22upx;
		line-height: 50upx;
		background: linear-gradient(-90deg, rgba(196, 156, 90, 1) 0%, rgba(226, 196, 138, 1) 100%);
		color: #fff;
		padding: 0 32upx;
		border-radius: 20px;

	}

	.contentBox {

		padding: 0 30upx 110upx;
		margin-top: 150upx;
	}

	.contentTop {
		padding: 30upx 0;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
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
		color: rgba(51, 51, 51, 1);
		;
		font-size: 12px;
		font-weight: 500;

	}

	.uni-font17 {
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		font-size: 17px;

	}

	.contentMid {
		padding: 0 0 30upx 0;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}

	.videoDetail {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-left: 4px solid rgba(203, 147, 89, 1);
		padding-left: 17upx;
		margin: 31upx 0 27upx 0;

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
		height: 40upx;
		width: 40upx;
	}

	.bottom-text {
		color: rgba(153, 153, 153, 1);
		line-height: 40upx;
		font-size: 9px;
	}

	.label {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.label .label-item {
		height: 60upx;
		background: rgba(245, 245, 245, 1);
		border-radius: 15px;
		line-height: 60upx;
		padding: 0 32upx;
		margin: 0 10upx 10upx 0;
		font-size: 12px;
	}

	.star {
		display: flex;
		flex-direction: row;
	}

	.star-image-select {
		width: 30upx;
		height: 28upx;
		margin-right: 10upx;
	}

	.mark-images {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.mark-image {
		height: 160upx;
		width: 160upx;
		margin-right: 10upx;
	}
</style>
