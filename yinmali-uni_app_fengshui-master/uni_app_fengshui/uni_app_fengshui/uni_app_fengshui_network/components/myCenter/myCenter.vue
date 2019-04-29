<template>
	<view class='my-center'>
		<view v-for="(item,index) in modelData" :key="index" class="my-center-item">
			<text v-if="item.title" class="my-center-item-title">{{item.title}}</text>
			
			<user-info v-if="item.type==='userinfo'" :baseInfo="foramtInfo"></user-info>
			<tab-menu v-else-if="item.type==='tabmenu'" :tabModel="item.list"></tab-menu>
			<list-mene v-else-if="item.type==='listmenu'" :tabModel="item.list"></list-mene>
		</view>
	</view>
</template>

<script>
	import userInfo from './common/userInfo.vue'
	import tabMenu from './common/tabMenu.vue'
	import listMene from './common/listMenu.vue'
	export default {
		components:{userInfo,tabMenu,listMene},
		props:{
			modelData:{ //列表的模板
				type:Array,
				default:function(){
					return [
						{
							type:"userinfo"
						},
						{title:"买家中心",type:"tabmenu",list:[//tabmenu横向tab
							{label:"求购管理",icon:require('@/static/imgs/myCenter/icon1.png'),url:"/pages/purchase/list"},
							{label:"自营订单",icon:require('@/static/imgs/myCenter/icon2.png'),url:"/pages/orders/selfList"},
							{label:"第三发订单",icon:require('@/static/imgs/myCenter/icon3.png'),url:"/pages/orders/thirdList"},
							{label:"采购总览",icon:require('@/static/imgs/myCenter/icon4.png')},
						]},
						{title:"卖家中心",type:"tabmenu",list:[
							{label:"店铺管理",icon:require('@/static/imgs/myCenter/icon5.png'),url:"/pages/shops/shops",url:"/pages/shops/manage"},
							{label:"报价管理",icon:require('@/static/imgs/myCenter/icon6.png'),url:"/pages/orders/quate"},
							{label:"我的订单",icon:require('@/static/imgs/myCenter/icon7.png'),url:"/pages/orders/manage"},
							{label:"商品管理",icon:require('@/static/imgs/myCenter/icon8.png'),url:"/pages/product/manage"},
						]},
						{title:"个人资料",type:"listmenu",list:[//listmenu 纵向tab
							{label:"基本资料",icon:require('@/static/imgs/myCenter/icon9.png'),url:"/pages/center/baseInfo"},
							{label:"消息中心",icon:require('@/static/imgs/myCenter/icon10.png'),url:"/pages/center/news"},
							{label:"我的积分",icon:require('@/static/imgs/myCenter/icon11.png'),url:"/pages/center/integral"},
							{label:"企业认证",icon:require('@/static/imgs/myCenter/icon12.png'),url:"/pages/center/identify"},
							{label:"地址管理",icon:require('@/static/imgs/myCenter/icon13.png'),url:"/pages/center/addressM"},
						]},
						{title:"其他功能",type:"listmenu",list:[
							{label:"修改密码",icon:require('@/static/imgs/myCenter/icon14.png'),url:""},
						]}
					]
				}
			},
			info:{
				type:Object,
				default:function(){
					return {
						
					}
				}
			}
		},
		computed:{
			foramtInfo(){
				return this.info
			}
		},
		data() {
			return {
				
			}
		},
		mounted() {
			let info = uni.getStorageSync(Window.userInfo)
			this.modelData[4].list[0].url="/pages/login/signup?status=3&&phone="+info.phone
		}
	}
</script>
<style lang='scss'>
	
	.my-center {
		height: 100%;
		background-color: #fff;
		padding: 24upx 28upx;
		box-sizing: border-box;
		overflow: auto;
		
		&-item{
			box-shadow: 0 0 32upx 4upx rgba(10,13,47,0.05);
			box-sizing: inherit;
			border-radius: 10upx;
			margin-bottom: 40upx;
			
			&-title{
				font-size: 32upx;
				color: #7b7b7b;
				position: relative;
				line-height: 100upx;
				padding-left: 30upx;
			}
			&-title:before{
				content: "";
				position: absolute;
				height: 100%;
				left: -0upx;
				width: 7upx;
				top: 50%;
				transform: translateY(-50%);
				background-color: #4768f3;
			}
		}
	}
</style>
