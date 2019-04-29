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
				<view class="iconfont">
					&#xe670;
				</view>
			</view>
			<view class="lcs-message">
				<view class="touxiang-left">
					<image src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/touxiang.png"
					 mode=""></image>
					<view class="message-right">
						<view class="message-right-top">
							理财师 李明
						</view>
						<view class="message-right-bottom">
							联系方式 14313131313
						</view>
					</view>
				</view>

				<view class="guanzhu">
					<label class="iconfont jia">&#xe7f6;</label>
					关注
				</view>
			</view>
			<view class="jieshao">
				自我介绍：自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍自我介绍
			</view>
			<view class="lists">
				<view class="list-item" @click="toLcsWodefensi">
					<view class="list-item-top">233</view>
					<view class="list-item-bottom">粉丝</view>
				</view>
				<view class="list-item" @click="toLcsWodeguanzhu">
					<view class="list-item-top">122</view>
					<view class="list-item-bottom">关注</view>

				</view>
				<view class="list-item">
					<view class="list-item-top">122</view>
					<view class="list-item-bottom">产品点评</view>

				</view>
				<view class="list-item" @click="toLcsWodezuhe">
					<view class="list-item-top">3</view>
					<view class="list-item-bottom">组合</view>

				</view>


			</view>
		</view>
		<view>
			<view class="tiaojian">
				<view :class="id==item.id?'active':''" v-for="item in xuanze" :key="item.id" @click="fresh(item.id)">
					{{item.item}}

				</view>

			</view>
			<view class="contentMid">
				<view class="contentBot">
					<view class="mark">
						<view class="avator-left">
							<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/touxiang.png" />
						</view>
						<view class="mark-right">
							<view class="mark-top">
								<view class="mark-top-left">
									<view class="position">理财师</view>
									<view class="name">李明</view>
								</view>
							</view>
							<view class="time">9小时前</view>
							<view class="mark-bot twoLines">
								秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄
							</view>
							<view class="mark-images">
								<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
								<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
								<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
								<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
								<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />
								<image class="mark-image" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/tu.png" />

							</view>
							<view class="mark-liuyan">
								<view class="">
									11:20
								</view>
								<image class="liuyan" src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/huifu.png" mode=""></image>
							</view>
							<view class="mark-liuyan-bot">
								<view class="">
									80浏览
								</view>
								<view class="">
									摆上设计：非常好
								</view>
							</view>
						</view>
					</view>
					<view class="mark">
						<view class="avator-left">
							<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.3-%E7%90%86%E8%B4%A2%E5%B8%88%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5/android/drawable-xhdpi/touxiang.png" />
						</view>
						<view class="mark-right">
							<view class="mark-top">
								<view class="mark-top-left">
									<view class="position">理财师</view>
									<view class="name">李明</view>
								</view>


							</view>
							<view class="time">9小时前</view>
							<view class="mark-bot twoLines">
								秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄秀实东区寄
							</view>
						</view>
					</view>

				</view>
				<view class="more-mark"><label class="iconfont">&#xe65e;</label>查看更多评论</view>
			</view>
			<view class="product-box">
				<view class="product-item" @click="toProduct">
					<view class="product-title">
						秀实——东雀嘉熠一号收益权转让计划
					</view>
					<view class="product-detail">
						<view class="item">
							<view class="large-size color item-top">
								8%-9.5%
							</view>
							<view class="item-bottom">
								业绩比较基准
							</view>
						</view>
						<view class="item">
							<view class="size item-top">
								产品期限
							</view>
							<view class="item-bottom">
								12个月
							</view>
						</view>
						<view class="item">
							<view class="size item-top">
								认购起点 
							</view>
							<view class="item-bottom">
								50万元
							</view>
						
						</view>
						
					</view>
				</view>
				<view class="product-item" @click="toProduct">
					<view class="product-title">
						秀实——东雀嘉熠一号收益权转让计划
					</view>
					<view class="product-detail">
						<view class="item">
							<view class="large-size color item-top">
								8%-9.5%
							</view>
							<view class="item-bottom">
								业绩比较基准
							</view>
						</view>
						<view class="item">
							<view class="size item-top">
								产品期限
							</view>
							<view class="item-bottom">
								12个月
							</view>
						</view>
						<view class="item">
							<view class="size item-top">
								认购起点 
							</view>
							<view class="item-bottom">
								50万元
							</view>
						
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
				id: 1,
				xuanze: [{
					item: "全部",
					id: 1
				}, {
					item: "产品点评",
					id: 2
				}, {
					item: "问答",
					id: 3
				}]
			}
		},
		methods: {
			goback() {
				uni.navigateBack({});
			},
			fresh(id) {
				this.id = id
			},
			toLcsWodezuhe(){
				uni.navigateTo({
					url:'./lcs-wodezuhe/lcs-wodezuhe'
				})
			},
			toLcsWodeguanzhu(){
				uni.navigateTo({
					url:'./lcs-wodeguanzhu/lcs-wodeguanzhu'
				})
			},
			toLcsWodefensi(){
				uni.navigateTo({
					url:'./lcs-wodefensi/lcs-wodefensi'
				})
			}
		}
	}
