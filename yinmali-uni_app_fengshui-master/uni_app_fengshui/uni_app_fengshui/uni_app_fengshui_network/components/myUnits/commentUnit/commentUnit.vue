<template>
	<view class='my-evaluate'>
		<view v-if="index==0" class="name color-999">全部评价 ({{listTotal}})</view>
		<my-eva :info="info"></my-eva>
	</view>
</template>

<script>
	import myEva from '@/components/myEvaluate/myEvaluate.vue'
	export default {
		components:{myEva},
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
			},
			index:{
				type:[String,Number],
				default:0
			},
			listTotal:{
				type:[String,Number],
				default:0
			}
		},
		computed:{
			formatName(){
				return "测试"||this.info.realName.slice(0,1)+" * *"
			}
		},
		data() {
			return {

			}
		},
	}
</script>
<style lang='scss'>
	.my-evaluate {
		font-size: 24upx;
		line-height: 40upx;
		box-sizing: border-box;
		margin-bottom: 20upx;
		background-color: #fff;
		
		.name{
			line-height: 50upx;
			background-color: #f5f5f5;
			text-indent: 20upx;
		}
		
		.fr{
			padding-left: 10upx;
		}
	}
</style>
