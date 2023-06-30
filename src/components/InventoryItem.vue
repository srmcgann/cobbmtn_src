<template>
  <span v-if="flower.name" class="itemName" v-html="flower.name"></span><br>
  <div class="infoSection">
    <div
      class="flowerPhoto"
      @click="state.viewPhoto(flower.photo)"
      :style="`background-image: url(${flower.photo})`"
      title="view photo"
    ></div><br>
    <span v-html="flower.description"></span><br>
    <div class="price" v-html="computedPrice"></div>
    <div
      class="cartButton"
      :key="flower.id"
      style="background-image: url(/addToCart.png)"
      @click="state.addToCart(flower.id)"
      title="add this item to your cart"
    ></div>
    <div style="clear: both"></div>
  </div>
</template>

<script>

export default {
  name: 'InventoryItem',
  props: [ 'state', 'flower'],
  methods: {
  },
  computed:{
    computedPrice(){
      return `
        <div style="margin-top:10px;font-size:20px;">
          Price: $${(+this.flower.price/100).toLocaleString()}
        </div>
      `
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .itemName{
    color: #f00;
    background: #200a;
    width: calc(100% - 20px);
    padding-left: 10px;
    padding-right: 10px;
    display: inline-block;
    font-size: 24px;
    border-radius: 5px;
  }
  .price{
    color: #0f6;
    font-size: 16px;
  }
  .infoSection{
  }
  @keyframes modulateBorderRadius{
    from{
      border-radius: 0%;
    }
    to{
      border-radius: 50%;
    }
  }
  .flowerPhoto{
    cursor: pointer;
    width: 150px;
    height: 150px;
    float: left;
    background-position: center center;
    background-size: cover;
    border-radius: 0px;
    animation-duration: 3s;
    animation-name: modulateBorderRadius;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    margin-top: 5px;
    margin-right: 10px;
    display: inline-block;
    border: 5px solid #4088
  }
</style>
