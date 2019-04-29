<template>
	<view class='purchase-detail'>
		<purchase-head :num="detailInfo.askBuyCode" :state="formatStatus"></purchase-head>
		<my-title title="求购内容:"></my-title>
		<my-table :tableModel="tableModel" :info="detailInfo"></my-table>
		<my-offer-price :info="detailInfo"></my-offer-price>
		<button v-if="detailInfo.status<=0" class="cancel-btn" type="warn">取消求购</button>
	</view>
</template>

<script>
	import myDetail from '@/static/js/myDetail.js'
	import purchaseHead from '@/components/myUnits/common/unitHead.vue'
	import {purchaseStatus} from '@/static/js/commonArray.js'
	import myTitle from '@/components/myUnits/common/title.vue'
	import myTable from '@/components/myUnits/common/mytable.vue'
	import myOfferPrice from '@/components/myUnits/common/myOfferPrice.vue'
	
	export default {
		components:{purchaseHead,myTitle,myTable,myOfferPrice},
		data() {
			return {
				
				detailInfo:{
					askBuyCode:"code"
				},
				
				tableModel:[
					{prop:"type",label:"分类"},
					{prop:"commodity",label:"品名"},
					{prop:"productName",label:"商品名称"},
					{prop:"texture",label:"材质"},
					{prop:"specification",label:"特性"},
					{prop:"unit",label:"数量"},
					{prop:"area",label:"地区"},
					{prop:"price",label:"报价"}
				],
			}
		},
		computed:{
			formatStatus(){
				//0卖家未报价 1报价已结束 2已取消
				return purchaseStatus[this.detailInfo.status||0]
			}
		},
		methods: {
			
		},
		mixins:[myDetail()]
	}
</script>
<style lang='scss'>
	@import '@/static/css/st_mixin.scss';
	
	.purchase-detail {
		@include my-box();
		
		.cancel-btn{
			@include my-btn(#FF3300,88upx);
		}
	}
</style>
