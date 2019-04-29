<template>
	<view class="content">
		<!-- <view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index"
			@tap="openinfo" :data-newsid="item.post_id">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.author_avatar"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.title}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
	 -->
	 
		<swiperTemp :imgUrl="imgUrl"></swiperTemp>
		<view class="tiaojian">
			<view :class="id==item.id?'active':''" v-for="item in xuanze" :key="item.id" @click="fresh(item.id)">
			{{item.item}}
				
			</view>
	 
	 </view>
		<newsListTemp :newsList="lists"></newsListTemp>

	</view>
</template>

<script>
	import newsListTemp from '../../../components/newsList-temp.vue';
	import swiperTemp from '../../../components/swiper-temp.vue';
	export default {
		components:{
			newsListTemp,
			swiperTemp
		},
		data(){
			return{
				imgUrl:[
					{"id":1,"url":"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480"},
					{"id":2,"url":"http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480"},
					{"id":3,"url":"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480"}
				],
				id:1,
				xuanze:[{
					item:"全部",
					id:1
				},{
					item:"热点资讯",
					id:2
				},{
					item:"行业观点",
					id:3
				}],
				lists:[]
			}
		},
		onLoad:function(){
			uni.showLoading();
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					this.lists=res.data
					console.log(res);
					uni.hideLoading()
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods:{
			openinfo(e){
				
				var newsid=e.currentTarget.dataset.newsid
				uni.navigateTo({
					url:'info/info?newsid='+newsid
				})
			},
			
				fresh(id){
					this.id=id
				}
			
		}
	}
</script>

<style>
.tiaojian{
	display: flex;
	flex-direction: row;
	background: #FFFFFF;
	height: 70upx;
	align-items: center;
	text-align: center;
	justify-content: space-around;
	margin-top: 20upx;
	padding-bottom: 3px;
	}
.tiaojian view{
	
	line-height: 70upx;
	color: #999999;
	
}
.tiaojian .active{
	border-bottom: 3px solid #c49c5a;
	color:  #c49c5a;
}
</style>
