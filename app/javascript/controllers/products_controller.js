import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="products"
export default class extends Controller {
  static values = {
    size: String,
    product: Object
  }

  addToCart() {
    // console.log(JSON.stringify(this.productValue, null, 2));
    const cart = localStorage.getItem("cart")
    if(cart) {
      const cartArray = JSON.parse(cart);
      const foundIndex = cartArray.findIndex(
        (item) =>
          item.id === this.productValue.id && item.size === this.sizeValue
      );

      if (foundIndex !== -1) {
        // Corrigido: Verificação do índice encontrado
        cartArray[foundIndex].quantity =
          parseInt(cartArray[foundIndex].quantity) + 1;
      } else {
        cartArray.push({
          id: this.productValue.id,
          name: this.productValue.name,
          price: this.productValue.price,
          size: this.sizeValue,
          quantity: 1,
        });
        localStorage.setItem('cart', JSON.stringify(cartArray));
      }
      // Atualiza o localStorage com o carrinho modificado
      localStorage.setItem('cart', JSON.stringify(cartArray));
    } else {
      const cartArray = []
      cartArray.push({
        id: this.productValue.id,
        name: this.productValue.name,
        price: this.productValue.price,
        size: this.sizeValue,
        quantity: 1,
      });
      localStorage.setItem('cart', JSON.stringify(cartArray));
    }
  }

  selectSize(e) {
    this.sizeValue = e.target.value
    const selectedSizeEl = document.getElementById('selected-sieze')
    selectedSizeEl.innerHTML = `Size Selected: ${this.sizeValue}`
  }
}
