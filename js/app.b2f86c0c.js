webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,i){t.exports=i("NHnr")},1:function(t,e){},FaPs:function(t,e){},KXjg:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("/5sW"),r=(i("gbyG"),i("Gh7F"),i("iPd/")),o=i.n(r),a=i("8kuj"),s=i.n(a),l=i("QxPg"),c=i("KeE0"),u=i.n(c);l["a"].library.add(u.a);var d={name:"ObjectView",props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown=!this.isShown;var t={37:1,38:1,39:1,40:1};function e(t){t=t||window.event,t.preventDefault&&t.preventDefault(),t.returnValue=!1}function i(i){if(t[i.keyCode])return e(i),!1}this.isShown?(window.onwheel=e,window.ontouchmove=e,document.onkeydown=i):(window.onwheel=null,window.ontouchmove=null,document.onkeydown=null)}}},m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"object"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description},on:{click:function(e){t.toggle()}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"}],staticClass:"details"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description}}),i("p",[t._v(t._s(t.object.application.description))]),i("a",{attrs:{href:t.object.edm_rights}},[t._v("License")]),i("a",{attrs:{href:t.object.edm_is_shown_at}},[t._v("Source")]),i("br"),i("button",{on:{click:function(e){t.toggle()}}},[i("i",{staticClass:"fas fa-times"})])])])},f=[],g=i("XyMi");function h(t){i("FaPs")}var p=!1,v=h,b="data-v-cf8e4cf8",w=null,F=Object(g["a"])(d,m,f,p,v,b,w),I=F.exports,C=i("uIr0"),_=i.n(C),j=i("6OnX"),y=i.n(j);l["a"].library.add(_.a),l["a"].library.add(u.a),l["a"].library.add(y.a);var S={name:"FilterMenu",data:function(){return{isShown:!1,strumporBtnWidth:40,byxorBtnWidth:40,trojorBtnWidth:40}},computed:{colorFilterStatus:function(){return st.state.colorFilterActive},activeColor:function(){return st.state.colorFilter}},methods:{toggle:function(){this.isShown=!this.isShown},toggleGarment:function(t,e){"false"===t.target.getAttribute("aria-pressed")?t.target.setAttribute("aria-pressed","true"):t.target.setAttribute("aria-pressed","false"),st.commit("toggleGarment",e)},updateColorFilter:function(t){st.commit("activateColorFilter"),st.commit("setColorFilter",t.target.value.substring(1))},resetColorFilter:function(){st.commit("deactivateColorFilter")}},created:function(){var t=st.state.allItems.length,e=st.state.allItems.filter(function(t){return t.application.garment.includes("strumpor")}).length,i=st.state.allItems.filter(function(t){return t.application.garment.includes("byxor")}).length,n=st.state.allItems.filter(function(t){return t.application.garment.includes("tröjor")}).length,r=e/t*100,o=i/t*100,a=n/t*100;this.strumporBtnWidth=r,this.byxorBtnWidth=o,this.trojorBtnWidth=a}},L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"root"},[i("div",{staticClass:"minified",class:{open:t.isShown},on:{click:function(e){t.toggle()}}},[i("i",{staticClass:"fas fa-times"}),i("i",{staticClass:"fas fa-sliders-h"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShown,expression:"isShown"}],staticClass:"expanded"},[i("div",{staticClass:"toogle-garmet-btns"},[i("div",{style:{width:t.strumporBtnWidth+"%"},attrs:{role:"button","aria-pressed":"false"},on:{click:function(e){t.toggleGarment(e,"strumpor")}}},[t._v("Strumpor")]),i("div",{style:{width:t.byxorBtnWidth+"%"},attrs:{role:"button","aria-pressed":"false"},on:{click:function(e){t.toggleGarment(e,"byxor")}}},[t._v("Byxor")]),i("div",{style:{width:t.trojorBtnWidth+"%"},attrs:{role:"button","aria-pressed":"false"},on:{click:function(e){t.toggleGarment(e,"tröjor")}}},[t._v("Tröjor")])]),i("div",{style:{background:"#"+t.activeColor},attrs:{id:"color-wraper"}},[i("i",{staticClass:"fas fa-eye-dropper"}),i("input",{attrs:{type:"color"},on:{change:function(e){t.updateColorFilter(e)}}})]),t.colorFilterStatus?i("button",{attrs:{id:"color-reset"},on:{click:function(e){t.resetColorFilter()}}},[t._v("Reset color")]):t._e()])])},x=[];function k(t){i("KXjg")}var A=!1,W=k,B="data-v-08c09e09",G=null,M=Object(g["a"])(S,L,x,A,W,B,G),O=M.exports,V={name:"ImageWall",components:{ObjectView:I,FilterMenu:O,Spinner:s.a},directives:{imagesLoaded:o.a},computed:{list:function(){var t=this,e=st.state.allItems;return e?(st.state.garmentFilter.length>0&&(e=e.filter(function(t){return st.state.garmentFilter.some(function(e){return t.application.garment.includes(e)})})),st.state.colorFilterActive&&(e=e.filter(function(e){return e.application.colors.some(function(e){return e.score>.1&&t.isSimilarColor(e.hex,st.state.colorFilter)})})),st.state.visibleLimit===this.visibleLimit?(st.commit("resetVisibleLimit"),window.scrollTo(0,0)):this.visibleLimit=st.state.visibleLimit,e.slice(0,st.state.visibleLimit)):null},loading:function(){return st.state.isLoadingImages},allItems:function(){return st.state.allItems}},data:function(){return{option:{getSortData:{id:"id"},sortBy:"id"},latestVisibleLimit:30}},methods:{imageChange:function(t){t.isComplete?st.commit("notLoadingImages"):st.commit("loadingImages")},isSimilarColor:function(t,e){var i=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),r=parseInt(t.substring(4,6),16),o=parseInt(e.substring(0,2),16),a=parseInt(e.substring(2,4),16),s=parseInt(e.substring(4,6),16),l=255-Math.abs(i-o),c=255-Math.abs(n-a),u=255-Math.abs(r-s);l/=255,c/=255,u/=255;var d=(l+c+u)/3;return d>=.9}}},E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loading?i("spinner",{staticClass:"spinner",attrs:{size:"big"}}):t._e(),i("masonry",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:t.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],attrs:{cols:3,gutter:0}},t._l(t.list,function(e){return t.list?i("div",{key:e.europeana_record,staticClass:"image"},[i("ObjectView",{attrs:{object:e}})],1):t._e()})),t.allItems.length>0?i("FilterMenu"):t._e()],1)},N=[];function P(t){i("pUAn")}var $=!1,H=P,X="data-v-27badcdc",D=null,K=Object(g["a"])(V,E,N,$,H,X,D),T=K.exports,U={name:"app",components:{ImageWall:T},methods:{fetchIntoState:function(){function t(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=[t[i],t[e]];t[e]=n[0],t[i]=n[1]}return t}this.$http.get("data.json").then(function(t){return t.body}).then(function(e){return st.commit("addAllItems",t(e))})},handleScroll:function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-2e3&&(st.state.isLoadingImages||st.commit("increaseVisibleLimit",15))}},beforeMount:function(){this.fetchIntoState()},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ImageWall")],1)},z=[];function J(t){i("+VGo")}var Q=!1,R=J,q=null,Z=null,tt=Object(g["a"])(U,Y,z,Q,R,q,Z),et=tt.exports,it=i("PlbA"),nt=i.n(it),rt=i("8+8L"),ot=i("NYxO"),at=i("G7ha");i.d(e,"store",function(){return st}),n["default"].use(nt.a),n["default"].use(rt["a"]),n["default"].use(ot["a"]),n["default"].use(at["a"]),n["default"].config.productionTip=!1;var st=new ot["a"].Store({state:{allItems:null,visibleLimit:30,garmentFilter:[],colorFilterActive:!1,colorFilter:!1,isLoadingImages:!1},mutations:{addAllItems:function(t,e){t.allItems=e},increaseVisibleLimit:function(t,e){t.visibleLimit+=e},resetVisibleLimit:function(t){t.visibleLimit=30},toggleGarment:function(t,e){var i=t.garmentFilter.indexOf(e);-1===i?t.garmentFilter.push(e):t.garmentFilter.splice(i,1)},loadingImages:function(t){return t.isLoadingImages=!0},notLoadingImages:function(t){return t.isLoadingImages=!1},activateColorFilter:function(t){return t.colorFilterActive=!0},deactivateColorFilter:function(t){return t.colorFilterActive=!1},setColorFilter:function(t,e){return t.colorFilter=e}}});new n["default"]({render:function(t){return t(et)}}).$mount("#app")},pUAn:function(t,e){}},[0]);
//# sourceMappingURL=app.b2f86c0c.js.map