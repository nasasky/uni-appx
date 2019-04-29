<template>
	<view>
		<view class="top">
			<view class="title">
				耀莱财富财经快报
			</view>
			<view class="videoBox">
				<audio class="audio" src=""
				 poster="" name="智能财富管理机构，秀实投资集团" author="今天" action="" controls="true"></audio>
			</view>
		</view>
		<view class="content">
			<view class="article-title">
				{{title}}
			</view>
			<rich-text class="richtext" :nodes="string">
				{{string}}
			</rich-text>
		</view>
		<view class="bottom">
			<writemarkTemp></writemarkTemp>
		</view>
	</view>
</template>
<script>
	import writemarkTemp from '../../../components/writemark-temp.vue';
	export default {
		components:{
			writemarkTemp
		},
		data() {
			return {
				title: "",
				string: ''
			}
		},
		onLoad(e) {
			uni.showLoading({
			});
			
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res)
					this.title = res.data.title;
					this.string = res.data.content;
					uni.hideLoading()
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style scoped>
	page {
		
	}

	.top {
		padding: 0 31upx 0 29upx;
		background: white;
	}

	.audio {
		width: 100%;
	}

	.content {
		padding: 10upx 2%;
		width: 96%;
		flex-wrap: wrap;
		background: white;
		margin-bottom: 110upx;
	}

	.title {
		font-size: 18px;

		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		padding: 48upx 0 26upx 0;
	}

	rich-text {

		line-height: 36upx;
	}

	.article-title {
		font-size: 17px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		text-align: center;
		line-height: 116upx;
	}
	.bottom{
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
