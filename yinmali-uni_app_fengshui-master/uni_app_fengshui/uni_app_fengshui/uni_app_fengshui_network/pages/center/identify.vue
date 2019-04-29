<template>
	<view class='identify'>
		<myForm :formModel="formModel" :info="info" @indentify="doIndentify" @chooseAddress="chooseAddress" @shoBigImg="shoBigImg" />
		<one-button v-if="formatBtn" label="确认" @click="doSure"></one-button>
	</view>
</template>

<script>
	import myForm from '@/components/myCenter/myForm.vue'
	import oneButton from '@/components/onButton/oneButton.vue'
	import {phone} from '@/static/js/regExp.js'
	export default {
		components:{myForm,oneButton},
		data() {
			return {
				formModel:[
					{prop:"companyName",type:"input",label:"企业名称",checked:true},
					{prop:"companyPhone",type:"input",label:"公司电话",typeInput:"text",checked:true},
					{prop:"address",type:"address",label:"公司地址",clickF:"chooseAddress",checked:true},
					{prop:"addressInfo",type:"input",label:"详细地址",checked:true},
					{prop:"legalPerson",type:"input",label:"企业法人",checked:true},
					{prop:"phone",type:"input",label:"法人手机号",typeInput:"number",checked:true,ext:phone},
					{prop:"dutyNum",type:"input",label:"税号",checked:true},
					{prop:"authorization",type:"label",label:"企业认证授权书",defaultV:"去认证",classList:"has-value",clickF:"indentify",checked:true},
					{prop:"licence",type:"label",label:"开户许可证",defaultV:"去认证",classList:"has-value",clickF:"indentify",checked:true},
					{prop:"permit",type:"label",label:"营业执照",defaultV:"去认证",classList:"has-value",clickF:"indentify",checked:true},
				],
				
				info:{
					address:"北京市-市辖区-东城区",
					companyName:"",
					companyPhone:"",
					addressInfo:"",
					legalPerson:"",
					phone:"",
					dutyNum:"",
					authorization:"",
					licence:"",
					permit:"",
				}
			}
		},
		computed:{
			formatBtn(){
				return this.info.status==1?true:false
			}
		},
		methods: {
			doSure: async function(){
			  let params = {...this.info}
			  var a = await this.checkParams(this.formModel,params)
			  if(a){
				  delete params.id
				  delete params.userId
				  delete params.createTime
				  delete params.updateTime
				  delete params.authenticationTime
				  delete params.status
				  var res = this.apiPost("/iuser/addCompanyCert.do",params)
				  if(res.status===0){
					  uni.navigateBack({
					  	delta:1
					  })
				  }
			  }
			  
			},
			doIndentify(item){
				let array = ["企业认证授权书","开户许可证","营业执照"]
				this.navigatorTo("/pages/center/indentifyImg?type="+array.indexOf(item.label))
				uni.setStorageSync(Window.identifyImg[item.prop],this.info[item.prop])
			},
			
			/**
			 * @name 获取审核情况
			 */
			getInfo:async function(){
				var res = await this.apiPost("/iuser/companyCertInfo.do",null,true)
				this.info=res.data
				this.info.address=this.info.address.split("/").join("-")
				if(res.data.authorization){this.formModel[7].type="img"}
				if(res.data.licence){this.formModel[8].type="img"}
				if(res.data.permit){this.formModel[9].type="img"}
				
				let status = res.data.status //0待审核 1审核未通过 2审核已通过
				if(status==0||status==2){
					this.formModel.forEach((ele,index)=>{
						ele.type=index<7?"label":"img"
						if(index>=7)ele.clickF="shoBigImg"
					})
					this.formModel[2].type="label"
					this.formModel[2].clickF=""
					
				}else if(status==1){
					this.showToast({status:2,msg:"审核未通过"})
					await this.getStorageImgs()
				}
			},
			
			/**
			 * @name 预览图片
			 */
			shoBigImg(item){
				this.previewImg([this.info[item.prop]])
			},
			
			/**
			 * @name 上传照片后重新赋值
			 */
			getStorageImgs:async function(){
				let arr = ["authorization","licence","permit"]
				arr.forEach((ele,index)=>{
					let img = uni.getStorageSync(Window.identifyImg[ele]);
					if(img){
						this.info[ele]=img;
						this.formModel[7+index].type="img"
					}
				})
			},
			
			/**
			 * @name 选择地址
			 */
			chooseAddress(){
				this.$store.commit("switch_address")
			}
			
		},
		onShow() {
			this.getInfo()
		},
	}
</script>
<style lang='scss'>
	.identify {
		background-color: #fff;
		overflow: auto;
	}
</style>
