<template>
	<view class="jiaokuan-box">
		<view class="jiaokuan">
			<view class="title">
				缴款申请
			</view>
			<view class="row">
				<view class="left">
					客户姓名
				</view>
				<input type="text" value="" placeholder="先生" />

			</view>
			<view class="row">
				<view class="left">
					银行卡号
				</view>
				<input type="text" value="" placeholder="请输入银行卡号" />
			</view>
			<view class="row">
				<view class="left">
					开户行
				</view>
				<input type="text" value="" placeholder="请选择银行" />


			</view>
			<view class="row">
				<view class="left">

				</view>
				<input type="text" value="" placeholder="请填写支行" />


			</view>
			<view class="row">
				<view class="left">
					缴费金额
				</view>
				<input type="text" value="" placeholder="请填写金额" />
				<view class="">
					万元
				</view>

			</view>
			<view class="row">
				<view class="left">
					缴款日期
				</view>
				<view class="right">
					<timePicker></timePicker>
				</view>



			</view>


			<view class="">
				<view class="left" style="padding: 40upx 0 0;">
					缴款凭证
				</view>
				<view class="photo-box">
					<view class="photo-item">上传身份证正面</view>
					<view class="photo-item">上传身份证反面</view>
					<view class="photo-item">上传银行卡正面</view>
					<view class="photo-item">上传银行卡反面</view>
					<view class="photo-item">上传银行卡交易凭条</view>
				</view>



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

	.jiaokuan-box {
		background: #f5f5f5;
		padding-top: 20upx;

	}

	.jiaokuan {
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

	.row input {
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
		padding: 20upx 18upx;
		color: rgba(153, 153, 153, 1);
		font-size: 14px;
		height: 100upx;
		border: 1px solid rgba(238, 238, 238, 1);
		border-radius: 5px;
		margin-top: 20upx;
	}

	.right {
		min-width: 520upx;
	}

	.photo-box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;


	}

	.photo-item {
		width: 340upx;
		height: 200upx;
		border: 0.5px solid rgba(207, 207, 207, 1);
		border-radius: 5px;
		margin-top: 30upx;
		background: url("http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.9-%E7%BC%B4%E6%AC%BE/android/drawable-xhdpi/shangchuangpingzheng.png") no-repeat center;
		background-size: 100% 100%;
		display: flex;
		text-align: center;
		justify-content: center;
		font-size: 12px;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 280upx;
	}
</style>
