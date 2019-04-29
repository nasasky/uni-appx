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
					总资产（元）
				</view>
				<view class="persent">160620000</view>
				<view class="level">数据更新日期 2018-12-12</view>

			</view>
			<view class="class-box">
				<view class="class-item">
					<view class="class-item-top">60620000</view>
					<view class="class-item-bottom">累计收益</view>
				</view>
				<view class="class-item class-item-2">
					<view class="class-item-top">112160000</view>
					<view class="class-item-bottom">持仓总收益</view>
				</view>

			</view>

		</view>
		<view class="container">
			<view class="canvasView">
				<mpvue-echarts :echarts="echarts" :onInit="pieInit" canvasId="pie" ref="pieChart" />
			</view>

		</view>
		<view class="btn-box">
			<view class="btn-item" :class="{active:clickItem==0}" @click="toShouyimingxi">
				收益明细
			</view>
			<view class="btn-item" :class="{active:clickItem==1}" @click="toJiaoyijilu">
				交易记录
			</view>
		</view>
		<view class="content">
			
			<view>
				<view class="block">
					<view class="block-content">
						<view class="intro">
							<view class="pro-title">
								青山赢收33号
								<view class="is-daoqi weidaoqi" >
									未到期
								</view>
							</view>
							<view class="detail">
								<view class="item">
									<view class="color">8%-9.5%</view>
									<view class="color-gray">业绩比较基准</view>
								</view>
								<view class="item">
									<view class="size">
										产品期限
									</view>
									<view class="color-gray">
										12个月
									</view>
								</view>
								<view class="item">
									<view class="size">
										产品期限
									</view>
									<view class="color-gray">
										12个月
									</view>
								</view>
								<view class="item">
									<view class="size">
										认购起点
									</view>
									<view class="color-gray">
										50万元
									</view>
					
								</view>
							</view>
						</view>
					</view>
					<view class="block-content">
						<view class="intro">
							<view class="pro-title">
								青山赢收33号
								<view class="is-daoqi yidaoqi" >
									已到期
								</view>
							</view>
							<view class="detail">
								<view class="item">
									<view class="color">8%/年</view>
									<view class="color-gray">业绩比较基准</view>
								</view>
								<view class="item">
									<view class="size">
										产品期限
									</view>
									<view class="color-gray">
										12个月
									</view>
								</view>
								<view class="item">
									<view class="size">
										产品期限
									</view>
									<view class="color-gray">
										12个月
									</view>
								</view>
					
								<view class="item">
									<view class="size">
										认购起点
									</view>
									<view class="color-gray">
										50万元
									</view>
					
								</view>
							</view>
						</view>
					</view>
					
				</view>
				

			</view>

		</view>
	</view>
</template>

<script>
	import * as echarts from '../../../components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '../../../components/mpvue-echarts/src/echarts.vue';
	import uniSegmentedControl from '../../../components/uni-segmented-control.vue';
	const cityList = [{
		value: 55,
		name: '北京'
	}, {
		value: 38,
		name: '上海'
	}, {
		value: 20,
		name: '广州'
	}];

	let pieOption = {
		animation: false,
		backgroundColor: '#F8F8F8',
		color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
		series: [{
			label: {
				normal: {
					fontSize: 14
				}
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: [0, '60%'],
			data: [],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 2, 2, 0.3)'
				}
			}
		}]
	};



	export default {
		components: {
			mpvueEcharts,
			
		},
		data() {
			return {
				echarts: echarts,
				updateStatus: false,
				clickItem:''
				

			};
		},
		onLoad() {
			pieOption.series[0].data = cityList.slice(0);
			console.log(pieOption.series[0].data)
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
			toYuyueliucheng() {
				uni.navigateTo({
					url: './simuYuyue/simuYuyue',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			pieInit(canvas, width, height) {
				let pieChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(pieChart)
				pieChart.setOption(pieOption)
				return pieChart
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			toShouyimingxi(){
				this.clickItem=0
				uni.navigateTo({
					url: './shouyimingxi/shouyimingxi',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toJiaoyijilu(){
				this.clickItem=1
				uni.navigateTo({
					url: './jiaoyijilu/jiaoyijilu',
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
		min-height: 100%;

	}

	.topBox {

		width: 100%;
		height: 450upx;
		background: url("http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.3-%E4%BA%A7%E5%93%81%E8%AF%A6%E6%83%85/android/drawable-xhdpi/peijing.png") center no-repeat;
		background-size: 100% 450upx;
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
		margin: 50upx 0 25upx;
	}

	.persent {
		height: 63upx;
		font-size: 32px;
		margin-bottom: 39upx;

	}

	.level {
		font-size: 12px;
	}

	.class-box {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		text-align: center;
		height: 120upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 5px;
		box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);
		margin: 38upx 20upx 0;
		align-items: center;
	}

	.class-item {
		flex: 1;
	}

	.class-item-2 {
		border-right: 1px solid rgba(242, 241, 240, 1);
		border-left: 1px solid rgba(242, 241, 240, 1);
	}

	.class-item-top {
		color: rgba(51, 51, 51, 1);
		font-size: 15px;
		line-height: 40upx;
	}

	.class-item-bottom {
		color: rgba(187, 187, 187, 1);
		font-size: 12px;
		line-height: 30upx;
	}

	.echarts-box {
		height: 420upx;
		width: 100%;
	}

	.container {
		padding-bottom: 30upx;
		box-sizing: border-box;
		height: 390upx;
	}

	.container,
	.canvasView {
		flex: 1;
		flex-direction: column;
	}

	.navigate {
		color: #007AFF;
	}

	.canvas-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.block-content {
		padding: 30upx 30upx 0;
	}

	.intro {
		display: flex;
		flex-direction: column;
		border: 1px solid #eeeeee;
		box-shadow: 0 0 10px #f6f6f6;
		background: #FFFFFF;

	}

	.pro-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		line-height: 80upx;
		padding: 0 20upx;
		font-size: 15px;
	}

	.detail {
		text-align: center;
		padding: 20upx 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border-top: 1upx solid #EEEEEE;
		border-bottom: 1upx solid #EEEEEE;
	}

	.detail .item {

		line-height: 50upx;

	}

	.color {
		color: rgb(200, 166, 91);
		font-size: 24px;

	}

	.color-gray {
		color: #999999;
	}

	.size {
		font-size: 16px;
	}

	.is-daoqi {
		border: 1px solid rgba(196, 156, 90, 1);
		border-radius: 11px;
		height: 44upx;
		line-height: 44upx;
		font-size: 12px;
		padding: 0 10upx;
	}
	.weidaoqi{
		color:rgba(196,156,90,1);
	}
	.yidaoqi{
		color:rgba(221,221,221,1) ;
		border:1px solid rgba(221,221,221,1);
	}
	.block{
		padding-bottom: 20upx;
	}
	.btn-box{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 320upx;
		border-radius: 10upx;
		box-sizing: border-box;
		margin: 0 auto;
		overflow: hidden;
		border: 1px solid rgba(196,156,90,1);
		
	}
	.btn-item{
		flex: 1;
		text-align: center;
		line-height: 54upx;
		box-sizing: border-box;
		color: rgba(196,156,90,1);
	}
	.btn-item:first-child {
		border-right: 1px solid rgba(196,156,90,1);
	}
	.active{
		color: rgb(255,255,255);
		background: rgba(196,156,90,1);
	}
</style>
