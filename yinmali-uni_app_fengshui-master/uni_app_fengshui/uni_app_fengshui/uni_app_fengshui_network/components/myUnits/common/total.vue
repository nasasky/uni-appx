<template>
	<view class='common-total'>
		<text>
			合计：
			<text class="color-red" v-if="formatMoney>0">￥</text>
			<text class="color-red">{{formatMoney}}</text>
			<text class="color-red" v-if="formatMoney>0">元</text>
		</text>
		<button v-for="(item,index) in formatBtns" :key="index" :class="'btn fr ' + item.classList" @click="doClick(item)">{{item.label}}</button>
	</view>
</template>

<script>
	export default {
		props:['money','btnString'],
		data() {
			return {
				btnModel:[
					{label:'删除求购',hasBtn:"1",clickName:"",classList:"bc-red"},
					{label:'购买',hasBtn:"1",clickName:"",classList:"bc-green"},
					{label:'取消求购',hasBtn:"2",clickName:"",classList:"bc-red"},
					{label:'购买',hasBtn:"3",clickName:"doBuy",classList:"bc-red"},
					{label:'报价',hasBtn:"4",clickName:"",classList:"bc-blue"},
				]
			}
		},
		computed:{
			formatMoney(){
				return this.money || "暂无报价"
			},
			
			formatBtns(){
				let arr= []
				this.btnModel.forEach(ele=>{
					if((this.btnString || "1").indexOf(ele.hasBtn)>-1){
						arr.push(ele)
					}
				})
				return arr
			}
		},
		methods: {
			doClick(item){
				if(item.clickName)this.$emit(item.clickName,this.money)
			}
		},
		created() {

		},
	}
</script>
<style lang='scss'>
	.common-total {
		width: 100%;
		height: 88upx;
		/* position: absolute; */
		margin-top: auto;
		
		bottom: 0;
		font-size: 28upx;
		line-height: 88upx;
		background-color: #ffffff;
		padding-left: 20upx;
		box-sizing: border-box;
		box-shadow: 1px 1px 10px 1px #cccccc;
		
		.btn{
			padding: 0;
			font-size: 28upx;
			color: #ffffff;
			line-height: 88upx;
			width: 200upx;
			border-radius: 0;
			border: none;
			
			&:after{
				border-radius: 0;
				border: none;
			}
			&:active{
				opacity: .8
			}
		}
	}
</style>
