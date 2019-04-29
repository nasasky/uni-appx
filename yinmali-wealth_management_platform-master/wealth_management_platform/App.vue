<script>
	export default {
		onLaunch: function() {
		/* 	uni.switchTab({
				url: './pages/index/index',
				success: res => {},
				fail: () => {},
				complete: () => {}
			}); */
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	@import "./common/iconfont.css";


	page {
		min-height: 100%;
		font-size: 13px;
		background: #f5f5f5;
		color: #333333;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;


	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		top: 0;

	}

	.twoLines {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.threeLines {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:3;
	}
	uni-radio .uni-radio-wrapper .uni-radio-input{
		height: 16px;
		width: 16px;
		border:2px solid rgba(61,58,58,1);
		background:none;
	}
	uni-radio .uni-radio-input.uni-radio-input-checked{
		background: rgba(196,156,90,1);
		border-color: rgba(196,156,90,1);
	}
	uni-radio .uni-radio-input.uni-radio-input-checked:before{
		font-size: 14px;
		left: 45%;
	}
	.uni-video-container .uni-video-cover{
		background-color:rgba(0,0,0,0)
	}
	uni-switch .uni-switch-input{
		
	}
	uni-switch .uni-switch-input.uni-switch-input-checked{
		border-color: rgba(196, 156, 90, 1) !important;
		background-color: rgba(196, 156, 90, 1) !important;
	}
	
</style>
