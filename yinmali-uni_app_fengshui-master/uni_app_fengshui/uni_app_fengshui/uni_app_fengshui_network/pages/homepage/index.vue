<template>
	<view class="homepage">
		<view class="search-box pr">
			<mSearch :mode="2" button="inside"
					 :placeholder="defaultKeyword"
					 @search="doSearch" :value="keyword">
			</mSearch>
		</view>

		<view class="bc-swiper-box">
			<my-swiper :isHome="true" :imgs="imgsSwiper"></my-swiper>
		</view>

		<view class="notice-box">
			<view class="notice-box-title">
				<text>商城</text>
				<image :src="icons.icon6" mode=""></image>
			</view>
			<view class="notice-box-swiper">
				<notice-swiper :noticeSwiper="noticeSwiper"></notice-swiper>
			</view>
		</view>

		<my-tab />

		<hotSale :listData="hotSaleData"/>

	</view>
</template>

<script>
	import mSearch from '@/components/mehaotian-search-revision/mehaotian-search-revision.vue';
	import mySwiper from '@/components/mySwiper/mySwiper.vue'
	import noticeSwiper from '@/components/mySwiper/noticeSwiper.vue'
	import myTab from './index/tab.vue'
	import hotSale from './index/hotSale.vue'
	import footTab from './index/footTab.vue'
	export default {
		components:{mSearch,mySwiper,noticeSwiper,myTab,hotSale,footTab},
		data() {
			return {
				defaultKeyword:"搜一波新商品",
				keyword:"",

				imgsSwiper:[require('@/static/imgs/icon_5.png')],//轮播
				noticeSwiper:[{text:"asdfasdfsa阿斯顿发送到发阿斯顿发送到发撒的发斯蒂芬阿士大夫撒地方萨芬的dfasdf"},{text:"asdfasdfsadfasdf"},{text:"asdfasdfsadfasdf"}],  //公共
				hotSaleData:[],

				icons:{ // 图标
					icon6:require('@/static/imgs/icon_6.png')
				},
			}
		},
		onLoad() {
			this.getListInfo()
		},
		methods: {
			getListInfo(){
				// banner
				this.apiPost("/protalHome/bannerForApp.do",null,true).then(res=>{
					if(res.data)this.imgsSwiper=res.data.map(val=>val.pic)
				})

				// notice
				this.apiPost("/protalHome/announcementInfo.do",null,true).then(res=>{
					if(res.data)this.noticeSwiper=res.data.map(val=>{return {text:val.content}})
				})

				// 热销
				this.apiPost("/protalHome/hotProduct.do",{currPageNo:1,pageSize:20},true).then(res=>{
					if(res.data)this.hotSaleData=res.data.list
				})
			},

			/**
			 * @name 执行搜索操作
			 */
			doSearch(val){
				if(val){
					this.navigatorTo(`/pages/shops/searchShop?name=${val}`,"1")
				}
			}
		}
	}
</script>

<style lang="scss" >
	@import '@/static/css/st_mixin.scss';
	.homepage{
		overflow: auto;
		@include my-box(auto);

		.search-box{
			padding: 30upx;
			background-color: #fff;
		}
		.bc-swiper-box{
			padding: 0 30upx 36upx;
			background-color: #fff;
		}
		&-foottab{
			width: 100%;
			height: 100upx;
			bottom: 0;
		}
		.notice-box{
			margin: 20upx 0;
			padding: 20upx 30upx;
			background-color: #fff;
			display: flex;
			box-sizing: border-box;

			&-title{
				width: 125upx;
				text-align: center;
				font-size: 26upx;
				display: flex;
				flex-direction: column;
				border-right: 1upx solid #BFBFBF;
				margin: 15upx 20upx 0 0;

				image{
					width: 70upx;
					height: 32upx;
					margin: 10upx auto;
				}
			}
			&-swiper{
				height: 100upx;
				flex: 1
			}
		}

	}
</style>
