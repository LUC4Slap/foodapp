import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="cart"
export default class extends Controller {
  initialize() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) return

    let total = 0
    for (let index = 0; index < cart.length; index++) {
      const item = cart[index]
      total += item.price * item.quantity
      const div = document.createElement('div')
      div.classList.add("mt-2")
      div.innerText = `Item: ${item.name} - ${item.price} - ${item.size} - Quantidade: ${item.quantity}`
      const deleteButton = document.createElement('button')
      deleteButton.innerText = "Remover"
      deleteButton.value = item.id
      deleteButton.classList.add("bg-gray-500", "rounded", "text-white", "px-2", "py-1", "ml-2")
      deleteButton.addEventListener("click", this.removeFromCart)
      div.appendChild(deleteButton)
      this.element.prepend(div)
    }
    const totalEl = document.createElement("div")
    totalEl.innerText = `Total: ${total}`
    let totalContainer = document.getElementById("total")
    totalContainer.appendChild(totalEl)
  }

  removeFromCart(event) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const id = event.target.value
    const index = cart.findIndex((item) => item.id == id);

    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.reload();
  }

  clear() {
    localStorage.removeItem("cart")
    window.location.reload()
  }

}
