<template>
	<view class="xinjiankehu-box">
		
		<view class="box">
			<view class="row">
				<view class="left">
					姓名
				</view>
				<input type="text" value="" placeholder="黎鸣先生" />

			</view>
			<view class="row">
				<view class="left">
					性别
				</view>
				<view class="right">
					<view class="">
						
					</view>
					<view class="">
						请选择 <label class="iconfont"> &#xe640;</label>
					</view>
				</view>
			</view>
			<view class="row">
				<view class="left">
					手机号
				</view>
				<input type="text" value="" placeholder="2010-101" />
			</view>
			<view class="row">
				<view class="left">
					生日
				</view>
				<view class="right">
					<view class="">
						
					</view>
					<view class="">
						请选择 <label class="iconfont"> &#xe640;</label>
					</view>
				</view>
				
			</view>
			<view class="row">
				<view class="left">
					所在地区
				</view>
				<input type="text" value="" placeholder="请填写地址信息" />
			</view>
			<view class="questionBox">
				<view class="question">
					<label class="iconfont label">&#xe652;</label>保存
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
			
		}
	}
</script>

<style>
	page {
		background: rgb(255, 255, 255);
	}

	.xinjiankehu-box {
		padding-top: 10px;
		background: #f5f5f5;
	}
	.box{
		padding: 0 30upx;
		background: rgb(255, 255, 255);
	}
	
	.row {
		height: 49px;
		border-bottom: 1px solid rgba(238,238,238,1);;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.row input{
		flex: 3;
	}
	.left {
		font-size: 15px;
		margin-right: 20upx;
		flex: 1;
	}

	.questionBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 40upx 0;
		text-align: center;
		margin-top: 50%;

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

	.label {
		margin:0 10upx;
	}
	.right{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex: 3;
		color: #CCCCCC;
	}
</style>
