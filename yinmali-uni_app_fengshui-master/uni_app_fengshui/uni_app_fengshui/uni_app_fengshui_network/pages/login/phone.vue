<template>
    <view class='login'>
		<view class="login-logo-box">
			<image :src="logo" mode=""></image>
		</view>
		
		<view class="input-box">
			<view v-for="(item,index) in formaltModel" :key="index" class="input-item">
				<image :src="item.icon" mode=""></image>
				
				<input :type="item.type" :placeholder="'请输入'+item.label" :data-prop="item.prop" :value="info[item.prop]" @input="onKeyInputH5" />
				
				<button v-if="item.sendCheck" class="fr color-blue check-btn" type="primary" @click="getCheckCode" :disabled="timeSum<120">获取验证码{{formatTime}}</button>
			</view>
		</view>
		<view class="logo-type color-blue">
			<text @click="doChangeTyoe">切换{{formaltLoginWay}}</text>
			<text class="fr" @click.stop="toFindP">忘记密码</text>
		</view>
		
		<oneButton classList="width100" label="登录" @click="submit"></oneButton>
		
		<view class="to-register" @click="gotoRegister" hover-class="active">
			还没有账号？现在去注册→
		</view>
    </view>
</template>
	
<script>
	import oneButton from '@/components/onButton/oneButton.vue';
	import {phone} from '@/static/js/regExp.js';
    export default{
		components:{oneButton},
        data() {
            return {
				logo: require('@/static/imgs/logo.png'),
				user: require('@/static/imgs/user.png'),
				checkNum: require('@/static/imgs/checkNum.png'),
				
				loginType:0,//0手机号，1密码登录
				
				info:{
					username:"18771142896",
					yards:"",
					password:"123456789",
				},
				timeset:null,
				timeSum:120,//定时
            }
        },
		computed:{
			formaltLoginWay(){
				return ["密码登录","手机号登录"][this.loginType]
			},
			
			formaltModel(){
				return [
					[
						{prop:"username",label:"手机号",icon:require('@/static/imgs/user.png'),type:"number"},
						{prop:"yards",label:"验证码",icon:require('@/static/imgs/checkNum.png'),type:"password",sendCheck:true}
					],
					[
						{prop:"username",label:"手机号",icon:require('@/static/imgs/user.png'),type:"number"},
						{prop:"password",label:"密码",icon:require('@/static/imgs/password.png'),type:"number"},
					]
				][this.loginType]
			},
			
			formatTime(){
				return this.timeSum<120?`(${this.timeSum}s)`:""
			}
		},
        methods:{
			/**
			 * @name 切换登录方式
			 */
			doChangeTyoe(){
				this.loginType=this.loginType==0?1:0
				uni.setNavigationBarTitle({
					title:this.loginType==0?"手机号登录":"密码登录"
				})
			},
			
			
			/**
			 * @name 获取输入框内容 
			 * app
			 */
			onKeyInputH5(event){
				this.info[event.target.dataset.prop]=event.detail.value;
			},
			
			/**
			 * @name 获取验证码
			 */
			getCheckCode(){
				if(!phone.test(this.info.username)){
					this.showToast({
						msg:"手机号格式错误",
						status:"2"
					})
					return
				}
				this.setTime()
				this.apiPost("/iuser/getSMS.do",{phone:this.info.username},true)
			},
			
			/**
			 * @name 设置验证码延时
			 */
			setTime(){
				this.timeSum=this.timeSum-1
				this.timeset=setInterval(()=>{
					uni.setStorageSync(Window.codeTime,this.timeSum)
					this.timeSum--
					if(this.timeSum===0){
						clearInterval(this.timeset)
						this.timeSum=120
						uni.setStorageSync(Window.codeTime,this.timeSum)
					}
				},1000)
			},
			
			/**
			 * @name 初始化定时器
			 */
			initTimeset(){
				clearInterval(this.timeset)
				let time = uni.getStorageSync(Window.codeTime)
				if(time<this.timeSum&&time>0){
					this.timeSum=time
					this.setTime()
				}
			},
			
			/**
			 * @name 点击登录
			 */
			submit(){
				// this.navigatorTo("/pages/homepage/index","2")
				let params = {
					username:this.info.username
				}
				params[["yards","password"][this.loginType]]=this.info[["yards","password"][this.loginType]]
				
				this.apiPost(['/iuser/smsLogin.do','/iuser/userLogin.do'][this.loginType],params,true).then(res=>{
					if(res.status==0){
						uni.setStorageSync(Window.userInfo,res.data.user)
						uni.setStorageSync(Window.allAddress,res.data.address)
						setTimeout(()=>{
							this.navigatorTo("/pages/homepage/index","2")
						},600)
					}else{
						this.showToast(res)
					}
				})
			},
			
			/**
			 * @name 去注册
			 */
			gotoRegister(){
				this.navigatorTo("/pages/login/signup")
			},
			
			toFindP(){
				this.navigatorTo("/pages/login/signup?status=2&&phone="+this.info.username)
			}
        },
		onLoad(opt) {
			this.loginType=opt.loginType||0
		},
		onShow() {
			this.initTimeset()
		},
		beforeDestroy() {
			this.timeSum=120
			uni.setStorageSync(Window.codeTime,120)
		},
    }
</script>
<style lang='scss'>
    .login{
		background-color: #fff;
		height: 100%;
		overflow: auto;
		padding: 0 40upx;
		
		.login-logo-box{
			text-align: center;
			margin-top: -70upx;
			image{
				/* width: 100%; */
				width: 340upx;
				height:416upx;
				margin: 180upx 0;
			}
		}
		.input-box{
			.input-item{
				display: flex;
				padding: 16upx 0;
				width: 100%;
				margin: 0 auto 10upx;
				border-bottom: 1upx solid #eee;
				
				image{
					width: 40upx;
					height: 40upx;
					margin-right: 10upx;
					transform: translateY(2px);
				}
				input{
					flex: 1;
				}
				button{
					font-size: 28upx;
					padding: 0 10upx;
				}
			}
		}
		.logo-type{
			margin: 30upx 0
		}
		
		.to-register{
			text-align: center;
			margin-top: 80upx;
			color: #999999;
			font-size: 32upx;
		}
	}
	
	.check-btn{
		padding: 0 10upx!important;
		font-size: 28upx!important;
		line-height: 55upx;
		height: 55upx;
		box-sizing: border-box;
	}
</style>