<template>
	<view class="">
		<view :class="{'my-tabs':true,'space-between':formatBe}" v-if="!hidenTabs">
			<text  v-for="(item,index) in getModelData" :key="index" :class="'tab-item '+(activeIndex==index?'active':'')" @tap="tap(index)">
				{{item.label}}
			</text>
		</view>
		
		<view v-if="screen" class="screen-search">
			<view @click="changeSales('sales')">
				销量 
				<view class="arrow-up pr"><my-iconfont :classList="'icon-arrowup iconfont '+(sales==1?'color-blue':'color-f5')" /></view>
				<view class="arrow-down pr"><my-iconfont :classList="'icon-arrowdown-copy iconfont ' + (sales==2?'color-blue':'color-f5')" /></view>
			</view> 
			<view @click="changeSales('price')">
				价格
				<view class="arrow-up pr"><my-iconfont :classList="'icon-arrowup iconfont ' + (price==1?'color-blue':'color-f5') " /></view>
				<view class="arrow-down pr"><my-iconfont :classList="'icon-arrowdown-copy iconfont ' + (price==2?'color-blue':'color-f5')" /></view>
			</view>
			<view class="screen" @click="openScreen">
				筛选
				<view class="pr"><my-iconfont classList="icon-shaixuan iconfont color-f5"></my-iconfont></view>
			</view>
		</view>
		
		<my-screen v-if="formaltShow" :screenInfo="screenInfo" :screenType="screenType" @doSure="doSure" @doReset="doReset" ></my-screen>
	</view>
</template>

<script>
	import myScreen from '@/components/myScreen/myScreen.vue'
	import myIconfont from '@/components/myIconfont/myIconfont.vue'
	import {shopTypes} from '@/static/js/commonArray.js'
	
	let screenType = [
		{prop:"categoryId",label:"分类",list:shopTypes},
		{prop:"topNameId",label:"品名",list:[]},
		{prop:"nameId",label:"商品名称",list:[]},
		{prop:"materialsId",label:"材质",list:[]},
		{prop:"featuresId",label:"特性",list:[]}
	]
	export default {
		props:['modelData','initIndex','screen','hidenTabs'],
		components:{myScreen,myIconfont},
		data() {
			return {
				defaultInfo:{
					data:[
						{label:"测试"},
						{label:"测试"},
						{label:"测试"},
					],
				},
				activeIndex:0,//默认索引
				
				sales:1,//1上2下
				price:1,//1上2下
				canTap:true,
				
				screenInfo:{
					orderBy:"",
					categoryId:"",
					topNameId:"",
					nameId:"",
					materialsId:"",
					featuresId:"",
				},//查询条件
				
				screenType:[],//筛选数据
				
			}
		},
		computed:{
			getModelData(){
				return this.modelData||this.defaultInfo.data
			},
			formatBe(){
				return this.modelData
						?this.modelData.length>4?true:false
						:false
			},
			
			formaltShow(){
				return this.$store.state.screen
			}
			
		},
		methods: {
			tap(index){
				if(!this.canTap)return;
				this.canTap=false;
				setTimeout(()=>{
					this.canTap=true
				},600)
				if(index!==this.activeIndex)this.$emit("change",index);
				this.activeIndex=index;
			},
			
			changeSales(key){
				this[key]=this[key]==1?2:1
				this.screenInfo.orderBy = (key==='sales'?"t3.salesCount ":"price ")+(this[key]===1?"asc":"desc")
				this.$emit(`changeScreen`,this.screenInfo)
			},
			
			/**
			 * @name 执行筛选操作
			 */
			doSure(){
				let params = {}
				for(var key in this.screenInfo){
					if(this.screenInfo[key])params[key]=this.screenInfo[key]
				}
				this.$emit(`changeScreen`,params)
			},
			
			doReset(){
				this.$emit(`changeScreen`,{orderBy:this.screenInfo.orderBy})
			},
			
			openScreen(){
				this.setPullDown(false)
				this.$store.commit('switch_screen')
			},
			/**
			 * @name 初始化activeIndex
			 */
			initActive:async function(){
				this.activeIndex=this.initIndex||this.activeIndex;
				
				// 获取screen数据
				let path = await this.getRoutes();
				if(path==="pages/shops/index"||path==='pages/shops/searchShop'||path==='pages/shops/shops'){
					this.apiPost("/protalHome/childType.do",{pageSize:50},true).then(res=>{
						
						if(res.data){
							screenType.forEach(ele=>{
								let obj = res.data.find(val=>val.name===ele.label)
								if(obj){
									ele.list=obj.categoryDtoList
								}
							})
						}
						this.screenType=screenType
					})
				}
			},
			
		},
		created() {
			this.initActive()
		},
		beforeDestroy() {
			this.$store.state.screen=false
		}
	}
</script>
<style lang='scss'>
	.my-tabs {
		background-color: #ffffff;
		height: 88upx;
		font-size: 28upx;
		display: flex;
		justify-content: space-around;
		box-sizing: border-box;
		border-top: 1upx solid #dddddd;
		border-bottom: 1upx solid #dddddd;
		overflow-x: auto;
		
		.tab-item{
			display: inline-block;
			line-height: 44upx;
			padding: 20upx;
			min-width: 100upx;
			text-align: center;
		}
		.tab-item.active{
			position: relative;
			color: #3682FF;
		}
		.tab-item.active::after{
			content: "";
			position: absolute;
			bottom: 0;
			left:50%;
			transform: translateX(-50%);
			width: 100%;
			border-bottom: 4upx solid #3682FF;
			animation: test ease 1 1.5s;
		}
	}
	.my-tabs.space-between{
		justify-content: space-between;
	}
	.screen-search{
		height: 80upx;
		background-color: #ffffff;
		box-sizing: border-box;
		padding: 0 28upx;
		line-height: 80upx;
		border-bottom: 1upx solid #f5f5f5;
		display: flex;
		
		>view{
			margin-right: 100upx;
			
			>view{
				display: inline;
			}
		}
		
		.arrow-up{
			top: -8upx
		}
		.arrow-down{
			top: 8upx
		}
		.screen{
			margin-left: auto;
			margin-right: 30upx;
			color: #666666;
		}
	}
	@keyframes test{
		0%{width: 100%}
		50%{width: 150%}
		100%{width: 100%}
	}
	.color-f5{
		color: #dddddd;
	}
</style>
