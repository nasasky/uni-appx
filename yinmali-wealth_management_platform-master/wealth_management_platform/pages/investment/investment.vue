<template>
	<view>
		<view class="touziBox">
			<view class="touziItem" v-for="item in lists" :key="item.id">
				<image :src="item.url" mode=""></image>
				<view class="title uni-ellipsis">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				lists:[{
					id:'1',
					url:'../../static/image/invest/u762.png',
					title:'智能投顾'
				},{
					id:'2',
					url:'../../static/image/invest/u761.png',
					title:'房产理财计算器'
				},{
					id:'3',
					url:'../../static/image/invest/u763.png',
					title:'一键定制养老方案'
				},
				{
					id:'4',
					url:'../../static/image/invest/u761.png',
					title:'子女教育理财规划'
				},{
					id:'5',
					url:'../../static/image/invest/u763.png',
					title:'其他计算器'
				}]
			}
		}
	}
</script>

<style>
.touziBox{
	background: #FFFFFF;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.touziItem{
	width: 210upx;
	text-align: center;
	padding: 20upx;
}
.touziItem image{
	height: 160upx;
	width: 160upx;
}
.title{
	font-size: 26upx;
	line-height: 40upx;
}
</style>
