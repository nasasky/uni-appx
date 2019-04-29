<template>
    <list-model useComponent="news-unit" :hidenTabs="true" :screen="false" :isPulldown="isPulldown" ></list-model>
</template>
	
<script>
	import listModel from '../purchase/list.vue'
	import pullDown from '@/static/js/pulldown.js'
    export default{
		components:{listModel},
        data() {
            return {
				
            }
        },
		
        methods:{
			
        },
		mixins:[pullDown]
    }
</script>
<style lang='scss'>
	
</style>