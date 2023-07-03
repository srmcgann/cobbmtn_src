<template>
  <div
  class="cart"
  @click.stop=""
  v-if="state.cart.length"
  >
    {{GTText()}}
    <table class="cartTable">
      <tr>
        <th class="cartTH">item name</th>
        <th class="cartTH"></th>
        <th class="cartTH">quantity</th>
        <th class="cartTH">price each</th>
        <th class="cartTH">line total</th>
      </tr>
      <tr v-for="row in state.cart">
        <td class="cartTD">${row.name}</td>
        <td class="cartTD"><img onclick="showPhoto('${row.photo}')" class="cartThumb" src="${row.photo}"></td>
        <td class="cartTD">${row.quantity}</td>
        <td class="cartTD">${'$'+(+row.price/100).toLocaleString()}</td>
        <td class="cartTD">${'$'+(+row.lineTotal).toLocaleString()}</td>
        <td class="cartTD">
          <span title="add 1 to quantity" class="addItem cartButtons" onclick="addItem(${row.id})">add 1</span><br>
          <span title="remove 1 from quantity. if there is only one, the row is removed..." class="removeItem cartButtons" onclick="removeItem(${row.id})">remove 1</span><br>
          <span title="remove all of this item.. the whole row is removed..." class="removeItem cartButtons" onclick="removeRow(${row.id})">remove row</span>
        </td>
      </tr>
    </table><br><br>
    {{GTText()}}
  <div class="checkoutButton" @click="state.checkout()"></div>
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
    this.$refs.checkoutButton.style.backgroundImage = 'checkout.png'
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
      this.state.viewPhoto(photo, 'checkout')
    }
    this.$refs.modalDiv.onkeydown = e=>{
      if(e.keyCode == 27) this.state.closeModals(this.modalData.andThen)
    }
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
    border: 1px solid #fff4;
    min-width: 100px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.1em;
    text-align: center;
  }
  .cartTH{
    border: 1px solid #fff8;
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
    font-size: 1em;
    margin: 5px;
    min-width: 130px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .checkoutButton{
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    background-color: #40f4;
    cursor: pointer;
    border-radius: 50%;
    padding: 30px;
    width: 250px;
    height: 250px;
  }
  .addItem{
    background: #042;
    color: #4f8;
  }  
</style>
