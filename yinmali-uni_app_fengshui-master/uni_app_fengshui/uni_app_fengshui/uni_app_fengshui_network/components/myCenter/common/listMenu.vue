<template>
    <view class='list-menu'>
		<view class="list-menu-item" v-for="(item,index) in formatTabModel" :key="index" @click="doClick(item)">
			<image :src="item.icon" mode=""></image>
			<text>{{item.label}}</text>
			<image class="arrow-right" :src="arrow" mode=""></image>
		</view>
    </view>
</template>
	
<script>
    export default{
		props:{
			tabModel:{
				type:Array,
				default:function(){
					return []
				}
			}
		},
		data(){
			return {
				arrow:require('@/static/imgs/myCenter/icon15.png')
			}
		},
		computed:{
			formatTabModel(){
				return this.tabModel
			}
		},
        methods:{
			/**
			 * name 执行点击操作
			 */
			doClick(item){
				if(item.url)this.navigatorTo(item.url);
				if(!item.url)this.showToast({msg:"维护升级中",status:"1"})
			}
        },
    }
</script>
<style lang='scss'>
	.list-menu{
		font-size: 32upx;
		color: #7b7b7b;
		
		&-item{
			display: flex;
			box-sizing: border-box;
			padding: 30upx;
			border-top: 1upx solid #f5f5f5;
			
			>image{
				width: 54upx;
				height: 54upx;
				margin-right: 20upx;
				vertical-align: middle
			}
			text{
				line-height: 54upx;
				vertical-align: middle
			}
			.arrow-right{
				width: 25upx;
				height: 31upx;
				margin: 12upx 0 10upx auto;
			}
		}
		&-item:active{
			opacity: .8;
		}
	}
</style>