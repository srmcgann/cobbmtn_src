<template>
  <div class="header">
    <div
      @click="state.viewCart()"
      class="showCartButton"
      style="background-image:url(/cart.png)" 
      :title="'view cart ('+state.cartTotalItems+' items)'"
    >
      <div v-html="typeof state.cartTotalItems == 'function' ? state.cartTotalItems() : 0" class="cartCounter"></div>
    </div>
    <img src="/headerLogo.png" class="headerLogo" @click="window.location.href='/'">
  </div>
  <div class="nav">
    <button
      @click="pageBack()"
      class="navButton button"
      :class="{'enabledButton': state.backEnabled, 'disabledButton' : !state.backEnabled}"
     >&larr;</button>
    Page {{state.curPage}} of {{state.totalPages}}
    <button
      @click="pageFwd()"
      class="navButton button"
      :class="{'enabledButton': state.fwdEnabled, 'disabledButton': !state.fwdEnabled}"
     >&rarr;</button>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: [ 'state' ],
  data(){
    return {
    }
  },
  methods: {
    pageBack(){
      if(this.state.backEnabled){
        this.state.curPage--
        if(this.state.curPage == 1) this.state.backEnabled = false
        this.state.loadFlowers()
      }
    },
    pageFwd(){
      if(this.state.fwdEnabled){
        this.state.curPage++
        if(this.state.totalPages==this.state.curPage) this.state.fwdEnabled = false
        this.state.loadFlowers()
      }else{
        this.state.fwdEnabled = false
      }
    }
  },
  mounted(){
  }
}
</script>

<style>
  .header{
    text-align: left;
    position: fixed;
    z-index: 10;
    padding-left: 10px;
    font-size: 35px;
    height: 50px;
    z-index: 1000;
    width: 100%;
    background: linear-gradient(#000,#400c,#4068);
  }
  .enabledButton{
    background: #0f08!important;
  }
  .cartCounter{
    display: block;
    color: #000;
    font-weight:900;
    font-size: .6em;
    margin-top:9px;
  }
  .disabledButton{
    background: #8888!important;
  }
  .showCartButton{
    width: 60px;
    height: 44px;
    text-align: center;
    cursor: pointer;
    margin-top: 3px;
    border-radius: 20px;
    border: 2px solid #4f82;
    background-repeat: no-repeat!important;
    background-size: 40px 40px!important;
    background-position: center center!important;
    background: #f03;
    position: fixed;
    left: 150px;
  }
  .navButton{
    border-radius: 5px;
    height: 24px;
    color: #000;
    line-height: 0;
    border: 1px solid #5555;
    width: 24px;
    font-size: 24px!important;
    padding-top: 0!important;
    width: 50px;
    text-align: center;
  }
  .headerLogo{
    height: 48px;
    margin-top: 2px;
    cursor: pointer;
  }
  .nav{
    position: fixed;
    right: 10px;
    z-index: 1000;
    top: 14px;
  }
</style>
