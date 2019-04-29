<template>
	<view>
		<view class="kehu-item">
			<view class="kehu-left">
				<view class="touxiang-box">
					<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/touxiang.png" mode="aspectFit" class="touxiang-image"></image>
				</view>
				
				<view class="kehu-message">
					<view class="kehu-message-top">
						<view class="kehu-name">
							访客分析
						</view>
						<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png" mode="aspectFit" class="label-image"></image>
					</view>
					<view class="kehu-message-bottom">
						<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/xingjikehu.png" mode="aspectFit"></image>
						<view class="star">
							一星客户
						</view>
						
						
					</view>
				</view>
			</view>
			<view class="kehu-right">资讯</view>	
		</view>
		<view class="kehu-box">
			<view class="row">
				<view class="left">
					<view>
                            挑私募应该看的几个指标夏普比率真的有意义吗？
                        </view>
					<view>2018.07.07 12:11:00</view>
				</view>
				<view class="right">
					<view class="btn ">
						回答
					</view>
					<view class="">
						更多
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
				
			};
		}
	}
</script>

<style>
.kehu-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 20upx;
		border-bottom: 1px solid rgb(0,0,0,0.05) ;
		justify-content: space-between;
		height: 80px;
		background: rgb(255,255,255);
		
	}
	.kehu-left,.kehu-message-bottom{
		display: flex;
		flex-direction: row;
		align-items: center;
		
	}
	.touxiang-box{
		position: relative;
		margin-right: 20upx;
	}
	.kehu-left .touxiang-image{
		width: 50px;
		height: 50px;
		
	}
	.kehu-right{
		border:1px solid rgba(196,156,90,1);
		border-radius:22upx;
		line-height: 22px;
		color: rgba(196,156,90,1) ;
		padding: 0 7px;
		font-size: 12px;
	}
	.kehu-message-top{
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 16px;
		line-height: 30px;
		
	}
	.label-image{
		width: 16px;
		height: 16px;
		margin-left: 8upx;
	}
	.kehu-message-bottom{
		line-height: 15px;
		font-size:10px ;
	}
	.kehu-message-bottom image{
		width: 12px;
		height: 9px;
	}
	.star{
		
		color:#C49C5A ;
	}
	.kehu-box{
		padding: 0 30upx;
		margin-top: 5px;
		background: rgb(255,255,255);
	}
	.row {
		height: 84px;
		border-bottom: 1px solid rgba(238,238,238,1);;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.left {
		
		font-size: 15px;
		margin-right: 20upx;
		
	}
	
	.questionBox {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: 40upx 0;
		text-align: center;
		margin-top: 50%;
	
	}
	.label {
		margin:0 10upx;
	}
	.right{
		
		color: #CCCCCC;
	}
	.left-image{
		height: 18px;
		width: 18px;
		margin-right: 20upx;
	}
	.btn{
		line-height: 22px;
		border: 1px solid #C49C5A;
		border-radius: 22upx;
		padding: 0 15upx;
		color: #C49C5A;
	}
	.yirenzheng{
		color: #CCCCCC;
		border: 1px solid #CCCCCC;
	}
</style>
