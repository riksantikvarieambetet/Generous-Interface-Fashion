webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,i){t.exports=i("NHnr")},1:function(t,e){},"9apn":function(t,e){},N1bt:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("/5sW"),o=(i("gbyG"),i("Gh7F"),i("iPd/")),r=i.n(o),a=i("8kuj"),s=i.n(a),l=i("QxPg"),c=i("KeE0"),u=i.n(c);l["a"].library.add(u.a);var d={name:"ObjectView",props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown=!this.isShown;var t={37:1,38:1,39:1,40:1};function e(t){t=t||window.event,t.preventDefault&&t.preventDefault(),t.returnValue=!1}function i(i){if(t[i.keyCode])return e(i),!1}this.isShown?(window.onwheel=e,window.ontouchmove=e,document.onkeydown=i):(window.onwheel=null,window.ontouchmove=null,document.onkeydown=null)}}},m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"object"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description},on:{click:function(e){t.toggle()}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"}],staticClass:"details"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description}}),i("p",[t._v(t._s(t.object.application.description))]),i("a",{attrs:{href:t.object.edm_rights}},[t._v("License")]),i("a",{attrs:{href:t.object.edm_is_shown_at}},[t._v("Source")]),i("br"),i("button",{on:{click:function(e){t.toggle()}}},[i("i",{staticClass:"fas fa-times"})])])])},f=[],g=i("XyMi");function v(t){i("N1bt")}var p=!1,h=v,b="data-v-6e055d0e",w=null,I=Object(g["a"])(d,m,f,p,h,b,w),C=I.exports,_=i("uIr0"),F=i.n(_),S=i("6OnX"),y=i.n(S);l["a"].library.add(F.a),l["a"].library.add(u.a),l["a"].library.add(y.a);var j={name:"FilterMenu",data:function(){return{isShown:!1,strumporBtnWidth:40,byxorBtnWidth:40,trojorBtnWidth:40}},computed:{colorFilterStatus:function(){return at.state.colorFilterActive},activeColor:function(){return at.state.colorFilter},nActiveitems:function(){return at.state.activeItems.length}},methods:{toggle:function(){var t=at.state.allItems.length,e=at.state.allItems.filter(function(t){return t.application.garment.includes("strumpor")}).length,i=at.state.allItems.filter(function(t){return t.application.garment.includes("byxor")}).length,n=at.state.allItems.filter(function(t){return t.application.garment.includes("tröjor")}).length,o=e/t*100,r=i/t*100,a=n/t*100;this.strumporBtnWidth=o,this.byxorBtnWidth=r,this.trojorBtnWidth=a,this.isShown=!this.isShown},toggleGarment:function(t,e){console.log(e),"false"===t.target.getAttribute("aria-pressed")?(console.log(!0),t.target.setAttribute("aria-pressed","true")):(console.log(!1),t.target.setAttribute("aria-pressed","false")),at.commit("toggleGarment",e)},updateColorFilter:function(t){at.commit("activateColorFilter"),at.commit("setColorFilter",t.target.value.substring(1))},resetColorFilter:function(){at.commit("deactivateColorFilter")}}},L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"root"},[i("div",{staticClass:"minified",class:{open:t.isShown},on:{click:function(e){t.toggle()}}},[i("span",[t._v(t._s(t.nActiveitems))]),i("i",{staticClass:"fas fa-times"}),i("i",{staticClass:"fas fa-sliders-h"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"}],staticClass:"expanded"},[i("div",{staticClass:"toogle-garmet-btns"},[i("div",{style:{width:t.strumporBtnWidth+"%"},attrs:{role:"button","aria-pressed":"false"},on:{click:function(e){t.toggleGarment(e,"strumpor")}}},[t._v("Strumpor")]),i("div",{style:{width:t.byxorBtnWidth+"%"},attrs:{role:"button","aria-pressed":"false"},on:{click:function(e){t.toggleGarment(e,"byxor")}}},[t._v("Byxor")]),i("div",{style:{width:t.trojorBtnWidth+"%"},attrs:{role:"button","aria-pressed":"false"},on:{click:function(e){t.toggleGarment(e,"tröjor")}}},[t._v("Tröjor")])]),i("div",{style:{background:"#"+t.activeColor},attrs:{id:"color-wrapper"}},[i("i",{staticClass:"fas fa-eye-dropper"}),i("input",{attrs:{type:"color"},on:{change:function(e){t.updateColorFilter(e)}}})]),t.colorFilterStatus?i("button",{attrs:{id:"color-reset"},on:{click:function(e){t.resetColorFilter()}}},[t._v("Reset color")]):t._e()])])},x=[];function A(t){i("VSQA")}var k=!1,V=A,W="data-v-1152697a",B=null,M=Object(g["a"])(j,L,x,k,V,W,B),O=M.exports,G={name:"ImageWall",components:{ObjectView:C,FilterMenu:O,Spinner:s.a},directives:{imagesLoaded:r.a},computed:{list:function(){var t=this,e=at.state.allItems;return console.log("debug: executing filtering"),e?(at.state.garmentFilter.length>0&&(e=e.filter(function(t){return at.state.garmentFilter.some(function(e){return t.application.garment.includes(e)})})),at.state.colorFilterActive&&(e=e.filter(function(e){return e.application.colors.some(function(e){return e.score>.1&&t.isSimilarColor(e.hex,at.state.colorFilter)})})),at.state.visibleLimit===this.visibleLimit?(console.log("debug: reseting visibleLimit"),at.commit("resetVisibleLimit"),window.scrollTo(0,0)):this.visibleLimit=at.state.visibleLimit,at.commit("addActiveItems",e),e.slice(0,at.state.visibleLimit)):null},loading:function(){return at.state.isLoadingImages}},data:function(){return{option:{getSortData:{id:"id"},sortBy:"id"},latestVisibleLimit:15}},methods:{imageChange:function(t){t.isComplete?at.commit("notLoadingImages"):at.commit("loadingImages")},isSimilarColor:function(t,e){var i=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),o=parseInt(t.substring(4,6),16),r=parseInt(e.substring(0,2),16),a=parseInt(e.substring(2,4),16),s=parseInt(e.substring(4,6),16),l=255-Math.abs(i-r),c=255-Math.abs(n-a),u=255-Math.abs(o-s);l/=255,c/=255,u/=255;var d=(l+c+u)/3;return d>=.9}}},N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loading?i("spinner",{staticClass:"spinner",attrs:{size:"big"}}):t._e(),t.list?i("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:t.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:t.list,id:"root_isotope"}},t._l(t.list,function(t){return i("div",{key:t.europeana_record,staticClass:"image"},[i("ObjectView",{attrs:{object:t}})],1)})):t._e(),i("FilterMenu")],1)},E=[];function $(t){i("9apn")}var H=!1,P=$,D="data-v-83803f40",Q=null,T=Object(g["a"])(G,N,E,H,P,D,Q),X=T.exports,Y={name:"app",components:{ImageWall:X},methods:{fetchIntoState:function(){function t(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=[t[i],t[e]];t[e]=n[0],t[i]=n[1]}return t}this.$http.get("data.json").then(function(t){return t.body}).then(function(e){return at.commit("addAllItems",t(e))})},handleScroll:function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-50&&(at.state.isLoadingImages||at.commit("increaseVisibleLimit",5))}},beforeMount:function(){this.fetchIntoState()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ImageWall")],1)},J=[];function K(t){i("+VGo")}var R=!1,q=K,U=null,Z=null,tt=Object(g["a"])(Y,z,J,R,q,U,Z),et=tt.exports,it=i("PlbA"),nt=i.n(it),ot=i("8+8L"),rt=i("NYxO");i.d(e,"store",function(){return at}),n["default"].use(nt.a),n["default"].use(ot["a"]),n["default"].use(rt["a"]),n["default"].config.productionTip=!1;var at=new rt["a"].Store({state:{allItems:[],activeItems:[],visibleLimit:15,garmentFilter:[],colorFilterActive:!1,colorFilter:!1,isLoadingImages:!1},mutations:{addAllItems:function(t,e){t.allItems=e},addActiveItems:function(t,e){t.activeItems=e},increaseVisibleLimit:function(t,e){t.visibleLimit+=e},resetVisibleLimit:function(t){t.visibleLimit=15},toggleGarment:function(t,e){var i=t.garmentFilter.indexOf(e);-1===i?t.garmentFilter.push(e):t.garmentFilter.splice(i,1)},loadingImages:function(t){return t.isLoadingImages=!0},notLoadingImages:function(t){return t.isLoadingImages=!1},activateColorFilter:function(t){return t.colorFilterActive=!0},deactivateColorFilter:function(t){return t.colorFilterActive=!1},setColorFilter:function(t,e){return t.colorFilter=e}}});new n["default"]({render:function(t){return t(et)}}).$mount("#app")},VSQA:function(t,e){}},[0]);
//# sourceMappingURL=app.4f4f51c1.js.map