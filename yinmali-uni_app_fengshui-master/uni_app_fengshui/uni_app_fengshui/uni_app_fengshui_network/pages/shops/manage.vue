<template>
	<view class='shop-manage'>
		<view class="title">
			<image :src="icon21" mode=""></image>
			<text>基本信息</text>
		</view>
		<myForm :formModel="formModel1" :info="info" @showAddress="showAddress" @uploadImg="uploadImg" />
		
		<view class="title mt20" v-if="info.status==2">
			<image :src="icon21" mode=""></image>
			<text>佣金信息 <text>(平台设置)</text></text>
		</view>
		<myForm :formModel="formModel2" :info="info" v-if="info.status==2" />
		
	</view>
</template>

<script>
	import myForm from '@/components/myCenter/myForm.vue'
	export default {
		components:{myForm},
		data() {
			return {
				icon21:require('@/static/imgs/myCenter/icon21.png'),
				
				formModel1:[
					{prop:"logo",type:"img",label:"店铺logo",clickF:"",},
					{prop:"name",type:"label",label:"企业名称",typeInput:"text"},
					{prop:"businessScope",type:"label",label:"经营范围",typeInput:"text"},
					{prop:"address",type:"address",label:"店铺地址",clickF:""},
					{prop:"addressInfo",type:"label",label:"地址描述",typeInput:"text"},
					{prop:"",type:"label",label:"营业电话",typeInput:"number"},
				],
				formModel2:[
					{prop:"commission",type:"label",label:"订单佣金",defaultV:"暂无"},
					{prop:"annualFee",type:"label",label:"店铺年费",defaultV:"暂无"},
				],
				
				info:{
					address:"北京市-市辖区-昌平区"
				}
			}
		},
		methods: {
			/**
			 * @name 显示address
			 */
			showAddress(){
				this.$store.commit("switch_address",true)
			},
			
			getListData(){
				this.apiPost("/merchant/getMerchant.do",null,true).then(res=>{
					res.data.address=res.data.address.replace(/\//g,"-")
					this.info=res.data
					
					// 0待审核 1审核未通过 2审核已通过 3已禁用 ,
					if(res.data.status!=2){
						this.showToast({
							msg:["待审核","审核未通过","审核已通过","已禁用"][res.data.status],
							status:1
						})
					}
				})
			},
			
			uploadImg(){
				this.chooseImg().then(res=>{
				  return this.upload(res.tempFilePaths[0])
				}).then(res=>{
					let obj = JSON.parse(res.data)
					this.info.logo=obj.data
					this.showToast({status:obj.status,msg:obj.status==0?"上传成功":"上传失败"})
					let params = Object.assign(this.info,{logo:obj.data})
					delete params.commitTime
					delete params.updateTime
					delete params.authenticationTime
					delete params.createTime
					this.apiPost("/iuser/updateUser.do",params,true)
				})
			}
		},
		created() {
			this.getListData()
		},
	}
</script>
<style lang='scss'>
	.shop-manage {
		background-color: #f5f5f5;
		
		.title{
			height: 90upx;
			line-height: 90upx;
			padding: 0 20upx;
			background-color: #fff;
			border-bottom: 1upx solid #f5f5f5;
			
			image{
				width: 46upx;
				height: 46upx;
				vertical-align: middle;
				margin-right: 20upx;
			}
			text{
				vertical-align: middle;
				font-size: 30upx;
				color: #5A5A5B;
				
				text{
					font-size: 20upx;
					color: #999;
				}
			}
		}
		.mt20{
			margin-top: 20upx;
		}
	}
</style>
