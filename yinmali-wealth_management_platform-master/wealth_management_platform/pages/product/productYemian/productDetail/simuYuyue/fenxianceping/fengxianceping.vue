<template>
	<view class="fxcp-box">
		<view class="tishi">
			以下一系列问题可在您选择合适的私募基金前，协助评估您的风险承受你能力，
			理财方式和投资目标
		</view>
		<view class="ques-box">
			<view class="ques-item">
				<view class="ques-title">
					1.您的职业稳定性如何（）
				</view>
				<view class="ques-answer-box">
					<view class="ques-answer-item">
						A.很稳定
					</view>
					<view class="ques-answer-item">
						A.较稳定
					</view>
					<view class="ques-answer-item">
						A.不稳定
					</view>
					<view class="ques-answer-item">
						A.无业
					</view>
					<view class="ques-answer-item">
						A.很稳定
					</view>
				</view>
			</view>
				<view class="ques-item">
					<view class="ques-title">
						1.您的职业稳定性如何（）
					</view>
					<view class="ques-answer-box">
						<view class="ques-answer-item">
							A.很稳定
						</view>
						<view class="ques-answer-item">
							A.较稳定
						</view>
						<view class="ques-answer-item">
							A.不稳定
						</view>
						<view class="ques-answer-item">
							A.无业
						</view>
						<view class="ques-answer-item">
							A.很稳定
						</view>
					</view>
				</view>
			
				<view class="ques-item">
					<view class="ques-title">
						1.您的职业稳定性如何（）
					</view>
					<view class="ques-answer-box">
						<view class="ques-answer-item">
							A.很稳定
						</view>
						<view class="ques-answer-item">
							A.较稳定
						</view>
						<view class="ques-answer-item">
							A.不稳定
						</view>
						<view class="ques-answer-item">
							A.无业
						</view>
						<view class="ques-answer-item">
							A.很稳定
						</view>
					</view>
				</view>
			
				<view class="ques-item">
					<view class="ques-title">
						1.您的职业稳定性如何（）
					</view>
					<view class="ques-answer-box">
						<view class="ques-answer-item">
							A.很稳定
						</view>
						<view class="ques-answer-item">
							A.较稳定
						</view>
						<view class="ques-answer-item">
							A.不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定不稳定
						</view>
						<view class="ques-answer-item">
							A.很稳定很稳定很稳定很稳定很稳定很稳定
						</view>
						<view class="ques-answer-item">
							A.很稳定很稳定很稳定很稳定很稳定很稳定
						</view>
					</view>
				</view>
			
				<view class="ques-item">
					<view class="ques-title">
						1.您的职业稳定性如何（）
					</view>
					<view class="ques-answer-box">
						<view class="ques-answer-item">
							A.很稳定
						</view>
						<view class="ques-answer-item">
							A.较稳定
						</view>
						<view class="ques-answer-item">
							A.不稳定
						</view>
						<view class="ques-answer-item">
							A.无业
						</view>
						<view class="ques-answer-item">
							A.很稳定
						</view>
					</view>
				</view>
				
		</view>
		<view class="questionBox">
			<view class="question" @click="toCepingjieguo">
				<label class="iconfont">&#xe66a;</label>提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},methods:{
			toCepingjieguo(){
				uni.navigateTo({
					url: './cepingjieguo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.tishi {
		padding: 30upx;
		font-size: 12px;

		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		line-height: 34upx;
	}

	.ques-box {
		background: rgb(255, 255, 255);
		padding: 0 42upx;
	}

	.ques-title {
		font-size: 15px;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 80upx;
	}

	.ques-answer-box {
		padding: 0 18upx;
	}

	.ques-answer-item {

		
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		line-height: 50upx;
	}
	.questionBox{
		display: flex;
		flex-direction: row;
		justify-content: center;
		width:100%;
		padding: 40upx 0;
		text-align: center;
		background: rgb(255, 255, 255);
		
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
		margin-right: 10upx;
	}
</style>
