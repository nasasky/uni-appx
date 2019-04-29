<template>
	<view class='my-btn'>
		<button v-for="(btn,index) in formatData" :class="'btn ' + btn.classList" :key="index" plain="true" @click.stop="doClick(btn)">{{btn.label}}</button>
	</view>
</template>

<script>
	export default {
		props:['btns'],
		data() {
			return {
				modelData:[
					{label:"下载清单",hasValue:"1",classList:"color-green",clickName:"doDownload"},
					{label:"购买",hasValue:"2",classList:"color-blue",clickName:"doBuy"},
					{label:"取消求购",hasValue:"3",classList:"color-red",clickName:"doCancel"},
					{label:"取消订单",hasValue:"4",classList:"color-red",clickName:"doDel"},
					{label:"付款",hasValue:"5",classList:"color-blue",clickName:""},
					{label:"确认收货",hasValue:"6",classList:"color-blue",clickName:""},
					{label:"去评价",hasValue:"7",classList:"color-red",clickName:"doEvaluate"}
				],
			}
		},
		computed:{
			/**
			 * @name 有顺序的
			 */
			formatData(){
				let res = []
				let arr = this.btns?this.btns.split(","):[];
				arr.forEach(ele=>{
					res.push(this.modelData.find(val=>val.hasValue==ele))
				})
				return res
			}
		},
		methods: {
			doClick(btn){
				if(btn.clickName)this.$emit(btn.clickName)
			}
		},
		created() {
			
		},
	}
</script>
<style lang='scss'>
	.my-btn {
		height: 60upx;
		top: 50%;
		right: 0;
		position: absolute;
		transform: translateY(-50%);
		box-sizing: border-box;
		
		.btn{
			display: inline-block;
			height: 60upx;
			line-height: 56upx;
			font-size: 24upx;
			border-radius: 50upx;
			margin-right: 20upx;
			width: 150upx;
			padding: 0;
			text-align: center;
		}
		.btn.color-green{
			color:#44A131;
			border-color:#44A131;
		}
		.btn.color-blue{
			color:#3682FF;
			border-color:#3682FF;
		}
		
		.btn.color-red{
			color:#E01212;
			border-color:#E01212;
		}
		
		.btn.button-hover{
			opacity: .8;
		}
	}
</style>
