const menuButtons = document.querySelectorAll(".menu-search-categories button");
console.log(menuItemsData);
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    menuButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const menuItems = document.querySelectorAll(".menu-item");
console.log(menuItems);
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("mouseover", () => {
    console.log(menuItems[i]);
  });
}

const menuItemsContainer = document.querySelector(".menu-items");
for (let i = 0; i < menuItemsData.length; i++) {
  menuItemsContainer.innerHTML += `<div class="menu-item">
      <img src=${menuItemsData[i].image} alt="${menuItemsData[i].title}">
      <div class="menu-item-details">
        <h1>${menuItemsData[i].title}</h1>
        <span class="description">${menuItemsData[i].description}</span>
        <span class="price">$${menuItemsData[i].price.toFixed(2)}</span>
        <button id=${
          menuItemsData[i].id
        } class="add-to-cart hidden">Add to Cart</button>
      </div>
    </div>`;
}

localStorage.setItem("cart", JSON.stringify([]));
console.log(localStorage.getItem("cart"));

const addToCartButtons = document.querySelectorAll(".add-to-cart");
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", () => {
    const buttonId = parseInt(addToCartButtons[i].id);
    const item = menuItemsData.find((item) => item.id === buttonId);

    if (item) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Cart updated:", JSON.parse(localStorage.getItem("cart")));
    }
  });
}
