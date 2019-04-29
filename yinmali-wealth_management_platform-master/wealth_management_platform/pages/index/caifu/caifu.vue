<template>
    <view class="box">
      <view class="cfjiangtang" v-for="item in lists" :style="{backgroundImage:'url('+item.author_avatar+')'}" @click="toCfDetail">
      	<view class="content">
      		<view class="iconfont play">
      		  &#xe78e;
      		
      		</view>
					<view class="title">
						如何选择固定收益类的理财产品？
					</view>
					<view class="bot">
						<view class="left">
							<view class="from">
								微课堂
							</view>
							<view class="time">
								微课堂
							</view>
						</view>
						<view class="right">
							<view class="iconfont">
								&#xe63e;
							</view>
							<view class="">
									2345
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
							lists:[]
						}
        },
        onLoad: function() {
					 uni.showLoading()
           uni.request({
           	url: 'https://unidemo.dcloud.net.cn/api/news',
           	method: 'GET',
           	data: {},
           	success: res => {
           		this.lists = res.data
           		console.log(res);
           		uni.hideLoading()
           	},
           	fail: () => {},
           	complete: () => {}
           });
        },
        methods: {
           
          toCfDetail(){
						uni.navigateTo({
							url: 'cfdetail/cfdetail',
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
					}
        }
    }
</script>

<style>
  .box{
		padding: 30upx 30upx 0;
	} 
	.cfjiangtang{
		height: 350upx;
		width: 100%;
		margin-bottom: 30upx;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		border-radius: 16upx;
		
	}
	.content{
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		position: relative;
		color: white;
	}
	.play{
		color: #666666;
		font-size: 80upx;
		position: absolute;
		top:50%;
		left: 50%;
		margin-top: -40upx;
		margin-left: -40upx;
		opacity: 0.8;
		
	}
	.title{
		position: absolute;
		bottom:60upx;
		left: 20upx;
		font-size: 15px;
	}
	.bot{
		display: flex;
		flex-direction: row;
		position: absolute;
		bottom: 22upx;
		left: 20upx;
		font-size:11px ;
		align-items: center;
		justify-content: space-between;
		width: 90%;
	}
	.left,.right{
		display: flex;
		flex-direction: row;
		align-items: center;
	
	}
.right{
	color:rgba(196,156,90,1);
	font-size: 24upx;
	font-weight:500;
}
</style>
