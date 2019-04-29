
<template>
	<view class="purchase-list0">
		<my-tabs @change="tapChange" @changeScreen="changeScreen" :modelData="formatTabData" :hidenTabs="hidenTabs" :screen="screen"></my-tabs>
		
		<scroll-view v-if="listData.length>0" :class='formatClass' scroll-y="true" @scrolltolower="scrolltolower" @scroll="scroll">
			
			<view v-if="formatName==='my-unit'">
				<my-unit  v-for="(item,index) in listData" :key="index" :info="item" :detailUrl="formatDetailUrl" ></my-unit>
			</view>
			
			<view v-else-if="formatName==='ask-unit'">
				<ask-unit  v-for="(item1,index1) in listData" :key="index1" :info="item1" :detailUrl="formatDetailUrl" :sureUrl="formatSureUrl"></ask-unit> 
			</view>
			
			<view v-else-if="formatName==='self-unit'">
				<self-unit v-for="(item2,index2) in listData" :info="item2" :key="index2" :detailUrl="formatDetailUrl" :sureUrl="formatSureUrl"></self-unit>
			</view>
			
			<view v-else-if="formatName==='quate-unit'">
				<quate-unit v-for="(item3,index3) in listData" :info="item3" :key="index3"></quate-unit>
			</view>
			
			<view v-else-if="formatName==='manage-unit'">
				<manage-unit v-for="(item4,index4) in listData" :info="item4" :key="index4"></manage-unit>
			</view>
			
			<view v-else-if="formatName==='product-unit'">
				<product-unit v-for="(item5,index5) in 10" :key="index5"></product-unit>
			</view>
			
			<view v-else-if="formatName==='shop-unit'">
				<shop-unit v-for="(item6,index6) in listData" :info="item6" :key="index6"></shop-unit>
			</view>
			
			<view v-else-if="formatName==='news-unit'">
				<news-unit v-for="(item7,index7) in listData" :info="item7" :key="index7"></news-unit>
			</view>
			
			<view v-else-if="formatName==='comment-unit'">
				<comment-unit v-for="(item8,index8) in listData" :info="item8" :listTotal="listTotal" :index="index8" :key="index8"></comment-unit>
			</view>
			
		</scroll-view>
		<text class="no-data" v-if="listData.length==0">没有您要的宝贝</text>
		<my-loading></my-loading>
	</view>
</template>
<script>
	import myTabs from '@/components/myTabs/myTabs.vue'
	import myPull from '@/static/js/myPull.js'
	import myUnit from '@/components/myUnits/purchaseUnit/unit.vue'
	import askUnit from '@/components/myUnits/askUnit/askUnit.vue'
	import selfUnit from '@/components/myUnits/selfUnit/selfUnit.vue'
	import quateUnit from '@/components/myUnits/quate/quateUnit.vue'
	import manageUnit from '@/components/myUnits/manage/manageUnit.vue'
	import productUnit from '@/components/myUnits/productUnit/productUnit.vue'
	import shopUnit from '@/components/myUnits/shopUnit/shopUnit.vue'
	import newsUnit from '@/components/myUnits/newsUnit/newsUnit.vue'
	import commentUnit from '@/components/myUnits/commentUnit/commentUnit.vue'
	
	import listUrlData from './listUrlData.js'
	export default {
		props:['tabData','useComponent','detailUrl','sureUrl','screen','hidenTabs','isShop',"isPulldown","idThis",'options',"shopId"],
		components:{myTabs,myUnit,askUnit,selfUnit,quateUnit,manageUnit,productUnit,shopUnit,newsUnit,commentUnit},
		data() {
			return {
				modelData:[
					{value:"",label:"全部"},
					{value:"0",label:"正在报价"},
					{value:"1",label:"报价已结束"},
					{value:"2",label:"已取消"},
				],
				hasMore:true,
				status:"",
				listData:[],
				listTotal:0,
				screenInfo:{},//筛选数据
				defaultDetailUrl:"/pages/purchase/detail"
			}
		},
		watch:{
			isPulldown(){
				if(this.isPulldown)this.refresh()
			}
		},
		computed:{
			formatTabData(){
				return this.tabData || this.modelData
			},
			
			formatClass(){
				return  (this.hidenTabs?"":"purchase-list ")+(this.screen?" less-height":"")+(this.isShop?" less-height1":"")
			},
			
			/**
			 * @name 动态组件
			 */
			formatName(){
				return this.useComponent||"my-unit"
			},
			
			/**
			 * @name 格式化详情地址
			 */
			formatDetailUrl(){
				return this.detailUrl || this.defaultDetailUrl
			},
			
			formatSureUrl(){
				return this.sureUrl
			}
		},
		methods: {
			/**
			 * @name 获取列表
			 */
			getList(page,done){
				if(!this.hasMore&&page!=1)return;
				 console.log(`获取第${page}页数据`);
				 let obj = listUrlData.get(this.useComponent||"my-unit")
				 var params = obj.params||{
					 currPageNo:1,
					 pageSize:20,
					 status:""
				 }
				 params[obj.pageKey || "currPageNo"]=page
				 params.status=this.status;
				 if(obj.delStatus)delete params.status;
				 if(obj.hasId)params.id=this.idThis;
				 if(this.options)params = {...params,...this.options};
				 if(obj.shops)params = {...params,...this.screenInfo};
				 if(this.shopId)params.merchantId=this.shopId; //赋予店铺id
				 console.log(params)
				console.log(obj)
				 this.apiPost(obj.list,params,true).then(res=>{
					 this.hasMore=res.data.hasNextPage
					 // done(res.data.list)
					 this.listTotal=res.data.total;
					 setTimeout(()=>{
						 done(res.data.list)
					 },600)
				 })
			},
			
			/**
			 * @name 触底加载
			 */
			scrolltolower(event){
				// if(!this.hasMore)return
				this.getList(this.page,this.__pulldone)
			},
			
			scroll(e){
				this.setPullDown(e.detail.scrollTop<10)
			},
			
			/**
			 * @name 改变tab
			 * @param val 索引
			 */
			tapChange(val){
				this.status=(this.tabData || this.modelData)[val].value
				this.hasMore=true;
				uni.startPullDownRefresh();
			},
			
			/**
			 * @name 查询
			 */
			changeScreen(obj){
				this.screenInfo=obj
				uni.startPullDownRefresh();
			}
		},
		created() {
			setTimeout(()=>{
				uni.startPullDownRefresh();
			},10)
		},
		mixins:[myPull({})]
	}
</script>
<style lang='scss'>
	@import '@/static/css/st_mixin.scss';
	
	.purchase-list0 {
		@include my-box(0,calc(100vh - 88upx));
		
		scroll-view{
			height:100%;
			overflow: auto;
		}
		.purchase-list{
			height:calc(100% - 88upx)
		}
		.purchase-body{
			@include my-height(calc(100% - 88upx))
		}
		.less-height{
			height: calc(100% - 80upx);
			overflow: auto;
		}
	}
</style>
