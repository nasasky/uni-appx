<template>
	<view>
		<searchTemp></searchTemp>
		<view class="block-box">
			<view class="block">
				<view class="block-title-box">
					<view class="block-title">
						<view class="text">
							我的组合
						</view>
						<view class="uni-icon-more" @tap="toZixun">
							<view class="more">
								更多
							</view>
							<label class="iconfont arrow">&#xe640;</label>
							</view>
					</view>
		
				</view>
		
			</view>
			<newsListTemp :newsList="lists"></newsListTemp>
		</view>
	</view>
</template>

<script>
	import searchTemp from "../../../../components/search-temp.vue";
	import newsListTemp from "../../../../components/newsList-temp.vue"
	export default {
		components:{
			searchTemp,
			newsListTemp
		},
		data() {
			return {
				lists: [{
				
						"id": 75408,
						"from_id": "36kr",
						"title": "2018年了，你有AI思维了吗？",
						"summary": "葛优在《甲方乙方》结尾说1997年就要结束了，我很怀念。",
						"column_id": "217",
						"column_name": "人工智能",
						"author_name": "科技唆麻",
						"author_email": "",
						"author_avatar": "https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480",
						"post_id": "5163051",
						"cover": "https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading",
						"views_count": 10,
						"comments_count": 0,
						"published_at": "2018-11-21 14:28:06",
						"store_at": "0000-00-00 00:00:00",
						"type": "news",
						"created_at": "2018-11-21 14:31:06",
						"updated_at": "2018-11-21 14:31:06"
					},
					{
						"id": 75409,
						"from_id": "36kr",
						"title": "特斯拉计划将超级充电网络扩大一倍，下代充电站计划推迟至明年初",
						"summary": "特斯拉当下面临的最大问题是，该公司能否兑现马斯克许下的承诺？",
						"column_id": "219",
						"column_name": "汽车交通",
						"author_name": "36氪的朋友们",
						"author_email": "",
						"author_avatar": "http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480",
						"post_id": "5163157",
						"cover": "https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading",
						"views_count": 15,
						"comments_count": 0,
						"published_at": "2018-11-21 14:26:52",
						"store_at": "0000-00-00 00:00:00",
						"type": "news",
						"created_at": "2018-11-21 14:31:06",
						"updated_at": "2018-11-21 14:31:06"
					},
					{
						"id": 75407,
						"from_id": "36kr",
						"title": "消失的招聘广告",
						"summary": "天风证券宋雪涛发现，在4月-9月期间，有202万个就业招聘广告消失，其中二线城市及中小企业降的最多最快。",
						"column_id": "103",
						"column_name": "技能Get",
						"author_name": "36氪的朋友们",
						"author_email": "",
						"author_avatar": "http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480",
						"post_id": "5163153",
						"cover": "https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading",
						"views_count": 51,
						"comments_count": 0,
						"published_at": "2018-11-21 14:18:48",
						"store_at": "0000-00-00 00:00:00",
						"type": "news",
						"created_at": "2018-11-21 14:22:07",
						"updated_at": "2018-11-21 14:22:07"
				
					}
				]
				
			};
		}
	}
</script>

<style>
.block-box {
		margin-bottom: 20upx;
	}

	.block {
		display: flex;
		flex-direction: column;
		padding: 0 32upx;
		background: #fff;

	}

	.block-title-box {
		padding: 43upx 0 20upx;
	}

	.block-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: white;
		align-items: center;
		border-left: 8upx solid #cb9359;

	}

	.block-title .text {
		margin-left: 18upx;
		font-size: 16px;

	}

	.block-title .more {
		color: #999999
	}

	.block-content {
		width: 100%;

		padding-bottom: 30upx;
	}

	.arrow {
		
		margin-left: 10upx;
	}

	.uni-icon-more {
		display: flex;
		flex-direction: row;
		align-items: center
	}
</style>
