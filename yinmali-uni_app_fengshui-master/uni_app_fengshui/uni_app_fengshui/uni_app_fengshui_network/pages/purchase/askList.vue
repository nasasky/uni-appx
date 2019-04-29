<template>
    <list-model :tabData="tabData" useComponent="ask-unit" :detailUrl="detailUrl" ></list-model>
</template>
	
<script>
	import listModel from './list.vue'
    export default{
		components:{listModel},
        data() {
            return {
				tabData:[
					{value:"",label:"全部"},
					{value:"",label:"未报价"},
					{value:"",label:"已报价"},
					{value:"",label:"已拒绝"},
					{value:"",label:"已取消"},
				],
				detailUrl:"/pages/purchase/askDetail"
            }
        },
        methods:{
	
        },
    }
</script>
<style lang='scss'>
    
</style>