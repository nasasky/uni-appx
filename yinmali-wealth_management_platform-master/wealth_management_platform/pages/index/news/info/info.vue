<template>
	<view>
		<view class="content">
			<view class="banner">
				<image class="bannerImg" :src="imgUrl" mode=""></image>
			</view>
			<view class="title">
				{{title}}
			</view>
			<rich-text class="richtext" :nodes="string">
				{{string}}
			</rich-text>
			<view class="bottom">
				<writemarkTemp></writemarkTemp>
			</view>
		</view>
	</view>
</template>
<script>
	import writemarkTemp from '../../../../components/writemark-temp.vue';
	export default {
		components:{
			writemarkTemp
		},
		data() {
			return {
				title: "",
				string: '',
				imgUrl:''
			}
		},
		onLoad(e) {
			uni.showLoading();
			console.log(e)
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res)
					this.title = res.data.title;
					this.string = res.data.content;
					this.imgUrl=res.data.cover
					uni.hideLoading()
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.content {
		padding: 30upx;
		flex-wrap: wrap;
	}

	.title {
		margin: 20upx 0;
		font-size: 17px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(68, 68, 68, 1);
		line-height:48upx;
	}

	rich-text {
		font-size: 26upx;
		line-height: 36upx;
		padding-bottom: 110upx;
	}
	.banner,.bannerImg{
		width: 100%;
		height: 370upx;
	}
	.bottom{
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
