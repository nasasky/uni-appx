<template>
	<list-model :tabData="tabData" useComponent="product-unit" :screen="true"></list-model>
</template>

<script>
	import listModel from '../purchase/list.vue'
	export default {
		components:{listModel},
		data() {
			return {
				tabData:[
					{value:"",label:"全部"},
					{value:"",label:"待付款"},
					{value:"",label:"待发货"},
					{value:"",label:"待收货"},
					{value:"",label:"待评价"},
				]
			}
		},
		methods: {

		},
		created() {

		},
	}
</script>
