<template>
  <div class="checkout">
    this amount ok?<br><br>
    <div class="grandTotal" v-html="GTText()"></div>
    <br><br><br><br>
    choose a payment method<br><br>
    <button class="ccbutton paymentButtons" style="background-image: url(creditcards.jpg)" @click="state.cardPayment()"></button>
    <button class="ppbutton paymentButtons" style="background-image: url(paypal.png);" @click="state.paypalPayment()"></button>
  </div>
</template>

<script>

export default {
  name: 'Checkout',
  props: [ 'state'],
  methods: {
    GTText(){
      return `GRAND TOTAL: $` + (+this.state.grandTotal).toLocaleString()
    }
  },
  mounted(){
  }
}
</script>

<style>
  .checkout{
    position: fixed;
    top: 0;
    padding-top: 100px;
    left: 0;
    width: 100vw;
    overflow: auto;
    height: 100vh;
    z-index: 1000;
    background: linear-gradient(45deg, #201d,#400);
    text-align: center;
  }
  .grandTotal{
    color: #fff;
    font-size: 2em;
    text-align: center;
  }
  .paymentButtons{
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #333;
    margin: 25px;
    cursor: pointer;
    border-radius:4px;
  }
  .ccbutton{
    width: 200px;
    height: 135px;
  }
  .ppbutton{
    width: 135px;
    height: 135px;
  }
</style>
