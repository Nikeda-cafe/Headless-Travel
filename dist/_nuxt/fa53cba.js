(window.webpackJsonp=window.webpackJsonp||[]).push([[6,14],{328:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("38a8e0f2",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n.r(e);var r={name:"TagIcon",props:{name:{type:String},bgBlueColor:{type:String},textSizeXsm:{type:String}},data:function(){return{bindClass:{"bg-blue-100":!!this.bgBlueColor,"bg-red-100":!this.bgBlueColor,"icon__text--xsm":!!this.textSizeXsm}}}},l=(n(331),n(15)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-sm mr-1 py-1.5 px-1.5 text-gray-600 rounded-2xl mt-2",class:t.bindClass},[t._v("\n    #"),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n(328)},332:function(t,e,n){var r=n(54)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.icon__text--xsm{\n  font-size:10px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},501:function(t,e,n){"use strict";n.r(e);n(189);var r={name:"InformationList",props:{id:{type:Number,required:!0},title:{type:String,required:!0},createdAt:{type:String,required:!0},emergency_flag:{type:Number}}},l=n(15),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"},[n("nuxt-link",{staticClass:"block px-4 py-3",attrs:{to:"/information/"+t.id+"/"}},["1"===t.emergency_flag?n("div",{staticClass:"w-14 mb-1"},[n("TagIcon",[t._v(t._s("1"===t.emergency_flag?"緊急":""))])],1):t._e(),t._v(" "),n("time",{staticClass:"text-gray-700 text-base mb-1 block md:w-1/6"},[t._v("\n            "+t._s(t.createdAt)+"\n        ")]),t._v(" "),n("div",{staticClass:"md:w-10/12"},[t._v("\n            "+t._s(t.title)+"\n        ")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TagIcon:n(330).default})}}]);