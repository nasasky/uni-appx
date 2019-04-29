<template>
	<view>
		<view class=" color-gray">
			<view class="box">
				<view class="quesBox">
					<view class="mark">
						<view class="avator-left">
							<image src="../../../../static/image/invest/u762.png" />
						</view>
						<view class="mark-right">
							<view class="mark-top">
								秀实东区寄秀实东区寄秀?
							</view>
							<view class="mark-bot">
								<view class="mark-top-left">
									<view class="position">理财师</view>
									<view class="name">李明</view>
									<view class="time">9小时前</view>
								</view>

							</view>

						</view>
					</view>
				</view>
				<view class="repBox">
					<view class="repTop">
						<view class="iconfont avator">&#xe625;</view>
						<view class="position1">理财师</view>
						<view class="name1">赵丽颖</view>
					</view>
					<view class="section">
						<textarea class="textare" value="" placeholder="123" maxlength="200" />
						</view>
						</view>
						
						<view class="questionBox">
							<view class="question">
								<label class="iconfont">&#xe66a;</label>提交
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
	page{
		background: rgb(255,255,255);
	}
	.color-gray{
		background:#f5f5f5;
		padding-top: 20upx;
	}
	.box {		
		background:rgb(255,255,255);
		padding: 0 30upx;
	}

	.quesBox {
		padding: 30upx 0;
		border-bottom: 1px solid rgba(238, 238, 238, 1);
	}

	.mark,
	.mark-top-left,
	.mark-right .mark-bot {
		display: flex;
		flex-direction: row;

	}
	.mark-top-left,
	.mark-right .mark-bot {
		align-items: center;
		justify-content: space-between;
	}
	.avator-left,
	.avator-left image {
		height: 80upx;
		width: 80upx;
		border-radius: 50%;
	}
	.mark-right {
		margin-left: 19upx;
	}
	.position ,.name{
		margin-right: 10upx;
	}
	.mark-top {
		font-size: 16px;
		line-height: 42upx;
		font-weight: bold;
		color: rgba(196, 156, 90, 1);
	}
	.mark-bot {
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 48upx;
		font-size: 12px;
	}
	.repBox{
		padding: 30upx 0 0;
	}
	.repTop{
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight:bold;
		
		line-height:44upx;
		font-size: 14px;
		padding-bottom: 30upx;
	}
	.textare{
		background: rgb(255,255,255);
		width: 630upx;
		padding: 30upx;
		border-radius:10px;
		font-weight:500;
		box-shadow:0px 10upx 10upx 0px rgba(0, 0, 0, 0.05);
		border:1px solid rgba(238,238,238,1);
	}
	.avator{
		font-size: 36upx;
		
	}
	.position1,.name1{
		margin-left:10upx;
		color:rgba(51,51,51,1);
	}
	.questionBox{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width:100%;
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
		color: rgb(255,255,255);
		
	}
	label{
		margin-right:10upx ;
	}
</style>
