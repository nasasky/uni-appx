<template>
    <view class="unit-foot pr">
    	<text class="color-999">{{time||"时间"}}</text>
		  <my-btn :btns="butString" @doDel="doDel" @doCancel="doCancel" @doEvaluate="doEvaluate"></my-btn>
    </view>
</template>
	
<script>
	import myBtn from './myBtn'
    export default{
		props:['time',"butString"],
		components:{myBtn},
        data() {
            return {
	
            }
        },
        methods:{
			doDel(){
				var that =this
				this.showModel({
					content:"取消订单后，将无法找回订单信息。请确认是否删除订单。",
					callback:that.sureDel
				})
			},
			doCancel(){
				var that =this
				this.showModel({
					content:"取消求购后，将无法找回求购信息。请确认是否取消求购。",
					callback:that.sureCancel
				})
			},
			
			/**
			 * @name 去评价
			 */
			doEvaluate(){
				this.$emit("sureEvaluate")
			},
			
			sureCancel(){
				this.$emit("sureCancel")
			},
			sureDel(){
				this.$emit("sureDel")
			}
        },
        created() {
	
        },
    }
</script>
<style lang='scss'>
    .unit-foot{
    	height: 88upx;
    	padding: 0 20upx;
    	border-top: 1upx solid #f5f5f5;
    	border-bottom: none;
    	line-height: 88upx;
    
    }
</style>