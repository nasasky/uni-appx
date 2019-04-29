<template>
	<view class="my-numbox">
		<view @click="doReduce">-</view>
		<input class="num-value" type="number" :value="inputValue" @input="doInput">
		<view @click="doAdd">+</view>
	</view>
</template>
<script>
	export default {
		name: 'uni-number-box',
		props: {
			value: {
				type: [Number,String],
				default: 1
			},
		},
		data() {
			return {
				inputValue: this.value
			}
		},
		watch: {
			value(val) {
				this.inputValue = val;
			},
			inputValue(val) {
				this.$emit('change', val);
			}
		},
		methods: {
			doAdd(){
				this.inputValue++
			},
			doReduce(){
				if(this.inputValue<2)return
				this.inputValue--
			},
			doInput(event){
				this.inputValue=event.detail.value<1?1:event.detail.value
			}
		}
	}
</script>
<style lang="scss">
	$height:70upx;
	$lineHeght:70upx;
	
	.my-numbox{
		margin-top: 15upx;
		display: flex;
		
		input,view{
			width: $height;
			height: $height;
			text-align: center;
			line-height: $lineHeght;
			background-color: #fff;
			box-sizing: border-box;
		}
		view{
			background-color: #f5f5f5;
			border: 1upx solid #ddd;
		}
	}
</style>
