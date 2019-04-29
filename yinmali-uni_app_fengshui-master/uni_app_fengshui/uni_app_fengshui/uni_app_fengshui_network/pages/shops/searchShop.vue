<template>
	<view class='shops'>
		<list-model :hidenTabs="true" :screen="true" useComponent="shop-unit" :options="options" :isPulldown="isPulldown" ></list-model>
	</view>
</template>

<script>
	import listModel from '../purchase/list.vue'
	import pulldown from '@/static/js/pulldown.js'
	export default {
		components:{listModel},
		data() {
			return {
				options:""
			}
		},
		onLoad(opt) {
			this.options=opt
		},
		methods: {

		},
		mixins:[pulldown]
	}
</script>
<style lang='scss'>
	.shops {
		height: 100%;
	}
</style>
