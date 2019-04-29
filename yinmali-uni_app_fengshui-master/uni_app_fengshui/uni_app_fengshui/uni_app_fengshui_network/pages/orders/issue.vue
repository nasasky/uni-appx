<template>
	<my-issue :infoReceive="infoReceive"></my-issue>
</template>

<script>
	import myIssue from '@/components/myIssue/myIssue.vue'
	import myDetail from '@/static/js/myDetail.js'
	export default {
		components:{myIssue},
		data() {
			return {
				infoReceive:{
					score:0,
					textarea_value:""
				},
			}
		},
		methods: {
			doSubmit(){
				console.log(this.infoReceive);
			}
		},
		mixins:[myDetail()]
	}
</script>
<style lang='scss'>
	
</style>
