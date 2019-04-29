<template>
	<view class='issue-baseinfo'>
		<view class="title">
			请输入身份信息
		</view>
		<myForm :formModel="formModel" :info="formInfo"></myForm>
		<view class="title">
			请输入银行卡信息
		</view>
		<myForm :formModel="formModel1" :info="formInfo"></myForm>
		
		<view class="agree-box" @click="hasRead=!hasRead">
			<image :src="hasRead?checkedImg:checkImg" mode=""></image>
			<text>同意<text class="color-blue" @click.stop="showAgreement">《用户协议》</text>及服务条款</text>
		</view>
		
		<one-button label="确认绑定" @click="submit" ></one-button>
	</view>
</template>

<script>
	import myForm from '@/components/myUnits/common/myForm.vue'
	import oneButton from '@/components/onButton/oneButton.vue'
	import {phone,idCard} from '@/static/js/regExp.js'
	export default {
		components:{myForm,oneButton},
		data() {
			return {
				checkedImg:require('@/static/imgs/checked_active.png'),//勾选图片
				checkImg:require('@/static/imgs/choose.png'),
				
				formModel:[
					{prop:"realName",label:"真实姓名",type:"input",type1:"text"},
					{prop:"idno",label:"身份证号",type:"input",type1:"number"}
				],
				formModel1:[
					{prop:"bankNo",label:"银行卡号",type:"input",type1:"number"},
					// {prop:"",label:"银行名称",type:"input",type1:"text"},
					{prop:"phone",label:"手机号码",type:"input",type1:"number"}
				],
				
				hasRead:false,
				formInfo:{},
			}
		},
		methods: {
			doSure(){
				console.log("绑定");
			},
			
			getUserInfo(){
				let info = uni.getStorageSync(Window.userInfo)
				this.formInfo=info;
				console.log(info)
			},
			
			/**
			 * @name 查看协议
			 */
			showAgreement(){
				this.showModel({
					content:"我是协议内容",
					showCancel:false,
					hideToast:true
				})
			},
			
			submit(){
				let params = {
					realName:this.formInfo.realName,
					idno:this.formInfo.idno,
					bankNo:this.formInfo.bankNo,
					phone:this.formInfo.phone,
					id:this.formInfo.id,
					headpic:this.formInfo.headpic
				}
				if(!params.realName){
					this.showToast({msg:"姓名为空",status:2})
					return
				}else if(!idCard.test(params.idno)){
					this.showToast({msg:"身份证格式错误",status:2})
					return
				}else if(!params.bankNo){
					this.showToast({msg:"银行卡号为空",status:2})
					return
				}else if(!phone.test(params.phone)){
					this.showToast({msg:"手机号为空",status:2})
					return
				}else if(!this.hasRead){
					this.showToast({msg:"请同意协议",status:2})
					return
				}
				this.apiPost("/iuser/bindBank.do",params).then(res=>{
					if(res.status==0){
						this.resetUserInfo({...params,status:1})
						this.goback()
					}
				})
			}
			
		},
		onShow() {
			this.getUserInfo()
		}
	}
</script>
<style lang='scss'>
	.issue-baseinfo {
		.title{
			background-color: #F2F4FF;
			height: 94upx;
			line-height: 94upx;
			box-sizing: border-box;
			padding: 0 20upx;
			font-size: 24upx;
			color: #212121;
			opacity: .8
		}
		.agree-box{
			border-top: 1upx solid #f5f5f5;
			padding: 40upx 30upx;
			font-size: 24upx;
			
			image{
				width: 25upx;
				height: 25upx;
				margin-right: 27upx;
				vertical-align: middle;
			}
			text{
				vertical-align: middle;
				line-height: 32upx
			}
		}
		.submit-btn{
			width: 90%;
			border-radius: 0;
			font-size: 30upx;
			height: 100upx;
			line-height: 100upx;
		}
	}
</style>
