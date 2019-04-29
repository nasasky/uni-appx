<template>
	<view class='my-form'>
		<view v-for="(item,index) in formatModel" :key="index" class="form-item" @click="doClick(item,index)">
			<image v-if="item.icon" :src="item.icon" class="icon-title" mode=""></image>
			<text class="title">{{item.label}}</text>
			
			<text v-if="item.type==='label'" class="fr">{{item.queueHead}} {{info[item.prop]}} {{item.queueFoot}}</text>
			<image v-else-if="item.type==='checkbox'" class="check-img" :src="item.isChecked?(imgs.check_active):(imgs.check)" mode=""></image>
			
			<input v-else-if="item.type==='input'" class="number-input" :type="item.type1" :placeholder="'请输入'+item.label" :value="info[item.prop]" :data-prop="item.prop"  @input="onKeyValueH5" />
			
			<switch class="switch-box" v-else-if="item.type==='switch'" :checked="info[item.prop]" :data-prop="item.prop" @change="doSwitch" />
		</view>
	</view>
</template>

<script>
	export default {
		props:['formModel','info'],
		data() {
			return {
				imgs:{
					check:require('@/static/imgs/choose.png'),
					check_active:require('@/static/imgs/checked_active.png')
				}
			}
		},
		computed:{
			formatModel(){
				return this.formModel || []
			}
		},
		methods:{
			/**
			 * @name 执行点击操作，通常是单选
			 */
			doClick(item,index){
				if(item.checkedChange)item.checkedChange(index)
			},
			
			doSwitch(event){
				this.info[event.target.dataset.prop]=event.detail.value
			},
			
			onKeyValueH5(event){
				this.info[event.target.dataset.prop]=event.detail.value
			},
		}
	}
</script>
<style lang='scss'>
	.my-form {
		padding: 0 30upx;
		background-color: #ffffff;
		font-size: 28upx;
		color: #666666;
		
		.form-item{
			line-height: 88upx;
			/* display: flex; */
			
			.icon-title{
				width: 44upx;
				height: 44upx;
				vertical-align: middle;
				margin-right: 20upx;
			}
			.title{
				vertical-align: middle;
				background: #fff;
				border: none;
				padding-left: 0;
			}
			
			.check-img{
				width: 35upx;
				height: 35upx;
				vertical-align: middle;
				float: right;
				margin: 27.5upx 0
			}
			
			&:nth-of-type(n+2){
				border-top: 1upx solid #f5f5f5;
			}
		}
		.number-input{
			float: right;
			margin:  19upx 0;
			text-align: right;
			flex: 1
		}
		
		.switch-box{
			margin-left: auto;
			float: right
		}
	}
</style>
