<template>
	<view class='ask-detail'>
		<goods-info :noBtn="true"></goods-info>
		
		<view class="fee-info">
			<view class="fee-item" v-for="(item,index) in modelData" :key="index">
				<text class="title">{{item.label}}：</text>
				<text class="color-999">暂无</text>
			</view>
		</view>
		
		<my-title title="求购内容:"></my-title>
		
		<my-table :tableModel="tableModel"></my-table>
		
		<common-total btnString="1"></common-total>
	</view>
</template>

<script>
	import purchaseHead from '@/components/myUnits/common/unitHead.vue'
	import {purchaseStatus} from '@/static/js/commonArray.js'
	import goodsInfo from '@/components/myUnits/askUnit/askUnit.vue'
	import myTitle from '@/components/myUnits/common/title.vue'
	import myTable from '@/components/myUnits/common/mytable.vue'
	import commonTotal from '@/components/myUnits/common/total.vue'
	
	export default {
		components:{purchaseHead,goodsInfo,myTitle,myTable,commonTotal},
		data() {
			return {
				detailInfo:{
					askBuyCode:"code"
				},
				modelData:[
					{prop:"",label:"商品报价"},
					{prop:"",label:"运费"},
					{prop:"",label:"税点"},
					{prop:"",label:"税费"},
				],
				
				tableModel:[
					{label:"分类"},
					{label:"品名"},
					{label:"商品名称"},
					{label:"材质"},
					{label:"特性"},
					{label:"数量"},
					{label:"地区"},
					{label:"报价"}
				]
			}
		},
		computed:{
			formatStatus(){
				//0卖家未报价 1卖家已报价 2卖家已拒绝 3正在报价 4报价已结束
				return purchaseStatus[this.detailInfo.auStatus]
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
	
	.ask-detail {
		@include my-box(0.1upx 0 0 0,calc(100% - 88.1upx));
		overflow: auto;
		
		.fee-info{
			margin-top: -20upx;
			line-height: 60upx;
			@include my-border(top);
			@include my-border(bottom);
			@include my-box(20upx,auto,$color-white);
			
			.fee-item{
				.title{
					display: inline-block;
					width: 140upx;
					text-align: right
				}
			}
		}
	}
</style>
