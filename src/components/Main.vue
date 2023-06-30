<template>
  <div class="main">
    <div v-for="flower in state.flowers" class="inventoryItem">
      <InventoryItem :state="state" :flower="flower"/>
    </div>
  </div>
</template>

<script>
import InventoryItem from './InventoryItem.vue'

export default {
  name: 'Main',
  components: {
    InventoryItem
  },
  props: [ 'state' ],
  methods: {
  }
}
</script>

<style scoped>
  .main{
    position: relative;
    z-index: 10;
    background: #3333;
    padding-top: 55px;
    padding-bottom: 40px;
    text-align: center;
    min-height: calc(100vh - 115px);
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .inventoryItem{
    width: 400px;
    vertical-align: top;
    height: 200px;
    text-align: left;
    padding: 5px;
    background: #1e0715dd;
    border: 5px solid #0f81;
    border-radius: 5px;
    margin: 3px;
    align-self: flex-start;
  }
</style>
