require("../../../../../../common/manifest.js");
require("../../../../../../common/vendor.js");
global.webpackJsonp([12],{189:function(t,e,a){"use strict";var s=n(a(1)),i=n(a(190));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},190:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(192),i=a.n(s),n=a(199);var c=function(t){a(191)},l=a(0)(i.a,n.a,c,null,null);e.default=l.exports},191:function(t,e){},192:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,i=a(4),n=(s=i)&&s.__esModule?s:{default:s};e.default={components:{addImage:n.default},data:function(){return{checked:!0,pasteContent:"",content:"本人/机构自愿申请被划分为专业投资者，已按要求提供财产状况、交易情况、从业经历等相关证明材料，并承诺所提供材料真实、准确、完整。"}},methods:{paste:function(){this.pasteContent=this.content}}}},199:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"renzheng-box"},[a("view",{staticClass:"title"},[t._v("\n\t\t请确认您是否同时符合下列专业投资者条件\n\t")]),t._m(0),a("view",{staticClass:"row1"},[a("label",{staticClass:"radio"},[a("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png"}}),t._v("\n\t\t\t是\n\t\t")]),a("label",{staticClass:"radio"},[a("image",{attrs:{src:t.checked?"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Unchecked.png":"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/Checked.png"}}),t._v("\n\t\t\t否\n\t\t")])],1),a("view",{staticClass:"paste-box"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],ref:"con",staticClass:"paste-content",attrs:{id:"con",disabled:"",eventid:"DDV-0"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),a("view",{staticClass:"paste",attrs:{eventid:"bGe-1"},on:{click:t.paste}},[t._v("\n\t\t\t复制并粘贴\n\t\t")])]),a("view",{staticClass:"blank"},[t._v("\n\t\t"+t._s(t.pasteContent)+"\n\t")]),t._m(1),t._m(2),a("view",{},[a("view",{staticClass:"left",staticStyle:{padding:"40upx 0 0"}},[t._v("\n\t\t\t证明金额\n\t\t")]),a("addImage",{attrs:{mpcomid:"0x2-0"}})],1),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"ceshi-box"},[e("view",{staticClass:"ceshi-item"},[this._v("\n\t\t\t1、金融资产不低于500万元或近三年本人年均收入不低于50万元的个人\n\n\t\t")]),e("view",{staticClass:"ceshi-item"},[this._v("\n\t\t\t2、具有2年以上证券、基金、期货、黄金、外汇等投资经历，或者具有2年以上金融产品设计、投资、风险管理及相关工作经历，或者属于本条第(一) 项规定的专业投资者的高级管理人员、获得职业资格认证的从事金融相关业务的注册会计师和律师。\n\t\t")]),e("view",{staticClass:"ceshi-item"},[this._v("\n\t\t\t（金融资产包括银行存款、股票、债券、基金份额、资产管理计划、银行理财产品、信托计划、保险产品、期货权益等。）\n\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t证明类型\n\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"row"},[e("view",{staticClass:"left"},[this._v("\n\t\t\t证明金额\n\t\t")]),e("input",{attrs:{type:"text",value:"",placeholder:"请输入金额"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"btn-box"},[e("view",{staticClass:"btn"},[this._v("\n\t\t\t我已阅读，确认无误并同意签字\n\t\t")])])}]};e.a=s}},[189]);