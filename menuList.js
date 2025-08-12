const menuItemsData = [
  { "id": 1, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 2, "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591", "title": "Pizza", "description": "Cheesy pizza with a variety of toppings.", "price": 8.99 },
  { "id": 3, "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8", "title": "Pasta", "description": "Italian pasta with a rich tomato sauce.", "price": 7.99 },
  { "id": 4, "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", "title": "Salad", "description": "Fresh garden salad with a variety of vegetables.", "price": 6.99 },
  { "id": 5, "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 6, "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143", "title": "Pizza", "description": "Delicious pizza with fresh toppings and cheese.", "price": 5.99 },
  { "id": 7, "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9", "title": "Pasta", "description": "Italian pasta with a rich tomato sauce.", "price": 7.99 },
  
  { "id": 8, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 9, "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591", "title": "Pizza", "description": "Cheesy pizza with a variety of toppings.", "price": 8.99 },
  { "id": 10, "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8", "title": "Pasta", "description": "Italian pasta with a rich tomato sauce.", "price": 7.99 },
  { "id": 11, "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", "title": "Salad", "description": "Fresh garden salad with a variety of vegetables.", "price": 6.99 },
  { "id": 12, "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 13, "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143", "title": "Pizza", "description": "Delicious pizza with fresh toppings and cheese.", "price": 5.99 },
  { "id": 14, "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9", "title": "Pasta", "description": "Italian pasta with a rich tomato sauce.", "price": 7.99 },
  
  { "id": 15, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 16, "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591", "title": "Pizza", "description": "Cheesy pizza with a variety of toppings.", "price": 8.99 },
  { "id": 17, "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8", "title": "Pasta", "description": "Italian pasta with a rich tomato sauce.", "price": 7.99 },
  { "id": 18, "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", "title": "Salad", "description": "Fresh garden salad with a variety of vegetables.", "price": 6.99 },
  { "id": 19, "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 20, "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143", "title": "Pizza", "description": "Delicious pizza with fresh toppings and cheese.", "price": 5.99 },
  { "id": 21, "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9", "title": "Pasta", "description": "Italian pasta with a rich tomato sauce.", "price": 7.99 },
  
  { "id": 22, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 23, "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591", "title": "Pizza", "description": "Cheesy pizza with a variety of toppings.", "price": 8.99 },
  { "id": 24, "image": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8", "title": "Pasta", "description": "Italian pasta with a rich tomato sauce.", "price": 7.99 },
  { "id": 25, "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", "title": "Salad", "description": "Fresh garden salad with a variety of vegetables.", "price": 6.99 },
  { "id": 26, "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 27, "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143", "title": "Pizza", "description": "Delicious pizza with fresh toppings and cheese.", "price": 5.99 },
  { "id": 28, "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9", "title": "Pasta", "description": "Italian pasta with a rich tomato sauce.", "price": 7.99 },
  
  { "id": 29, "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", "title": "Burger", "description": "Delicious burger with fresh lettuce and tomato.", "price": 5.99 },
  { "id": 30, "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591", "title": "Pizza", "description": "Cheesy pizza with a variety of toppings.", "price": 8.99 }
];



const productTokens = [];
const tokenizeProducts = ()=>{
  for(let i=0;i<menuItemsData.length;i++){
    const title = menuItemsData[i].title.replace(/[a-zA-Z0-9]/g, '');
    const description = menuItemsData[i].description.replace(/[a-zA-Z0-9]/g, '');
    const tokens = title.split(' ').concat(description.split(' '));
    productTokens.push({id: menuItemsData[i].id, tokens: tokens});
  }
  return productTokens;
}

tokenizeProducts();
