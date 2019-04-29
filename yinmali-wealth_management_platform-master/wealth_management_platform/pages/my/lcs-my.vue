<template>
	<view>
		<view class="topBox">
			<view class="nav">
				<view class="go-back iconfont" @click="goback">
					&#xe602;
				</view>
				<view class="middle">
					我的
				</view>
				<view class="set-btn" @click="toLcsShezhi">
					设置
				</view>
			</view>
			<view class="lcs-message">
				<view class="touxiang-left">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/touxiang.png"
					 mode=""></image>
				</view>
				<view class="message-right">
					<view class="message-right-top">
						理财师 李明
					</view>
					<view class="message-right-bottom">
						14313131313
					</view>
				</view>
			</view>
			<view class="biaoqian">
				<view class="biaoqian-item">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/weirenzhenghege.png"
					 mode=""></image>
					<view class="">
						未认证合格投资者
					</view>
				</view>
				<view class="biaoqian-item">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/shimingrenzheng.png"
					 mode=""></image>
					<view class="">
						实名认证
					</view>
				</view>
				<view class="biaoqian-item">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/licai.png"
					 mode=""></image>
					<view class="">
						理财师
					</view>
				</view>
			</view>
		</view>
		<view class="lists">
			<view class="list-item" @click="toLcsGerenzhuye">
				<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/gerenzhuye.png"
				 mode="aspectFit"></image>
				<view>个人主页</view>
			</view>
			<view class="list-item" @click="toLcsGuanzhudongtai">
				<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/guanzhudongtai.png"
				 mode="aspectFit"></image>
				<view>关注动态</view>
			</view>
			<view class="list-item">
				<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/zichanpeizhi.png"
				 mode="aspectFit"></image>
				<view>我的资产</view>
			</view>

		</view>
		<view class="block-box">

			<view class="block">
				<view class="my-lists">
					<view class="my-list-item">
						<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/wodekehu.png" mode="aspectFit"></image>
						<view class="my-list-item-right" @click="toLcsWodekehu">
							<view class="">
								我的客户
							</view>
							<view class="iconfont arrow">&#xe640;</view>
						</view>
					</view>
					<view class="my-list-item">
						<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/zhuanfazhushou.png" mode="aspectFit"></image>
						<view class="my-list-item-right" @click="toLcsZhuanfazhushou">
							<view class="">
								转发助手
							</view>
							<view class="iconfont arrow">&#xe640;</view>
						</view>
					</view>
					<view class="my-list-item">
						<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/android/drawable-xhdpi/wodeshoucang.png" mode="aspectFit"></image>
						<view class="my-list-item-right">
							<view class="">
								我的收藏
							</view>
							<view class="iconfont arrow">&#xe640;</view>
						</view>
					</view>
					<view class="my-list-item">
							<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/wodedingdang.png" mode="aspectFit"></image>
							<view class="my-list-item-right" @click="toWodedingdan">
								<view class="">
									我的订单
								</view>
								<view class="iconfont arrow">&#xe640;</view>
							</view>
						</view>
					
					<view class="my-list-item">
							<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/tuijianyouli.png" mode="aspectFit"></image>
							<view class="my-list-item-right">
								<view class="">
									推荐有礼
								</view>
								<view class="iconfont arrow">&#xe640;</view>
							</view>
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

			}
		},
		methods: {
			goback() {
				uni.navigateBack({});
			},
			toChicang(){
				uni.navigateTo({
					url: './wodechicang/wodechicang',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toWodedingdan(){
				uni.navigateTo({
					url: './lcs-wodedingdan/lcs-wodedingdan',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toZengzhifuwu(){
				uni.navigateTo({
					url: './zengzhifuwu/zengzhifuwu',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toLcsWodekehu(){
				uni.navigateTo({
					url: './lcs-wodekehu/lcs-wodekehu',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toLcsShezhi(){
				uni.navigateTo({
					url: './lcs-shezhi/lcs-shezhi',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toLcsGerenzhuye(){
				uni.navigateTo({
					url: './lcs-gerenzhuye/lcs-gerenzhuye',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toLcsGuanzhudongtai(){
				uni.navigateTo({
					url: './lcs-guanzhudongtai/lcs-guanzhudongtai',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toLcsZhuanfazhushou(){
				uni.navigateTo({
					url: './lcs-zhuanfazhushou/lcs-zhuanfazhushou',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.topBox {
		width: 100%;
		background: url("http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/beijing.png") no-repeat;
		background-size: 100% 100%;
	}

	.nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 34px 15px 15px 18px;
		color: rgb(255, 255, 255);
	}

	.middle {
		font-size: 18px;
	}

	.go-back {
		font-size: 17px;
	}

	.lcs-message {
		display: flex;
		flex-direction: row;
		padding-left: 25px;
	}

	.touxiang-left,
	.touxiang-left image {
		height: 70px;
		width: 70px;
	}

	.touxiang-left {
		margin-right: 28upx;
	}

	.message-right {
		color: rgb(255, 255, 255);
	}

	.message-right-top {
		padding: 10upx 0;
		font-size: 22px;

	}

	.message-right-bottom {
		font-size: 15px;
	}

	.biaoqian {
		display: flex;
		flex-direction: row;
		padding: 15px 0 21px 25px;
	}

	.biaoqian image {
		height: 12px;
		width: 12px;
		margin-right: 5px;
	}

	.biaoqian-item {
		display: flex;
		flex-direction: row;
		padding: 0 10px;
		height: 20px;
		align-items: center;
		border: 1px solid rgba(255, 255, 255, 0.3);
		font-size: 12px;
		color: rgb(255, 255, 255);
		margin-right: 5px;
		border-radius: 21px;
	}

	.lists {
		padding: 12px 0;
		background: #fff;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-bottom: 10px;
	}

	.list-item {
		flex: 1;
		text-align: center;

	}

	.list-item image {
		height: 24px;
		width: 24px;
		margin-bottom: 12px;
		
	}

	.list-item text {
		display: block;
		line-height: 23px;
	}

	.block-box {
		margin-bottom: 10px;
	}

	.block {
		display: flex;
		flex-direction: column;
		padding: 0 32upx;
		background: #fff;

	}

	

	.block-title .text {
		margin-left: 18upx;
		font-size: 16px;

	}

	.block-title .more {
		color: #999999
	}

	.uni-icon-more {
		display: flex;
		flex-direction: row;
		align-items: center
	}

	.my-lists{
		display:flex ;
		flex-direction: column;
	}
	.my-list-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 54px;
		border-bottom: 1px solid rgba(238,238,238,1);
	}
	.my-list-item image{
		height: 18px;
		width: 18px;
		margin-right: 22px;
	}
	.my-list-item-right{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
</style>
