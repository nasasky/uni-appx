let arr = [
	["pages/purchase/detail",{
		detail:"/consumerCenter/checkAskBuyListDetail.do"
	}]
]

export default ()=>{
	return {
		data(){
			return {
				idThis:"", //当前详情的id
				detailInfo:{},//详情
			}
		},
		onLoad(opt){
			console.log(opt);
			this.idThis=opt.id
		},
		methods:{
			getDetailInfo: async function(){
				let path = await this.getRoutes()
				let obj = new Map(arr).get(path)
				if(!obj)return;
				let url = obj.detail;
				this.apiPost(url,{id:this.idThis},true).then(res=>{
					this.detailInfo=res.data
				})
			}
		},
		created(){
			this.getDetailInfo()
		}
	}
}