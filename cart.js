const cartItemsContainer = document.querySelector(".cart-items");
const cartItems = localStorage.getItem("cart") ? 
JSON.parse(localStorage.getItem("cart")) : [];

const orderButton = document.getElementById("order-button");
  if (cartItems == null || cartItems.length == 0) {
    orderButton.classList.add("disabled");
  }

for (let i = 0; i < cartItems.length; i++) {
  cartItemsContainer.innerHTML += `<div id=${
    "product-" + cartItems[i].id
  } class="menu-item">
      <img src=${cartItems[i].image} alt="${cartItems[i].title}">
      <div class="menu-item-details">
        <h1>${cartItems[i].title}</h1>
        <span class="description">${cartItems[i].description}</span>
        <span class="price">Total Price Rs. ${cartItems[i].price + cartItems[i].quantity * cartItems[i].price}</span>
        <span>Quantity: ${cartItems[i].quantity}</span>
        <button id=${
          "button-" + cartItems[i].id
        } class="remove-from-cart hidden">Remove from cart</button>
      </div>
    </div>`;
}

if (cartItems.length === 0) {
  cartItemsContainer.innerHTML = "<h2>Your cart is empty</h2>";
}

const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
for (let i = 0; i < removeFromCartButtons.length; i++) {
  removeFromCartButtons[i].addEventListener("click", () => {
    const productId = parseInt(removeFromCartButtons[i].id.split("-")[1]);
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          item.quantity--;
        }
        else {
          item.quantity = 0;
        }
      }
      return item;
    }).filter(item => item.quantity > 0);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    location.reload();
  });
}


orderButton.addEventListener("click", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartItems == null || cartItems.length == 0) {
    return;
  }
  // Proceed with the order
  let orders = JSON.parse(localStorage.getItem("orders"));
  if(orders==null){
    orders = [];
  }
  orders.push(cartItems);
  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  location.assign("./order.html");
});
