<template>
	<view class="base-info">
		<my-form :formModel="baseInfoModel" :info="formInfo" @issueInfo="toIssueInfo" @uploadImg="uploadImg" />
	</view>
</template>

<script>
	import myForm from '@/components/myCenter/myForm.vue'
	export default {
		components:{myForm},
		data() {
			var baseInfoModel=[
				{prop:"headpic",type:"img",label:"照片",clickF:"uploadImg",},
				{prop:"phone",type:"label",label:"手机号",defaultV:"12345679811"},
				{prop:"realName",type:"label",label:"真实姓名",defaultV:"请认证",classList:"has-value",clickF:"issueInfo"},
				{prop:"idno",type:"label",label:"身份证号",defaultV:"请认证",classList:"has-value",clickF:"issueInfo"},
				{prop:"bankNo",type:"label",label:"绑定银行卡",defaultV:"请认证",classList:"has-value",clickF:"issueInfo"}
			]
			return {
				baseInfoModel,
				formInfo:{}
			}
		},
		methods: {
			/**
			 * @name 去认证信息
			 */
			toIssueInfo(){
				this.navigatorTo("/pages/center/issueBaseInfo")
			},
			
			/**
			 * @name 上传用户照片
			 */
			uploadImg(){
				this.chooseImg().then(res=>{
				  return this.upload(res.tempFilePaths[0])
				}).then(res=>{
					let obj = JSON.parse(res.data)
					this.formInfo.headpic=obj.data
					this.showToast({status:obj.status,msg:obj.status==0?"上传成功":"上传失败"})
					this.resetUserInfo({headpic:obj.data})
					this.apiPost("/iuser/updateUser.do",{headpic:obj.data,id:this.formInfo.id},true)
				})
			},
			
			/**
			 * @name 处理用户信息
			 */
			getUserInfo(){
				let info = uni.getStorageSync(Window.userInfo)
				this.formInfo=info;
				if(info.bankNo)info.bankNo=info.bankNo.slice(0,5)+"*********"+info.bankNo.slice(14);
				if(info.idno)info.idno=info.idno.slice(0,6)+"*********"+info.idno.slice(15);
				
				let status = 3|| info.status
				if(status===3){
					this.showToast({status:3,msg:"审核不通过"})
				}
				
				if(status==0||status==3){// 0未认证 1 待审核 2 审核通过 3 审核不通过
					
				}else if(status==2||status==1){
					this.baseInfoModel.forEach(ele=>{
						if(ele.clickF==='issueInfo'){
							this.$set(ele,"clickF",null)
						}
					})
				}
			}
		},
		onShow() {
			this.getUserInfo()
		}
	}
</script>
<style lang='scss'>
	.base-info{
		height: 100%;
		background-color: #fff;
	}
</style>
