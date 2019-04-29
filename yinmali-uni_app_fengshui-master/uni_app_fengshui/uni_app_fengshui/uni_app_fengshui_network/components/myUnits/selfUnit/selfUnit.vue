<template>
	<view class='self-unit' @click="gotoDetail">
		<unit-head :name="formatInfo.merchantName" :status="formatInfo.status"></unit-head>
		
		<unit-body :info="formatInfo"></unit-body>
		
		<view class="unit-foot">
			<text class="fr">
				共1件商品 合计：￥123456
			</text>
		</view>
		
		<view v-if="formatBtns" class="btn-box pr">
			<my-btn :btns="formatBtns" @doDel="doDel" @doEvaluate="doEvaluate"></my-btn>
		</view>
	</view>
</template>

<script>
	import unitHead from './unitHead.vue'
	import unitBody from './unitBody.vue'
	import myBtn from '@/components/myUnits/common/myBtn.vue'
	export default {
		props:["info","detailUrl",'sureUrl'],
		components:{unitHead,unitBody,myBtn},
		data() {
			return {
				imgs:require('@/static/imgs/shop.png')
			}
		},
		computed:{
			formatInfo(){
				return this.info
			},
			formatBtns(){
				let arr= ["4,5","4","6","7"]
				return arr[this.info.status]
			}
		},
		methods: {
			gotoDetail(){
				if(this.info.status==0)return
				// 通过status来判断往确认订单还是详情跳转
				this.navigatorTo(this.detailUrl+"?id=1")
				uni.setStorageSync(Window.myGoodInfo,this.info)
			},
			
			doDel(){
				var that = this
				this.showModel({
					content:"取消订单后，将无法找回订单信息。请确认是否取消订单。",
					callback:that.sureDel
				})
			},
			
			sureDel(){
				this.apiPost("/consumerCenter/cancleQuotation.do",{id:this.info.id}).then(res=>{
					
				})
			},
			
			/**
			 * @name 去评价
			 */
			doEvaluate(){
				console.log(this.info)
			}
		},
	}
</script>
<style lang='scss'>
	.self-unit {
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
