<template>
  <div class="modal" :state="state" ref="modalDiv" tabindex="0" @click="state.closeModals(modalData.andThen)">
    <button class="cancelButton button" @click="state.closeModals(modalData.andThen)">close [esc]</button>
  <Cart :state="state" v-if="type=='cart'" />
  </div>
</template>

<script>
import Cart from './Cart.vue'

export default {
  name: 'Modal',
  components: { Cart },
  props: [ 'state', 'modalData'],
  data(){
    return {
      backEnabled: false,
      fwdEnabled: false
    }
  },
  methods: {
  },
  mounted(){
    document.querySelector('html').style.overflow = 'hidden'
    window.addItem = id =>{
      this.state.addItem(id)
    }
    window.removeItem = id => {
      this.state.removeItem(id)
    }
    window.removeRow = id => {
      this.state.removeRow(id)
    }
    window.showPhoto = photo => {
      this.state.viewPhoto(photo, 'viewCart')
    }
    let el
    switch(this.modalData.type){
      case 'photo':
        el = document.createElement('div')
        el.className = "photo"
        el.style.backgroundImage = `url(${this.modalData.photo})`
        el.tabindex = 1
        el.onkeydown = e =>{
          if(e.keyCode == 27) this.state.closeModals(this.modalData.andThen)
        }
        this.$refs.modalDiv.appendChild(el)
        el.focus()
      break
      case 'checkout':
      break
      case 'cart':
      break
    }
    this.$refs.modalDiv.onkeydown = e=>{
      if(e.keyCode == 27) this.state.closeModals(this.modalData.andThen)
    }
    this.$refs.modalDiv.focus()
  }
}
</script>

<style>
 .modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    overflow: auto;
    height: 100vh;
    z-index: 1000;
    background: linear-gradient(45deg, #201d,#400);
  }
  .photo{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: calc(100vw - 50px);
    height: calc(100vh - 50px);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .cancelButton{
    background: #400 !important;
    color: #f88 !important;
    z-index: 1000;
    position: fixed;
    top: 10px;
    left: 10px;
  }
</style>
