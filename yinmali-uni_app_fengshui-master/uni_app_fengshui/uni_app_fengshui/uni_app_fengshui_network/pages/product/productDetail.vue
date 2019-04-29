<template>
	<view class='product-detail'>
		<view class="product-detail-info" v-for="(item0,index0) in modelData" :key="index0">
			<text class="title">{{item0.title}}：</text>
			<view v-if="item0.type==='label'" v-for="(item1,index1) in item0.list" :key="index1" class="product-detail-info-item">
				{{item1.label}}：
			</view>
			
			<view v-if="item0.type==='img'" class="imgs-box">
				<image v-for="(item,index2) in 4" :key="index2" :src="img" mode=""></image>
			</view>
			
			<view v-if="item0.type==='richtext'" class="rich-text">
				<rich-text nodes="asdfasdf12313"></rich-text>
			</view>
		</view>
		
		<view class="btn-box pa">
			<button type="primary" class="bc-red">上架</button>
		</view>
	</view>
</template>

<script>
	import myBtn from '@/components/myUnits/common/myBtn.vue'
	export default {
		components:{myBtn},
		data() {
			return {
				modelData:[
					{
						title:"商品信息",type:"label",list:[
							{label:"商品编号"},
							{label:"商品状态"},
							{label:"商品名称"},
							{label:"品名"},
							{label:"材质"},
							{label:"特性"},
							{label:"运费"},
							{label:"税点"},
							{label:"税费"},
							{label:"销量"},
						],
					},{
						title:"商品参数",type:"label",list:[
							{label:"商品编号"},
							{label:"商品状态"},
							{label:"商品名称"},
						]
					},{
						title:"商品图片",type:"img",
					},{
						title:"商品介绍",type:"richtext"
					}
				],
				
				img:require('@/static/imgs/pic.png')
			}
		},
		methods: {

		},
		created() {

		},
	}
</script>
<style lang='scss'>
	@import "@/static/css/st_mixin.scss";
	
	.product-detail {
		@include my-box(0.1upx 0 0 0,calc(100% - 88.1upx));
		overflow: auto;
		
		&-info{
			padding: 10upx 30upx;
			background-color: #ffffff;
			margin: 20upx 0;
			
			.title{
				font-size: 32upx;
				color: #333333;
				display: block;
				line-height: 60upx;
				background-color: #ffffff;
			}
			&-item{
				color: #999;
				line-height: 60upx;
				font-size: 32upx;
			}
			.imgs-box{
				overflow-x: auto;
				padding: 20upx 0;
				
			}
			image{
				width: 150upx;
				height: 150upx;
				margin-right: 20upx
			}
			.rich-text{
				padding-bottom: 100upx;
			}
		}
		.btn-box{
			width: 100%;
			height: 88upx;
			bottom: 0;
			
			button{
				border-radius: 0;
				font-size: 28upx;
				line-height: 88upx;
			}
			button:after{
				border: none;
			}
			.bc-red{
				background-color: red;
			}
		}
	}
</style>
