<template>
	<view class='manage-unit' @click="gotoDetail">
		<unit-head :num="formatInfo.orderNum"></unit-head>
		<unit-body></unit-body>
		<my-table :hideTime="true" :hideRemark="true" ></my-table>
		
		<view class="unit-foot">
			<text class="fr">
				共1件商品 合计：￥123456
			</text>
		</view>
		
		<view class="btn-box pr">
			<my-btn btns="4,5,6,7"></my-btn>
		</view>
	</view>
</template>

<script>
	import unitHead from '@/components/myUnits/common/unitHead.vue'
	import unitBody from '@/components/myUnits/selfUnit/unitBody.vue'
	import myBtn from '@/components/myUnits/common/myBtn.vue'
	import myTable from '@/components/myUnits/common/mytable.vue'
	export default {
		props:["info"],
		components:{unitHead,unitBody,myBtn,myTable},
		data() {
			return {

			}
		},
		computed:{
			formatInfo(){
				return this.info
			}
		},
		methods: {
			/**
			 * @name 查看详情
			 */
			gotoDetail(){
				this.navigatorTo("/pages/orders/manageDetail?id=1")
			}
		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.manage-unit {
		background-color: #ffffff;
		margin: 20upx 0;
		
		.unit-foot{
			height: 88upx;
			line-height: 88upx;
			padding: 0 30upx;
			font-size: 28upx;
			border-bottom: 1upx solid #f5f5f5;
		}
		
		.btn-box{
			height: 88upx;
		}
	}
</style>
