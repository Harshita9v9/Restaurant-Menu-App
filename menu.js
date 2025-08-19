const searchItemsContainer = document.querySelector(".search-sections");
searchItemsContainer.innerHTML = "";

const menuButtons = document.querySelectorAll(".menu-search-categories button");
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    menuButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const menuItems = document.querySelectorAll(".menu-item");
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("onmouseover", () => {
    console.log(menuItems[i]);
  });
}

const menuItemsContainer = document.querySelector(".menu-items");
for (let i = 0; i < menuItemsData.length; i++) {
  menuItemsContainer.innerHTML += `<div id=${
    "product-" + menuItemsData[i].id
  } class="menu-item">
      <img src=${menuItemsData[i].image} alt="${menuItemsData[i].title}">
      <div class="menu-item-details">
        <h1>${menuItemsData[i].title}</h1>
        <span class="description">${menuItemsData[i].description}</span>
        <span class="price">$${menuItemsData[i].price.toFixed(2)}</span>
        <button id=${
          "button-" + menuItemsData[i].id
        } class="add-to-cart hidden">Add to Cart</button>
      </div>
    </div>`;
}

for (let i = 0; i < menuItemsData.length; i++) {
  const menuItem = document.getElementById("product-" + menuItemsData[i].id);
  menuItem.addEventListener("click", () => {
    window.open(`product.html?id=${menuItemsData[i].id}`, "_blank");
  });
}

localStorage.setItem("cart", JSON.stringify([]));

const addToCartButtons = document.querySelectorAll(".add-to-cart");
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", () => {
    menuItems.forEach((menuItem) => {
      if (menuItem.id === addToCartButtons[i].id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(menuItem);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  });
}

const searchInput = document.querySelector(".menu-search input");
searchInput.addEventListener("input", (e) => {
  if (e.target.value === "") {
    const searchItemsContainer = document.querySelector(".search-sections");
    searchItemsContainer.innerHTML = ""; // Clear previous search results
    return;
  }
  else{
        const searchItemsContainer = document.querySelector(".search-sections");
        searchItemsContainer.innerHTML = ""; // Clear previous search results
        searchItemsContainer.innerHTML += ` <h1>Search Results</h1>
        <div class="search-section-items">
        <div class="search-items"> 
        </div>
      </div>`
  }
  const products = searchFood(e.target.value);
  const searchItemsContainer = document.querySelector(".search-sections");
  searchItemsContainer.innerHTML = ""; // Clear previous search results
  for (let i = 0; i < products.length; i++) {
  menuItemsContainer.innerHTML += `<div id=${
    "product-" + products[i].id
  } class="menu-item">
      <img src=${products[i].image} alt="${products[i].title}" class="search-item-image">
      <div class="search-item-details">
        <h1>${products[i].title}</h1>
        <span class="description">${products[i].description}</span>
        <span class="price">$${products[i].price.toFixed(2)}</span>
        <button id=${
          "button-" + products[i].id
        } class="add-to-cart hidden">Add to Cart</button>
      </div>
    </div>`;
}
});

console.log(productTokens);

// Move searchFood function definition to the top
const searchFood = (searchQuery) => {
  const searchTokens = searchQuery.toLowerCase().split(" ");
  let productMatchingScores = [];

  for (let i = 0; i < productTokens.length; i++) {
    let count = 0;
    for (let j = 0; j < productTokens[i].tokens.length; j++) {
      if (searchTokens.includes(productTokens[i].tokens[j].toLowerCase())) {
        count++;
      }
    }
    productMatchingScores.push({ id: productTokens[i].id, score: count });
  }

  // Sort in descending order (highest scores first)
  productMatchingScores.sort((a, b) => { return b.score - a.score; });
  // Keep only top 5 matches
  console.log(productMatchingScores);
  // Find products corresponding to the top matching scores
  productMatchingScores = productMatchingScores.filter((product) => product.score > 0);
  productMatchingScores = productMatchingScores.splice(0, 5);
  console.log(productMatchingScores);
  const products = [];
  for (let i = 0; i < productMatchingScores.length; i++) {
    menuItemsData.forEach((menuItem) => {
      if (menuItem.id == productMatchingScores[i].id) {
        products.push(menuItem);
      }
    });
  }
  return products;
};