</script>

<style>
	.topBox {
		width: 100%;
		background: url("http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/android/drawable-xhdpi/beijing.png") no-repeat;
		background-size: 100% 100%;
		color: rgb(255, 255, 255);
		margin-bottom: 10px;
		height: 250px;
		overflow: hidden;
	}

	.nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 34px 15px 15px 18px;

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
		padding: 0 30upx 0 50upx;
		justify-content: space-between;
		align-items: center;
	}


	.touxiang-left image {
		height: 70px;
		width: 70px;
		margin-right: 28upx;
	}

	.touxiang-left {
		display: flex;
		flex-direction: row;
	}

	.guanzhu {
		line-height: 22px;
		border: 1px solid #fff;
		border-radius: 10upx;
		padding: 0 10px;
	}

	.iconfont.jia {
		font-size: 14px;
	}

	.message-right-top {
		padding: 10upx 0;
		font-size: 22px;

	}

	.message-right-bottom {
		font-size: 15px;
	}

	.jieshao {
		padding: 14px 50upx;
		font-size: 12px;

	}

	.lists {
		padding: 0 0 12px 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;

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

	.list-item-top {
		font-size: 17px;
	}

	.list-item-bottom {
		font-size: 12px;
	}

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

	.contentBox {

		padding: 0 30upx 55px;
		margin-top: 75px;
	}

	.contentTop {
		padding: 15px 0;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}

	.bot {
		display: flex;
		flex-direction: row;
		font-size: 11px;
		line-height: 24px;
		justify-content: space-between;
		color: rgba(153, 153, 153, 1);
		font-weight: 500;
	}

	.left,
	.right {
		display: flex;
		flex-direction: row;
		align-items: center;

	}

	.left .from {
		margin-right: 10upx;
	}

	.right {
		color: rgba(51, 51, 51, 1);
		;
		font-size: 12px;
		font-weight: 500;

	}

	.uni-font17 {
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		font-size: 17px;

	}

	.contentMid {
		background: rgb(255,255,255);
		padding:0 30upx ;
		border-bottom: 1px solid rgba(238, 238, 238, 1);

	}

	.mark,
	.mark-top-left,
	.mark-right .mark-top {
		display: flex;
		flex-direction: row;

	}

	.mark {
		
		padding:30upx 0 37upx;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}

	.mark-top-left,
	.mark-right .mark-top {
		align-items: center;
		justify-content: space-between;
	}

	.mark-top-left {
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 22px;
		font-size: 16px;
	}

	.avator-left,
	.avator-left image {
		height: 40px;
		width: 40px;
		border-radius: 50%;

	}

	.mark-right {
		margin-left: 19upx;
	}

	.position {
		margin-right: 10upx;
	}

	.mark-bot {

		font-size: 14px;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 21px;
		margin-top: 7px;
	}

	.mark-right .time {
		font-size: 12px;

		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.more-mark {
		text-align: center;
		font-weight: 500;
		color: rgba(196, 156, 90, 1);
		line-height: 41px;
	}

	label {
		margin-right: 10upx;
	}

	.bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
	}

	.bottom-tab {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		text-align: center;
		background: rgb(255, 255, 255);
	}

	.bottom-item {}

	.bottom-icon-image {
		margin-top: 15upx;
		height: 20px;
		width: 20px;
	}

	.bottom-text {
		color: rgba(153, 153, 153, 1);
		line-height: 20px;
		font-size: 9px;
	}

	.label {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.label .label-item {
		height: 30px;
		background: rgba(245, 245, 245, 1);
		border-radius: 15px;
		line-height: 30px;
		padding: 0 32upx;
		margin: 0 10upx 10upx 0;
		font-size: 12px;
	}
	.mark-images {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-top:13px;
	}	

	.mark-image {
		height: 80px;
		width: 80px;
		margin:0 10upx 10upx 0;
	}
	
	.mark-liuyan{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 30px;
	}
	
	.liuyan{
		height: 14px;
		width: 19px;
	}
	.mark-liuyan-bot{
		background: rgba(249,249,249,1);
		line-height: 27px;
		font-size: 14px;
	}
	.product-item {
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		margin: 15px 15px 0;
		text-align: left;
	}
	
	.product-title {
		line-height: 40px;
		text-align: left;
		font-size: 15px;
		margin-left: 30upx;
	}
	
	.product-detail {
		padding: 10px 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		border-top: 1px solid rgba(238,238,238,1);
		border-bottom: 1px solid rgba(238,238,238,1);
	}
	.product-detail .item-top{
		line-height: 33px;
	}
	.product-detail .item-bottom{
		line-height: 25px;
		color: rgba(153,153,153,1);
		font-size: 12px;
	}
	.color {
		color: rgba(196,156,90,1);
		
	}
	
	.size {
		font-size: 16px;
	}
	.large-size{
		font-size: 24px;
	}
</style>
