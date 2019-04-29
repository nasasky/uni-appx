<template>
	<view>
		<!-- <view class="status_bar">
			<view class="top_view"></view>
		</view> -->
		<swiperTemp :imgUrl="imgUrl"></swiperTemp>
		<view class="lists">
			<view class="list-item" @tap="toZixun">
				<image src="http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/zixun.png" mode=""></image>
				<view>资讯</view>
			</view>
			<view class="list-item" @tap="toQiuzhi">
				<image src="http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/qiuzhi.png" mode=""></image>
				<view>求知</view>
			</view>
			<view class="list-item" @tap="toHuodong">
				<image src="http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/huodong.png" mode=""></image>
				<view>活动</view>
			</view>
			<view class="list-item" @tap="toCaifu">
				<image src="http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/caifujiangtang.png" mode=""></image>
				<view>财富讲堂</view>
			</view>
			<view class="list-item" @tap="toStore">
				<image src="http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/jifenshamhcheng.png" mode=""></image>
				<view>积分商城</view>
			</view>
		</view>
		<view class="block-box">
			<view class="block">
				<view class="block-title-box">
					<view class="block-title">
						<view class="text">
							金融资讯
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

		<view class="block-box">
			<view class="block">
				<view class="block-title-box">
					<view class="block-title">
						<view class="text">
							热点问答
						</view>
						<view class="uni-icon-more" @tap="toQiuzhi">
							<view class="more">
								更多
							</view>
							<label class="iconfont arrow">&#xe640;</label>
						</view>
					</view>
				</view>
				<view class="block-content">
					<view :class="{qiuzhiItem:true,first:index==0}" v-for="(item,index) in qiuzhilist" :key="index">

						<view class="qiuzhi-top size uni-ellipsis">
							{{item.value}}
						</view>
						<view class="qiuzhi-bottom  uni-ellipsis">
							{{item.value}}
						</view>
					</view>
				</view>


			</view>

		</view>
		<view class="block-box">

			<view class="block">
				<view class="block-title-box">
					<view class="block-title">
						<view class="text">
							热销产品
						</view>
						<view class="uni-icon-more" @tap="toProduct">
							<view class="more">
								更多
							</view>
							<label class="iconfont arrow">&#xe640;</label>
						</view>
					</view>

				</view>
				<view class="block-content">
					<view class="intro">
						<view class="pro-title">
							秀实——东雀嘉熠一号收益权转让计划
						</view>
						<view class="detail">
							<view class="item">
								<view class="size color">8%-9.5%</view>
								<view class="color-gray">业绩比较基准</view>
							</view>
							<view class="item">
								<view class="size">
									产品期限
								</view>
								<view class="color-gray">
									12个月
								</view>
							</view>

							<view class="item">
								<view class="size">
									认购起点
								</view>
								<view class="color-gray">
									50万元
								</view>

							</view>
						</view>
						<view class="button-group">
							<view class="">
								产品备案查询
							</view>
							<view class="">
								产品详情
							</view>
						</view>
					</view>

				</view>
			</view>


		</view>
		<view class="block-box">
			<view class="block">
				<view class="block-title-box">
					<view class="block-title">
						<view class="text">
							财富讲堂
						</view>
						<view class="uni-icon-more" @tap="toCaifu">
							<view class="more">
								更多
							</view>
							<label class="iconfont arrow">&#xe640;</label>
						</view>
					</view>

				</view>
				<view class="block-content">
					<view class="jiangtang">
						<view class="jt-box">
							<view class="jt-title">
								投资策略
							</view>
							<view class="jt-content">
								投资顾问 专家解读
							</view>
						</view>
						<view class="jt-box">
							<view class="jt-title">
								投资策略
							</view>
							<view class="jt-content">
								投资顾问 专家解读
							</view>
						</view>
					</view>
					<!-- <scroll-view class="scroll-view_H" scroll-x="true">
							<view class="scroll-view-item_H">
								<image src="../../static/image/indexImg/3.jpg" mode="widthFix"></image>
								<view class="videoText uni-ellipsis">
									时代专题ttt
								</view>
							</view>
							<view class="scroll-view-item_H">
								<image src="../../static/image/indexImg/3.jpg" mode="widthFix"></image>
								<view class="videoText uni-ellipsis">
									时代专题qqqqqq时代专题qqqqqq时代专题qqqqqq时代专题qqqqqq
								</view>
							</view>
							<view class="scroll-view-item_H">
								<image src="../../static/image/indexImg/3.jpg" mode="widthFix"></image>
								<view class="videoText uni-ellipsis">
									时代专题
								</view>
							</view>
							<view class="scroll-view-item_H">
								<image src="../../static/image/indexImg/3.jpg" mode="widthFix"></image>
								<view class="videoText uni-ellipsis">
									时代专题
								</view>
							</view>
							
						</scroll-view>
						 -->
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	import searchTemp from '../../components/search-temp.vue';
	import newsListTemp from '../../components/newsList-temp.vue';
	import swiperTemp from '../../components/swiper-temp.vue';
	export default {
		components: {
			searchTemp,
			newsListTemp,
			swiperTemp
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
				],
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
				list: [{

						"id": 75408,
						"from_id": "36kr",
						"title": "2018年了，你有AI思维了吗？",
						"summary": "葛优在《甲方乙方》结尾说，1997年就要结束了，我很怀念他。而事实上，不管你承不承认，互联网思维已经是过去式了，对于绝大多数企业来说，要学习的是AI思维，如果不能拥抱AI，恐怕会被时代无情的淘汰。",
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
					}

				],
				qiuzhilist: [{
						"value": "1如何选择固定收益类理财产品？"
					},
					{
						"value": "2如何选择固定收益类理财产品？"
					}, {
						"value": "3如何选择固定收益类理财产品？"
					}
				]
			}
		},
		methods: {
			toZixun() {
				uni.navigateTo({
					url: 'news/news',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toHuodong() {
				uni.navigateTo({
					url: 'huodong/huodong',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			
			toCaifu() {
				uni.navigateTo({
					url: 'caifu/caifu',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toQiuzhi() {
				uni.navigateTo({
					url: 'knowledge/knowledge',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toProduct() {
				uni.switchTab({
					url: '../product/product'
				})
			},
			toZaobao() {
				uni.navigateTo({
					url: './zaobao/zaobao',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toStore() {
				uni.navigateTo({
					url: './store/store',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}

		}
	}
</script>

<style>
	page {}

	.lists {
		padding: 40upx 0;
		background: #fff;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-bottom: 20upx;
	}

	.list-item {
		flex: 1;
		text-align: center;

	}

	.list-item image {
		height: 80upx;
		width: 80upx;
		border-radius: 50%;
	}

	.list-item text {
		display: block;
		line-height: 46upx;
	}

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

	.qiuzhiItem {
		width: 100%;
		padding: 20upx 0;
		border-bottom: 1px solid #eeeeee;
	}

	.qiuzhi-top {
		width: 603upx;
		
		font-size: 18px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
	
		line-height: 48upx;
	}

	.qiuzhiItem.first {
		
		text-indent: 25upx;
		background: url("http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/renmenwenda.png") no-repeat center;
		background-size: 100% 100%;
		border-radius:0px 5px 5px 5px;
		
		
		
	}
	.qiuzhiItem.first .qiuzhi-bottom,.qiuzhiItem.first .qiuzhi-top{
		color: rgba(255, 255, 255, 1);
	}
	.qiuzhi-bottom {

		color: #999999;
		line-height: 48upx;;
	}
	.intro {
		display: flex;
		flex-direction: column;
		border: 1px solid #eeeeee;
		box-shadow: 0 0 10px #f6f6f6;
		background: #FFFFFF;

	}

	.pro-title {
		line-height: 80upx;
		text-indent: 32upx;
		font-size: 15px;
	}

	.detail {
		text-align: center;
		padding: 20upx 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border-top: 1upx solid #EEEEEE;
		border-bottom: 1upx solid #EEEEEE;
	}

	.detail .item {

		line-height: 50upx;

	}

	.color {
		color: rgb(200, 166, 91);

	}

	.color-gray {
		color: #999999;
	}

	.size {
		font-size: 16px;
	}

	.button-group {

		height: 90upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.button-group view {
		margin-left: 22upx;
		line-height: 50upx;
		background: linear-gradient(-90deg,rgba(196,156,90,1) 0%,rgba(226,196,138,1) 100%);
		color: #fff;
		padding: 0 32upx;
		border-radius: 20px;

	}

	.uni-list-cell:after {
		left: 0;
	}

	.jiangtang {
		padding: 20upx 0 10upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.jiangtang .jt-box:first-child {
		width: 330upx;
		height: 186upx;
		background:linear-gradient(-30deg,rgba(248,163,1,1) 0%,rgba(245,200,0,1) 100%);
		border-radius:5px;
	}
	.jiangtang .jt-box:last-child{
		width: 330upx;
		height: 186upx;
		background:url("http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/xinshouzhidao.png") no-repeat center;
		background-size:360upx 186upx;
		border-radius:5px;
	}
	.jiangtang .jt-box{
		display: flex;
		flex-direction: column;
		color: #fff;
	}
	.jt-title{
		margin: 27upx 0 17upx 25upx;
		font-size: 18px;
		font-weight:bold;
	}
	.jt-content{
		margin-left: 21upx;
		
	}
</style>
