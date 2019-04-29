<template>
	<view>
		<view class="top">
			<searchTemp class="search"></searchTemp>
		</view>
		<view class="kehu-lists">
			<view class="kehu-item">
				<view class="kehu-left" @click="toKehuxiangqing">
					<view class="touxiang-box">
						<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/touxiang.png" mode="aspectFit" class="touxiang-image"></image>
						<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/nanxing.png" mode="aspectFit" class="xingbie"></image>				
					</view>
					
					<view class="kehu-message">
						<view class="kehu-message-top">
							<view class="kehu-name">
								李逵之
							</view>
							<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png" mode="aspectFit" class="label-image"></image>
						</view>
						<view class="kehu-message-bottom">
							<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/xingjikehu.png" mode="aspectFit"></image>
							<view class="star">
								一星客户
							</view>
							<view class="telephone">
								1233211234567
							</view>
							
						</view>
					</view>
				</view>
				
				<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/dianhuan.png" mode="" class="kehu-right"></image>
			</view>
			<view class="kehu-item">
					<view class="kehu-left">
						<view class="touxiang-box">
							<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/touxiang.png" mode="aspectFit" class="touxiang-image"></image>
							<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/nanxing.png" mode="aspectFit" class="xingbie"></image>				
						</view>
						
						<view class="kehu-message">
							<view class="kehu-message-top">
								<view class="kehu-name">
									李逵之
								</view>
								<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png" mode="aspectFit" class="label-image"></image>
							</view>
							<view class="kehu-message-bottom">
								<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/xingjikehu.png" mode="aspectFit"></image>
								<view class="star">
									一星客户
								</view>
								<view class="telephone">
									1233211234567
								</view>
								
							</view>
						</view>
					</view>
					
					<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/dianhuan.png" mode="" class="kehu-right"></image>
				</view>
			
			<view class="kehu-item">
					<view class="kehu-left">
						<view class="touxiang-box">
							<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/touxiang.png" mode="aspectFit" class="touxiang-image"></image>
							<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/nanxing.png" mode="aspectFit" class="xingbie"></image>				
						</view>
						
						<view class="kehu-message">
							<view class="kehu-message-top">
								<view class="kehu-name">
									李逵之
								</view>
								<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/he.png" mode="aspectFit" class="label-image"></image>
							</view>
							<view class="kehu-message-bottom">
								<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/xingjikehu.png" mode="aspectFit"></image>
								<view class="star">
									一星客户
								</view>
								<view class="telephone">
									1233211234567
								</view>
								
							</view>
						</view>
					</view>
					
					<image src="http://ai.ylcaifu.com/appimg/images/5.0-%E6%88%91%E7%9A%84-%E7%90%86%E8%B4%A2%E5%B8%88/5.1-%E6%88%91%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%88CRM%EF%BC%89/android/drawable-xhdpi/dianhuan.png" mode="" class="kehu-right"></image>
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
				
			};
		},
		onNavigationBarButtonTap (){
			uni.navigateTo({
				url: './xinjiankehu/xinjiankehu',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},methods:{
			toKehuxiangqing(){
				uni.navigateTo({
					url: './kehuxiangqing/kehuxiangqing',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.kehu-lists{
		background: rgb(255,255,255);
	}
	.kehu-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 20upx;
		border-bottom: 1px solid rgb(0,0,0,0.05) ;
		justify-content: space-between;
		height: 65px;
		
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
	.touxiang-box .xingbie{
		position: absolute;
		width: 14px;
		height: 12px;
		
		
		bottom: 0;
		right: 0;
	}
	.kehu-left .touxiang-image{
		width: 45px;
		height: 45px;
		
	}
	.kehu-right{
		width: 25px;
		height: 25px;
	}
	.kehu-message-top{
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 16px;
		line-height: 30px;
		
	}
	.kehu-message-top image{
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
	.telephone{
		margin-left: 23upx;
		color: #999999;
	}
</style>
