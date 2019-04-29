<template>
	<view class="hetong-box">
		<view class="hetong">
			<view class="title">
				合同申请
			</view>
			<view class="row">
				<view class="left">
					产品名称
				</view>
				<input type="text" value="" placeholder="秀实-东雀嘉熠1号收益权装让计划" />

			</view>
			<view class="row">
				<view class="left">
					收益级别
				</view>
				<input type="text" value="" placeholder="请输入收益级别" />
			</view>
			<view class="row">
				<view class="left">
					合同编号
				</view>
				<input type="text" value="" placeholder="请输入合同编号" />


			</view>
			<view class="row">
				<view class="left">
					合同金额
				</view>
				<input type="text" value="" placeholder="请填写支行" />


			</view>
			<view class="row">
				<view class="left">
					签署日期
				</view>
				<view class="right">
					<timePicker></timePicker>
				</view>
				
				

			</view>
			<view class="row">
				<view class="left">
					起息日期
				</view>
				<input type="text" value="" placeholder="系统自动生成" />


			</view>
			<view class="row">
				<view class="left">
					开户账户
				</view>
				<input type="text" value="" placeholder="请填写账号" />


			</view>
			<view class="row">
				<view class="left">
					利益支付开户行
				</view>
				<input type="text" value="" placeholder="请填写开户行" />


			</view>
			<view class="row">
				<view class="left">
					开户姓名
				</view>
				<input type="text" value="" placeholder="请填写开户行" />


			</view>
			<view class="">
				<view class="left" style="padding: 40upx 0 0;">
					备注
				</view>
				<textarea class="shuoming" placeholder="填写备注">
				</textarea>


			</view>
			
			<view class="questionBox">
				<view class="question">
					<label class="iconfont">&#xe66a;</label>提交
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import timePicker from '../../../../../../components/picker/picker.vue'
	import addImage from '../../../../../API/image/image.vue';
	export default {
		components: {
			addImage,
			timePicker
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	
	page {
		background: rgb(255, 255, 255);
	}

	.hetong-box {
		background: #f5f5f5;
		padding-top: 20upx;

	}

	.hetong {
		background: rgb(255, 255, 255);
		padding: 0 30upx;
	}

	.title {
		text-align: center;
		line-height: 100upx;
		font-size: 17px;
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
		padding-right: 20px;
		flex: 1;
	}
	.row input{
		flex: 3;
	}
	.questionBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 40upx 0;
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

	.shuoming {
		width: 650upx;
		padding:20upx 18upx;
		color: rgba(153, 153, 153, 1);
		font-size: 14px;
		height: 100upx;
		border:1px solid rgba(238,238,238,1);
		border-radius:5px;
		margin-top: 20upx;
	}
	.right{
		min-width: 520upx;
	}
</style>
