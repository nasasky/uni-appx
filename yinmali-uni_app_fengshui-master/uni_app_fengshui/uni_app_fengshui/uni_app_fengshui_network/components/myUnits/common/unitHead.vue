<template>
    <view class="unit-head">
    	<text class="ask-num">求购编号：{{formatNum}}</text><text :class="'fr '+ formatClass">{{formatState}}</text>
    </view>
</template>
	
<script>
    export default{
		props:['num','state'],
        data() {
            return {
	
            }
        },
		computed:{
			formatState(){
				return this.state
			},
			formatNum(){
				return this.num&&this.num.slice(0,25)||""
			},
			formatClass(){
				return this.status=="待评价"?"color-red":"color-blue"
			}
		},
        methods:{
	
        },
        created() {
	
        },
    }
</script>
<style lang='scss'>
    .unit-head{
    	padding: 20upx;
    	height: 80upx;
    	box-sizing: border-box;
    	/* border-bottom: 2upx solid #f5f5f5; */
		background-color: #ffffff;
		
		text{
			font-size: 28upx
		}
    	
    }
</style>