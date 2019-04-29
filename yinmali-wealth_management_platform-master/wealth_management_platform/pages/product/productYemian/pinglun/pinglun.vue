<template>
	<view>
		<view class="pinglun-box">
			<view class="pinglun-top">
				<view class="pinglun">
					评论
				</view>
				<view class="star">
					<view class="star-item">
						<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
					</view>
					<view class="star-item">
						<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
					</view>
					<view class="star-item">
						<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
					</view>
					<view class="star-item">
						<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
					</view>
					<view class="star-item">
						<image class="star-image-select" src="http://ai.ylcaifu.com/appimg/images/2.0-%E4%BA%A7%E5%93%81/2.2-%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2/android/drawable-xhdpi/xingxingxuanzhon.png" />
					</view>

				</view>
			</view>
			<textarea class="textare" value="" placeholder="来评价吧" />
			<addImage></addImage>
			<view class="contentMid">
				<view class="videoDetail uni-font17">
					<view class="">
						产品印象
					</view>
				</view>
				<view class="label">
					<view class="label-item">国企大机构背景</view>
					<view class="label-item">股力雄厚</view>
					<view class="label-item">历史对付100%</view>
					<view class="label-item">股东实力雄厚</view>
				</view>
			</view>
			<view class="uni-switch-box">
				<view class="uni-list">
					<view class="uni-list-cell uni-list-cell-pd">
						<view class="uni-list-cell-db">匿名</view>
						<switch  @change="" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import addImage from '../../../API/image/image.vue';
	export default {
		components:{
			addImage
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	page{
		background: rgb(255,255,255);
	}
	.pinglun-box{
		padding: 0 30upx;
	}
	.pinglun-top{
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 90upx;
	}
	.star{
		display: flex;
		flex-direction: row;
		margin-left: 22upx;
	}
	.star-image-select{
		width: 30upx;
		height: 28upx;
		margin-right: 10upx;
	}
	.textare{
		width: 630upx;
		padding: 30upx;
		height: 180upx;
		border:1px solid rgba(238,238,238,1);
		border-radius:5px;
		font-size: 14px;
	}
	.contentMid {

		padding: 0 0 30upx 0;

	}
	.videoDetail {
		border-left: 4px solid rgba(203, 147, 89, 1);
		padding-left: 17upx;
		margin: 31upx 0 27upx 0;

	}
	.uni-font17 {
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			font-size: 17px;
	
		}
	.label {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	
	.label .label-item {
		height: 60upx;
		background: rgba(245, 245, 245, 1);
		border-radius: 15px;
		line-height: 60upx;
		padding: 0 32upx;
		margin:0 10upx 10upx 0;
		font-size: 12px;
	}	
	.uni-switch-box{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		
	}
	
</style>
