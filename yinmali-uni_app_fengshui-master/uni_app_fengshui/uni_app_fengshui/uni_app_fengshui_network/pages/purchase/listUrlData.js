let listUrlData = [
	["news-unit", {
		list:"/userMessage/getMessageList.do",
		params:{
			currPageNo:1,
			pageSize:20,
			status:2,//状态 0未读 1已读 2全部
		},
		pageKey:"currPageNo"
	}],
	["quate-unit",{ //我的报价
		list:"/quotationManage/listQuotations.do"
	}],
	["my-unit",{
		list:"/consumerCenter/checkAskBuyList.do"
	}],
	["self-unit",{ //自营订单
		list:"/consumerCenter/checkOrderList.do",
		params:{
			index:1,//第三方卖家订单 0 风水网自营订单1
			currPageNo:1,
			pageSize:20,
			status:"",//订单状态:0-已取消-10-未付款，20-已付款，40-已发货，50-交易成功，60-交易关闭
		}
	}],
	["ask-unit",{
		list:"/consumerCenter/checkOrderList.do",
		params:{
			index:0,//第三方卖家订单 0 风水网自营订单1
			currPageNo:1,
			pageSize:20,
			status:"",//订单状态:0-已取消-10-未付款，20-已付款，40-已发货，50-交易成功，60-交易关闭
		}
	}],
	["comment-unit",{
		list:"/product/productComments",
		params:{
			currPageNo:1,
			pageSize:20,
			id:"",
		},
		delStatus:true,//是否删除status
		hasId:true,//是由添加路由id
	}],
	["shop-unit",{
		list:"/protalHome/productList.do",
		params:{
			currPageNo:1,
			pageSize:20
		},
		delStatus:true,//是否删除status
		shops:true,//是否是商城
	}]
]


export default new Map(listUrlData)