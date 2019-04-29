<template>
	<view class="smcp-box">
		<view class="content1">风险提示：私募基金投资需要承担各类风险，本金可能遭受损失。同时，私募基金投资还要考虑市场风险、信用风险、流动性风险、操作风险等各类投资风险。您在基金认购过程中应当注意核对自己的风险识别和风险承受能力，选择与自己风险识别能力相匹配的私募基金。
		
		</view>
		<view class="sign-box">
			<view class="">请签字承诺您是为自己购买私募基金产品</view>
			<view class="sign">黎明</view>
		</view>
		<view class="xunwen">
			<view class="title">
				请确认您是否同时符合下列合格投资者条件
			</view>
			<view class="ques-item">1、金融资产不低于300万元；</view>
			<view class="ques-item"> 2、近三年本人年均收入不低于50万元的个人 （金融资产包括银行存款、股票、债券、基金份额、资产</view>
			<view class="row1">
				<label class="radio">
					<image :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png' " />
					是
				</label>
				<label class="radio">
					<image :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png' " />
					否
				</label>
			
			</view>
		</view>
		<view class="id-message">
			<view class="row">
				<view class="name-key">
					姓名
				</view>
				<view class="name-value">
					lily
				</view>
			</view>
			<view class="row">
				<view class="phone-key">
					联系方式
				</view>
				<view class="phone-value">
					13190359692
				</view>
			</view>
			<view class="row">
				<view class="id-key">
					证件类型
				</view>
				<view class="id-value">
					身份证
				</view>
			</view>
			<view class="row">
				<view class="number-key">
					证件号码
				</view>
				<view class="number-value">
					210411111111111111
				</view>
			</view>
		</view>
		<view class="shengming">
			声明：本人已如实填写《投资者风险问卷调查（个人版）》，并了解了自己的风险承受类型和合适购买的产品类型                 
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
				checked: true,
			};
		}
	}
</script>

<style>
	page {
		background: rgb(255, 255, 255);

	}

	.smcp-box {
		padding: 40upx;
		
		
	}
	.content1{
		font-size: 12px;
		font-weight: 500;
		color: rgba(196, 156, 90, 1);
	}
	.sign-box{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding:22upx 0 41upx;
		height: 90upx;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		
	}
	.sign{
		font-size: 26px;
		}
	.title{
		
		line-height: 106upx;
		font-size:17px;
		font-weight:bold;
		
	}	
	.ques-item{
		font-weight:500;
		color:rgba(153,153,153,1);
	}
	.row1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 28upx 0 38upx;
	}
	
	.radio {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: 500;
		margin-right: 70upx;

	}
	
	.radio image {
		height: 16px;
		width: 16px;
		margin-right: 10upx;
	
	}
	.xunwen{
		border-bottom: 1px solid rgba(0,0,0,0.1);
	}
	.row{
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 66upx;
		
	}
	.name-key,.phone-key,.id-key,.number-key{
		font-weight:500;
		color:rgba(153,153,153,1);
		flex: 1;
	}
	.name-value,.phone-value,.id-value,.number-value{
		flex: 3;
	}
	.id-message{
		padding: 10upx 0 20upx;
		border-bottom: 1px solid rgba(0,0,0,0.1);
	}
	.shengming{
		padding-top: 34upx;
	}
	.questionBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 40upx 0 0;
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
		color: rgb(255, 255, 255);
	
	}
	
	label {
		margin-right: 10upx;
	}
	
</style>
