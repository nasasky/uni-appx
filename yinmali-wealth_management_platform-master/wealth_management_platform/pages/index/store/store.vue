<template>
	<view class="">
		<view class="box" v-show="flag==0">
			<view class="top">
				
				<!-- <uni-nav-bar color="#333333"  fixed="true" shadow="false" right-icon="scan" left-icon="person">
					<block slot="left">
						<view class="user">
							<label class="iconfont">&#xe60d;</label>
						</view>
					</block> 
					<view class="input-view">
						<label class="iconfont">&#xe65a;</label>
						<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="搜索商品" />
					</view>
				</uni-nav-bar> -->
				<swiperTemp :imgUrl="imgUrl"></swiperTemp>
			</view>
			
			<view class="lists">
				<view class="list-item">
					<image src="https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480" mode=""></image>
					<text>数码</text>
				</view>
				<view class="list-item">
					<image src="https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480" mode=""></image>
					<text>家居</text>
				</view>
				<view class="list-item">
					<image src="https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480" mode=""></image>
					<text>厨房</text>
				</view>
				<view class="list-item">
					<image src="https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480" mode=""></image>
					<text>箱包</text>
				</view>
				<view class="list-item"> 
					<image src="https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480" mode=""></image>
					<text>家电</text>
				</view>
				<view class="list-item">
					<image src="https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480" mode=""></image>
					<text>户外</text>
				</view>
				<view class="list-item">
					<image src="https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480" mode=""></image>
					<text>家纺</text>
				</view>
				<view class="list-item"> 
					<image src="https://pic.36krcnd.com/avatar/201611/03080626/idk0r5xfbpwoobcj.jpg!480" mode=""></image>
					<text>配饰</text>
				</view>
			</view>
			<view class="goods-list">
				<view class="list-title">
					<label class="iconfont jingxuan">&#xe63b;</label>精选产品
				</view>
				<view class="goods-items">
					<product-list></product-list>
						
				</view>
			</view>
		
		</view>
		<view class="box2" v-show="flag==1">
			
			<searchTemp></searchTemp>
			
			
			<leftCategory :height="height"></leftCategory>
			
		</view>
		<view class="box3" v-show="flag==2">
			2
		</view>
		<view class="box4" v-show="flag==3">
			3
		</view>
			<view class="bottomTab">
				<view class="index item " :class="{active:index==clickindex}" v-for="(item,index) in bottomTab" @click="tab(index)">
					<view class="imgBox">
						<image :src="index==clickindex?item.selectImg:item.imgUrl" mode="aspectFit"></image>
					</view>
					<view class="title" :class="{active:index==clickindex}">
						{{item.name}}
					</view>
				</view>
				<!-- <view class="class item">
					<view class="iconfont">
						&#xe600;
					</view>
					<view class="title">
						分类
					</view>
					
				</view>
				<view class="car item">
					<view class="iconfont">
						&#xe603;
					</view>
					<view class="title">
						购物车
					</view>
					
				</view>
				<view class="my item">
					<view class="iconfont">
						&#xe604;
					</view>
					<view class="title">
						我的
					</view>
					
				</view>
			--></view>
		
	</view>
	
</template>

<script>
	import uniNavBar from '../../../components/uni-nav-bar.vue';
	import swiperTemp from '../../../components/swiper-temp.vue';
	import searchTemp from '../../../components/search-temp.vue';
	import uniIcon from '../../../components/uni-icon.vue';
	import productList from '../../../components/product-list/product-list.vue';
	import leftCategory from '../../../components/left-category/left-category.vue';
	export default {
		components:{
			swiperTemp,
		
			searchTemp,
			uniIcon,
			productList,
			leftCategory
		},
		data() {
			return {
				imgUrl: [{
						"id": 1,
						"url": "https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading"
					},
					{
						"id": 2,
						"url": "https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading"
					},
					{
						"id": 3,
						"url": "https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading"
					}
				],
				clickindex:'0',
				flag:0,
				height:0,
				bottomTab:[{
					id:1,
					imgUrl:"../../../static/image/indexImg/shangcheng/shouyemeren.png",
					selectImg:"../../../static/image/indexImg/shangcheng/shouyeanxia.png",
					name:'首页'
					
				},{
					id:2,
					imgUrl:"../../../static/image/indexImg/shangcheng/fenleimeren.png",
					selectImg:"../../../static/image/indexImg/shangcheng/fenleianxia.png",	
					name:'分类'
					
				},{
					id:1,
					imgUrl:"../../../static/image/indexImg/shangcheng/gouwuchemeren.png",
					selectImg:"../../../static/image/indexImg/shangcheng/gouwucheanxia.png",
					name:'购物车'
					
				},{
					id:1,
					imgUrl:"../../../static/image/indexImg/shangcheng/wodemeren.png",
					selectImg:"../../../static/image/indexImg/shangcheng/wodeanxia.png",
					name:'我的'
					
				}]
			};
		},
		methods:{
			tab(index){
				this.flag=index
				this.clickindex=index
			}
		},
		onLoad(){
			this.height = uni.getSystemInfoSync().windowHeight-49;
			console.log(uni.getSystemInfoSync().windowHeight) 
		}
		
		
	}
</script>

<style>
	
.box,.box2,.box3,.box4{
	padding-bottom: 100upx;
	
}
.input-placeholder{
	color: #007AFF;
}
.user{
	padding: 0 20upx;
	color: #999999;
}
/* .input-view {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	align-items: center;
	display: flex;
	flex-direction: row;
	background-color:rgb(255,255,255);
	height: 56upx;
	border-radius: 15px;
	padding: 0 10px;
	width: 540upx			
	}

.input {
	
	padding: 15upx 10upx;
}
 */

.lists{
	background: #fff;
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin-bottom: 20upx;
	padding: 32upx 0 0;
}
.list-item{
	flex: 25%;
	text-align: center;
	padding-bottom: 20upx;
	
}
.list-item image{
	
	height: 90upx;
	width: 90upx;
	border-radius: 50%;
}
.list-item text{
	display: block;

	line-height: 46upx;
}
.list-title{
	display: flex;
	flex-direction: row;
	padding: 0 30upx;
	align-items: center;
	justify-content: center;
	font-size: 15px;
}
.jingxuan{
	color:rgb(200,166,91);
	font-size: 40upx;
	margin-right: 12upx;
}
.goods-list{
	
}
.goods-items{
	margin-top: 20upx;
}
.goods-item{
	
	background: #fff;
	
}

.bottomTab{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0; 
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	background: rgb(255,255,255);
	padding-top: 6upx   ;
}
.bottomTab .imgBox{
	height: 44upx;
	width: 44upx;
	margin-bottom: 4upx;
}
.bottomTab .imgBox image{
	height: 44upx;
	width: 44upx;
	
}
.bottomTab .item{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.bottomTab .title{
	font-weight:500;
	color:rgba(153,153,153,1);
	margin: 0 0 12upx;
	font-size: 9px;
}
.bottomTab .active{
	color: rgba(196,156,90,1) 
}



</style>
