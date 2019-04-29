<template>
	<view class='shop-evaluate'>
		<view class="title">
			商品评价（{{total}}）
			<text v-if="foramtData.length>0" class="fr color-red" @click="gotoDetail">查看全部 ></text>
		</view>
		<my-evaluate v-for="(item,index) in foramtData" :key="index" :info="item"></my-evaluate>
		
		<view v-if="foramtData.length==0" class="no-data">
			暂时没有评价
		</view>
	</view>
</template>

<script>
	import myEvaluate from '@/components/myEvaluate/myEvaluate.vue'
	export default {
		props:{
			listData:{
				type:Array,
				default:function(){
					return []
				}
			},
			total:{
				type:[String,Number],
				default:0
			},
			idThis:{
				type:[Number,String],
				default:function(){
					return 0
				}
			}
		},
		components:{myEvaluate},
		data() {
			return {

			}
		},
		computed:{
			foramtData(){
				return this.listData
			}
		},
		methods: {
			gotoDetail(){
				this.navigatorTo("/pages/shops/allCommonts?id="+this.idThis)
			}
		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.shop-evaluate {
		margin: 20upx 0;
		background-color: #fff;
		.title{
			font-size: 28upx;
			margin: 0 20upx;
			line-height: 88upx;
			height: 88upx;
			border-bottom: 1upx solid #f5f5f5;
		}
	}
</style>
