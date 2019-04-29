<template>
	<view>
		<view class="top">
			<searchTemp class="search"></searchTemp>
		</view>
		<view class="tiaojian">
			<view :class="id==item.id?'active':''" v-for="item in xuanze" :key="item.id" @click="fresh(item.id)">
				{{item.item}}
			</view>
		</view>
		<view class="dingdan-box">
			<view class="dingdan-item">
				<image class="touxiang" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3.1.0-%E6%88%91%E7%9A%84%E8%AE%A2%E5%8D%95-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/tpuxiang.png"
				 mode=""></image>
				<view class="dingdan-right">
					<view class="dingdan-item-left">
						<view class="name">李明</view>
						<view class="product-name">青山盈收33号</view>
						<view class="jiaqian">
							￥260,000.00
						</view>
					</view>
					<view class="dingdan-item-right">
						<view class="is-daoqi weidaoqi">未到期</view>
						<view class="time">2108-10-10</view>
					</view>
				</view>
			
			</view>
			<view class="dingdan-item">
				<image class="touxiang" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3.1.0-%E6%88%91%E7%9A%84%E8%AE%A2%E5%8D%95-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/tpuxiang.png"
				 mode=""></image>
				<view class="dingdan-right">
					<view class="dingdan-item-left">
						<view class="name">李明</view>
						<view class="product-name">青山盈收33号</view>
						<view class="jiaqian">
							￥260,000.00
						</view>
					</view>
					<view class="dingdan-item-right">
						<view class="is-daoqi daoqi">已到期</view>
						<view class="time">2108-10-10</view>
					</view>
				</view>
			
			</view>
			
			<view class="dingdan-item">
				<image class="touxiang" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3.1.0-%E6%88%91%E7%9A%84%E8%AE%A2%E5%8D%95-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/tpuxiang.png"
				 mode=""></image>
				<view class="dingdan-right">
					<view class="dingdan-item-left">
						<view class="name">李明</view>
						<view class="product-name">青山盈收33号</view>
						<view class="jiaqian">
							￥260,000.00
						</view>
					</view>
					<view class="dingdan-item-right">
						<view class="is-daoqi weidaoqi">未到期</view>
						<view class="time">2108-10-10</view>
					</view>
				</view>
			
			</view>
			
		</view>

	</view>
</template>

<script>
	import searchTemp from '../../../components/search-temp.vue'
	export default {
		components: {
			searchTemp
		},
		data() {
			return {
				id: 1,
				xuanze: [{
					item: "交易",
					id: 1
				}, {
					item: "预约",
					id: 2
				}, {
					item: "赎回",
					id: 3
				}]
			};
		},
		methods: {
			fresh(id) {
				this.id = id
			}
		}
	}
</script>

<style>
	.tiaojian {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		height: 40px;
		align-items: center;
		text-align: center;
		justify-content: space-around;
	}

	.tiaojian view {
		line-height: 37px;
		color: rgba(153, 153, 153, 1);

	}

	.tiaojian .active {
		border-bottom: 3px solid #c49c5a;
		color: rgba(196, 156, 90, 1);
	}

	.dingdan-box {

		background: rgb(255, 255, 255);
		padding: 0 30upx;
	}

	.dingdan-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 89px;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}

	.touxiang {
		height: 60px;
		width: 60px;
		margin-right: 30upx;
	}

	.dingdan-right {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;


		flex: 1;
	}

	.name {
		font-size: 16px;
		font-weight:bold;
	}
	.product-name{
		font-size: 12px;
		color: rgba(153,153,153,1);
	}
	.jiaqian {
		
		font-size: 18px;
	}

	.is-daoqi {
		text-align: center;

		border-radius: 22px;
		line-height: 22px;
	}

	.daoqi {
		border: 1px solid rgba(221, 221, 221, 1);
		color: rgba(221, 221, 221, 1);
	}

	.weidaoqi {
		border: 1px solid rgba(196, 156, 90, 1);
		color: rgba(196, 156, 90, 1);
	}

	.time {
		color: rgba(153, 153, 153, 1);
		line-height: 30px;
	}
</style>
