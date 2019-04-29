<template>
	<view class="shiming-box">
		<view class="shiming">
			
		</view>
		<view class="title">
			秀实-东雀嘉熠1号收益权转让计划
		</view>
		<view class="box">
			<view class="row">
				<view class="left">
					客户姓名
				</view>
				<input type="text" value="" placeholder="请输入您的真实姓名" />

			</view>
			<view class="row">
				<view class="left">
					预约金额
				</view>
				<input type="text" value="" placeholder="" />
				万元
			</view>
			
			
		</view>
		<view class="questionBox">
			<view class="question">
				<label class="iconfont">&#xe652;</label>保存
			</view>
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
				checked:true
			};
		},methods:{
			checkedTab(){
				this.checked=!this.checked
			}
		}
	}
</script>

<style>
	page {
		background: rgb(255, 255, 255);
	}

	.title{
		text-align: center;
		line-height: 100upx;
		font-size: 17px;
		color:rgba(51,51,51,1);
	}
	.box{
		padding: 0 30upx;
	}
	.shiming {
		background: #f5f5f5;
		height: 20upx;
		
	}

	.row {
		height: 98upx;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.row input{
		flex: 3;
	}
	.left {
		font-size: 15px;
		margin-right: 20px;
		flex: 1;
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
		margin: 0 20upx;
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
