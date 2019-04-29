<template>
	<button :class="'submit-btn ' + classList" type="primary" @click="doClick">{{label}}</button>
</template>

<script>
	export default {
		props:{
			label:{
				type:String,
				default:"确认"
			},
			classList:{
				type:String,
				default:""
			}
		},
		
		data() {
			return {

			}
		},
		methods: {
			doClick(){
				this.$emit('click')
			}
		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.submit-btn{
		width: 90%;
		border-radius: 0;
		font-size: 30upx;
		height: 100upx;
		line-height: 100upx;
		margin: 40upx auto;
	}
	.submit-btn::after{
		border: none;
	}
	.width100{
		width: 100%;
		font-size: 36upx;
	}
</style>
