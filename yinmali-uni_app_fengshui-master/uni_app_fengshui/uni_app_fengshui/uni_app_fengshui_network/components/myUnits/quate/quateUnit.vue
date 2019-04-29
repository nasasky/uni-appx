<template>
	<view class='quate-unit' @click="gotoDetail">
		<view class="quate-unit-head">
			<image class="quate-unit-head-pic" :src="img" mode=""></image>
			<text>买家名称</text>
			<image class="quate-unit-head-level" :src="icon4" mode=""></image>
			<text class="fr">报价状态</text>
		</view>
		<view class="quate-unit-body">
			<text>时间</text>
			<text class="fr">求购状态</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:['info'],
		data() {
			return {
				img:require('@/static/imgs/pic.png'),
				icon4:require('@/static/imgs/icon_4.png')
			}
		},
		computed:{
			formatInfo(){
				return this.info
			}
		},
		methods: {
			/**
			 * @name 查看详情
			 * @describe 需要判断跳转地址
			 */
			gotoDetail(){
				this.navigatorTo("/pages/orders/quatePrice?id=1")
			}
		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.quate-unit {
		margin: 20upx;
		background-color: #ffffff;
		padding: 20upx;
		box-sizing: border-box;
		border-radius: 10upx;
		font-size: 32upx;
		
		&-head{
			&-pic{
				width: 67upx;
				height: 67upx;
				border-radius: 50%;
				margin-right: 10upx;
				vertical-align: middle;
			}
			text{
				vertical-align: middle;
			}
			&-level{
				width: 26upx;
				height: 24upx;
				vertical-align: middle;
				margin: 0 10upx
			}
			text.fr{
				line-height: 60upx
			}
		}
		
		&-body{
			margin-top: 30upx;
			color: #999999;
		}
	}
</style>
