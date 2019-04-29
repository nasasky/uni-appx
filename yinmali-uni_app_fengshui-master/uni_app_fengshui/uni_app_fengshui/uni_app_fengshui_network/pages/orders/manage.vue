<template>
	<list-model :tabData="tabData" useComponent="manage-unit" :isPulldown="isPulldown"></list-model>
</template>

<script>
	import listModel from '../purchase/list.vue'
	import pulldown from '@/static/js/pulldown.js'
	export default {
		components:{listModel},
		data() {
			return {
				tabData:[
					{value:"",label:"全部"},
					{value:"10",label:"待付款"},
					{value:"20",label:"待发货"},
					{value:"50",label:"已完成"},
					{value:"0",label:"已取消"},
				]
			}
		},
		methods: {

		},
		created() {

		},
		mixins:[pulldown]
	}
</script>
