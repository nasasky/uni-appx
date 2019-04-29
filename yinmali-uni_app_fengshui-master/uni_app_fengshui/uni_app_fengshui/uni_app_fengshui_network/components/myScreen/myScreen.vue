<template>
	<view class='my-screen-box pa' >
		<view class="model" @click.stop="close">
			
		</view>
		<view :class="waitingClose?'closing my-screen pa':'my-screen pa'">
			
			<scroll-view :scroll-y="true" class="screen-type">
				<view v-for="(item,index) in foramtType" :key="index" class="screen-type-item">
					<text>{{item.label}}</text>
					<view class="screen-type-item-choose">
						<text v-for="(item1,index1) in item.list" :class="((item1.id||item1.value)==screenInfo[item.prop])?'active':''" :key="index1" @click="chooseThis(item,item1)">{{item1.label||item1.name}}</text>
					</view>
				</view>
			</scroll-view>
			
			<view class="btn-box pa">
				<button class="btn-reset" type="primary" @click.stop="reset">重置</button>
				<button class="btn-sure" type="primary" @click.stop="doSure">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['screenType','screenInfo'],
		data() {
			return {
				waitingClose:false,
				
				info:{},
				
				isAskShop:false,//是否是指定类别
			}
		},
		computed:{
			foramtType(){
				return this.screenType
			}
		},
		methods: {
			reset(){
				for(var key in this.screenInfo){
					if(key!=='orderBy'){
						this.screenInfo[key]=""
					}
				}
				this.$emit("doReset");
				this.close()
			},
			doSure(){
				this.$emit("doSure");
				this.close()
			},
			close(){
				this.waitingClose=true
				setTimeout(()=>{
					this.$store.commit("switch_screen")
				},600)
			},
			
			/**
			 * @name 选择这个
			 */
			chooseThis(item,item1){
				if(item.prop=='categoryId'&&this.isAskShop){
					this.showToast({status:2,msg:"指定分类搜索"})
				}else{
					this.screenInfo[item.prop]=item1.id || item1.value
				}
			},
			
			askShop(){
				let pages = getCurrentPages()
				let params = pages[pages.length-1].options
				
				if(params){
					this.screenInfo.categoryId=params.categoryId
					if(params.categoryId){
						// this.isAskShop=true
					}
				}
			}
		},
		created() {
			this.askShop()
		},
		beforeDestroy(){
			this.waitingClose=false
		}
	}
</script>
<style lang='scss'>
	.my-screen-box {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		.model{
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}
		.my-screen{
			top: 0;
			width: 80%;
			height: 100%;
			left: 20%;
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
					height: 80upx;
					line-height: 80upx;
				}
				button:after{
					border: none;
				}
				.btn-sure{
					background-color: #E60012;
				}
				.btn-reset{
					background-color: #ffffff;
					color: #666666;
					border-top: 1upx solid #eeeeee;
				}
			}
			.screen-type{
				height: calc(100% - 80upx);
				box-sizing: border-box;
				overflow: auto;
				
				&-item{
					padding: 20upx;
					
					>text{
						font-size: 30upx;
					}
					
					&-choose{
						display: flex;
						flex-wrap: wrap;
						
						text{
							display: inline-block;
							height: 50upx;
							line-height: 50upx;
							padding: 0 20upx;
							background-color: #F2F2F2;
							min-width: 150upx;
							box-sizing: border-box;
							border-radius: 50upx;
							margin: 20upx 20upx 0 0;
							text-align: center;
							font-size: 26upx;
							color: #666;
						}
						
						.active{
							color: #3682FF;
							background:rgba(234,241,252,1);
							/* border:1px solid rgba(54,130,255,1); */
						}
					}
				}
			}
		}
		
		.closing{
			animation: slip_leave 1 ease .6s;
		}
	}
	@keyframes slip{
		from{
			left: 100%;
		}
		to{
			left: 20%
		}
	}
	
	@keyframes slip_leave{
		from{
			left: 20%
		}
		to{
			left: 100%;
		}
	}
</style>
