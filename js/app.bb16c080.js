webpackJsonp([1],{"+VGo":function(t,e){},0:function(t,e,i){t.exports=i("NHnr")},1:function(t,e){},"26Th":function(t,e){},"8nnh":function(t,e){},Ajvz:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("gbyG"),i("Gh7F");var n=i("/5sW"),o=i("iPd/"),r=i.n(o),a=i("8kuj"),l=i.n(a),s=i("ohDP"),c=i.n(s),u=i("kFhx"),m=i.n(u),d={name:"LicenseBtn",props:{uri:!1},created:function(){var t=this,e=[{uri:"http://creativecommons.org/licenses/by-nc-nd/2.5/",img:c.a,name:"Attribution-NonCommercial-NoDerivs 2.5 Generic"},{uri:"http://creativecommons.org/licenses/by/2.5/",img:m.a,name:"Attribution 2.5 Generic"}],i=e.filter(function(e){return e.uri===t.uri});i?this.license=i[0]:console.warn("Unknown license URI: "+this.uri)}},A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:t.uri}},[i("img",{attrs:{src:t.license.img,alt:t.license.name}})])},g=[],h=i("XyMi");function f(t){i("Ajvz")}var p=!1,v=f,C="data-v-57891350",b=null,F=Object(h["a"])(d,A,g,p,v,C,b),w=F.exports,k=i("QxPg"),B=i("KeE0"),y=i.n(B);k["a"].library.add(y.a);var x={name:"ObjectView",components:{LicenseBtn:w},props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown||this.$modal.show(this.object.europeana_record),this.isShown&&this.$modal.hide(this.object.europeana_record),this.isShown=!this.isShown},filterByColor:function(t){_t.commit("deactivateColorFilter"),this.$root.$emit("updateColorFilterDynamic","#"+t),this.toggle()}}},I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"object"},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description},on:{click:function(e){t.toggle()}}}),i("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:t.toggle,expression:"toggle",arg:"swipe",modifiers:{up:!0}}],attrs:{name:t.object.europeana_record,classes:["v--modal details"],height:"auto",transition:"slide-north"}},[i("img",{attrs:{src:t.object.edm_preview,alt:t.object.application.description}}),i("div",{staticClass:"image-colors"},t._l(t.object.application.colors,function(e){return i("div",{key:e.score,style:{background:"#"+e.hex,width:100*e.score+"%"},on:{click:function(i){t.filterByColor(e.hex)}}})})),i("p",[t._v(t._s(t.object.application.description))]),i("LicenseBtn",{attrs:{uri:t.object.edm_rights}}),i("br"),i("a",{attrs:{href:t.object.edm_is_shown_at}},[t._v(t._s(t.object.edm_data_provider))])],1)],1)},D=[];function L(t){i("26Th"),i("OAmS")}var M=!1,j=L,N="data-v-d839479e",P=null,W=Object(h["a"])(x,I,D,M,j,N,P),S=W.exports,E=(i("CvWX"),{name:"FilterContainer",data:function(){return{}},methods:{}}),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"filter-container"},[t._t("default")],2)},G=[];function O(t){i("fCD1")}var H=!1,Q=O,T="data-v-25027dde",U=null,J=Object(h["a"])(E,V,G,H,Q,T,U),z=J.exports,K={name:"AnimatedNumber",data:function(){return{displayNumber:0,interval:!1}},props:{number:{default:0}},ready:function(){this.displayNumber=this.number?this.number:0},watch:{number:function(){var t=this;clearInterval(this.interval),this.number!==this.displayNumber&&(this.interval=window.setInterval(function(){if(t.displayNumber!==t.number){var e=(t.number-t.displayNumber)/10;e=e>=0?Math.ceil(e):Math.floor(e),t.displayNumber=t.displayNumber+e}},20))}}},q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t._v("\n    "+t._s(t.displayNumber)+"\n")])},R=[],_=!1,X=null,Y=null,Z=null,$=Object(h["a"])(K,q,R,_,X,Y,Z),tt=$.exports,et=i("Zzkc"),it={name:"FilterMenu",data:function(){return{colorFilterOpen:!1,currentColor:"url('transparent.png')"}},components:{FilterContainer:z,Chrome:et["Chrome"],AnimatedNumber:tt},computed:{nActiveitems:function(){return _t.state.activeItems.length},staticColors:function(){return _t.state.colorFilter},colorCount:function(){return _t.getters.getColorPercentages},currentDynamicColorState:function(){return _t.state.colorFilterDynamic}},mounted:function(){var t=this;this.$root.$on("triggerFiltering",function(){t.executeFiltering()}),this.$root.$on("updateColorFilterDynamic",function(e){var i={hex:e};t.updateColorFilterDynamic(i)})},methods:{openModal:function(){this.$root.$emit("openInfo")},toggleColorFilter:function(){this.colorFilterOpen=!this.colorFilterOpen},updateColorFilterDynamic:function(t){_t.commit("activateColorFilter"),_t.commit("updateDynamicColor",t.hex),this.currentColor=t.hex,this.executeFiltering()},lockColor:function(){_t.commit("addColorFilter",this.currentColor)},resetColorFilter:function(){_t.commit("deactivateColorFilter"),this.colorFilterOpen=!1,this.currentColor="url('transparent.png')",this.executeFiltering()},removeColor:function(t){_t.commit("removeColorFilter",[t]),this.executeFiltering()},executeFiltering:function(){var t=this,e=_t.state.allItems;console.log("debug: executing filtering"),_t.commit("colorCountClear"),_t.state.colorFilterActive&&(e=e.filter(function(e){return e.application.colors.some(function(e){return t.isSimilarColor(e.hex,_t.state.colorFilterDynamic)})}),_t.commit("colorCountAdd",[e.length,_t.state.colorFilterDynamic]),_t.state.colorFilter.forEach(function(i){i!==_t.state.colorFilterDynamic&&(e=e.filter(function(e){return e.application.colors.some(function(e){return t.isSimilarColor(e.hex,i)})}),_t.commit("colorCountAdd",[_t.state.allItems.filter(function(e){return e.application.colors.some(function(e){return t.isSimilarColor(e.hex,i)})}).length,i]))})),_t.commit("addActiveItems",e),console.log("debug: reseting visibleLimit"),_t.commit("resetVisibleLimit"),window.scrollTo(0,0)},isSimilarColor:function(t,e){t.startsWith("#")&&(t=t.substring(1)),e.startsWith("#")&&(e=e.substring(1));var i=parseInt(t.substring(0,2),16),n=parseInt(t.substring(2,4),16),o=parseInt(t.substring(4,6),16),r=parseInt(e.substring(0,2),16),a=parseInt(e.substring(2,4),16),l=parseInt(e.substring(4,6),16),s=255-Math.abs(i-r),c=255-Math.abs(n-a),u=255-Math.abs(o-l);s/=255,c/=255,u/=255;var m=(s+c+u)/3;return m>=.9}}},nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"menu"},[i("img",{staticClass:"logo",attrs:{src:"http://via.placeholder.com/250x90?text=logo",alt:"logo and infomrtaion"},on:{click:t.openModal}}),i("span",{staticClass:"left"},[t._v("Antal: "),i("AnimatedNumber",{attrs:{number:t.nActiveitems}})],1),i("div",{staticClass:"color-btn",style:{background:t.currentColor},on:{click:t.toggleColorFilter}},t._l(t.colorCount,function(e){return t.colorCount.length>1?i("div",{key:e[1],style:{background:e[1],width:e[0]+"%"}}):t._e()}))]),i("transition",{attrs:{name:"slide-north"}},[t.colorFilterOpen?i("FilterContainer",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:t.toggleColorFilter,expression:"toggleColorFilter",arg:"swipe",modifiers:{up:!0}}]},[i("div",{staticClass:"desktop-break"},[i("Chrome",{staticClass:"color-picker",attrs:{value:t.currentColor,disableAlpha:!0,disableFields:!0},on:{input:t.updateColorFilterDynamic}})],1),i("div",{staticClass:"desktop-break"},["url('transparent.png')"==t.currentColor||t.staticColors.includes(t.currentDynamicColorState)&&t.currentColor!=t.currentDynamicColorState?t._e():i("div",{staticClass:"color",style:{background:t.currentColor}}),t._l(t.staticColors,function(e){return i("div",{key:e,staticClass:"color",style:{background:e}},[i("span",{attrs:{role:"button"},on:{click:function(i){t.removeColor(e)}}},[t._v("x")])])}),"url('transparent.png')"!=t.currentColor?i("button",{on:{click:t.lockColor}},[t._v("Add color")]):t._e(),i("button",{staticClass:"red-btn",on:{click:t.resetColorFilter}},[t._v("Clear and disable this filter")])],2)]):t._e()],1)],1)},ot=[];function rt(t){i("8nnh")}var at=!1,lt=rt,st="data-v-106d2b7f",ct=null,ut=Object(h["a"])(it,nt,ot,at,lt,st,ct),mt=ut.exports,dt={name:"Palette",data:function(){return{palette:!1}},created:function(){this.randomPalette()},methods:{filterWithPalette:function(){_t.commit("deactivateColorFilter"),this.palette.forEach(function(t){return _t.commit("addColorFilter",t)}),_t.commit("updateDynamicColor",this.palette[this.palette.length-1]),_t.commit("activateColorFilter"),this.$root.$emit("triggerFiltering"),this.randomPalette()},randomPalette:function(){var t=[["#3541b5","#2a95b9","#04131a"],["#6b4f4a","88813b","#734443"],["#239e51","#23929e","#000000"],["#2b8fad","#d5392f","#d5d103"],["#451313","#a77da9","#834240"],["#13451e","#799a20"]];this.palette=t[Math.floor(Math.random()*t.length)]}}},At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"root"},[i("h2",[t._v("Explore with the palette below?")]),i("div",{staticClass:"palette",on:{click:t.filterWithPalette}},t._l(t.palette,function(e){return t.palette?i("div",{key:e,style:{background:e}}):t._e()}))])},gt=[];function ht(t){i("sVu4")}var ft=!1,pt=ht,vt="data-v-d174cf74",Ct=null,bt=Object(h["a"])(dt,At,gt,ft,pt,vt,Ct),Ft=bt.exports,wt={name:"ImageWall",components:{ObjectView:S,FilterMenu:mt,Spinner:l.a,Palette:Ft},directives:{imagesLoaded:r.a},computed:{list:function(){return _t.state.activeItems.slice(0,_t.state.visibleLimit)},loading:function(){return _t.state.isLoadingImages},isAtEndOfFeed:function(){return _t.state.activeItems.length<=_t.state.visibleLimit}},methods:{imageChange:function(t){t.isComplete?_t.commit("notLoadingImages"):_t.commit("loadingImages")}}},kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loading?i("spinner",{staticClass:"spinner",attrs:{size:"big"}}):t._e(),i("FilterMenu"),t.list?i("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:t.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:t.list}},t._l(t.list,function(t){return i("div",{key:t.europeana_record,staticClass:"image"},[i("ObjectView",{attrs:{object:t}})],1)})):t._e(),t.isAtEndOfFeed?i("Palette"):t._e()],1)},Bt=[];function yt(t){i("SOym")}var xt=!1,It=yt,Dt="data-v-80cf5220",Lt=null,Mt=Object(h["a"])(wt,kt,Bt,xt,It,Dt,Lt),jt=Mt.exports,Nt={name:"app",components:{ImageWall:jt},mounted:function(){var t=this;this.$root.$on("openInfo",function(){t.$modal.show("welcome")})},methods:{fetchIntoState:function(){function t(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=[t[i],t[e]];t[e]=n[0],t[i]=n[1]}return t}this.$http.get("data.json").then(function(t){return t.body}).then(function(e){_t.commit("addAllItems",t(e)),_t.commit("addActiveItems",_t.state.allItems)})},handleScroll:function(){window.innerHeight+window.scrollY>=document.querySelector("html").offsetHeight-50&&!_t.state.isLoadingImages&&_t.state.visibleLimit<=_t.state.activeItems.length&&_t.commit("increaseVisibleLimit",10)},closeWelcome:function(){this.$modal.hide("welcome")}},beforeMount:function(){this.fetchIntoState()},created:function(){var t=this;window.addEventListener("scroll",this.handleScroll),setTimeout(function(){t.$modal.show("welcome")},100)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ImageWall"),i("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:t.closeWelcome,expression:"closeWelcome",arg:"swipe",modifiers:{up:!0}}],attrs:{name:"welcome",classes:["v--modal","welcome"],transition:"slide-north"}},[i("h1",[t._v("A Title")]),i("p",[t._v("Some introduction explaining the meaning of life.")]),i("div",{staticClass:"btn-container"},[i("button",{on:{click:t.closeWelcome}},[t._v("Let's Go!")])])])],1)},Wt=[];function St(t){i("+VGo")}var Et=!1,Vt=St,Gt=null,Ot=null,Ht=Object(h["a"])(Nt,Pt,Wt,Et,Vt,Gt,Ot),Qt=Ht.exports,Tt=i("PlbA"),Ut=i.n(Tt),Jt=i("8+8L"),zt=i("NYxO"),Kt=i("VIwv"),qt=i("rifk"),Rt=i.n(qt);i.d(e,"store",function(){return _t}),n["default"].use(Rt.a),n["default"].use(Kt["a"]),n["default"].use(Ut.a),n["default"].use(Jt["a"]),n["default"].use(zt["a"]),n["default"].config.productionTip=!1;var _t=new zt["a"].Store({state:{allItems:[],activeItems:[],visibleLimit:30,garmentFilter:[],colorFilterActive:!1,colorFilter:[],colorFilterDynamic:"#000000",colorCount:[],isLoadingImages:!1},mutations:{addAllItems:function(t,e){t.allItems=e},addActiveItems:function(t,e){t.activeItems=e},increaseVisibleLimit:function(t,e){t.visibleLimit+=e},resetVisibleLimit:function(t){t.visibleLimit=30},toggleGarment:function(t,e){var i=t.garmentFilter.indexOf(e);-1===i?t.garmentFilter.push(e):t.garmentFilter.splice(i,1)},loadingImages:function(t){return t.isLoadingImages=!0},notLoadingImages:function(t){return t.isLoadingImages=!1},activateColorFilter:function(t){return t.colorFilterActive=!0},deactivateColorFilter:function(t){t.colorFilterActive=!1,t.colorFilter=[]},updateDynamicColor:function(t,e){return t.colorFilterDynamic=e},addColorFilter:function(t,e){return!t.colorFilter.includes(e)&&t.colorFilter.push(e)},removeColorFilter:function(t,e){return t.colorFilter=t.colorFilter.filter(function(t){return!e.includes(t)})},colorCountClear:function(t){return t.colorCount=[]},colorCountAdd:function(t,e){return t.colorCount.push(e)}},getters:{getColorPercentages:function(t){var e=0;return t.colorCount.forEach(function(t){return e+=t[0]}),t.colorCount.map(function(t){return t[0]=t[0]/e*100,t})}}});new n["default"]({render:function(t){return t(Qt)}}).$mount("#app")},OAmS:function(t,e){},SOym:function(t,e){},fCD1:function(t,e){},kFhx:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAYAAABjyArgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABTpJREFUaN7tWk1PG0cY9jlSLO5cOIYbbZUeU6T0B5AfkIh/UNRbJKqgiFSKVAlZrqLm0FCptyawxubDX3gNa2N71/Z6IeTKT+AnvNXzrt9ldlnwB84aE0Yasd6ZnR2efeZ5P2ZiRBSPxWJ0X0dfifCn+2Mnv017xV3KlbJUPChQySjRQbVMRt2gI7NK9WaNGq0GWW2TmrZFzU7TrbZFlm2S2WpwH/St1A1+VjdKPFaulOOx8Y5MNk1beylK7Wi0ub1BG5lPXD+lP9LHrf/uTFWAvgA3r+do/7BI5YpORu2QwWq06gxg22lR58Qm53OHjk+P6eSLW3HtfHa4DX0s2+Jn8CzGKFd1HhNjB0HWdjY9kAHwHQU55ge3WmYG1qwasxWgAdTVN6v09Oen9DD+8NJSwD20rf6+yn3bx23+KGB0pVFhNu8f7vtATme3KLWruSBnNkbG4pfLL2l2dvbSHHEPbWMBGLKgggtgmh2LWZlIJmh6erpv3UHfxJ8JfhYSAjZXPZCLnlxs5zKU3nNBHgWLk38l6dHsI28e8/PztLS0xBXXch990DdSgKGTkIULcJvMxIVnCz7wpqamaHFxkVZWVkjXda64xj20qX3xbKVmUMtxQQaTIReuJmdpt7Djl4obsHj93w8Uj8fd9y4s0NnZGQUL7qENfdA3CpA9gGHQoJeQBTA3CC7AA5Dn5+d0XVlfX/cBDbYAZHwwfDi8A4avUM5Tdn/PlYoQFg/6jwhz8aHVolhz3xxlbpEBjOULowTNxdJWwZ2bmwtlxFUFHwHPqEzGmNBkvONCKhQW76ZI294cSiagq8LcL6enPQFGESZ/bU32ADZYGups0KC5Kri9WNsPyNBkGD6WirpBesVlMWtx3tVikYlBARaDNggJ0FcMXyQAM3ttk6VBDBqWum3bNGwByCIXGBNjw4UTFhcPXBarHsUwMiEGLVggF/KBg9KBIoYvEoChjy2nxa6YTAqae9MieocKFw4rRLS41HXbVJkYFmB4CsESElX5Cp6JDGBEaPaJzb6ssFeVBngL0C18dVQV/GDb2tqa7x8RFmNsaDEivksykcu43oSiw3cKYBg3LGEJItQlBQDD/F2AqWlaaJv6vCxVjI2ID1JU7bpshXKBvQnosLhrd1IikE84PnW8CaksFGM1MzPDxgGA4xrLX9rE0wDg0hYmEwirmz4dLvjctWEAvs7IXcXeyI0cfF/kFWRCADE4yTBN7kev1RWAd8AnPjKPRgaw6qb1C3DkbtokAzxooCHaG2mg0a9EwPDBdcM1QFUlItgWlURMRKh8nZG7zpD1Y+SEMa6R6/C7RmnkVJDVZA8+OuaB96tBz1iSPeKmSYgM1yq4zK9y0wCy3A+2oYDRqpvWUNy0vH5zN20i0pUSaKhhctCfHWWgcdgNNJC6lEDjpgmfW51wrzbCQ+VB4vtxhcoTAbCa7Pnwz9+jT/YkEzw2kj14l6Qs1cT7sMmeiQAYdfnVspeufP7iuQ/kQZI+YH1ourJt0us3r7/F3eWLH0u//sJuVGeIhDva0EdNuD/+8TFLA/xsfMBvdPvef+O3V8scDABklcnDbBkB3FanSe/ev4vqHEJokBHsM1aAPZBtd9MTmjzwpmdSNj2tyMANghd2PQZwwwEWuVC37QFar2177Fzwtj3OR7TNyGWhV7ryVkiEWr//4TvS0hq7cPCTbe/giaMcPHH4nnrwJJXR6MlPT8ZxVOk2SUNvgKUCrLd/vKViuagcnepWHJ1qm9yGPuMAdmIZfF9HUInowT0QX+905f/GIzQzf2iprAAAAABJRU5ErkJggg=="},ohDP:function(t,e){t.exports="data:image/png;base64,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"},sVu4:function(t,e){}},[0]);
//# sourceMappingURL=app.bb16c080.js.map