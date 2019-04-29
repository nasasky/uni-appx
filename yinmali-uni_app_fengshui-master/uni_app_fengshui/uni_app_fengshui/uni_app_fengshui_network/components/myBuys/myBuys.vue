<template>
	<view class='my-buys-box pa' >
		<view class="model" @click.stop="close">
			
		</view>
		<view :class="waitingClose?'closing my-buys pa':'my-buys pa'">
			<view class="goods-head pr">
				<image :src="formatInfo.mainImage||defaultImg" mode=""></image>
				<view class="goods-head-content">
					<text class="title imitate_ellipsis">{{formatInfo.name}}</text>
					<view class="">
						<text class="color-red">￥{{formatMoney}}</text>
					</view>
					<text class="color-999 imitate_ellipsis">{{formatInfo.subtitle}}</text>
				</view>
				<text class="btn-close pa" @click.stop="close">X</text>
			</view>
			<view class="goods-body">
				<view v-for="(item,index) in formatTypeA" :key="index">
					<text>{{item.label}}</text>
					
					<view class="item-box">
						<text v-for="(item1,index1) in item.list" :key="index1" :class="item1==item.value?'active':''" @click="doChoose(item,item1)">{{item1}}</text>
					</view>
				</view>
				<view class="number-box">
					<text>件数</text>
					<view>
						<uni-number-box :value="count" @change="changeCount"></uni-number-box>
					</view>
				</view>
			</view>
			
			<view class="btn-box pa">
				<button class="btn-sure" type="primary" @click.stop="sure">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	export default {
		components:{uniNumberBox},
		props:{
			info:{ //商品详情
				type:Object,
				default:function(){
					return {}
				}
			},
			typeArray:{ //颜色型号
				type:Array,
				default:function(){
					return []
				}
			},
			money:{ // 起始价
				type:[Number,String],
				default:0
			}
		},
		computed:{
			formatInfo(){
				return this.info
			},
			formatTypeA(){
				return this.typeArray
			},
			
			formatMoney(){
				return this.count<2?this.money:(this.money * this.count)
			}
		},
		data() {
			return {
				waitingClose:false,
				defaultImg:require('@/static/imgs/pic.png'),//商品照片
				
				count:1,//数量
				moneyNow:0,//修改数量的价格
			}
		},
		methods: {
			/**
			 * @name 关闭
			 */
			close(){
				this.waitingClose=true
				setTimeout(()=>{
					this.$store.commit("switch_buys")
				},600)
			},
			
			doChoose(item,item1){
				this.$set(item,"value",item1);
				let params = {
					color:this.typeArray[0].value,
					type:this.typeArray[1].value
				}
				this.$emit("changeType",params)
			},
			
			/**
			 * @name 改变数量
			 */
			changeCount(val){
				this.count=val
				if(val<2)this.count=1
			},
			
			sure(){
				this.$store.commit("switch_buys")
				this.navigatorTo(`/pages/shops/sureOrder?id=${this.info.id}&&count=${this.count}&&color=${this.typeArray[0].value}&&type=${this.typeArray[1].value}&&merchantId=${this.info.merchantId}&&money=${this.money}&&freight=${this.info.freight}`)
			}
		},
		created() {

		},
		beforeDestroy(){
			this.waitingClose=false
		}
	}
</script>
<style lang='scss'>
	.my-buys-box {
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100vh - 88upx);
		min-height: 1000upx; /* */
		z-index: 10;
		overflow: hidden;
		
		.model{
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}
		.my-buys{
			top: 30%;
			width: 100%;
			height: 70%;
			left: 0;
			background-color: #ffffff;
			animation: slip 1 ease .6s;
			border-top: 1upx solid #f5f5f5;
			box-sizing: border-box;
			
			.btn-box{
				bottom: 0;
				width: 100%;
				display: flex;
				button{
					border-radius: 0;
					flex: 1;
					font-size: 28upx;
					height: 100upx;
					line-height: 100upx
				}
				button:after{
					border: none;
				}
				.btn-sure{
					background-color: #2979FF;
				}
				.btn-reset{
					background-color: #ffffff;
					color: #666666;
					border-top: 1upx solid #eeeeee;
				}
			}
			.goods-head{
				padding: 30upx 20upx;
				height: 240upx;
				border-bottom: 1upx solid #f5f5f5;
				box-sizing: border-box;
				display: flex;
				image{
					width: 200upx;
					height: 200upx;
					margin-right: 20upx
				}
				
				&-content{
					flex: 1;
					display: inherit;
					flex-direction: column;
					justify-content: space-between;
					padding-right: 50upx;
					
					.title{
						font-size: 26upx
					}
					.color-red{
						font-weight: 700;
						font-size: 32upx
					}
					.color-999{
						font-size: 28upx;
					}
				}
				.btn-close{
					right: 20upx;
					top: 10upx;
				}
			}
			.goods-body{
				overflow: auto;
				height: calc(100% - 360upx);
				font-size: 28upx;
				
				>view{
					padding: 30upx 0;
					margin: 0 30upx;
				}
				>view:nth-of-type(n+2){
					border-top: 1upx solid #f5f5f5;
				}
				
				.item-box{
					display: flex;
					flex-wrap: wrap;
					
					text{
						padding: 10upx 20upx;
						font-size: 28upx;
						color: #999;
						background-color: #F1F3EE;
						border-radius: 4upx;
						margin: 20upx 20upx 0 0;
						border: 1upx solid transparent;
					}
					.active{
						border-color: #2979FF;
					}
				}
				.number-box{
					
				}
			}
		}
		
		.closing{
			animation: slip_leave 1 ease .6s;
		}
	}
	@keyframes slip{
		from{
			top: 100%;
		}
		to{
			top: 30%
		}
	}
	
	@keyframes slip_leave{
		from{
			top: 30%
		}
		to{
			top: 100%;
		}
	}
</style>
