<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* @import "./common/border.css"; */
	@import "./common/reset.css";
	@import "./common/zpui.css";
	/*每个页面公共css */
	
	.uni-tabbar .uni-tabbar-border {
		box-shadow: 0 -5px 5px 0 rgba(0, 0, 0, 0.3);
	}
	.uni-tabbar .uni-tabbar__icon {
		width: 40upx;
		height: 40upx;
	}

</style>
