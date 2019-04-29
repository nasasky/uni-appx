<template>
	<view class="serach">
		<view class="content" :style="{'border-radius':radius+'px'}">
			<!-- HM修改 增加进入输入状态的点击范围 -->
			<view class="content-box" :class="mode === 2?'center':''" @click="getFocus">
				<text class="icon-sousuo iconfont"></text>
				<!-- HM修改 增加placeholder input confirm-type confirm-->
				<input  :placeholder="placeholder"  @input="inputChange" confirm-type="search" @confirm="triggerConfirm" class="input" :class="{'center':!active && mode === 2}" :focus="isFocus" v-model="inputVal" @focus="focus" @blur="blur"/>
				<!-- <view v-if="!active && mode === 2" class="input sub" @click="getFocus">请输入搜索内容</view> -->
				<!-- HM修改 @click换成@click.stop阻止冒泡 -->
				<text v-if="isDelShow" class="icon icon-del icon-close iconfont"  @click.stop="clear"></text>
			</view>
			<view v-show="(active&&show&&button === 'inside')||(isDelShow && button === 'inside')" class="serachBtn" @click="search">
				搜索
			</view>
		</view>
		<view  v-if="button === 'outside'" class="button" :class="(show||active)?'active':''" @click="search">
			<view class="button-item">{{!show?searchName:'搜索'}}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		mode: {
			value: Number,
			default: 1
		},
		//HM修改 定义默认搜索关键词(水印文字)
		placeholder:{
			value: String,
			default: '请输入搜索内容'
		},
		value: {
			type: String,
			default:""
		},
		button: {
			value: String,
			default: 'outside'
		},
		show: {
			value: Boolean,
			default: true
		},
		radius: {
			value: String,
			default: 60
		}
	},
	data() {
		return {
			active: false,
			inputVal: '',
			searchName: '取消',
			isDelShow: false,
			isFocus: false
		};
	},
	methods: {
		//HM修改 触发组件confirm事件
		triggerConfirm(){
			this.$emit('confirm', false);
		},
		//HM修改 触发组件input事件
		inputChange(event){
			var keyword = event.detail.value;
			this.$emit('input', keyword);
			if (this.inputVal) {
				this.isDelShow = true;
			}
		},
		focus() {
			this.active = true;
			//HM修改 增加获取焦点判断
			if (this.inputVal) {
				// this.isDelShow = true;
			}
		},
		blur() {
			this.isFocus = false;
			if (!this.inputVal) {
				this.active = false;
			}
		},
		clear() {
			//HM修改 收起键盘
			uni.hideKeyboard();
			this.isFocus = false;
			this.inputVal = '';
			this.active = false;
			//HM修改 清空内容时候触发组件input
			this.$emit('input', '');
			//this.$emit('search', '');//HM修改 清空内容时候不进行搜索
			
		},
		getFocus() {
			this.isFocus = true;
		},
		search() {
			//HM修改 增加点击取消时候退出输入状态，内容为空时，输入默认关键字
			if (!this.inputVal) {
				if(!this.show&&this.searchName == '取消'){
					uni.hideKeyboard();
					this.isFocus = false;
					this.active = false;
					return;
				}
			}
			this.$emit('search', this.inputVal?this.inputVal:"");
		}
	},
	watch: {
		inputVal(newVal) {
			if (newVal) {
				this.searchName = '搜索';
				//this.isDelShow = true; //HM修改 直接点击页面预设关键字样式异常，注销
			} else {
				this.searchName = '取消';
				this.isDelShow = false;
			}
		},
		//HM修改 双向绑定
		value(val) {
			this.inputVal = val;
		},
	}
};
</script>

<style lang="scss" scoped>
@import './reset.scss';

.serach {
	display: flex;
	width: 100%;
	//border-bottom: 1px #f5f5f5 solid; //HM修改 去掉边框
	box-sizing: border-box;
	font-size: $uni-font-size-base;
	.content {
		display: flex;
		align-items: center;
		width: 100%;
		height: 60upx;
		//border: 1px #ccc solid; //HM修改 去掉边框
		background: #f5f5f5;
		overflow: hidden;
		transition: all 0.2s linear;
		border-radius: 30px;

		.content-box {
			width: 100%;
			display: flex;
			align-items: center;
			&.center {
				justify-content: center;
			}
			.iconfont {
				padding: 0 15upx;
				vertical-align: middle;
				
			}
			
			.input {
				/* #ifdef APP-PLUS */
					flex: 1;
				/* #endif */ 
				width: 100%;
				max-width: 100%;
				line-height: 60upx;
				height: 60upx;
				font-size: 24upx;
				transition: all 0.2s linear;
				vertical-align: middle;
				&.center {
					width: 200upx;
				}
				&.sub {
					// position: absolute;
					width: auto;
					color: grey;
				}
			}
		}
		.serachBtn {
			height: 100%;
			flex-shrink: 0;
			padding: 0 30upx;
			//HM修改 按钮背景色
			background:linear-gradient(to right,#ff9801,#ff570a);
			//background: $uni-color-success;
			line-height: 60upx;
			color: #fff;
			//border-left: 1px #ccc solid; //HM修改 去掉边框
			transition: all 0.3s;
		}
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex-shrink: 0;
		width: 0;
		transition: all 0.2s linear;
		white-space: nowrap;
		overflow: hidden;
		&.active {
			padding-left: 15upx;
			width: 100upx;
		}
	}
}
</style>
