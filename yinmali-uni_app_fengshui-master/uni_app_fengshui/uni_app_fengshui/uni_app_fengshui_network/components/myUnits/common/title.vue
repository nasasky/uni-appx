<template>
    <view class='title'>
		{{formatTitle}}
    </view>
</template>
	
<script>
    export default{
		props:['title'],
        data() {
            return {
	
            }
        },
		computed:{
			formatTitle(){
				return this.title||""
			}
		}
    }
</script>
<style lang='scss'>
    .title{
		box-sizing: border-box;
		height: 80upx;
		background-color: #ffffff;
		line-height: 80upx;
		padding: 0 20upx;
		border-bottom: 2upx solid #f5f5f5;
	}
</style>