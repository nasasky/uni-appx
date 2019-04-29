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
			<view class="second-box">
				<view class="second-title">
					契约型私募基金
				</view>
				<view class="persent">8%~9.5%</view>
				<view class="level">业绩比较基准</view>

			</view>
			<view class="class-box">
				<view class="class-item">
					<view class="class-item-top">产品期限</view>
					<view class="class-item-bottom">12个月</view>
				</view>
				<view class="class-item class-item-2">
					<view class="class-item-top">产品期限</view>
					<view class="class-item-bottom">12个月</view>
				</view>
				<view class="class-item">
					<view class="class-item-top">产品期限</view>
					<view class="class-item-bottom">12个月</view>
				</view>
			</view>
		</view>
		<view class="contentBox">
			<view class="content-item">
				<view class="content-left">管理人</view>
				<view class="content-right">鼎新资产管理有限公司</view>
			</view>
			<view class="content-item">
				<view class="content-left">托管人</view>
				<view class="content-right">上海银行股份有限公司</view>
			</view>
			<view class="content-item">
				<view class="content-left">外包服务商</view>
				<view class="content-right">财通基金管理有限公司</view>
			</view>
			<view class="content-item">
				<view class="content-left">分红方式</view>
				<view class="content-right">按季付息，到期分配本金</view>
			</view>
			<view class="content-item">
				<view class="content-left">产品募集信息</view>
				<view class="content-right">
					<view class="right-item">
						账户名：财富同基金管理有限公司运营服务账户
					</view>
					<view class="right-item">
						账号：132439483144890183
					</view>
					<view class="right-item">
						开户行：中国工商银行上海老西门支行
					</view>
				</view>
			</view>
			<view class="content-item">
				<view class="content-left">产品投向</view>
				<view class="content-right">
					<view class="right-item">
						本基金主要投资与基金项目的有限合伙份额，或在基金业协会登记的
						私募管理人设立的有限合伙企业的有限合伙份额，在资金限制期间，可投资银行存款，银行理财产品
						货币基金，剩余期限先在一年以内的国债
					</view>
					
				</view>
			</view>
			<view class="content-item">
				<view class="content-left">产品投向</view>
				<view class="content-right">
					<view class="right-item">
						本基金主要投资与基金项目的有限合伙份额，或在基金业协会登记的
						私募管理人设立的有限合伙企业的有限合伙份额，在资金限制期间，可投资银行存款，银行理财产品
						货币基金，剩余期限先在一年以内的国债
					</view>
					
				</view>
			</view>
			<view class="content-item">
				<view class="content-left">产品投向</view>
				<view class="content-right">
					<view class="right-item">
						本基金主要投资与基金项目的有限合伙份额，或在基金业协会登记的
						私募管理人设立的有限合伙企业的有限合伙份额，在资金限制期间，可投资银行存款，银行理财产品
						货币基金，剩余期限先在一年以内的国债
					</view>
					
				</view>
			</view>
		</view>
		<view class="file-box">
			<view class="file-content">
				<view class="icon">
					<image class="icon-image" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.3-%E4%BA%A7%E5%93%81%E8%AF%A6%E6%83%85/android/drawable-xhdpi/fujian.png" mode=""></image>
				</view>
				<view class="file">
					附件
				</view>
			</view>
			
		</view>
		<view  class="btn" @click="toYuyueliucheng">预约</view>
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
			toYuyueliucheng(){
				uni.navigateTo({
					url: './simuYuyue/simuYuyue',
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
		box-shadow:0px 5px 5px 0px rgba(0, 0, 0, 0.05);
		margin: 38upx 20upx 0;
		align-items: center;
	}
	.class-item{
		flex: 1;
	}
	.class-item-2{
		border-right: 1px solid rgba(242,241,240,1);
		border-left: 1px solid rgba(242,241,240,1);
	}
	.class-item-top{
		color:rgba(51, 51, 51, 1);
		font-size: 15px;
		line-height: 40upx;
	}
	.class-item-bottom{
		color:rgba(187,187,187,1);
		font-size: 12px;
		line-height:30upx;
	}
	.contentBox{
		
		height: 500px;
	
		margin-top: 60upx;
		padding: 32upx 40upx;
	}
	.content-item{
		display: flex;
		flex-direction: row;
		margin: 30upx 0;
		
	}
	.content-left{
		width: 150upx;
		color:rgba(153,153,153,1);
		font-size: 12px;
	}
	.content-right{
		flex: 1;
		color:rgba(68,68,68,1);
	
	}
	.file-box{
		padding: 20upx 0;
		background: #f5f5f5;
	}
	.file-content{
		background: rgb(255,255,255);
		display: flex;
		flex-direction:row ;
		align-items: center;
		
		justify-content: center;
		height: 90upx;
		font-size: 15px;
		
	}
	.icon ,.icon-image{
		width: 36upx;
		height: 32upx;
		margin-right: 10upx;
	}
	.btn{
		height:90upx;
		line-height: 90upx;
		text-align: center;
		background: rgba(196,156,90,1);
		color: white;
		font-size: 17px;
	}
	.btn::after,.btn::before{
		
	}
</style>
