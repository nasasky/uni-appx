<template>
	<view class='my-form'>
		<view v-for="(item,index) in formModel" :key="index" class="my-form-item" @click.stop="doClick(item)">
			<text class="my-form-item-label" v-if="item.label">{{item.label}}</text>
			
			<view :class="'my-form-item-content '+ (item.clickF?'active':'')">
				<image v-if="item.clickF" :src="arrowRight" mode="" class="arrow-right fr"></image>
				
				<image v-if="item.type==='img'" :src="formatInfo[item.prop]||defaultImg" mode="" class="pic fr"></image>
				<text v-else-if="item.type==='label'" :class="'label fr '+ item.classList">{{formatInfo[item.prop]||item.defaultV}}</text>
				
				<input v-else-if="item.type==='input'" class="input" :type="item.typeInput||'text'" :placeholder="'请输入'+item.label" :data-prop="item.prop" :value="formatInfo[item.prop]" @input="doSwitch" />
				
				<view v-else-if="item.type==='address'" class="address">
					<text class="fr">{{formatInfo[item.prop]}}</text>
				</view>
				<view v-else-if="item.type==='switch'" class="switch-box">
					<switch :checked="formatInfo[item.prop]" :data-prop="item.prop" @change="doSwitch" />
				</view>
			</view>
		</view>
		
		<address-select @onConfirm="confirmAddress" :pickerValueString="info.address"></address-select>
	</view>
</template>

<script>
	import addressSelect from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components:{addressSelect},
		props:{
			formModel:{
				type:Array,
				default:function(){
					return [
						{prop:"",type:"img",label:"照片",clickF:"test",},
						{prop:"",type:"label",label:"手机号",defaultV:"12345679811"},
						{prop:"",type:"label",label:"真实姓名",defaultV:"请认证",classList:"has-value",clickF:"test"},
						{prop:"",type:"input",label:"企业名称",typeInput:"text"},
						{prop:"",type:"address",label:"店铺地址",}
					]
				}
			},
			info:{
				type:Object,
				default:function(){
					return {
						address:"北京市-市辖区-东城区"
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
				defaultImg:require('@/static/imgs/pic.png'),
				arrowRight:require('@/static/imgs/myCenter/icon15.png')
			}
		},
		methods: {
			/**
			 * @name 执行点击
			 */
			doClick(item){
				if(item.clickF)this.$emit(item.clickF,item)
			},
			
			doSwitch(event){
				this.info[event.target.dataset.prop]=event.detail.value
			},
			
			/**
			 * @name 地址确认
			 */
			confirmAddress(val){
				this.info.address=val.label
			}
		}
	}
</script>
<style lang='scss'>
	.my-form {
		font-size: 28upx;
		color: #999;
		background-color: #fff;
		
		&-item{
			height: 90upx;
			border-bottom: 1upx solid #f5f5f5;
			padding: 0 30upx;
			display: flex;
			
			&-label{
				line-height: 90upx;
				color: #5a5a5a;
				margin-right: 10upx;
			}
			
			&-content{
				flex: 1;
				
				.arrow-right{
					width: 14upx;
					height: 24upx;
					margin: 33upx 0 33upx 20upx;
				}
				.pic{
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
					margin: 5upx 0;
				}
				.label{
					line-height: 90upx;
					color: #6a6a6a;
				}
				.label.has-value{
					color: #D3D3D3;
				}
				
				.input{
					margin: 19upx 0;
					text-align: right;
				}
				.address{
					line-height: 90upx;
				}
				.switch-box{
					float: right;
					margin: 13upx 0;
				}
			}
		}
		.active:active{
			opacity: .8;
		}
	}
</style>
