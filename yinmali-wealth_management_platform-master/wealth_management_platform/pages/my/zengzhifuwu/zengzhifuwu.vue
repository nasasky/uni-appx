<template>
	<view>
		<view class="box">
			<view class="banner">
				<image class="banner-image" src="http://ai.ylcaifu.com/appimg/images/6.0-%E6%88%91%E7%9A%84%E6%8A%95%E8%B5%84%E4%BA%BA/6.5-%E5%A2%9E%E5%80%BC%E6%9C%8D%E5%8A%A1/android/drawable-xhdpi/tu.png"
				 mode="widthFix" />
			</view>
			<view class="title">泰康医疗</view>
			<view class="content">
				<view class="p"> 2018年经济增速回落，周期崛起将被证伪，可增加新兴行业配置</view>
				<view class="p">2018年整体来讲经济增速是回落的，很多人一听经济增速回落就不太高兴，会觉得经济增速回落，那么投资收益肯定不好。因为大家都记住了一句话，股市是经济的晴雨表，反过来说，如果说经济不好的话股市也不好。我觉得大家对“股市是经济的晴雨表”的理解是有很大问题的，一是倒推经济不好股市就不好的逻辑未必成立，如90年代以来中国经济长期高增长，但是股市却总是大幅波动，股市涨幅远不如美国股市，虽然美国经济增速远不如中国。二是大家把GDP增速高低与经济好坏等同起来，这说明什么呢？说明大家对于经济好不好的理解是有很大的问题。经济好不好的评判标准不是只有GDP增速，GDP它是一个流量指标，而经济好不好主要是看经济运行质量，包括经济结构与效率。</view>

			</view>
			<view class="questionBox">
				<view class="question" @click="toWodelicaishi">
					<label class="iconfont label">&#xe605;</label>预约服务
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	page {
		background: rgb(255, 255, 255);
	}

	.box {
		padding: 15px 30upx 0;
	}

	.banner {}

	.banner-image {
		width: 100%;

	}

	.title {
		line-height: 49px;
		font-size: 17px;
	}

	.p {
		font-size: 14px;
		line-height: 18px;
		margin-bottom: 10px;
	}

	.questionBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 40upx 0;
		text-align: center;

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
		color: rgb(255, 255, 255);

	}

	.label {
		margin: 0 10upx;
	}
</style>
