webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,n){t.exports=n("NHnr")},1:function(t,e){},HBLx:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("gbyG"),n("Gh7F");var i=n("/5sW"),o=n("iPd/"),r=n.n(o),a=n("8kuj"),l=n.n(a),s=n("ohDP"),c=n.n(s),u=n("kFhx"),m=n.n(u),d={name:"LicenseBtn",props:{uri:!1},created:function(){var t=this,e=[{uri:"http://creativecommons.org/licenses/by-nc-nd/2.5/",img:c.a,name:"Attribution-NonCommercial-NoDerivs 2.5 Generic"},{uri:"http://creativecommons.org/licenses/by/2.5/",img:m.a,name:"Attribution 2.5 Generic"}],n=e.filter(function(e){return e.uri==t.uri});n?this.license=n[0]:console.warn("Unknown license URI: "+this.uri)}},A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.uri}},[n("img",{attrs:{src:t.license.img,alt:t.license.name}})])},g=[],f=n("XyMi");function h(t){n("vNpX")}var v=!1,p=h,b="data-v-f2467500",C=null,w=Object(f["a"])(d,A,g,v,p,b,C),F=w.exports,B=n("QxPg"),k=n("KeE0"),L=n.n(k);B["a"].library.add(L.a);var x={name:"ObjectView",components:{LicenseBtn:F},props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown=!this.isShown;var t={37:1,38:1,39:1,40:1};function e(t){t=t||window.event,t.preventDefault&&t.preventDefault(),t.returnValue=!1}function n(n){if(t[n.keyCode])return e(n),!1}this.isShown?(window.onwheel=e,window.ontouchmove=e,document.onkeydown=n):(window.onwheel=null,window.ontouchmove=null,document.onkeydown=null)}}},N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"object"},[n("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description},on:{click:function(e){t.toggle()}}}),n("transition",{attrs:{name:"slide-north"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"},{name:"hammer",rawName:"v-hammer:swipe.up",value:t.toggle,expression:"toggle",arg:"swipe",modifiers:{up:!0}}],staticClass:"details"},[n("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description}}),n("p",[t._v(t._s(t.object.application.description))]),n("LicenseBtn",{attrs:{uri:t.object.edm_rights}}),n("a",{attrs:{href:t.object.edm_is_shown_at}},[t._v(t._s(t.object.edm_data_provider))]),n("br"),n("button",{on:{click:function(e){t.toggle()}}},[n("i",{staticClass:"fas fa-times"})])],1)])],1)},M=[];function I(t){n("xEzc")}var y=!1,D=I,j="data-v-106a6e80",P=null,G=Object(f["a"])(x,N,M,y,D,j,P),V=G.exports,S={name:"FilterContainer",data:function(){return{}},methods:{}},E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-container"},[t._t("default")],2)},H=[];function W(t){n("ovGj")}var Q=!1,U=W,O="data-v-62ea9881",T=null,J=Object(f["a"])(S,E,H,Q,U,O,T),z=J.exports,K={name:"AnimatedNumber",data:function(){return{displayNumber:0,interval:!1}},props:{number:{default:0}},ready:function(){this.displayNumber=this.number?this.number:0},watch:{number:function(){var t=this;clearInterval(this.interval),this.number!=this.displayNumber&&(this.interval=window.setInterval(function(){if(t.displayNumber!=t.number){var e=(t.number-t.displayNumber)/10;e=e>=0?Math.ceil(e):Math.floor(e),t.displayNumber=t.displayNumber+e}},20))}}},q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("\n    "+t._s(t.displayNumber)+"\n")])},R=[],X=!1,Y=null,Z=null,_=null,$=Object(f["a"])(K,q,R,X,Y,Z,_),tt=$.exports,et=n("Zzkc"),nt={name:"FilterMenu",data:function(){return{colorFilterOpen:!1,currentColor:"url('/transparent.png')"}},components:{FilterContainer:z,Chrome:et["Chrome"],AnimatedNumber:tt},computed:{nActiveitems:function(){return Et.state.activeItems.length},staticColors:function(){return Et.state.colorFilter},colorCount:function(){return Et.getters.getColorPercentages}},methods:{toggleColorFilter:function(){this.colorFilterOpen=!this.colorFilterOpen},updateColorFilterDynamic:function(t){Et.commit("activateColorFilter"),Et.commit("updateDynamicColor",t.hex),this.currentColor=t.hex},lockColor:function(t){Et.commit("addColorFilter",this.currentColor)},resetColorFilter:function(){Et.commit("deactivateColorFilter"),this.colorFilterOpen=!1,this.currentColor="url('/transparent.png')"},removeColor:function(t){Et.commit("removeColorFilter",[t])}}},it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"menu"},[n("AnimatedNumber",{attrs:{number:t.nActiveitems}}),n("div",{staticClass:"color-btn",style:{background:t.currentColor},on:{click:t.toggleColorFilter}},t._l(t.colorCount,function(e){return t.colorCount.length>1?n("div",{key:e[1],style:{background:e[1],width:e[0]+"%"}}):t._e()}))],1),n("transition",{attrs:{name:"slide-north"}},[t.colorFilterOpen?n("FilterContainer",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:t.toggleColorFilter,expression:"toggleColorFilter",arg:"swipe",modifiers:{up:!0}}]},[n("div",{staticClass:"desktop-break"},[n("Chrome",{staticClass:"color-picker",attrs:{value:t.currentColor,disableAlpha:!0,disableFields:!0},on:{input:t.updateColorFilterDynamic}}),n("button",{on:{click:t.lockColor}},[t._v("Lock color")])],1),n("div",{staticClass:"desktop-break"},[t._l(t.staticColors,function(e){return n("div",{key:e,staticClass:"color",style:{background:e}},[n("span",{attrs:{role:"button"},on:{click:function(n){t.removeColor(e)}}},[t._v("x")])])}),n("button",{staticClass:"red-btn",on:{click:t.resetColorFilter}},[t._v("Clear and disable this filter")])],2)]):t._e()],1)],1)},ot=[];function rt(t){n("HBLx")}var at=!1,lt=rt,st="data-v-3a931e3e",ct=null,ut=Object(f["a"])(nt,it,ot,at,lt,st,ct),mt=ut.exports,dt={name:"ImageWall",components:{ObjectView:V,FilterMenu:mt,Spinner:l.a},directives:{imagesLoaded:r.a},computed:{list:function(){var t=this,e=Et.state.allItems;return console.log("debug: executing filtering"),e?(Et.commit("colorCountClear"),Et.state.colorFilterActive&&(e=e.filter(function(e){return e.application.colors.some(function(e){return e.score>.1&&t.isSimilarColor(e.hsl,Et.state.colorFilterDynamic)})}),Et.commit("colorCountAdd",[e.length,Et.state.colorFilterDynamic]),Et.state.colorFilter.forEach(function(n){n!==Et.state.colorFilterDynamic&&(e=e.filter(function(e){return e.application.colors.some(function(e){return e.score>.1&&t.isSimilarColor(e.hsl,n)})}),Et.commit("colorCountAdd",[Et.state.allItems.filter(function(e){return e.application.colors.some(function(e){return e.score>.1&&t.isSimilarColor(e.hsl,n)})}).length,n]))})),Et.state.visibleLimit===this.visibleLimit?(console.log("debug: reseting visibleLimit"),Et.commit("resetVisibleLimit"),window.scrollTo(0,0)):this.visibleLimit=Et.state.visibleLimit,Et.commit("addActiveItems",e),console.log(Et.getters.getColorDegrees),e.slice(0,Et.state.visibleLimit)):null},loading:function(){return Et.state.isLoadingImages}},data:function(){return{latestVisibleLimit:30}},methods:{imageChange:function(t){t.isComplete?Et.commit("notLoadingImages"):Et.commit("loadingImages")},hexToHsl:function(t){var e=parseInt(t.substr(1,2),16),n=parseInt(t.substr(3,2),16),i=parseInt(t.substr(5,2),16);e/=255,n/=255,i/=255;var o,r,a=Math.max(e,n,i),l=Math.min(e,n,i),s=(a+l)/2;if(a==l)o=r=0;else{var c=a-l;switch(r=s>.5?c/(2-a-l):c/(a+l),a){case e:o=(n-i)/c+(n<i?6:0);break;case n:o=(i-e)/c+2;break;case i:o=(e-n)/c+4;break}o/=6}return[o,r,s]},isSimilarColor:function(t,e){var n=this.hexToHsl(e),i=t[0],o=n[0],r=t[1],a=n[1],l=t[2],s=n[2];return!(Math.abs(i-o)>.1)&&(!(Math.abs(r-a)>.1)&&!(Math.abs(l-s)>.8))}}},At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("spinner",{staticClass:"spinner",attrs:{size:"big"}}):t._e(),n("FilterMenu"),t.list?n("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:t.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:t.list}},t._l(t.list,function(t){return n("div",{key:t.europeana_record,staticClass:"image"},[n("ObjectView",{attrs:{object:t}})],1)})):t._e()],1)},gt=[];function ft(t){n("crzw")}var ht=!1,vt=ft,pt="data-v-4b1e1757",bt=null,Ct=Object(f["a"])(dt,At,gt,ht,vt,pt,bt),wt=Ct.exports,Ft={name:"app",components:{ImageWall:wt},methods:{fetchIntoState:function(){function t(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),i=[t[n],t[e]];t[e]=i[0],t[n]=i[1]}return t}this.$http.get("data.json").then(function(t){return t.body}).then(function(e){return Et.commit("addAllItems",t(e))})},handleScroll:function(){window.innerHeight+window.scrollY>=document.querySelector("html").offsetHeight-50&&(Et.state.isLoadingImages||Et.commit("increaseVisibleLimit",10))}},beforeMount:function(){this.fetchIntoState()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("ImageWall")],1)},kt=[];function Lt(t){n("+VGo")}var xt=!1,Nt=Lt,Mt=null,It=null,yt=Object(f["a"])(Ft,Bt,kt,xt,Nt,Mt,It),Dt=yt.exports,jt=n("PlbA"),Pt=n.n(jt),Gt=n("8+8L"),Vt=n("NYxO"),St=n("VIwv");n.d(e,"store",function(){return Et}),i["default"].use(St["a"]),i["default"].use(Pt.a),i["default"].use(Gt["a"]),i["default"].use(Vt["a"]),i["default"].config.productionTip=!1;var Et=new Vt["a"].Store({state:{allItems:[],activeItems:[],visibleLimit:30,garmentFilter:[],colorFilterActive:!1,colorFilter:[],colorFilterDynamic:"#000000",colorCount:[],isLoadingImages:!1},mutations:{addAllItems:function(t,e){t.allItems=e},addActiveItems:function(t,e){t.activeItems=e},increaseVisibleLimit:function(t,e){t.visibleLimit+=e},resetVisibleLimit:function(t){t.visibleLimit=30},toggleGarment:function(t,e){var n=t.garmentFilter.indexOf(e);-1===n?t.garmentFilter.push(e):t.garmentFilter.splice(n,1)},loadingImages:function(t){return t.isLoadingImages=!0},notLoadingImages:function(t){return t.isLoadingImages=!1},activateColorFilter:function(t){return t.colorFilterActive=!0},deactivateColorFilter:function(t){t.colorFilterActive=!1,t.colorFilter=[]},updateDynamicColor:function(t,e){return t.colorFilterDynamic=e},addColorFilter:function(t,e){return!t.colorFilter.includes(e)&&t.colorFilter.push(e)},removeColorFilter:function(t,e){return t.colorFilter=t.colorFilter.filter(function(t){return!e.includes(t)})},colorCountClear:function(t){return t.colorCount=[]},colorCountAdd:function(t,e){return t.colorCount.push(e)}},getters:{getColorPercentages:function(t){var e=0;return t.colorCount.forEach(function(t){return e+=t[0]}),t.colorCount.map(function(t){return t[0]=t[0]/e*100,t})}}});new i["default"]({render:function(t){return t(Dt)}}).$mount("#app")},crzw:function(t,e){},kFhx:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAYAAABjyArgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABTpJREFUaN7tWk1PG0cY9jlSLO5cOIYbbZUeU6T0B5AfkIh/UNRbJKqgiFSKVAlZrqLm0FCptyawxubDX3gNa2N71/Z6IeTKT+AnvNXzrt9ldlnwB84aE0Yasd6ZnR2efeZ5P2ZiRBSPxWJ0X0dfifCn+2Mnv017xV3KlbJUPChQySjRQbVMRt2gI7NK9WaNGq0GWW2TmrZFzU7TrbZFlm2S2WpwH/St1A1+VjdKPFaulOOx8Y5MNk1beylK7Wi0ub1BG5lPXD+lP9LHrf/uTFWAvgA3r+do/7BI5YpORu2QwWq06gxg22lR58Qm53OHjk+P6eSLW3HtfHa4DX0s2+Jn8CzGKFd1HhNjB0HWdjY9kAHwHQU55ge3WmYG1qwasxWgAdTVN6v09Oen9DD+8NJSwD20rf6+yn3bx23+KGB0pVFhNu8f7vtATme3KLWruSBnNkbG4pfLL2l2dvbSHHEPbWMBGLKgggtgmh2LWZlIJmh6erpv3UHfxJ8JfhYSAjZXPZCLnlxs5zKU3nNBHgWLk38l6dHsI28e8/PztLS0xBXXch990DdSgKGTkIULcJvMxIVnCz7wpqamaHFxkVZWVkjXda64xj20qX3xbKVmUMtxQQaTIReuJmdpt7Djl4obsHj93w8Uj8fd9y4s0NnZGQUL7qENfdA3CpA9gGHQoJeQBTA3CC7AA5Dn5+d0XVlfX/cBDbYAZHwwfDi8A4avUM5Tdn/PlYoQFg/6jwhz8aHVolhz3xxlbpEBjOULowTNxdJWwZ2bmwtlxFUFHwHPqEzGmNBkvONCKhQW76ZI294cSiagq8LcL6enPQFGESZ/bU32ADZYGups0KC5Kri9WNsPyNBkGD6WirpBesVlMWtx3tVikYlBARaDNggJ0FcMXyQAM3ttk6VBDBqWum3bNGwByCIXGBNjw4UTFhcPXBarHsUwMiEGLVggF/KBg9KBIoYvEoChjy2nxa6YTAqae9MieocKFw4rRLS41HXbVJkYFmB4CsESElX5Cp6JDGBEaPaJzb6ssFeVBngL0C18dVQV/GDb2tqa7x8RFmNsaDEivksykcu43oSiw3cKYBg3LGEJItQlBQDD/F2AqWlaaJv6vCxVjI2ID1JU7bpshXKBvQnosLhrd1IikE84PnW8CaksFGM1MzPDxgGA4xrLX9rE0wDg0hYmEwirmz4dLvjctWEAvs7IXcXeyI0cfF/kFWRCADE4yTBN7kev1RWAd8AnPjKPRgaw6qb1C3DkbtokAzxooCHaG2mg0a9EwPDBdcM1QFUlItgWlURMRKh8nZG7zpD1Y+SEMa6R6/C7RmnkVJDVZA8+OuaB96tBz1iSPeKmSYgM1yq4zK9y0wCy3A+2oYDRqpvWUNy0vH5zN20i0pUSaKhhctCfHWWgcdgNNJC6lEDjpgmfW51wrzbCQ+VB4vtxhcoTAbCa7Pnwz9+jT/YkEzw2kj14l6Qs1cT7sMmeiQAYdfnVspeufP7iuQ/kQZI+YH1ourJt0us3r7/F3eWLH0u//sJuVGeIhDva0EdNuD/+8TFLA/xsfMBvdPvef+O3V8scDABklcnDbBkB3FanSe/ev4vqHEJokBHsM1aAPZBtd9MTmjzwpmdSNj2tyMANghd2PQZwwwEWuVC37QFar2177Fzwtj3OR7TNyGWhV7ryVkiEWr//4TvS0hq7cPCTbe/giaMcPHH4nnrwJJXR6MlPT8ZxVOk2SUNvgKUCrLd/vKViuagcnepWHJ1qm9yGPuMAdmIZfF9HUInowT0QX+905f/GIzQzf2iprAAAAABJRU5ErkJggg=="},ohDP:function(t,e){t.exports="data:image/png;base64,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"},ovGj:function(t,e){},vNpX:function(t,e){},xEzc:function(t,e){}},[0]);
//# sourceMappingURL=app.ee6597aa.js.map