webpackJsonp([1],{"+VGo":function(e,t){},0:function(e,t,i){e.exports=i("NHnr")},1:function(e,t){},"26Th":function(e,t){},"64Vw":function(e,t){},HIHd:function(e,t){},K7Eh:function(e,t){},MW9y:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("gbyG"),i("Gh7F");var o=i("/5sW"),n=i("8+8L"),a=i("VIwv"),l=i("rifk"),r=i.n(l),s=i("TXmL"),c=i("nkUn"),d=i.n(c),u=i("iPd/"),m=i.n(u),f=i("8kuj"),p=i.n(f),h=i("ohDP"),g=i.n(h),v=i("kFhx"),A=i.n(v),b={name:"LicenseBtn",props:{uri:!1},created:function(){var e=this,t=[{uri:"http://creativecommons.org/licenses/by-nc-nd/2.5/",img:g.a,name:"Attribution-NonCommercial-NoDerivs 2.5 Generic"},{uri:"http://creativecommons.org/licenses/by/2.5/",img:A.a,name:"Attribution 2.5 Generic"}],i=t.filter(function(t){return t.uri===e.uri});i?this.license=i[0]:console.warn("Unknown license URI: "+this.uri)}},C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{attrs:{href:e.uri,target:"_blank"}},[i("img",{attrs:{src:e.license.img,alt:e.license.name}})])},I=[],S=i("XyMi");function F(e){i("HIHd")}var w=!1,k=F,x="data-v-e4320afe",L=null,B=Object(S["a"])(b,C,I,w,k,x,L),M=B.exports,P=i("NYxO"),y=i("424j");o["default"].use(P["a"]);var N=new P["a"].Store({state:{allItems:[],activeItems:[],visibleLimit:30,colorFilter:[""],colorCount:[],isLoadingImages:!1,selectedSnappedColorIds:[],selectedLabelIds:[]},mutations:{addAllItems:function(e,t){e.allItems=t},addLabels:function(e,t){e.labels=t},addActiveItems:function(e,t){e.activeItems=t},increaseVisibleLimit:function(e,t){e.visibleLimit+=t},resetVisibleLimit:function(e){e.visibleLimit=30},loadingImages:function(e){return e.isLoadingImages=!0},notLoadingImages:function(e){return e.isLoadingImages=!1},updateStaticColor:function(e,t){o["default"].set(e.colorFilter,t.id,t.color)},clearColorFilter:function(e){return e.colorFilter=[""]},addColorFilter:function(e,t){e.colorFilter.includes(t)||e.colorFilter.push(t)},removeColorFilterById:function(e,t){e.colorFilter.splice(t,1)},replaceColorFilter:function(e,t){e.colorFilter=t},setSelectedSnappedColorId:function(e,t){if(e.selectedSnappedColorIds.includes(t)){var i=e.selectedSnappedColorIds.indexOf(t);-1!==i&&e.selectedSnappedColorIds.splice(i,1)}else e.selectedSnappedColorIds.push(t)},setSelectedLabelId:function(e,t){if(e.selectedLabelIds.includes(t)){var i=e.selectedLabelIds.indexOf(t);-1!==i&&e.selectedLabelIds.splice(i,1)}else e.selectedLabelIds.push(t)}},getters:{getColorPercentages:function(e){var t=0;return e.colorCount.forEach(function(e){return t+=e[0]}),e.colorCount.map(function(e){return e[0]=e[0]/t*100,e})}}}),O=new P["a"].Store({plugins:[Object(y["a"])()],state:{savedPalettes:[]},mutations:{savePalette:function(e,t){return e.savedPalettes.push(t)}}}),j={name:"ObjectView",components:{LicenseBtn:M},props:{object:!1},data:function(){return{isShown:!1}},methods:{toggle:function(){this.isShown||this.$modal.show(this.object.europeana_record),this.isShown&&this.$modal.hide(this.object.europeana_record),this.isShown=!this.isShown},filterByColor:function(e){N.commit("replaceColorFilter",["#"+e]),this.$root.$emit("triggerFiltering"),this.toggle()}}},E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"object"},[i("img",{attrs:{src:e.object.edm_preview,alt:e.object.application.description},on:{click:function(t){e.toggle()}}}),i("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.toggle,expression:"toggle",arg:"swipe",modifiers:{up:!0}}],attrs:{name:e.object.europeana_record,classes:["v--modal details"],height:"auto",transition:"slide-north"}},[i("img",{attrs:{src:e.object.edm_preview,alt:e.object.application.description}}),i("div",{staticClass:"image-colors"},e._l(e.object.application.colors,function(t){return i("div",{key:t.score,style:{background:"#"+t.hex,width:100*t.score+"%"},on:{click:function(i){e.filterByColor(t.hex)}}})})),i("p",[e._v(e._s(e.object.application.description))]),i("LicenseBtn",{attrs:{uri:e.object.edm_rights}}),i("br"),i("a",{attrs:{href:e.object.edm_is_shown_at,target:"_blank"}},[e._v(e._s(e.$t("moreDetails"))+" "+e._s(e.object.edm_data_provider))])],1)],1)},W=[];function D(e){i("26Th"),i("K7Eh")}var V=!1,_=D,H="data-v-4199e763",T=null,G=Object(S["a"])(j,E,W,V,_,H,T),U=G.exports,J=(i("dSUw"),i("beEN"),i("Zzkc")),Q=i("QxPg"),z=i("Nk8h"),K=i.n(z),q=i("HGMW"),R=i.n(q),X=i("43fV"),Y=i.n(X),Z=i("zOqJ"),$=i.n(Z),ee={name:"FilterContainer",data:function(){return{}},methods:{}},te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"filter-container"},[e._t("default")],2)},ie=[];function oe(e){i("fCD1")}var ne=!1,ae=oe,le="data-v-25027dde",re=null,se=Object(S["a"])(ee,te,ie,ne,ae,le,re),ce=se.exports,de={name:"AnimatedNumber",data:function(){return{displayNumber:0,interval:!1}},props:{number:{default:0}},ready:function(){this.displayNumber=this.number?this.number:0},watch:{number:function(){var e=this;clearInterval(this.interval),this.number!==this.displayNumber&&(this.interval=window.setInterval(function(){if(e.displayNumber!==e.number){var t=(e.number-e.displayNumber)/10;t=t>=0?Math.ceil(t):Math.floor(t),e.displayNumber=e.displayNumber+t}},20))}}},ue=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[e._v("\n    "+e._s(e.displayNumber)+"\n")])},me=[],fe=!1,pe=null,he=null,ge=null,ve=Object(S["a"])(de,ue,me,fe,pe,he,ge),Ae=ve.exports,be={name:"ColorMountain",props:{colors:{default:[]}},computed:{selectedSnappedColorIds:function(){return N.state.selectedSnappedColorIds}},methods:{setSelectedSnappedColorId:function(e){N.commit("setSelectedSnappedColorId",e),this.$root.$emit("triggerFiltering")}}},Ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"color-mountain"},e._l(e.colors,function(t){return i("div",{key:t[0],class:{selected:e.selectedSnappedColorIds.includes(t[0])},style:{background:t[0],height:t[1]+"px",width:100/e.colors.length+"%"},on:{click:function(i){e.setSelectedSnappedColorId(t[0])}}})}))},Ie=[];function Se(e){i("MW9y")}var Fe=!1,we=Se,ke="data-v-e819b360",xe=null,Le=Object(S["a"])(be,Ce,Ie,Fe,we,ke,xe),Be=Le.exports,Me={name:"LabelStack",props:{labels:{default:[]}},computed:{selectedLabelIds:function(){return N.state.selectedLabelIds},scaledLabels:function(){var e=this.labels.map(function(e){return e[1]=e[1]/10,e[1]<10&&(e[1]=10),e[1]>40&&(e[1]=40),e[1]+="px",e});return e}},methods:{setSelectedLabelId:function(e){N.commit("setSelectedLabelId",e),this.$root.$emit("triggerFiltering")}}},Pe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",e._l(e.scaledLabels,function(t){return i("span",{key:t[0],class:{selectedLabel:e.selectedLabelIds.includes(t[0])},style:{fontSize:t[1]},on:{click:function(i){e.setSelectedLabelId(t[0])}}},[e._v(e._s(t[0])+", ")])}))},ye=[];function Ne(e){i("64Vw")}var Oe=!1,je=Ne,Ee="data-v-582f4dde",We=null,De=Object(S["a"])(Me,Pe,ye,Oe,je,Ee,We),Ve=De.exports;Q["a"].library.add(R.a),Q["a"].library.add(K.a),Q["a"].library.add(Y.a);var _e={name:"FilterMenu",data:function(){return{colorFilterOpen:!1,labelFilterOpen:!1,selectedColorId:0,colorStats:[],labelStats:[],advancedColorFilterToggle:!1}},components:{FilterContainer:ce,Chrome:J["Chrome"],AnimatedNumber:Ae,ColorMountain:Be,LabelStack:Ve},computed:{nActiveItems:function(){return N.state.activeItems.length},nAllItems:function(){return N.state.allItems.length},staticColors:function(){return N.state.colorFilter},selectedSnappedColorIds:function(){return N.state.selectedSnappedColorIds},selectedLabelIds:function(){return N.state.selectedLabelIds}},mounted:function(){var e=this;this.$root.$on("triggerFiltering",function(){e.executeFiltering()})},methods:{openModal:function(){this.$root.$emit("openInfo")},toggleColorFilter:function(){this.labelFilterOpen&&(this.labelFilterOpen=!1),this.colorFilterOpen=!this.colorFilterOpen},toggleAdvancedColorFilter:function(){this.advancedColorFilterToggle=!this.advancedColorFilterToggle,this.advancedColorFilterToggle||""===this.staticColors[0]||(N.commit("clearColorFilter"),this.executeFiltering())},toggleLabelFilter:function(){this.colorFilterOpen&&(this.colorFilterOpen=!1),this.labelFilterOpen=!this.labelFilterOpen},updateColorFilterStatic:function(e){N.commit("updateStaticColor",{id:this.selectedColorId,color:e.hex}),this.executeFiltering()},lockColor:function(){N.commit("addColorFilter",""),this.setSelectedColorId(this.staticColors.length-1)},removeColorById:function(e){N.commit("removeColorFilterById",e),0===this.staticColors.length&&N.commit("addColorFilter",""),this.executeFiltering(),this.setSelectedColorId(Math.min(this.selectedColorId,this.staticColors.length-1))},setSelectedColorId:function(e){this.selectedColorId=e},savePalette:function(){O.commit("savePalette",this.staticColors.slice(0))},executeFiltering:function(){var e=this,t=N.state.allItems;console.log("debug: executing filtering"),this.staticColors.forEach(function(i){""!==i&&(t=t.filter(function(t){return t.application.colors.some(function(t){return e.isSimilarHSV(t.hex,i)})}))}),this.selectedLabelIds.forEach(function(e){t=t.filter(function(t){return t.application.labels.includes(e)})}),this.selectedSnappedColorIds.forEach(function(e){t=t.filter(function(t){return t.application.css_colors.includes(e)})});var i=[],o=[],n=[],a=[];t.forEach(function(e){o=o.concat(e.application.css_colors),a=a.concat(e.application.labels)}),o.forEach(function(e){i.push([e,o.filter(function(t){return t===e}).length])}),this.colorStats=Array.from(new Set(i.map(JSON.stringify)),JSON.parse).filter(function(e){return e[1]>2}),a.forEach(function(e){n.push([e,a.filter(function(t){return t===e}).length])}),this.labelStats=Array.from(new Set(n.map(JSON.stringify)),JSON.parse).filter(function(e){return e[1]>2}),N.commit("addActiveItems",t),console.log("debug: reseting visibleLimit"),N.commit("resetVisibleLimit"),window.scrollTo(0,0)},isSimilarHSV:function(e,t){var i=$.a.hex.hsv(e),o=$.a.hex.hsv(t),n=Math.abs(i[0]-o[0]),a=Math.abs(i[1]-o[1]),l=Math.abs(i[2]-o[2]),r=0!==i[1]&&n<10&&a<30&&l<30,s=0===i[1]&&a<10&&l<5,c=0===i[1]&&i[2]<20&&l<5;return r||s||c}}},He=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"menu"},[i("img",{staticClass:"logo",attrs:{src:"http://via.placeholder.com/90x90?text=logo",alt:"logo and information"},on:{click:e.openModal}}),i("span",{staticClass:"left"},[e._v(e._s(e.$t("nItemsPrefix"))+" "),i("AnimatedNumber",{attrs:{number:e.nActiveItems}}),e._v(e._s(e.$t("nItemsMidfix"))+" "+e._s(e.nAllItems)+" "+e._s(e.$t("nItemsSuffix")))],1),i("div",{staticClass:"menu-btn",on:{click:e.toggleLabelFilter}},[i("i",{staticClass:"fas fa-tag"})]),i("div",{staticClass:"menu-btn",on:{click:function(t){e.$root.$emit("toggleSidebar")}}},[i("i",{staticClass:"fas fa-save"})]),i("div",{staticClass:"menu-btn",on:{click:e.toggleColorFilter}},[i("i",{staticClass:"fas fa-palette"})])]),i("transition",{attrs:{name:"slide-north"}},[e.colorFilterOpen?i("FilterContainer",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.toggleColorFilter,expression:"toggleColorFilter",arg:"swipe",modifiers:{up:!0}}]},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.advancedColorFilterToggle,expression:"advancedColorFilterToggle"}]},[i("div",{staticClass:"desktop-break"},[i("Chrome",{staticClass:"color-picker",attrs:{value:e.staticColors[e.selectedColorId],disableAlpha:!0,disableFields:!0},on:{input:e.updateColorFilterStatic}})],1),i("div",{staticClass:"desktop-break"},[e._l(e.staticColors,function(t,o){return i("div",{key:t,staticClass:"color",class:{selectedColorId:o==e.selectedColorId,unsetColor:""==t},style:{background:t},on:{click:function(t){e.setSelectedColorId(o)}}},[o==e.selectedColorId?i("span",{attrs:{role:"button"},on:{click:function(t){t.stopPropagation(),e.removeColorById(o)}}},[e._v("x")]):e._e()])}),""!=e.staticColors[e.selectedColorId]?i("div",{staticClass:"colorNew",on:{click:e.lockColor}},[i("h1",[e._v("+")])]):e._e(),i("button",{on:{click:function(t){e.savePalette()}}},[e._v("Save Palette Search")]),i("ColorMountain",{attrs:{colors:e.colorStats}})],2)]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.advancedColorFilterToggle,expression:"!advancedColorFilterToggle"}]},[i("ColorMountain",{attrs:{colors:e.colorStats}})],1),i("p",[e._v("Advanced color filter "),i("toggle-button",{attrs:{value:!1,labels:{checked:"On",unchecked:"Off"},color:"#008cff"},on:{change:e.toggleAdvancedColorFilter}})],1)]):e._e()],1),i("transition",{attrs:{name:"slide-north"}},[e.labelFilterOpen?i("FilterContainer",[i("LabelStack",{attrs:{labels:e.labelStats}})],1):e._e()],1)],1)},Te=[];function Ge(e){i("SAWO"),i("sHX5")}var Ue=!1,Je=Ge,Qe="data-v-32d87ac0",ze=null,Ke=Object(S["a"])(_e,He,Te,Ue,Je,Qe,ze),qe=Ke.exports,Re={name:"Sidebar",data:function(){return{}},computed:{savedPalettes:function(){return O.state.savedPalettes}},methods:{filterWithPalette:function(e){N.commit("clearColorFilter"),e.forEach(function(e){return N.commit("addColorFilter",e)}),N.commit("updateDynamicColor",e[e.length-1]),N.commit("activateColorFilter"),this.$root.$emit("triggerFiltering")}}},Xe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar-container"},[i("h2",[e._v("Saved Palettes")]),0===e.savedPalettes.length?i("p",[e._v("You have no saved palettes.")]):e._l(e.savedPalettes,function(t,o){return i("div",{key:o,staticClass:"palette",on:{click:function(i){e.filterWithPalette(t)}}},e._l(t,function(e){return i("div",{key:o+e,style:{background:e}})}))})],2)},Ye=[];function Ze(e){i("limc")}var $e=!1,et=Ze,tt="data-v-02b7e88d",it=null,ot=Object(S["a"])(Re,Xe,Ye,$e,et,tt,it),nt=ot.exports,at={name:"Palette",data:function(){return{palette:!1}},created:function(){this.randomPalette()},methods:{filterWithPalette:function(){N.commit("clearColorFilter"),this.palette.forEach(function(e){return N.commit("addColorFilter",e)}),N.commit("updateDynamicColor",this.palette[this.palette.length-1]),N.commit("activateColorFilter"),this.$root.$emit("triggerFiltering"),this.randomPalette()},randomPalette:function(){var e=[["#3541b5","#2a95b9","#04131a"],["#6b4f4a","88813b","#734443"],["#239e51","#23929e","#000000"],["#2b8fad","#d5392f","#d5d103"],["#451313","#a77da9","#834240"],["#13451e","#799a20"]];this.palette=e[Math.floor(Math.random()*e.length)]}}},lt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"root"},[i("h2",[e._v(e._s(e.$t("explorePalette")))]),i("div",{staticClass:"palette",on:{click:e.filterWithPalette}},e._l(e.palette,function(t){return e.palette?i("div",{key:t,style:{background:t}}):e._e()}))])},rt=[];function st(e){i("PPS8")}var ct=!1,dt=st,ut="data-v-749096f0",mt=null,ft=Object(S["a"])(at,lt,rt,ct,dt,ut,mt),pt=ft.exports,ht={name:"ImageWall",components:{ObjectView:U,FilterMenu:qe,Spinner:p.a,Palette:pt,Sidebar:nt},directives:{imagesLoaded:m.a},data:function(){return{sidebarIsOpen:!1}},mounted:function(){var e=this;this.$root.$on("toggleSidebar",function(){e.toggleSidebar()})},computed:{list:function(){return N.state.activeItems.slice(0,N.state.visibleLimit)},loading:function(){return N.state.isLoadingImages},isAtEndOfFeed:function(){return N.state.activeItems.length<=N.state.visibleLimit}},methods:{imageChange:function(e){e.isComplete?N.commit("notLoadingImages"):N.commit("loadingImages")},toggleSidebar:function(){this.sidebarIsOpen=!this.sidebarIsOpen}}},gt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.loading?i("spinner",{staticClass:"spinner",attrs:{size:"big"}}):e._e(),i("FilterMenu"),e.sidebarIsOpen?i("Sidebar"):e._e(),e.list?i("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded:on.progress",value:e.imageChange,expression:"imageChange",arg:"on",modifiers:{progress:!0}}],staticClass:"wall",attrs:{list:e.list}},e._l(e.list,function(e){return i("div",{key:e.europeana_record,staticClass:"image"},[i("ObjectView",{attrs:{object:e}})],1)})):e._e(),e.isAtEndOfFeed?i("Palette"):e._e()],1)},vt=[];function At(e){i("Vk0D")}var bt=!1,Ct=At,It="data-v-6812d84a",St=null,Ft=Object(S["a"])(ht,gt,vt,bt,Ct,It,St),wt=Ft.exports,kt={name:"app",components:{ImageWall:wt},mounted:function(){var e=this;this.$root.$on("openInfo",function(){e.$modal.show("welcome")})},methods:{fetchIntoState:function(){var e=this;function t(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),o=[e[i],e[t]];e[t]=o[0],e[i]=o[1]}return e}this.$http.get("data.json").then(function(e){return e.body}).then(function(i){N.commit("addAllItems",t(i)),N.commit("addActiveItems",N.state.allItems),e.$root.$emit("triggerFiltering")})},handleScroll:function(){window.innerHeight+window.scrollY>=document.querySelector("html").offsetHeight-50&&
/*! store.state.isLoadingImages && */
N.state.visibleLimit<=N.state.activeItems.length&&N.commit("increaseVisibleLimit",10)},closeWelcome:function(){this.$modal.hide("welcome")}},beforeMount:function(){this.fetchIntoState()},created:function(){var e=this;window.addEventListener("scroll",this.handleScroll),setTimeout(function(){e.$modal.show("welcome")},100)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},xt=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("ImageWall"),i("modal",{directives:[{name:"hammer",rawName:"v-hammer:swipe.up",value:e.closeWelcome,expression:"closeWelcome",arg:"swipe",modifiers:{up:!0}}],attrs:{name:"welcome",classes:["v--modal","welcome"],transition:"slide-north"}},[i("h1",[e._v(e._s(e.$t("appTitle")))]),i("p",[e._v(e._s(e.$t("appDescription")))]),i("div",{staticClass:"btn-container"},[i("button",{on:{click:e.closeWelcome}},[e._v(e._s(e.$t("appBegin")))])])])],1)},Lt=[];function Bt(e){i("+VGo")}var Mt,Pt=!1,yt=Bt,Nt=null,Ot=null,jt=Object(S["a"])(kt,xt,Lt,Pt,yt,Nt,Ot),Et=jt.exports,Wt={en:{nItemsPrefix:"Showing",nItemsMidfix:"of",nItemsSuffix:"images",filterAddColor:"Add Another Color",filterClear:"Clear This Filter",appBegin:"Start Exploring!",appTitle:"Generous Interfaces",appDescription:"A prototype by the Swedish National Heritage Board, Malmö Museer, Nationalmuseum, National Museums of World Culture and the Nordic Museum.",moreDetails:"More details at",explorePalette:"Explore With the Palette Below?"},sv:{nItemsPrefix:"Visar",nItemsMidfix:"av",nItemsSuffix:"bilder",filterAddColor:"Lägg till ytterligare en färg",filterClear:"Rensa detta filter",appBegin:"Börja utforska!",appTitle:"Generösa användargränssnitt",appDescription:"En prototyp från Riksantikvarieämbetet, Malmö museer, Nationalmuseum, Nordiska museet och Världskulturmuseerna.",moreDetails:"Mer information hos",explorePalette:"Utforska med paletten nedan?"}},Dt=Wt;o["default"].use(d.a),o["default"].use(s["a"]),o["default"].use(r.a),o["default"].use(a["a"]),o["default"].use(n["a"]),o["default"].config.productionTip=!1,Mt=navigator.languages.includes("sv")?"sv":"en";var Vt=new s["a"]({locale:Mt,messages:Dt});new o["default"]({render:function(e){return e(Et)},i18n:Vt}).$mount("#app")},PPS8:function(e,t){},SAWO:function(e,t){},Vk0D:function(e,t){},fCD1:function(e,t){},kFhx:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAfCAYAAABjyArgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAdnJLH8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAABTpJREFUaN7tWk1PG0cY9jlSLO5cOIYbbZUeU6T0B5AfkIh/UNRbJKqgiFSKVAlZrqLm0FCptyawxubDX3gNa2N71/Z6IeTKT+AnvNXzrt9ldlnwB84aE0Yasd6ZnR2efeZ5P2ZiRBSPxWJ0X0dfifCn+2Mnv017xV3KlbJUPChQySjRQbVMRt2gI7NK9WaNGq0GWW2TmrZFzU7TrbZFlm2S2WpwH/St1A1+VjdKPFaulOOx8Y5MNk1beylK7Wi0ub1BG5lPXD+lP9LHrf/uTFWAvgA3r+do/7BI5YpORu2QwWq06gxg22lR58Qm53OHjk+P6eSLW3HtfHa4DX0s2+Jn8CzGKFd1HhNjB0HWdjY9kAHwHQU55ge3WmYG1qwasxWgAdTVN6v09Oen9DD+8NJSwD20rf6+yn3bx23+KGB0pVFhNu8f7vtATme3KLWruSBnNkbG4pfLL2l2dvbSHHEPbWMBGLKgggtgmh2LWZlIJmh6erpv3UHfxJ8JfhYSAjZXPZCLnlxs5zKU3nNBHgWLk38l6dHsI28e8/PztLS0xBXXch990DdSgKGTkIULcJvMxIVnCz7wpqamaHFxkVZWVkjXda64xj20qX3xbKVmUMtxQQaTIReuJmdpt7Djl4obsHj93w8Uj8fd9y4s0NnZGQUL7qENfdA3CpA9gGHQoJeQBTA3CC7AA5Dn5+d0XVlfX/cBDbYAZHwwfDi8A4avUM5Tdn/PlYoQFg/6jwhz8aHVolhz3xxlbpEBjOULowTNxdJWwZ2bmwtlxFUFHwHPqEzGmNBkvONCKhQW76ZI294cSiagq8LcL6enPQFGESZ/bU32ADZYGups0KC5Kri9WNsPyNBkGD6WirpBesVlMWtx3tVikYlBARaDNggJ0FcMXyQAM3ttk6VBDBqWum3bNGwByCIXGBNjw4UTFhcPXBarHsUwMiEGLVggF/KBg9KBIoYvEoChjy2nxa6YTAqae9MieocKFw4rRLS41HXbVJkYFmB4CsESElX5Cp6JDGBEaPaJzb6ssFeVBngL0C18dVQV/GDb2tqa7x8RFmNsaDEivksykcu43oSiw3cKYBg3LGEJItQlBQDD/F2AqWlaaJv6vCxVjI2ID1JU7bpshXKBvQnosLhrd1IikE84PnW8CaksFGM1MzPDxgGA4xrLX9rE0wDg0hYmEwirmz4dLvjctWEAvs7IXcXeyI0cfF/kFWRCADE4yTBN7kev1RWAd8AnPjKPRgaw6qb1C3DkbtokAzxooCHaG2mg0a9EwPDBdcM1QFUlItgWlURMRKh8nZG7zpD1Y+SEMa6R6/C7RmnkVJDVZA8+OuaB96tBz1iSPeKmSYgM1yq4zK9y0wCy3A+2oYDRqpvWUNy0vH5zN20i0pUSaKhhctCfHWWgcdgNNJC6lEDjpgmfW51wrzbCQ+VB4vtxhcoTAbCa7Pnwz9+jT/YkEzw2kj14l6Qs1cT7sMmeiQAYdfnVspeufP7iuQ/kQZI+YH1ourJt0us3r7/F3eWLH0u//sJuVGeIhDva0EdNuD/+8TFLA/xsfMBvdPvef+O3V8scDABklcnDbBkB3FanSe/ev4vqHEJokBHsM1aAPZBtd9MTmjzwpmdSNj2tyMANghd2PQZwwwEWuVC37QFar2177Fzwtj3OR7TNyGWhV7ryVkiEWr//4TvS0hq7cPCTbe/giaMcPHH4nnrwJJXR6MlPT8ZxVOk2SUNvgKUCrLd/vKViuagcnepWHJ1qm9yGPuMAdmIZfF9HUInowT0QX+905f/GIzQzf2iprAAAAABJRU5ErkJggg=="},limc:function(e,t){},ohDP:function(e,t){e.exports="data:image/png;base64,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"},sHX5:function(e,t){}},[0]);
//# sourceMappingURL=app.e5a1555f.js.map