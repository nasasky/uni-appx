<template>
	<view class="renzheng-box">
		<view class="title">
			请确认您是否同时符合下列专业投资者条件
		</view>
		<view class="ceshi-box">
			<view class="ceshi-item">
				1、金融资产不低于500万元或近三年本人年均收入不低于50万元的个人

			</view>
			<view class="ceshi-item">
				2、具有2年以上证券、基金、期货、黄金、外汇等投资经历，或者具有2年以上金融产品设计、投资、风险管理及相关工作经历，或者属于本条第(一) 项规定的专业投资者的高级管理人员、获得职业资格认证的从事金融相关业务的注册会计师和律师。
			</view>
			<view class="ceshi-item">
				（金融资产包括银行存款、股票、债券、基金份额、资产管理计划、银行理财产品、信托计划、保险产品、期货权益等。）
			</view>

		</view>
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
		<view class="paste-box">
			<textarea class="paste-content" ref="con" id="con" v-model="content" disabled>
				
			</textarea>
			<view class="paste" @click="paste">
				复制并粘贴
			</view>
		</view>
		
		<view class="blank">
			{{pasteContent}}
		</view>
		<view class="row">
			<view class="left">
				证明类型
			</view>


		</view>
		<view class="row">
			<view class="left">
				证明金额
			</view>
			<input type="text" value="" placeholder="请输入金额" />
		</view>
		<view class="">
			<view class="left" style="padding: 40upx 0 0;">
				证明金额
			</view>
			<addImage></addImage>

		</view>
		<view class="btn-box">
			<view class="btn">
				我已阅读，确认无误并同意签字
			</view>

		</view>
	</view>
</template>

<script>
	import addImage from '../../../../../API/image/image.vue';
	export default {
		components: {
			addImage
		},
		data() {
			return {
				checked: true,
				pasteContent:'',
				content: '本人/机构自愿申请被划分为专业投资者，已按要求提供财产状况、交易情况、从业经历等相关证明材料，并承诺所提供材料真实、准确、完整。'
			};
		},
		methods: {
			paste() {
				this.pasteContent = this.content
			}
		}

	}
</script>

<style>
	page {
		background: rgb(255, 255, 255);
	}

	.renzheng-box {
		padding: 30upx;
	}

	.title {
		font-size: 17px;
		text-align: center;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		margin-bottom: 30upx;

	}

	.ceshi-box {

		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 34upx;
	}

	.row1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 38upx 0 45upx;
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
	.paste-box{position: relative;}
	.paste-content {
		font-size:13px;
		width: 100%;
		height: 100upx;
		
	}

	.paste {
		width: 140upx;
		height: 22upx;
		border: 1px solid rgba(196, 156, 90, 1);
		border-radius: 11px;
		text-align: center;
		padding: 10upx;
		line-height: 22upx;
		color: rgba(196, 156, 90, 1);
		position: absolute;
		right: 0;
		bottom: -20upx;

	}

	.blank {
		height: 160upx;
		
		margin-top: 50upx;
		border: 1px solid rgba(238, 238, 238, 1);
		border-radius: 5px;
	}

	.row {
		height: 98upx;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.left {
		font-size: 15px;
		margin-right: 20px;
	}
	.btn-box{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.btn {
		padding:0 30upx;
		height: 70upx;
		background: linear-gradient(-90deg, rgba(196, 156, 90, 1) 0%, rgba(226, 196, 138, 1) 100%);
		border-radius: 35upx;
		color: rgb(255,255,255);
		text-align: center;
		line-height: 70upx;
		font-size: 14px;
	}
</style>
