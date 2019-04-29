<template>
	<view class='indentify-imgs'>
		<view class="title">
			{{formatTips}}
		</view>
		<view class="upload-box">
			
			<view class="">
				<image :class="formatClass" :src="nowImg||formatTexture" mode="" @click="mycChooseImg"></image>
			</view>
			
			<button class="submit-btn" type="primary" @click="doSure">确认上传</button>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			var tips = [
				{label:"完成认证需要核实开户许可证，请拍上传企业开户许可证",key:Window.identifyImg.authorization},
				{label:"完成认证需要核企业授权确认书，请上传企业认证授权书",key:Window.identifyImg.licence},
				{label:"完成认证需要核营业执照，请上传企业营业执照",key:Window.identifyImg.permit}
			]
			var textureA=[
				require('@/static/imgs/myCenter/texture2.png'),
				require('@/static/imgs/myCenter/texture3.png'),
				require('@/static/imgs/myCenter/texture4.png'),
			]
			return {
				textureA,
				tips,
				type:"0",
				
				nowImg:""
			}
		},
		onLoad(opt) {
			this.type=opt.type
			this.nowImg = uni.getStorageSync(this.tips[this.type].key)
		},
		computed:{
			formatTexture(){
				return this.textureA[this.type]
			},
			formatClass(){
				return "texture"+this.type
			},
			formatTips(){
				return this.tips[this.type].label
			}
		},
		methods: {
			doSure:async function(){
				let res = await this.upload(this.nowImg)
				await this.showToast({status:res.statusCode==200?0:1,msg:res.statusCode==200?"成功":"失败"})
				if(res.statusCode==200){
					let obj = JSON.parse(res.data)
					uni.setStorageSync(this.tips[this.type].key,obj.data)
          this.goback()
				}
			},
			
			mycChooseImg:async function(){
				let res = await this.chooseImg()
				this.nowImg = res.tempFilePaths[0]
			}
		
		}
	}
</script>
<style lang='scss'>
	.indentify-imgs {
		font-size: 24upx;
		color: #8C91A9;
		background-color: #F8F8F8;
		height: 100%;
		
		.title{
			height: 88upx;
			line-height: 88upx;
			padding: 0 28upx;
		}
		.upload-box{
			background-color: #fff;
			padding: 44upx 28upx;
			text-align: center;
			
			>view{
				background-color: #F4F8FE;
			}
			.texture0{
				width: 520upx;
				height: 368upx;
				margin: 50upx auto;
			}
			.texture1{
				width: 500upx;
				height: 700upx;
				margin: 50upx auto;
			}
			.texture2{
				width: 507upx;
				height: 700upx;
				margin: 50upx auto;
			}
		}
		.submit-btn{
			font-size: 28upx;
			height: 100upx;
			line-height: 100upx;
			z-index: 10;
		}
	}
</style>
