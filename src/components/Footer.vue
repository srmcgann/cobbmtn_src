<template>
  <div class="footer" v-html = "copyrightText"></div>
</template>

<script>

export default {
  name: 'Footer',
  props: [ 'state' ],
  methods: {
  },
  computed:{
    copyrightText(){
      return '&copy; Cobb Mountain Flowers - ' + (new Date()).getFullYear()
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .footer{
    text-align: center;
    height: 20px;
    background: #264a;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 10;
  }
</style>
