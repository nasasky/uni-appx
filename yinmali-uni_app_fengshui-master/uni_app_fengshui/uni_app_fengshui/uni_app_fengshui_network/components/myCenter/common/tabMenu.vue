<template>
    <view class='tab'>
		<view class="tab-item" v-for="(item,index) in formatTabModel" :key="index" @click="doClick(item)">
			<image :src="item.icon" mode=""></image>
			<text>{{item.label}}</text>
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
    .tab{
		display: flex;
		background-color: #fff;
		padding: 0 30upx 30upx;
		
		&-item{
			width: auto;
			flex: 1;
			text-align: center;
			
			image{
				width: 70upx;
				height: 70upx;
			}
			
			text{
				display: block;
				font-size: 30upx;
				color: #9a9a9a;
			}
		}
		&-item:active{
			opacity: .8;
		}
	}
</style>