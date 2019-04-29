<template>
	<view>
		<searchTemp></searchTemp>
		<view class="tiaojian">
			<view :class="id==item.id?'active':''" v-for="item in xuanze" :key="item.id" @click="fresh(item.id)">
				{{item.item}}

			</view>

		</view>
		<view class="questions">
			<view class="question-item">
				<view class="question-item-top">
					<text class="ques twoLines">私募应该看的几个指标夏普真的有意义么钱钱钱钱钱钱钱钱钱钱钱？</text>
					<view class="req" @click="replay">
						回答
					</view>
				</view>
				<view class="question-item-bot">
					<text class="time">2018-07-07 12:10</text>
					<view class="more-req" @click="moreply">
						更多 <label type="" class="iconfont">&#xe640;</label>
					</view>
				</view>


			</view>
			<view class="question-item">
				<view class="question-item-top">
					<text class="ques">如何选择固定收益类的理财产品？</text>
					<view class="req">
						回答
					</view>
				</view>
				<view class="question-item-bot">
					<text class="time">2018-07-07 12:10</text>
					<view class="more-req">
						更多 <label type="" class="iconfont">&#xe640;</label>
					</view>
				</view>


			</view>
			<view class="question-item">
				<view class="question-item-top">
					<text class="ques">如何选择固定收益类的理财产品？</text>
					<view class="req">
						回答
					</view>
				</view>
				<view class="question-item-bot">
					<text class="time">2018-07-07 12:10</text>
					<view class="more-req">
						更多 <label type="" class="iconfont">&#xe640;</label>
					</view>
				</view>


			</view>
			<view class="question-item">
				<view class="question-item-top">
					<text class="ques">如何选择固定收益类的理财产品？</text>
					<view class="req">
						回答
					</view>
				</view>
				<view class="question-item-bot">
					<text class="time">2018-07-07 12:10</text>
					<view class="more-req">
						更多 <label type="" class="iconfont">&#xe640;</label>
					</view>
				</view>


			</view>
			<view class="question-item">
							<view class="question-item-top">
								<text class="ques">如何选择固定收益类的理财产品？</text>
								<view class="req">
									回答
								</view>
							</view>
							<view class="question-item-bot">
								<text class="time">2018-07-07 12:10</text>
								<view class="more-req">
									更多 <label type="" class="iconfont">&#xe640;</label>
								</view>
							</view>
			
			
						</view>
			<view class="question-item">
							<view class="question-item-top">
								<text class="ques">如何选择固定收益类的理财产品？</text>
								<view class="req">
									回答
								</view>
							</view>
							<view class="question-item-bot">
								<text class="time">2018-07-07 12:10</text>
								<view class="more-req">
									更多 <label type="" class="iconfont">&#xe640;</label>
								</view>
							</view>
			
			
						</view>
			<view class="question-item">
				<view class="question-item-top">
					<text class="ques">如何选择固定收益类的理财产品？</text>
					<view class="req">
						回答
					</view>
				</view>
				<view class="question-item-bot">
					<text class="time">2018-07-07 12:10</text>
					<view class="more-req">
						更多 <label type="" class="iconfont">&#xe640;</label>
					</view>
				</view>

			
			</view>
			<view class="question-item">
				<view class="question-item-top">
					<text class="ques">如何选择固定收益类的理财产品？</text>
					<view class="req">
						回答
					</view>
				</view>
				<view class="question-item-bot">
					<text class="time">2018-07-07 12:10</text>
					<view class="more-req">
						更多 <label type="" class="iconfont">&#xe640;</label>
					</view>
				</view>


			</view>
				
		</view>
		<view class="questionBox">
			<view class="question" @click="question">
				<label class="iconfont">&#xe651;</label>我要提问
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
					item: "最新",
					id: 1
				}, {
					item: "推荐",
					id: 2
				}, {
					item: "我的",
					id: 3
				}]
			}
		},
		methods: {
			fresh(id) {
				this.id = id
			},question(){
				uni.navigateTo({
					url: './question/question',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},replay(){
				uni.navigateTo({
					url: './reply/reply',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},moreply(){
				uni.navigateTo({
					url: './morereply/morereply',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
				
			}
	}
</script>

<style>
	.tiaojian {
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		height: 70upx;
		align-items: center;
		text-align: center;
		justify-content: space-around;
	}

	.tiaojian view {

		line-height: 70upx;
		color: rgba(153, 153, 153, 1);

	}

	.tiaojian .active {
		border-bottom: 3px solid #c49c5a;
		color: rgba(196, 156, 90, 1);
	}

	.questions {
		background: #fff;
		padding: 20upx 30upx;
	}

	.question-item {
		border-bottom: 1px solid rgba(238, 238, 238, 1);
		;
		display: flex;
		flex-direction: column;
		padding: 20upx 0;
	}

	.question-item-top,
	.question-item-bot {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.question-item-top {
		margin-bottom: 20upx;
	}

	.question-item-bot {

		color: #cdcdcd
	}

	.time,
	.more-req {
		line-height: 40upx;
		color: rgba(153, 153, 153, 1);
	}

	.ques {
		flex: 1;
		line-height: 36upx;
		color: rgba(51, 51, 51, 1);
	}

	.req {

		border-radius: 10upx;
		width: 120upx;
		height: 48upx;
		text-align: center;
		line-height: 48upx;
		margin-left: 60upx;
		border-radius: 25px;
		color: #cb9359;
		font-size: 11px;
		border: 1px solid rgba(196, 156, 90, 1);

	}
	.questionBox{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width:100%;
		padding: 30upx 0;
		text-align: center;
		position: fixed;
		bottom: 34upx;
	}
	.question {
		width: 240upx;
		height: 70upx;
		background: linear-gradient(-90deg, rgba(196, 156, 90, 1) 0%, rgba(226, 196, 138, 1) 100%);
		border-radius: 35px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: rgb(255,255,255);
		
	}
	label{
		margin-right:10upx ;
	}
</style>
