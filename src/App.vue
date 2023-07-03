<template>
  <div class="backgroundImage"></div>
  <Header :state="state" />
  <Main :state="state" />
  <Footer :state="state" />
  <Modal :state="state" :modalData="state.modalData" v-if="state.showModal" />
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Main,
    Header,
    Footer,
    Modal
  },
  data(){
    return {
      state:{
        curPage: 1,
        totalPages: 1,
        flowers: [],
        baseURL: '/',
        loadFlowers: null,
        viewPhoto: null,
        viewCart: null,
        closeModals: null,
        LZ2: null,
        LZ2E: null,
        flashStatus: null,
        ip: '',
        addToCart: null,
        addItem: null,
        removeItem: null,
        showModal: false,
        removeRow: null,
        modalData: [],
        cart: [],
        cartTotalItems: null,
        backEnabled: false,
        fwdEnabled: false,
        checkNav: null,
      }
    }
  },
  methods:{
    loadFlowers(){
      let sendData = {page: this.state.curPage-1}
      fetch(this.state.baseURL + 'getInventory.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      }).then(json=>json.json()).then(data=>{
        if(data[0]){
          this.state.flowers = data[1]
          this.state.totalPages = (+data[2])
          this.checkNav()
        } else {
          console.log('error!')
        }
      })
    },
    setCookie(pair){
      let oneYearFromNow = (new Date(Date.now()+1000*60*60*24*365))
      document.cookie = `${pair.split('=')[0]}=${btoa(pair.split('=')[1]).replaceAll('=','')}; expires=${oneYearFromNow}; path=/`
    },
    updateCart(){
      let sendData = {
        ip: this.state.ip,
        cart: this.state.cart
      }
      fetch(this.state.baseURL + 'updateCart.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      }).then(json=>json.json()).then(data=>{
        if(data[0]){
          console.log('cart updated successfully!')
        } else {
          console.log('error!')
        }
      })
    },
    async getUserIP(){
      await fetch('https://api.seeip.org/jsonip')
        .then(json=>json.json())
        .then(data=>{
          this.state.ip = data.ip
          this.fetchCartMaybe()
        })
    },
    async fetchCartMaybe(){
      let sendData = {ip: this.state.ip}
      await fetch(this.state.baseURL + 'fetchCart.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      }).then(json=>json.json()).then(data=>{
        if(data[0]){
          console.log('retrieved cart for id\'d session.')
          this.state.cart = data[1] ? JSON.parse(data[1].cart) : []
          this.viewCart()
        }
      })
    },
    fetchCookie(token){
      let l=document.cookie.split(';').filter(v=>token==v.split('=')[0].trim())
      return l.length ? atob(l[0].split('=')[1]) : ''
    },
    deleteCookie(token){
      oneYearFromNow = (new Date(Date.now()-1000*60*60*24*365))
      document.cookie = `${token}=; expires=${oneYearFromNow}`
    },
    LZ2(str){
      str = str.replaceAll('\\','\\\\')
      let last, end = false, ostr=str
      for(let N=0;!end && N<10;N++){
        let maxBuffer = 16-N
        let l=str.split('')
        let mind, test
        let out=[]
        for(let j=0; j<l.length;){
          if(l[j].charCodeAt(0)==255){
            for(let m=0;m<3;++m) out=[...out, [1,j+m]]
            j+=3
          }else{
            let mind=-1, pos=[]
            for(let k=1;k<Math.min(maxBuffer,l.length/2);k++){
              for(let g=j;g<l.length-j-k;g++){
                let test1 = ''
                let test2 = ''
                for(let i=0; i<k; i++){
                  test1 += l[j+i]
                  test2 += l[j+i+k+g]
                }
                if(test1.indexOf(String.fromCharCode(255))==-1 && test1==test2 && k>mind){
                  mind=k
                  pos=[j,k,k+g+j]
                }
              }
            }
            if(pos.length && pos[1]>1){
              out=[...out, [pos[1], pos[2]]]
            } else {
              out=[...out, [1,j]]
            }
            j+=pos.length&&pos[1]>1?pos[1]:1
          }
        }
        let f=''
        out.map((v,i)=>{
          f+=v[0]>1?String.fromCharCode(255)+String.fromCharCode(l.length-v[1])+String.fromCharCode(v[0]):l[v[1]]
        })
        str = f
        if(N){
          if(str.length>=last.length){
            str = last
            end = true
          }
        }
        last = str
      }
      return str
    },
    LZ2E(data){
      let ret = '', cur, ofx, ofy
      data=data.split('')
      for(let i=0;i<data.length;++i){
        let cur = data[data.length-i-1]
        ret = cur + ret
        if(i>2 && cur == String.fromCharCode(255)){
          ofx = ret[2].charCodeAt(0)
          ofy = ret[1].charCodeAt(0)
          ret=ret.split('').filter((v,i)=>i>2).join('')
          for(let j=ofx; j--;) ret = ret[ret.length-ofy+j] + ret
        }
      }
      return ret.replaceAll('\\\\', '\\')
    },
    removeRow(id){
      this.state.cart = this.state.cart.filter(v=>v.id != id)
      this.closeModals()
      this.$nextTick(()=>{
        this.viewCart()
      })
      this.closeModals()
      this.$nextTick(()=>{
        this.viewCart()
      })
      this.flashStatus('row removed')
      this.updateCart()
    },
    removeItem(id){
      let cull = false
      this.state.cart.map(v=>{
        if(v.id == id){
          if(v.quantity>1){
            v.quantity--
            v.lineTotal -= (+v.price)/100
          }else{
            cull = true
          }
        }
      })
      this.closeModals()
      this.$nextTick(()=>{
        this.viewCart()
      })
      if(cull){
        this.state.cart = this.state.cart.filter(v=>v.id!=id)
      }
      this.closeModals()
      this.$nextTick(()=>{
        this.viewCart()
      })
      this.flashStatus('item removed')
      this.updateCart()
    },
    addToCart(id){
      let existingItem = false
      this.state.cart.map(v=>{
        if(v.id == id){
          v.lineTotal += (+v.price)/100
          v.quantity++
          existingItem = true
        }
      })
      if(!existingItem){
        let newEl = JSON.parse(JSON.stringify(this.state.flowers.filter(v=>v.id==id)[0]))
        newEl['lineTotal'] = (+newEl.price)/100
        newEl['quantity'] = 1
        this.state.cart.push(newEl)
      }
      this.flashStatus('item added to cart!')
      this.updateCart()
    },
    flashStatus(statusMessage){
      let el = document.createElement('div')
      el.className = 'status'
      el.style.pointerEvents = 'none'
      setTimeout(()=>{
        el.className += ' zeroOpacity'
      },50)
      el.innerHTML = statusMessage
      document.body.appendChild(el)
      setTimeout(()=>{
        el.remove()
      },1000)
    },
    checkNav(){
      this.state.backEnable = false
      this.state.fwdEnabled = false
      if((+this.state.totalPages) && (+this.state.curPage)<(+this.state.totalPages)) this.state.fwdEnabled = true
      if((+this.state.curPage) > 1) this.state.backEnabled = true
    },
    addItem(id){
      this.state.cart.map(v=>{
        if(v.id == id){
          v.quantity++
          v.lineTotal += (+v.price/100)
        }
      })
      this.closeModals()
      this.$nextTick(()=>{
        this.viewCart()
      })
      this.flashStatus('item added')
      this.updateCart()
    },
    viewPhoto(photo, andThen=''){
      this.closeModals()
      this.$nextTick(()=>{
        this.state.modalData = {type: 'photo', photo, andThen}
        this.state.showModal = true
      })
    },
    viewCart(){
      this.state.modalData = {type: 'cart'}
      this.state.showModal = true
    },
    closeModals(andThen=''){
      this.state.showModal = false
      document.querySelector('html').style.overflow = 'unset'
      if(andThen){
        this.$nextTick(()=>{
          this.state[andThen]()
        })
      }
    },
    cartTotalItems(){
      let ct=0
      this.state.cart.map(v=>{
        ct += +v.quantity
      })
      return ct
    }
  },
  async mounted(){
    let l
    document.querySelectorAll('.backgroundImage')[0].style.backgroundImage = 'url(lotus.jpg)'
    this.state.LZ2 = this.LZ2
    this.state.LZ2E = this.LZ2E
    this.state.addItem = this.addItem
    this.state.viewCart = this.viewCart
    this.state.checkNav = this.checkNav
    this.state.addToCart = this.addToCart
    this.state.viewPhoto = this.viewPhoto
    this.state.removeRow = this.removeRow
    this.state.removeItem = this.removeItem
    this.state.closeModals = this.closeModals
    this.state.loadFlowers = this.loadFlowers
    this.state.flashStatus = this.flashStatus
    this.state.cartTotalItems = this.cartTotalItems
    await this.getUserIP()
    this.loadFlowers()
  }
}
</script>

<style>
  html, body{
    color: #fff;
    background: #000;
    overflow-x: hidden;
    font-family: courier;
    margin: 0;
    min-height: 100vh;
  }
  .cartButton{
    position: absolute;
    background-size: 50px 50px!important;
    background-repeat: no-repeat!important;
    background-position: center center!important;
    cursor: pointer;
    z-index: 1000;
    width: 55px;
    height: 55px;
    border-radius: 10px;
    border: 5px solid #fff2;
    background: #264e;
    margin-left: 330px;
    margin-top: -10px;
  }
  .zeroOpacity{
    opacity: 0!important;
  }
  .backgroundImage{
    position: fixed;
    left: 50%;
    top: 50px;
    transform: translate(-50%);
    width: 100vw;
    height: calc(100vh - 70px);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .status{
    overflow: hidden;
    opacity: .5;
    text-align: center;
    transition: opacity 2s;
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    padding-top: 40vh;
    font-size: 64px;
    background: #40fc;
    color: #8f0;
  }
  .button{
    font-size: 16px;
    background: #0f88;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
  }
</style>
