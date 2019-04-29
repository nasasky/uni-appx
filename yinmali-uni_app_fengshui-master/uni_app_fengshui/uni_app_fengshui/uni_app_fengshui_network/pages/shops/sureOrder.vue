<template>
	<view class='sure-order'>
		<view class="address-box">
			<my-address></my-address>
			<my-color></my-color>
		</view>
		
		<view class="shop-info" @click.stop="gotoDetail">
			<image :src="shopInfo.logo||imgs" mode=""></image>
			<text>{{shopInfo.name}}＞</text>
		</view>
		<self-unit-body :color="options.color" :count="options.count" :money="options.money"></self-unit-body>
		<my-form :formModel="formModel" :info="info"></my-form>
		<common-total :money="totalMoney" btnString="3" @doBuy="doBuy"></common-total>
	</view>
</template>

<script>
	import myAddress from '@/components/myUnits/common/myAddress.vue'
	import myColor from '@/components/myUnits/common/myColor.vue'
	import selfUnitBody from '@/components/myUnits/selfUnit/unitBody.vue'
	import myForm from '@/components/myUnits/common/myForm.vue'
	import commonTotal from '@/components/myUnits/common/total.vue'
	export default {
		components:{myAddress,myColor,selfUnitBody,myForm,commonTotal},
		data() {
			var formModel=[
				{label:"配送方式",type:"label"},
				{prop:"freight",label:"运费",type:"label",queueHead:"￥"},
				{prop:"remark",label:"留言",type:"input",type1:"text"},
				{label:"选择支付方式"},
				{label:"微信支付",icon:require('@/static/imgs/pay_wx.png'),type:"checkbox",isChecked:true,checkedChange:this.checkedChange},
// 				{label:"微信支付",icon:require('@/static/imgs/pay_wx.png'),type:"checkbox",isChecked:false,checkedChange:this.checkedChange},
// 				{label:"微信支付",icon:require('@/static/imgs/pay_wx.png'),type:"checkbox",isChecked:false,checkedChange:this.checkedChange}
			]
			return {
				imgs:require('@/static/imgs/shop.png'),
				formModel,
				info:{
					freight:"",
					remark:"",
				},
				options:{
					id:"",//商品id
					color:"",
					type:"",
					count:"",//数量
					merchantId:"",
					money:"",//单价价格
					freight:"",//运费
				},//地址参数
				
				shopInfo:{},//商铺信息
				
				totalMoney:"0",//总价
			}
		},
		onLoad(opt) {
			this.options=opt;
			this.info.freight=opt.freight
			this.totalMoney=Number(opt.freight) + opt.count * opt.money
		},
		methods: {
			/**
			 * @name 修改支付方式
			 */
			checkedChange(index){
				this.formModel.forEach(ele=>{
					ele.isChecked=false
				})
				this.$set(this.formModel[index],"isChecked",true)
			},
			
			/**
			 * @name 查看店铺详情
			 */
			gotoDetail(){
				this.navigatorTo("/pages/shops/shops?shopId="+this.shopInfo.id)
			},
			
			getMyInfo(){
				// 商铺详情
				this.apiPost("/product/getStoreByProduct",{merchantId:this.options.merchantId},true).then(res=>{
					if(res.data){
						this.shopInfo=res.data
						uni.setStorageSync(Window.myShopInfo,res.data)
					}
				})
			},
			
			doBuy(){
				let addressInfo = uni.getStorageSync(Window.allAddress).find(val=>val.status==0)
				let goodInfo = uni.getStorageSync(Window.myGoodInfo)
				let params = {
					merchantId:this.options.merchantId,//商家id
					merchantName:this.shopInfo.name,//商家名称
					addressId:addressInfo.id,//地址id----
					paymentType:"1",//支付类型,1-在线支付---
					postage:this.options.freight,//运费---
					remark:this.info.remark,//备注---
					productId:this.options.id,//商品id---
					productName:goodInfo.name,//商品名称---
					type:this.options.type,//型号-----
					color:this.options.color,//颜色-----
					quantity:this.options.count,//商品数量---
					invoice:1//是否发票 1是0否----
				}
				this.apiPost("/order/addOrder.do",params).then(res=>{
					
				})
			}
		},
		created() {
			this.getMyInfo()
		},
	}
</script>
<style lang='scss'>
	@import '@/static/css/st_mixin.scss';
	.sure-order {
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
