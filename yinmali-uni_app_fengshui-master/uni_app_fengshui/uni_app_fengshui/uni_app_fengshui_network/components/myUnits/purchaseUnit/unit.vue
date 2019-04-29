<template>
    <view class='my-unit' @click="gotoDetail">
		<unit-head :num="formaltInfo.askNum" :state="formatStatus"></unit-head>
		<view class="unit-body">
			<text v-for="(item,index) in unitModel1" :key="index" >{{item.label}}：
				<text v-if="item.isMoney" :class="item.class">￥ </text>
				<text :class="item.class">{{formaltInfo[item.prop]||0}}</text>
				<text v-if="item.queueFoot" :class="item.class"> {{item.queueFoot}}</text>
			</text>
		</view>
		
		<unit-foot v-if="formaltInfo.status==0" :time="formaltInfo.createTime" butString="3" @sureCancel="sureCancel"></unit-foot>
		
    </view>
</template>
	
<script>
	import unitHead from '../common/unitHead'
	import {purchaseStatus} from '@/static/js/commonArray.js'
	import unitFoot from "../common/unitFoot"
    export default{
		props:["info","detailUrl"],
		components:{unitHead,unitFoot},
        data() {
            return {
				unitModel1:[
					{prop:"matchMerchant",label:"匹配商铺数"},
					{prop:"offerMerchant",label:"已报价商铺数"},
					{prop:"newPrice",label:"最新报价",class:"color-red",isMoney:true,queueFoot:"元"},
					{prop:"price",label:"商品报价",class:"color-999",isMoney:true,queueFoot:"元"},
					{prop:"taxPoint",label:"税点",class:"color-999",queueFoot:"%"},
					{prop:"taxation",label:"税费",class:"color-999",isMoney:true,queueFoot:"元"},
					{prop:"freight",label:"运费",class:"color-999",isMoney:true,queueFoot:"元"},
				]
            }
        },
		computed:{
			formaltInfo(){
				return this.info||{}
			},
			
			formatStatus(){
				//0卖家未报价 1报价已结束 2已取消
				return purchaseStatus[this.info.status||0]
			}
		},
        methods:{
			doDel(){
				// this.$store.commit("switch_loading")
			},
			
			/**
			 * @name 查看详情
			 */
			gotoDetail(){
				this.navigatorTo(this.detailUrl+"?id="+this.info.askBuyId)
			},
			
			sureCancel(){
				this.apiPost('/consumerCenter/cancleQuotation.do',{id:this.info.askBuyId}).then(res=>{
					if(res.status==0)this.info.status=2
				})
			}
        },
		created() {
			
		},
    }
</script>
<style lang='scss'>
	@import '@/static/css/st_mixin.scss';
	
    .my-unit{
		margin: 20upx 0;
		background-color: $color-white;
		font-size: $fontSize;
		transform: all 1s;
		
		.unit-body{
			padding: 20upx;
			@include my-flex();
			
			text{
				width: 50%;
				font-size: $fontSize;
				line-height: 55upx;
			}
		}
		.unit-foot{
			@include my-box(0 20upx,88upx,$color-white);
			
			.btn{
				margin: 14upx 0;
				@include my-btn(transparent);
			}
		}
	}
</style>