<template>
	<list-model :tabData="tabData" useComponent="quate-unit" :detailUrl="detailUrl" :sureUrl="sureUrl" :isPulldown="isPulldown" ></list-model>
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
					{value:"0",label:"未报价"},
					{value:"1",label:"已报价"},
					{value:"2",label:"已拒绝"},
				],
				detailUrl:"/pages/orders/thirdSure",
				sureUrl:"/pages/orders/thirdSure",//确认地址
			}
		},
		methods: {

		},
		created() {

		},
		mixins:[pulldown]
	}
</script>
<style lang='scss'>
	.quate {}
</style>
