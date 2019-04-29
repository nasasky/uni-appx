<template>
	<view class='quate-cancel'>
		<quate-unit></quate-unit>
		<quate-num></quate-num>
		<view class="quate-cancel-table">
			<text>求购内容：</text>
			<text class="fr">下载清单</text>
		</view>
		<quate-table></quate-table>
		
		<view class="quate-cancel-table">
			<text>我的报价：</text>
			<text class="fr">下载清单</text>
		</view>
		
		<quate-form :formModel="formModel"></quate-form>
		
		<view class="quate-cancel-btn-box">
			<button v-for="(btn,index) in btns" :key="index" :class="btn.classList" type="primary">{{btn.label}}</button>
		</view>
	</view>
</template>

<script>
	import quateUnit from '@/components/myUnits/quate/quateUnit.vue'
	import quateNum from '@/components/myUnits/common/unitHead.vue'
	import quateTable from '@/components/myUnits/common/mytable.vue'
	import quateForm from '@/components/myUnits/common/myForm.vue'
	export default {
		components:{quateUnit,quateNum,quateTable,quateForm},
		data() {
			var btns = [
				{classList:"bc-blue",label:"报价"},
				{classList:"bc-red",label:"拒绝报价"}
			]
			var formModel=[
				{label:"商品总价",queueHead:"￥",type:"label"},
				{label:"运费",queueHead:"￥",type:"label"},
				{label:"税点",queueFoot:"%",type:"label"},
				{label:"税费",queueHead:"￥",type:"label"},
			]
			return {
				btns:[],
				formModel,
			}
		},
		methods: {

		}
	}
</script>
<style lang='scss'>
	@import '@/static/css/st_mixin.scss';
	
	.quate-cancel {
		overflow: auto;
		@include my-box(0.1upx 0 0 0,calc(100% - 88.1upx));
		
		&-table{
			height: 80upx;
			line-height: 80upx;
			padding: 0 20upx;
			background-color: #ffffff;
			border-bottom: 1upx solid #f5f5f5;
			font-size: 32upx;
			
			.fr{
				color: #3682FF;
			}
		}
		&-btn-box{
			position: absolute;
			bottom: 0;
			height: 88upx;
			display: flex;
			width: 100%;
			
			button{
				border-radius: 0;
				height: 88upx;
				line-height: 88upx;
				flex: 1;
				font-size: $fontSize;
			}
			.bc-red{
				background-color: red;
			}
			button:after{
				border: none;
				color: inherit
			}
		}
	}
	.quate-cancel.height100{
		height: 100%
	}
</style>
