(function(){"use strict";var t={9626:function(t,e,a){var s=a(9963),l=a(6252);const n=(0,l._)("div",{class:"backgroundImage"},null,-1);function o(t,e,a,s,o,r){const i=(0,l.up)("Header"),c=(0,l.up)("Main"),d=(0,l.up)("Footer"),h=(0,l.up)("Modal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l.Wm)(i,{state:o.state},null,8,["state"]),(0,l.Wm)(c,{state:o.state},null,8,["state"]),(0,l.Wm)(d,{state:o.state},null,8,["state"]),o.state.showModal?((0,l.wg)(),(0,l.j4)(h,{key:0,state:o.state},null,8,["state"])):(0,l.kq)("",!0)],64)}a(2801),a(7658);const r={class:"main"},i={class:"inventoryItem"};function c(t,e,a,s,n,o){const c=(0,l.up)("InventoryItem");return(0,l.wg)(),(0,l.iD)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.state.flowers,(t=>((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(c,{state:a.state,flower:t},null,8,["state","flower"])])))),256))])}var d=a(3577);const h=t=>((0,l.dD)("data-v-5c382d14"),t=t(),(0,l.Cn)(),t),u=["innerHTML"],p=h((()=>(0,l._)("br",null,null,-1))),m={class:"infoSection"},f=h((()=>(0,l._)("br",null,null,-1))),g=["innerHTML"],v=h((()=>(0,l._)("br",null,null,-1))),w=["innerHTML"],b=h((()=>(0,l._)("div",{style:{clear:"both"}},null,-1)));function k(t,e,a,s,n,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[a.flower.name?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"itemName",innerHTML:a.flower.name},null,8,u)):(0,l.kq)("",!0),p,(0,l._)("div",m,[(0,l._)("div",{class:"flowerPhoto",onClick:e[0]||(e[0]=t=>a.state.viewPhoto(a.flower.photo)),style:(0,d.j5)(`background-image: url(${a.flower.photo})`),title:"view photo"},null,4),f,(0,l._)("span",{innerHTML:a.flower.description},null,8,g),v,(0,l._)("div",{class:"price",innerHTML:o.computedPrice},null,8,w),((0,l.wg)(),(0,l.iD)("div",{class:"cartButton",key:a.flower.id,style:{"background-image":"url(/addToCart.png)"},onClick:e[1]||(e[1]=t=>a.state.addToCart(a.flower.id)),title:"add this item to your cart"})),b])],64)}var y={name:"InventoryItem",props:["state","flower"],methods:{},computed:{computedPrice(){return`\n        <div style="margin-top:10px;font-size:20px;">\n          Price: $${(+this.flower.price/100).toLocaleString()}\n        </div>\n      `}},mounted(){}},T=a(3744);const C=(0,T.Z)(y,[["render",k],["__scopeId","data-v-5c382d14"]]);var _=C,M={name:"Main",components:{InventoryItem:_},props:["state"],methods:{}};const D=(0,T.Z)(M,[["render",c],["__scopeId","data-v-0436f3b8"]]);var P=D;const I={class:"header"},L=["title"],S=["innerHTML"],H={class:"nav"},x=["disabled"],E=["disabled"];function $(t,e,a,s,n,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",I,[(0,l._)("div",{onClick:e[0]||(e[0]=t=>a.state.viewCart()),class:"showCartButton",style:{"background-image":"url(/cart.png)"},title:"view cart ("+a.state.cartTotalItems+" items)"},[(0,l._)("div",{innerHTML:"function"==typeof a.state.cartTotalItems?a.state.cartTotalItems():0,class:"cartCounter"},null,8,S)],8,L),(0,l._)("img",{src:"/headerLogo.png",class:"headerLogo",onClick:e[1]||(e[1]=e=>t.window.location.href="/")})]),(0,l._)("div",H,[(0,l._)("button",{onClick:e[2]||(e[2]=t=>o.pageBack()),class:(0,d.C_)(["navButton button",{enabledButton:a.state.backEnabled,disabledButton:!a.state.backEnabled}]),disabled:!a.state.backEnabled},"←",10,x),(0,l.Uk)(" Page "+(0,d.zw)(a.state.curPage)+" of "+(0,d.zw)(a.state.totalPages)+" ",1),(0,l._)("button",{onClick:e[3]||(e[3]=t=>o.pageFwd()),disabled:!a.state.fwdEnabled,class:(0,d.C_)(["navButton button",{enabledButton:a.state.fwdEnabled,disabledButton:!a.state.fwdEnabled}])},"→",10,E)])],64)}var O={name:"Header",props:["state"],data(){return{}},methods:{pageBack(){this.state.backEnabled&&(this.state.curPage--,1==this.state.curPage&&(this.state.backEnabled=!1),this.state.loadFlowers())},pageFwd(){this.state.fwdEnabled?(this.state.curPage++,this.state.totalPages==this.state.curPage&&(this.state.fwdEnabled=!1),this.state.loadFlowers()):this.state.fwdEnabled=!1}},mounted(){}};const j=(0,T.Z)(O,[["render",$]]);var B=j;const N=["innerHTML"];function q(t,e,a,s,n,o){return(0,l.wg)(),(0,l.iD)("div",{class:"footer",innerHTML:o.copyrightText},null,8,N)}var F={name:"Footer",props:["state"],methods:{},computed:{copyrightText(){return"&copy; Cobb Mountain Flowers - "+(new Date).getFullYear()}},mounted(){}};const Z=(0,T.Z)(F,[["render",q],["__scopeId","data-v-53bd6818"]]);var A=Z;const G=["state"];function R(t,e,a,n,o,r){const i=(0,l.up)("Cart"),c=(0,l.up)("Checkout");return(0,l.wg)(),(0,l.iD)("div",{class:"modal",state:a.state,ref:"modalDiv",tabindex:"0",onClick:e[2]||(e[2]=t=>a.state.closeModals(a.state.modalData.andThen))},[(0,l._)("button",{class:"cancelButton button",onClick:e[0]||(e[0]=t=>a.state.closeModals(a.state.modalData.andThen))},"close [esc]"),"cart"==a.state.modalData.type?((0,l.wg)(),(0,l.j4)(i,{key:0,state:a.state},null,8,["state"])):(0,l.kq)("",!0),"checkout"==a.state.modalData.type?((0,l.wg)(),(0,l.j4)(c,{key:1,state:a.state,onClick:e[1]||(e[1]=(0,s.iM)((()=>{}),["stop"]))},null,8,["state"])):(0,l.kq)("",!0)],8,G)}const z=(0,l._)("br",null,null,-1),U=(0,l._)("br",null,null,-1),Y=(0,l._)("br",null,null,-1),J=["innerHTML"],W={class:"cartTable"},K=(0,l._)("tr",null,[(0,l._)("th",{class:"cartTH"},"item name"),(0,l._)("th",{class:"cartTH"}),(0,l._)("th",{class:"cartTH"},"quantity"),(0,l._)("th",{class:"cartTH"},"price each"),(0,l._)("th",{class:"cartTH"},"line total")],-1),Q={class:"cartTD"},V={class:"cartTD"},X=["onClick","src"],tt={class:"cartTD"},et={class:"cartTD"},at={class:"cartTD"},st={class:"cartTD"},lt=["onClick"],nt=(0,l._)("br",null,null,-1),ot=["onClick"],rt=(0,l._)("br",null,null,-1),it=["onClick"],ct=(0,l._)("br",null,null,-1),dt=(0,l._)("br",null,null,-1),ht=["innerHTML"],ut=(0,l._)("br",null,null,-1),pt=(0,l._)("br",null,null,-1),mt=(0,l._)("br",null,null,-1),ft=(0,l._)("br",null,null,-1),gt=(0,l._)("br",null,null,-1),vt={key:1},wt=(0,l._)("div",{style:{"margin-top":"40vh","font-size":"32px","text-align":"center"}}," there's nothing in your cart yet!",-1),bt=[wt];function kt(t,e,a,n,o,r){return a.state.cart.length?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"cart",onClick:e[1]||(e[1]=(0,s.iM)((()=>{}),["stop"]))},[z,U,Y,(0,l._)("div",{class:"grandTotal",innerHTML:r.GTText()},null,8,J),(0,l._)("table",W,[K,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.state.cart,(t=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",Q,(0,d.zw)(t.name),1),(0,l._)("td",V,[(0,l._)("img",{onClick:e=>a.state.viewPhoto(t.photo,"viewCart"),class:"cartThumb",src:t.photo},null,8,X)]),(0,l._)("td",tt,(0,d.zw)(t.quantity),1),(0,l._)("td",et,(0,d.zw)("$"+(+t.price/100).toLocaleString()),1),(0,l._)("td",at,(0,d.zw)("$"+(+t.lineTotal).toLocaleString()),1),(0,l._)("td",st,[(0,l._)("span",{title:"add 1 to quantity",class:"addItem cartButtons",onClick:e=>a.state.addItem(t.id)},"add 1",8,lt),nt,(0,l._)("span",{title:"remove 1 from quantity. if there is only one, the row is removed...",class:"removeItem cartButtons",onClick:e=>a.state.removeItem(t.id)},"remove 1",8,ot),rt,(0,l._)("span",{title:"remove all of this item.. the whole row is removed...",class:"removeItem cartButtons",onClick:e=>a.state.removeRow(t.id)},"remove row",8,it)])])))),256))]),ct,dt,(0,l._)("div",{class:"grandTotal",innerHTML:r.GTText()},null,8,ht),ut,pt,(0,l._)("div",{class:"checkoutButton",onClick:e[0]||(e[0]=t=>a.state.closeModals("checkout")),ref:"checkoutButton"},null,512),mt,ft,gt])):((0,l.wg)(),(0,l.iD)("div",vt,bt))}var yt={name:"Cart",props:["state"],data(){return{backEnabled:!1,fwdEnabled:!1}},methods:{GTText(){return"GRAND TOTAL: $"+(+this.state.grandTotal).toLocaleString()}},mounted(){this.$refs.checkoutButton.style.backgroundImage="url(checkout.png)"}};const Tt=(0,T.Z)(yt,[["render",kt]]);var Ct=Tt;const _t={class:"checkout"},Mt=(0,l._)("br",null,null,-1),Dt=(0,l._)("br",null,null,-1),Pt=["innerHTML"],It=(0,l._)("br",null,null,-1),Lt=(0,l._)("br",null,null,-1),St=(0,l._)("br",null,null,-1),Ht=(0,l._)("br",null,null,-1),xt=(0,l._)("br",null,null,-1),Et=(0,l._)("br",null,null,-1),$t=(0,l._)("div",{id:"paypal-button"},null,-1);function Ot(t,e,a,s,n,o){return(0,l.wg)(),(0,l.iD)("div",_t,[(0,l.Uk)(" this amount ok?"),Mt,Dt,(0,l._)("div",{class:"grandTotal",innerHTML:o.GTText()},null,8,Pt),It,Lt,St,Ht,(0,l.Uk)(" choose a payment method"),xt,Et,(0,l._)("button",{class:"ccbutton paymentButtons",style:{"background-image":"url(creditcards.jpg)"},onClick:e[0]||(e[0]=t=>a.state.cardPayment())}),(0,l._)("button",{class:"ppbutton paymentButtons",style:{"background-image":"url(paypal.png)"},onClick:e[1]||(e[1]=e=>t.window.createClient())}),$t])}var jt={name:"Checkout",props:["state"],methods:{GTText(){return"GRAND TOTAL: $"+(+this.state.grandTotal).toLocaleString()}},mounted(){}};const Bt=(0,T.Z)(jt,[["render",Ot]]);var Nt=Bt,qt={name:"Modal",components:{Cart:Ct,Checkout:Nt},props:["state"],data(){return{backEnabled:!1,fwdEnabled:!1}},methods:{},mounted(){let t;switch(document.querySelector("html").style.overflow="hidden",this.state.modalData.type){case"photo":t=document.createElement("div"),t.className="photo",t.style.backgroundImage=`url(${this.state.modalData.photo})`,t.tabindex=1,t.onkeydown=t=>{27==t.keyCode&&this.state.closeModals(this.state.modalData.andThen)},this.$refs.modalDiv.appendChild(t),t.focus();break;case"checkout":console.log("checkout type modal activated");break;case"cart":break}this.$refs.modalDiv.onkeydown=t=>{27==t.keyCode&&this.state.closeModals(this.state.modalData.andThen)},this.$refs.modalDiv.focus()}};const Ft=(0,T.Z)(qt,[["render",R]]);var Zt=Ft,At={name:"App",components:{Main:P,Header:B,Footer:A,Modal:Zt},data(){return{state:{curPage:1,totalPages:1,flowers:[],baseURL:"/",loadFlowers:null,viewPhoto:null,viewCart:null,closeModals:null,LZ2:null,LZ2E:null,flashStatus:null,ip:"",checkout:null,addToCart:null,addItem:null,cardPayment:null,paypalPayment:null,removeItem:null,showModal:!1,removeRow:null,refreshGrandTotal:null,modalData:[],cart:[],cartTotalItems:null,grandTotal:0,backEnabled:!1,fwdEnabled:!1,checkNav:null}}},methods:{loadFlowers(){let t={page:this.state.curPage-1};fetch(this.state.baseURL+"getInventory.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?(this.state.flowers=t[1],this.state.totalPages=+t[2],this.checkNav()):console.log("error!")}))},setCookie(t){let e=new Date(Date.now()+31536e6);document.cookie=`${t.split("=")[0]}=${btoa(t.split("=")[1]).replaceAll("=","")}; expires=${e}; path=/`},refreshGrandTotal(){this.state.grandTotal=0,this.state.cart.map((t=>{this.state.grandTotal+=t.lineTotal}))},updateCart(){let t={ip:this.state.ip,cart:this.state.cart};fetch(this.state.baseURL+"updateCart.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]?this.refreshGrandTotal():console.log("error!")}))},checkout(){this.$nextTick((()=>{this.state.modalData={type:"checkout",andThen:""},this.state.showModal=!0})),console.log("checkout @App.vue...")},async getUserIP(){await fetch("https://api.seeip.org/jsonip").then((t=>t.json())).then((t=>{this.state.ip=t.ip,this.fetchCartMaybe()}))},async fetchCartMaybe(){let t={ip:this.state.ip};await fetch(this.state.baseURL+"fetchCart.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())).then((t=>{t[0]&&(console.log("retrieved cart for id'd session."),this.state.cart=t[1]?JSON.parse(t[1].cart):[],this.state.cart.length&&this.viewCart())}))},fetchCookie(t){let e=document.cookie.split(";").filter((e=>t==e.split("=")[0].trim()));return e.length?atob(e[0].split("=")[1]):""},deleteCookie(t){oneYearFromNow=new Date(Date.now()-31536e6),document.cookie=`${t}=; expires=${oneYearFromNow}`},LZ2(t){t=t.replaceAll("\\","\\\\");let e,a=!1;for(let s=0;!a&&s<10;s++){let l=16-s,n=t.split(""),o=[];for(let t=0;t<n.length;)if(255==n[t].charCodeAt(0)){for(let e=0;e<3;++e)o=[...o,[1,t+e]];t+=3}else{let e=-1,a=[];for(let s=1;s<Math.min(l,n.length/2);s++)for(let l=t;l<n.length-t-s;l++){let o="",r="";for(let e=0;e<s;e++)o+=n[t+e],r+=n[t+e+s+l];-1==o.indexOf(String.fromCharCode(255))&&o==r&&s>e&&(e=s,a=[t,s,s+l+t])}o=a.length&&a[1]>1?[...o,[a[1],a[2]]]:[...o,[1,t]],t+=a.length&&a[1]>1?a[1]:1}let r="";o.map(((t,e)=>{r+=t[0]>1?String.fromCharCode(255)+String.fromCharCode(n.length-t[1])+String.fromCharCode(t[0]):n[t[1]]})),t=r,s&&t.length>=e.length&&(t=e,a=!0),e=t}return t},LZ2E(t){let e,a,s="";t=t.split("");for(let l=0;l<t.length;++l){let n=t[t.length-l-1];if(s=n+s,l>2&&n==String.fromCharCode(255)){e=s[2].charCodeAt(0),a=s[1].charCodeAt(0),s=s.split("").filter(((t,e)=>e>2)).join("");for(let t=e;t--;)s=s[s.length-a+t]+s}}return s.replaceAll("\\\\","\\")},cardPayment(){console.log("card payment...")},paypalPayment(){console.log("paypal payment")},removeRow(t){this.state.cart=this.state.cart.filter((e=>e.id!=t)),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),this.flashStatus("row removed"),this.updateCart()},removeItem(t){let e=!1;this.state.cart.map((a=>{a.id==t&&(a.quantity>1?(a.quantity--,a.lineTotal-=+a.price/100):e=!0)})),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),e&&(this.state.cart=this.state.cart.filter((e=>e.id!=t))),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),this.flashStatus("item removed"),this.updateCart()},addToCart(t){let e=!1;if(this.state.cart.map((a=>{a.id==t&&(a.lineTotal+=+a.price/100,a.quantity++,e=!0)})),!e){let e=JSON.parse(JSON.stringify(this.state.flowers.filter((e=>e.id==t))[0]));e["lineTotal"]=+e.price/100,e["quantity"]=1,this.state.cart.push(e)}this.flashStatus("item added to cart!"),this.updateCart()},flashStatus(t){let e=document.createElement("div");e.className="status",e.style.pointerEvents="none",setTimeout((()=>{e.className+=" zeroOpacity"}),50),e.innerHTML=t,document.body.appendChild(e),setTimeout((()=>{e.remove()}),1e3)},checkNav(){this.state.backEnable=!1,this.state.fwdEnabled=!1,+this.state.totalPages&&+this.state.curPage<+this.state.totalPages&&(this.state.fwdEnabled=!0),+this.state.curPage>1&&(this.state.backEnabled=!0)},addItem(t){this.state.cart.map((e=>{e.id==t&&(e.quantity++,e.lineTotal+=+e.price/100)})),this.closeModals(),this.$nextTick((()=>{this.viewCart()})),this.flashStatus("item added"),this.updateCart()},viewPhoto(t,e=""){this.closeModals(),this.$nextTick((()=>{this.state.modalData={type:"photo",photo:t,andThen:e},this.state.showModal=!0}))},viewCart(){this.refreshGrandTotal(),this.state.modalData={type:"cart"},this.state.showModal=!0},closeModals(t=""){this.state.showModal=!1,document.querySelector("html").style.overflow="unset",t&&this.$nextTick((()=>{this.state[t]()}))},cartTotalItems(){let t=0;return this.state.cart.map((e=>{t+=+e.quantity})),t}},async mounted(){document.querySelectorAll(".backgroundImage")[0].style.backgroundImage="url(lotus.jpg)",this.state.LZ2=this.LZ2,this.state.LZ2E=this.LZ2E,this.state.addItem=this.addItem,this.state.viewCart=this.viewCart,this.state.checkNav=this.checkNav,this.state.checkout=this.checkout,this.state.addToCart=this.addToCart,this.state.viewPhoto=this.viewPhoto,this.state.removeRow=this.removeRow,this.state.removeItem=this.removeItem,this.state.cardPayment=this.cardPayment,this.state.closeModals=this.closeModals,this.state.loadFlowers=this.loadFlowers,this.state.flashStatus=this.flashStatus,this.state.paypalPayment=this.paypalPayment,this.state.cartTotalItems=this.cartTotalItems,this.state.refreshGrandTotal=this.refreshGrandTotal,await this.getUserIP(),this.loadFlowers()}};const Gt=(0,T.Z)(At,[["render",o]]);var Rt=Gt;(0,s.ri)(Rt).mount("#app")}},e={};function a(s){var l=e[s];if(void 0!==l)return l.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,l,n){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],l=t[d][1],n=t[d][2];for(var r=!0,i=0;i<s.length;i++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[i])}))?s.splice(i--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var c=l();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,l,n]}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var l,n,o=s[0],r=s[1],i=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(i)var d=i(a)}for(e&&e(s);c<o.length;c++)n=o[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkcobbmtn_flwrs"]=self["webpackChunkcobbmtn_flwrs"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9626)}));s=a.O(s)})();
//# sourceMappingURL=app.cc466307.js.map