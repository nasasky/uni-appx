<template>
    <view class='tab'>
		<view class="tab-item" v-for="(item,index) in tabData" :key="index" @click="doClick(item)">
			<image :src="item.img" mode=""></image>
			<text>{{item.label}}</text>
		</view>
    </view>
</template>
	
<script>
    export default{
        data() {
            return {
				tabData:[
					{value:"1",label:"找风",img:require('@/static/imgs/icon_11.png')},
					{value:"2",label:"找水",img:require('@/static/imgs/icon_12.png')},
					{value:"3",label:"找电",img:require('@/static/imgs/icon_13.png')},
					{value:"4",label:"找消防",img:require('@/static/imgs/icon_14.png')},
					{label:"资讯",img:require('@/static/imgs/icon_15.png')},
				]
            }
        },
        methods:{
			doClick(item){
				if(item.value){
					this.navigatorTo("/pages/shops/searchShop?categoryId="+item.value)
				}
			}
        },
        created() {
	
        },
    }
</script>
<style lang='scss'>
    .tab{
		display: flex;
		background-color: #fff;
		padding: 32upx 0 20upx 0;
		
		&-item{
			width: 20%;
			text-align: center;
			
			image{
				width: 90upx;
				height: 90upx;
			}
			
			text{
				display: block;
				font-size: 28upx;
				margin-top: 12upx;
			}
		}
		&-item:active{
			opacity: .8;
		}
	}
</style>