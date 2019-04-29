<template>
	<view class='my-address' hover-class="active" @click="changeAddress">
		<view class="info">
			<text class="receive-person">收货人：{{address.name}}</text>
			<text class="fr">{{address.phone}}</text>
			<view class="address-box pr">
				<image :src="img" mode=""></image>
				<text>收货地址：{{address.address}}</text>
			</view>
		</view>
		<view class="arrow-right pr" v-if="!hideArrow">
			<my-iconfont classList="iconfont icon-arrow color-999"></my-iconfont>
		</view>
	</view>
</template>

<script>
	export default {
		props:['hideArrow'],
		data() {
			return {
				img:require('@/static/imgs/address.png'),
				address:{}
			}
		},
		methods: {
			getDefaultAddress(){
				let arr = uni.getStorageSync(Window.allAddress)||[]
				this.address = arr.find(val=>val.status==0)
			},
			
			/**
			 * @name 修改地址
			 */
			changeAddress(){
				if(!this.hideArrow)this.navigatorTo("/pages/center/addressM?type=changeAddress")
			}
		},
		created() {
			this.getDefaultAddress()
		},
	}
</script>
<style lang='scss'>
	.my-address {
		font-size: 28upx;
		color: #666666;
		padding: 30upx;
		background-color: #ffffff;
		display: flex;
		
		.receive-person{
			padding-left: 54upx;
			line-height: 50upx
		}
		.address-box{
			image{
				width: 36upx;
				height: 46upx;
				margin-right: 18upx;
				vertical-align: middle;
				float: left;
			}
			text{
				vertical-align: middle;
			}
		}
		.arrow-right{
			width: 60upx;
			vertical-align: middle;
			text-align: center;
		}
		.info{
			vertical-align: middle;
			flex: 1;
		}
	}
</style>
