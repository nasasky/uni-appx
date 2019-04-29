<template>
	<view class='my-offer-price'>
		<view class="title">
			报价信息：
		</view>
		<view class="shop-num">
			<text>匹配商铺数：<text>{{formatInfo.matchMerchantNum}}</text></text>
			<text class="fr">已报价商铺数：<text class="color-999">{{formatInfo.offerMerchantNum}}</text></text>
		</view>
		
		<view class="price-box">
			<offer-unit v-for="(item,index) in formatInfo.quotationList" :key="index" :info="item" :allInfo='formatInfo' :status="formatStatus"></offer-unit>
		</view>
	</view>
</template>

<script>
	import OfferUnit from '../offerUnit/offerUnit.vue'
	export default {
		props:['info'],
		components:{OfferUnit},
		data() {
			return {

			}
		},
		computed:{
			formatInfo(){
				return this.info
			},
			formatStatus(){
				return this.info.status
			}
		},
		methods: {

		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.my-offer-price {
		background-color: #ffffff;
		line-height: 55upx;
		.title{
			padding: 20upx 20upx 0 20upx;
		}
		.shop-num{
			display: flex;
			padding:  0 20upx 20upx 20upx;
			
			text{
				color: #999999;
			}
			>text{
				display: inline-block;
				width: 50%;
			}
		}
		.price-box{
			background: #f5f5f5;
			padding: 20upx;
		}
	}
</style>
