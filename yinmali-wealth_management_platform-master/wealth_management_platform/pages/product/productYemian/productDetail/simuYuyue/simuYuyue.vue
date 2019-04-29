<template>
	<view class="simu-box page">
		<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;">
			<view class="uni-timeline-item uni-timeline-first-item">
				<view class="uni-timeline-item-divider"><image class="divider-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/yuyunchenggongjihuo.png"/></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title" @click="toYuyue">
						预约成功
					</view>
					<view class="datetime">
						你准备购买秀实东阙。。。
					</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"><image class="divider-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/shimingrenzhengjihuo.png"/></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title" @click="toShimingrenzheng">实名认证</view>
					<view class="datetime">黎明12224324234323</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title">风险测评 <view class="ques-image-box">
							<image class="ques-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/wenhao.png"
							 mode=""></image>
						</view>
					</view>
					<view class="datetime">稳健性（你的风险评级不合格，请<view class="orange" @click="toFengxianceping">
							重新测评
						</view>）</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title">签风险不匹配告知书</view>
				</view>
			</view>
			<view class="uni-timeline-item ">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title">购买<view class="ques-image-box">
							<image class="ques-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/wenhao.png"
							 mode=""></image>
						</view>
					</view>
					<view class="datetime">您购买的额度为100万<view class="orange">
						修改
					</view></view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title" @click="toRenzheng">合格投资者/专业投资者认证</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title">双录<view class="ques-image-box">
							<image class="ques-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/wenhao.png"
							 mode=""></image>
						</view>
						<view class="datetime orange" @click="toShuanglu">请点击此处进行双录</view>
					</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title" @click="toHetong">签合同<view class="datetime"> （该产品不支持线上双录）</view>
					</view>
					<view class="datetime">税收声名<view class="ques-image-box">
							<image class="ques-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.4.2.2.3-%E7%A7%81%E5%8B%9F%E8%B4%AD%E4%B9%B0%E6%B5%81%E7%A8%8B/android/drawable-xhdpi/wenhao.png"
							 mode=""/></view></view>
					<view class="datetime">风险揭示书</view>
					<view class="datetime">基金合同</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title" @click="toJiaokuan">打款，上传打款凭证</view>
				</view>
			</view>
			<view class="uni-timeline-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title">客服回访</view>
				</view>
			</view>
			<view class="uni-timeline-item uni-timeline-last-item">
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">
					<view class="uni-timeline-item-content-title">流程结束，请在*******查看收益</view>
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
			toYuyue(){
				uni.navigateTo({
					url: './yuyue/yuyue',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toFengxianceping(){
				uni.navigateTo({
					url: './fenxianceping/simufengxianceping',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toRenzheng(){
				uni.navigateTo({
					url: './touzizherenzheng/touzizherenzheng',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toShuanglu(){
				uni.navigateTo({
					url: './shuanglu/shuanglu',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toShimingrenzheng(){
				uni.navigateTo({
					url: './shimingrenzheng/renzheng',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toHetong(){
				uni.navigateTo({
					url: './hetong/hetong',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toJiaokuan(){
				uni.navigateTo({
					url: './jiaokuan/jiaokuan',
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
		background: rgb(255, 255, 255);
	}
	.divider-image{
		height: 50upx;
		width: 50upx;
	}
	.simu-box {
		padding: 50upx 0 50upx 50upx;
	}

	.uni-timeline-item {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		position: relative;
		padding-bottom: 10upx;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		overflow: hidden;
		min-height: 100upx;
	}

	.uni-timeline-item .uni-timeline-item-content {
		padding-left: 40upx;
		color: #000000;
		font-weight: bold;
		font-size: 17px;
	}

	.uni-timeline-item .uni-timeline-item-divider {
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		position: relative;
		width: 50upx;
		height: 50upx;
		top: 0;
		border-radius: 50%;
		background-color: rgba(221, 221, 221, 1);
	}

	.uni-timeline-item-divider::before,
	.uni-timeline-item-divider::after {
		position: absolute;
		left: 25upx;
		width: 0.5px;
		top: 25px;
		height: 100vh;
		content: '';
		background: inherit;
		
	}
	.uni-timeline-last-item .uni-timeline-item-divider::before,
	.uni-timeline-last-item .uni-timeline-item-divider::after {
		
		width: 0px;
	
		
	}
	.uni-timeline-item.uni-timeline-last-item.uni-timeline-item-divider::before {}

	.datetime {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		font-size: 14px;

	}

	.uni-timeline-item-content-title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.ques-image-box,
	.ques-image {

		width: 34upx;
		height: 34upx;
	}
	.datetime .ques-image-box,
		.datetime .ques-image {
	
			width: 28upx;
			height: 28upx;
		}

	.ques-image-box {
		margin: 0 10upx;
	}

	.orange {
		text-decoration: underline;
		color: rgba(255, 128, 27, 1);
	}
</style>
