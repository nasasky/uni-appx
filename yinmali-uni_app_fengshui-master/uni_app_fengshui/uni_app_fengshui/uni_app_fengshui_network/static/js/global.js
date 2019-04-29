Window.PATH="/geomantic"

// #ifdef APP-PLUS
Window.PATH="http://www.zhaodsf.com/geomantic"
// #endif



/**
 * @name 检查参数是否符合要求
 * @param model 模板 [{prop:"",label:"",exp:"",checked:""}]
 */
async function checkParams (model,params) {
	if(!Array.isArray(model)){
		throw new Error("model参数必须为数组")
	}
	let res = true
	for(var i=0;i<model.length;i++){
		if(model[i].checked){
			if(model[i].exp && !model[i].exp.test(params[model[i].prop])){
				showToast({status:2,msg:`${model[i].label}格式`})
				res = false
				break
			}else if(!model[i].exp && !params[model[i].prop]){
				showToast({status:2,msg:`${model[i].label}为空`})
				res = false
				break
			}
		}
	}
	return res
}

/**
 *  @name 请求
 * @params {string} url 请求地址
 * @params {obj} params 携带参数
 * @params {boolean} toast 显隐弹框（false，显示）
 */
async function apiPost(url,params,toast){
	if(!params)console.warn("没有传入参数params");
	return new Promise((resolve,reject)=>{
		uni.request({
			url:Window.PATH+url,
			method :"POST",
			header:{
				"content-type":"application/x-www-form-urlencoded"
			},
			data:params,
			success(res) {
				if(res.data.status==10){
					uni.reLaunch({
						url:"/pages/login/phone"
					})
				}
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			},
			complete(res) {
				if(!toast)showToast(res.data)
			}
		})
	})
}

/**
 * @name 获取当前路由
 */
async function getRoutes () {
	let pages = getCurrentPages()
	let path = pages[pages.length-1].route
	return path
}

async function showLoading(){
	uni.showLoading({
		title:"请等待",
		mask:true,
	})
}

/**
 * @name 显示toast
 * @param res {status:"0",(msg||data):""}
 */
async function showToast(res){
	uni.showToast({
		title: (res.msg || res.data || "暂无").toString().slice(0,7),
		mask: true,
		icon: res.status==0?"success":"none",
		duration: 1500
	});
}

/**
 * @name 显示模态框
 */
async function showModel ({title,content,callback,showCancel,hideToast}) {
	let title1="";
	let content1=content||"暂无内容"
	let showCancel1=showCancel===false?false:true
	let toast=0
	uni.showModal({
		title:title1,
		content:content1,
		showCancel:showCancel1,
		confirmColor:"#4879F9",
		success:async function(response){
			if(response.confirm){
				callback()
				// if(!hideToast)await showToast({status:0,msg:"操作成功"})
			}
		}
	})
}

/**
 * @name 跳转
 */
async function navigatorTo(url,type="1"){
	if(!url)throw new Error("没有传入跳转路径")
	switch(type){
		case "1" :uni.navigateTo({url:url});break;//携带参数跳转
		case "2" :uni.switchTab({url:url});break;//tabbar切换
		case "3" :uni.reLaunch({url:url});break;//重新登录
	}
}

/**
 * @name 返回
 */
async function goback (time=600) {
	setTimeout(()=>{
		uni.navigateBack({
			delta:1
		})
	},time)
}

/**
 * @name 动态开启或关闭pulldown
 * @params {boolean} isOpen
 */
async function setPullDown(isOpen){
	// #ifdef APP-PLUS
	const pages = getCurrentPages();  
	const page = pages[pages.length - 1]; 
	var currentWebview = page.$getAppWebview();
	currentWebview.setStyle({//设置当前webview的style
		pullToRefresh: {
			support: isOpen ,
			style: plus.os.name === 'Android' ? 'circle' : 'default'  
		}
	});
	// #endif
}

/**
 * @name 上传文件
 */
async function upload(filepath){
 	return new Promise((resolve,reject)=>{
		uni.uploadFile({
			url: Window.PATH + "/Common/getPicAddress.do",
			filePath: filepath,
			name:"file",
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

/**
 * @name 选择照片
 */
async function chooseImg () {
	return new Promise((resolve,reject)=>{
		uni.chooseImage({
			count:1,
			success(res){
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
} 

/**
 * @name 重新设置用户信息本地存储
 */
async function resetUserInfo(obj){
	let info = uni.getStorageSync(Window.userInfo);
	for(var key in obj){
		info[key]=obj[key]
	}
	uni.setStorageSync(Window.userInfo,info)
}


/**
 * @name 预览图片
 * @params imgs Array
 */
async function previewImg (imgs) {
	if(!Array.isArray(imgs))throw new Error("imgs必须数组")
	uni.previewImage({
		loop:true,
		urls:imgs
	})
}

/**
 * @name 通过经纬度获取省市区
 */
async function getLocation ({lat,lng}) {
	let url = "http://api.map.baidu.com/geocoder/v2/?callback=test&location="+lat+","+lng+"&output=json&pois=1&ak=hEK2Pb2CcGPNrTKikUPZE1CkmDyeP9lG"
	
	// #ifdef APP-PLUS
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			success(res) {
				resolve(res)
			}
		})
	})
	// #endif
	
	// #ifndef APP-PLUS
	return myJsonP(url)
	// #endif
}

/**
 * @name 自封装的jsonp
 */
async function myJsonP (url) {
	return new Promise((resolve,reject)=>{
		let callback = url.match(/callback=?(.*?)\&/g)[0].slice(10,-1)
		var script=document.createElement("script");
		var head=document.head;
		script.src=url;
		window[callback]=function( data ){ //发回数据调用的内容
		    resolve(data)
		    delete window[callback];
		    head.removeChild( script );
		};
		head.appendChild(script);
	})
}


export default {
	checkParams,
	apiPost,
	getRoutes,
	navigatorTo,
	showModel,
	showToast,
	setPullDown,
	upload,
	resetUserInfo,
	chooseImg,
	previewImg,
	getLocation,
	myJsonP,
	goback
}