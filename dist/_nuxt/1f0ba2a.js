(window.webpackJsonp=window.webpackJsonp||[]).push([[29,4,7,11,15],{325:function(t,e,r){"use strict";r.r(e);var l={name:"TagList",props:{areaList:{type:Array,required:!0},genreList:{type:Array,required:!0}}},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"md:my-4 md:pt-8 md:border-bottom-2 md:border-t-2 md:w-full border-black"},[t._m(0),t._v(" "),r("ul",{staticClass:"md:w-full md:flex md:flex-wrap"},[t._l(t.areaList,(function(e,l){return r("li",{key:e.id,staticClass:"md:mr-2 md:mb-2 md:text-gray-500  md:hover:text-gray-800"},[r("nuxt-link",{attrs:{to:"/news/area/"+e.id+"/"}},[r("span",{staticClass:"text-blue-400"},[t._v("#")]),r("span",[t._v(t._s(e.name))])])],1)})),t._v(" "),t._l(t.genreList,(function(e,l){return r("li",{key:e.id,staticClass:"md:mr-2 md:mb-2 md:text-gray-500  md:hover:text-gray-800"},[r("nuxt-link",{attrs:{to:"/news/genre/"+e.id+"/"}},[r("span",{staticClass:"text-blue-400"},[t._v("#")]),r("span",[t._v(t._s(e.genre_name))])])],1)}))],2),t._v(" "),r("div",{staticClass:"md:flex md:justify-end"},[r("nuxt-link",{staticClass:"md:mr-5 md:text-lg md:font-bold md:pb-1 border-b-2 border-black md:text-gray-500 md:hover:text-gray-800",attrs:{to:"/search/"}},[t._v("\n        タグ一覧\n        ")])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"md:font-bold md:text-xl md:mb-6"},[r("span",{staticClass:"sharp"},[t._v("#")]),r("span",[t._v("人気のタグ")])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);r(38);var l={name:"LayoutSideNav",data:function(){return{areaInfoList:this.$store.state.areaInfoList,genreInfoList:this.$store.state.genreInfoList,pickupPosts:this.$store.state.pickupPosts}},methods:{trimPostTitle:function(title){return title.slice(0,20)+"..."}},computed:{sidePickupPostsCount:function(){return this.pickupPosts.slice(0,3)}},components:{TagList:r(325).default}},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"md:sticky md:top-8"},[r("section",{staticClass:"side__tag md:mb-12"},[r("TagList",{attrs:{areaList:t.areaInfoList,genreList:t.genreInfoList}})],1),t._v(" "),r("section",[r("div",{staticClass:"md:my-4 md:pt-8 md:border-bottom-2 md:border-t-2 md:w-full border-black"},[r("p",{staticClass:"md:font-bold md:text-xl md:mb-6"},[t._v("\n                Pickup記事\n            ")]),t._v(" "),r("ul",t._l(t.sidePickupPostsCount,(function(e){return r("li",{key:e.id,staticClass:"md:h-28 md:mb-5"},[r("nuxt-link",{staticClass:"md:flex md:justify-between",attrs:{to:"/news/"+e.id}},[r("div",{staticClass:"md:w-4/12"},[r("picture",[r("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-srcset":e.thumbnail.url+"?fm=webp",type:"image/webp"}}),t._v(" "),r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"md:h-20",attrs:{"data-src":e.thumbnail.url,alt:""}})])]),t._v(" "),r("div",{staticClass:"md:w-7/12"},[r("p",{staticClass:"md:text-sm md:flex md:items-center"},[r("span",{staticClass:"material-icons text-gray-500 mr-1 text-lg"},[t._v("\n                                    schedule\n                                ")]),t._v(" "),r("span",[t._v(t._s(t.$dateFns.format(new Date(e.publishedAt),"yyyy/MM/dd")))])]),t._v(" "),r("ul",{staticClass:"md:flex"},[r("li",{staticClass:"md:text-sm md:mr-2"},[r("span",{staticClass:"text-blue-400"},[t._v("#")]),r("span",[t._v(t._s(e.area.name))])]),t._v(" "),t._l(e.genre,(function(e,l){return r("li",{key:e.id,staticClass:"md:text-sm md:mr-2"},[r("span",{staticClass:"text-blue-400"},[t._v("#")]),r("span",[t._v(t._s(e.genre_name))])])}))],2),t._v(" "),r("p",{staticClass:"md:font-bold"},[t._v(t._s(t.trimPostTitle(e.title)))])])])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TagList:r(325).default})},327:function(t,e,r){"use strict";r.r(e);var l={name:"PageTitle",props:{englishText:{type:String,required:!0},japaneseText:{type:String,required:!0}}},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:" m-auto text-center my-8 md:my-4"},[r("p",{staticClass:"text-4xl"},[t._v(t._s(t.englishText))]),t._v(" "),r("h1",{staticClass:"text-md"},[t._v(t._s(t.japaneseText))])])}),[],!1,null,null,null);e.default=component.exports},343:function(t,e,r){"use strict";r.r(e);var l={name:"CategoryCard",props:{id:{type:String,required:!0},name:{type:String,required:!0},thumbnail:{type:Object,required:!0},category:{type:String,required:!0}},data:function(){return{to:"/news/".concat(this.category,"/").concat(this.id,"/"),src:"".concat(this.thumbnail.url,"?fm=webp")}}},n=r(15),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:t.to}},[t.thumbnail?r("div",{staticClass:"relative w-full h-28 md:h-60 hover:opacity-80"},[r("picture",[r("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-srcset":t.src,type:"image/webp"}}),t._v(" "),r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"h-28 md:h-48 object-cover w-full rounded-md shadow-xl",attrs:{"data-src":t.thumbnail.url,alt:""}})]),t._v(" "),r("span",{staticClass:"absolute text-xl text-gray-100 font-bold top-1/4 left-2"},[t._v(t._s(t.name))])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},505:function(t,e,r){var content=r(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("0cf2b547",content,!0,{sourceMap:!1})},545:function(t,e,r){"use strict";r(505)},546:function(t,e,r){var l=r(54)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n@media screen and (min-width:480px){\n.serch__area--flex>li[data-v-134af329]{\n    width:49%\n}\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},625:function(t,e,r){"use strict";r.r(e);var l=r(327),n=r(343),d=r(326),m={fetch:function(){this.$store.commit("resetMenu")},head:{title:"カテゴリから探す"},data:function(){return{genreList:this.$store.state.genreInfoList,areaList:this.$store.state.areaInfoList}},methods:{},components:{PageTitle:l.default,CategoryCard:n.default,LayoutSideNav:d.default}},o=(r(545),r(15)),component=Object(o.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-8 mb-8 md:mt-24 md:flex md:justify-between md:w-11/12"},[r("div",{staticClass:"md:w-9/12"},[r("div",{staticClass:"m-auto md:m-auto md:mt-0 md:w-9/12"},[r("PageTitle",{attrs:{englishText:"SEARCH",japaneseText:"カテゴリから探す"}}),t._v(" "),r("div",{staticClass:"w-11/12 m-auto mb-14 md:mt-8 md:w-full"},[r("h2",{staticClass:"serch__area font-bold text-xl border-b border-gray-400 mb-4 pb-2 md:text-2xl md:py-4 md:mb-8"},[t._v("エリアから探す")]),t._v(" "),r("ul",{staticClass:"serch__area--flex md:flex md:flex-wrap md:justify-between"},t._l(t.areaList,(function(t,e){return r("li",{key:t.order,staticClass:"w-full mb-4 md:mb-6 md:w-1/2 rounded-md"},[r("CategoryCard",{attrs:{id:t.id,name:t.name,thumbnail:t.thumbnail,category:"area"}})],1)})),0)]),t._v(" "),r("div",{staticClass:"w-11/12 m-auto md:w-full"},[r("h2",{staticClass:"serch__area font-bold text-xl border-b border-gray-400 mb-4 pb-2 md:text-2xl md:py-4 md:mb-8"},[t._v("ジャンルから探す")]),t._v(" "),r("ul",{staticClass:"serch__area--flex md:flex md:flex-wrap md:justify-between"},t._l(t.genreList,(function(t,e){return r("li",{key:t.order,staticClass:"w-full mb-4 md:mb-10 md:w-1/2 rounded-md"},[r("CategoryCard",{attrs:{id:t.id,name:t.genre_name,thumbnail:t.thumbnail,category:"genre"}})],1)})),0)])],1)]),t._v(" "),r("aside",{staticClass:"hidden md:block md:w-3/12"},[r("LayoutSideNav")],1)])}),[],!1,null,"134af329",null);e.default=component.exports;installComponents(component,{PageTitle:r(327).default,CategoryCard:r(343).default,LayoutSideNav:r(326).default})}}]);