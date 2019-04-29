<template>
	<view>
		<view class="activity">
			<view class="activity-item" v-for="(item,index) in list" :key="index" @click="toPeizhi">
				<view class="dingwei">
					进行中
				</view>
				<view class="imgBox">
					<image :src="item.author_avatar" mode=""></image>

				</view>
				<view class="content">
					<view class="top">
						<view class="title">
							大类资产配置
						</view>
						<view class="time">
							2018-1-20
						</view>
					</view>
					<view class="mid twoLines">
						大类资产配置大类资产配置大类资产配置大类资产配置大类资产配置大类资产配置大类资产配置
					</view>
					<view class="bot">

						<view class="iconfont">&#xe60c;</view>
						<view class="address">{{item.column_name}}</view>
					</view>
				</view>


			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			};
		},
		onLoad: function() {
			uni.showLoading()
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.list = res.data
					console.log(res);
					uni.hideLoading()
				},
				fail: () => {},
				complete: () => {}
			});
		},methods:{
			toPeizhi(){
				uni.navigateTo({
					url: 'peizhi/zcpeizhi',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	page {
		background: #2c2a29;
	}

	.activity {
		padding: 30upx 30upx 0;
	}

	.activity-item {
		display: flex;
		flex-direction: column;
		background: #fff;
		margin-bottom: 30upx;
		border-radius: 10px;
		position: relative;
	}

	.activity-description {
		width: 70%;
		padding: 0 20upx;
	}

	.imgBox,
	.imgBox image {
		width: 100%;
		height: 320upx;
		border-radius: 10px 10px 0 0;
	}

	.content {
		padding: 30upx;
		display: flex;
		flex-direction: column;
		align-items: center;

	}

	.top {
		width: 100%;
		height: 40upx;
		line-height: 40upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

	}

	.title {
		color: #cb9359;
		border: 1px solid #cb9359;
		padding: 0 18upx;
		border-radius: 10px;
	}

	.time {
		color: #999999
	}

	.mid {
		margin: 10upx 0;
		line-height: 36upx;
		color: #666666;
		
	}

	.bot {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		line-height: 50upx;
		color: #999999;

	}

	.bot view {
		margin-right: 10upx;
	}

	.dingwei {
		position: absolute;
		right: 20upx;
		top:20upx;
		padding:4upx 24upx;
		border-radius: 25px;
		background: #cb9359;
		font-size: 11px;
		
		color: white;
		line-height: 50upx;

	}
</style>
