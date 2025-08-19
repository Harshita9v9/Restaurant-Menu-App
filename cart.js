const cartItemsContainer = document.querySelector(".cart-items");
const cartItems = localStorage.getItem("cart") ? 
JSON.parse(localStorage.getItem("cart")) : [];

for (let i = 0; i < cartItems.length; i++) {
  cartItemsContainer.innerHTML += `<div id=${
    "product-" + cartItems[i].id
  } class="menu-item">
      <img src=${cartItems[i].image} alt="${cartItems[i].title}">
      <div class="menu-item-details">
        <h1>${cartItems[i].title}</h1>
        <span class="description">${cartItems[i].description}</span>
        <span class="price"> ${cartItems[i].price}</span>
        <button id=${
          "button-" + cartItems[i].id
        } class="add-to-cart hidden">Remove from cart</button>
      </div>
    </div>`;
}

if (cartItems.length === 0) {
  cartItemsContainer.innerHTML = "<h2>Your cart is empty</h2>";
}