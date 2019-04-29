<template>
	<myCenter :info="info"></myCenter>
</template>

<script>
	import myCenter from '@/components/myCenter/myCenter'
	export default {
		components:{myCenter},
		data() {
			return {
				info:{},
			}
		},
		methods: {
			initInfo(){
				this.apiPost('/consumerCenter/buyList.do',null,true).then((res)=>{
					this.info = Object.assign(uni.getStorageSync(Window.userInfo),{realRate:res.data?res.data.realRate:0})
				})
			}
		},
		onShow() {
			this.initInfo()
		}
	}
</script>
<style lang='scss'>
	.center {}
</style>
