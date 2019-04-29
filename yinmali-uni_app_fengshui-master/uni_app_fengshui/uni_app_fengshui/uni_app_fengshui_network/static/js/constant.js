import Vue from "vue"

// Vue继承
import _g from './global.js'
copyFuns()
/**
 * @name 复制对象到Vue的原型上
 */
function copyFuns(){
	let keys = Object.keys(_g)
	keys.forEach(ele=>{
		Vue.prototype[ele]=_g[ele]
	})
}


// #ifdef  APP-PLUS
var originalHeight=document.documentElement.clientHeight || document.body.clientHeight;
window.onresize=function(){
    var  resizeHeight=document.documentElement.clientHeight || document.body.clientHeight;
    if(resizeHeight*1<originalHeight*1){
         plus.webview.currentWebview().setStyle({
             height:originalHeight
        });
		plus.webview.getWebviewById('HTML/a.html').setStyle({height: (originalHeight*1-51)});
	}
}
// #endif

// 缓存常量
Window.codeTime="codeTime"; //计数器
Window.userInfo="userInfo"; // 用户信息
Window.identifyImg={ 			//当前认证img的本地地址
	authorization:"authorization",	//企业认证授权书
	licence:"licence",				//开户许可证
	permit:"permit",				//营业执照
};
Window.myRAddress="myRAddress"		//收货地址 -- 地址管理
Window.allAddress="allAddress"		//登录获取的全部地址
Window.myGoodInfo="myGoodInfo"      //商品详情信息
Window.myShopInfo="myShopInfo"		//商铺信息

// 注册全局组件 (app中不能用全局组件)
import myIconfont from '@/components/myIconfont/myIconfont.vue'
Vue.component("my-iconfont",myIconfont)

import myLoading from '@/components/myLoading/myLoading.vue'
Vue.component("my-loading",myLoading)
