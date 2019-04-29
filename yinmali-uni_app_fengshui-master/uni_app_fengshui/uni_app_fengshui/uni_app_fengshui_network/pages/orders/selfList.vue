<template>
	<list-model :tabData="tabData" useComponent="self-unit" :detailUrl="detailUrl" :isPulldown="isPulldown" ></list-model>
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
					{value:"0",label:"待付款"},
					{value:"1",label:"待发货"},
					{value:"2",label:"待收货"},
					{value:"3",label:"待评价"},
					// 0待付款 1 待发货 2已发货 3已完成 4已取消 5已关闭
				],
				detailUrl:"/pages/orders/selfDetail"
			}
		},
		methods: {

		},
		mixins:[pulldown]
	}
</script>
