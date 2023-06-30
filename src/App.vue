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
        flashStatus: null,
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
  mounted(){
    document.querySelectorAll('.backgroundImage')[0].style.backgroundImage = 'url(lotus.jpg)'
    this.state.loadFlowers = this.loadFlowers
    this.state.viewPhoto = this.viewPhoto
    this.state.cartTotalItems = this.cartTotalItems
    this.state.closeModals = this.closeModals
    this.state.removeRow = this.removeRow
    this.state.addItem = this.addItem
    this.state.viewCart = this.viewCart
    this.state.checkNav = this.checkNav
    this.state.flashStatus = this.flashStatus
    this.state.addToCart = this.addToCart
    this.state.removeItem = this.removeItem
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
    opacity: 1;
    text-align: center;
    transition: opacity 1s;
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    padding-top: 40vh;
    font-size: 64px;
    background: #123c;
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
