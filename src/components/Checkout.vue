<template>
  <div class="checkout">
    this amount ok?<br><br>
    <div class="grandTotal" v-html="GTText()"></div>
    <br><br><br><br>
    choose a payment method<br><br>
    <button class="ccbutton paymentButtons" style="background-image: url(creditcards.jpg)" @click="state.paymentMethod='cc'"></button>
    <button class="ppbutton paymentButtons" style="background-image: url(paypal.png);" @click="state.paymentMethod='paypal'"></button><br><br>
    <iframe
      v-if="state.paymentMethod == 'paypal'"
      class="paymentForm"
      :src="state.baseURL + 'paypalForm.php'"
    ></iframe>
    <iframe
      v-if="state.paymentMethod == 'cc'"
      class="paymentForm"
      :src="state.baseURL + 'ccForm.php'"
    ></iframe>
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
  .paymentForm{
    border: none;
    width: calc(100vw - 100px);
    min-height: 630px;
    background: none;
    margin-bottom: 100px;
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
