webpackJsonp([1],{"+VGo":function(e,t){},"+j1k":function(e,t){},0:function(e,t,i){e.exports=i("NHnr")},1:function(e,t){},"26Th":function(e,t){},"42UF":function(e,t){},"6WVw":function(e,t){},"7nvu":function(e,t){},ICG1:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("gbyG"),i("Gh7F");var n=i("/5sW"),a=i("8+8L"),l=i("VIwv"),o=i("rifk"),s=i.n(o),r=i("TXmL"),c=i("8kuj"),d=i.n(c),u=i("iPd/"),m=i.n(u),f=i("NYxO");n["default"].use(f["a"]);var p=new f["a"].Store({state:{allItems:[],activeItems:[],visibleLimit:30,isLoadingImages:!1,selectedSnappedColorIds:[],selectedLabelIds:[]},mutations:{addAllItems:function(e,t){e.allItems=t},addLabels:function(e,t){e.labels=t},addActiveItems:function(e,t){e.activeItems=t},increaseVisibleLimit:function(e,t){e.visibleLimit+=t},resetVisibleLimit:function(e){e.visibleLimit=30},loadingImages:function(e){return e.isLoadingImages=!0},notLoadingImages:function(e){return e.isLoadingImages=!1},replaceSnappedColorIds:function(e,t){e.selectedSnappedColorIds=t},setSelectedSnappedColorId:function(e,t){if(e.selectedSnappedColorIds.includes(t)){var i=e.selectedSnappedColorIds.indexOf(t);-1!==i&&e.selectedSnappedColorIds.splice(i,1)}else e.selectedSnappedColorIds.push(t)},replaceLabelIds:function(e,t){e.selectedLabelIds=t},setSelectedLabelId:function(e,t){if(e.selectedLabelIds.includes(t)){var i=e.selectedLabelIds.indexOf(t);-1!==i&&e.selectedLabelIds.splice(i,1)}else e.selectedLabelIds.push(t)}},getters:{anyColorFilterIsActive:function(e){return!(e.selectedSnappedColorIds.length<1)},labelFilterIsActive:function(e){return!(e.selectedLabelIds<1)},numberOfActiveItems:function(e){return e.activeItems.length},numberOfItems:function(e){return e.allItems.length},selectedSnappedColorIds:function(e){return e.selectedSnappedColorIds},selectedLabelIds:function(e){return e.selectedLabelIds}}}),v={name:"LabelBtn",props:{label:{type:[String,Boolean],default:!1}},computed:{isActive:function(){return p.state.selectedLabelIds.includes(this.label)}},methods:{setSelectedLabelId:function(){p.commit("setSelectedLabelId",this.label),this.$root.$emit("triggerFiltering")}}},h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"label"},[i("span",{staticClass:"btn",class:{active:e.isActive},on:{click:function(t){e.setSelectedLabelId()}}},[e._v(e._s(e.label))])])},b=[],g=i("XyMi");function C(e){i("Y8A5")}var I=!1,_=C,w="data-v-6562ad5a",S=null,y=Object(g["a"])(v,h,b,I,_,w,S),L=y.exports,F={name:"ColorBtn",props:{color:{type:[String,Boolean],default:!1}},computed:{isActive:function(){return p.state.selectedSnappedColorIds.includes(this.color)}},methods:{filterByColor:function(){p.commit("setSelectedSnappedColorId",this.color),this.$root.$emit("triggerFiltering")}}},$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"color"},[i("div",{staticClass:"btn",class:{active:e.isActive},style:{background:e.color,"border-color":e.color},on:{click:function(t){e.filterByColor(e.color)}}})])},k=[];function x(e){i("pZdG")}var O=!1,j=x,A="data-v-63621ce6",E=null,N=Object(g["a"])(F,$,k,O,j,A,E),M=N.exports,B=i("QxPg"),P=i("KeE0"),T=i.n(P);B["a"].library.add(T.a);var V={name:"CloseBtn"},W=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("i",{staticClass:"fas fa-times"})])}];function R(e){i("7nvu")}var D=!1,H=R,J="data-v-2854122a",U=null,Z=Object(g["a"])(V,W,G,D,H,J,U),q=Z.exports,Y=i("Cb4A"),K=i.n(Y);B["a"].library.add(K.a);var X={name:"ObjectView",components:{LabelBtn:L,ColorBtn:M,CloseBtn:q},props:{object:{type:[Object,Boolean],default:!1}},data:function(){return{isShown:!1}},computed:{showWallDetails:function(){return p.state.wallDetails}},methods:{toggle:function(){this.isShown||this.$modal.show(this.object.europeana_record),this.isShown&&this.$modal.hide(this.object.europeana_record),this.isShown=!this.isShown},resolveLicense:function(e){return"http://creativecommons.org/licenses/by-nc-nd/2.5/"===e?"Attribution-NonCommercial-NoDerivs 2.5 Generic":"http://creativecommons.org/licenses/by/2.5/"===e?"Attribution 2.5 Generic":void 0},filterByColor:function(e){p.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering"),this.toggle()},setSelectedLabelId:function(e){p.commit("setSelectedLabelId",e),this.$root.$emit("triggerFiltering")},labelActive:function(e){return p.state.selectedLabelIds.includes(e)}}},z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"object"},[i("img",{attrs:{src:e.object.edm_preview,alt:e.object.application.description},on:{click:function(t){e.toggle()}}}),i("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.toggle,expression:"toggle",arg:"swipe",modifiers:{up:!0}}],attrs:{name:e.object.europeana_record,classes:["v--modal details"],height:"auto",transition:"slide-north"}},[i("close-btn",{nativeOn:{click:function(t){return e.toggle(t)}}}),i("img",{attrs:{src:e.object.edm_preview,alt:e.object.application.description}}),i("div",{staticClass:"image-colors"},e._l(e.object.application.css_colors,function(e){return i("color-btn",{key:e,attrs:{color:e}})})),i("div",{staticClass:"image-labels"},e._l(e.object.application.labels,function(e){return i("label-btn",{key:e,attrs:{label:e}})})),i("p",[e._v(e._s(e.object.application.description))]),i("p",{staticClass:"fine-print"},[e._v(e._s(e.$t("imageProvidedBy"))+" "+e._s(e.object.edm_data_provider)+" "+e._s(e.$t("underLicense"))+" "),i("a",{attrs:{href:e.object.edm_rights,target:"_blank"}},[e._v(e._s(e.resolveLicense(e.object.edm_rights))+" "),i("i",{staticClass:"fas fa-external-link-alt"})]),e._v(". "+e._s(e.$t("moreObjectDetails"))+" "),i("a",{attrs:{href:e.object.edm_is_shown_at,target:"_blank"}},[e._v(e._s(e.object.edm_data_provider)+" "),i("i",{staticClass:"fas fa-external-link-alt"})])])],1)],1)},Q=[];function ee(e){i("26Th"),i("s9EC")}var te=!1,ie=ee,ne="data-v-9c887f82",ae=null,le=Object(g["a"])(X,z,Q,te,ie,ne,ae),oe=le.exports,se=(i("dSUw"),i("beEN"),i("Biqn")),re=i.n(se),ce=i("Nk8h"),de=i.n(ce),ue=i("HGMW"),me=i.n(ue),fe=i("43fV"),pe=i.n(fe),ve={name:"FilterContainer"},he=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"filter-container"},[e._t("default")],2)},be=[];function ge(e){i("42UF")}var Ce=!1,Ie=ge,_e="data-v-01180730",we=null,Se=Object(g["a"])(ve,he,be,Ce,Ie,_e,we),ye=Se.exports,Le={name:"AnimatedNumber",props:{number:{type:Number,default:0}},data:function(){return{displayNumber:0,interval:!1}},ready:function(){this.displayNumber=this.number?this.number:0},watch:{number:function(){var e=this;clearInterval(this.interval),this.number!==this.displayNumber&&(this.interval=window.setInterval(function(){if(e.displayNumber!==e.number){var t=(e.number-e.displayNumber)/10;t=t>=0?Math.ceil(t):Math.floor(t),e.displayNumber=e.displayNumber+t}},20))}}},Fe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[e._v("\n  "+e._s(e.displayNumber)+"\n")])},$e=[],ke=!1,xe=null,Oe=null,je=null,Ae=Object(g["a"])(Le,Fe,$e,ke,xe,Oe,je),Ee=Ae.exports,Ne=(i("uDYd"),{name:"ColorMountain",props:{colors:{type:Array,default:function(){return[]}}},computed:{selectedSnappedColorIds:function(){return p.state.selectedSnappedColorIds},sortedColors:function(){return this.colors.slice(0).sort(function(e,t){return t[1]-e[1]})}},methods:{setSelectedSnappedColorId:function(e){p.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering")}}}),Me=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"color-mountain"},[i("p",[e._v(e._s(e.$t("filterWithColor")))]),i("div",{staticClass:"colors"},e._l(e.sortedColors,function(t){return i("div",{key:t[0],staticClass:"color",class:{selected:e.selectedSnappedColorIds.includes(t[0])},style:{background:t[0],height:10+t[1]/e.sortedColors[0][1]*100+"px",width:100/e.colors.length+"%"},on:{click:function(i){e.setSelectedSnappedColorId(t[0])}}})})),i("div",{staticClass:"color-line"})])},Be=[];function Pe(e){i("6WVw")}var Te=!1,Ve=Pe,We="data-v-05f4f070",Ge=null,Re=Object(g["a"])(Ne,Me,Be,Te,Ve,We,Ge),De=Re.exports,He={name:"LabelStack",props:{labels:{type:Array,default:function(){return[]}}},computed:{selectedLabelIds:function(){return p.state.selectedLabelIds}},methods:{setSelectedLabelId:function(e){p.commit("setSelectedLabelId",e),this.$root.$emit("triggerFiltering")}}},Je=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",e._l(e.labels,function(t){return i("span",{key:t[0],style:{fontSize:t[1]}},[i("span",{staticClass:"label",class:{selectedLabel:e.selectedLabelIds.includes(t[0])},on:{click:function(i){e.setSelectedLabelId(t[0])}}},[e._v(e._s(t[0]))]),i("span",[e._v(", ")])])}))},Ue=[];function Ze(e){i("Z0aH")}var qe=!1,Ye=Ze,Ke="data-v-3fd66bc9",Xe=null,ze=Object(g["a"])(He,Je,Ue,qe,Ye,Ke,Xe),Qe=ze.exports;B["a"].library.add(me.a),B["a"].library.add(de.a),B["a"].library.add(pe.a);var et={name:"FilterMenu",components:{FilterContainer:ye,AnimatedNumber:Ee,ColorMountain:De,LabelStack:Qe,CloseBtn:q},data:function(){return{colorFilterOpen:!1,labelFilterOpen:!1,colorStats:[],labelStats:[]}},computed:re()({},Object(f["b"])(["anyColorFilterIsActive","labelFilterIsActive","numberOfActiveItems","numberOfItems","selectedSnappedColorIds","selectedLabelIds"])),mounted:function(){var e=this;this.$root.$on("triggerFiltering",function(){e.executeFiltering()})},methods:{openModal:function(){this.$root.$emit("openInfo")},toggleColorFilter:function(){this.labelFilterOpen&&(this.labelFilterOpen=!1),this.colorFilterOpen=!this.colorFilterOpen},toggleLabelFilter:function(){this.colorFilterOpen&&(this.colorFilterOpen=!1),this.labelFilterOpen=!this.labelFilterOpen},executeFiltering:function(){var e=p.state.allItems;console.log("debug: executing filtering"),this.selectedLabelIds.forEach(function(t){e=e.filter(function(e){return e.application.labels.includes(t)})}),this.selectedSnappedColorIds.forEach(function(t){e=e.filter(function(e){return e.application.css_colors.includes(t)})});var t=[],i=[],n=[],a=[];e.forEach(function(e){i=i.concat(e.application.css_colors),a=a.concat(e.application.labels)}),i.forEach(function(e){t.push([e,i.filter(function(t){return t===e}).length])}),this.colorStats=Array.from(new Set(t.map(JSON.stringify)),JSON.parse).filter(function(e){return e[1]>2}),a.forEach(function(e){n.push([e,a.filter(function(t){return t===e}).length])}),n=Array.from(new Set(n.map(JSON.stringify)),JSON.parse).filter(function(e){return e[1]>2});var l=n.reduce(function(e,t){return Math.max(e,t[1])},0);this.labelStats=n.map(function(e){var t=(e[1]-2)/(l-2);return e[1]=30*t+10,e[1]+="px",e}),p.commit("addActiveItems",e),console.log("debug: reseting visibleLimit"),p.commit("resetVisibleLimit"),window.scrollTo(0,0)}}},tt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"menu"},[i("img",{staticClass:"logo",attrs:{src:"http://via.placeholder.com/90x90?text=logo",alt:"logo and information"},on:{click:e.openModal}}),i("span",{staticClass:"left"},[e._v(e._s(e.$t("nItemsPrefix"))+" "),i("animated-number",{attrs:{number:e.numberOfActiveItems}}),e._v(e._s(e.$t("nItemsMidfix"))+" "+e._s(e.numberOfItems)+" "+e._s(e.$t("nItemsSuffix")))],1),i("div",{staticClass:"menu-btn",class:{active:e.labelFilterIsActive},on:{click:e.toggleLabelFilter}},[i("i",{staticClass:"fas fa-tag"})]),i("div",{staticClass:"menu-btn",class:{active:e.anyColorFilterIsActive},on:{click:e.toggleColorFilter}},[i("i",{staticClass:"fas fa-palette"})])]),i("transition",{attrs:{name:"slide-north"}},[e.colorFilterOpen?i("filter-container",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.toggleColorFilter,expression:"toggleColorFilter",arg:"swipe",modifiers:{up:!0}}]},[i("close-btn",{nativeOn:{click:function(t){return e.toggleColorFilter(t)}}}),i("color-mountain",{attrs:{colors:e.colorStats}})],1):e._e()],1),i("transition",{attrs:{name:"slide-north"}},[e.labelFilterOpen?i("filter-container",[i("close-btn",{nativeOn:{click:function(t){return e.toggleLabelFilter(t)}}}),i("label-stack",{attrs:{labels:e.labelStats}})],1):e._e()],1)],1)},it=[];function nt(e){i("+j1k")}var at=!1,lt=nt,ot="data-v-6b7070b8",st=null,rt=Object(g["a"])(et,tt,it,at,lt,ot,st),ct=rt.exports,dt=i("ZV1T"),ut=i.n(dt);B["a"].library.add(ut.a);var mt={name:"Palette",data:function(){return{color:!1}},created:function(){this.randomPalette()},methods:{filterWithPalette:function(){p.commit("replaceColorFilter",[""]),p.commit("replaceSnappedColorIds",[this.color]),p.commit("replaceLabelIds",[]),this.$root.$emit("triggerFiltering"),this.randomPalette()},randomPalette:function(){var e=["crimson","brown","lightsalmon","firebrick","tomato","darkslategrey","black","dimgrey","darkgrey","grey","silver","whitesmoke","lavender","indianred","sienna","darkolivegreen","per","rosybrown","gainsboro","saddlebrown","antiquewhite","midnightblue","darkslateblue","slategrey","tan","burlywood","darkkhaki","wheat","lightslategrey","navajowhite","palegoldenrod","darksalmon","lightpink","yellowgreen","khaki","blanchedalmond","chocolate","goldenrod","palevioletred","bisque","lightsteelblue","cornflowerblue","lightgrey","sandybrown","maroon","linen","teal","steelblue","beige","skyblue","mediumaquamarine","darkseagreen","darkorange","ghostwhite","cadetblue","powderblue","thistle","mediumpurple","coral","olivedrab","lightskyblue","royalblue","darkgoldenrod","oldlace","olive","lightcoral","darkgreen","salmon","gold","dodgerblue","seagreen"];this.color=e[Math.floor(Math.random()*e.length)]}}},ft=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"root"},[i("h2",[e._v(e._s(e.$t("theEnd")))]),i("p",[e._v(e._s(e.$t("explorePalette")))]),i("div",{key:e.color,staticClass:"color",style:{background:e.color},on:{click:e.filterWithPalette}}),i("div",{staticClass:"btn",on:{click:e.randomPalette}},[e._v(e._s(e.$t("shuffle"))+" "),i("i",{staticClass:"fas fa-random"})])])},pt=[];function vt(e){i("yLdT")}var ht=!1,bt=vt,gt="data-v-4d6af6e6",Ct=null,It=Object(g["a"])(mt,ft,pt,ht,bt,gt,Ct),_t=It.exports,wt={name:"ImageWall",components:{ObjectView:oe,FilterMenu:ct,Palette:_t},directives:{imagesLoaded:m.a},computed:{list:function(){return p.state.activeItems.slice(0,p.state.visibleLimit)},isAtEndOfFeed:function(){return p.state.activeItems.length<=p.state.visibleLimit}},methods:{imageChange:function(e){e.isComplete?p.commit("notLoadingImages"):p.commit("loadingImages")}}},St=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("filter-menu"),e.list?i("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:e.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:e.list}},e._l(e.list,function(e){return i("div",{key:e.europeana_record,staticClass:"image"},[i("object-view",{attrs:{object:e}})],1)})):e._e(),e.isAtEndOfFeed?i("palette"):e._e()],1)},yt=[];function Lt(e){i("RlRS")}var Ft=!1,$t=Lt,kt="data-v-7d5e8ec0",xt=null,Ot=Object(g["a"])(wt,St,yt,Ft,$t,kt,xt),jt=Ot.exports,At=i("HZ4+"),Et=i.n(At),Nt=i("mM5r"),Mt=i.n(Nt),Bt=i("Rh77"),Pt=i.n(Bt),Tt=i("2LG2"),Vt=i.n(Tt);B["a"].library.add(Et.a),B["a"].library.add(Mt.a),B["a"].library.add(Pt.a),B["a"].library.add(Vt.a);var Wt={name:"Footer",data:function(){return{isShown:!0}},computed:re()({},Object(f["b"])(["anyColorFilterIsActive","labelFilterIsActive","selectedSnappedColorIds","selectedLabelIds"])),mounted:function(){var e=this;this.$root.$on("triggerFiltering",function(){e.moveFlerp()})},methods:{toggle:function(){this.isShown=!this.isShown,this.moveFlerp()},moveFlerp:function(){var e=this;n["default"].nextTick(function(){e.$refs.footer&&e.isShown?e.$refs.flerp.style.bottom=e.$refs.footer.clientHeight+"px":e.$refs.flerp.style.bottom="0px"})},resetFilters:function(){p.commit("replaceSnappedColorIds",[]),p.commit("replaceLabelIds",[]),p.commit("resetVisibleLimit"),this.$root.$emit("triggerFiltering")},removeColor:function(e){p.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering")},removeLabel:function(e){p.commit("setSelectedLabelId",e),this.$root.$emit("triggerFiltering")}}},Gt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.labelFilterIsActive||e.anyColorFilterIsActive,expression:"labelFilterIsActive || anyColorFilterIsActive"}],ref:"flerp",staticClass:"flerp",on:{click:e.toggle}},[i("span",[e._v(e._s(e.$t("selectedFilters")))]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}]},[i("i",{staticClass:"fas fa-angle-down"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isShown,expression:"!isShown"}]},[i("i",{staticClass:"fas fa-angle-up"})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShown,expression:"isShown"}],ref:"footer",staticClass:"footer"},[e._l(e.selectedSnappedColorIds,function(t){return i("div",{key:t,staticClass:"color",style:{background:t},on:{click:function(i){e.removeColor(t)}}},[e._m(0,!0)])}),e._l(e.selectedLabelIds,function(t){return i("div",{key:t,staticClass:"label",on:{click:function(i){e.removeLabel(t)}}},[e._m(1,!0),i("span",[e._v(e._s(t))])])}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.labelFilterIsActive||e.anyColorFilterIsActive,expression:"labelFilterIsActive || anyColorFilterIsActive"}],staticClass:"right-btn",on:{click:e.resetFilters}},[i("i",{staticClass:"fas fa-sync"})])],2)])},Rt=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"close-btn"},[i("i",{staticClass:"fas fa-times-circle fa-lg"})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"close-btn"},[i("i",{staticClass:"fas fa-times-circle fa-lg"})])}];function Dt(e){i("ICG1")}var Ht=!1,Jt=Dt,Ut="data-v-68c65094",Zt=null,qt=Object(g["a"])(Wt,Gt,Rt,Ht,Jt,Ut,Zt),Yt=qt.exports,Kt={name:"App",components:{ImageWall:jt,Spinner:d.a,Footer:Yt},data:function(){return{loadingJson:!0}},computed:{loading:function(){return p.state.isLoadingImages}},mounted:function(){var e=this;this.$root.$on("openInfo",function(){e.$modal.show("welcome")})},beforeMount:function(){this.fetchIntoState()},created:function(){var e=this;window.addEventListener("scroll",this.handleScroll),setTimeout(function(){e.$modal.show("welcome")},100)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{fetchIntoState:function(){var e=this;function t(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),n=[e[i],e[t]];e[t]=n[0],e[i]=n[1]}return e}this.$http.get("data.json").then(function(e){return e.body}).then(function(i){p.commit("addAllItems",t(i)),p.commit("addActiveItems",p.state.allItems),e.$root.$emit("triggerFiltering"),e.loadingJson=!1})},handleScroll:function(){window.innerHeight+window.scrollY>=document.querySelector("html").offsetHeight-50&&p.state.visibleLimit<=p.state.activeItems.length&&p.commit("increaseVisibleLimit",10)},closeWelcome:function(){this.$modal.hide("welcome")}}},Xt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("image-wall"),i("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.closeWelcome,expression:"closeWelcome",arg:"swipe",modifiers:{up:!0}}],attrs:{classes:["v--modal","welcome"],name:"welcome",transition:"slide-north"}},[i("h1",[e._v(e._s(e.$t("appTitle")))]),i("p",{staticClass:"big-text"},[e._v(e._s(e.$t("explore"))+e._s(e.$t("tags"))+" "),i("i",{staticClass:"fas fa-tag"}),e._v(e._s(e.$t("and"))+e._s(e.$t("color"))+" "),i("i",{staticClass:"fas fa-palette"}),e._v("!")]),i("p",[e._v(e._s(e.$t("appDescription")))]),i("div",{staticClass:"btn-container"},[i("button",{on:{click:e.closeWelcome}},[e._v(e._s(e.$t("appBegin")))])])]),i("Footer"),e.loading||e.loadingJson?i("spinner",{staticClass:"spinner",attrs:{size:"big"}}):e._e()],1)},zt=[];function Qt(e){i("+VGo")}var ei,ti=!1,ii=Qt,ni=null,ai=null,li=Object(g["a"])(Kt,Xt,zt,ti,ii,ni,ai),oi=li.exports,si={en:{nItemsPrefix:"Showing",nItemsMidfix:"of",nItemsSuffix:"images",filterAddColor:"Add Another Color",filterClear:"Clear This Filter",appBegin:"Start Exploring!",appTitle:"Generous Interfaces",explore:"Explore the collection using ",tags:"tags",and:" and ",color:"colour",appDescription:"A prototype by the Swedish National Heritage Board, Malmö Museer, Nationalmuseum, National Museums of World Culture and the Nordic Museum.",moreObjectDetails:"More object details at",theEnd:"~ THE END ~",explorePalette:"PICK A COLOUR TO EXPLORE:",imageProvidedBy:"Image provided by",shuffle:"Shuffle colours",underLicense:"under the license",filterWithColor:"Pick a colour to filter content",selectedFilters:"Selected Filters"},sv:{nItemsPrefix:"Visar",nItemsMidfix:"av",nItemsSuffix:"bilder",filterAddColor:"Lägg till ytterligare en färg",filterClear:"Rensa detta filter",appBegin:"Börja utforska!",appTitle:"Generösa användargränssnitt",explore:"Utforska samlingen med hjälp av ",tags:"nyckelord",and:" och ",color:"färg",appDescription:"En prototyp från Riksantikvarieämbetet, Malmö museer, Nationalmuseum, Nordiska museet och Världskulturmuseerna.",moreObjectDetails:"Mer information om objektet hos",theEnd:"~ SLUT ~",explorePalette:"VÄLJ EN FÄRG FÖR ATT UTFORSKA:",imageProvidedBy:"Bilden tillhandahålls av",shuffle:"Blanda färger",underLicense:"under licensen",filterWithColor:"Välj en färg för att filtrera innehållet",selectedFilters:"Valda filter"}},ri=si;n["default"].use(r["a"]),n["default"].use(s.a),n["default"].use(l["a"]),n["default"].use(a["a"]),n["default"].config.productionTip=!1,ei=navigator.languages.includes("sv")?"sv":"en";var ci=new r["a"]({locale:ei,messages:ri});new n["default"]({render:function(e){return e(oi)},i18n:ci,store:p}).$mount("#app")},RlRS:function(e,t){},Y8A5:function(e,t){},Z0aH:function(e,t){},pZdG:function(e,t){},s9EC:function(e,t){},yLdT:function(e,t){}},[0]);
//# sourceMappingURL=app.b3d4773b.js.map