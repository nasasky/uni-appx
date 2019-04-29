<template>
	<view class="">
		<searchTemp></searchTemp>
		<view class="page">

			<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'upx'}">
				<view class="uni-list">
					<block v-for="(list,key) in lists" :key="key" v-if="list.data[0]">
						<view class="uni-list-cell-divider" :id="list.letter">
							{{list.letter}}
						</view>
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list.data" :key="index"
						 :class="list.data.length -1 == index ? 'uni-list-cell-last' : ''">
						 <image class="uni-list-cell-image" :src="item.imageUrl">
						 	
						 </image>
							<view class="uni-list-cell-navigate">
								{{item.name}}
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
			<view class="uni-indexed-list-bar" :class="touchmove ? 'active' : ''" @touchstart="touchStart" @touchmove="touchMove"
			 @touchend="touchEnd" @touchcancel="touchCancel" :style="{top:top+'px'}">
				<text v-for="(list,key) in lists" :key="key" class="uni-indexed-list-text" :class="touchmoveIndex == key ? 'active' : ''"
				 :style="{height:itemHeight + 'px',lineHeight:itemHeight + 'px'}">{{list.letter}}</text>
			</view>
			<view class="uni-indexed-list-alert" v-if="touchmove">
				{{lists[touchmoveIndex].letter}}
			</view>
		</view>

	</view>
</template>

<script>
	import searchTemp from '../../../../components/search-temp.vue'
	var airportDate = require("../../../../common/airport.js");

	export default {
		components: {
			searchTemp
		},
		data() {
			return {
				title: 'grid',
				lists: [{
						"letter": "A",
						"data": [{
							imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
							name:'阿雅'
						},{
							imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
							name:'阿雅'
						},{
							imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
							name:'阿勒泰'
						},{
							imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
							name:'阿克苏'
						},
						{
							imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
							name:'阿克苏'
						}
						]
					}, {
						"letter": "B",
						"data": [
							{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿雅'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿雅'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿勒泰'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿克苏'
							},
							{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿克苏'
							}
						]
					}, {
						"letter": "C",
						"data": [
							{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿雅'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿雅'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿勒泰'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿克苏'
							},
							{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿克苏'
							}
						]
					}, {
						"letter": "D",
						"data": [
							{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿雅'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿雅'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿勒泰'
							},{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿克苏'
							},
							{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿克苏'
							}
						]
					}, {
						"letter": "E",
						"data": [
							{
								imageUrl:'http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.7.1-%E9%80%89%E6%8B%A9%E5%AE%A2%E6%88%B7/android/drawable-xhdpi/touxiang.png',
								name:'阿雅'
							},{
								imageUrl:'',
								name:'阿雅'
							},{
								imageUrl:'',
								name:'阿勒泰'
							},{
								imageUrl:'',
								name:'阿克苏'
							},
							{
								imageUrl:'',
								name:'阿克苏'
							}
						]
					}, {
						"letter": "F",
						"data": [
							{
								imageUrl:'',
								name:'阿雅'
							},{
								imageUrl:'',
								name:'阿雅'
							},{
								imageUrl:'',
								name:'阿勒泰'
							},{
								imageUrl:'',
								name:'阿克苏'
							},
							{
								imageUrl:'',
								name:'阿克苏'
							}
						]
					}, {
						"letter": "G",
						"data": [
							{
								imageUrl:'',
								name:'阿雅'
							},{
								imageUrl:'',
								name:'阿雅'
							},{
								imageUrl:'',
								name:'阿勒泰'
							},{
								imageUrl:'',
								name:'阿克苏'
							},
							{
								imageUrl:'',
								name:'阿克苏'
							}
						]
					}, {
						"letter": "O",
						"data": [{
							imageUrl:'',
							name:'阿雅'
						},{
							imageUrl:'',
							name:'阿雅'
						},{
							imageUrl:'',
							name:'阿勒泰'
						},{
							imageUrl:'',
							name:'阿克苏'
						},
						{
							imageUrl:'',
							name:'阿克苏'
						}]
					}, {
						"letter": "P",
						"data": [
							{
								imageUrl:'',
								name:'阿雅'
							},{
								imageUrl:'',
								name:'阿雅'
							},{
								imageUrl:'',
								name:'阿勒泰'
							},{
								imageUrl:'',
								name:'阿克苏'
							},
							{
								imageUrl:'',
								name:'阿克苏'
							}
						]
					}],
					touchmove: false,
					touchmoveIndex: -1,
					itemHeight: 16,
					winHeight: 0,
					scrollViewId: "A",
					titleHeight: 0,
					top: 92
				}
			},
			onLoad() {
					let winHeight = uni.getSystemInfoSync().windowHeight;
					//this.itemHeight = winHeight / 26;
					this.winHeight = 2 * winHeight - 92;
				},
				methods: {
					touchStart(e) {
						this.touchmove = true;
						let pageY = e.touches[0].pageY;
						console.log(e)
						let index = Math.floor((pageY - this.top) / this.itemHeight);
						console.log(index)
						console.log(this.top)
						let item = this.lists[index];
						if (item) {
							this.scrollViewId = item.letter;
							this.touchmoveIndex = index;
						}
					},
					touchMove(e) {
						let pageY = e.touches[0].pageY;
						let index = Math.floor((pageY - this.top) / this.itemHeight);
						let item = this.lists[index];
						if (item) {
							this.scrollViewId = item.letter;
							this.touchmoveIndex = index;
						}
					},
					touchEnd() {
						this.touchmove = false;
						this.touchmoveIndex = -1;
					},
					touchCancel() {
						this.touchmove = false;
						this.touchmoveIndex = -1;
					}
				}
		}
</script>

<style>
	.page {
		display: flex;
		flex-direction: row;

	}

	.scrollList {
		flex: 1;

	}
	.uni-list-cell:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 0.5px;
    content: '';
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
   background:rgba(244,245,249,1);
}
	.uni-list-cell-divider {
		height: 50upx;
		line-height: 50upx;
		padding: 0 40upx;
		background: rgba(249, 249, 249, 1);
		font-weight: bold;
		color: rgba(0, 0, 0, 1);
		font-size: 15px;
	}

	.uni-indexed-list-bar {
		width: 46upx;

		/* background-color: lightgrey; */
		display: flex;
		flex-direction: column;
		position: absolute;
		right: 0;

	}

	.uni-indexed-list-bar.active {
		background-color: rgb(200, 200, 200);
	}

	.uni-indexed-list-text {
		color: #CB9359;
		;
		font-size: 22upx;
		text-align: center;
	}

	.uni-indexed-list-bar.active .uni-indexed-list-text {
		background-color: rgb(255, 255, 255);
	}

	.uni-indexed-list-text.active,
	.uni-indexed-list-bar.active .uni-indexed-list-text.active {
		background-color: rgb(255, 255, 255);
	}

	.uni-indexed-list-alert {
		position: absolute;
		z-index: 20;
		width: 160upx;
		height: 160upx;
		left: 50%;
		top: 50%;
		margin-left: -80upx;
		margin-top: -80upx;
		border-radius: 80upx;
		text-align: center;
		line-height: 160upx;
		font-size: 70upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.uni-list-cell-image{
		height: 76upx;
		width: 76upx;
		margin-left:28upx ;
	}
	.uni-list-cell-navigate{
		padding: 40upx 30upx;
	}
</style>
