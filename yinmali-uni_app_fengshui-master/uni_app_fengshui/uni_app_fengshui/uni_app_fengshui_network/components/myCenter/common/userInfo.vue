<template>
	<view class='user-info'>
		<image class="bc-img pa" :src="icon16" mode=""></image>
		<image class="user-info-pic" :src="formatBase.headpic" mode=""></image>
		
		<view class="user-info-base">
			<view class="user-info-name">
				{{formatBase.name}} 
				<view class="icon-box">
					<image v-if="formatBase.status==2" :src="icon17" mode=""></image>
					<image v-for="(item,index) in formatRate" :key="index" :src="item" mode=""></image>
				</view>
			</view>
			<view class="user-info-phone">
				{{formatBase.phone}}
			</view>
		</view>
		<view class="user-info-integral">
			<view class="user-info-title">
				积分
			</view>
			<view class="user-info-num">
				{{formatBase.score}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			baseInfo:{
				type:Object,
				default:function(){
					return {
						headpic:require('@/static/imgs/pic.png'),//用户照片
						name:"我是姓名",//用户姓名
						phone:"我是phone",//电话号码
						score:"积分", // 积分
					}
				}
			}
		},
		computed:{
			formatBase(){
				return this.baseInfo
			},
			
			formatRate(){
				let rate = parseInt(this.baseInfo.realRate); //好评率
				let arr = []
				if(rate<20){
					arr.push(this.icon17_1)
				}else if(rate<40){
					arr.push(this.icon17_2)
				}else if(rate<60){
					arr.push(this.icon17_2,this.icon17_2)
				}else if(rate<80){
					arr.push(this.icon17_2,this.icon17_2,this.icon17_2)
				}else{
					arr.push(this.icon18)
				}
				return arr
			}
		},
		data() {
			return {
				icon16:require('@/static/imgs/myCenter/icon16.png'),
				icon17:require('@/static/imgs/myCenter/icon17.png'), //认证logo
				
				icon17_1:require('@/static/imgs/myCenter/icon17_1.png'),
				icon17_2:require('@/static/imgs/myCenter/icon17_2.png'),
				icon18:require('@/static/imgs/myCenter/icon18.png'),
				rateArray:[]
				
			}
		}
	}
</script>
<style lang='scss'>
	.user-info {
		width: 100%;
		height: 240upx;
		border-radius: 10upx;
		box-sizing: border-box;
		padding: 46upx 30upx;
		display: flex;
		color: #333;
		position: relative;
		background: transparent;
		
		.bc-img{
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 0
		}
		&-pic{
			width: 148upx;
			height: 148upx;
			border-radius: 50%;
			margin-right: 24upx;
			z-index: 2
		}
		
		&-base,&-integral{
			font-size: 36upx;
			color: #fff;
			display: inherit;
			flex-direction: column;
			justify-content: center;
			z-index: 2
		}
		
		&-name{
			display: inherit;
			
			.icon-box{
				display: inherit;
				
				image{
					width: 35upx;
					height: 35upx;
					margin-left: 5upx;
					margin-top: 10upx;
				}
			}
		}
		&-phone{
			font-size: 24upx;
			margin-top: 15upx;
		}
		
		&-integral{
			margin-left: auto;
		}
		
		&-title{
			font-size: 24upx;
			line-height: 50upx
		}
		&-num{
			font-size: 30upx;
			font-weight: 700;
			margin-top: 15upx;
		}
	}
</style>
