<template>
	<view>
		<view class="top">
			<searchTemp class="search"></searchTemp>
		</view>
		<view class="dingdan-box">
				<view class="dingdan-item">
					<view class="dingdan-item-left"> 
						<view class="product-name">青山盈收33号</view>
						<view class="jiaqian">
		                        260,000.00
		                    </view>
					</view>
					<view class="dingdan-item-right">
						<view class="is-daoqi daoqi">已到期</view>
						<view class="time">2108-10-10</view>
					</view>
				</view>
				<view class="dingdan-item">
						<view class="dingdan-item-left"> 
							<view class="product-name">青山盈收33号</view>
							<view class="jiaqian">
				                    260,000.00
				                </view>
						</view>
						<view class="dingdan-item-right">
							<view class="is-daoqi daoqi">已到期</view>
							<view class="time">2108-10-10</view>
						</view>
					</view>
				<view class="dingdan-item">
						<view class="dingdan-item-left"> 
							<view class="product-name">青山盈收33号</view>
							<view class="jiaqian">
				                    260,000.00
				                </view>
						</view>
						<view class="dingdan-item-right">
							<view class="is-daoqi daoqi">已到期</view>
							<view class="time">2108-10-10</view>
						</view>
					</view>
				<view class="dingdan-item">
						<view class="dingdan-item-left"> 
							<view class="product-name">青山盈收33号</view>
							<view class="jiaqian">
				                    260,000.00
				                </view>
						</view>
						<view class="dingdan-item-right">
							<view class="is-daoqi daoqi">已到期</view>
							<view class="time">2108-10-10</view>
						</view>
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
		}
	}
</script>

<style>
.dingdan-box {
		
		background: rgb(255,255,255);
		padding: 0 30upx;
	}
	.dingdan-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba(238,238,238,1);
		height: 75px;
	}
	.product-name{
		font-size:16px;
		
	}
	.jiaqian{
		color:rgba(196,156,90,1);
		line-height: 30px;
	}
	
	.is-daoqi{
		text-align: center;
		
		border-radius:22px;
		line-height: 22px;
	}
	.daoqi{
		border:1px solid rgba(221,221,221,1);
		color: rgba(221,221,221,1) ;
	}
	.weidaoqi{
		border:1px solid rgba(196,156,90,1);
		color: rgba(196,156,90,1) ;
	}
	.time{
		color:rgba(153,153,153,1);
		line-height: 30px;
	}
</style>
