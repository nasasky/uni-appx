<template>
	<view>
		<view class="content">
			<view class="title">
				{{title}}
			</view>
			<rich-text class="richtext" :nodes="string">
				{{string}}
			</rich-text>
		</view>
	</view>
</template>
<script>
	export default {
		data(){
			return{
				title:"",
				string:''
			}
		},
		onLoad(e) {
			uni.showLoading();
			console.log(e)
			uni.request({
				url:'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res)
					this.title=res.data.title;
					this.string=res.data.content;
					uni.hideLoading()
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
	page{
		background:#fff;
	}
.content{
	padding:10upx 2%;
	width: 96%;
	flex-wrap:wrap ;
}
.title{
	margin-bottom: 10upx;
}
rich-text{
	font-size: 26upx;
	line-height: 36upx;
}
</style>
