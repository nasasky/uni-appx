<template>
    <view class='ask-unit' @click="gotoDetail">
		<unit-head num="12131313131321" :state="formatStatus"></unit-head>
		<view class="unit-body">
			<image class="shop-pic" :src="imgs.icon1" mode=""></image>
			<view class="shop-info">
				<view v-for="(item,index) in modelData" :key="index" :class="item.class" >
					<text v-if="item.label">{{item.label}}：</text>
					<text v-if="item.prop">{{formaltInfo[item.prop]||123}}</text>
					<view v-if="item.childs&&(img.show||formaltInfo[item.prop]>0?true:false)" class="imgs-box" v-for="(img,imgIndex) in item.childs " :key="imgIndex">
						<image :src="img.img" mode=""></image>
						<text>{{img.label}}</text>
					</view>
				</view>
			</view>
		</view>
		<unit-foot v-if="formatBtns" :time="formaltInfo.createTime" :butString="formatBtnString" @sureDel="sureDel" @sureEvaluate="sureEvaluate"></unit-foot>
    </view>
</template>
	
<script>
	import unitHead from '../common/unitHead'
	import {selfOrderStatus} from '@/static/js/commonArray.js'
	import unitFoot from "../common/unitFoot"
    export default{
		props:['info','detailUrl','sureUrl','noBtn','isOrder'],
		components:{unitHead,unitFoot},
        data() {
            return {
				imgs:{
					icon1:require('@/static/imgs/icon_1.png'),
				},
				modelData:[
					{prop:"merchantName",class:"shop-name"},
					{prop:"businessScope",class:"shop-type color-999",label:"经营范围"},
					{class:"shop-type shop-icon color-999",childs:[
						{prop:"",show:true,img:require('@/static/imgs/icon_1.png'),label:"企业认证"},
						{prop:"annualFeeStatus",show:false,img:require('@/static/imgs/icon_2.png'),label:"保证金"},
						{prop:"process",show:false,img:require('@/static/imgs/icon_3.png'),label:"厂家"}
					]},
				]
            }
        },
		computed:{
			formaltInfo(){
				return this.info||{}
			},
			
			formatStatus(){
				return this.info&&selfOrderStatus[this.info.status||0]
			},
			
			formatBtns(){
				return this.noBtn===true?false:true
			},
			
			formatBtnString(){
				let arr = ["4,5","4","6","7"]
				return arr[this.info.status]
			}
		},
        methods:{
			gotoDetail(){
				// if(this.info.status=="0")return
				this.navigatorTo(this.detailUrl+"?id="+(this.info.id||1))
			},
			
			/**
			 * @name 确认取消订单
			 */
			sureDel(){
				console.log("确认取消订单")
				this.info.status=4 // 修改状态为已取消
			},
			
			/**
			 * @name 去评价
			 */
			sureEvaluate(){
				this.navigatorTo("/pages/orders/issue?id="+this.info.id||1)
			}
        },
        created() {
			
        },
    }
</script>
<style lang='scss'>
    .ask-unit{
		margin: 20upx 0;
		background-color: #ffffff;
		font-size: 28upx;
		transform: all 1s;
		
		.unit-body{
			padding: 20upx;
			display: flex;
			
			.shop-pic{
				width: 120upx;
				height: 120upx;
				border: 1upx solid #D0D0D0;
				box-sizing: border-box;
				padding: 10upx;
				margin-right: 20upx
			}
			.shop-info{
				display: flex;
				flex: 1;
				flex-direction: column;
				justify-content: space-between;
				
				.shop-type{
					font-size: 24upx
				}
			}
			
			.shop-icon{
				display: flex;
			}
			
			.imgs-box{
				margin-right: 20upx;
				image{
					width: 30upx;
					height: 30upx;
					margin-right: 10upx;
					transform: translateY(6upx);
				}
				
			}
		}
	}
</style>