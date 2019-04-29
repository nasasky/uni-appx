<template>
	<view class='my-evaluate'>
		<image :src="info.headpic||defaultImg" mode=""></image>
		<view class="">
			<!-- <view class="">
				<text class="name color-999">{{formatName}}</text>
			</view> -->
			<myIssue classList="unusual-style" :headPic_show="false" :headTitle_value="formatName" :textarea_show="false" :score="info.grade" :score_disabled="true" :submit_show="false" ></myIssue>
			<view class="content">
				{{info.comment}}
			</view>
		</view>
	</view>
</template>

<script>
	import myIssue from '@/components/myIssue/myIssue.vue'
	export default {
		components:{myIssue},
		props:{
			info:{
				type:Object,
				default:function(){
					return {
						  "color": "string",
						  "comment": "string",
						  "createTime": "2019-03-19T06:12:41.538Z",
						  "grade": 0,
						  "headpic": "string",
						  "id": 0,
						  "realName": "string",
						  "type": "string"
					}
				}
			}
		},
		computed:{
			formatName(){
				return this.info.realName.slice(0,1)+" * *"
			}
		},
		data() {
			return {
				defaultImg:require('@/static/imgs/pic.png')
			}
		},
	}
</script>
<style lang='scss'>
	.my-evaluate {
		font-size: 24upx;
		line-height: 40upx;
		padding: 20upx 20upx 20upx;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;
		display: flex;
		background-color: #fff;
		
		>view{
			flex: 1
		}
		.name{
			line-height: 50upx;
		}
		image{
			width: 96upx;
			height: 96upx;
			margin-right: 20upx;
			border-radius: 50%;
		}
		.content{
			padding-top: 8upx;
			line-height: 40upx;
		}
	}
</style>
