<template>
	<view class="box">
		<view class="form-group">
			<view class="row1">
				<view class="">
					告诉我们的理财师您的尊称是
				</view>
				
				<label class="radio">
					<image  :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png' "/>
					先生
				</label>
				<label class="radio">
					<image  :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png' "/>
					女士
				</label>
					
			</view>
			<view class="row">
				<input class="name-inp" value="" placeholder="请输入您的真实姓名"/>
			</view>
			<view class="row">
				<view class="title">
					年龄
				</view>
				<select>
					<option>25岁以下</option>
					<option>111</option>
					<option>111</option>
				</select>
			</view>
			<view class="row">
				<view class="title">
					常住省
				</view>
				<select>
					<option>111</option>
					<option>111</option>
					<option>111</option>
					<option>111</option>
				</select>
			</view>
			
			<view class="row">
				<view class="title">
					常住城市
				</view>
				<select>
					<option>北京</option>
					<option>111</option>
					<option>111</option>
				</select>
			</view>
			<view class="row">
				<view class="title">
					期望回访时间
				</view>
				<select>
					<option>北京</option>
					<option>111</option>
					<option>111</option>
				</select>
			</view>
			<view class="questionBox">
				<view class="question">
					<label class="iconfont label">&#xe66a;</label>提交
				</view>
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
		},
		methods:{
			checkedTab(){
				this.checked=!this.checked
			}
		}
	}
</script>

<style>
	page{
		background: rgb(255,255,255);
	}
	.box{
		background:  #f5f5f5;
		padding-top:20upx ;
	}
	.form-group{
		background: rgb(255,255,255);
		font-size: 15px;
		padding: 40upx 30upx;
	}
	.row1{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.radio{	
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight:500;
		margin-left: 40upx;
		
		
	}
	.radio image{
		height: 16px;
		width: 16px;
		margin-right: 10upx;
		
	}
	.row{
		height: 98upx;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.row .name-inp{
		
		width:100%;
		
	}
	.row .title{
		flex: 1;
		color:rgba(51,51,51,1);
	}
	.row select{
		border: none;
		flex: 2;
		color:rgba(153,153,153,1);
		font-size: 14px;
		height: 100%;
	}
	.row select option{
		color:rgba(153,153,153,1);
		font-size: 14px;
	}
	.questionBox{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width:100%;
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
		color: rgb(255,255,255);
		
	}
	.label{margin-right: 10upx;}
</style>
