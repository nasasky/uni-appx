<template>
	<view :class='"issue " + classList'>
		<view class="issue-head">
			<slot name="headPic"></slot>
			<image v-if="headPic_show" :src="headPic_value" class="issue-head-pic" mode=""></image>
			<text v-if="headTitle_show" class="issue-head-title">{{headTitle_value.slice(0,5)}}</text>
			
			<view class="issue-head-star-box" v-if="stars_show">
				<image v-for="(item,index) in stars_max" :key="index" :src="(index+1)>infoReceive.score?star_default:star_active" :class="infoReceive.score==index+1?'active':''" mode="" @click="setScore(index+1)"></image>
			</view>
		</view>
		 <textarea v-if="textarea_show" @blur="blur" :value="infoReceive.textarea_value" :placeholder="textarea_placeholder"/>
		 <view v-if="submit_show" class="issue-btn-box">
		 	<button class="submit-btn" type="primary" @click="doSubmit">{{submit_text}}</button>
			<slot name="submit"></slot>
		 </view>
	</view>
</template>
<script>
	export default {
		props:{
			classList:{
				type:String,
				default:""
			},
			headPic_show:{ //图片
				type:[String,Boolean],
				default:true,
			},
			headPic_value:{
				type:String,
				default:require('@/static/imgs/pic.png')
			},
			
			headTitle_show:{ //标题
				type:[String,Boolean],
				default:true,
			},
			headTitle_value:{
				type:String,
				default:"描述相符"
			},
			
			stars_show:{
				type:[String,Boolean],
				default:true,
			},
			stars_max:{ // 星星最大个数
				type:[String,Number],
				default:5,
			},
			star_default:{ //未选中
				type:String,
				default:require('@/static/imgs/star.png'),
			},
			star_active:{
				type:String,
				default:require('@/static/imgs/star_active.png'),
			},
			score:{  //默认分数
				type:[Number,String],
				default:0
			},
			score_disabled:{ //禁用星星
				type:Boolean,
				default:false
			},
			
			textarea_show:{ // 多行文本显示
				type:[String,Boolean],
				default:true,
			},
			textarea_placeholder:{
				type:[String,Number],
				default:"宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧"
			},
			
			
			submit_show:{ // 发布按钮
				type:[String,Boolean],
				default:true,
			},
			submit_text:{
				type:String,
				default:"发布",
			},
			
			infoReceive:{
				type:Object,
				default:function(){
					return {
						score:0,
						textarea_value:"测试"
					}
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			/**
			 * @name 设置分数
			 */
			setScore(score){
				if(this.score_disabled)return;
				this.infoReceive.score=score
			},
			
			/**
			 * @name 获取textarea内容
			 */
			blur(e){
				this.infoReceive.textarea_value=e.detail.value
			},
			
			doSubmit(){
				console.log("提交信息");
			}
		},
		created(){
			this.infoReceive.score=Math.round(this.score)
		}
	}
</script>
<style lang='scss'>
	$backgroundC:#f9f9f9;
	$borderColor:#f5f5f5;
	$white:#ffffff;
	$fontSize:28upx;
	
	.issue {
		height: 100%;
		background-color: $backgroundC;
		
		&-head{
			background-color: $white;
			height: 100upx;
			border-top: 1upx solid $borderColor;
			border-bottom: 1upx solid $borderColor;
			padding: 0 25upx;
			
			&-pic{
				width: 70upx;
				height: 70upx;
				border-radius: 50%;
				vertical-align: middle;
				margin-right: 17upx;
			}
			&-title{
				line-height: 100upx;
				font-size: 30upx;
				vertical-align: middle;
				margin-right: 35upx;
			}
			
			&-star-box{
				display: inline-block;
				
				image{
					width: 32upx;
					height: 32upx;
					vertical-align: middle;
					margin-right: 14upx;
				}
				image.active{
					animation: star_move ease-in 1 1s,star_rotate ease 1.5s infinite 1s;
				}
			}
		}
		textarea{
			width: 100%;
			height: 420upx;
			background-color: $white;
			font-size: $fontSize;
			color: #898989;
			padding: 24upx;
			box-sizing: border-box;
			line-height: 40upx
		}
		&-btn-box{
			margin: 54upx 30upx;
			
			button{
				width: 100%;
				height: 80upx;
				border-radius: 80upx;
				font-size: $fontSize;
				background-color: #3682FF;
				line-height: 80upx
			}
		}
	}
	
	@keyframes star_move{
		from{
			width: 50upx;
			height: 50upx;
			transform: rotate(180deg)
		}
		to{
			width: 32upx;
			height: 32upx;
			transform: rotate(0)
		}
	}
	@keyframes star_rotate{
		0%{
			transform: rotateY(360deg)
		}
		100%{
			transform: rotateY(180deg)
		}
	}
	
	/* 使用对应类名来引入 */
	@import '../myEvaluate/unusual.scss'
</style>
