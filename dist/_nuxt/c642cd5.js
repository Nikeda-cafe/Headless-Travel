(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{497:function(e,t,r){"use strict";r.r(t);r(189);var n={props:{pager:{type:Array,required:!1,default:function(){return[]}},current:{type:Number,required:!0},category:{type:Object,required:!1,default:void 0}},methods:{getPath:function(p){return"/".concat(void 0!==this.category?"category/".concat(this.category.id,"/"):"","page/").concat(p)}}},l=r(15),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper text-center"},[r("nav",{staticClass:"isolate inline-flex -space-x-px rounded-md shadow-sm",attrs:{"aria-label":"Pagination"}},[r("ul",{staticClass:"pager"},[e.current>1?r("li",{staticClass:"page arrow top-1 left-1.5 relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"},[r("nuxt-link",{attrs:{to:"/news"+e.getPath(e.current-1)}},[r("span",{staticClass:"sr-only"},[e._v("Previous")]),e._v(" "),r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z","clip-rule":"evenodd"}})])])],1):e._e(),e._v(" "),3<e.current?r("li",{staticClass:"page relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"},[r("nuxt-link",{attrs:{to:"/news"+e.getPath(1)}},[e._v("\n                1\n            ")])],1):e._e(),e._v(" "),4<e.current?r("li",{staticClass:"omission relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"},[e._v("\n            ...\n        ")]):e._e(),e._v(" "),e._l(e.pager,(function(p){return r("li",{directives:[{name:"show",rawName:"v-show",value:e.current-3<=p&&p<=e.current+1,expression:"current - 3 <= p && p <= current + 1"}],key:p,staticClass:"page relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",class:{"bg-gray-100":e.current===p+1}},[r("nuxt-link",{attrs:{to:"/news"+e.getPath(p+1)}},[e._v("\n                "+e._s(p+1)+"\n            ")])],1)})),e._v(" "),e.current+3<e.pager.length?r("li",{staticClass:"omission relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"},[e._v("\n            ...\n        ")]):e._e(),e._v(" "),e.current+2<e.pager.length?r("li",{staticClass:"page relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"},[r("nuxt-link",{attrs:{to:"/news"+e.getPath(e.pager.length)}},[e._v("\n                "+e._s(e.pager.length)+"\n            ")])],1):e._e(),e._v(" "),e.current<e.pager.length?r("li",{staticClass:"page arrow top-1 right-1.5 relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"},[r("nuxt-link",{attrs:{to:"/news"+e.getPath(e.current+1)}},[r("span",{staticClass:"sr-only"},[e._v("Next")]),e._v(" "),r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"}})])])],1):e._e()],2)])])}),[],!1,null,null,null);t.default=component.exports}}]);