<template>
	<view class="box">
		<view class="form-group">
			<view class="row1">
				<view class="title">
					为您推荐以下理财顾问
				</view>
				
				
					
			</view>
			<view class="column">
				<label class="radio">
					<image  :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png' "/>
					网名 三年工作经验 ，擅长固定收益
				</label>
				
				<label class="radio">
					<image  :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png' "/>
					黎明 五年工作经验，擅长私募股权类
				</label>
				
				<label class="radio">
					<image  :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png' "/>
					张明 三年工作经验，擅长固定收益
				</label>
				
				<label class="radio">
					<image  :src="checked?'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png':'http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png' "/>
					自选
				</label>
			</view>
			
			<view class="row">
				<input class="name-inp" value="" placeholder="请输入理财师姓名"/>
			</view>
			<view class="row between">
				<view class="left">
					期望回访时间
				</view>
				<view class="right">
					<timePicker></timePicker>
				</view>
				
				
			
			</view>
			
			<view class="questionBox">
				<view class="question" @click="toWodelicaishi">
					下一步<label class="iconfont label">&#xe764;</label>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import timePicker from '../../../../components/picker/picker'
	
	export default {
		components: {
			
			timePicker
		},
		data() {
			return {
				checked:true
			};
		},
		methods:{
			checkedTab(){
				this.checked=!this.checked
			},
			toWodelicaishi(){
				uni.navigateTo({
					url: './wodelicaishi',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
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
		
		padding: 0 30upx;
	}
	.title{
		font-size: 15px;
	}
	.name-inp{
			padding-left: 20upx;
	}
	.left{
		font-size: 15px;
		width: 300upx;
	}
	.right{
		width: 100%;
	}
	.row1{
		display: flex;
		flex-direction: row;
		align-items: center;
		line-height: 123upx;
	}
	.row .title{
		
		color:rgba(51,51,51,1);
	}
	.radio{	
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight:500;
		line-height: 60upx;
		color: #666;
		
		
		
	}
	.radio image{
		height: 16px;
		width: 16px;
		margin-right: 16upx;
		
	}
	.row{
		height: 98upx;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.column{
		padding-left: 20upx;
	}
	.between{
		justify-content: ;
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
	.label{margin:0 10upx;}
</style>
