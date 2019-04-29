<template>
	<view class="my-signup-page">
		<view class="my-form-area">
			<form style="width: 100%;">
				<view v-for="(item, index) in forms" :key="index" class="my-form-area__item">
					
					<input :value="info[item.field]" :placeholder="item.placeholder" :type="item.type" class="my-form-area__item--input" :data-prop="item.field"  @input="onKeyInputH5" />
					
					<button v-if="index==0" type="primary" size="mini" @click="getCheckCode" :disabled="timeSum<120">获取验证码{{formatTime}}</button>
				</view>

				<view v-if="isFindP==0" class="my-form-area__item my-form-area__link">
					<label>
						<view class="my-form-area__link--info" @click="agree">
							<image :src="formaltCheck" mode=""></image>
							<view>
								<text>注册即代表同意</text>
								<text class="is-link" @click.stop="showAgreement">《风水网平台服务协议》</text>
							</view>
						</view>
					</label>
				</view>

				<view class="my-form-area__btm">
					<button type="primary" @click="submit">{{isFindP==2?"找回密码":isFindP==3?"修改密码":"注册"}}</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions,
		mapGetters,
		mapMutations
	} from 'vuex'

	const forms = [{
			label: '手机号',
			field: 'phone',
			placeholder: '请编辑您的手机号',
			type: 'number'
		},
		{
			label: '验证码',
			field: 'yards',
			placeholder: '请输入验证码',
			type: 'number'
		},
		{
			label: '密码',
			field: 'password',
			placeholder: '请设置您的密码(10-16位)',
			type: 'password'
		},
		{
			label: '确认密码',
			field: 'checkpwd',
			placeholder: '请确认密码',
			type: 'password'
		},
	]
	
	import {phone} from '@/static/js/regExp.js'
	export default {
		computed: {
			formaltCheck(){
				return [require('@/static/imgs/choose.png'),require('@/static/imgs/checked_active.png')][this.checked===true?1:0]
			},
			formatTime(){
				return this.timeSum<120?`(${this.timeSum}s)`:""
			}
		},
		data() {
			return {
				forms,
				info: {
					phone: ""
				},
				checked:true,//true 同意协议
				
				isFindP:0,
				
				timeset:null,
				timeSum:120,
			}
		},
		onLoad(opt) {
			this.isFindP=opt.status
			uni.setNavigationBarTitle({
				title:opt.status==2?"找回密码":opt.status==3?"修改密码":"注册"
			})
			this.info.phone=opt.phone
		},
		methods: {
			agree(){
				this.checked=!this.checked
			},
			
			/**
			 * @name 查看协议
			 */
			showAgreement(){
				this.showModel({
					content:"我是协议内容",
					showCancel:false,
					hideToast:true
				})
			},
			
			/**
			 * @name 获取输入框内容
			 */
			onKeyInputH5(event){
				this.info[event.target.dataset.prop]=event.detail.value;
			},
			
			/**
			 * @name 获取验证码
			 */
			getCheckCode(){
				if(!phone.test(this.info.phone)){
					this.showToast({
						msg:"手机号格式错误",
						status:"2"
					})
					return
				}
				this.setTime()
				this.apiPost("/iuser/getSMS.do",{phone:this.info.phone},true)
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
				if(time<this.timeSum){
					this.timeSum=time
					this.setTime()
				}
			},
			
			/**
			 * @name 注册或者找回密码
			 */
			submit(){
				let params = {...this.info}
				if(params.password)params.password.replace(/\s/g,"")
				if(!params.yards){
					this.showToast({msg:"验证码不能为空",status:2})
					return
				}else if(!params.password){
					this.showToast({msg:"密码不能为空",status:2})
					return
				}else if(params.password!==params.checkpwd){
					this.showToast({msg:"两次密码不一致",status:2})
					return
				}else if(!/^\w{9,16}$/g.test(params.password)){
					this.showModel({content:"密码不规范（9-16位，由字母，数字，下划线组成）",showCancel:false,hideToast:true})
					return
				}else if(!this.checked){
					this.showToast({msg:"请同意协议",status:2})
					return
				}
				
				this.apiPost(["/iuser/register.do","/iuser/updatePwd.do"][this.isFindP===false?0:1],params).then(res=>{
					if(res.status==0){
						setTimeout(()=>{
							this.navigatorTo("/pages/login/phone?loginType=1","3")
						},600)
					}
				})
			}
		},
		onShow() {
			this.initTimeset()
		},
		beforeDestroy() {
			clearInterval(this.timeset)
			this.timeSum=120;
			uni.setStorageSync(Window.codeTime,120)
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../static/css/mixin.scss';

	@include b(signup-page) {
		height: inherit;
		padding: 60upx 40upx;
		box-sizing: border-box;

		@include b(form-area) {
			width: inherit;
			height: inherit;
			@include flex($dir: column, $align: flex-start);

			@include e(item) {
				@include flex($align: center);
				width: inherit;
				height: 100upx;
				border-bottom: $border-default;

				@include m(input) {
					flex: 1;
					padding-right: 10upx;
					box-sizing: border-box;
				}
			}

			@include e(link) {
				border: none;

				@include m(info) {
					@include flex;
					font-size: 24upx;

					.is-link {
						color: $uni-color-primary;
					}
				}
			}

			@include e(btm) {
				margin-top: 70upx;
			}
		}
	}

	.my-form-area__btm button {
		border-radius: 0;
	}

	button::after {
		border: none;
	}
	.my-form-area__link{
		image{
			width: 30upx;
			height: 30upx;
			margin-right: 10upx;
		}
	}
</style>
