webpackJsonp([1],{"+VGo":function(t,e){},"/KZK":function(t,e){},0:function(t,e,i){t.exports=i("NHnr")},1:function(t,e){},"GW+X":function(t,e){},HHqe:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("/5sW"),o=(i("gbyG"),i("Gh7F"),i("iPd/")),r=i.n(o),s=i("8kuj"),a=i.n(s),l={name:"ObjectView",props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown=!this.isShown}}},c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"object"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description},on:{click:function(e){t.toggle()}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"}],staticClass:"details"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description}}),i("p",[t._v(t._s(t.object.application.description))]),i("a",{attrs:{href:t.object.edm_rights}},[t._v("License")]),i("a",{attrs:{href:t.object.edm_is_shown_at}},[t._v("Source")]),i("br"),i("button",{on:{click:function(e){t.toggle()}}},[t._v("toggle object")])])])},u=[],d=i("XyMi");function m(t){i("/KZK")}var g=!1,f=m,p="data-v-334ee2cc",h=null,v=Object(d["a"])(l,c,u,g,f,p,h),b=v.exports,w={name:"FilterMenu",data:function(){return{isShown:!1,strumporBtnWidth:40,byxorBtnWidth:40}},computed:{colorFilterStatus:function(){return U.state.colorFilterActive}},methods:{toggle:function(){var t=U.state.allItems.length,e=U.state.allItems.filter(function(t){return t.application.garment.includes("strumpor")}).length,i=U.state.allItems.filter(function(t){return t.application.garment.includes("byxor")}).length,n=e/t*100,o=i/t*100;this.strumporBtnWidth=n,this.byxorBtnWidth=o,this.isShown=!this.isShown},toggleGarment:function(t,e){console.log(e),"false"===t.target.getAttribute("aria-pressed")?(console.log(!0),t.target.setAttribute("aria-pressed","true")):(console.log(!1),t.target.setAttribute("aria-pressed","false")),U.commit("toggleGarment",e)},updateColorFilter:function(t){U.commit("activateColorFilter"),U.commit("setColorFilter",t.target.value.substring(1))},resetColorFilter:function(){U.commit("deactivateColorFilter")}}},_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"root"},[i("div",{staticClass:"minified",class:{open:t.isShown},on:{click:function(e){t.toggle()}}},[t.isShown?i("span",[t._v("close filter")]):t._e(),t.isShown?t._e():i("span",[t._v("open filter")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"}],staticClass:"expanded"},[i("div",{staticClass:"toogle-garmet-btns"},[i("div",{style:{width:t.strumporBtnWidth+"%"},attrs:{role:"button","aria-pressed":"false"},on:{click:function(e){t.toggleGarment(e,"strumpor")}}},[t._v("Strumpor")]),i("div",{style:{width:t.byxorBtnWidth+"%"},attrs:{role:"button","aria-pressed":"false"},on:{click:function(e){t.toggleGarment(e,"byxor")}}},[t._v("Byxor")])]),i("input",{attrs:{type:"color"},on:{change:function(e){t.updateColorFilter(e)}}}),t.colorFilterStatus?i("button",{on:{click:function(e){t.resetColorFilter()}}},[t._v("Reset color")]):t._e()])])},F=[];function I(t){i("HHqe")}var S=!1,L=I,C="data-v-5bb09ccc",j=null,x=Object(d["a"])(w,_,F,S,L,C,j),y=x.exports,W={name:"ImageWall",components:{ObjectView:b,FilterMenu:y,Spinner:a.a},directives:{imagesLoaded:r.a},computed:{list:function(){var t=this,e=U.state.allItems;return console.log("debug: executing filtering"),e?(U.state.garmentFilter.length>0&&(e=e.filter(function(t){return U.state.garmentFilter.some(function(e){return t.application.garment.includes(e)})})),U.state.colorFilterActive&&(e=e.filter(function(e){return e.application.colors.some(function(e){return e.score>.1&&t.isSimilarColor(e.hex,U.state.colorFilter)})})),U.state.visibleLimit===this.visibleLimit?(console.log("debug: reseting visibleLimit"),U.commit("resetVisibleLimit"),window.scrollTo(0,0)):this.visibleLimit=U.state.visibleLimit,e.slice(0,U.state.visibleLimit)):null},loading:function(){return U.state.isLoadingImages}},data:function(){return{option:{getSortData:{id:"id"},sortBy:"id"},latestVisibleLimit:15}},methods:{imageChange:function(t){t.isComplete?U.commit("notLoadingImages"):U.commit("loadingImages")},isSimilarColor:function(t,e){var i=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),o=parseInt(t.substring(4,6),16),r=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),a=parseInt(e.substring(4,6),16),l=255-Math.abs(i-r),c=255-Math.abs(n-s),u=255-Math.abs(o-a);l/=255,c/=255,u/=255;var d=(l+c+u)/3;return d>=.9}}},A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loading?i("spinner",{staticClass:"spinner",attrs:{size:"big"}}):t._e(),t.list?i("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:t.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:t.list,id:"root_isotope"}},t._l(t.list,function(t){return i("div",{key:t.europeana_record,staticClass:"image"},[i("ObjectView",{attrs:{object:t}})],1)})):t._e(),i("FilterMenu")],1)},G=[];function O(t){i("GW+X")}var V=!1,k=O,M="data-v-2e980dc1",B=null,H=Object(d["a"])(W,A,G,V,k,M,B),E=H.exports,N={name:"app",components:{ImageWall:E},methods:{fetchIntoState:function(){this.$http.get("data.json").then(function(t){return t.body}).then(function(t){return U.commit("addAllItems",t)})},handleScroll:function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(U.state.isLoadingImages||U.commit("increaseVisibleLimit",5))}},beforeMount:function(){this.fetchIntoState()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ImageWall")],1)},K=[];function P(t){i("+VGo")}var X=!1,q=P,T=null,Y=null,Z=Object(d["a"])(N,$,K,X,q,T,Y),z=Z.exports,D=i("PlbA"),J=i.n(D),R=i("8+8L"),Q=i("NYxO");i.d(e,"store",function(){return U}),n["default"].use(J.a),n["default"].use(R["a"]),n["default"].use(Q["a"]),n["default"].config.productionTip=!1;var U=new Q["a"].Store({state:{allItems:null,visibleLimit:15,garmentFilter:[],colorFilterActive:!1,colorFilter:!1,isLoadingImages:!1},mutations:{addAllItems:function(t,e){t.allItems=e},increaseVisibleLimit:function(t,e){t.visibleLimit+=e},resetVisibleLimit:function(t){t.visibleLimit=15},toggleGarment:function(t,e){var i=t.garmentFilter.indexOf(e);-1===i?t.garmentFilter.push(e):t.garmentFilter.splice(i,1)},loadingImages:function(t){return t.isLoadingImages=!0},notLoadingImages:function(t){return t.isLoadingImages=!1},activateColorFilter:function(t){return t.colorFilterActive=!0},deactivateColorFilter:function(t){return t.colorFilterActive=!1},setColorFilter:function(t,e){return t.colorFilter=e}}});new n["default"]({render:function(t){return t(z)}}).$mount("#app")}},[0]);
//# sourceMappingURL=app.848e5cbd.js.map