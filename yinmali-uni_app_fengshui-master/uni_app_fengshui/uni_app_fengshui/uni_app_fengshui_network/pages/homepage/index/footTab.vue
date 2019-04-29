<template>
    <view class='foot-tab'>
		<view class="foot-tab-item" v-for="(item,index) in tabData" :key="index" @click="changeTab(item)">
			<image :src="item.isActive?item.img1:item.img0" mode=""></image>
			<text :class="item.isActive?'active':''">{{item.label}}</text>
		</view>
    </view>
</template>
	
<script>
    export default{
		props:{
			active:{
				type:[String,Number],
				default:1
			}
		},
        data() {
            return {
				tabData:[
					{label:"首页",value:"1",isActive:false,img0:require('@/static/imgs/icon_7.png'),img1:require('@/static/imgs/icon_7_1.png')}, //0为灰，1蓝
					{label:"商城",value:"2",isActive:false,img0:require('@/static/imgs/icon_8.png'),img1:require('@/static/imgs/icon_8_1.png')},
					// {label:"实单求购",isActive:false,img0:require('@/static/imgs/icon_9.png'),img1:require('@/static/imgs/icon_9_1.png')},
					{label:"我的",value:"3",isActive:false,img0:require('@/static/imgs/icon_10.png'),img1:require('@/static/imgs/icon_10_1.png')}
				]
            }
        },
        methods:{
			changeTab(item){
				if(item.isActive)return
				this.tabData.forEach(ele=>ele.isActive=false)
				this.$set(item,"isActive",true)
			}
        },
		created() {
			this.tabData.forEach(ele=>{
				ele.isActive=this.active==ele.value
			})
		}
    }
</script>
<style lang='scss'>
    .foot-tab{
		display: flex;
		justify-content: space-between;
		
		&-item{
			display: inherit;
			flex-direction: column;
			width: 30%;
			text-align: center;
			padding: 14upx 0 12upx 0;
			font-size: 24upx;
			color: #999999;
			
			image{
				width: 38upx;
				height: 38upx;
				margin: 4upx auto 0;
			}
			.active{
				color: #3682FF;
			}
		}
	}
</style>