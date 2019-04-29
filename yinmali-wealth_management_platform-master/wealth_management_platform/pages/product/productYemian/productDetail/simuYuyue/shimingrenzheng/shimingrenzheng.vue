<template>
	<view class="shiming-box">
		<view class="shiming">
			为保护账户安全，请进行实名认证
		</view>
		<view class="box">
			<view class="row">
				<view class="left">
					姓名
				</view>
				<input type="text" value="" placeholder="黎鸣先生" />

			</view>
			<view class="row">
				<view class="left">
					证件类型
				</view>
				<input type="text" value="" placeholder="2010-101" />
			</view>
			<view class="row">
				<view class="left">
					证件号码
				</view>
				<input type="text" value="" placeholder="2010-101" />
			</view>
			<view class="radio-box">
				<label class="radio">
					<image @click="checkedTab" :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png' "/>我声明为中国税收居民
				</label>
				
			</view>
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

	.shiming-box {}
	.box{
		padding: 0 30upx;
	}
	.shiming {
		background: #f5f5f5;
		line-height: 70upx;
		height: 70upx;
		text-indent: 20upx;
		color: rgba(153, 153, 153, 1);
		font-size: 12px;
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
	.radio-box {
		width: 100%;
		text-align: left;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100upx;
		
	}
	.radio{	
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight:500;
		color:rgba(153,153,153,1);
		
	}
	.radio image{
		height: 16px;
		width: 16px;
		margin-right: 10upx;
		
	}
</style>
