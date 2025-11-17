const products = [
  { id: 1, name: 'iPhone 14', category: 'Electronics', price:90000 },
  { id: 2, name: 'Nike Shoes', category: 'Footwear', price:9000 },
  { id: 3, name: 'Samsung TV', category: 'Electronics', price:20000 },
];

// 'searching products based on name'
// const search = (query) => {
//   return products.filter(p =>
//     p.name.toLowerCase().includes(query.toLowerCase()) ||
//     p.category.toLowerCase().includes(query.toLowerCase())
//   );
// };
// console.log(search('nike')); // Nike Shoes


// 'Filter Products by Price Range'
// const filterByPrice = (min, max) => {
//   return products.filter(p => p.price >= min && p.price <= max);
// };

// console.log(filterByPrice(1000,100000)); 


// 'Add to cart and total amount calc'
// let cart = [];

// const addToCart = (productId) => {
//   const product = products.find(p => p.id === productId);
//   if (!product) return;

//   const cartItem = cart.find(item => item.id === productId);
//   if (cartItem) {
//     cartItem.quantity += 1;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }
// };

// const getTotal = () => {
//   return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// };

// addToCart(1); 
// addToCart(1); 

// console.log(cart);


// 'sorting by price'
// products.sort((a, b) => a.price - b.price);
// console.log(products);

// const names = ["Varun", "ramesh", "Anita", "teja"];
// //names.sort();
// names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(names);