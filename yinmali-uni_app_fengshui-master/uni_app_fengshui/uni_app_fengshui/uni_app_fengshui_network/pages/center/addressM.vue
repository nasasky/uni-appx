<template>
	<view class='address-m'>
		<view class="address-m-item" v-for="(item,index) in listData" :key="index">
			<view class="address-m-item-head">
				<text>收货人：{{item.name}}</text>
				<text class="fr">{{item.phone}}</text>
			</view>
			<view class="address-m-item-body">
				{{item.address}}
			</view>
			<view class="address-m-item-foot">
				<view class="box" @click.stop="setAddress(item)" hover-class="active">
					<image :src="item.status==0?icon23:icon22" mode=""></image>
					<text :class="item.status==0?'color-blue':''">设置默认</text>
				</view>
				<view class="operate box">
					<view class="" hover-class="active" @click="doEdit(item)">
						<image :src="icon24" mode=""></image>
						<text>编辑</text>
					</view>
					
					<view class="" hover-class="active" @click="doDel(item,index)">
						<image :src="icon25" mode=""></image>
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="listData.length==0" class="no-data">
			暂时没有数据
		</view>
		<one-button label="添加新地址" @click="toAddNew" ></one-button>
	</view>
</template>

<script>
	import oneButton from '@/components/onButton/oneButton.vue'
	export default {
		components:{oneButton},
		data() {
			return {
				icon22:require('@/static/imgs/myCenter/icon22.png'),
				icon23:require('@/static/imgs/myCenter/icon23.png'),
				icon24:require('@/static/imgs/myCenter/icon24.png'),
				icon25:require('@/static/imgs/myCenter/icon25.png'),
				
				listData:[]
			}
		},
		methods: {
			/**
			 * @name 切换到添加新地址
			 */
			toAddNew(){
				this.navigatorTo('/pages/center/addNewAddress')
			},
			
			/**
			 * @name 设置默认地址
			 */
			setAddress(item){
				this.apiPost("/address/updateAddress.do",{id:item.id}).then(res=>{
					if(res.status===0){
						this.listData.forEach(ele=>{ele.status=1})
						this.$set(item,"status",0)
						uni.setStorageSync(Window.allAddress,this.listData)
					}
				})
			},
			
			/**
			 * @name 删除地址
			 */
			doDel(item,index){
				if(item.status==0){
					this.showToast({status:2,msg:"不能删除默认项"})
					return
				}
				this.apiPost("/address/delAddress.do",{id:item.id}).then(res=>{
					if(res.status===0){
						this.listData.splice(index,1)
					}
				})
			},
			
			/**
			 * @name 编辑地址
			 */
			doEdit(item){
				uni.setStorageSync(Window.myRAddress,item);
				this.navigatorTo('/pages/center/addNewAddress?id='+item.id)
			},
			
			getListData(){
				let params = {
					currPageNo:1,
					pageSize:20
				}
				this.apiPost("/address/getAddressList.do",params,true).then(res=>{
					this.listData=res.data.list
				})
			}
		},
		onShow() {
			this.getListData()
		},
	}
</script>
<style lang='scss'>
	.address-m {
		background-color: #F1F1F1;
		height: 100%;
		overflow: auto;
		
		&-item{
			background-color: #fff;
			padding: 30upx 30upx 10upx;
			margin-bottom: 20upx;
			
			&-head{
				font-size: 28upx;
				color: #3c3c3c;
			}
			&-body{
				font-size: 26upx;
				color: #aaa;
				line-height: 40upx;
				padding: 10upx 0;
				border-bottom: 1upx solid #f5f5f5;
			}
			
			&-foot{
				padding: 10upx 0;
				font-size: 24upx;
				color: #3c3c3c;
				line-height: 40upx;
				display: flex;
				
				image{
					width: 27upx;
					height: 26upx;
					margin-right:10upx;
					vertical-align: middle;
				}
				text{
					vertical-align: middle;
				}
				
				.operate{
					margin-left: auto;
					display: flex;
					
					>view{
						margin-left: 40upx;
						
						image,text{
							vertical-align: middle;
						}
					}
				}
			}
			
		}
	}
	.active:active{
		opacity: .8;
	}
</style>
