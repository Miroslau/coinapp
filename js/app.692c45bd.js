(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a5a4d836"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/coinapp/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0992":function(t,e,n){},"0b8b":function(t,e,n){},"0bb6":function(t,e,n){"use strict";n("7ec9")},1359:function(t,e,n){"use strict";n("8780")},"2b77":function(t,e,n){},"2e44":function(t,e,n){"use strict";n("c490")},"360d":function(t,e,n){},"3c02":function(t,e,n){"use strict";n("2b77")},"3e61":function(t,e,n){"use strict";n("afaa")},4258:function(t,e,n){"use strict";n("d043")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"home-container"},[n("div",{staticClass:"home-container__title"},[t._v("Coin project")]),n("Button",{staticClass:"home-container-button",on:{buttonClick:t.openForm}},[t._v(" Add ")])],1),n("div",{staticClass:"home-popular-crypto"},[n("div",{staticClass:"home-popular-crypto__name"},[t._v("3 Popular crypto")]),n("List",{attrs:{list:t.popularCrypto},on:{itemClick:t.briefcaseOpen}})],1),n("div",{staticClass:"home-table"},[n("Table",{attrs:{columns:t.columnsCryptoPayments,rows:t.displayCryptoPayments}})],1),n("div",{staticClass:"home__pagination"},[n("Pagination",{attrs:{pages:t.pages,page:t.page},on:{clickPage:t.clickPage}})],1),t.openBriefcase?n("ModalWindow",{on:{close:function(e){t.openBriefcase=!1}}},[n("CryptoBriefcase")],1):t._e(),t.formOpen?n("ModalWindow",{on:{close:function(e){t.formOpen=!1}}},[n("Form",{on:{closeForm:function(e){t.formOpen=!1}}})],1):t._e()],1)},m=[],d=(n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])}),f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},v=h,y=(n("e2d3"),Object(i["a"])(v,d,f,!1,null,"1dfc7223",null)),g=y.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[t.columns&&t.columns.length>0?n("div",{staticClass:"table-row table-row_header",class:{"table-row_header_hide-border":0===t.hoverIndex},style:t.columnsGrid},t._l(t.columns,(function(e){return e.hideHead?t._e():n("div",{key:e.id,staticClass:"table-row-cell table-row-cell_header",class:{"table-row-cell_pointer":e.pointer},on:{mouseleave:function(e){t.filterOpen=!1}}},[n("span",[t._v(t._s(e.title))])])})),0):t._e(),n("div",{staticClass:"table-body",style:{maxHeight:t.maxHeight}},t._l(t.rows,(function(e,a){return n("div",{key:e.id,staticClass:"table-row",class:{"table-row_hide-border":t.hoverIndex===a+1,"table-row_active":t.hoverRow===e.id},style:t.columnsGrid,on:{mouseleave:function(e){return t.setHover(!1,!1)},mouseenter:function(n){return t.setHover(e.id,a)}}},t._l(t.columns,(function(r){return n("div",{key:r.id,staticClass:"table-row-cell",style:r.style||{}},[n(t.getComponentByType(r),{tag:"component",attrs:{row:e,column:r,hover:t.hoverRow,index:t.getIndexWithPage(a)}})],1)})),0)})),0)])},_=[],C=(n("a9e3"),n("4de4"),n("a15b"),n("d81d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"string-cell",on:{click:function(e){return e.stopPropagation(),t.clickCell.apply(null,arguments)}}},[n("span",{staticClass:"string-cell-text",class:{"string-cell-text_capitalize":t.column.capitalize,"string-cell-text_with-hover":t.column.route||t.column.hover}},[t._v(" "+t._s(t.value)+" ")])])}),w=[],P=n("ade3"),x=n("2ef0"),k=(n("ac1f"),n("5319"),n("b680"),{methods:{convertNumber:function(t){var e=Math.round(100*+t)/100;return String(e.toFixed(2)).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}}),j={name:"StringCell",mixins:[k],props:["row","column","index"],computed:{value:function(){var t=Object(x["get"])(this.row,this.column.prop,""),e=Object(x["get"])(this.column,"postfix",""),n=Object(x["get"])(this.row,this.column.display,t);return n="number"===this.column.type?this.convertNumber(n):n,n+e}},methods:{clickCell:function(){var t=Object(x["get"])(this.column,["route","name"],"");t&&this.goToRoute(t)},goToRoute:function(t){var e={name:t},n=Object(x["get"])(this.column,["route","paramName"],""),a=Object(x["get"])(this.column,["route","paramValue"],""),r=Object(x["get"])(this.row,a,"");n&&r&&(e.params=Object(P["a"])({},n,r)),this.$router.push(e)}}},O=j,B=(n("c27a"),Object(i["a"])(O,C,w,!1,null,"4603a19a",null)),$=B.exports,E={name:"Table",components:{StringCell:$},props:{columns:{type:Array,default:function(){return[]}},rows:{type:Array,default:function(){return[]}},maxHeight:{type:String,default:"auto"},limit:{type:Number,default:0},page:{type:Number,default:1}},data:function(){return{hoverIndex:!1,hoverRow:!1}},computed:{columnsGrid:function(){var t=this.columns.filter((function(t){return!t.hideHead})),e=t.map((function(t){return t.width||"minmax(70px, 1fr)"})).join(" ");return{gridTemplateColumns:"".concat(e)}}},methods:{setHover:function(t,e){this.hoverRow=t,this.hoverIndex=e},getComponentByType:function(t){var e=t.type||"";switch(e){default:return $}},getIndexWithPage:function(t){return 1===this.page?t:t+(this.page-1)*this.limit}}},I=E,S=(n("5dad"),Object(i["a"])(I,b,_,!1,null,"17880750",null)),L=S.exports,M={name:"CryptoCard",params:{id:"id"},paramName:"id",paramValue:"id",props:!0},N=[{title:"Name",prop:"name",route:M,hover:!0,width:"minmax(40px, 1fr)"},{title:"Price",prop:"priceUsd",postfix:"$",type:"number",width:"minmax(60px, 1fr)"},{title:"24h%",prop:"changePercent24Hr",type:"number",width:"minmax(30px, 1fr)"},{title:"Difference in procent",prop:"changePercent24Hr",postfix:"%",type:"number",width:"minmax(20px, auto)"}],H=N,W=n("bc3a"),T={getCoinCap:function(t){var e=t.limit,n=void 0===e?50:e,a=(t.page,W.create({baseURL:"https://api.coincap.io/v2/"}));return a.get("assets?limit=".concat(n))},getCoinCapById:function(t){var e=W.create({baseURL:"https://api.coincap.io/v2/"});return e.get("assets/".concat(t))}},F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",on:{click:t.clickButton}},[t._t("default")],2)},R=[],A={name:"Button",methods:{clickButton:function(){this.$emit("buttonClick")}}},U=A,D=(n("3e61"),Object(i["a"])(U,F,R,!1,null,"f88d963a",null)),z=D.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("ul",{staticClass:"list-item"},t._l(t.list,(function(e,a){return n("item",{key:e.id,attrs:{item:e,index:a,list:t.list},on:{itemClick:t.itemClick}})})),1)])},G=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"item",on:{click:function(e){return t.clickItem(t.item)}}},[n("span",[t._v(t._s(t.index+1))]),n("span",{staticClass:"item_start"},[t._v(t._s(t.convertNumber(t.item.priceUsd))+" USD")]),n("span",[t._v(t._s(t.convertNumber(t.item.changePercent24Hr)))]),n("span",{staticClass:"item_end"},[t._v("("+t._s(t.convertNumber(t.item.changePercent24Hr))+" %)")])])},q=[],K={name:"Item",mixins:[k],props:["item","index","list"],methods:{clickItem:function(t){this.$emit("itemClick",t)}}},Q=K,X=(n("3c02"),Object(i["a"])(Q,V,q,!1,null,"4f011f9c",null)),Y=X.exports,Z={name:"List",props:["list"],components:{Item:Y},methods:{itemClick:function(t){this.$emit("itemClick",t)}}},tt=Z,et=(n("4258"),Object(i["a"])(tt,J,G,!1,null,"73ac3ac6",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-window"},[n("div",{staticClass:"modal-window-wrapper",class:{"modal-window-wrapper_table":t.tableMode,"modal-window-wrapper_without-padding":t.paddingWithout},on:{click:function(t){t.stopPropagation()}}},[n("span",{staticClass:"modal-window-wrapper__close",on:{click:function(e){return e.stopPropagation(),t.close.apply(null,arguments)}}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"512px",version:"1.1",viewBox:"0 0 512 512",width:"512px","xml:space":"preserve"}},[n("g",{staticClass:"st2",attrs:{id:"cross"}},[n("g",{staticClass:"st0"},[n("line",{staticClass:"st1",attrs:{x1:"112.5",x2:"401",y1:"112.5",y2:"401"}}),n("line",{staticClass:"st1",attrs:{x1:"401",x2:"112.5",y1:"112.5",y2:"401"}})])]),n("g",{attrs:{id:"cross_copy"}},[n("path",{attrs:{d:"M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436\n            L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343\n            c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593\n             c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z"}})])])]),t.title?n("div",{staticClass:"modal-window-wrapper__title"},[t._v(" "+t._s(t.title)+" ")]):t._e(),n("div",{staticClass:"modal-window-child",class:{"modal-window-child_without-padding":t.paddingWithout,"modal-window-child_table":t.tableMode}},[t._t("default")],2),t.tableMode?n("div",{staticClass:"modal-window-wrapper__empty"}):t._e()])])},rt=[],ot={name:"ModalWindow",props:["tableMode","title","paddingWithout"],methods:{close:function(){this.$emit("close")}}},it=ot,st=(n("78d9"),Object(i["a"])(it,at,rt,!1,null,"5b574ba1",null)),ct=st.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form"},[n("div",{staticClass:"form-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nameCrypto,expression:"nameCrypto"}],staticClass:"form__input",attrs:{type:"text",id:"name",placeholder:"Name Crypto",autocomplete:"off"},domProps:{value:t.nameCrypto},on:{input:function(e){e.target.composing||(t.nameCrypto=e.target.value)}}})]),n("div",{staticClass:"form-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cryptoCount,expression:"cryptoCount"}],staticClass:"form__input",attrs:{type:"text",id:"count",placeholder:"Count",autocomplete:"off"},domProps:{value:t.cryptoCount},on:{input:function(e){e.target.composing||(t.cryptoCount=e.target.value)}}})]),n("div",{staticClass:"form__button"},[n("Button",{on:{buttonClick:t.addCrypto}},[t._v("Add")])],1)])},ut=[],pt=n("5530"),mt=n("2f62"),dt={name:"Form",components:{Button:z},data:function(){return{nameCrypto:"",cryptoCount:""}},methods:Object(pt["a"])(Object(pt["a"])({},Object(mt["b"])(["createBriefcaseCryptoPayments"])),{},{addCrypto:function(){this.createBriefcaseCryptoPayments({name:this.nameCrypto,count:this.cryptoCount,id:Date.now()}),this.$emit("closeForm")}})},ft=dt,ht=(n("2e44"),Object(i["a"])(ft,lt,ut,!1,null,"3bb5d6c8",null)),vt=ht.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto-briefcase"},t._l(t.allCryptoBriefcase,(function(e,a){return n("div",{key:e.id,staticClass:"crypto-briefcase-row"},[n("div",[t._v(t._s(a+1))]),n("div",[t._v(t._s(e.name))]),n("div",[t._v(t._s(e.count))]),n("div",{staticClass:"crypto-briefcase-row__delete",on:{click:function(n){return t.deleteItem(e)}}},[t._v("×")])])})),0)},gt=[],bt={name:"CryptoBriefcase",computed:{allCryptoBriefcase:{get:function(){return this.$store.getters.allBriefcaseCryptoPayments}}},methods:Object(pt["a"])(Object(pt["a"])({getCryptoBriefcase:function(){this.$store.dispatch("getBriefcaseCryptoPayments")}},Object(mt["b"])(["deleteBriefcaseCryptoPayments"])),{},{deleteItem:function(t){this.deleteBriefcaseCryptoPayments(t.id)}}),beforeMount:function(){this.getCryptoBriefcase()}},_t=bt,Ct=(n("1359"),Object(i["a"])(_t,yt,gt,!1,null,"309b0456",null)),wt=Ct.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},t._l(t.pages,(function(e){return n("div",{key:e,staticClass:"pagination__page",class:{pagination__page_active:e===t.page},on:{click:function(n){return t.pageClick(e)}}},[t._v(" "+t._s(e)+" ")])})),0)},xt=[],kt={name:"Pagination",props:["pages","page"],methods:{pageClick:function(t){this.$emit("clickPage",t)}}},jt=kt,Ot=(n("7186"),Object(i["a"])(jt,Pt,xt,!1,null,"38c99186",null)),Bt=Ot.exports,$t={name:"Home",components:{HelloWorld:g,Table:L,List:nt,ModalWindow:ct,CryptoBriefcase:wt,Pagination:Bt,Form:vt,Button:z},computed:{allCryptoPayments:{get:function(){return this.$store.getters.allCryptoPayments},set:function(t){this.$store.dispatch("getCryptoPayments",t)}},displayCryptoPayments:function(){return this.paginate(this.allCryptoPayments)}},data:function(){return{columnsCryptoPayments:H,popularCrypto:[],defLimit:30,openBriefcase:!1,formOpen:!1,eventForm:{create:!1},page:1,perPage:9,pages:[]}},methods:{getCryptoPaymentList:function(){var t=this;T.getCoinCap({limit:this.defLimit,page:this.page}).then((function(e){t.allCryptoPayments=e.data.data,t.popularCrypto=t.allCryptoPayments.slice(0,3)})).catch((function(t){console.error(t)}))},paginate:function(t){var e=this.page,n=this.perPage,a=e*n-n,r=e*n;return t.slice(a,r)},setPages:function(){for(var t=Math.ceil(this.allCryptoPayments.length/this.perPage),e=1;e<=t;e++)this.pages.push(e)},clickPage:function(t){this.page=t},briefcaseOpen:function(t){this.openBriefcase=!0},openForm:function(){this.formOpen=!0}},beforeMount:function(){this.getCryptoPaymentList()},watch:{allCryptoPayments:function(){this.setPages()}}},Et=$t,It=(n("0bb6"),Object(i["a"])(Et,p,m,!1,null,"0d3d62f2",null)),St=It.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"crypto-card"},[n("div",{staticClass:"crypto-card-head"},[n("Button",{staticClass:"crypto-card__button",on:{buttonClick:t.backOnMainPage}},[t._v(" Back ")]),n("Button",{staticClass:"crypto-card__button",on:{buttonClick:t.addInCryptoBriefcase}},[t._v(" Add ")])],1),n("div",{staticClass:"crypto-card-info"},[n("div",{staticClass:"crypto-card-info__item"},[n("div",[t._v("Name: "+t._s(t.cryptoPayment.name))]),n("div",{staticClass:"crypto-card-info__item_padding"},[t._v("Symbol: "+t._s(t.cryptoPayment.symbol))]),n("div",{staticClass:"crypto-card-info__item_padding"},[t._v("Price: "+t._s(t.convertNumber(t.cryptoPayment.priceUsd))+" USD")]),n("div",{staticClass:"crypto-card-info__item_padding"},[t._v("Change Percent 24 Hr: "+t._s(t.convertNumber(t.cryptoPayment.changePercent24Hr))+" %")])]),n("div",{staticClass:"crypto-card-graphic"},[n("iframe",{attrs:{src:"https://blockchain.info/",width:t.defaltWidth,height:"500px"}})])])])},Mt=[],Nt=(n("b0c0"),{name:"CryptoCard",mixins:[k],components:{Button:z},data:function(){return{defaltWidth:700,cryptoPayment:{}}},methods:Object(pt["a"])(Object(pt["a"])({},Object(mt["b"])(["createBriefcaseCryptoPayments"])),{},{getCryptoPayment:function(){var t=this;T.getCoinCapById(this.$route.params.id).then((function(e){t.cryptoPayment=e.data.data})).catch((function(t){console.error(t)}))},updateWidth:function(){var t=window.innerWidth;320===t&&(this.defaltWidth=t)},backOnMainPage:function(){var t={name:"Home"};this.$router.push(t)},addInCryptoBriefcase:function(){this.createBriefcaseCryptoPayments({name:this.cryptoPayment.name,count:1,id:Date.now()})}}),created:function(){window.addEventListener("resize",this.updateWidth),this.updateWidth()},beforeMount:function(){this.getCryptoPayment()}}),Ht=Nt,Wt=(n("c7f9"),Object(i["a"])(Ht,Lt,Mt,!1,null,"875b51d2",null)),Tt=Wt.exports;a["a"].use(u["a"]);var Ft=[{path:"/",name:"Home",component:St},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/card/:id",name:"CryptoCard",component:Tt,props:!0}],Rt=new u["a"]({mode:"history",base:"/coinapp/",routes:Ft}),At=Rt,Ut={state:{cryptoPayments:[]},getters:{allCryptoPayments:function(t){return t.cryptoPayments}},mutations:{updateCryptoPayments:function(t,e){t.cryptoPayments=e}},actions:{getCryptoPayments:function(t,e){var n=t.commit,a=e;n("updateCryptoPayments",a)}}},Dt=(n("c740"),n("a434"),{state:{briefcaseCryptoPayments:[]},getters:{allBriefcaseCryptoPayments:function(t){return t.briefcaseCryptoPayments}},mutations:{updateBriefcaseCryptoPayments:function(t,e){t.briefcaseCryptoPayments=e},createBriefcaseCryptoPayments:function(t,e){t.briefcaseCryptoPayments.unshift(e),localStorage.setItem("briefcaseCryptoPayments",JSON.stringify(t.briefcaseCryptoPayments))},deleteBriefcaseCryptoPayments:function(t,e){console.log(e);var n=t.briefcaseCryptoPayments.findIndex((function(t){return t.id===e}));-1!==n&&(t.briefcaseCryptoPayments.splice(n,1),localStorage.setItem("briefcaseCryptoPayments",JSON.stringify(t.briefcaseCryptoPayments)))}},actions:{getBriefcaseCryptoPayments:function(t){var e=t.commit,n=JSON.parse(localStorage.getItem("briefcaseCryptoPayments"));e("updateBriefcaseCryptoPayments",n)}}});a["a"].use(mt["a"]);var zt=new mt["a"].Store({modules:{cryptopayments:Ut,briefcaseCryptoPayments:Dt}});a["a"].config.productionTip=!1,new a["a"]({router:At,store:zt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5dad":function(t,e,n){"use strict";n("0b8b")},7186:function(t,e,n){"use strict";n("84ef")},"78d9":function(t,e,n){"use strict";n("a849")},"7ec9":function(t,e,n){},"84ef":function(t,e,n){},8780:function(t,e,n){},"95ed":function(t,e,n){},"9c0c":function(t,e,n){},a849:function(t,e,n){},afaa:function(t,e,n){},c27a:function(t,e,n){"use strict";n("360d")},c490:function(t,e,n){},c7f9:function(t,e,n){"use strict";n("95ed")},d043:function(t,e,n){},e2d3:function(t,e,n){"use strict";n("0992")}});
//# sourceMappingURL=app.692c45bd.js.map