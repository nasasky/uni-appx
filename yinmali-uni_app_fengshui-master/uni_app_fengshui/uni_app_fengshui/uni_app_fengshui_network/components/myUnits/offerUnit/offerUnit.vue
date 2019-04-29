<template>
	<view class='offer-unit' @click="chooseThis">
		<view class="title">
			<image :src="formatImg" mode=""></image>
			<text>合计：</text>
			<text class="color-red">{{formatInfo.totalPrice}}元</text>
			<my-btn btns="1,2" @doDownload="doDownload" @doBuy="doBuy"></my-btn>
		</view>
		<view class="content">
			<view class="content-item" v-for="(item,index) in modelData.content" :key="index" >
				<text>{{item.label}}</text>
				<text class="fr color-999">{{formatInfo[item.prop]}}{{item.unit}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import myBtn from '../common/myBtn.vue'
	import {purchaseStatus} from '@/static/js/commonArray.js'
	export default {
		props:['info','status','allInfo'],
		components:{myBtn},
		data() {
			return {
				activeImg:require('@/static/imgs/choose_active.png'),
				defaultImg:require('@/static/imgs/choose.png'),
				
				modelData:{
					title:[], //架构原型
					content:[
						{prop:"price",label:"商品报价",unit:"元"},
						{prop:"freight",label:"运费",unit:"元"},
						{prop:"taxPoint",label:"税点"},
						{prop:"taxation",label:"税费",unit:"元"},
					]
				},
				
				chooseId:"",
			}
		},
		computed:{
			formatInfo(){
				return this.info
			},
			formatImg(){
				return this.info.id==this.chooseId?this.activeImg:this.defaultImg
			}
		},
		methods: {
			/**
			 * @name 选择
			 */
			chooseThis(){
				this.chooseId=this.info.id
			},
			
			doDownload(){
				if(this.status!=0){
					this.showToast({status:2,msg:'订单'+purchaseStatus[this.status||0]})
					return
				}
				uni.request({
					url:Window.PATH+"/consumerCenter/downExcel.do?id="+this.info.id,
					success(res) {
						uni.downloadFile({
							url:res.data
						})
					}
				})
			},
			
			doBuy(){
				this.chooseId=this.info.id //订单id
				uni.setStorageSync(Window.myGoodInfo,this.allInfo);
				this.navigatorTo("/pages/orders/thirdSure?id="+this.chooseId+"&&merchantId="+this.info.merchantId+"&&quesId="+this.allInfo.id)
			}
		},
		created() {
			
		},
	}
</script>
<style lang='scss'>
	.offer-unit {
		background-color: #ffffff;
		border-radius: 8upx;
		margin-bottom: 20upx;
		
		.title{
			position: relative;
			padding: 10upx;
			line-height: 60upx;
			display: flex;
			border-bottom: 2upx solid #f5f5f5;
			
			image{
				width: 27upx;
				height: 27upx;
				margin: 20upx 20upx 0 5upx;
			}
		}
		.content{
			padding: 30upx 60upx;
			background-color: #ffffff;
		}
	}
</style>
