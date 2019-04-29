<template>
	<view class='give-price'>
		<view class="give-price-head">
			<text>我的报价：</text>
			<text class="fr">上传报价清单</text>
		</view>
		<price-form :formModel="formModel" :info="info"></price-form>
		<price-total btnString="4"></price-total>
	</view>
</template>

<script>
	import priceForm from '@/components/myUnits/common/myForm.vue'
	import priceTotal from '@/components/myUnits/common/total.vue'
	export default {
		components:{priceForm,priceTotal},
		data() {
			var formModel=[
				{prop:"",label:"商品总价",type:"input",type1:"number"},
				{prop:"",label:"运费",type:"input",type1:"number"},
				{prop:"",label:"税点",type:"input",type1:"number"},
				{prop:"",label:"税费",queueHead:"￥",type:"label"},
			]
			return {
				formModel,
				info:{}
			}
		},
		methods: {

		},
		created() {

		},
	}
</script>
<style lang='scss'>
	@import '@/static/css/st_mixin.scss';
	.give-price {
		@include my-box(20upx 0 0 0);
		
		&-head{
			height: 80upx;
			line-height: 80upx;
			padding: 0 20upx;
			background-color: #ffffff;
			border-bottom: 1upx solid #f5f5f5;
			font-size: 32upx;
			
			.fr{
				color: #3682FF;
			}
		}
	}
</style>
