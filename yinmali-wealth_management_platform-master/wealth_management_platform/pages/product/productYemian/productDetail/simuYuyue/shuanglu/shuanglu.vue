<template>
	<view class="shuanglu-box">
		<view class="shuanglu">
			<view class="title">
				双录-客户
			</view>
			<view class="row">
				<view class="left">
					客户姓名
				</view>
				<input type="text" value="" placeholder="黎鸣先生" />

			</view>
			<view class="row">
				<view class="left">
					双录时间
				</view>
				<input type="text" value="" placeholder="2010-101" />
			</view>
			<view class="">
				<view class="left" style="padding: 40upx 0 0;">
					双录说明
				</view>
				<textarea class="shuoming" placeholder="双录说明双录说明双录说明双录说明双录说明双录说明双录说明双录说明双录说明">
				</textarea>
				<addImage></addImage>

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
	import addImage from '../../../../../API/image/image.vue';
	export default {
		components: {
			addImage
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
	
	.shuanglu-box {
		background: #f5f5f5;
		padding-top: 20upx;
		
	}
	.shuanglu{
		background: rgb(255,255,255);
		padding: 0 30upx ;
	}
	.title{
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
		margin-right: 20px;
	}
	.questionBox{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width:100%;
		padding: 40upx 0;
		text-align: center;
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		
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
		color: rgb(255,255,255);
		
	}
	label{
		margin-right:10upx ;
	}
	.shuoming{
		width: 650upx;
		padding: 18upx;
		color:rgba(153,153,153,1);
		font-size: 14px;
		height: 100upx;
		border:1px solid rgba(238,238,238,1);
		border-radius:5px;
		margin-top: 20upx;
	}
</style>
