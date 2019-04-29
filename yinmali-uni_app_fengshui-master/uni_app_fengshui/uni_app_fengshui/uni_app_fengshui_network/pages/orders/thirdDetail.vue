<template>
	<view class='third-detail'>
		<view class="shop-info">
			<image :src="imgs" mode=""></image>
			<text>KTLD风管专卖店＞</text>
		</view>
		<my-table :hideTime="true"></my-table>
		<view class="form-box">
			<my-form :formModel="formModel"></my-form>
		</view>
		<view class="form-box">
			<my-address :hideArrow="true"></my-address>
		</view>
		<my-logistics></my-logistics>
		<button type="primary" class="pa" @click="gotoIssue">去评价/确认收货</button>
	</view>
</template>

<script>
	import myTable from '@/components/myUnits/common/mytable.vue'
	import myForm from '@/components/myUnits/common/myForm.vue'
	import myAddress from '@/components/myUnits/common/myAddress.vue'
	import myLogistics from '@/components/myUnits/common/myLogistics.vue'
	export default {
		components:{myTable,myForm,myAddress,myLogistics},
		data() {
			return {
				imgs:require('@/static/imgs/shop.png'),
				formModel:[
					{label:"商品总价",queueHead:"￥",type:"label"},
					{label:"运费",queueHead:"￥",type:"label"},
					{label:"税点",queueFoot:"%",type:"label"},
					{label:"税费",queueHead:"￥",type:"label"},
				],
			}
		},
		methods: {
			/**
			 * @name 去评价
			 */
			gotoIssue(){
				this.navigatorTo("/pages/orders/issue?id=1")
			}
		},
	}
</script>
<style lang='scss'>
	@import '@/static/css/st_mixin.scss';
	
	.third-detail {
		@include my-height(null)
		@include my-box(20upx 0,calc(100% - 88upx));
		
		.shop-info{
			line-height: 88upx;
			background-color: #ffffff;
			padding: 0 30upx;
			@include my-border(bottom)
		}
		.form-box{
			margin: 20upx 0
		}
		button{
			@include my-btn(#3682FF,88upx);
			bottom: 0;
			width: 100%;
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
