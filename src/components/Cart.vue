<template>
  <div
    class="cart"
    @click.stop=""
    v-if="state.cart.length"
  >
    <br><br><br>
    <div class="grandTotal" v-html="GTText()"></div>
    <table class="cartTable">
      <tr>
        <th class="cartTH">item name</th>
        <th class="cartTH"></th>
        <th class="cartTH">quantity</th>
        <th class="cartTH">price each</th>
        <th class="cartTH">line total</th>
      </tr>
      <tr v-for="row in state.cart">
        <td class="cartTD">{{row.name}}</td>
        <td class="cartTD"><img @click="state.viewPhoto(row.photo, 'viewCart')" class="cartThumb" :src="row.photo"></td>
        <td class="cartTD">{{row.quantity}}</td>
        <td class="cartTD">{{'$'+(+row.price/100).toLocaleString()}}</td>
        <td class="cartTD">{{'$'+(+row.lineTotal).toLocaleString()}}</td>
        <td class="cartTD">
          <span title="add 1 to quantity" class="addItem cartButtons" @click="state.addItem(row.id)">add 1</span><br>
          <span title="remove 1 from quantity. if there is only one, the row is removed..." class="removeItem cartButtons" @click="state.removeItem(row.id)">remove 1</span><br>
          <span title="remove all of this item.. the whole row is removed..." class="removeItem cartButtons" @click="state.removeRow(row.id)">remove row</span>
        </td>
      </tr>
    </table><br><br>
    <div class="grandTotal" v-html="GTText()"></div><br><br>
  <div class="checkoutButton" @click="state.closeModals('checkout')" ref="checkoutButton"></div><br><br><br>
  </div>
  <div v-else>
    <div style="margin-top: 40vh; font-size:32px; text-align: center;"> there's nothing in your cart yet!</div>
  </div>
</template>

<script>

export default {
  name: 'Cart',
  props: [ 'state'],
  data(){
    return {
      backEnabled: false,
      fwdEnabled: false
    }
  },
  methods: {
    GTText(){
      return `GRAND TOTAL: $` + (+this.state.grandTotal).toLocaleString()
    }
  },
  mounted(){
    this.$refs.checkoutButton.style.backgroundImage = 'url(checkout.png)'
  }
}
</script>

<style>
  .cart{
    background: #0d1b2e7d;
    position: fixed;
    height: 100vh;
    overflow: auto;
    width: 100vw;
    min-height: calc(100vh - 0px);
    border-radius: 2px;
  }
  .cartTable{
    border-collapse: collapse;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  .cartTD{
    border: 1px solid #fff2;
    min-width: 100px;
    font-size:;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 26px;
    text-align: center;
    background: #0008;
  }
  .cartTH{
    font-size: 24px;
    padding: 15px;
  }
  .cartThumb{
    width: 150px;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    vertical-align: top;
  }
  .addItem{
    background: #042;
    color: #4f8;
  }
  .removeItem{
    background: #400;
    color: #f00;
  }
  .grandTotal{
    color: #fff;
    font-size: 2em;
    text-align: center;
  }
  .cartButtons{
    display: inline-block;
    cursor: pointer;
    padding: 5px;
    border-radius: 10px;
    font-size: 20px;
    margin: 5px;
    min-width: 130px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .checkoutButton{
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center center;
    background-color: #40f4;
    cursor: pointer;
    border-radius: 50%;
    padding: 30px;
    width: 150px;
    height: 150px;
    border: 5px solid #4f82;
    margin-left: auto;
    margin-right: auto;
  }
  .addItem{
    background: #042;
    color: #4f8;
  }  
</style>
