<template>
	<view class='shop-detail'>
		<mySwiper :imgs="imgSwiper" :isDetail="true" />
		<mySummary :info="info" />
		<myEvaluate :listData="evaluateData" :total="evaluateTotal" :idThis="idThis" />
		
		<shopInfo :shopInfo="shopInfo" />
		
		<myTab :modelData="tabModel" :initIndex="initIndex" @change="changeTab" />
		<view class="tab-content">
			<!-- 使用的富文本样式没有 -->
			<rich-text v-if="initIndex==0" :nodes="formatdetail"></rich-text>
			
			<view class="tab-content-detail" v-else-if="initIndex==1">
				<view v-for="(item1,index1) in paramsA" :key="index1" class="tab-content-detail-item">
					{{item1.name}}：{{item1.info}}
				</view>
			</view>
		</view>
		
		<button class="btn-buy" type="primary" @click="doBuy">立即购买</button>
		
		<my-buys v-if="$store.state.buys" :info="info" :typeArray="typeArray" :money="moneyThis" @changeType="changeType"></my-buys>
	</view>
</template>

<script>
	import mySwiper from '@/components/mySwiper/mySwiper.vue' 
	import mySummary from './summary.vue'
	import myEvaluate from './evaluate.vue'
	import shopInfo from './shopInfo.vue'
	import myTab from '@/components/myTabs/myTabs.vue'
	import myBuys from '@/components/myBuys/myBuys.vue'
	import myDetail from '@/static/js/myDetail.js'
	export default {
		components:{mySwiper,mySummary,myEvaluate,shopInfo,myTab,myBuys},
		data() {
			var tabModel=[
				{label:"商品详情"},
				{label:"商品参数"},
			]
			
			return {
				imgSwiper:[],//大图片轮播
				tabModel,
				paramsA:[], //商品参数
				initIndex:0,//0商品详情,1参数
				info:{},//商品详情
				shopInfo:{},//商铺详情
				typeArray:[],//商品型号
				evaluateData:[],//评价
				evaluateTotal:0,
				moneyThis:0,//商品价格
				merchantId:"",//
			}
		},
		computed:{
			formatdetail(){
				return this.info.detail
			}
		},
		methods: {
			changeTab(val){
				this.initIndex=val
			},
			
			/**
			 * @name 立即购买
			 */
			doBuy(){
				this.$store.commit("switch_buys")
			},
			
			/**
			 * @name 获取当前页数据
			 */
			getInfo(){
				this.apiPost("/product/productInfo.do",{id:this.idThis},true).then(res=>{
					if(res.data){
						let subImg = res.data.subImages
						let imgString = subImg[subImg.length-1]===";"?subImg.slice(0,-1):subImg
						this.imgSwiper=imgString.split(";")
						
						this.info = res.data
						this.merchantId=res.data.merchantId
						uni.setStorageSync(Window.myGoodInfo,res.data)
						
						// 商铺详情
						this.apiPost("/product/getStoreByProduct",{merchantId:res.data.merchantId},true).then(res1=>{
							if(res1.data)this.shopInfo=res1.data
						})
					}
				})
				
				// 商品评价
				this.apiPost("/product/productComments",{id:this.idThis,currPageNo:1,pageSize:2},true).then(res=>{
					if(res.data){
						this.evaluateTotal=res.data.total
						this.evaluateData= res.data.list
					}
				})
				
				this.apiPost("/product/productParams",{id:this.idThis},true).then(res=>{
					if(res.data)this.paramsA=res.data
				})
				
				this.apiPost("/product/getProductType.do",{id:this.idThis},true).then(res=>{
					if(res.data){
						this.typeArray=[
							{
								value:res.data.colorList[0],
								label:"颜色",
								list:res.data.colorList
							},
							{
								value:res.data.modelList[0],
								label:"型号",
								list:res.data.modelList
							}
						];
						this.getMoney(res.data.modelList[0],res.data.colorList[0],1)
					}
				})
			},
			
			getMoney(model,color,count){
				let params = {
					model,
					color,
					count,
					productId:this.idThis
				}
				this.apiPost("/product/getPriceByKind",params,true).then(res=>{
					this.moneyThis=res.data
				})
			},
			/**
			 * @name 修改类型参数
			 */
			changeType(val){
				this.getMoney(val.type,val.color,1)
			}
		},
		created() {
			this.getInfo()
		},
		mixins:[myDetail()],
	}
</script>
<style lang='scss'>
	.shop-detail {
		background-color: #f5f5f5;
		height: 100%;
		overflow: auto;
		
		.tab-content{
			padding: 20upx 20upx 150upx;
			box-sizing: border-box;
			background-color: #fff;
			font-size: 26upx;
			line-height: 50upx;
		}
		.btn-buy{
			font-size: 28upx;
			height: 100upx;
			line-height: 100upx;
			background-color: #2979FF;
			border-radius: 0;
			width: 100%;
		}
		.btn-buy:after{
			border: none
		}
		
		.tab-content-detail{
			color: #999;
			line-height: 80upx;
			font-size: 28upx;
			margin-top: -20upx;
			
			&-item{
				border-bottom: 1upx solid #f5f5f5;
			}
			
		}
	}
</style>
