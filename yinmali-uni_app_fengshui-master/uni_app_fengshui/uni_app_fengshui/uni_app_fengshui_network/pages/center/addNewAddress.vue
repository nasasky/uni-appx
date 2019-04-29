<template>
	<view class='add-new'>
		<view class="position-box">
			<my-position @position="getPosition"></my-position>
		</view>
		<myForm :formModel="formModel" :info="info" @showAddress="showAddress" />
		<oneButton label="完成" @click="doSure" />
	</view>
</template>

<script>
	import myPosition from '@/components/position/position.vue'
	import myForm from '@/components/myCenter/myForm.vue'
	import oneButton from '@/components/onButton/oneButton.vue'
	import {phone} from '@/static/js/regExp.js'
	export default {
		components:{myPosition,myForm,oneButton},
		data() {
			var formModel = [
				{prop:"name",type:"input",label:"收货人",typeInput:"text",checked:true},
				{prop:"phone",type:"input",label:"联系电话",typeInput:"number",checked:true,exp:phone},
				{prop:"address",type:"address",label:"收货地址",clickF:"showAddress",checked:true},
				{prop:"address1",type:"input",label:"详细地址",typeInput:"text",checked:true},
				{prop:"checked",type:"switch",label:"是否设置默认"}
			]
			return {
				formModel,
				info:{
					name:"",
					phone:"",
					address:"北京市-市辖区-昌平区",
					checked:true,
					address1:"",
					province:"",
					city:"",
					area:"",
				}
			}
		},
		onLoad(opt) {
			uni.setNavigationBarTitle({
				title:opt.id?"编辑收货地址":"新增收货地址"
			})
			if(opt.id){
				let EditInfo = uni.getStorageSync(Window.myRAddress)
				EditInfo.address1=EditInfo.address
				EditInfo.address=EditInfo.province+"-"+EditInfo.city+"-"+EditInfo.area
				EditInfo.checked=EditInfo.status==0
				this.info=EditInfo
			}
			
		},
		methods: {
			showAddress(){
				this.$store.commit("switch_address",true)
			},
			
			/**
			 * @name 接受选中的数据
			 */
			getPosition(val){
				if(val.errMsg==="chooseLocation:ok"){
					this.info.address1=val.address;
					this.getProvince(val.latitude,val.longitude)
				}
			},
			
			/**
			 * @name 通过经纬度获取省市区
			 */
			getProvince: async function(lat,lng){
				let res = await this.getLocation({lat,lng})
				if(res.status===0){
					var address = res.result.addressComponent
					let add = `${address.province}-${address.city}-${address.district}`
					this.$set(this.info,"address",add)
				}
			},
			
			doSure:async function(){
				let params = {...this.info}
				let res = await this.checkParams(this.formModel,params)
				if(res){
					let arr = params.address.split("-");
					params.province=arr[0]
					params.city=arr[1]
					params.area=arr[2]
					params.address=params.address1
					params.status=params.checked?0:1
					delete params.address1
					delete params.checked
					delete params.updataTime
					delete params.createTime
					this.apiPost("/address/addAddress.do",params).then(res=>{
						if(res.status===0)this.goback()
					})
				}
			}
		},
		created() {
			
		},
	}
</script>
<style lang='scss'>
	.add-new {
		background-color: #fff;
		height: 100%;
		overflow: auto;
		
		.position-box{
			padding: 20upx 0;
			background-color: #f3f3f3;
		}
	}
</style>
