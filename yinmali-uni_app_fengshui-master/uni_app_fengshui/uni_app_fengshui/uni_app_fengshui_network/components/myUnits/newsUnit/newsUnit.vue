<template>
	<view class='news'>
		<view class="news-item">
			<view class="">
				<image :src="formatInfo.status==0?icon19:icon20" mode=""></image>
				<text class="title">系统通知</text>
				<text :class="'fr '+(formatInfo.status==0?'bc-red':'bc-blue')" @click="doRead">{{formatInfo.status==0?'标记为已读':'已读'}}</text>
			</view>
			<view class="news-item-content">
				<view class="">
					<view>
						{{formatInfo.info}}
					</view>
					<view class="time">
						{{formatInfo.createTime}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			info:{
				type:Object,
				default:function(){
					return {
					  "createTime": "",
					  "id": 0,
					  "info": "",
					  "status": 0, // 0 未读 1 已读
					  "type": 0,
					  "updateTime": ""
					}
				}
			}
		},
		computed:{
			formatInfo(){
				return this.info
			}
		},
		data() {
			return {
				icon19:require('@/static/imgs/myCenter/icon19.png'),
				icon20:require('@/static/imgs/myCenter/icon20.png')
			}
		},
		methods: {
			/**
			 * @name 标记已读
			 */
			doRead(){
				if(this.info.status==0){
					this.apiPost("/userMessage/checkMsg.do",{id:this.info.id}).then(res=>{
						if(res.status==0){
							this.info.status=1
						}
					})
				}
			}
		}
	}
</script>
<style lang='scss'>
	.news {
		height: 100%;
		background-color: #f5f5f5;
		
		&-item{
			padding: 0 20upx;
			background-color: #fff;
			border-top: 1upx solid #f5f5f5;
			
			image{
				width: 36upx;
				height: 36upx;
				vertical-align: middle;
				margin-right: 25upx;
			}
			.title{
				font-size: 30upx;
				line-height: 90upx;
			}
			text{
				vertical-align: middle;
			}
			text.fr{
				font-size: 20upx;
				padding: 10upx;
				color: #fff;
				border-radius: 10upx;
				margin-top: 20upx;
			}
			text.fr:active{
				opacity: .8;
			}
			
			&-content{
				margin-left: 60upx;
				border-top: 1upx solid #f5f5f5;
				font-size: 24upx;
				color: #999;
				
				>view:nth-of-type(n+2){
					border-top: 1upx solid #f5f5f5;
				}
				
				>view{
					padding: 15upx 0;
					line-height: 40upx
				}
			}
		}
		&-item:nth-of-type(n+2){
			border-top: 1upx solid #f5f5f5;
		}
	}
</style>
