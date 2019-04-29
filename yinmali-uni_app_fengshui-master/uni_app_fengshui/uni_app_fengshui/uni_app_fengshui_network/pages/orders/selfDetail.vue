<template>
	<view class='self-detail'>
		<view class="info">
			<unit-body></unit-body>
		</view>
		<my-address :hideArrow="true"></my-address>
		
		<view class="actual-money">
			<text v-for="(item,index) in modelData" :class="item.class" :key="index">{{item.label}}：
				<text class="fr">暂无</text>
			</text>
		</view>
		<my-logistics v-if="formatLog"></my-logistics>
	</view>
</template>

<script>
	import unitBody from '@/components/myUnits/selfUnit/unitBody.vue'
	import myAddress from '@/components/myUnits/common/myAddress.vue'
	import myLogistics from '@/components/myUnits/common/myLogistics.vue';
	export default {
		components:{unitBody,myAddress,myLogistics},
		data() {
			return {
				modelData:[
					{label:"实付金额",class:"color-333"},
					{label:"订单号",class:"color-999"},
					{label:"支付时间",class:"color-999"},
					{label:"发货时间",class:"color-999"},
				]
			}
		},
		computed:{
			formatLog(){
				return false
			}
		},
		methods: {

		}
	}
</script>
<style lang='scss'>
	.self-detail {
		background-color: #f5f5f5;
		height: 100%;
		overflow: auto;
		
		.info{
			padding: 18upx 0
		}
		.actual-money{
			font-size: 28upx;
			padding: 20upx 30upx;
			line-height: 60upx;
			background-color: #ffffff;
			border-top: 1upx solid #f5f5f5;
			margin-bottom: 20upx;
			
			text{
				display: block;
			}
		}
	}
</style>
