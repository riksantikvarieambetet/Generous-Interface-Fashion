webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,n){e.exports=n("NHnr")},1:function(e,t){},"26Th":function(e,t){},"7+ip":function(e,t){},D4Jl:function(e,t){},HIHd:function(e,t){},L4nM:function(e,t){},MW9y:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("gbyG"),n("Gh7F");var i=n("/5sW"),a=n("8+8L"),s=n("VIwv"),l=n("rifk"),o=n.n(l),r=n("TXmL"),c=n("8kuj"),d=n.n(c),u=n("iPd/"),m=n.n(u),f=n("ohDP"),p=n.n(f),g=n("kFhx"),h=n.n(g),v={name:"LicenseBtn",props:{uri:!1},created:function(){var e=this,t=[{uri:"http://creativecommons.org/licenses/by-nc-nd/2.5/",img:p.a,name:"Attribution-NonCommercial-NoDerivs 2.5 Generic"},{uri:"http://creativecommons.org/licenses/by/2.5/",img:h.a,name:"Attribution 2.5 Generic"}],n=t.filter(function(t){return t.uri===e.uri});n?this.license=n[0]:console.warn("Unknown license URI: "+this.uri)}},A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:e.uri,target:"_blank"}},[n("img",{attrs:{src:e.license.img,alt:e.license.name}})])},b=[],I=n("XyMi");function C(e){n("HIHd")}var w=!1,S=C,L="data-v-e4320afe",k=null,F=Object(I["a"])(v,A,b,w,S,L,k),B=F.exports,x=n("QxPg"),y=n("KeE0"),M=n.n(y);x["a"].library.add(M.a);var P={name:"CloseBtn"},N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("i",{staticClass:"fas fa-times"})])}];function j(e){n("D4Jl")}var E=!1,_=j,W="data-v-015fa9f4",D=null,V=Object(I["a"])(P,N,O,E,_,W,D),G=V.exports,H=n("NYxO"),J=n("424j");i["default"].use(H["a"]);var T=new H["a"].Store({state:{allItems:[],activeItems:[],visibleLimit:30,isLoadingImages:!1,selectedSnappedColorIds:[],selectedLabelIds:[]},mutations:{addAllItems:function(e,t){e.allItems=t},addLabels:function(e,t){e.labels=t},addActiveItems:function(e,t){e.activeItems=t},increaseVisibleLimit:function(e,t){e.visibleLimit+=t},resetVisibleLimit:function(e){e.visibleLimit=30},loadingImages:function(e){return e.isLoadingImages=!0},notLoadingImages:function(e){return e.isLoadingImages=!1},replaceSnappedColorIds:function(e,t){e.selectedSnappedColorIds=t},setSelectedSnappedColorId:function(e,t){if(e.selectedSnappedColorIds.includes(t)){var n=e.selectedSnappedColorIds.indexOf(t);-1!==n&&e.selectedSnappedColorIds.splice(n,1)}else e.selectedSnappedColorIds.push(t)},replaceLabelIds:function(e,t){e.selectedLabelIds=t},setSelectedLabelId:function(e,t){if(e.selectedLabelIds.includes(t)){var n=e.selectedLabelIds.indexOf(t);-1!==n&&e.selectedLabelIds.splice(n,1)}else e.selectedLabelIds.push(t)}},getters:{anyColorFilterIsActive:function(e){return!(e.selectedSnappedColorIds.length<1)},labelFilterIsActive:function(e){return!(e.selectedLabelIds<1)},numberOfActiveItems:function(e){return e.activeItems.length},numberOfItems:function(e){return e.allItems.length},selectedSnappedColorIds:function(e){return e.selectedSnappedColorIds},selectedLabelIds:function(e){return e.selectedLabelIds}}}),U=new H["a"].Store({plugins:[Object(J["a"])()],state:{savedPalettes:[]},mutations:{savePalette:function(e,t){return e.savedPalettes.push(t)}}}),Q={name:"ObjectView",components:{LicenseBtn:B,CloseBtn:G},props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown||this.$modal.show(this.object.europeana_record),this.isShown&&this.$modal.hide(this.object.europeana_record),this.isShown=!this.isShown},filterByColor:function(e){T.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering"),this.toggle()}}},q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"object"},[n("img",{attrs:{src:e.object.edm_preview,alt:e.object.application.description},on:{click:function(t){e.toggle()}}}),n("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.toggle,expression:"toggle",arg:"swipe",modifiers:{up:!0}}],attrs:{name:e.object.europeana_record,classes:["v--modal details"],height:"auto",transition:"slide-north"}},[n("CloseBtn",{nativeOn:{click:function(t){return e.toggle(t)}}}),n("img",{attrs:{src:e.object.edm_preview,alt:e.object.application.description}}),n("div",{staticClass:"image-colors"},e._l(e.object.application.css_colors,function(t){return n("div",{key:t,style:{background:t},on:{click:function(n){e.filterByColor(t)}}})})),n("p",[e._v(e._s(e.object.application.description))]),n("LicenseBtn",{attrs:{uri:e.object.edm_rights}}),n("br"),n("a",{attrs:{href:e.object.edm_is_shown_at,target:"_blank"}},[e._v(e._s(e.$t("moreDetails"))+" "+e._s(e.object.edm_data_provider))])],1)],1)},K=[];function z(e){n("26Th"),n("L4nM")}var R=!1,Y=z,X="data-v-440dd8f0",$=null,Z=Object(I["a"])(Q,q,K,R,Y,X,$),ee=Z.exports,te=(n("dSUw"),n("beEN"),n("Biqn")),ne=n.n(te),ie=n("Nk8h"),ae=n.n(ie),se=n("HGMW"),le=n.n(se),oe=n("43fV"),re=n.n(oe),ce=n("2LG2"),de=n.n(ce),ue={name:"FilterContainer",data:function(){return{}},methods:{}},me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter-container"},[e._t("default")],2)},fe=[];function pe(e){n("rFKE")}var ge=!1,he=pe,ve="data-v-f3ba0f10",Ae=null,be=Object(I["a"])(ue,me,fe,ge,he,ve,Ae),Ie=be.exports,Ce={name:"AnimatedNumber",data:function(){return{displayNumber:0,interval:!1}},props:{number:{default:0}},ready:function(){this.displayNumber=this.number?this.number:0},watch:{number:function(){var e=this;clearInterval(this.interval),this.number!==this.displayNumber&&(this.interval=window.setInterval(function(){if(e.displayNumber!==e.number){var t=(e.number-e.displayNumber)/10;t=t>=0?Math.ceil(t):Math.floor(t),e.displayNumber=e.displayNumber+t}},20))}}},we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("\n    "+e._s(e.displayNumber)+"\n")])},Se=[],Le=!1,ke=null,Fe=null,Be=null,xe=Object(I["a"])(Ce,we,Se,Le,ke,Fe,Be),ye=xe.exports,Me={name:"ColorMountain",props:{colors:{default:[]}},computed:{selectedSnappedColorIds:function(){return T.state.selectedSnappedColorIds}},methods:{setSelectedSnappedColorId:function(e){T.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering")}}},Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"color-mountain"},e._l(e.colors,function(t){return n("div",{key:t[0],class:{selected:e.selectedSnappedColorIds.includes(t[0])},style:{background:t[0],height:t[1]+"px",width:100/e.colors.length+"%"},on:{click:function(n){e.setSelectedSnappedColorId(t[0])}}})}))},Ne=[];function Oe(e){n("MW9y")}var je=!1,Ee=Oe,_e="data-v-e819b360",We=null,De=Object(I["a"])(Me,Pe,Ne,je,Ee,_e,We),Ve=De.exports,Ge={name:"LabelStack",props:{labels:{default:[]}},computed:{selectedLabelIds:function(){return T.state.selectedLabelIds}},methods:{setSelectedLabelId:function(e){T.commit("setSelectedLabelId",e),this.$root.$emit("triggerFiltering")}}},He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.labels,function(t){return n("span",{key:t[0],style:{fontSize:t[1]}},[n("span",{staticClass:"label",class:{selectedLabel:e.selectedLabelIds.includes(t[0])},on:{click:function(n){e.setSelectedLabelId(t[0])}}},[e._v(e._s(t[0]))]),n("span",[e._v(", ")])])}))},Je=[];function Te(e){n("Uvf3")}var Ue=!1,Qe=Te,qe="data-v-5da4eece",Ke=null,ze=Object(I["a"])(Ge,He,Je,Ue,Qe,qe,Ke),Re=ze.exports;x["a"].library.add(le.a),x["a"].library.add(ae.a),x["a"].library.add(re.a),x["a"].library.add(de.a);var Ye={name:"FilterMenu",data:function(){return{colorFilterOpen:!1,labelFilterOpen:!1,colorStats:[],labelStats:[]}},components:{FilterContainer:Ie,AnimatedNumber:ye,ColorMountain:Ve,LabelStack:Re,CloseBtn:G},computed:ne()({},Object(H["b"])(["anyColorFilterIsActive","labelFilterIsActive","numberOfActiveItems","numberOfItems","selectedSnappedColorIds","selectedLabelIds"])),mounted:function(){var e=this;this.$root.$on("triggerFiltering",function(){e.executeFiltering()})},methods:{openModal:function(){this.$root.$emit("openInfo")},resetFilters:function(){T.commit("replaceSnappedColorIds",[]),T.commit("replaceLabelIds",[]),T.commit("resetVisibleLimit"),this.executeFiltering()},toggleColorFilter:function(){this.labelFilterOpen&&(this.labelFilterOpen=!1),this.colorFilterOpen=!this.colorFilterOpen},toggleLabelFilter:function(){this.colorFilterOpen&&(this.colorFilterOpen=!1),this.labelFilterOpen=!this.labelFilterOpen},savePalette:function(){U.commit("savePalette",this.staticColors.slice(0))},executeFiltering:function(){var e=T.state.allItems;console.log("debug: executing filtering"),this.selectedLabelIds.forEach(function(t){e=e.filter(function(e){return e.application.labels.includes(t)})}),this.selectedSnappedColorIds.forEach(function(t){e=e.filter(function(e){return e.application.css_colors.includes(t)})});var t=[],n=[],i=[],a=[];e.forEach(function(e){n=n.concat(e.application.css_colors),a=a.concat(e.application.labels)}),n.forEach(function(e){t.push([e,n.filter(function(t){return t===e}).length])}),this.colorStats=Array.from(new Set(t.map(JSON.stringify)),JSON.parse).filter(function(e){return e[1]>2}),a.forEach(function(e){i.push([e,a.filter(function(t){return t===e}).length])}),i=Array.from(new Set(i.map(JSON.stringify)),JSON.parse).filter(function(e){return e[1]>2});var s=i.reduce(function(e,t){return Math.max(e,t[1])},0);this.labelStats=i.map(function(e){var t=(e[1]-2)/(s-2);return e[1]=30*t+10,e[1]+="px",e}),T.commit("addActiveItems",e),console.log("debug: reseting visibleLimit"),T.commit("resetVisibleLimit"),window.scrollTo(0,0)}}},Xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"menu"},[n("div",{staticClass:"menu-btn logo",on:{click:e.resetFilters}},[n("i",{staticClass:"fas fa-sync"})]),n("span",{staticClass:"left"},[e._v(e._s(e.$t("nItemsPrefix"))+" "),n("AnimatedNumber",{attrs:{number:e.numberOfActiveItems}}),e._v(e._s(e.$t("nItemsMidfix"))+" "+e._s(e.numberOfItems)+" "+e._s(e.$t("nItemsSuffix")))],1),n("div",{staticClass:"menu-btn",class:{active:e.labelFilterIsActive},on:{click:e.toggleLabelFilter}},[n("i",{staticClass:"fas fa-tag"})]),n("div",{staticClass:"menu-btn",on:{click:function(t){e.$root.$emit("toggleSidebar")}}},[n("i",{staticClass:"fas fa-save"})]),n("div",{staticClass:"menu-btn",class:{active:e.anyColorFilterIsActive},on:{click:e.toggleColorFilter}},[n("i",{staticClass:"fas fa-palette"})])]),n("transition",{attrs:{name:"slide-north"}},[e.colorFilterOpen?n("FilterContainer",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.toggleColorFilter,expression:"toggleColorFilter",arg:"swipe",modifiers:{up:!0}}]},[n("close-btn",{nativeOn:{click:function(t){return e.toggleColorFilter(t)}}}),n("ColorMountain",{attrs:{colors:e.colorStats}})],1):e._e()],1),n("transition",{attrs:{name:"slide-north"}},[e.labelFilterOpen?n("FilterContainer",[n("CloseBtn",{nativeOn:{click:function(t){return e.toggleLabelFilter(t)}}}),n("LabelStack",{attrs:{labels:e.labelStats}})],1):e._e()],1)],1)},$e=[];function Ze(e){n("wDEq")}var et=!1,tt=Ze,nt="data-v-0f35de4d",it=null,at=Object(I["a"])(Ye,Xe,$e,et,tt,nt,it),st=at.exports,lt={name:"Sidebar",components:{CloseBtn:G},computed:{savedPalettes:function(){return U.state.savedPalettes}},methods:{filterWithPalette:function(e){T.commit("replaceColorFilter",e),this.$root.$emit("triggerFiltering")}}},ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-container"},[n("CloseBtn",{nativeOn:{click:function(t){e.$root.$emit("toggleSidebar")}}}),n("h2",[e._v("Saved Palettes")]),0===e.savedPalettes.length?n("p",[e._v("You have no saved palettes.")]):e._l(e.savedPalettes,function(t,i){return n("div",{key:i,staticClass:"palette",on:{click:function(n){e.filterWithPalette(t)}}},e._l(t,function(e){return n("div",{key:i+e,style:{background:e}})}))})],2)},rt=[];function ct(e){n("VFvC")}var dt=!1,ut=ct,mt="data-v-3657123a",ft=null,pt=Object(I["a"])(lt,ot,rt,dt,ut,mt,ft),gt=pt.exports,ht={name:"Palette",data:function(){return{palette:!1}},created:function(){this.randomPalette()},methods:{filterWithPalette:function(){T.commit("replaceColorFilter",[""]),T.commit("replaceSnappedColorIds",this.palette),this.$root.$emit("triggerFiltering"),this.randomPalette()},randomPalette:function(){var e=[["sienna","sandybrown","darkolivegreen"],["darkolivegreen","rosybrown","lavender"],["darkslategrey","tan","rosybrown"],["tan","rosybrown","burlywood"],["darkslateblue","darkslategrey"]];this.palette=e[Math.floor(Math.random()*e.length)]}}},vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("h2",[e._v(e._s(e.$t("explorePalette")))]),n("div",{staticClass:"palette",on:{click:e.filterWithPalette}},e._l(e.palette,function(t){return e.palette?n("div",{key:t,style:{background:t}}):e._e()}))])},At=[];function bt(e){n("on/4")}var It=!1,Ct=bt,wt="data-v-683cfdd6",St=null,Lt=Object(I["a"])(ht,vt,At,It,Ct,wt,St),kt=Lt.exports,Ft={name:"ImageWall",components:{ObjectView:ee,FilterMenu:st,Palette:kt,Sidebar:gt},directives:{imagesLoaded:m.a},data:function(){return{sidebarIsOpen:!1}},mounted:function(){var e=this;this.$root.$on("toggleSidebar",function(){e.toggleSidebar()})},computed:{list:function(){return T.state.activeItems.slice(0,T.state.visibleLimit)},isAtEndOfFeed:function(){return T.state.activeItems.length<=T.state.visibleLimit}},methods:{imageChange:function(e){e.isComplete?T.commit("notLoadingImages"):T.commit("loadingImages")},toggleSidebar:function(){this.sidebarIsOpen=!this.sidebarIsOpen}}},Bt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FilterMenu"),e.sidebarIsOpen?n("Sidebar"):e._e(),e.list?n("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:e.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:e.list}},e._l(e.list,function(e){return n("div",{key:e.europeana_record,staticClass:"image"},[n("ObjectView",{attrs:{object:e}})],1)})):e._e(),e.isAtEndOfFeed?n("Palette"):e._e()],1)},xt=[];function yt(e){n("7+ip")}var Mt=!1,Pt=yt,Nt="data-v-0375bd14",Ot=null,jt=Object(I["a"])(Ft,Bt,xt,Mt,Pt,Nt,Ot),Et=jt.exports,_t={name:"app",components:{ImageWall:Et,Spinner:d.a},computed:{loading:function(){return T.state.isLoadingImages}},data:function(){return{loadingJson:!0}},mounted:function(){var e=this;this.$root.$on("openInfo",function(){e.$modal.show("welcome")})},methods:{fetchIntoState:function(){var e=this;function t(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=[e[n],e[t]];e[t]=i[0],e[n]=i[1]}return e}this.$http.get("data.json").then(function(e){return e.body}).then(function(n){T.commit("addAllItems",t(n)),T.commit("addActiveItems",T.state.allItems),e.$root.$emit("triggerFiltering"),e.loadingJson=!1})},handleScroll:function(){window.innerHeight+window.scrollY>=document.querySelector("html").offsetHeight-50&&T.state.visibleLimit<=T.state.activeItems.length&&T.commit("increaseVisibleLimit",10)},closeWelcome:function(){this.$modal.hide("welcome")}},beforeMount:function(){this.fetchIntoState()},created:function(){var e=this;window.addEventListener("scroll",this.handleScroll),setTimeout(function(){e.$modal.show("welcome")},100)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Wt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ImageWall"),n("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.closeWelcome,expression:"closeWelcome",arg:"swipe",modifiers:{up:!0}}],attrs:{name:"welcome",classes:["v--modal","welcome"],transition:"slide-north"}},[n("h1",[e._v(e._s(e.$t("appTitle")))]),n("h2",[e._v(e._s(e.$t("explore"))+e._s(e.$t("tags"))+" "),n("i",{staticClass:"fas fa-tag"}),e._v(e._s(e.$t("and"))+e._s(e.$t("color"))+" "),n("i",{staticClass:"fas fa-palette"}),e._v("!")]),n("p",[e._v(e._s(e.$t("appDescription")))]),n("div",{staticClass:"btn-container"},[n("button",{on:{click:e.closeWelcome}},[e._v(e._s(e.$t("appBegin")))])])]),e.loading||e.loadingJson?n("spinner",{staticClass:"spinner",attrs:{size:"big"}}):e._e()],1)},Dt=[];function Vt(e){n("+VGo")}var Gt,Ht=!1,Jt=Vt,Tt=null,Ut=null,Qt=Object(I["a"])(_t,Wt,Dt,Ht,Jt,Tt,Ut),qt=Qt.exports,Kt={en:{nItemsPrefix:"Showing",nItemsMidfix:"of",nItemsSuffix:"images",filterAddColor:"Add Another Color",filterClear:"Clear This Filter",appBegin:"Start Exploring!",appTitle:"Generous Interfaces",explore:"Explore the collection using ",tags:"tags",and:" and ",color:"colour",appDescription:"A prototype by the Swedish National Heritage Board, Malmö Museer, Nationalmuseum, National Museums of World Culture and the Nordic Museum.",moreDetails:"More details at",explorePalette:"Explore With the Palette Below?"},sv:{nItemsPrefix:"Visar",nItemsMidfix:"av",nItemsSuffix:"bilder",filterAddColor:"Lägg till ytterligare en färg",filterClear:"Rensa detta filter",appBegin:"Börja utforska!",appTitle:"Generösa användargränssnitt",explore:"Utforska samlingen med hjälp av ",tags:"nyckelord",and:" och ",color:"färg",appDescription:"En prototyp från Riksantikvarieämbetet, Malmö museer, Nationalmuseum, Nordiska museet och Världskulturmuseerna.",moreDetails:"Mer information hos",explorePalette:"Utforska med paletten nedan?"}},zt=Kt;i["default"].use(r["a"]),i["default"].use(o.a),i["default"].use(s["a"]),i["default"].use(a["a"]),i["default"].config.productionTip=!1,Gt=navigator.languages.includes("sv")?"sv":"en";var Rt=new r["a"]({locale:Gt,messages:zt});new i["default"]({render:function(e){return e(qt)},i18n:Rt,store:T}).$mount("#app")},Uvf3:function(e,t){},VFvC:function(e,t){},kFhx:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAYAAABjyArgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABTpJREFUaN7tWk1PG0cY9jlSLO5cOIYbbZUeU6T0B5AfkIh/UNRbJKqgiFSKVAlZrqLm0FCptyawxubDX3gNa2N71/Z6IeTKT+AnvNXzrt9ldlnwB84aE0Yasd6ZnR2efeZ5P2ZiRBSPxWJ0X0dfifCn+2Mnv017xV3KlbJUPChQySjRQbVMRt2gI7NK9WaNGq0GWW2TmrZFzU7TrbZFlm2S2WpwH/St1A1+VjdKPFaulOOx8Y5MNk1beylK7Wi0ub1BG5lPXD+lP9LHrf/uTFWAvgA3r+do/7BI5YpORu2QwWq06gxg22lR58Qm53OHjk+P6eSLW3HtfHa4DX0s2+Jn8CzGKFd1HhNjB0HWdjY9kAHwHQU55ge3WmYG1qwasxWgAdTVN6v09Oen9DD+8NJSwD20rf6+yn3bx23+KGB0pVFhNu8f7vtATme3KLWruSBnNkbG4pfLL2l2dvbSHHEPbWMBGLKgggtgmh2LWZlIJmh6erpv3UHfxJ8JfhYSAjZXPZCLnlxs5zKU3nNBHgWLk38l6dHsI28e8/PztLS0xBXXch990DdSgKGTkIULcJvMxIVnCz7wpqamaHFxkVZWVkjXda64xj20qX3xbKVmUMtxQQaTIReuJmdpt7Djl4obsHj93w8Uj8fd9y4s0NnZGQUL7qENfdA3CpA9gGHQoJeQBTA3CC7AA5Dn5+d0XVlfX/cBDbYAZHwwfDi8A4avUM5Tdn/PlYoQFg/6jwhz8aHVolhz3xxlbpEBjOULowTNxdJWwZ2bmwtlxFUFHwHPqEzGmNBkvONCKhQW76ZI294cSiagq8LcL6enPQFGESZ/bU32ADZYGups0KC5Kri9WNsPyNBkGD6WirpBesVlMWtx3tVikYlBARaDNggJ0FcMXyQAM3ttk6VBDBqWum3bNGwByCIXGBNjw4UTFhcPXBarHsUwMiEGLVggF/KBg9KBIoYvEoChjy2nxa6YTAqae9MieocKFw4rRLS41HXbVJkYFmB4CsESElX5Cp6JDGBEaPaJzb6ssFeVBngL0C18dVQV/GDb2tqa7x8RFmNsaDEivksykcu43oSiw3cKYBg3LGEJItQlBQDD/F2AqWlaaJv6vCxVjI2ID1JU7bpshXKBvQnosLhrd1IikE84PnW8CaksFGM1MzPDxgGA4xrLX9rE0wDg0hYmEwirmz4dLvjctWEAvs7IXcXeyI0cfF/kFWRCADE4yTBN7kev1RWAd8AnPjKPRgaw6qb1C3DkbtokAzxooCHaG2mg0a9EwPDBdcM1QFUlItgWlURMRKh8nZG7zpD1Y+SEMa6R6/C7RmnkVJDVZA8+OuaB96tBz1iSPeKmSYgM1yq4zK9y0wCy3A+2oYDRqpvWUNy0vH5zN20i0pUSaKhhctCfHWWgcdgNNJC6lEDjpgmfW51wrzbCQ+VB4vtxhcoTAbCa7Pnwz9+jT/YkEzw2kj14l6Qs1cT7sMmeiQAYdfnVspeufP7iuQ/kQZI+YH1ourJt0us3r7/F3eWLH0u//sJuVGeIhDva0EdNuD/+8TFLA/xsfMBvdPvef+O3V8scDABklcnDbBkB3FanSe/ev4vqHEJokBHsM1aAPZBtd9MTmjzwpmdSNj2tyMANghd2PQZwwwEWuVC37QFar2177Fzwtj3OR7TNyGWhV7ryVkiEWr//4TvS0hq7cPCTbe/giaMcPHH4nnrwJJXR6MlPT8ZxVOk2SUNvgKUCrLd/vKViuagcnepWHJ1qm9yGPuMAdmIZfF9HUInowT0QX+905f/GIzQzf2iprAAAAABJRU5ErkJggg=="},ohDP:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAYAAABjyArgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABmtJREFUaN7tWltPG0cU5rkqiFdEpSBVrQCpFbRKX1olSOkPoE+tKqXiIU15K0qaqGmdQJCTKG0kZJFGoRLQFglVgWDA3HzBNtjGd68NIa888AMQv+BU36xnmF12vbvGNMhhpBHruZxlvjnznctsAxE1NTQ00HmtfSXCn/KP5cASrYZWyB9eo9BGkMKxMG0kohRLxWgrk6BULknpfJqyhQzllCzlijm1KlnKKhnK5NNsDMbGUzE2NxILM1n+sJ/Jxjt8a4u0sDpP88temlt6SS99s6zOLs7QzMKLuqkS0EfgBiJ+Wt8MUTQeoVhyk4GVzqcYgIVSnoo7CpVeFWl7d5t2XqsVz6VXJdaHMVkly+ZgLmREExEmE7L1IHuX5wTIALhOQW7QgpuIMg1MZpNMWwEaQHU/cNOVL69QY1PjsaOANvS5H7rZ2MJ2gW0KNDqejjNtXt9c14C8uLZA8yteFWTfEch3XHeoo6Pj2DvQhj67izsLcgTAoAUZXACTK2aZVnpGPdTa2mqbdzDW89TD5oJCoM0JAXJI0MWS30eLqyrI0OI/xp5Se0e7kNPT00MDAwOs4pm3Y8zo81HTRaHvrMgRAIMnQQtH4OaYJvZ+1asBr7m5mfr6+mhoaIgikQireEYb+uSxmBtPxihfUkGGJoMuVE5eo5XgsqCKf6b/pqamJnVeby/t7e2RvqANfRiDsUaLmpyaOFNyBMAwaOBL0AI0Vw8uwAOQBwcHVKlMTk5qgMbuAmRsGDYO74DhC0YDtLa+qlLF6oI4gtgouUjWWPMOLlu/IK5xejmekRH69utvTizHbM1mcgTAOL4wSuBcHG0Z3K6uLsMdNCvYBMyRNRkywcl4xxFVqFp8d9AlNOX17q4lwChcc2QOxDPaPunupj+fj2nAbWlpocZ3G+n2zZ9of3/flhyj/8esGMnRABxj1JBiBg2cK4NrpbV2QAYnw/AxqkjFKBJXtRhc3NGpaq+TTcRYbmj4YvgpaP/gQ3r/Qhtd/vwL6v/+OmvD6Xv08BF7np2ZsSXnpP+PBmCmvUqGUQM3aDjqiqJQtQUgc7qATMiGC8e1OLShajE3IPqC48k3yOiockMjLwZtt27cpJ9v3WYg88o110gjzeTIRZYl10pyNACDH/OlPHPF+KKw6yctnJ9Q4cLhhHAuDpfdNvTBMuuLQVSkKZijB0aWk0omGbCyDPzWg2wlB6X/h37DWkmOBmBEaMqOwnxZrr0yNcBbAM9gl1Bl8PV9IyMjmhdzLYZscDEiPpkmTgtgXqC5ALb7o4+F5sHgBfx+R3KsSkWAYdxwhHkQIR9JAGjk7wJMr9dr2CfP50cdshHxgYoSZZctGA3WnCLkcnh4SBPj4+wZmqs/4uDp/4UikE/Y3i2JBclayI1VW1sbI3MAjmccf97HPQ0AzvuMaAJhdU7Dw0Hq7Ow0NSpm2mvXOEFTAQS0F5XTBAzdvV9ddKH1PVtyrl+7ZlhtGzn4vsgr8AUBRP0ijTjZDl/LJwDvgE+8ldkSAA/evyfcIrsAW7lXMj247w8LNw0uG7TaqZwTu2lvEmAEHNxVsxNocK5zEiA8+e33Y4FGNXIqcW/FQMMuRcDwwXXDM0CVKULfZ5ciAPD0i+n6DpUrGblKhsyOkeM7rBq5InuXbOQA8FLAR1P/TmmyVtg0yMF8OWixStIAHDlJ8yblHHPTeIgM10p/zM3cNIDM2/V9KNBo2U1LS25aIBIQmTWWH16ao1/u1mG6kgcacpis92drGWhslgMNpC55Vo2nLevpdkMAnEgbh8pO4vFqQ2U5+V63AMvJnom/xmuf7Bn1MNlI9uBdPGUpJ975zUY9XR0JgFFdgy6Rrrz63VUNyE6SPtB6w3RlIUPDD4bfxtvlox8DN35kblSxioQ7+jBGTrhf/Owiowb42a5y3vetBhgVCXAEAwBZ1uRqrowAbr6Yo2djz+x+R2AYZOjH2JFj9tssmeRETqWklCXAAmRFvfQEJzu+9Bzll55Z2+AaAWG0MCcbVWm+3Y2qgRzjDtCFfG0P0Kyu7XFzwa7t8X1EIeOYFqzSlU43yuxvLeVUDTC73/q0m7yLXubCwU9WxIcnJenDkxJrkz88mfd56dLlS9V8anQiarCihGo0uAZyrP9hgPX4yWMKRUPSp1Plik+nChnWhzHVAHtaGnxmOfi81rAS0TvnQJze15X/AThizWB3h5mcAAAAAElFTkSuQmCC"},"on/4":function(e,t){},rFKE:function(e,t){},wDEq:function(e,t){}},[0]);
//# sourceMappingURL=app.0402471a.js.map