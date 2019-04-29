<template>
	<view class='position' hover-class="active" @click="doClick">
		<image :src="icon26" mode=""></image>
		<text>{{label}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			label:{
				type:String,
				default:"定位到当前位置"
			}
		},
		data() {
			return {
				icon26:require('@/static/imgs/myCenter/icon26.png'),
				position:""
			}
		},
		methods: {
			doClick(){
				this.$emit('click')
				var that = this
				uni.chooseLocation({
					success: function (res) {
						that.$emit("position",res)
					},
					fail(err) {
						console.log(err)
					}
				})
			},
		}
	}
</script>
<style lang='scss'>
	.position {
		background-color: #fff;
		font-size: 30upx;
		color: #2979FF;
		line-height: 88upx;
		text-align: center;
		
		image{
			width: 37upx;
			height: 37upx;
			margin-right: 20upx
		}
		image,text{
			vertical-align: middle;
		}
	}
</style>
