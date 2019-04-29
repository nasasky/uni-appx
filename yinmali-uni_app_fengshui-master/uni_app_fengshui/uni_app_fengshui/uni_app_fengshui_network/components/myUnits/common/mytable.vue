<template>
    <view class="box">
    	<scroll-view :scroll-x="true" class='my-table'>
    		<view class="table-head">
    			<text v-for="(item,index) in formatModel" :key="index" >
    				{{item.label}}
    			</text>
    		</view>
    		
    		<view class="table-body" v-for="(ele,index0) in formatInfo.askInfoList" :key="index0">
    			<text v-for="(item,index1) in formatModel" :key="index1" >
    				{{ele[item.prop]}}
    			</text>
    		</view>
    	</scroll-view>
		<view class="remark" v-if="!hideRemark">
			<text>备注：</text>
			<view class="remark-content">
				{{formatInfo.remark}}
			</view>
		</view>
		<view class="limit-time" v-if="!hideTime">
			<text>报价时限：</text>
			<text>{{formatInfo.timeLimit || 0}} 分钟</text>
		</view>
    </view>
</template>
	
<script>
	import {shopTypes} from "@/static/js/commonArray.js"
    export default{
		props:['tableModel','info','hideTime',"hideRemark" ],
        data() {
            return {
				
            }
        },
		computed:{
			/**
			 * @name 获取表头
			 */
			formatModel(){
				return this.tableModel|| [
					{prop:"type",label:"分类"},
					{prop:"commodity",label:"品名"},
					{prop:"productName",label:"商品名称"},
					{prop:"texture",label:"材质"},
					{prop:"specification",label:"特性"},
					{prop:"unit",label:"数量"},
					{prop:"area",label:"地区"},
					{prop:"price",label:"报价"}
				]
			},
			
			formatInfo(){
				if(this.info.askInfoList)this.info.askInfoList.forEach(ele=>{
					let obj = shopTypes.find(val=>val.value==ele.kind)
					ele.type=obj?obj.label:ele.kind
				})
				return this.info
			},
		}
    }
</script>
<style lang='scss'>
	.box{
		background-color: #ffffff;
	}
    .my-table{
		padding: 20upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #f5f5f5;
		
		.table-head,.table-body{
			display: flex;
			min-width: 100%;
			
			text{
				display: inline-block;
				min-width: 140upx;
				flex: 1;
				overflow: hidden;
				text-align: center;
				padding: 20upx;
				line-height: 30upx;
				border-top: 2upx solid #cccccc;
				border-right: 2upx solid #cccccc;
			}
		}
		.table-head{
			border-left: 2upx solid #cccccc;
			text{
				background-color: #eeeeee;
			}
		}
		.table-body{
			border-left: 2upx solid #cccccc;
		}
		.table-body:nth-last-of-type(1) text{
			border-bottom: 2upx solid #cccccc;
		}
	}
	.remark{
		padding: 20upx;
		display: flex;
		box-sizing: border-box;
		border-bottom: 2upx solid #f5f5f5;
		
		.remark-content{
			flex: 1;
			flex-wrap: wrap;
		}
	}
	.limit-time{
		padding: 20upx;
		margin-bottom: 20upx;
	}
</style>