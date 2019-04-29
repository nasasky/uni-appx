<template>
	<list-model :hidenTabs="true" :screen="false" useComponent="comment-unit" :isPulldown="isPulldown" :idThis="idThis"></list-model>
</template>

<script>
	import listModel from '../purchase/list.vue'
	import pulldown from '@/static/js/pulldown.js'
	export default {
		components:{listModel},
		data() {
			return {
				idThis:"",
			}
		},
		onLoad(opt) {
			this.idThis=opt.id
		},
		methods: {

		},
		mixins:[pulldown]
	}
</script>
