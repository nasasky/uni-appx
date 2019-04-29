<template>
	<view class='thrid-sure'>
		<view class="address-box">
			<my-address></my-address>
			<my-color></my-color>
		</view>
		<view class="shop-info">
			<image :src="imgs" mode=""></image>
			<text>KTLD风管专卖店＞</text>
		</view>
		<my-table :hideTime="true" :info="allInfo"></my-table>
		
		<view class="form-box">
			<my-form :formModel="formModel" :info="priceInfo"></my-form>
		</view>
		<view class="form-box">
			<my-form :formModel="formModel1" :info="priceInfo"></my-form>
		</view>
		
		<common-total :money="priceInfo.totalPrice" btnString="3" @doBuy="doBuy"></common-total>
	</view>
</template>

<script>
	import myAddress from '@/components/myUnits/common/myAddress.vue'
	import myColor from '@/components/myUnits/common/myColor.vue'
	import myTable from '@/components/myUnits/common/mytable.vue'
	import myForm from '@/components/myUnits/common/myForm.vue'
	import commonTotal from '@/components/myUnits/common/total.vue'
	export default {
		components:{myAddress,myColor,myTable,myForm,commonTotal},
		data() {
			return {
				imgs:require('@/static/imgs/shop.png'),
				formModel:[
					{prop:"price",label:"商品总价",queueHead:"￥",type:"label"},
					{prop:"freight",label:"运费",queueHead:"￥",type:"label"},
					{prop:"taxPoint",label:"税点",queueFoot:"%",type:"label"},
					{prop:"taxation",label:"税费",queueHead:"￥",type:"label"},
					{prop:"remark1",label:"备注",type:"input"},
					{prop:"invoice",label:"是否需要发票",type:"switch"},
				],
				
				formModel1:[ //支付类型,0-微信，1支付宝，2银联
					{label:"选择支付方式"},
					{label:"微信支付",icon:require('@/static/imgs/pay_wx.png'),type:"checkbox",isChecked:true,checkedChange:this.checkedChange},
// 					{label:"微信支付",icon:require('@/static/imgs/pay_wx.png'),type:"checkbox",isChecked:false,checkedChange:this.checkedChange},
// 					{label:"微信支付",icon:require('@/static/imgs/pay_wx.png'),type:"checkbox",isChecked:false,checkedChange:this.checkedChange}
				],
				
				allInfo:{
					remark1:"",
					askInfoList:[]
				},
				idThis:"",		//报价id
				merchantId:"",	//商家id
				quesId:"",		//订单id
				priceInfo:{}
			}
		},
		onLoad(opt){
			this.merchantId=opt.merchantId;
			this.idThis=opt.id
			this.quesId=opt.quesId
		},
		methods: {
			checkedChange(index){
				this.formModel1.forEach(ele=>{
					if(ele.isChecked)ele.isChecked=false
				})
				this.$set(this.formModel1[index],"isChecked",true)
			},
			
			getGoodInfo(){
				let goodInfo = uni.getStorageSync(Window.myGoodInfo);
				this.allInfo=goodInfo;
				let priceInfo = goodInfo.quotationList.find(val=>val.id==this.idThis)
				priceInfo.remark1=""
				priceInfo.invoice=true
				this.priceInfo=priceInfo
			},
			
			/**
			 * @name 点击购买
			 */
			doBuy(val){
				let addressInfo = uni.getStorageSync(Window.allAddress).find(val=>val.status==0)
				console.log(this.priceInfo)
				let params={
					merchantId:this.merchantId,
					addressId:addressInfo.id,
					quotationId:this.idThis,
					invoice:this.priceInfo.invoice?1:0,
					remark:this.priceInfo.remark1
				}
				
				this.apiPost('/order/wxPay.do',params,true).then(res=>{
					if(res.data)this.previewImg([res.data])
				})
			}
		},
		created() {
			this.getGoodInfo()
		},
	}
</script>
<style lang='scss'>
	@import '@/static/css/st_mixin.scss';
	
	
	.thrid-sure {
		@include my-height(null)
		@include my-box(0,calc(100%));
		display:flex;
		flex-direction: column;
		
		.address-box{
			padding: 20upx 0;
		}
		
		.shop-info{
			line-height: 88upx;
			background-color: #ffffff;
			padding: 0 30upx;
		}
		
		.form-box{
			margin: 20upx 0;
		}
		
	}
	@include apply-to('.shop-info'){
		image{
			width: 30upx;
			height: 30upx;
			margin-right: 20upx;
			vertical-align: middle;
		}
		text{
			vertical-align: middle;
		}
	}
</style>
