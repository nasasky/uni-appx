export default {
	data(){
		return {
			isPulldown:false
		}
	},
	onPullDownRefresh() {
		this.isPulldown=true
		setTimeout(()=>{
			this.isPulldown=false
		},10)
	}
}