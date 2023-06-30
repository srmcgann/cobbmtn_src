<template>
  <div class="modal" :state="state" ref="modalDiv" tabindex="0" @click="state.closeModals(modalData.andThen)">
    <button class="cancelButton button" @click="state.closeModals(modalData.andThen)">close [esc]</button>
  </div>
</template>

<script>

export default {
  name: 'Modal',
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
      case 'cart':
        el = document.createElement('div')
        el.className = "cart"
        el.style.background = '#001e'
        el.style.position = 'fixed'
        el.style.width = '100%'
        el.style.minHeight = 'calc(100vh - 0px)'
        //el.style.border = '5px solid #402'
        el.style.borderRadius = '2px'
        el.onclick = e => {
          e.preventDefault()
          e.stopPropagation()
        }
        let markup
        if(this.state.cart.length){
          markup = `
            <table class="cartTable">
              <tr>
                <th class="cartTH">item name</th>
                <th class="cartTH"></th>
                <th class="cartTH">quantity</th>
                <th class="cartTH">price each</th>
                <th class="cartTH">line total</th>
              </tr>
          `
          let grandTotal = 0
          this.state.cart.map(v=>{
            markup += `
              <tr>
                <td class="cartTD">${v.name}</td>
                <td class="cartTD"><img onclick="showPhoto('${v.photo}')" class="cartThumb" src="${v.photo}"></td>
                <td class="cartTD">${v.quantity}</td>
                <td class="cartTD">${'$'+(+v.price/100).toLocaleString()}</td>
                <td class="cartTD">${'$'+(+v.lineTotal).toLocaleString()}</td>
                <td class="cartTD">
                  <span title="add 1 to quantity" class="addItem cartButtons" onclick="addItem(${v.id})">add 1</span><br>
                  <span title="remove 1 from quantity. if there is only one, the row is removed..." class="removeItem cartButtons" onclick="removeItem(${v.id})">remove 1</span><br>
                  <span title="remove all of this item.. the whole row is removed..." class="removeItem cartButtons" onclick="removeRow(${v.id})">remove row</span>
                </td>
              </tr>
            `
            grandTotal += (+v.lineTotal)
          })
          markup += '</table><br><br>'
          markup += `<div class="grandTotal">GRAND TOTAL: $` + (+grandTotal).toLocaleString() + `</div>
<pre>
${JSON.stringify(this.state.cart)}<br><br><br>
${btoa(JSON.stringify(this.state.cart))}<br><br><br>
size: ${btoa(JSON.stringify(this.state.cart)).length}
</pre>
`
        }else{
          markup = '<div style="position:absolute;left:50%;top:50%;font-size:2em;transform:translate(-50%,-50%);">nothing in your cart yet!</div>'
        }
        markup += '<br>'.repeat(3)
        el.innerHTML = markup
        this.$refs.modalDiv.appendChild(el)
        el.focus()
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
    height: 100vh;
    z-index: 1000;
    background: linear-gradient(45deg, #201d,#400);
  }
  .cartButtons{
    display: inline-block;
    cursor: pointer;
    padding: 5px;
    border-radius: 10px;
    font-size: 1em;
    margin: 5px;
    min-width: 100px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .addItem{
    background: #042;
    color: #4f8;
  }
  .removeItem{
    background: #400;
    color: #f00;
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
    color: #8ff;
    font-size: 2em;
    text-align: center;
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
  .cartThumb{
    width: 150px;
    cursor: pointer;
    border-radius: 5px;
    display: inline-block;
    vertical-align: top;
  }
  .cancelButton{
    background: #400 !important;
    color: #f00 !important;
    z-index: 1000;
    position: absolute;
    top: 10px;
    left: 10px;
  }
</style>
