<template>
	<view class='integral'>
		<view class="integral-head pr">
			<image :src="texture" mode=""></image>
			<view class="integral-head-text pa">
				<text>当前积分</text>
				<text class="fr">{{score}}</text>
			</view>
		</view>
		
		<view class="integral-body">
			<myTab :modelData="tabModel" @change="changeTab" />
			
			<view class="integral-body-content" v-if="listData.length>0">
				<view v-for="(item,index) in listData" :key="index" class="integral-body-content-item pr">
					<text>{{item.name}}</text>
					<text class="time">{{item.createTime}}</text>
					<text class="pa num">{{item.type==0?"+":"-"}}{{item.inChange}}</text>
				</view>
			</view>
		</view>
		<view v-if="listData.length==0" class="no-data">
			暂时没有数据
		</view>
	</view>
</template>

<script>
	import myTab from '@/components/myTabs/myTabs.vue'
	export default {
		components:{myTab},
		data() {
			var tabModel=[
				{label:"增加"},
				{label:"减少"},
			]
			return {
				texture:require('@/static/imgs/myCenter/texture1.png'),
				tabModel,
				score:0,//积分
				listData:[
					{
					  "createTime": "2019-03-14T01:22:30.705Z",
					  "id": 0,
					  "inChange": 0,
					  "inSource": 0,
					  "name": "string",
					  "type": 0,
					  "updateTime": "2019-03-14T01:22:30.705Z",
					  "userId": 0
					}
				]
			}
		},
		methods: {
			
			/**
			 * @name 修改tab
			 */
			changeTab(val){
				this.getIntegral(val)
			},
			
			getIntegral(type){
				let params = {
					currPageNo:1,
					pageSize:20,
				}
				params.type=type||0
				this.apiPost("/Integral/getIntegralList.do",params,true).then(res=>{
					this.$set(this,"listData",res.data.list)
				})
			}
		},
		created() {
			this.changeTab()
			let userInfo = uni.getStorageSync(Window.userInfo)
			this.score=userInfo.score
		},
	}
</script>
<style lang='scss'>
	.integral {
		height: 100%;
		background-color: #f5f5f5;
		box-sizing: border-box;
		padding-bottom: 40upx;
		
		&-head{
			height: 300upx;
			background-color: #3682FF;
			
			image{
				height: 100%;
				opacity: .7;
			}
			
			&-text{
				width: calc(100% - 150upx);
				top: 30%;
				transform: translateY(-50%);
				font-size: 36upx;
				font-weight: 700;
				color: #fff;
				padding: 0 75upx;
				line-height: 80upx;
				
				.fr{
					font-size: 50upx
				}
			}
		}
		
		&-body{
			margin: 0 25upx;
			z-index: 5;
			transform: translateY(-88upx);
			background-color: #fff;
			
			&-content{
				
				
				&-item{
					padding: 30upx 45upx;
					
					.time{
						font-size: 24upx;
						color: #999;
						display: block;
					}
					.num{
						top: 50%;
						right: 45upx;
						transform: translateY(-50%);
						font-size: 28upx;
						color: #3682FF;
						font-weight: 700;
					}
				}
				&-item:nth-of-type(n+2){
					border-top: 1upx solid #f5f5f5;
				}
			}
			
		}
	}
</style>
