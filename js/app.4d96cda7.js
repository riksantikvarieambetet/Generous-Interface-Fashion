webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,i){t.exports=i("NHnr")},1:function(t,e){},JSJe:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("gbyG"),i("Gh7F");var n=i("/5sW"),o=i("iPd/"),r=i.n(o),a=i("8kuj"),l=i.n(a),s=i("ohDP"),c=i.n(s),u=i("kFhx"),m=i.n(u),A={name:"LicenseBtn",props:{uri:!1},created:function(){var t=this,e=[{uri:"http://creativecommons.org/licenses/by-nc-nd/2.5/",img:c.a,name:"Attribution-NonCommercial-NoDerivs 2.5 Generic"},{uri:"http://creativecommons.org/licenses/by/2.5/",img:m.a,name:"Attribution 2.5 Generic"}],i=e.filter(function(e){return e.uri==t.uri});i?this.license=i[0]:console.warn("Unknown license URI: "+this.uri)}},d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:t.uri}},[i("img",{attrs:{src:t.license.img,alt:t.license.name}})])},g=[],v=i("XyMi");function f(t){i("vNpX")}var h=!1,p=f,w="data-v-f2467500",b=null,C=Object(v["a"])(A,d,g,h,p,w,b),F=C.exports,B=i("QxPg"),k=i("KeE0"),L=i.n(k);B["a"].library.add(L.a);var M={name:"ObjectView",components:{LicenseBtn:F},props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown=!this.isShown;var t={37:1,38:1,39:1,40:1};function e(t){t=t||window.event,t.preventDefault&&t.preventDefault(),t.returnValue=!1}function i(i){if(t[i.keyCode])return e(i),!1}this.isShown?(window.onwheel=e,window.ontouchmove=e,document.onkeydown=i):(window.onwheel=null,window.ontouchmove=null,document.onkeydown=null)}}},x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"object"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description},on:{click:function(e){t.toggle()}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"},{name:"hammer",rawName:"v-hammer:swipe.up",value:t.toggle,expression:"toggle",arg:"swipe",modifiers:{up:!0}}],staticClass:"details"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description}}),i("p",[t._v(t._s(t.object.application.description))]),i("LicenseBtn",{attrs:{uri:t.object.edm_rights}}),i("a",{attrs:{href:t.object.edm_is_shown_at}},[t._v(t._s(t.object.edm_data_provider))]),i("br"),i("button",{on:{click:function(e){t.toggle()}}},[i("i",{staticClass:"fas fa-times"})])],1)])},I=[];function j(t){i("oTvm")}var D=!1,N=j,y="data-v-939860b4",G=null,S=Object(v["a"])(M,x,I,D,N,y,G),V=S.exports,P={name:"FilterContainer",data:function(){return{}},methods:{}},W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"filter-container"},[t._t("default")],2)},H=[];function E(t){i("ovGj")}var J=!1,Q=E,T="data-v-62ea9881",U=null,O=Object(v["a"])(P,W,H,J,Q,T,U),q=O.exports,z=i("Zzkc"),K={name:"FilterMenu",data:function(){return{colorFilterOpen:!1,currentColor:"#000000"}},components:{FilterContainer:q,Chrome:z["Chrome"]},computed:{nActiveitems:function(){return It.state.activeItems.length},staticColors:function(){return It.state.colorFilter}},methods:{toggleColorFilter:function(){this.colorFilterOpen=!this.colorFilterOpen},updateColorFilterDynamic:function(t){It.commit("activateColorFilter"),It.commit("updateDynamicColor",t.hex),this.currentColor=t.hex},lockColor:function(t){It.commit("addColorFilter",this.currentColor)},resetColorFilter:function(){It.commit("deactivateColorFilter"),this.colorFilterOpen=!1,this.currentColor="#000000"},removeColor:function(t){It.commit("removeColorFilter",[t])}}},R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"menu"},[i("span",[t._v(t._s(t.nActiveitems))]),i("div",{staticClass:"color-btn",style:{background:t.currentColor},on:{click:t.toggleColorFilter}})]),i("FilterContainer",{directives:[{name:"show",rawName:"v-show",value:t.colorFilterOpen,expression:"colorFilterOpen"},{name:"hammer",rawName:"v-hammer:swipe.up",value:t.toggleColorFilter,expression:"toggleColorFilter",arg:"swipe",modifiers:{up:!0}}]},[i("Chrome",{staticClass:"color-picker",attrs:{value:t.currentColor,disableAlpha:!0,disableFields:!0},on:{input:t.updateColorFilterDynamic}}),i("button",{on:{click:t.lockColor}},[t._v("Lock color")]),t._l(t.staticColors,function(e){return i("div",{key:e},[i("div",{staticClass:"color",style:{background:e}},[i("span",{attrs:{role:"button"},on:{click:function(i){t.removeColor(e)}}},[t._v("x")])])])}),i("button",{staticClass:"red-btn",on:{click:t.resetColorFilter}},[t._v("Clear and disable this filter")])],2)],1)},X=[];function Y(t){i("qpyq")}var Z=!1,_=Y,$="data-v-1b6e9022",tt=null,et=Object(v["a"])(K,R,X,Z,_,$,tt),it=et.exports,nt={name:"ImageWall",components:{ObjectView:V,FilterMenu:it,Spinner:l.a},directives:{imagesLoaded:r.a},computed:{list:function(){var t=this,e=It.state.allItems;return console.log("debug: executing filtering"),e?(It.state.colorFilterActive&&(e=e.filter(function(e){return e.application.colors.some(function(e){return e.score>.1&&t.isSimilarColor(e.hsl,It.state.colorFilterDynamic)})}),It.state.colorFilter.forEach(function(i){e=e.filter(function(e){return e.application.colors.some(function(e){return e.score>.1&&t.isSimilarColor(e.hsl,i)})})})),It.state.visibleLimit===this.visibleLimit?(console.log("debug: reseting visibleLimit"),It.commit("resetVisibleLimit"),window.scrollTo(0,0)):this.visibleLimit=It.state.visibleLimit,It.commit("addActiveItems",e),e.slice(0,It.state.visibleLimit)):null},loading:function(){return It.state.isLoadingImages}},data:function(){return{latestVisibleLimit:30}},methods:{imageChange:function(t){t.isComplete?It.commit("notLoadingImages"):It.commit("loadingImages")},hexToHsl:function(t){var e=parseInt(t.substr(1,2),16),i=parseInt(t.substr(3,2),16),n=parseInt(t.substr(5,2),16);e/=255,i/=255,n/=255;var o,r,a=Math.max(e,i,n),l=Math.min(e,i,n),s=(a+l)/2;if(a==l)o=r=0;else{var c=a-l;switch(r=s>.5?c/(2-a-l):c/(a+l),a){case e:o=(i-n)/c+(i<n?6:0);break;case i:o=(n-e)/c+2;break;case n:o=(e-i)/c+4;break}o/=6}return[o,r,s]},isSimilarColor:function(t,e){var i=this.hexToHsl(e),n=t[0],o=i[0],r=t[1],a=i[1],l=t[2],s=i[2];return!(Math.abs(n-o)>.1)&&(!(Math.abs(r-a)>.1)&&!(Math.abs(l-s)>.8))}}},ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loading?i("spinner",{staticClass:"spinner",attrs:{size:"big"}}):t._e(),i("FilterMenu"),t.list?i("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:t.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:t.list,id:"root_isotope"}},t._l(t.list,function(t){return i("div",{key:t.europeana_record,staticClass:"image"},[i("ObjectView",{attrs:{object:t}})],1)})):t._e()],1)},rt=[];function at(t){i("JSJe")}var lt=!1,st=at,ct="data-v-2d2a1296",ut=null,mt=Object(v["a"])(nt,ot,rt,lt,st,ct,ut),At=mt.exports,dt={name:"app",components:{ImageWall:At},methods:{fetchIntoState:function(){function t(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=[t[i],t[e]];t[e]=n[0],t[i]=n[1]}return t}this.$http.get("data.json").then(function(t){return t.body}).then(function(e){return It.commit("addAllItems",t(e))})},handleScroll:function(){window.innerHeight+window.scrollY>=document.querySelector("html").offsetHeight-50&&(It.state.isLoadingImages||It.commit("increaseVisibleLimit",10))}},beforeMount:function(){this.fetchIntoState()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ImageWall")],1)},vt=[];function ft(t){i("+VGo")}var ht=!1,pt=ft,wt=null,bt=null,Ct=Object(v["a"])(dt,gt,vt,ht,pt,wt,bt),Ft=Ct.exports,Bt=i("PlbA"),kt=i.n(Bt),Lt=i("8+8L"),Mt=i("NYxO"),xt=i("VIwv");i.d(e,"store",function(){return It}),n["default"].use(xt["a"]),n["default"].use(kt.a),n["default"].use(Lt["a"]),n["default"].use(Mt["a"]),n["default"].config.productionTip=!1;var It=new Mt["a"].Store({state:{allItems:[],activeItems:[],visibleLimit:30,garmentFilter:[],colorFilterActive:!1,colorFilter:[],colorFilterDynamic:"#000000",isLoadingImages:!1},mutations:{addAllItems:function(t,e){t.allItems=e},addActiveItems:function(t,e){t.activeItems=e},increaseVisibleLimit:function(t,e){t.visibleLimit+=e},resetVisibleLimit:function(t){t.visibleLimit=30},toggleGarment:function(t,e){var i=t.garmentFilter.indexOf(e);-1===i?t.garmentFilter.push(e):t.garmentFilter.splice(i,1)},loadingImages:function(t){return t.isLoadingImages=!0},notLoadingImages:function(t){return t.isLoadingImages=!1},activateColorFilter:function(t){return t.colorFilterActive=!0},deactivateColorFilter:function(t){t.colorFilterActive=!1,t.colorFilter=[]},updateDynamicColor:function(t,e){return t.colorFilterDynamic=e},addColorFilter:function(t,e){return!t.colorFilter.includes(e)&&t.colorFilter.push(e)},removeColorFilter:function(t,e){return t.colorFilter=t.colorFilter.filter(function(t){return!e.includes(t)})}}});new n["default"]({render:function(t){return t(Ft)}}).$mount("#app")},kFhx:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAYAAABjyArgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABTpJREFUaN7tWk1PG0cY9jlSLO5cOIYbbZUeU6T0B5AfkIh/UNRbJKqgiFSKVAlZrqLm0FCptyawxubDX3gNa2N71/Z6IeTKT+AnvNXzrt9ldlnwB84aE0Yasd6ZnR2efeZ5P2ZiRBSPxWJ0X0dfifCn+2Mnv017xV3KlbJUPChQySjRQbVMRt2gI7NK9WaNGq0GWW2TmrZFzU7TrbZFlm2S2WpwH/St1A1+VjdKPFaulOOx8Y5MNk1beylK7Wi0ub1BG5lPXD+lP9LHrf/uTFWAvgA3r+do/7BI5YpORu2QwWq06gxg22lR58Qm53OHjk+P6eSLW3HtfHa4DX0s2+Jn8CzGKFd1HhNjB0HWdjY9kAHwHQU55ge3WmYG1qwasxWgAdTVN6v09Oen9DD+8NJSwD20rf6+yn3bx23+KGB0pVFhNu8f7vtATme3KLWruSBnNkbG4pfLL2l2dvbSHHEPbWMBGLKgggtgmh2LWZlIJmh6erpv3UHfxJ8JfhYSAjZXPZCLnlxs5zKU3nNBHgWLk38l6dHsI28e8/PztLS0xBXXch990DdSgKGTkIULcJvMxIVnCz7wpqamaHFxkVZWVkjXda64xj20qX3xbKVmUMtxQQaTIReuJmdpt7Djl4obsHj93w8Uj8fd9y4s0NnZGQUL7qENfdA3CpA9gGHQoJeQBTA3CC7AA5Dn5+d0XVlfX/cBDbYAZHwwfDi8A4avUM5Tdn/PlYoQFg/6jwhz8aHVolhz3xxlbpEBjOULowTNxdJWwZ2bmwtlxFUFHwHPqEzGmNBkvONCKhQW76ZI294cSiagq8LcL6enPQFGESZ/bU32ADZYGups0KC5Kri9WNsPyNBkGD6WirpBesVlMWtx3tVikYlBARaDNggJ0FcMXyQAM3ttk6VBDBqWum3bNGwByCIXGBNjw4UTFhcPXBarHsUwMiEGLVggF/KBg9KBIoYvEoChjy2nxa6YTAqae9MieocKFw4rRLS41HXbVJkYFmB4CsESElX5Cp6JDGBEaPaJzb6ssFeVBngL0C18dVQV/GDb2tqa7x8RFmNsaDEivksykcu43oSiw3cKYBg3LGEJItQlBQDD/F2AqWlaaJv6vCxVjI2ID1JU7bpshXKBvQnosLhrd1IikE84PnW8CaksFGM1MzPDxgGA4xrLX9rE0wDg0hYmEwirmz4dLvjctWEAvs7IXcXeyI0cfF/kFWRCADE4yTBN7kev1RWAd8AnPjKPRgaw6qb1C3DkbtokAzxooCHaG2mg0a9EwPDBdcM1QFUlItgWlURMRKh8nZG7zpD1Y+SEMa6R6/C7RmnkVJDVZA8+OuaB96tBz1iSPeKmSYgM1yq4zK9y0wCy3A+2oYDRqpvWUNy0vH5zN20i0pUSaKhhctCfHWWgcdgNNJC6lEDjpgmfW51wrzbCQ+VB4vtxhcoTAbCa7Pnwz9+jT/YkEzw2kj14l6Qs1cT7sMmeiQAYdfnVspeufP7iuQ/kQZI+YH1ourJt0us3r7/F3eWLH0u//sJuVGeIhDva0EdNuD/+8TFLA/xsfMBvdPvef+O3V8scDABklcnDbBkB3FanSe/ev4vqHEJokBHsM1aAPZBtd9MTmjzwpmdSNj2tyMANghd2PQZwwwEWuVC37QFar2177Fzwtj3OR7TNyGWhV7ryVkiEWr//4TvS0hq7cPCTbe/giaMcPHH4nnrwJJXR6MlPT8ZxVOk2SUNvgKUCrLd/vKViuagcnepWHJ1qm9yGPuMAdmIZfF9HUInowT0QX+905f/GIzQzf2iprAAAAABJRU5ErkJggg=="},oTvm:function(t,e){},ohDP:function(t,e){t.exports="data:image/png;base64,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"},ovGj:function(t,e){},qpyq:function(t,e){},vNpX:function(t,e){}},[0]);
//# sourceMappingURL=app.4d96cda7.js.map