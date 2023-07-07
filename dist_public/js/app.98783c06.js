(function(){"use strict";var t={5072:function(t,e,a){var s=a(9963),l=a(6252);const o=(0,l._)("div",{class:"backgroundImage"},null,-1);function n(t,e,a,s,n,r){const i=(0,l.up)("Header"),c=(0,l.up)("Main"),d=(0,l.up)("Footer"),h=(0,l.up)("Modal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[o,(0,l.Wm)(i,{state:n.state},null,8,["state"]),(0,l.Wm)(c,{state:n.state},null,8,["state"]),(0,l.Wm)(d,{state:n.state},null,8,["state"]),n.state.showModal?((0,l.wg)(),(0,l.j4)(h,{key:0,state:n.state},null,8,["state"])):(0,l.kq)("",!0)],64)}a(2801),a(7658);const r={class:"main"},i={class:"inventoryItem"};function c(t,e,a,s,o,n){const c=(0,l.up)("InventoryItem");return(0,l.wg)(),(0,l.iD)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.state.flowers,(t=>((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(c,{state:a.state,flower:t},null,8,["state","flower"])])))),256))])}var d=a(3577);const h=t=>((0,l.dD)("data-v-5c382d14"),t=t(),(0,l.Cn)(),t),u=["innerHTML"],m=h((()=>(0,l._)("br",null,null,-1))),p={class:"infoSection"},f=h((()=>(0,l._)("br",null,null,-1))),g=["innerHTML"],v=h((()=>(0,l._)("br",null,null,-1))),w=["innerHTML"],b=h((()=>(0,l._)("div",{style:{clear:"both"}},null,-1)));function k(t,e,a,s,o,n){return(0,l.wg)(),(0,l.iD)(l.HY,null,[a.flower.name?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"itemName",innerHTML:a.flower.name},null,8,u)):(0,l.kq)("",!0),m,(0,l._)("div",p,[(0,l._)("div",{class:"flowerPhoto",onClick:e[0]||(e[0]=t=>a.state.viewPhoto(a.flower.photo)),style:(0,d.j5)(`background-image: url(${a.flower.photo})`),title:"view photo"},null,4),f,(0,l._)("span",{innerHTML:a.flower.description},null,8,g),v,(0,l._)("div",{class:"price",innerHTML:n.computedPrice},null,8,w),((0,l.wg)(),(0,l.iD)("div",{class:"cartButton",key:a.flower.id,style:{"background-image":"url(/addToCart.png)"},onClick:e[1]||(e[1]=t=>a.state.addToCart(a.flower.id)),title:"add this item to your cart"})),b])],64)}var T={name:"InventoryItem",props:["state","flower"],methods:{},computed:{computedPrice(){return`\n        <div style="margin-top:10px;font-size:20px;">\n          Price: $${(+this.flower.price/100).toLocaleString()}\n        </div>\n      `}},mounted(){}},y=a(3744);const C=(0,y.Z)(T,[["render",k],["__scopeId","data-v-5c382d14"]]);var _=C,M={name:"Main",components:{InventoryItem:_},props:["state"],methods:{}};const D=(0,y.Z)(M,[["render",c],["__scopeId","data-v-0436f3b8"]]);var I=D;const L={class:"header"},P=["title"],S=["innerHTML"],H={class:"nav"},x=["disabled"],E=["disabled"];function $(t,e,a,s,o,n){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",L,[(0,l._)("div",{onClick:e[0]||(e[0]=t=>a.state.viewCart()),class:"showCartButton",style:{"background-image":"url(/cart.png)"},title:"view cart ("+a.state.cartTotalItems+" items)"},[(0,l._)("div",{innerHTML:"function"==typeof a.state.cartTotalItems?a.state.cartTotalItems():0,class:"cartCounter"},null,8,S)],8,P),(0,l._)("img",{src:"/headerLogo.png",class:"headerLogo",onClick:e[1]||(e[1]=e=>t.window.location.href="/")})]),(0,l._)("div",H,[(0,l._)("button",{onClick:e[2]||(e[2]=t=>n.pageBack()),class:(0,d.C_)(["navButton button",{enabledButton:a.state.backEnabled,disabledButton:!a.state.backEnabled}]),disabled:!a.state.backEnabled},"←",10,x),(0,l.Uk)(" Page "+(0,d.zw)(a.state.curPage)+" of "+(0,d.zw)(a.state.totalPages)+" ",1),(0,l._)("button",{onClick:e[3]||(e[3]=t=>n.pageFwd()),disabled:!a.state.fwdEnabled,class:(0,d.C_)(["navButton button",{enabledButton:a.state.fwdEnabled,disabledButton:!a.state.fwdEnabled}])},"→",10,E)])],64)}var O={name:"Header",props:["state"],data(){return{}},methods:{pageBack(){this.state.backEnabled&&(this.state.curPage--,1==this.state.curPage&&(this.state.backEnabled=!1),this.state.loadFlowers())},pageFwd(){this.state.fwdEnabled?(this.state.curPage++,this.state.totalPages==this.state.curPage&&(this.state.fwdEnabled=!1),this.state.loadFlowers()):this.state.fwdEnabled=!1}},mounted(){}};const j=(0,y.Z)(O,[["render",$]]);var F=j;const q=["innerHTML"];function B(t,e,a,s,o,n){return(0,l.wg)(),(0,l.iD)("div",{class:"footer",innerHTML:n.copyrightText},null,8,q)}var N={name:"Footer",props:["state"],methods:{},computed:{copyrightText(){return"&copy; Cobb Mountain Flowers - "+(new Date).getFullYear()}},mounted(){}};const Z=(0,y.Z)(N,[["render",B],["__scopeId","data-v-53bd6818"]]);var A=Z;const G=["state"];function R(t,e,a,o,n,r){const i=(0,l.up)("Cart"),c=(0,l.up)("Checkout");return(0,l.wg)(),(0,l.iD)("div",{class:"modal",state:a.state,ref:"modalDiv",tabindex:"0",onClick:e[2]||(e[2]=t=>a.state.closeModals(a.state.modalData.andThen))},[(0,l._)("button",{class:"cancelButton button",onClick:e[0]||(e[0]=t=>a.state.closeModals(a.state.modalData.andThen))},"close [esc]"),"cart"==a.state.modalData.type?((0,l.wg)(),(0,l.j4)(i,{key:0,state:a.state},null,8,["state"])):(0,l.kq)("",!0),"checkout"==a.state.modalData.type?((0,l.wg)(),(0,l.j4)(c,{key:1,state:a.state,onClick:e[1]||(e[1]=(0,s.iM)((()=>{}),["stop"]))},null,8,["state"])):(0,l.kq)("",!0)],8,G)}const z=(0,l._)("br",null,null,-1),U=(0,l._)("br",null,null,-1),Y=(0,l._)("br",null,null,-1),J=["innerHTML"],W={class:"cartTable"},K=(0,l._)("tr",null,[(0,l._)("th",{class:"cartTH"},"item name"),(0,l._)("th",{class:"cartTH"}),(0,l._)("th",{class:"cartTH"},"quantity"),(0,l._)("th",{class:"cartTH"},"price each"),(0,l._)("th",{class:"cartTH"},"line total")],-1),Q={class:"cartTD"},V={class:"cartTD"},X=["onClick","src"],tt={class:"cartTD"},et={class:"cartTD"},at={class:"cartTD"},st={class:"cartTD"},lt=["onClick"],ot=(0,l._)("br",null,null,-1),nt=["onClick"],rt=(0,l._)("br",null,null,-1),it=["onClick"],ct=(0,l._)("br",null,null,-1),dt=(0,l._)("br",null,null,-1),ht=["innerHTML"],ut=(0,l._)("br",null,null,-1),mt=(0,l._)("br",null,null,-1),pt=(0,l._)("br",null,null,-1),ft=(0,l._)("br",null,null,-1),gt=(0,l._)("br",null,null,-1),vt={key:1},wt=(0,l._)("div",{style:{"margin-top":"40vh","font-size":"32px","text-align":"center"}}," there's nothing in your cart yet!",-1),bt=[wt];function kt(t,e,a,o,n,r){return a.state.cart.length?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"cart",onClick:e[1]||(e[1]=(0,s.iM)((()=>{}),["stop"]))},[z,U,Y,(0,l._)("div",{class:"grandTotal",innerHTML:r.GTText()},null,8,J),(0,l._)("table",W,[K,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.state.cart,(t=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",Q,(0,d.zw)(t.name),1),(0,l._)("td",V,[(0,l._)("img",{onClick:e=>a.state.viewPhoto(t.photo,"viewCart"),class:"cartThumb",src:t.photo},null,8,X)]),(0,l._)("td",tt,(0,d.zw)(t.quantity),1),(0,l._)("td",et,(0,d.zw)("$"+(+t.price/100).toLocaleString()),1),(0,l._)("td",at,(0,d.zw)("$"+(+t.lineTotal).toLocaleString()),1),(0,l._)("td",st,[(0,l._)("span",{title:"add 1 to quantity",class:"addItem cartButtons",onClick:e=>a.state.addItem(t.id)},"add 1",8,lt),ot,(0,l._)("span",{title:"remove 1 from quantity. if there is only one, the row is removed...",class:"removeItem cartButtons",onClick:e=>a.state.removeItem(t.id)},"remove 1",8,nt),rt,(0,l._)("span",{title:"remove all of this item.. the whole row is removed...",class:"removeItem cartButtons",onClick:e=>a.state.removeRow(t.id)},"remove row",8,it)])])))),256))]),ct,dt,(0,l._)("div",{class:"grandTotal",innerHTML:r.GTText()},null,8,ht),ut,mt,(0,l._)("div",{class:"checkoutButton",onClick:e[0]||(e[0]=t=>a.state.closeModals("checkout")),ref:"checkoutButton"},null,512),pt,ft,gt])):((0,l.wg)(),(0,l.iD)("div",vt,bt))}var Tt={name:"Cart",props:["state"],data(){return{backEnabled:!1,fwdEnabled:!1}},methods:{GTText(){return"GRAND TOTAL: $"+(+this.state.grandTotal).toLocaleString()}},mounted(){this.$refs.checkoutButton.style.backgroundImage="url(checkout.png)"}};const yt=(0,y.Z)(Tt,[["render",kt]]);var Ct=yt;const _t={class:"checkout"},Mt=(0,l._)("br",null,null,-1),Dt=(0,l._)("br",null,null,-1),It=["innerHTML"],Lt=(0,l._)("br",null,null,-1),Pt=(0,l._)("br",null,null,-1),St=(0,l._)("br",null,null,-1),Ht=(0,l._)("br",null,null,-1),xt=(0,l._)("br",null,null,-1),Et=(0,l._)("br",null,null,-1),$t=(0,l._)("br",null,null,-1),Ot=(0,l._)("br",null,null,-1),jt={key:0,class:"paymentForm",src:"paypalForm.html"},Ft={key:1,class:"paymentForm",src:"ccForm.html"};function qt(t,e,a,s,o,n){return(0,l.wg)(),(0,l.iD)("div",_t,[(0,l.Uk)(" this amount ok?"),Mt,Dt,(0,l._)("div",{class:"grandTotal",innerHTML:n.GTText()},null,8,It),Lt,Pt,St,Ht,(0,l.Uk)(" choose a payment method"),xt,Et,(0,l._)("button",{class:"ccbutton paymentButtons",style:{"background-image":"url(creditcards.jpg)"},onClick:e[0]||(e[0]=t=>a.state.paymentMethod="cc")}),(0,l._)("button",{class:"ppbutton paymentButtons",style:{"background-image":"url(paypal.png)"},onClick:e[1]||(e[1]=t=>a.state.paymentMethod="paypal")}),$t,Ot,"paypal"==a.state.paymentMethod?((0,l.wg)(),(0,l.iD)("iframe",jt)):(0,l.kq)("",!0),"cc"==a.state.paymentMethod?((0,l.wg)(),(0,l.iD)("iframe",Ft)):(0,l.kq)("",!0)])}var Bt={name:"Checkout",props:["state"],methods:{GTText(){return"GRAND TOTAL: $"+(+this.state.grandTotal).toLocaleString()}},mounted(){}};const Nt=(0,y.Z)(Bt,[["render",qt]]);var Zt=Nt,At={name:"Modal",components:{Cart:Ct,Checkout:Zt},props:["state"],data(){return{backEnabled:!1,fwdEnabled:!1}},methods:{},mounted(){let t;switch(document.querySelector("html").style.overflow="hidden",this.state.modalData.type){case"photo":t=document.createElement("div"),t.className="photo",t.style.backgroundImage=`url(${this.state.modalData.photo})`,t.tabindex=1,t.onkeydown=t=>{27==t.keyCode&&this.state.closeModals(this.state.modalData.andThen)},this.$refs.modalDiv.appendChild(t),t.focus();break;case"checkout":console.log("checkout type modal activated");break;case"cart":break}this.$refs.modalDiv.onkeydown=t=>{27==t.keyCode&&this.state.closeModals(this.state.modalData.andThen)},this.$refs.modalDiv.focus()}};const Gt=(0,y.Z)(At,[["render",R]]);var Rt=Gt,zt={name:"App",components:{Main:I,Header:F,Footer:A,Modal:Rt},data(){return{state:{curPage:1,totalPages:1,flowers:[],baseURL:"/",loadFlowers:null,viewPhoto:null,viewCart:null,closeModals:null,LZ2:null,LZ2E:null,flashStatus:null,ip:"",checkout:null,addToCart:null,addItem:null,removeItem:null,showModal:!1,removeRow:null,refreshGrandTotal:null,modalData:[],cart:[],paymentMethod:"",cartTotalItems:null,grandTotal:0,backEnabled:!1,fwdEnabled:!1,checkNav:null}}},methods:{loadFlowers(){let t={page:this.state.curPage-1};fetch(this.state.baseURL+"getInventory.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?(this.state.flowers=t[1],this.state.totalPages=+t[2],this.checkNav()):console.log("error!")}))},setCookie(t){let e=new Date(Date.now()+31536e6);document.cookie=`${t.split("=")[0]}=${btoa(t.split("=")[1]).replaceAll("=","")}; expires=${e}; path=/`},refreshGrandTotal(){this.state.grandTotal=0,this.state.cart.map((t=>{this.state.grandTotal+=t.lineTotal}))},updateCart(){let t={ip:this.state.ip,cart:this.state.cart};fetch(this.state.baseURL+"updateCart.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?this.refreshGrandTotal():console.log("error!")}))},checkout(){this.$nextTick((()=>{this.state.modalData={type:"checkout",andThen:""},this.state.showModal=!0})),console.log("checkout @App.vue...")},async getUserIP(){await fetch("https://api.seeip.org/jsonip").then((t=>t.json())).then((t=>{this.state.ip=t.ip,this.fetchCartMaybe()}))},async fetchCartMaybe(){let t={ip:this.state.ip};await fetch(this.state.baseURL+"fetchCart.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]&&(console.log("retrieved cart for id'd session."),this.state.cart=t[1]?JSON.parse(t[1].cart):[],this.state.cart.length&&this.viewCart())}))},fetchCookie(t){let e=document.cookie.split(";").filter((e=>t==e.split("=")[0].trim()));return e.length?atob(e[0].split("=")[1]):""},deleteCookie(t){oneYearFromNow=new Date(Date.now()-31536e6),document.cookie=`${t}=; expires=${oneYearFromNow}`},LZ2(t){t=t.replaceAll("\\","\\\\");let e,a=!1;for(let s=0;!a&&s<10;s++){let l=16-s,o=t.split(""),n=[];for(let t=0;t<o.length;)if(255==o[t].charCodeAt(0)){for(let e=0;e<3;++e)n=[...n,[1,t+e]];t+=3}else{let e=-1,a=[];for(let s=1;s<Math.min(l,o.length/2);s++)for(let l=t;l<o.length-t-s;l++){let n="",r="";for(let e=0;e<s;e++)n+=o[t+e],r+=o[t+e+s+l];-1==n.indexOf(String.fromCharCode(255))&&n==r&&s>e&&(e=s,a=[t,s,s+l+t])}n=a.length&&a[1]>1?[...n,[a[1],a[2]]]:[...n,[1,t]],t+=a.length&&a[1]>1?a[1]:1}let r="";n.map(((t,e)=>{r+=t[0]>1?String.fromCharCode(255)+String.fromCharCode(o.length-t[1])+String.fromCharCode(t[0]):o[t[1]]})),t=r,s&&t.length>=e.length&&(t=e,a=!0),e=t}return t},LZ2E(t){let e,a,s="";t=t.split("");for(let l=0;l<t.length;++l){let o=t[t.length-l-1];if(s=o+s,l>2&&o==String.fromCharCode(255)){e=s[2].charCodeAt(0),a=s[1].charCodeAt(0),s=s.split("").filter(((t,e)=>e>2)).join("");for(let t=e;t--;)s=s[s.length-a+t]+s}}return s.replaceAll("\\\\","\\")},removeRow(t){this.state.cart=this.state.cart.filter((e=>e.id!=t)),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),this.flashStatus("row removed"),this.updateCart()},removeItem(t){let e=!1;this.state.cart.map((a=>{a.id==t&&(a.quantity>1?(a.quantity--,a.lineTotal-=+a.price/100):e=!0)})),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),e&&(this.state.cart=this.state.cart.filter((e=>e.id!=t))),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),this.flashStatus("item removed"),this.updateCart()},addToCart(t){let e=!1;if(this.state.cart.map((a=>{a.id==t&&(a.lineTotal+=+a.price/100,a.quantity++,e=!0)})),!e){let e=JSON.parse(JSON.stringify(this.state.flowers.filter((e=>e.id==t))[0]));e["lineTotal"]=+e.price/100,e["quantity"]=1,this.state.cart.push(e)}this.flashStatus("item added to cart!"),this.updateCart()},flashStatus(t){let e=document.createElement("div");e.className="status",e.style.pointerEvents="none",setTimeout((()=>{e.className+=" zeroOpacity"}),50),e.innerHTML=t,document.body.appendChild(e),setTimeout((()=>{e.remove()}),1e3)},checkNav(){this.state.backEnable=!1,this.state.fwdEnabled=!1,+this.state.totalPages&&+this.state.curPage<+this.state.totalPages&&(this.state.fwdEnabled=!0),+this.state.curPage>1&&(this.state.backEnabled=!0)},addItem(t){this.state.cart.map((e=>{e.id==t&&(e.quantity++,e.lineTotal+=+e.price/100)})),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),this.flashStatus("item added"),this.updateCart()},viewPhoto(t,e=""){this.closeModals(),this.$nextTick((()=>{this.state.modalData={type:"photo",photo:t,andThen:e},this.state.showModal=!0}))},viewCart(){this.refreshGrandTotal(),this.state.modalData={type:"cart"},this.state.showModal=!0},closeModals(t=""){this.state.showModal=!1,document.querySelector("html").style.overflow="unset",t&&this.$nextTick((()=>{this.state[t]()}))},cartTotalItems(){let t=0;return this.state.cart.map((e=>{t+=+e.quantity})),t}},async mounted(){document.querySelectorAll(".backgroundImage")[0].style.backgroundImage="url(lotus.jpg)",this.state.LZ2=this.LZ2,this.state.LZ2E=this.LZ2E,this.state.addItem=this.addItem,this.state.viewCart=this.viewCart,this.state.checkNav=this.checkNav,this.state.checkout=this.checkout,this.state.addToCart=this.addToCart,this.state.viewPhoto=this.viewPhoto,this.state.removeRow=this.removeRow,this.state.removeItem=this.removeItem,this.state.cardPayment=this.cardPayment,this.state.closeModals=this.closeModals,this.state.loadFlowers=this.loadFlowers,this.state.flashStatus=this.flashStatus,this.state.cartTotalItems=this.cartTotalItems,this.state.refreshGrandTotal=this.refreshGrandTotal,await this.getUserIP(),this.loadFlowers()}};const Ut=(0,y.Z)(zt,[["render",n]]);var Yt=Ut;(0,s.ri)(Yt).mount("#app")}},e={};function a(s){var l=e[s];if(void 0!==l)return l.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,l,o){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],l=t[d][1],o=t[d][2];for(var r=!0,i=0;i<s.length;i++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[i])}))?s.splice(i--,1):(r=!1,o<n&&(n=o));if(r){t.splice(d--,1);var c=l();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,l,o]}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var l,o,n=s[0],r=s[1],i=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(i)var d=i(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},s=self["webpackChunkcobbmtn_flwrs"]=self["webpackChunkcobbmtn_flwrs"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(5072)}));s=a.O(s)})();
//# sourceMappingURL=app.98783c06.js.map