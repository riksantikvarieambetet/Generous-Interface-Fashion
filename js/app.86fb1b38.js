webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,i){e.exports=i("NHnr")},1:function(e,t){},"26Th":function(e,t){},D2B4:function(e,t){},D4Jl:function(e,t){},HIHd:function(e,t){},INi9:function(e,t){},MW9y:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("gbyG"),i("Gh7F");var n=i("/5sW"),a=i("8+8L"),l=i("VIwv"),s=i("rifk"),o=i.n(s),r=i("TXmL"),c=i("8kuj"),d=i.n(c),u=i("iPd/"),m=i.n(u),f=i("ohDP"),p=i.n(f),g=i("kFhx"),v=i.n(g),h={name:"LicenseBtn",props:{uri:!1},created:function(){var e=this,t=[{uri:"http://creativecommons.org/licenses/by-nc-nd/2.5/",img:p.a,name:"Attribution-NonCommercial-NoDerivs 2.5 Generic"},{uri:"http://creativecommons.org/licenses/by/2.5/",img:v.a,name:"Attribution 2.5 Generic"}],i=t.filter(function(t){return t.uri===e.uri});i?this.license=i[0]:console.warn("Unknown license URI: "+this.uri)}},b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{attrs:{href:e.uri,target:"_blank"}},[i("img",{attrs:{src:e.license.img,alt:e.license.name}})])},A=[],C=i("XyMi");function I(e){i("HIHd")}var w=!1,S=I,k="data-v-e4320afe",L=null,F=Object(C["a"])(h,b,A,w,S,k,L),y=F.exports,B=i("NYxO"),x=i("424j");n["default"].use(B["a"]);var _=new B["a"].Store({state:{allItems:[],activeItems:[],visibleLimit:30,isLoadingImages:!1,selectedSnappedColorIds:[],selectedLabelIds:[],wallDetails:!1},mutations:{addAllItems:function(e,t){e.allItems=t},addLabels:function(e,t){e.labels=t},addActiveItems:function(e,t){e.activeItems=t},increaseVisibleLimit:function(e,t){e.visibleLimit+=t},resetVisibleLimit:function(e){e.visibleLimit=30},loadingImages:function(e){return e.isLoadingImages=!0},notLoadingImages:function(e){return e.isLoadingImages=!1},replaceSnappedColorIds:function(e,t){e.selectedSnappedColorIds=t},setSelectedSnappedColorId:function(e,t){if(e.selectedSnappedColorIds.includes(t)){var i=e.selectedSnappedColorIds.indexOf(t);-1!==i&&e.selectedSnappedColorIds.splice(i,1)}else e.selectedSnappedColorIds.push(t)},replaceLabelIds:function(e,t){e.selectedLabelIds=t},setSelectedLabelId:function(e,t){if(e.selectedLabelIds.includes(t)){var i=e.selectedLabelIds.indexOf(t);-1!==i&&e.selectedLabelIds.splice(i,1)}else e.selectedLabelIds.push(t)},toggleWallDetails:function(e){e.wallDetails=!e.wallDetails}},getters:{anyColorFilterIsActive:function(e){return!(e.selectedSnappedColorIds.length<1)},labelFilterIsActive:function(e){return!(e.selectedLabelIds<1)},numberOfActiveItems:function(e){return e.activeItems.length},numberOfItems:function(e){return e.allItems.length},selectedSnappedColorIds:function(e){return e.selectedSnappedColorIds},selectedLabelIds:function(e){return e.selectedLabelIds}}}),O=new B["a"].Store({plugins:[Object(x["a"])()],state:{savedPalettes:[]},mutations:{savePalette:function(e,t){return e.savedPalettes.push(t)}}}),N={name:"LabelBtn",props:{label:null},computed:{isActive:function(){return _.state.selectedLabelIds.includes(this.label)}},methods:{setSelectedLabelId:function(){_.commit("setSelectedLabelId",this.label),this.$root.$emit("triggerFiltering")}}},E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"label"},[i("span",{staticClass:"btn",class:{active:e.isActive},on:{click:function(t){e.setSelectedLabelId()}}},[e._v(e._s(e.label))])])},M=[];function P(e){i("l5EY")}var j=!1,D=P,W="data-v-468aaa42",V=null,H=Object(C["a"])(N,E,M,j,D,W,V),G=H.exports,T={name:"ColorBtn",props:{color:null},computed:{isActive:function(){return _.state.selectedSnappedColorIds.includes(this.color)}},methods:{filterByColor:function(){_.commit("setSelectedSnappedColorId",this.color),this.$root.$emit("triggerFiltering")}}},$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"color"},[i("div",{staticClass:"btn",class:{active:e.isActive},style:{background:e.color,"border-color":e.color},on:{click:function(t){e.filterByColor(e.color)}}})])},J=[];function U(e){i("INi9")}var Q=!1,q=U,R="data-v-5878b370",K=null,z=Object(C["a"])(T,$,J,Q,q,R,K),Y=z.exports,X=i("QxPg"),Z=i("KeE0"),ee=i.n(Z);X["a"].library.add(ee.a);var te={name:"CloseBtn"},ie=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("i",{staticClass:"fas fa-times"})])}];function ae(e){i("D4Jl")}var le=!1,se=ae,oe="data-v-015fa9f4",re=null,ce=Object(C["a"])(te,ie,ne,le,se,oe,re),de=ce.exports,ue={name:"ObjectView",components:{LicenseBtn:y,LabelBtn:G,ColorBtn:Y,CloseBtn:de},props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown||this.$modal.show(this.object.europeana_record),this.isShown&&this.$modal.hide(this.object.europeana_record),this.isShown=!this.isShown},filterByColor:function(e){_.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering"),this.toggle()},setSelectedLabelId:function(e){_.commit("setSelectedLabelId",e),this.$root.$emit("triggerFiltering")},labelActive:function(e){return _.state.selectedLabelIds.includes(e)}},computed:{showWallDetails:function(){return _.state.wallDetails}}},me=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"object"},[i("img",{attrs:{src:e.object.edm_preview,alt:e.object.application.description},on:{click:function(t){e.toggle()}}}),e.showWallDetails?i("div",{staticClass:"wallDetails"},e._l(e.object.application.labels,function(t){return i("span",{key:t,staticClass:"label",class:{active:e.labelActive(t)},on:{click:function(i){e.setSelectedLabelId(t)}}},[e._v(e._s(t))])})):e._e(),i("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.toggle,expression:"toggle",arg:"swipe",modifiers:{up:!0}}],attrs:{name:e.object.europeana_record,classes:["v--modal details"],height:"auto",transition:"slide-north"}},[i("CloseBtn",{nativeOn:{click:function(t){return e.toggle(t)}}}),i("img",{attrs:{src:e.object.edm_preview,alt:e.object.application.description}}),i("div",{staticClass:"image-colors"},e._l(e.object.application.css_colors,function(e){return i("ColorBtn",{key:e,attrs:{color:e}})})),i("div",{staticClass:"image-labels"},e._l(e.object.application.labels,function(e){return i("LabelBtn",{key:e,attrs:{label:e}})})),i("div",{staticClass:"image-description"},[i("p",[e._v("\n        "+e._s(e.object.application.description)+"\n      ")])]),i("div",{staticClass:"buttons"},[i("div",[i("a",{attrs:{href:e.object.edm_is_shown_at,target:"_blank"}},[e._v(e._s(e.$t("moreDetails"))+" "+e._s(e.object.edm_data_provider))])]),i("div",[i("a",{attrs:{href:"https://www.google.se/searchbyimage?image_url="+e.object.edm_preview,target:"_blank"}},[e._v("Hitta liknande bilder på Google")])])]),i("br"),i("LicenseBtn",{attrs:{uri:e.object.edm_rights}}),i("br")],1)],1)},fe=[];function pe(e){i("26Th"),i("iODh")}var ge=!1,ve=pe,he="data-v-6c50c9c2",be=null,Ae=Object(C["a"])(ue,me,fe,ge,ve,he,be),Ce=Ae.exports,Ie=(i("dSUw"),i("beEN"),i("Biqn")),we=i.n(Ie),Se=i("Nk8h"),ke=i.n(Se),Le=i("HGMW"),Fe=i.n(Le),ye=i("43fV"),Be=i.n(ye),xe=i("2LG2"),_e=i.n(xe),Oe={name:"FilterContainer",data:function(){return{}},methods:{}},Ne=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"filter-container"},[e._t("default")],2)},Ee=[];function Me(e){i("rFKE")}var Pe=!1,je=Me,De="data-v-f3ba0f10",We=null,Ve=Object(C["a"])(Oe,Ne,Ee,Pe,je,De,We),He=Ve.exports,Ge={name:"AnimatedNumber",data:function(){return{displayNumber:0,interval:!1}},props:{number:{default:0}},ready:function(){this.displayNumber=this.number?this.number:0},watch:{number:function(){var e=this;clearInterval(this.interval),this.number!==this.displayNumber&&(this.interval=window.setInterval(function(){if(e.displayNumber!==e.number){var t=(e.number-e.displayNumber)/10;t=t>=0?Math.ceil(t):Math.floor(t),e.displayNumber=e.displayNumber+t}},20))}}},Te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[e._v("\n    "+e._s(e.displayNumber)+"\n")])},$e=[],Je=!1,Ue=null,Qe=null,qe=null,Re=Object(C["a"])(Ge,Te,$e,Je,Ue,Qe,qe),Ke=Re.exports,ze={name:"ColorMountain",props:{colors:{default:[]}},computed:{selectedSnappedColorIds:function(){return _.state.selectedSnappedColorIds}},methods:{setSelectedSnappedColorId:function(e){_.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering")}}},Ye=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"color-mountain"},e._l(e.colors,function(t){return i("div",{key:t[0],class:{selected:e.selectedSnappedColorIds.includes(t[0])},style:{background:t[0],height:t[1]+"px",width:100/e.colors.length+"%"},on:{click:function(i){e.setSelectedSnappedColorId(t[0])}}})}))},Xe=[];function Ze(e){i("MW9y")}var et=!1,tt=Ze,it="data-v-e819b360",nt=null,at=Object(C["a"])(ze,Ye,Xe,et,tt,it,nt),lt=at.exports,st={name:"LabelStack",props:{labels:{default:[]}},computed:{selectedLabelIds:function(){return _.state.selectedLabelIds}},methods:{setSelectedLabelId:function(e){_.commit("setSelectedLabelId",e),this.$root.$emit("triggerFiltering")}}},ot=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",e._l(e.labels,function(t){return i("span",{key:t[0],style:{fontSize:t[1]}},[i("span",{staticClass:"label",class:{selectedLabel:e.selectedLabelIds.includes(t[0])},on:{click:function(i){e.setSelectedLabelId(t[0])}}},[e._v(e._s(t[0]))]),i("span",[e._v(", ")])])}))},rt=[];function ct(e){i("Uvf3")}var dt=!1,ut=ct,mt="data-v-5da4eece",ft=null,pt=Object(C["a"])(st,ot,rt,dt,ut,mt,ft),gt=pt.exports;X["a"].library.add(Fe.a),X["a"].library.add(ke.a),X["a"].library.add(Be.a),X["a"].library.add(_e.a);var vt={name:"FilterMenu",data:function(){return{colorFilterOpen:!1,labelFilterOpen:!1,colorStats:[],labelStats:[]}},components:{FilterContainer:He,AnimatedNumber:Ke,ColorMountain:lt,LabelStack:gt,CloseBtn:de},computed:we()({},Object(B["b"])(["anyColorFilterIsActive","labelFilterIsActive","numberOfActiveItems","numberOfItems","selectedSnappedColorIds","selectedLabelIds"])),mounted:function(){var e=this;this.$root.$on("triggerFiltering",function(){e.executeFiltering()})},methods:{openModal:function(){this.$root.$emit("openInfo")},resetFilters:function(){_.commit("replaceSnappedColorIds",[]),_.commit("replaceLabelIds",[]),_.commit("resetVisibleLimit"),this.executeFiltering()},toggleColorFilter:function(){this.labelFilterOpen&&(this.labelFilterOpen=!1),this.colorFilterOpen=!this.colorFilterOpen},toggleLabelFilter:function(){this.colorFilterOpen&&(this.colorFilterOpen=!1),this.labelFilterOpen=!this.labelFilterOpen},savePalette:function(){O.commit("savePalette",this.staticColors.slice(0))},executeFiltering:function(){var e=_.state.allItems;console.log("debug: executing filtering"),this.selectedLabelIds.forEach(function(t){e=e.filter(function(e){return e.application.labels.includes(t)})}),this.selectedSnappedColorIds.forEach(function(t){e=e.filter(function(e){return e.application.css_colors.includes(t)})});var t=[],i=[],n=[],a=[];e.forEach(function(e){i=i.concat(e.application.css_colors),a=a.concat(e.application.labels)}),i.forEach(function(e){t.push([e,i.filter(function(t){return t===e}).length])}),this.colorStats=Array.from(new Set(t.map(JSON.stringify)),JSON.parse).filter(function(e){return e[1]>2}),a.forEach(function(e){n.push([e,a.filter(function(t){return t===e}).length])}),n=Array.from(new Set(n.map(JSON.stringify)),JSON.parse).filter(function(e){return e[1]>2});var l=n.reduce(function(e,t){return Math.max(e,t[1])},0);this.labelStats=n.map(function(e){var t=(e[1]-2)/(l-2);return e[1]=30*t+10,e[1]+="px",e}),_.commit("addActiveItems",e),console.log("debug: reseting visibleLimit"),_.commit("resetVisibleLimit"),window.scrollTo(0,0)}}},ht=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"menu"},[i("div",{staticClass:"menu-btn logo",on:{click:e.resetFilters}},[i("i",{staticClass:"fas fa-sync"})]),i("span",{staticClass:"left"},[e._v(e._s(e.$t("nItemsPrefix"))+" "),i("AnimatedNumber",{attrs:{number:e.numberOfActiveItems}}),e._v(e._s(e.$t("nItemsMidfix"))+" "+e._s(e.numberOfItems)+" "+e._s(e.$t("nItemsSuffix")))],1),i("div",{staticClass:"menu-btn",class:{active:e.labelFilterIsActive},on:{click:e.toggleLabelFilter}},[i("i",{staticClass:"fas fa-tag"})]),i("div",{staticClass:"menu-btn",on:{click:function(t){e.$root.$emit("toggleSidebar")}}},[i("i",{staticClass:"fas fa-save"})]),i("div",{staticClass:"menu-btn",class:{active:e.anyColorFilterIsActive},on:{click:e.toggleColorFilter}},[i("i",{staticClass:"fas fa-palette"})])]),i("transition",{attrs:{name:"slide-north"}},[e.colorFilterOpen?i("FilterContainer",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.toggleColorFilter,expression:"toggleColorFilter",arg:"swipe",modifiers:{up:!0}}]},[i("close-btn",{nativeOn:{click:function(t){return e.toggleColorFilter(t)}}}),i("ColorMountain",{attrs:{colors:e.colorStats}})],1):e._e()],1),i("transition",{attrs:{name:"slide-north"}},[e.labelFilterOpen?i("FilterContainer",[i("CloseBtn",{nativeOn:{click:function(t){return e.toggleLabelFilter(t)}}}),i("LabelStack",{attrs:{labels:e.labelStats}})],1):e._e()],1)],1)},bt=[];function At(e){i("wDEq")}var Ct=!1,It=At,wt="data-v-0f35de4d",St=null,kt=Object(C["a"])(vt,ht,bt,Ct,It,wt,St),Lt=kt.exports,Ft={name:"Sidebar",components:{CloseBtn:de},computed:{savedPalettes:function(){return O.state.savedPalettes}},methods:{filterWithPalette:function(e){_.commit("replaceColorFilter",e),this.$root.$emit("triggerFiltering")}}},yt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar-container"},[i("CloseBtn",{nativeOn:{click:function(t){e.$root.$emit("toggleSidebar")}}}),i("h2",[e._v("Saved Palettes")]),0===e.savedPalettes.length?i("p",[e._v("You have no saved palettes.")]):e._l(e.savedPalettes,function(t,n){return i("div",{key:n,staticClass:"palette",on:{click:function(i){e.filterWithPalette(t)}}},e._l(t,function(e){return i("div",{key:n+e,style:{background:e}})}))})],2)},Bt=[];function xt(e){i("VFvC")}var _t=!1,Ot=xt,Nt="data-v-3657123a",Et=null,Mt=Object(C["a"])(Ft,yt,Bt,_t,Ot,Nt,Et),Pt=Mt.exports,jt=i("ZV1T"),Dt=i.n(jt);X["a"].library.add(Dt.a);var Wt={name:"Palette",data:function(){return{color:!1}},created:function(){this.randomPalette()},methods:{filterWithPalette:function(){_.commit("replaceColorFilter",[""]),_.commit("replaceSnappedColorIds",[this.color]),this.$root.$emit("triggerFiltering"),this.randomPalette()},randomPalette:function(){var e=["crimson","brown","lightsalmon","firebrick","tomato","darkslategrey","black","dimgrey","darkgrey","grey","silver","whitesmoke","lavender","indianred","sienna","darkolivegreen","per","rosybrown","gainsboro","saddlebrown","antiquewhite","midnightblue","darkslateblue","slategrey","tan","burlywood","darkkhaki","wheat","lightslategrey","navajowhite","palegoldenrod","darksalmon","lightpink","yellowgreen","khaki","blanchedalmond","chocolate","goldenrod","palevioletred","bisque","lightsteelblue","cornflowerblue","lightgrey","sandybrown","maroon","linen","teal","steelblue","beige","skyblue","mediumaquamarine","darkseagreen","darkorange","ghostwhite","cadetblue","powderblue","thistle","mediumpurple","coral","olivedrab","lightskyblue","royalblue","darkgoldenrod","oldlace","olive","lightcoral","darkgreen","salmon","gold","dodgerblue","seagreen"];this.color=e[Math.floor(Math.random()*e.length)]}}},Vt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"root"},[i("h2",[e._v(e._s(e.$t("theEnd")))]),i("p",[e._v(e._s(e.$t("explorePalette")))]),i("div",{key:e.color,staticClass:"color",style:{background:e.color},on:{click:e.filterWithPalette}}),i("div",{staticClass:"btn",on:{click:e.randomPalette}},[e._v("Shuffle "),i("i",{staticClass:"fas fa-random"})])])},Ht=[];function Gt(e){i("u9+y")}var Tt=!1,$t=Gt,Jt="data-v-2133573f",Ut=null,Qt=Object(C["a"])(Wt,Vt,Ht,Tt,$t,Jt,Ut),qt=Qt.exports,Rt={name:"ImageWall",components:{ObjectView:Ce,FilterMenu:Lt,Palette:qt,Sidebar:Pt},directives:{imagesLoaded:m.a},data:function(){return{sidebarIsOpen:!1}},mounted:function(){var e=this;this.$root.$on("toggleSidebar",function(){e.toggleSidebar()})},computed:{list:function(){return _.state.activeItems.slice(0,_.state.visibleLimit)},isAtEndOfFeed:function(){return _.state.activeItems.length<=_.state.visibleLimit}},methods:{imageChange:function(e){e.isComplete?_.commit("notLoadingImages"):_.commit("loadingImages")},toggleSidebar:function(){this.sidebarIsOpen=!this.sidebarIsOpen}}},Kt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("FilterMenu"),e.sidebarIsOpen?i("Sidebar"):e._e(),e.list?i("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:e.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:e.list}},e._l(e.list,function(e){return i("div",{key:e.europeana_record,staticClass:"image"},[i("ObjectView",{attrs:{object:e}})],1)})):e._e(),e.isAtEndOfFeed?i("Palette"):e._e()],1)},zt=[];function Yt(e){i("D2B4")}var Xt=!1,Zt=Yt,ei="data-v-eedb7250",ti=null,ii=Object(C["a"])(Rt,Kt,zt,Xt,Zt,ei,ti),ni=ii.exports,ai=i("HZ4+"),li=i.n(ai),si=i("mM5r"),oi=i.n(si),ri=i("Rh77"),ci=i.n(ri);X["a"].library.add(li.a),X["a"].library.add(oi.a),X["a"].library.add(ci.a);var di={name:"Footer",components:{},computed:we()({},Object(B["b"])(["anyColorFilterIsActive","labelFilterIsActive","selectedSnappedColorIds","selectedLabelIds"])),data:function(){return{isShown:!0}},mounted:function(){var e=this;this.$root.$on("triggerFiltering",function(){e.moveFlerp()})},methods:{toggle:function(){this.isShown=!this.isShown,this.moveFlerp()},moveFlerp:function(){var e=this;n["default"].nextTick(function(){e.$refs.footer&&e.isShown?e.$refs.flerp.style.bottom=e.$refs.footer.clientHeight+"px":e.$refs.flerp.style.bottom="0px"})},removeColor:function(e){_.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering")},removeLabel:function(e){_.commit("setSelectedLabelId",e),this.$root.$emit("triggerFiltering")}}},ui=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.labelFilterIsActive||e.anyColorFilterIsActive,expression:"labelFilterIsActive || anyColorFilterIsActive"}],ref:"flerp",staticClass:"flerp",on:{click:e.toggle}},[i("span",[e._v("Selection")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}]},[i("i",{staticClass:"fas fa-angle-down"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShown,expression:"!isShown"}]},[i("i",{staticClass:"fas fa-angle-up"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}],ref:"footer",staticClass:"footer"},[e._l(e.selectedSnappedColorIds,function(t){return i("div",{key:t,staticClass:"color",style:{background:t},on:{click:function(i){e.removeColor(t)}}},[e._m(0,!0)])}),e._l(e.selectedLabelIds,function(t){return i("div",{key:t,staticClass:"label",on:{click:function(i){e.removeLabel(t)}}},[e._m(1,!0),i("span",[e._v(e._s(t))])])})],2)])},mi=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"close-btn"},[i("i",{staticClass:"fas fa-times-circle fa-lg"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"close-btn"},[i("i",{staticClass:"fas fa-times-circle fa-lg"})])}];function fi(e){i("oPdq")}var pi=!1,gi=fi,vi="data-v-a5fd7db0",hi=null,bi=Object(C["a"])(di,ui,mi,pi,gi,vi,hi),Ai=bi.exports,Ci={name:"app",components:{ImageWall:ni,Spinner:d.a,Footer:Ai},computed:{loading:function(){return _.state.isLoadingImages}},data:function(){return{loadingJson:!0}},mounted:function(){var e=this;this.$root.$on("openInfo",function(){e.$modal.show("welcome")})},methods:{fetchIntoState:function(){var e=this;function t(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),n=[e[i],e[t]];e[t]=n[0],e[i]=n[1]}return e}this.$http.get("data.json").then(function(e){return e.body}).then(function(i){_.commit("addAllItems",t(i)),_.commit("addActiveItems",_.state.allItems),e.$root.$emit("triggerFiltering"),e.loadingJson=!1})},handleScroll:function(){window.innerHeight+window.scrollY>=document.querySelector("html").offsetHeight-50&&_.state.visibleLimit<=_.state.activeItems.length&&_.commit("increaseVisibleLimit",10)},closeWelcome:function(){this.$modal.hide("welcome")},toggleWallDetails:function(){_.commit("toggleWallDetails")}},beforeMount:function(){this.fetchIntoState()},created:function(){var e=this;window.addEventListener("scroll",this.handleScroll),setTimeout(function(){e.$modal.show("welcome")},100)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Ii=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("ImageWall"),i("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.closeWelcome,expression:"closeWelcome",arg:"swipe",modifiers:{up:!0}}],attrs:{name:"welcome",classes:["v--modal","welcome"],transition:"slide-north"}},[i("h1",{on:{click:e.toggleWallDetails}},[e._v(e._s(e.$t("appTitle")))]),i("h2",[e._v(e._s(e.$t("explore"))+e._s(e.$t("tags"))+" "),i("i",{staticClass:"fas fa-tag"}),e._v(e._s(e.$t("and"))+e._s(e.$t("color"))+" "),i("i",{staticClass:"fas fa-palette"}),e._v("!")]),i("p",[e._v(e._s(e.$t("appDescription")))]),i("div",{staticClass:"btn-container"},[i("button",{on:{click:e.closeWelcome}},[e._v(e._s(e.$t("appBegin")))])])]),i("Footer"),e.loading||e.loadingJson?i("spinner",{staticClass:"spinner",attrs:{size:"big"}}):e._e()],1)},wi=[];function Si(e){i("+VGo")}var ki,Li=!1,Fi=Si,yi=null,Bi=null,xi=Object(C["a"])(Ci,Ii,wi,Li,Fi,yi,Bi),_i=xi.exports,Oi={en:{nItemsPrefix:"Showing",nItemsMidfix:"of",nItemsSuffix:"images",filterAddColor:"Add Another Color",filterClear:"Clear This Filter",appBegin:"Start Exploring!",appTitle:"Generous Interfaces",explore:"Explore the collection using ",tags:"tags",and:" and ",color:"colour",appDescription:"A prototype by the Swedish National Heritage Board, Malmö Museer, Nationalmuseum, National Museums of World Culture and the Nordic Museum.",moreDetails:"More details at",theEnd:"~ THE END ~",explorePalette:"PICK A COLOUR TO EXPLORE:"},sv:{nItemsPrefix:"Visar",nItemsMidfix:"av",nItemsSuffix:"bilder",filterAddColor:"Lägg till ytterligare en färg",filterClear:"Rensa detta filter",appBegin:"Börja utforska!",appTitle:"Generösa användargränssnitt",explore:"Utforska samlingen med hjälp av ",tags:"nyckelord",and:" och ",color:"färg",appDescription:"En prototyp från Riksantikvarieämbetet, Malmö museer, Nationalmuseum, Nordiska museet och Världskulturmuseerna.",moreDetails:"Mer information hos",theEnd:"~ SLUT ~",explorePalette:"VÄLJ EN FÄRG FÖR ATT UTFORSKA:"}},Ni=Oi;n["default"].use(r["a"]),n["default"].use(o.a),n["default"].use(l["a"]),n["default"].use(a["a"]),n["default"].config.productionTip=!1,ki=navigator.languages.includes("sv")?"sv":"en";var Ei=new r["a"]({locale:ki,messages:Ni});new n["default"]({render:function(e){return e(_i)},i18n:Ei,store:_}).$mount("#app")},Uvf3:function(e,t){},VFvC:function(e,t){},iODh:function(e,t){},kFhx:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAYAAABjyArgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABTpJREFUaN7tWk1PG0cY9jlSLO5cOIYbbZUeU6T0B5AfkIh/UNRbJKqgiFSKVAlZrqLm0FCptyawxubDX3gNa2N71/Z6IeTKT+AnvNXzrt9ldlnwB84aE0Yasd6ZnR2efeZ5P2ZiRBSPxWJ0X0dfifCn+2Mnv017xV3KlbJUPChQySjRQbVMRt2gI7NK9WaNGq0GWW2TmrZFzU7TrbZFlm2S2WpwH/St1A1+VjdKPFaulOOx8Y5MNk1beylK7Wi0ub1BG5lPXD+lP9LHrf/uTFWAvgA3r+do/7BI5YpORu2QwWq06gxg22lR58Qm53OHjk+P6eSLW3HtfHa4DX0s2+Jn8CzGKFd1HhNjB0HWdjY9kAHwHQU55ge3WmYG1qwasxWgAdTVN6v09Oen9DD+8NJSwD20rf6+yn3bx23+KGB0pVFhNu8f7vtATme3KLWruSBnNkbG4pfLL2l2dvbSHHEPbWMBGLKgggtgmh2LWZlIJmh6erpv3UHfxJ8JfhYSAjZXPZCLnlxs5zKU3nNBHgWLk38l6dHsI28e8/PztLS0xBXXch990DdSgKGTkIULcJvMxIVnCz7wpqamaHFxkVZWVkjXda64xj20qX3xbKVmUMtxQQaTIReuJmdpt7Djl4obsHj93w8Uj8fd9y4s0NnZGQUL7qENfdA3CpA9gGHQoJeQBTA3CC7AA5Dn5+d0XVlfX/cBDbYAZHwwfDi8A4avUM5Tdn/PlYoQFg/6jwhz8aHVolhz3xxlbpEBjOULowTNxdJWwZ2bmwtlxFUFHwHPqEzGmNBkvONCKhQW76ZI294cSiagq8LcL6enPQFGESZ/bU32ADZYGups0KC5Kri9WNsPyNBkGD6WirpBesVlMWtx3tVikYlBARaDNggJ0FcMXyQAM3ttk6VBDBqWum3bNGwByCIXGBNjw4UTFhcPXBarHsUwMiEGLVggF/KBg9KBIoYvEoChjy2nxa6YTAqae9MieocKFw4rRLS41HXbVJkYFmB4CsESElX5Cp6JDGBEaPaJzb6ssFeVBngL0C18dVQV/GDb2tqa7x8RFmNsaDEivksykcu43oSiw3cKYBg3LGEJItQlBQDD/F2AqWlaaJv6vCxVjI2ID1JU7bpshXKBvQnosLhrd1IikE84PnW8CaksFGM1MzPDxgGA4xrLX9rE0wDg0hYmEwirmz4dLvjctWEAvs7IXcXeyI0cfF/kFWRCADE4yTBN7kev1RWAd8AnPjKPRgaw6qb1C3DkbtokAzxooCHaG2mg0a9EwPDBdcM1QFUlItgWlURMRKh8nZG7zpD1Y+SEMa6R6/C7RmnkVJDVZA8+OuaB96tBz1iSPeKmSYgM1yq4zK9y0wCy3A+2oYDRqpvWUNy0vH5zN20i0pUSaKhhctCfHWWgcdgNNJC6lEDjpgmfW51wrzbCQ+VB4vtxhcoTAbCa7Pnwz9+jT/YkEzw2kj14l6Qs1cT7sMmeiQAYdfnVspeufP7iuQ/kQZI+YH1ourJt0us3r7/F3eWLH0u//sJuVGeIhDva0EdNuD/+8TFLA/xsfMBvdPvef+O3V8scDABklcnDbBkB3FanSe/ev4vqHEJokBHsM1aAPZBtd9MTmjzwpmdSNj2tyMANghd2PQZwwwEWuVC37QFar2177Fzwtj3OR7TNyGWhV7ryVkiEWr//4TvS0hq7cPCTbe/giaMcPHH4nnrwJJXR6MlPT8ZxVOk2SUNvgKUCrLd/vKViuagcnepWHJ1qm9yGPuMAdmIZfF9HUInowT0QX+905f/GIzQzf2iprAAAAABJRU5ErkJggg=="},l5EY:function(e,t){},oPdq:function(e,t){},ohDP:function(e,t){e.exports="data:image/png;base64,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"},rFKE:function(e,t){},"u9+y":function(e,t){},wDEq:function(e,t){}},[0]);
//# sourceMappingURL=app.86fb1b38.js.map