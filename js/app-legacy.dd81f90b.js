(function(){"use strict";var t={5206:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var a=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrap"},[n("MyHeader",{staticClass:"header"}),n("router-view",{staticClass:"section"}),n("MyFooter",{staticClass:"footer"})],1)])},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("el-menu",{staticClass:"el-menu-demo nav",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff",router:"","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"home"}},[t._v("首頁")]),n("el-menu-item",{attrs:{index:"popularMovie"}},[t._v("電影人氣排行榜前20名")]),n("el-menu-item",{attrs:{index:"topRatedTV"}},[t._v("電視人氣排行榜前20名")]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("趨勢")]),n("el-menu-item",{attrs:{index:"movie"}},[t._v("電影")]),n("el-menu-item",{attrs:{index:"tv"}},[t._v("電視")]),n("el-menu-item",{attrs:{index:"person"}},[t._v("人物")])],2)],1)],1)])},o=[],l={data:function(){return{activeIndex2:"1"}},methods:{handleSelect:function(t,e){}}},c=l,u=n(1001),d=(0,u.Z)(c,s,o,!1,null,"463134de",null),p=d.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"foot"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("p",{staticClass:"content"},[t._v("Copyright © 2022 學習串接API非商業用途.")])])])])])}],v={data:function(){return{}}},h=v,_=(0,u.Z)(h,f,m,!1,null,"23f20156",null),g=_.exports,b={name:"App",components:{MyHeader:p,MyFooter:g}},C=b,w=(0,u.Z)(C,i,r,!1,null,"556b0708",null),y=w.exports,x=n(4549),k=n.n(x),E=(n(4029),n(4232),n(2809)),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),n("ul",t._l(t.arr,(function(e,a){return n("li",{key:a,staticClass:"wrap"},[n("h1",{staticClass:"title"},[t._v(t._s(a+1)+" . "+t._s(e.name))]),n("img",{attrs:{src:t.bindUrl(e.poster_path),alt:""}}),n("h4",{staticClass:"popular"},[t._v(" 人氣 : "+t._s(e.popularity))]),n("p",{staticClass:"content"},[t._v(t._s(e.overview))])])})),0)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"main-title"},[t._v("電視趨勢榜前20名")])])}],U=n(6166),Z=n.n(U),T={data:function(){return{arr:[]}},methods:{bindUrl:function(t){return"https://image.tmdb.org/t/p/original"+t}},mounted:function(){var t=this;Z().get("https://api.themoviedb.org/3/trending/tv/week?api_key=a5e1f3082bd9617d50b28dcb7d42f23a").then((function(e){t.arr=e.data.results}),(function(t){}))}},D=T,M=(0,u.Z)(D,$,O,!1,null,"69eb18a9",null),j=M.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),n("ul",t._l(t.arr,(function(e,a){return n("li",{key:a,staticClass:"wrap"},[n("h1",{staticClass:"title"},[t._v(t._s(a+1)+" . "+t._s(e.title))]),n("img",{attrs:{src:t.bindUrl(e.poster_path),alt:""}}),n("h4",{staticClass:"popular"},[t._v(" 人氣 : "+t._s(e.popularity))]),n("p",{staticClass:"content"},[t._v(t._s(e.overview))])])})),0)])])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"main-title"},[t._v("電影趨勢榜前20名")])])}],P={data:function(){return{arr:[]}},methods:{bindUrl:function(t){return"https://image.tmdb.org/t/p/original"+t}},mounted:function(){var t=this;Z().get("https://api.themoviedb.org/3/trending/movie/week?api_key=a5e1f3082bd9617d50b28dcb7d42f23a").then((function(e){t.arr=e.data.results}),(function(t){}))}},I=P,F=(0,u.Z)(I,S,z,!1,null,"3f4c67ab",null),N=F.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),n("ul",{staticClass:"col wrap "},t._l(t.arr,(function(e,a){return n("li",{key:a,staticClass:"item ms-4 mx-auto"},[n("h3",{staticClass:"title"},[t._v(t._s(e.name))]),n("img",{attrs:{src:t.bindUrl(e.profile_path),alt:""}}),n("h4",{staticClass:"popular"},[t._v(" 人氣 : "+t._s(e.popularity))]),n("p",{staticClass:"content"},[t._v(t._s(e.known_for_department))])])})),0)])])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"main-title"},[t._v("人物趨勢榜前20名")])])}],H={data:function(){return{arr:[]}},methods:{bindUrl:function(t){return"https://image.tmdb.org/t/p/original"+t}},mounted:function(){var t=this;Z().get("https://api.themoviedb.org/3/trending/person/week?api_key=a5e1f3082bd9617d50b28dcb7d42f23a").then((function(e){t.arr=e.data.results}),(function(t){}))}},R=H,V=(0,u.Z)(R,W,A,!1,null,"e9263a06",null),q=V.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),n("ul",t._l(t.arr,(function(e,a){return n("li",{key:a,staticClass:"wrap"},[n("h1",{staticClass:"title"},[t._v(t._s(a+1)+" . "+t._s(e.title))]),n("img",{attrs:{src:t.bindUrl(e.poster_path),alt:""}}),n("h4",{staticClass:"popular"},[t._v(" 人氣 : "+t._s(e.popularity))]),n("p",{staticClass:"content"},[t._v(t._s(e.overview))])])})),0)])])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"main-title"},[t._v("電影人氣排行榜前20名")])])}],J={data:function(){return{arr:[]}},methods:{bindUrl:function(t){return"https://image.tmdb.org/t/p/original"+t}},mounted:function(){var t=this;Z().get("https://api.themoviedb.org/3/movie/popular?api_key=a5e1f3082bd9617d50b28dcb7d42f23a&language=zh-TW&page=1").then((function(e){t.arr=e.data.results}),(function(t){}))}},K=J,L=(0,u.Z)(K,B,G,!1,null,"5a30f8c6",null),Q=L.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),n("ul",t._l(t.arr,(function(e,a){return n("li",{key:a,staticClass:"wrap"},[n("h1",{staticClass:"title"},[t._v(t._s(a+1)+" . "+t._s(e.name))]),n("img",{attrs:{src:t.bindUrl(e.poster_path),alt:""}}),n("h4",{staticClass:"popular"},[t._v(" 人氣 : "+t._s(e.popularity))]),n("p",{staticClass:"content"},[t._v(t._s(e.overview))])])})),0)])])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"main-title"},[t._v("電視人氣排行榜前20名")])])}],tt={data:function(){return{arr:[]}},methods:{bindUrl:function(t){return"https://image.tmdb.org/t/p/original"+t}},mounted:function(){var t=this;Z().get("https://api.themoviedb.org/3/tv/top_rated?api_key=a5e1f3082bd9617d50b28dcb7d42f23a&language=zh-TW&page=1").then((function(e){t.arr=e.data.results}),(function(t){}))}},et=tt,nt=(0,u.Z)(et,X,Y,!1,null,"5ba0839a",null),at=nt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("el-carousel",{staticClass:"card",attrs:{interval:4e3,type:"card",height:"500px"}},t._l(t.arr,(function(e,a){return n("el-carousel-item",{key:a,staticClass:"cc"},[n("img",{attrs:{src:t.bindUrl(e.backdrop_path),alt:""}})])})),1),n("h1",[t._v("快速了解電影及電視排行")])],1)},rt=[],st={data:function(){return{arr:[]}},methods:{bindUrl:function(t){return"https://image.tmdb.org/t/p/original"+t}},mounted:function(){var t=this;Z().get("https://api.themoviedb.org/3/discover/movie?api_key=a5e1f3082bd9617d50b28dcb7d42f23a&language=zh-TW&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate").then((function(e){t.arr=e.data.results}))}},ot=st,lt=(0,u.Z)(ot,it,rt,!1,null,"2076b26a",null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"wrap row"},[n("div",{staticClass:"col-12"},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.imgDone,expression:"imgDone"}],staticClass:"col apiImg my-auto",attrs:{src:t.url,alt:"img",id:"img"},on:{load:t.open}}),n("el-skeleton-item",{directives:[{name:"show",rawName:"v-show",value:!t.imgDone,expression:"!(imgDone)"}],staticClass:"my-auto",staticStyle:{width:"100%",height:"100%"},attrs:{variant:"image"}}),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.imgDone,expression:"!(imgDone)"}],staticClass:"col-12 content"},[t._v("載入檔案時請等待")]),n("h5",{staticClass:"col-12 content"},[t._v(" 來源 : "+t._s(t.source))]),n("button",{staticClass:"btn mx-auto  mt-5 mb-5",on:{click:t.getapi}},[t._v("隨機取得圖片")])],1)])])},dt=[],pt={data:function(){return{url:"",source:"",imgDone:!1}},methods:{getapi:function(){var t=this;Z().get("https://api.waifu.im/random").then((function(e){t.imgDone=!1,t.url=e.data.images[0].url,t.source=e.data.images[0].source}),(function(t){console.log(t.message)}))},open:function(){alert("載入完畢"),this.imgDone=!0}}},ft=pt,mt=(0,u.Z)(ft,ut,dt,!1,null,"49d4cd2e",null),vt=mt.exports,ht=new E.Z({routes:[{path:"*",redirect:"/home"},{path:"/home",component:ct},{path:"/tv",component:j},{path:"/movie",component:N},{path:"/person",component:q},{path:"/popularMovie",component:Q},{path:"/topRatedTV",component:at},{path:"/egg",component:vt}]});a["default"].use(E.Z),a["default"].use(k()),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(y)},router:ht}).$mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,r){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],r=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,s=a[0],o=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var u=l(n)}for(e&&e(a);c<s.length;c++)r=s[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunkapi_tandem"]=self["webpackChunkapi_tandem"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5206)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.dd81f90b.js.map